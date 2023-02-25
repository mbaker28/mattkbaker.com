<?php

declare(strict_types=1);

use Twig\Environment;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use FastRoute\Dispatcher;

$container = require __DIR__ . '/../app/bootstrap.php';
$dispatcher = require __DIR__ . '/../app/routes.php';

$request = Request::createFromGlobals();

$route = $dispatcher->dispatch($request->getMethod(), $request->getPathInfo());

$status = Response::HTTP_OK;

$response = null;
$errorInfo = null;

switch ($route[0]) {
    case Dispatcher::NOT_FOUND:
        $status = Response::HTTP_NOT_FOUND;
        $response = new Response( $container->get(Environment::class)->render('404.html.twig'), $status );

        break;

    case Dispatcher::METHOD_NOT_ALLOWED:
        $status = Response::HTTP_METHOD_NOT_ALLOWED;
        $errorInfo = sprintf('%s not allowed on this route.', $request->getMethod());

        break;

    case Dispatcher::FOUND:
        $controller = $route[1];
        $parameters = $route[2];

        try {
            $response = $container->call($controller, $parameters);
        } catch (Throwable $e) {
            $status = Response::HTTP_INTERNAL_SERVER_ERROR;
            $errorInfo = $e->getMessage();
        }

        break;
}

if (!$response) {
    $response = new Response(
        $container->get(Environment::class)->render('error.html.twig', ['errorInfo' => $errorInfo]),
        $status
    );
}

$response->send();