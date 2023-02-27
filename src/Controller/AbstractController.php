<?php

declare(strict_types=1);

namespace App\Controller;

use Twig\Environment;
use Symfony\Component\HttpFoundation\Response;

abstract class AbstractController
{
	public function __construct(private Environment $twig)
	{
	}

	protected function render(string $template, array $context = []): Response
	{
		return new Response(
			$this->twig->render($template, $context)
		);
	}
}