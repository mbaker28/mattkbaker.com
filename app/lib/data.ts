import type { Experience, Project, Skills } from "./definitions";

export const skills: Skills[] = [
	{
		header: 'Languages',
		entries: [
			{
				title: 'PHP',
				image: {
					src: '/skills/php.png',
					alt: 'PHP',
					width: 512,
					height: 512
				},
				href: 'https://php.net'
			},
			{
				title: 'HTML5',
				image: {
					src: '/skills/html5.png',
					alt: 'HTML5',
					width: 512,
					height: 512
				},
				href: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
			},
			{
				title: 'CSS3',
				image: {
					src: '/skills/css3.png',
					alt: 'CSS3',
					width: 512,
					height: 512
				},
				href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
			},
			{
				title: 'JavaScript',
				image: {
					src: '/skills/js.png',
					alt: 'JavaScript',
					width: 512,
					height: 512
				},
				href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
			},
			{
				title: 'TypeScript',
				image: {
					src: '/skills/ts.png',
					alt: 'TypeScript',
					width: 512,
					height: 512
				},
				href: 'https://typescriptlang.org'
			},
			{
				title: 'MySQL',
				image: {
					src: '/skills/mysql.png',
					alt: 'MySQL',
					width: 512,
					height: 512
				},
				href: 'https://mysql.com'
			},
			{
				title: 'Microsoft SQL Server',
				image: {
					src: '/skills/mssql.png',
					alt: 'Micrsoft SQL Server',
					width: 512,
					height: 512
				},
				href: 'https://www.microsoft.com/en-us/sql-server'
			}
		]
	  },
	  {
		header: 'Technologies',
		entries: [
			{
				title: 'Node.js',
				image: {
					src: '/skills/nodejs.png',
					alt: 'Node.js',
					width: 512,
					height: 512
				},
				href: 'https://nodejs.org'
			},
			{
				title: 'WordPress',
				image: {
					src: '/skills/wordpress.png',
					alt: 'WordPress',
					width: 512,
					height: 512
				},
				href: 'https://wordpress.org'
			},
			{
				title: 'NPM',
				image: {
					src: '/skills/npm.png',
					alt: 'NPM',
					width: 512,
					height: 512
				},
				href: 'https://npmjs.org'
			},
			{
				title: 'Docker',
				image: {
					src: '/skills/docker.png',
					alt: 'Docker',
					width: 512,
					height: 512
				},
				href: 'https://docker.com'
			},
			{
				title: 'Git',
				image: {
					src: '/skills/git.png',
					alt: 'Git',
					width: 512,
					height: 512
				},
				href: 'https://git-scm.com'
			},
			{
				title: 'GitHub',
				image: {
					src: '/skills/github.png',
					alt: 'GitHub',
					width: 512,
					height: 512
				},
				href: 'https://github.com'
			},
			{
				title: 'Composer',
				image: {
					src: '/skills/composer.png',
					alt: 'Composer',
					width: 512,
					height: 512
				},
				href: 'https://getcomposer.org'
			},
			{
				title: 'Webpack',
				image: {
					src: '/skills/webpack.png',
					alt: 'Webpack',
					width: 512,
					height: 512
				},
				href: 'https://webpack.js.org'
			},
			{
				title: 'PostCSS',
				image: {
					src: '/skills/postcss.png',
					alt: 'PostCSS',
					width: 512,
					height: 512
				},
				href: 'https://postcss.org'
			},
			{
				title: 'Sass',
				image: {
					src: '/skills/sass.png',
					alt: 'Sass',
					width: 512,
					height: 512
				},
				href: 'https://sass-lang.com'
			},
			{
				title: 'Linux',
				image: {
					src: '/skills/linux.png',
					alt: 'Linux',
					width: 512,
					height: 512
				},
				href: 'https://linux.org'
			},
			{
				title: 'Redis',
				image: {
					src: '/skills/redis.png',
					alt: 'Redis',
					width: 512,
					height: 512
				},
				href: 'https://redis.io'
			}
		]
	  },
	  {
		header: 'Frameworks',
		entries: [
			{
				title: 'React',
				image: {
					src: '/skills/react.png',
					alt: 'React',
					width: 512,
					height: 512
				},
				href: 'https://react.dev'
			},
			{
				title: 'Next.js',
				image: {
					src: '/skills/nextjs.png',
					alt: 'Next.js',
					width: 512,
					height: 512
				},
				href: 'https://nextjs.org'
			},
			{
				title: 'Symfony',
				image: {
					src: '/skills/symfony.png',
					alt: 'Symfony',
					width: 512,
					height: 512
				},
				href: 'https://symfony.com'
			},
			{
				title: 'Tailwind CSS',
				image: {
					src: '/skills/tailwindcss.png',
					alt: 'Tailwind CSS',
					width: 512,
					height: 512
				},
				href: 'https://tailwindcss.com'
			}
		]
	  }
];

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
		description: `The source code for my portfolio website. Written in <a href="https://nextjs.org" class="no-underline hover:text-[color:var(--link-color)]" target="_blank">Next.js</a>.`,
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
		href: 'https://github.com/mbaker28/url-shortener',
		description: `A simple URL Shortener app written in the <a href="https://symfony.com" class="no-underline hover:text-[color:var(--link-color)]" target="_blank">Symfony</a> framework.`,
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
