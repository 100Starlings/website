import Image from "next/image";
import Starling from "@/public/images/mobile-shop.png";
import Link from "next/link";

const CaseStudySection = () => (
  <section
    className="card flex items-center flex-row flex-wrap lg:flex-nowrap max-w-7xl mx-auto"
  >
    <div id="section-image" className="lg:basis-1/2">
      <Image src={Starling} className="rounded-xl" alt="Starling" />
    </div>

    <div className="lg:basis-1/2 p-8">
			<div id="intro-card" className="">
        <div id="capsule-group flex flex-row">
          <button className="button light text-sm mr-2">Case Study</button>
          <button className="button light text-sm mr-2">Team Extension</button>
          <button className="button light text-sm mr-2">Mobile</button>
        </div>

        <h2 className="text-5xl tracking-tight font-semibold my-6">
          Feature expansion for Yodel's mobile app
        </h2>
        <p className="font-light text-md mb-2">
          Yodel is a leading UK logistics company, which serves over 600K users monthly through its mobile app. It allows users to track parcels, create return labels, and customize delivery preferences.
        </p>
        <p className="font-light text-md mb-2">
          Yodel's previous app had limited functionality, outdated code, and poor user reviews. Our goal was to add new features, improve performance and integrate user accounts, while collaborating closely with Yodel's internal teams.
        </p>
        <h2 className="text-2xl tracking-tight font-semibold my-2">
          Solution
        </h2>
        <p className="font-light text-md mb-2">
          We have upgraded the codebase, implementing Single Sign-On (SSO), adding biometric authentication, and enhancing the user experience with features like store locators, safe place pictures, live chat, push notifications, and app review prompts.
        </p>
        <Link className="text-green" href="">
          Read more →
        </Link>
        <h2 className="text-2xl tracking-tight font-semibold my-2">
          Results
        </h2>
        <Link className="text-green" href="https://www.yodel.co.uk/">
          Visit Yodel's website →
        </Link>
      </div>
    </div>
	</section>
);

export default CaseStudySection;
