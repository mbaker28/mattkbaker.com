import PageHeader from "@/components/page-header";
import { projects } from "@/app/lib/data";
import styles from "@/app/styles/technologies.module.css";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Projects | Matthew Baker',
	description: 'Projects page'
};

export default function Page() {
	return (
		<section className="container">
			<article>
				<PageHeader title="Projects" href="/projects" />
				<p>
					A list of open source projects I have worked on.
				</p>
				<div>
					{projects.map(project => {
						return (
							<div key={project.title} className="box-shadow p-6 mb-12 bg-white dark:bg-zinc-800">
								<div className="grid md:grid-cols-8 md:gap-8">
									<div className="md:col-span-6 md:order-2">
										<h3 className="font-medium leading-snug m-0">
											<a href={project.href} target="_blank" className="no-underline text-inherit hover:text-[color:var(--link-color)]">
												<span>{project.title}</span>
												<span> <i className="fa-solid fa-arrow-up-right-from-square"></i></span>
											</a>
										</h3>
										<p dangerouslySetInnerHTML={{ __html: project.description }} />
										<ul className={styles['technologies-used']}>
											{project.technologies.map(technology => {
												return (
													<li key={technology}>
														<div>{technology}</div>
													</li>
												);
											})}
										</ul>
									</div>
									<div className="mt-8 md:m-auto md:col-span-2 md:order-1">
										<Image
											alt={project.image.alt}
											src={project.image.src}
											width={project.image.width}
											height={project.image.height}
											style={{ width: '200px', height: 'auto' }}
										/>
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