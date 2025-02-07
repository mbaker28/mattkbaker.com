import styles from "@/app/styles/technologies.module.scss";
import PageHeader from "@/app/ui/page-header";
import { experience } from "@/app/lib/data";
import Link from "next/link";

export default function Page() {
	return (
		<section className="container">
			<article>
				<PageHeader title="Experience" href="/experience" />
				<div>
					{experience.map((item) => {
						return (
							<div key={item.company} className="grid mb-12 md:grid-cols-8 md:gap-4">
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
						);
					})}
				</div>
			</article>
		</section>
	);
}