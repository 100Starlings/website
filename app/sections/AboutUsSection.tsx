import Image from "next/image";
import React from "react";
import GroupImage from "../../public/images/team/Group.jpeg";

export default function AboutUsSection() {
	return (
		<section
			id="about"
			className="flex flex-col scroll-pt-[4rem] sm:flex-row-reverse w-full max-w-7xl card overflow-hidden min-h-[35rem]"
		>
			<div id="team-image" className="relative w-full min-w-[50%] min-h-[40svh] overflow-hidden rounded-xl">
				<Image src={GroupImage} className="rounded-xl" alt="team-image" fill style={{ objectFit: "cover" }} />
			</div>

			<div id="team-description" className="flex gap-6 flex-col w-full h-full p-8 sm:p-16 justify-center my-auto">
				<p className="header font-extrabold">Get to know us</p>
				<p className="text-md font-light text-slate-600 dark:text-white leading-loose">
					Our journey began in 2015, primarily with custom Ruby on Rails development, and we have since expanded to
					provide end-to-end digital solutions.
				</p>

				<p className="text-md font-light text-slate-600 dark:text-white leading-loose">
					Some of our experience includes delivering mobile applications, building ETL data pipelines with Elixir and
					AWS, conducting thorough UX/UI research and providing strategic project guidance.
				</p>

				<p className="text-md font-light text-slate-600 dark:text-white leading-loose">
					Operating from the UK, Hungary and Brazil, we align our working hours with UK time zones. Known for our
					reliability, we've often served as a trusted partner within integrated teams.
				</p>
			</div>
		</section>
	);
}
