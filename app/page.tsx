import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import Header from "./components/Header";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutUsSection from "./sections/AboutUsSection";
import OurTeamSection from "./sections/OurTeamSection";
import ContactSection from "./sections/ContactSection";
import PricingSection from "./sections/PricingSection";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
			<HeroSection />
			<ServicesSection />
			<AboutUsSection />
			<ProjectsSection />
			<h1 className="header mb-10">Meet the team</h1>
			<OurTeamSection />
			<PricingSection />
			<ContactSection />
			<footer className="flex flex-col w-full max-w-7xl p-4 lg:px-0 mx-auto h-auto justify-between">
				<div className="flex z-40 gap-4 justify-center">
					<p className="text-sm">100Starlings © 2024</p>
					<p className="opacity-50">|</p>
					<Link href="/careers">
						<p className="text-sm">Careers</p>
					</Link>
				</div>
			</footer>
		</main>
	);
}
