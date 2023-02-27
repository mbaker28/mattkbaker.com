<?php

declare(strict_types=1);

namespace App\Twig;

use Twig\TwigFunction;
use Twig\Extension\AbstractExtension;
use Michelf\Markdown;

final class MarkdownExtension extends AbstractExtension
{
	/** @return TwigFunction[] */
	public function getFunctions(): array
	{
		return [
			new TwigFunction('parse_markdown', [$this, 'parseMarkdown'], ['is_safe' => ['html']])
		];
	}

	public function parseMarkdown(string $file, string $dir = __DIR__ . '/../../public'): string
	{
		$contents = file_get_contents(rtrim($dir, '\\/') . '/' . $file);
		return Markdown::defaultTransform($contents);
	}
}