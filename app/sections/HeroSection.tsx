import Image from "next/image";
import Link from "next/link";
import React from "react";
import BackgroundImage from "../../public/images/background/texture-hero.jpeg";

export default function HeroSection() {
	return (
		<section
			id="/"
			className="relative flex flex-col items-center justify-center w-full min-h-[72svh] mb-[6rem] overflow-hidden rounded-md card"
		>
			<Image
				src="https://images.unsplash.com/photo-1641912076734-626a72927483?q=80&w=2855&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				fill
				alt="hero"
				loading="eager"
				className="image grayscale-100"
			/>
			<div className="flex flex-col items-center justify-center w-full flex-grow text-white bg-black/30 backdrop-blur-none">
				<div className="z-10 flex items-center text-center text-[1.5rem] lg:text-[4rem] tracking-[0.1rem] leading-tight">
					<h1 className="">CRAFTING CUSTOM</h1>
				</div>
				<div className="z-10 flex text-center text-[1.8rem] lg:text-[4rem] tracking-[0.1rem] leading-tight">
					<h1 className="font-bold">DIGITAL SOLUTIONS</h1>
				</div>
				<p className="z-10 mt-3 px-10 text-center text-sm lg:px-0 lg:text-md max-w-lg font-light">
					We are a dynamic team of technical experts, dedicated to transforming business challenges into efficient
					custom digital solutions.
				</p>

				<Link href="/#services" className="z-10 flex gap-6 mt-8">
					<button className="button">Services</button>
				</Link>
			</div>
		</section>
	);
}
