import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductSection() {
	return (
		<section id="product" className="flex flex-col lg:flex-row w-full max-w-7xl card overflow-hidden min-h-[40rem]">
			<div className="relative w-full min-w-[50%] min-h-[40svh] bg-white/10 bg-gradient-to-tr from-green/40 to-blue/20 rounded-xl overflow-hidden">
				<div className="absolute w-full h-full rounded-xl z-0 bg-black/60">
					<Image
						src="https://images.unsplash.com/photo-1596387451312-ba03febbbbe5?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="hero"
						fill
						style={{ objectFit: "cover", zIndex: "0" }}
						className="image"
					/>
				</div>
				<Image
					src="/images/projects/rubyblok-boilerplate.png"
					className="rounded-xl overflow-hidden mx-auto card-img-max-width"
					layout="fill"
					objectPosition="center"
					objectFit="contain"
					alt="Image of the team"
				/>
			</div>
			<div className="flex gap-6 flex-col w-full h-full p-8 lg:p-[4rem] justify-center my-auto">
				<p className="header">Our first open-source project: Rubyblok</p>
				<p className="text">
					Discover how we helped a client to enhance their content management with
					<Link href="https://www.rubyblok.com/" target="_blank" rel="noopener noreferrer">
						<span className="text-green font-semibold leading-7">&nbsp;Rubyblok</span>
					</Link>
					, our open-source project for headless CMS integration with Rails. This solution offers content caching,
					visual editing and cross-platform synchronization. From streamlining content updates to empowering content
					editors, learn how Rubyblok can build up your digital presence.
					<Link href="https://www.rubyblok.com/">
						<span className="text-green font-semibold leading-7"> Learn more &rsaquo;</span>
					</Link>
				</p>
			</div>
		</section>
	);
}
