<?php

declare(strict_types=1);

namespace App\Twig;

use Twig\TwigFunction;
use Twig\Extension\AbstractExtension;

final class AssetExtension extends AbstractExtension
{
	private ?array $manifest = null;

	/** @return TwigFunction[] */
	public function getFunctions(): array
	{
		return [
			new TwigFunction('asset', [$this, 'getAsset'], ['is_safe' => ['html']])
		];
	}

	public function getAsset(string $name): string
	{
		return $this->getFromManifest($name);
	}

	private function getFromManifest(string $entry): string
	{
		$this->manifest ??= json_decode( file_get_contents( __DIR__ . '/../../public/build/manifest.json' ), true );

		return $this->manifest[$entry];
	}
}