'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "@/app/styles/nav.module.css";

const links = [
	{ name: 'Home', href: '/' },
	{ name: 'Experience', href: '/experience' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'Contact', href: '/contact' }
];

export default function NavContainer() {
	const [isChecked, setChecked] = useState(false);
	const pathname = usePathname();

	const openMenu = () => setChecked(true);
	const closeMenu = () => setChecked(false);

	return (
		<nav id="navigation" className={styles.navigation}>
			<section className="container">
				<Link
					id="nav-title"
					href="/"
					className={styles['nav-title']}
				>
					Matthew Baker
				</Link>
				<input id="menu-toggle" type="checkbox" className={styles['menu-toggle']} checked={isChecked} readOnly />
				<label className={`${styles['menu-button']} float-right`} onClick={openMenu} htmlFor="menu-toggle">
					<i className="fa fa-bars fa-fw"></i>
				</label>
				<label className={`${styles['menu-close']} float-right`} onClick={closeMenu} htmlFor="menu-toggle">
					<i className="fa fa-solid fa-xmark"></i>
				</label>
				<ul id="nav-list" className={styles['nav-list']}>
					{links.map((link) => {
						return (
							<li className={styles['nav-item']} key={link.name}>
								<Link
									key={link.name}
									href={link.href}
									onClick={closeMenu}
									className={clsx(
										{
											'!text-[color:var(--link-color)] underline': pathname === link.href
										}
									)}
								>
									{link.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</section>
		</nav>
	)
}