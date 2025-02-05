'use client';

import Link from "next/link";

export default function NavItem({ href, children }: { href: string, children: React.ReactNode }) {
	return (
		<li className="float-none m-0 text-center md:text-left md:float-left relative">
			<Link
				href={href}
				className="inline text-[1.7rem] font-[var(--font-family)] font-semibold text-[color:var(--fg-color)] hover:text-[color:var(--link-color)] focus:text-[color:var(--link-color)] ml-4 mr-4 leading-[5rem] md:leading-normal"
			>
				{children}
			</Link>
		</li>
	);
}