import { Experience, Project } from "./definitions";

export const experience: Experience[] = [
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
]

export const projects: Project[] = [
	{
		title: 'Portfolio Website',
		href: 'https://github.com/mbaker28/mattkbaker.com',
		description: `The source code for my portfolio website. Written in <a href="https://nextjs.org" class="no-underline text-inherit hover:text-[color:var(--link-color)]" target="_blank">Next.js</a>.`,
		image: {
			src: '/website-thumb.png',
			alt: 'My portfolio website',
			width: 2201,
			height: 1607
		},
		technologies: [
			'JavaScript',
			'TypeScript',
			'React',
			'Next.js',
			'Tailwind CSS'
		]
	},
	{
		title: 'URL Shortener',
		href: 'https://github.com/mbaker28/url-shortner',
		description: `A simple URL Shortener app written in the <a href="https://symfony.com" class="no-underline text-inherit hover:text-[color:var(--link-color)]" target="_blank">Symfony</a> framework.`,
		image: {
			src: '/url-shortener-thumb.png',
			alt: 'URL Shortener',
			width: 2296,
			height: 1277
		},
		technologies: [
			'PHP',
			'JavaScript',
			'TypeScript',
			'Symfony',
			'MySQL'
		]
	}
];