<?php

declare(strict_types=1);

use DI\ContainerBuilder;
use Dotenv\Dotenv;

require_once __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv::createImmutable(dirname( __DIR__ ));
$dotenv->load();

$builder = new ContainerBuilder();

if ($_ENV['APP_ENV'] === 'prod') {
	$builder->enableCompilation(__DIR__ . '/../var/cache');
}

$builder->addDefinitions(__DIR__ . '/services.php');

return $builder->build();