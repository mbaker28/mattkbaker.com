<?php

declare(strict_types=1);

namespace App\Controller;

use Twig\Environment;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

final class HomeController extends AbstractController
{
	public function __invoke(): Response
	{
		return $this->render('home.html.twig');
	}
}