'use client';

import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
	const props = useTheme();

	let { theme } = props;
	const { systemTheme, setTheme } = props;

	if (theme === 'system') {
		theme = systemTheme;
	}

	return (
		<div className='flex'>
			<a
				id="dark-mode-toggle"
				className="relative w-12 text-8 text-[color:var(--alt-fg-color)] bg-[color:var(--alt-bg-color)] rounded-[0.2rem] opacity-50 transition-all duration-[0.25s] ease-in hover:text-[color:var(--alt-fg-color)] focus:text-[color:var(--alt-fg-color)] hover:opacity-50 focus:opacity-50 md:hover:text-[color:var(--link-color)] md:focus:text-[color:var(--link-color)] md:hover:opacity-100 md:focus:opacity-100"
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				<i className="fa fa-adjust fa-fw absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"></i>
			</a>
		</div>
	);
}