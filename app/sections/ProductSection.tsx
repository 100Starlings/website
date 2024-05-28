import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductSection() {
	return (
		<section id="product" className="flex flex-col lg:flex-row w-full max-w-7xl card overflow-hidden min-h-[36rem]">
			<div className="relative w-full min-w-[50%] min-h-[40svh] bg-[--nav-bg] rounded-md">
				<Image
					src="/images/projects/rubyblok-boilerplate.png"
					className="rounded-md mx-auto card-img-max-width"
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
