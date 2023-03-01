<?php

declare(strict_types=1);

namespace App\Controller;

use Twig\Environment;
use Symfony\Component\HttpFoundation\Response;

final class ContactController extends AbstractController
{
	public function __invoke(): Response
	{
		return $this->render('contact.html.twig', [
			'title' => 'Contact',
			'title_link' => '/contact'
		]);
	}
}