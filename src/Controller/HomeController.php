<?php

declare(strict_types=1);

namespace App\Controller;

use Twig\Environment;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class HomeController
{
	public function __construct(private Environment $twig)
	{
	}

	#[Route('/', name: 'home')]
	public function __invoke(): Response
	{
		return new Response(
			$this->twig->render('home.html.twig')
		);
	}
}