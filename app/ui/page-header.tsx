import Link from "next/link";

export default function PageHeader({ title, href }: { title: string, href: string }) {
	return (
		<header>
			<h1 className="title">
				<Link className="title-link" href={href}>{title}</Link>
			</h1>
		</header>
	);
}