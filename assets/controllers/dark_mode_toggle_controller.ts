import { Controller } from '@hotwired/stimulus';

declare var localStorage: Storage;

export default class extends Controller<HTMLDivElement> {
	private darkModeMediaQuery: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

	public initialize(): void {
		if (localStorage.getItem("colorscheme")) {
			this.setTheme(localStorage.getItem("colorscheme"));
		} else if (document.body.classList.contains('colorscheme-light') || document.body.classList.contains('colorscheme-dark')) {
			this.setTheme(document.body.classList.contains('colorscheme-dark') ? 'dark' : 'light');
		} else {
			this.setTheme(this.darkModeMediaQuery.matches ? 'dark' : 'light');
		}
	}

	public connect(): void {
		this.darkModeMediaQuery.addEventListener<'change'>('change', (e: MediaQueryListEvent) => {
			this.setTheme(e.matches ? 'dark' : 'light');
		});
	}

	public toggle() {
		const theme = document.body.classList.contains('colorscheme-dark') ? 'light' : 'dark';
		this.setTheme(theme).rememberTheme(theme);
	}

	private setTheme(theme: string): this {
		document.body.classList.remove('colorscheme-auto');
		let inverse = theme === 'dark' ? 'light' : 'dark';
		document.body.classList.remove(`colorscheme-${inverse}`);
		document.body.classList.add(`colorscheme-${theme}`);
		document.documentElement.style['color-scheme'] = theme;
	
		document.dispatchEvent(new Event('themeChanged'));

		return this;
	}

	private rememberTheme(theme: string): this {
		localStorage.setItem('colorscheme', theme);

		return this;
	}
}