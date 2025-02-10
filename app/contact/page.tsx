import PageHeader from "@/components/page-header";
import Contact from "@/components/contact";

export default function Page() {
	return (
		<section className="container">
			<PageHeader title="Contact" href="/contact" />
			<div className="box-shadow bg-white dark:bg-zinc-800 p-6">
				<Contact />
			</div>
		</section>
	);
}