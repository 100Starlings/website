"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const MobileMenu = ({ open, openNav }: { open: boolean; openNav: (isOpen: boolean) => void }) => {
	return (
		<nav className=" bottom-0 left-0 right-0 p-[2rem] h-full flex flex-col justify-between items-center">
			<ul className="flex flex-col gap-[2rem] text-xl text-center font-semibold mt-auto mb-auto">
				<li>
					<Link onClick={() => openNav(!open)} href="/#	">
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
			<Link href="/#services">
				<button onClick={() => openNav(!open)} className="button light text-sm ">
					Get in touch
				</button>
			</Link>
		</nav>
	);
};

export default function Header() {
	const [open, openNav] = React.useState(false);

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
			className={
				open
					? "sticky z-50 top-0 h-screen w-screen nav-bg backdrop-blur-xl flex flex-col"
					: "sticky z-50 h-auto top-0 w-full nav-bg backdrop-blur-xl"
			}
		>
			<div className="mx-auto px-4 py-1 lg:py-3 flex justify-between items-center max-w-7xl w-full">
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

				<button onClick={() => openNav(!open)} className="lg:hidden text-[--text-light] h-10 w-10">
					{open ? <XMarkIcon /> : <Bars3Icon />}
				</button>
			</div>
			{open && <MobileMenu open={open} openNav={openNav} />}
		</header>
	);
}
