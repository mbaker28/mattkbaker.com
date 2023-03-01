<?php

declare(strict_types=1);

namespace App\Controller;

use Twig\Environment;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

final class ProjectController extends AbstractController
{
	public function __invoke(): Response
	{
		return $this->render('projects.html.twig', [
			'title' => 'Projects',
			'title_link' => '/projects'
		]);
	}
}