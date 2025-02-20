import PageHeader from "@/components/page-header";
import Contact from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Contact | Matthew Baker',
	description: 'Contact page'
};

export default function Page() {
	return (
		<section className="container">
			<PageHeader title="Contact" href="/contact" />
			<div className="box-shadow bg-white dark:bg-zinc-700 p-6">
				<Contact />
			</div>
		</section>
	);
}