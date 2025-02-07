'use client';

import ThemeSwitcher from "./theme-switcher";

export default function FloatContainer() {
	return (
		<div
			className="flex flex-row bottom-8 right-8 z-100 fixed text-[1.6em]"
		>
			<div className="flex mr-8">
				<a
					id="download-resume"
					href="/resume.docx"
					className="group text-8 opacity-50 text-[color:var(--alt-fg-color)] bg-[color:var(--alt-bg-color)] hover:text-[color:var(--alt-fg-color)] focus:text-[color:var(--alt-fg-color)] hover:opacity-50 focus:opacity-50 md:hover:text-[color:var(--link-color)] md:focus:text-[color:var(--link-color)] md:hover:opacity-100 md:focus:opacity-100"
				>
					<i className="fa-solid fa-cloud-arrow-down"></i>
					<span
						className="hidden group-hover:inline group-focus:inline"
						>
							Download Resume
					</span>
				</a>
			</div>
			<ThemeSwitcher />
		</div>
	)
}