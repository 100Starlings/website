import Image from "next/image";
import React from "react";
import GroupImage from "../../public/images/team/Group.jpeg"

export default function AboutUsSection() {
	return (
		<section
			id="about"
			className="flex flex-col scroll-pt-[4rem] lg:flex-row w-full max-w-7xl card overflow-hidden min-h-[35rem]"
		>
			<div className="flex gap-6 flex-col w-full h-full p-8 lg:p-[4rem] justify-center my-auto">
				<p className="header">Get to know us</p>
				<p className="xs-text">
				Since 2015, 100Starlings has thrived as a cooperative of freelancers, functioning seamlessly as a digital agency. Our team initially carved out a niche with custom Ruby on Rails development, but over the years, we've broadened our scope to include DevOps, UX/UI design, testing, and security, delivering a holistic approach to digital solutions.
				<br/> <br/>
				As we've grown, so has our tech stack and the range of tools we employ. Our accomplishments include delivering mobile applications, developing ETL data pipelines with Elixir and AWS, conducting in-depth UX/UI research, and providing strategic project guidance. This extensive technical capability enables us to meet diverse client needs with precision and expertise.
				<br/> <br/>
				Our reputation for excellence is evidenced through client recommendations. Operating from the UK, Hungary, and Brazil, we align our working hours with UK time zones, ensuring smooth collaboration. We frequently serve as a trusted delivery partner within integrated teams. One of our clients aptly described us as “their commando team deployed to sort out the issues,” underscoring the trust and reliability that define our partnerships.
				</p>
			</div>
			<div className="relative w-full min-w-[50%] min-h-[40svh] overflow-hidden rounded-xl">
				<Image
					src={GroupImage}
					className="rounded-xl"
					alt="Image of the team"
					fill
					style={{ objectFit: "cover" }}
				/>
			</div>
		</section>
	);
}
