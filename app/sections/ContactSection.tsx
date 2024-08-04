import { BuildingOffice2Icon } from "@heroicons/react/20/solid";
import { EnvelopeIcon, IdentificationIcon } from "@heroicons/react/24/outline";
import EmailContactForm from "../components/EmailContactForm";
import Image from "next/image";
import BackgroundImage from "../../public/images/background/texture-contact.jpeg";

export default function ContactSection() {
	return (
		<section id="contact" className="flex w-full max-w-7xl card h-auto flex-col">
			<div className="flex flex-col lg:flex-row min-h-[40rem]">
				<div className="flex gap-6 flex-col w-full min-h-[100%] p-8 lg:p-[4rem] justify-center my-auto">
					<p className="header"> Let&apos;s solve your challenges</p>
					<p className="text mb-10">
						Connect with us and explore how we can collaborate. <br />
						One of our team members will be in touch to discuss your needs and how we can help.
					</p>
					<div className="text-[--text-darker]">
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
							<p className=" text-xs text-[--text-darker]">
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
				<div className="w-full min-w-[50%] relative flex flex-col justify-center overflow-hidden rounded-xl">
					<div className="absolute w-full h-full rounded-xl z-0 bg-black">
						<Image
							src="https://images.unsplash.com/photo-1631477076114-9123f721b9dc?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="hero"
							fill
							style={{ objectFit: "cover", zIndex: "0" }}
							className="image"
						/>
					</div>
					<EmailContactForm />
				</div>
			</div>
		</section>
	);
}
