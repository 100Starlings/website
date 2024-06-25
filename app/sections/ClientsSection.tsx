<<<<<<< HEAD
export default function ClientsSection() {
  return (
    <>
      <div className="flex w-full max-w-7xl justify-between items-center">
        <p className="header">
          Borrow our experience
        </p>
      </div>
      <div className="flex w-full max-w-7xl justify-between items-center">
        <p className="z-10 my-3 text-sm lg:text-md max-w-lg font-light">
          Clients we have worked with
        </p>
      </div>
      <div className="flex items-center justify-center mb-[6rem]">
        <div className="flex flex-wrap justify-center items-center px-4">
          <a href="https://www.yodel.co.uk" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Yodel.svg" alt="yodel" className="max-w-xs mx-4 my-2 w-20 object-contain"/>
          </a>
          <a href="https://tuskercars.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Tusker.svg" alt="tusker" className="max-w-xs mx-4 my-2 w-20 object-contain"/>
          </a>
          <a href="https://www.bear.app" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Bear.png" alt="bear" className="max-w-xs mx-4 my-2 w-16 object-contain"/>
          </a>
          <a href="https://www.learnamp.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Learnamp.svg" alt="learnamp" className="max-w-xs mx-4 my-2 w-32 object-contain"/>
          </a>
          <a href="https://www.streetbank.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Streetbank.png" alt="streetbank" className="max-w-xs mx-4 my-4 w-28 object-contain"/>
          </a>
          <a href="https://www.postshift.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/PostShift.svg" alt="post shift" className="max-w-xs mx-4 my-4 w-24 object-contain"/>
          </a>
          <a href="https://field.io/" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Field.svg" alt="field" className="max-w-xs mx-4 my-4 w-28 object-contain"/>
          </a>
          <a href="https://www.abzed.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Abzed.svg" alt="abzed" className="max-w-xs mx-4 my-4 w-32 object-contain"/>
          </a>
          <a href="https://www.sensata.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/clients/1/Sensata.png" alt="field" className="max-w-xs mx-4 my-4 w-20 object-contain"/>
          </a>
        </div>
      </div>
    </>
  );
=======
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
			<div className="flex flex-row flex-wrap items-center justify-center gap-[1rem] lg:justify-start">
				{clients.map((client, index) => (
					<a href={client.websiteUrl} target="_blank" rel="noopener noreferrer">
						<img src={client.imageURL} alt={client.altText} className="h-auto w-auto object-contain" />
					</a>
				))}
			</div>
		</section>
	);
>>>>>>> main
}
