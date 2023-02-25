<?php

declare(strict_types=1);

use Twig\TwigFunction;
use Twig\Loader\FilesystemLoader;
use Twig\Environment;
use App\Twig\EntryPointsExtension;

return [
	Environment::class => function() {
		$loader = new FilesystemLoader(__DIR__ . '/../templates');
		$twig = new Environment($loader, ['debug' => $_ENV['APP_ENV'] === 'dev']);
		$twig->addExtension(new EntryPointsExtension());

		return $twig;
	}
];