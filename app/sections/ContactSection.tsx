import { BuildingOffice2Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { EnvelopeIcon, IdentificationIcon } from "@heroicons/react/24/outline";
import EmailContactForm from "../components/EmailContactForm";
import Image from "next/image";

export default function ContactSection() {
	return (
		// <section
		// 	id="contact"
		// 	className="w-full max-w-screen max-w-7xl lg:flex card gap-6 p-[8rem] lg:flex-col items-center justify-center snap-start"
		// >
		// 	<p className="header mb-4 text-center mx-auto">Let&apos;s solve YOUR challenges</p>
		// 	<button className="button hidden xl:flex mx-auto">Let&apos;s talk</button>
		// </section>
		<section id="#about-us" className="flex w-full max-w-7xl card h-auto flex-col">
			<div className="flex h-[37.7rem]">
				<div className="flex gap-6 flex-col w-full min-h-[100%] p-[4rem] justify-center my-auto">
					<p className="header"> Let&apos;s solve your challenges</p>
					<p className="text mb-10">
						We are a group of talented individuals from different delivery backgrounds. Through our collective
						experience
					</p>
					<div className="text-[var(--text-darker)]">
						<div className="flex gap-4 items-center mb-[1.25rem]">
							<div className="h-5 w-5">
								<IdentificationIcon />
							</div>
							<div className=" flex flex-col text-xs gap-1 items-baseline">
								<p className="">100Starlings Ltd</p>
								<p>
									Company Number: 9479495 <br /> Registered in England and Wales
								</p>
							</div>
						</div>
						<div className="flex gap-4 items-center mb-[1.25rem]">
							<div className="h-5 w-5">
								<BuildingOffice2Icon />
							</div>
							<p className=" text-xs text-[var(--text-darker)]">
								Devonshire House, 582 Honeypot Lane, Stanmore, Middlesex <br />
								United Kingdom, HA7 1JS
							</p>
						</div>
						<div className="flex gap-4 items-center">
							<div className="h-5 w-5">
								<EnvelopeIcon />
							</div>
							<a type="email" className="text-xs">
								<p>info@100starlings.com</p>
							</a>
						</div>
					</div>
				</div>
				<div className="relative w-full min-w-[50%] p-10 rounded-m">
					<EmailContactForm />
					<Image
						src="/images/team-img-min.jpg"
						className="rounded-md z-[0] filter mix-blend-multiply brightness-[0.5] contrast-[1.2] grayscale-[0.8] opacity-[0.8] blur-[4px]"
						fill
						alt="Image of the team"
						style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
		</section>
	);
}
