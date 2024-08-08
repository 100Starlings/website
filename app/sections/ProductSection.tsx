import Image from "next/image";
import Link from "next/link";
import React from "react";
import BackgroundImage from "../../public/rubyblok_green_logo 1.svg";

export default function ProductSection() {
	return (
		<section id="product" className="flex flex-col lg:flex-row w-full max-w-7xl card overflow-hidden min-h-[40rem]">
			<div className="relative w-full min-w-[50%] min-h-[40svh] bg-white/10 bg-gradient-to-tr from-green/40 to-blue/20 rounded-xl overflow-hidden">
				<div className="absolute w-full h-full rounded-xl z-0 bg-black/60"></div>
				<div className="rounded-xl z-0">
					<Image
						src="https://images.unsplash.com/photo-1631477076110-2b8c1fe0f3cc?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						fill
						style={{ objectFit: "cover", zIndex: "0" }}
						className="image z-0"
						alt="Rubyblok"
					/>
				</div>
				<Image
					style={{ objectFit: "cover" }}
					src="/images/projects/rubyblok-boilerplate.png"
					className="rounded-lg overflow-hidden mx-auto card-img m-auto p-4 lg:p-0 z-10 absolute left-0 right-0 top-0 bottom-0"
					alt="Image of the team"
					width={500}
					height={500}
				/>
			</div>
			<div className="flex gap-6 flex-col w-full h-full p-8 lg:p-[4rem] justify-center my-auto">
				<p className="header">
					Meet Rubyblok: <br /> our open-source gem for headless CMS integration with Rails
				</p>
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
