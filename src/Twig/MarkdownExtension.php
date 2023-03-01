<?php

declare(strict_types=1);

namespace App\Twig;

use Twig\TwigFunction;
use Twig\Extension\AbstractExtension;

final class MarkdownExtension extends AbstractExtension
{
	public function __construct(private \Parsedown $parsedown)
	{
	}

	/** @return TwigFunction[] */
	public function getFunctions(): array
	{
		return [
			new TwigFunction('parse_markdown', [$this, 'parseMarkdown'], ['is_safe' => ['html']])
		];
	}

	public function parseMarkdown(string $file, string $dir = __DIR__ . '/../../static'): string
	{
		$contents = file_get_contents(rtrim($dir, '\\/') . '/' . $file);
		return $this->parsedown->text($contents);
	}
}