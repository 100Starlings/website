"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TeamCard from "../components/TeamCard";
import data from "@/data/team.json";

export default function OurTeamSection() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [memberId, setMemberId] = useState("");

	const openPopup = (id: React.SetStateAction<string>) => {
		setIsPopupOpen(true);
		setMemberId(id);
		document.body.style.overflow = "hidden";
	};

	const closePopup = () => {
		setIsPopupOpen(false);
		document.body.style.overflow = "auto";
	};

	const activeTeamMembers = data.filter((member) => member.isActive);
	return (
		<section id="team" className="flex w-full max-w-7xl card overflow-hidden min-h-[80svh]">
			<div className="w-screen overflow-scroll flex lg:grid grid-flow-cols lg:grid-flow-row grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6">
				{activeTeamMembers.map(({ id, first_name, last_name, title, description, image_url }) => (
					<Link href={`/team/${first_name}-${last_name}`} key={id}>
						<TeamCard
							key={id}
							id={id}
							first_name={first_name}
							last_name={last_name}
							title={title}
							description={description}
							image_url={image_url}
						/>
					</Link>
				))}
			</div>
		</section>
	);
}
