import { Controller } from '@hotwired/stimulus';

const body = document.body;
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

darkModeMediaQuery.addEventListener('change', (e) => {
	setTheme(e.matches ? 'dark' : 'light');
});

export default class extends Controller {
	initialize() {
		if (localStorage.getItem("colorscheme")) {
			setTheme(localStorage.getItem("colorscheme"));
		} else if (body.classList.contains('colorscheme-light') || body.classList.contains('colorscheme-dark')) {
			setTheme(body.classList('colorscheme-dark') ? 'dark' : 'light');
		} else {
			setTheme(darkModeMediaQuery.matches ? 'dark' : 'light');
		}
	}

	toggle() {
		const theme = body.classList.contains('colorscheme-dark') ? 'light' : 'dark';
		setTheme(theme);
		rememberTheme(theme);
	}
}

function setTheme(theme) {
	body.classList.remove('colorscheme-auto');
	let inverse = theme === 'dark' ? 'light' : 'dark';
	body.classList.remove(`colorscheme-${inverse}`);
	body.classList.add(`colorscheme-${theme}`);
	document.documentElement.style['color-scheme'] = theme;

	const event = new Event('themeChanged');
	document.dispatchEvent(event);
}

function rememberTheme(theme) {
	localStorage.setItem('colorscheme', theme);
}