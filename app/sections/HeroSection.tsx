import Image from "next/image";
import React from "react";

export default function HeroSection() {
	return (
		<section
			id="/"
			className="flex relative mb-[6rem] w-full flex-col card items-center justify-center min-h-[72svh] rounded-md overflow-hidden"
		>
			<Image
				src="https://images.unsplash.com/photo-1570342457566-0002e712eda3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				alt="hero"
			/>
			<div className="flex text-white flex-col items-center w-full justify-center flex-grow  backdrop-blur-none bg-black/30">
				<div className="z-10 flex items-center text-center text-[2.25rem] md:text-[4rem] lg:text-[4rem] tracking-[0.1rem] leading-tight">
					<h1 className="font-semibold">CREATING </h1>
					<h2 className="font-semibold ml-2 xl:ml-4">custom</h2>
				</div>
				<div className="z-10 text-[2.1rem] md:text-[3rem] lg:text-[3.5rem] flex items-baseline tracking-[0.1rem] leading-tight">
					<h2 className="mr-2 xl:mr-4 font-semibold">digital</h2>
					<h1 className="font-semibold">SOLUTIONS </h1>
				</div>
				<p className="z-10 mt-6 text-sm px-10 lg:px-0 lg:text-md text-center max-w-lg font-light">
					We are a cooperative of like minded professionals skilled at solving problems and creating excellent products
					for today&apos;s digital world.
				</p>

				<div className="z-10 flex gap-6 mt-8">
					{/* <button className="button">Contact</button> */}
					<button className="button light">Services</button>
				</div>
			</div>
		</section>
	);
}
