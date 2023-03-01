<?php

declare(strict_types=1);

namespace App\Controller;

use Twig\Environment;
use Symfony\Component\HttpFoundation\Response;

final class ResumeController extends AbstractController
{
	public function __invoke(): Response
	{
		return $this->render('resume.html.twig', [
			'title' => 'Resume',
			'title_link' => '/resume'
		]);
	}
}