<?php

use FastRoute\RouteCollector;
use App\Controller\ResumeController;
use App\Controller\ProjectController;
use App\Controller\HomeController;
use App\Controller\HelloWorldController;
use App\Controller\ContactController;
use App\Controller\ExperienceController;

return FastRoute\simpleDispatcher(function (RouteCollector $r) {
	$r->addRoute('GET', '/', HomeController::class);
	$r->addRoute('GET', '/projects', ProjectController::class);
	$r->addRoute('GET', '/contact', ContactController::class);
	$r->addRoute('GET', '/experience', ExperienceController::class);
});