"use client";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutUsSection from "./sections/AboutUsSection";
import OurTeamSection from "./sections/OurTeamSection";
import ContactSection from "./sections/ContactSection";
import ClientsSection from "./sections/ClientsSection";
import ProductSection from "./sections/ProductSection";
import TestimonialSection from "./sections/TestimonialSection/TestimonialSection";
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
			<TestimonialSection />
			<OurTeamSection />
			<ContactSection />
		</main>
	);
}
