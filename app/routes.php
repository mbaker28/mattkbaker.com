<?php

use FastRoute\RouteCollector;
use App\Controller\ProjectController;
use App\Controller\HomeController;
use App\Controller\HelloWorldController;

return FastRoute\simpleDispatcher(function (RouteCollector $r) {
	$r->addRoute('GET', '/', HomeController::class);
	$r->addRoute('GET', '/projects', ProjectController::class);
	$r->addRoute('GET', '/hello-world', HelloWorldController::class);
});