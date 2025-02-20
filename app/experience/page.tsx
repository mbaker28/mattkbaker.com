import styles from "@/app/styles/technologies.module.css";
import PageHeader from "@/components/page-header";
import { experience } from "@/app/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Experience | Matthew Baker',
	description: 'Experience page'
};

export default function Page() {
	return (
		<section className="container">
			<article>
				<PageHeader title="Experience" href="/experience" />
				<div>
					{experience.map((item) => {
						return (
							<div key={item.company} className="box-shadow p-6 mb-12 bg-white dark:bg-zinc-700">
								<div className="grid md:grid-cols-8 md:gap-4">
									<div className="md:col-span-2">
										{item.dateFrom} &mdash; {item.dateTo}
									</div>
									<div className="md:col-span-6">
										<h3 className="font-medium leading-snug m-0">
											<a href={item.href} target="_blank" className="no-underline text-inherit hover:text-[color:var(--link-color)]">
												<span>{item.jobTitle} &mdash; </span>
												<span>{item.company}</span>
												<span> <i className="fa-solid fa-arrow-up-right-from-square"></i></span>
											</a>
										</h3>
										<p>{item.jobDescription}</p>
										<ul className={styles['technologies-used']}>
											{item.technologies.map(technology => {
												return (
													<li key={technology}>
														<div>{technology}</div>
													</li>
												);
											})}
										</ul>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</article>
		</section>
	);
}