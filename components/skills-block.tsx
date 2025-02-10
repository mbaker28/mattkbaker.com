import { skills } from "@/app/lib/data";
import { Fragment } from "react";
import Image from "next/image";

export default function SkillsBlock({ className }: { className: string }) {
	return (
		<div id="skills" className={`${className} mt-4 md:px-16 px-6 mx-auto flex flex-col items-start justify-between`}>
			<h1>Skills</h1>
			{skills.map(item => {
				return (
					<Fragment key={item.header}>
						<h3>{item.header}</h3>
						<div className="flex flex-row flex-wrap justify-center gap-6 md:gap-16 my-10 w-full">
							{item.entries.map(entry => {
								return (
									<div
										key={entry.title}
										className="flex items-center justify-center p-4 "
									>
										<a href={entry.href} target="_blank">
											<Image
												src={entry.image.src}
												title={entry.title}
												alt={entry.image.alt}
												width={entry.image.width}
												height={entry.image.height}
												className="w-12 h-12 md:w-20 md:h-20 object-contain"
											/>
										</a>
									</div>
								);
							})}
						</div>
					</Fragment>
				);
			})}
		</div>
	);
}