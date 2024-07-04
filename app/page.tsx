import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import Header from "./components/Header";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutUsSection from "./sections/AboutUsSection";
import OurTeamSection from "./sections/OurTeamSection";
import ContactSection from "./sections/ContactSection";
import ClientsSection from "./sections/ClientsSection";
import PricingSection from "./sections/PricingSection";
import Link from "next/link";
import ProductSection from "./sections/ProductSection";
import RecentClientsSection from "./sections/RecentClientsSection";

export default function Home() {
	return (
		<main className="flex min-h-screen w-full pt-[3.75rem] flex-col items-center justify-between overflow-x-hidden">
			<HeroSection />
			<ServicesSection />
			<RecentClientsSection />
			<AboutUsSection />
			<ProjectsSection />
			<ClientsSection />
			<ProductSection />
			<OurTeamSection />
			<PricingSection />
			<ContactSection />
		</main>
	);
}
