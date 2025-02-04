<?php

declare(strict_types=1);

namespace App\Twig;

use Twig\TwigFunction;
use Twig\Extension\AbstractExtension;

final class EntryPointsExtension extends AbstractExtension
{
	private ?array $entryPoints = null;

	/** @return TwigFunction[] */
	public function getFunctions(): array
	{
		return [
			new TwigFunction('entry_script_tags', [$this, 'renderEntryScriptTags'], ['is_safe' => ['html']]),
			new TwigFunction('entry_style_tags', [$this, 'renderEntryStyleTags'], ['is_safe' => ['html']])
		];
	}

	public function renderEntryScriptTags(string $name): string
	{
		$entry = $this->getEntry($name);

		$sources = $entry['js'];

		$tags = [];

		foreach ($sources as $source) {
			$tags[] = sprintf(
				'<script src="%s" defer></script>',
				$source
			);
		}

		return implode('', $tags);
	}

	public function renderEntryStyleTags(string $name): string
	{
		$entry = $this->getEntry($name);

		$sources = $entry['css'];

		$tags = [];

		foreach ($sources as $source) {
			$tags[] = sprintf(
				'<link rel="stylesheet" href="%s">',
				$source
			);
		}

		return implode('', $tags);
	}

	private function getEntry(string $entry): array
	{
		$this->entryPoints ??= json_decode( file_get_contents( __DIR__ . '/../../public/build/entrypoints.json' ), true )['entrypoints'];

		return $this->entryPoints[$entry];
	}
}