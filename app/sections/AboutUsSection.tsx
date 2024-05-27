import Image from "next/image";
import React from "react";

export default function AboutUsSection() {
	return (
		<section id="#about-us" className="flex w-full max-w-7xl card overflow-hidden min-h-[30rem]">
			<div className="flex gap-6 flex-col w-full h-full p-[4rem] justify-center my-auto">
				<p className="header">Get to know us</p>
				<p className="text">
					We are a group of talented individuals from different delivery backgrounds. Through our collective experience
					working together, we have found that creating a cooperative yields greater value for our clients. <br />
					Our unique mix of skills allows us to have a wide offering including consultancy, design, architecture,
					development, operations, training, and support. We are not a digital agency, yet we deliver all the services
					that one would—without the overheads.
				</p>
			</div>
			<div className="relative w-full min-w-[50%]">
				<Image
					src="/images/team-img-min.jpg"
					className="rounded-md "
					fill
					alt="Image of the team"
					style={{ objectFit: "cover" }}
				/>
			</div>
		</section>
	);
}
