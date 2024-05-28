import Image from "next/image";
import React from "react";

export default function HeroSection() {
	return (
		<section
			id="/"
			className="flex relative mb-[6rem] w-full flex-col card items-center justify-center min-h-[72svh] rounded-md overflow-hidden"
		>
			<Image
				src="/images/team-img-min.jpg"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				alt="Hero background"
				quality={100}
				className="z-[0] blur-[0px] brightness-[0.9] contrast-[1.1] grayscale-[1] opacity-[0]"
			/>
			<div className="flex flex-col items-center w-full justify-center flex-grow bg-black/80 backdrop-blur-sm bg-gradient-to-tr from-green/20 to-white/20">
				<div className="z-10 flex items-center text-center text-[2.25rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[6rem] tracking-[0.1rem] leading-tight">
					<h1 className="font-semibold">CREATING </h1>
					<h2 className="font-semibold ml-2 xl:ml-4">custom</h2>
				</div>
				<div className="z-10 text-[2.1rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[5.5rem] flex items-baseline tracking-[0.1rem] leading-tight">
					<h2 className="mr-2 xl:mr-4 font-semibold">digital</h2>
					<h1 className="font-semibold">SOLUTIONS </h1>
				</div>
				<p className="z-10 mt-6 text-sm px-10 lg:px-0 lg:text-lg text-center max-w-xl font-light">
					We are a cooperative of like minded professionals skilled at solving problems and creating excellent products
					for today&apos;s digital world.
				</p>

				<div className="z-10 flex gap-6 mt-8">
					<button className="button">Contact</button>
					<button className="button light">Services</button>
				</div>
			</div>
		</section>
	);
}
