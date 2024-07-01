import React from "react";

const clients = [
	{
		name: "Yodel",
		websiteUrl: "https://www.yodel.co.uk/",
		imageURL: "/images/clients/1/Yodel.svg",
		altText: "Image of Yodel's logo",
	},
	{
		name: "Tusker",
		websiteUrl: "https://tuskercars.com/",
		imageURL: "/images/clients/1/Tusker.svg",
		altText: "Image of Tusker's logo",
	},
	{
		name: "Bear",
		websiteUrl: "https://bear.app/",
		imageURL: "/images/clients/1/Bear.png",
		altText: "Image of Bear's logo",
	},
	{
		name: "Learn Amp",
		websiteUrl: "https://learnamp.com/",
		imageURL: "/images/clients/1/Learnamp.svg",
		altText: "Image of Learnamp's logo",
	},
	{
		name: "Streetbank",
		websiteUrl: "https://www.streetbank.com/",
		imageURL: "/images/clients/1/Streetbank.png",
		altText: "Image of Streetbank's logo",
	},
	{
		name: "PostShift",
		websiteUrl: "https://www.postshift.com/",
		imageURL: "/images/clients/1/PostShift.svg",
		altText: "Image of PostShift's logo",
	},
	{
		name: "Field",
		websiteUrl: "https://field.io/",
		imageURL: "/images/clients/1/Field.svg",
		altText: "Image of Field's logo",
	},
	{
		name: "Abzed",
		websiteUrl: "https://www.abzed.com/",
		imageURL: "/images/clients/1/Abzed.svg",
		altText: "Image of Abzed's logo",
	},
	{
		name: "Sensata",
		websiteUrl: "https://www.sensata.com/",
		imageURL: "/images/clients/1/Sensata.png",
		altText: "Image of Sensata's logo",
	},
];

export default function ClientsSection() {
	return (
		<section className="flex flex-col w-full max-w-7xl justify-between items-start gap-[2rem]">
			<p className="header">Clients we have worked with</p>
			<div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-[3rem] lg:justify-start">
				{clients.map((client, index) => (
					<a
						href={client.websiteUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:opacity-80 transition-opacity duration-300 ease-in-out"
					>
						<img
							src={client.imageURL}
							alt={client.altText}
							className="w-[4rem]  max-h-[3rem] lg:w-auto object-contain"
						/>
					</a>
				))}
			</div>
		</section>
	);
}
