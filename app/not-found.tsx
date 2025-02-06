import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Page not found",
	description: "Page not found"
}

export default function NotFound() {
	return (
		<section className="container flex items-center justify-center">
			<div className="flex flex-row">
				<h1
					className="inline-block border-r-solid border-r border-r-black/30 dark:border-r-white/30 mt-0 mr-5 mb-0 ml-0 pr-6 text-5xl font-medium align-top leading-[49px]"
				>
					404
				</h1>
				<div className="inline-block">
					<h2
						className="text-3xl leading-[49px] font-normal m-0"
					>
						Sorry, this page does not exist. You can head back to <Link href="/">homepage</Link>.
					</h2>
				</div>
			</div>
		</section>
	);
}