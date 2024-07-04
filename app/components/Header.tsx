"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const MobileMenu = ({ open, openNav }: { open: boolean; openNav: (isOpen: boolean) => void }) => {
	return (
		<nav className="fixed inset-0 p-8 h-full flex flex-col justify-between items-center z-40 translate-y-0 transition-transform duration-300">
			<ul className="flex flex-col gap-8 text-xl text-center font-semibold mt-auto mb-auto">
				<li>
					<Link onClick={() => openNav(!open)} href="/#about">
						About
					</Link>
				</li>
				<li>
					<Link onClick={() => openNav(!open)} href="/#services">
						Services
					</Link>
				</li>
				<li>
					<Link onClick={() => openNav(!open)} href="/#projects">
						Projects
					</Link>
				</li>
			</ul>
			<Link href="/#contact">
				<button onClick={() => openNav(!open)} className="button light text-sm">
					Get in touch
				</button>
			</Link>
		</nav>
	);
};

export default function Header() {
	const [open, openNav] = React.useState(false);
	const [lastScrollY, setLastScrollY] = React.useState(0);
	const [hideHeader, setHideHeader] = React.useState(false);

	React.useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				setHideHeader(true);
			} else if (currentScrollY < lastScrollY) {
				setHideHeader(false);
			}
			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [open]);

	return (
		<header
			className={`fixed z-50 top-0 ${
				open ? "h-screen w-screen" : "h-auto w-full"
			} nav-bg backdrop-blur-xl flex flex-col transition-transform duration-300 ${
				hideHeader ? "-translate-y-full" : "translate-y-0"
			}`}
		>
			<div className="mx-auto px-4 py-1 lg:py-3 flex justify-between items-center max-w-7xl w-full z-50">
				<Link href="/" className="text-[--text-light]">
					<Logo />
				</Link>
				<nav className="hidden lg:flex justify-between items-center">
					<ul className="flex space-x-6 text-sm">
						<li>
							<Link href="/#about">About</Link>
						</li>
						<li>
							<Link href="/#services">Services</Link>
						</li>
						<li>
							<Link href="/#projects">Projects</Link>
						</li>
					</ul>
				</nav>
				<Link href="/#contact">
					<button className="button light text-sm hidden lg:block">Get in touch</button>
				</Link>

				<button
					aria-label="Hamburger menu"
					onClick={() => openNav(!open)}
					className="lg:hidden text-[--text-light] h-10 w-10"
				>
					{open ? <XMarkIcon /> : <Bars3Icon />}
				</button>
			</div>
			{open && <MobileMenu open={open} openNav={openNav} />}
		</header>
	);
}
