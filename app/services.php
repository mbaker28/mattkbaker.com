<?php

declare(strict_types=1);

use App\Twig\AssetExtension;
use Twig\TwigFunction;
use Twig\Loader\FilesystemLoader;
use Twig\Environment;
use App\Twig\MarkdownExtension;
use App\Twig\EntryPointsExtension;

return [
	Environment::class => function() {
		$loader = new FilesystemLoader(__DIR__ . '/../public/templates');
		$twig = new Environment($loader, ['debug' => $_ENV['APP_ENV'] === 'dev']);
		$twig->addExtension(new EntryPointsExtension());
		$twig->addExtension(new AssetExtension());

		return $twig;
	}
];