"use client";

import Image from "next/image";
import React from "react";
import team from "@/data/team.json";
import Link from "next/link";
import Dropdown from "../../components/Dropdown";

export default function Page({ params }: { params: { slug: string } }) {
	let currentMember = team.find((member) => `${member.first_name}-${member.last_name}` === params.slug);

	if (!currentMember) {
		return (
			<div className="w-full min-h-[90svh] flex flex-col justify-center items-center">
				<h1 className="header">member not found</h1>
				<Link href="/" className="button mt-[1rem]">
					Go to homepage
				</Link>
			</div>
		);
	}

	return (
		<div className="w-full min-h-[90svh] flex flex-col justify-center items-center px-[1rem] pt-[3.75rem]">
			<div className="w-full flex card flex-col lg:flex-row max-w-7xl">
				<div className="relative flex flex-col items-center w-full bg-white/60 min-h-[60svh] h-full lg:min-h-[80svh] rounded-md overflow-hidden my-auto">
					<Image
						src={currentMember?.image_url ?? ""}
						fill
						alt="Image of the team"
						style={{ objectFit: "cover" }}
						className="h-full"
					/>
					<div className="mt-auto z-30 py-[1rem] lg:py-[2rem] items-center flex flex-col gap-[1rem] w-full bg-transparent backdrop-blur-none bg-gradient-to-b from-black/0 to-black/30">
						<div className="flex flex-col items-center">
							<h1 className="header light">
								{currentMember?.first_name} {currentMember?.last_name}
							</h1>
							<p className="text-green">{currentMember?.title}</p>
						</div>
						<div className="flex gap-[1rem]">
							<a
								href={currentMember?.linkedin}
								target="_blank"
								rel="noreferrer"
								className="px-[2rem] py-[1rem] bg-[#333333]/50 backdrop-blur-xl rounded-md hover:bg-[#333333]/80 items-center justify-center flex flex-col"
							>
								<Image src="/icons/Linkedin-icon.svg" width={26} height={26} alt="LinkedIn icon" />
								<p className="mt-1 text-xs text-white/90">linkedin</p>
							</a>
							<a
								href={currentMember?.email}
								target="_blank"
								rel="noreferrer"
								className="px-[2rem] py-[1rem] bg-[#333333]/50 backdrop-blur-xl rounded-md hover:bg-[#333333]/80 items-center justify-center flex flex-col"
							>
								<Image src="/icons/Mail-icon.svg" width={28} height={26} alt="Email icon" />
								<p className="mt-auto text-xs text-white/90">mail</p>
							</a>
							{currentMember?.isExpert && (
								<a
									href={currentMember?.calendar}
									target="_blank"
									rel="noreferrer"
									className="px-[2rem] py-[1rem] bg-[#333333]/50 backdrop-blur-xl rounded-md hover:bg-[#333333]/80 items-center justify-center flex flex-col"
								>
									<Image src="/icons/Calendar-icon.svg" width={26} height={26} alt="Calendar icon" />
									<p className="mt-auto text-xs text-white/90">book</p>
								</a>
							)}
						</div>
					</div>
				</div>
				<div className="w-full min-h-full min-w-[50%] flex flex-col">
					<div className="flex flex-col min-h-full my-auto p-[1rem] lg:p-[4rem] items-start justify-center">
						<div className="mb-8">
							<h2 className="header mb-2">Bio</h2>
							<p className="text">{currentMember?.description}</p>
						</div>
						{currentMember?.expertises && (
							<>
								<h2 className="header mb-2">Expertises</h2>
								<ul className="grid grid-cols-1 divide-y divide-[--devider] w-full max-w-xl">
									{currentMember?.expertises?.map((expertise, index) =>
										Object.entries(expertise).map(([title, items]) => (
											<li key={index} className="w-full">
												<Dropdown title={title} items={Array.isArray(items) ? items : [items]} />
											</li>
										))
									)}
								</ul>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
