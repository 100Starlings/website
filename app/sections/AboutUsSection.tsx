import Image from "next/image";
import React from "react";

export default function AboutUsSection() {
	return (
		<section id="about" className="flex flex-col lg:flex-row w-full max-w-7xl card overflow-hidden min-h-[40rem]">
			<div className="flex gap-6 flex-col w-full h-full p-8 lg:p-[4rem] justify-center my-auto">
				<p className="header">Get to know us</p>
				<p className="text">
					We are a group of talented individuals from different delivery backgrounds. Through our collective experience
					working together, we have found that creating a cooperative yields greater value for our clients. <br />
					Our unique mix of skills allows us to have a wide offering including consultancy, design, architecture,
					development, operations, training, and support. We are not a digital agency, yet we deliver all the services
					that one would—without the overheads.
				</p>
			</div>
			<div className="relative w-full min-w-[50%] min-h-[40svh]">
				<Image
					src="https://images.unsplash.com/photo-1598160882026-6e61d16dc8c4?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					className="rounded-xl "
					fill
					alt="Image of the team"
					style={{ objectFit: "cover" }}
				/>
			</div>
		</section>
	);
}
