<?php

declare(strict_types=1);

use Twig\Environment;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use FastRoute\Dispatcher;

$container = require __DIR__ . '/app/bootstrap.php';
$dispatcher = require __DIR__ . '/app/routes.php';

$request = Request::createFromGlobals();

$route = $dispatcher->dispatch($request->getMethod(), $request->getPathInfo());

try {
    $response = match($route[0]) {
        Dispatcher::NOT_FOUND => new Response(
            $container->get(Environment::class)->render('404.html.twig'),
            Response::HTTP_NOT_FOUND
        ),

        Dispatcher::METHOD_NOT_ALLOWED => new Response(
            $container->get(Environment::class)->render('405.html.twig', [
                'request_method' => $request->getMethod()
            ]),
            Response::HTTP_METHOD_NOT_ALLOWED
        ),

        Dispatcher::FOUND => $container->call($route[1], $route[2])
    };
} catch (Throwable $e) {
    $response = new Response(
        $container->get(Environment::class)->render('error.html.twig', [
            'error_title' => 'Internal Server Error',
            'error_details' => $e->getMessage()
        ]),
        Response::HTTP_INTERNAL_SERVER_ERROR
    );
}

$response->send();