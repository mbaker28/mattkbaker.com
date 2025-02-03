<?php

declare(strict_types=1);

namespace App\Controller;

use Twig\Environment;
use Symfony\Component\HttpFoundation\Response;

final class ExperienceController extends AbstractController
{
	public function __invoke(): Response
	{
		return $this->render('experience.html.twig', [
			'title' => 'Experience',
			'title_link' => '/experience'
		]);
	}
}