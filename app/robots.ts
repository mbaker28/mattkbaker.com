import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: ['Googlebot', 'Applebot', 'Bingbot'],
				allow: '/'
			},
			{
				userAgent: 'Amazonbot',
				disallow: '/'
			}
		]
	}
}