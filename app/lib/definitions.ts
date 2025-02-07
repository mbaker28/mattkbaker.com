export type Experience = {
	company: string,
	jobTitle: string,
	href: string,
	dateFrom: string|number,
	dateTo: string|number,
	jobDescription: string,
	technologies: string[]
};

export type Project = {
	title: string,
	href: string,
	image: {
		src: string,
		alt: string,
		width: number,
		height: number
	},
	description: string,
	technologies: string[]
};