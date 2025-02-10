export type Skills = {
	header: string,
	entries: SkillEntry[]
};

export type SkillEntry = {
	title: string,
	image: ImageSource,
	href?: string
}

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
	image: ImageSource,
	description: string,
	technologies: string[]
};

export type ImageSource = {
	src: string,
	alt: string,
	width: number,
	height: number
}