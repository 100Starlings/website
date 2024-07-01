import Image from "next/image";
import React from "react";
import { BuildingOffice2Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { EnvelopeIcon, IdentificationIcon } from "@heroicons/react/24/outline";

export default function Footer() {
	return (
		<footer className="flex flex-col w-full max-w-7xl p-4 lg:px-0 mx-auto h-auto justify-between">
			<div className="flex z-40 gap-4 justify-center">
				<p className="text-sm">100Starlings © 2024</p>
				{/* <p className="opacity-50">|</p>
				<Link href="/careers">
					<p className="text-sm">Careers</p>
				</Link> */}
			</div>
		</footer>
	);
}
