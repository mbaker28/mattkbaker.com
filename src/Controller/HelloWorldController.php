<?php

declare(strict_types=1);

namespace App\Controller;

use Twig\Environment;
use Symfony\Component\HttpFoundation\Response;

class HelloWorldController
{
	public function __construct(private Environment $twig)
	{	
	}

	public function __invoke(): Response
	{
		return new Response(
			$this->twig->render('hello-world.html.twig')
		);
	}
}