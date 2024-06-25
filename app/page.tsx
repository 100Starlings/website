import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import Header from "./components/Header";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutUsSection from "./sections/AboutUsSection";
import OurTeamSection from "./sections/OurTeamSection";
import ContactSection from "./sections/ContactSection";
import ClientsSection from "./sections/ClientsSection"
import PricingSection from "./sections/PricingSection";
import Link from "next/link";
import ProductSection from "./sections/ProductSection";
import ClientsSection from "./sections/ClientsSection";

export default function Home() {
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-between overflow-x-hidden">
			<HeroSection />
			<ClientsSection />
			<ServicesSection />
			<ClientsSection />
			<AboutUsSection />
			<ProjectsSection />
			<ProductSection />
			<OurTeamSection />
			<PricingSection />
			<ContactSection />
		</main>
	);
}
