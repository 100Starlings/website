import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import Header from "./components/Header";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutUsSection from "./sections/AboutUsSection";
import OurTeamSection from "./sections/OurTeamSection";
import ContactSection from "./sections/ContactSection";
import PricingSection from "./sections/PricingSection";

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
		</main>
	);
}
