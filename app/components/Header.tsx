import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
	return (
		<header className="sticky z-50 top-0 w-full nav-bg backdrop-blur-xl">
			<div className="mx-auto px-4 py-3 flex justify-between items-center max-w-7xl w-full">
				<Link href="/">
					<Image src="/images/100-logo-line.svg" width="160" height="100" alt="Logo" />
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
				<button className="button text-sm">Get in touch</button>
			</div>
		</header>
	);
}
