import PageHeader from "../ui/page-header";

export default function Page() {
	return (
		<section className="container">
			<PageHeader title="Contact" href="/contact" />
			<strong>Email:</strong> <a href="mailto:mattbakerk@gmail.com">mattbakerk@gmail.com</a>
		</section>
	);
}