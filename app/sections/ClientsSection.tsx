import Image from "next/image";
import React from "react";

const clients = [
	{
		name: "GoCardless",
		websiteUrl: "https://gocardless.com/",
		imageURL: "/images/clients/2/GoCardless.svg",
		altText: "Image of GoCardless' logo",
		css: "w-[4rem]",
	},
	{
		name: "Canada Goose",
		websiteUrl: "https://www.canadagoose.com/",
		imageURL: "/images/clients/2/CanadaGoose.svg",
		altText: "Image of Canada Goose's logo",
		css: "w-[4rem]",
	},
	{
		name: "Adidas",
		websiteUrl: "https://www.adidas.com/",
		imageURL: "/images/clients/2/Adidas.svg",
		altText: "Image of Adidas' logo",
		css: "w-[5rem]",
	},
	{
		name: "Nike",
		websiteUrl: "https://www.nike.com/",
		imageURL: "/images/clients/2/Nike.svg",
		altText: "Image of Nike's logo",
		css: "w-[5rem]",
	},
	{
		name: "BBC",
		websiteUrl: "https://www.bbc.com/",
		imageURL: "/images/clients/2/BBC.svg",
		altText: "Image of BBC's logo",
		css: "w-[5rem]",
	},
	{
		name: "Philips",
		websiteUrl: "https://www.philips.com/global",
		imageURL: "/images/clients/2/Philips.svg",
		altText: "Image of Philips' logo",
		css: "w-[5rem]",
	},
	{
		name: "Nokia",
		websiteUrl: "https://www.nokia.com/",
		imageURL: "/images/clients/2/Nokia.svg",
		altText: "Image of Nokia's logo",
		css: "w-[5rem]",
	},
	{
		name: "Inkspired",
		websiteUrl: "https://getinkspired.com/en/",
		imageURL: "/images/clients/2/Inkspired.svg",
		altText: "Image of Inkspired's logo",
		css: "w-[5rem]",
	},
	{
		name: "NHS",
		websiteUrl: "https://www.nhs.uk/",
		imageURL: "/images/clients/2/NHS.svg",
		altText: "Image of NHS' logo",
		css: "w-[5rem]",
	},
	{
		name: "Channel 4",
		websiteUrl: "https://www.channel4.com/",
		imageURL: "/images/clients/2/Channel4.svg",
		altText: "Image of Channel 4's logo",
		css: "w-[3rem]",
	},
	{
		name: "British Airways",
		websiteUrl: "https://www.britishairways.com/",
		imageURL: "/images/clients/2/BritishAirways.svg",
		altText: "Image of British Airways' logo",
		css: "w-[5rem]",
	},
	{
		name: "BP",
		websiteUrl: "https://www.bp.com/",
		imageURL: "/images/clients/2/BP.svg",
		altText: "Image of BP's logo",
		css: "w-[4rem]",
	},
];

export default function ClientsSection() {
	return (
		<section className="flex flex-col w-full justify-between items-start gap-[2rem] max-w-7xl">
			<p className="header pb-4 mx-auto">Members of our team have worked with</p>
			<div className="w-full flex flex-row justify-center">
				<div className="w-full flex flex-row flex-wrap items-center justify-center gap-[2rem]">
					{clients.map((client, index) => (
						<div className={client.css} key={index}>
							<a
								href={client.websiteUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-80 transition-opacity duration-300 ease-in-out w-full"
							>
								<Image src={client.imageURL} alt={client.altText} className="lg:w-auto object-contain" />
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
