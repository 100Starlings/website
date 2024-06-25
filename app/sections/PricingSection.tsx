import Link from "next/link";
import React from "react";

export default function PricingSection() {
	return (
		<section id="pricing" className="w-full max-w-7xl flex flex-col items-center">
			<p className="header">Our services</p>
			<div className="flex flex-col lg:flex-row w-full gap-6 mt-10 items-center">
				<div className="w-full rounded-xl bg-[--card-bg] backdrop-blur-lg p-10 flex flex-col gap-6 h-full">
					<h2 className="text-left text-xl font-semibold leading-8 tracking-[0.1rem] text-[var(--text-light)]">
						Development
					</h2>
					<p className="text-left text-sm text-gray-400">
						We build bespoke web applications, mobile apps and websites from the ground up, as well as working with
						existing products.
					</p>
					<span>
						<h2 className="text-left text-3xl font-semibold leading-8 tracking-[0.1rem] text-[var(--text-light)]">
							Custom
						</h2>
					</span>
					<span>
						<ul className="text-left list-disc pl-4 text-sm text-gray-400">
							<li>Web Applications</li>
							<li>Mobile Applications</li>
							<li>Website Development</li>
							<li>API Development</li>
						</ul>
					</span>
					<Link href="/#contact" className="mt-10 mx-auto button light w-full flex flex-col items-center">
						<span className="mx-auto">Get a quote</span>
					</Link>
				</div>
				<div className="w-full rounded-xl bg-[--card-bg] backdrop-blur-lg p-10 flex flex-col gap-6 h-full">
					<h2 className="text-left text-xl font-semibold leading-8 tracking-[0.1rem] text-[var(--text-light)]">
						Consulting
					</h2>
					<p className="text-left text-sm text-gray-400">
						We build bespoke web applications, mobile apps and websites from the ground up, as well as working with
						existing products.
					</p>
					<span className="flex items-baseline gap-x-1">
						<h2 className="text-left text-3xl font-semibold leading-8 tracking-[0.1rem] text-[var(--text-light)]">
							£800
						</h2>
						<p className="text-left font-bold list-disc text-sm">/ day</p>
					</span>
					<span>
						<ul className="text-left list-disc pl-4 text-sm text-gray-400">
							<li>Web Applications</li>
							<li>Mobile Applications</li>
							<li>Website Development</li>
							<li>API Development</li>
						</ul>
					</span>
					<Link href="/#contact" className="mt-10 mx-auto button dark w-full flex flex-col items-center">
						<span className="mx-auto ">Speak to an expert</span>
					</Link>
				</div>
				<div className="w-full rounded-xl bg-[--card-bg] backdrop-blur-lg p-10 flex flex-col gap-6 h-full">
					<h2 className="text-left text-xl font-semibold leading-8 tracking-[0.1rem] text-[var(--text-light)]">
						DevOps
					</h2>
					<p className="text-left text-sm text-gray-400">
						We build bespoke web applications, mobile apps and websites from the ground up, as well as working with
						existing products.
					</p>
					<span className="flex items-baseline gap-x-1">
						<h2 className="text-left text-3xl font-semibold leading-8 tracking-[0.1rem] text-[var(--text-light)]">
							£300
						</h2>
						<p className="text-left font-bold list-disc text-sm">/ day</p>
					</span>
					<span>
						<ul className="text-left list-disc pl-4 text-sm text-gray-400">
							<li>Web Applications</li>
							<li>Mobile Applications</li>
							<li>Website Development</li>
							<li>API Development</li>
						</ul>
					</span>
					<Link href="/#contact" className="mt-10 button light w-full flex flex-col items-center">
						<span className="mx-auto">Get in touch</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
