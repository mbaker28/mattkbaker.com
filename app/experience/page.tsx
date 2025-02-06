import styles from "@/app/styles/technologies.module.scss";
import Link from "next/link";

type Experience = {
	company: string,
	jobTitle: string,
	href: string,
	dateFrom: string|number,
	dateTo: string|number,
	jobDescription: string,
	technologies: string[]
}

const experience: Experience[] = [
	{
		company: 'Wolfe Automotive Group LLC',
		jobTitle: 'PHP Developer',
		href: 'https://jaywolfe.com',
		dateFrom: 2021,
		dateTo: 'Present',
		jobDescription: `Wrote server-side and client-side code for WordPress plugins using PHP, HTML, CSS, and JavaScript. Wrote VIN and license plate scanner using OCR technology to significantly improve company's process of checking in customer vehicles for service. Created plugin and theme updater using WordPress's filter hooks to keep plugins in sync across all dealership sites. Created store locator to greatly improve scheduling service appointments across several stores.`,
		technologies: [
			'PHP',
			'JavaScript',
			'TypeScript',
			'WordPress',
			'MySQL'
		]
	},

	{
		company: 'Creekstone Farms Premium Beef LLC',
		jobTitle: 'Programmer',
		href: 'https://creekstonefarms.com',
		dateFrom: 2017,
		dateTo: 2021,
		jobDescription: `Used PHP along with JavaScript to design web-based reports for employees. Wrote PHP scripts to send automated reports and fix data within production database. Developed automated process for Walmart Inc. to pull live data to SFTP server for the SAP. Trained coworkers on employee dashboard to improve effectiveness and instigated suggestions for improvements. Created views and automated reports in ERP system using SQL.`,
		technologies: [
			'PHP',
			'JavaScript',
			'C#',
			'MS SQL'
		]
	}
];

export default function Page() {
	return (
		<section className="container">
			<article>
				<header>
					<h1>
						<Link className="title-link" href="/experience">Experience</Link>
					</h1>
				</header>
			</article>
			<div>
				{experience.map((item) => {
					return (
						<div key={item.company} className="grid mb-12 md:grid-cols-8 md:gap-4">
							<div className="md:col-span-2">
								{item.dateFrom} &mdash; {item.dateTo}
							</div>
							<div className="md:col-span-6">
								<h3 className="font-medium leading-snug m-0">
									<a href={item.href} target="_blank" className="no-underline text-inherit">
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
		</section>
	);
}