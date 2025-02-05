'use client';

import Link from "next/link";
import NavItem from "./nav-item";



export default function NavContainer() {
	return (
		<nav className="h-24 w-full">
			<section className="container">
				<Link
					href="/"
					className="tracking-[0.1rem] inline text-[1.7rem] font-[var(--font-family)] font-semibold text-[var(--fg-color)]"
				>
					Matthew Baker
				</Link>
				<input id="menu-toggle" type="checkbox" className="md:hidden" />
				<label className="float-right" htmlFor="menu-toggle">
					<i className="fa fa-solid fa-xmark"></i>
				</label>
				<ul className="relative -top-[20rem] right-0 z-5 invisible opacity-0 p-0 max-h-[100rem] w-full bg-[var(--bg-color)] border-t-solid border-t-[2px] border-t-[color:var(--alt-bg-color)] border-b-solid border-b-[2px] border-b-[color:var(--alt-bg-color)] transition-opacity">
					<NavItem href="/">Home</NavItem>
					<NavItem href="/experience">Experience</NavItem>
					<NavItem href="/projects">Projects</NavItem>
					<NavItem href="/contact">Contact</NavItem>
				</ul>
			</section>
		</nav>
	)
}