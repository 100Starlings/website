import Image from "next/image";
import MobileShop from "@/public/images/mobile-shop.png";
import Link from "next/link";

export const YodelMobileSection = () => (
  <div
    className="card flex items-center flex-row flex-wrap lg:flex-nowrap max-w-7xl mx-auto"
  >
    <div id="section-image" className="lg:basis-1/2">
      <Image src={MobileShop} className="rounded-xl" alt="MobileShop" priority={true} />
    </div>

    <div id="section-text" className="lg:basis-1/2 p-16">
      <div id="capsule-group flex flex-row">
        <button 
          disabled
          style={{borderStyle: 'solid', borderColor: "#03A79D", borderWidth: 1}} 
          className="rounded-full text-green text-sm mr-2 py-1 px-2"
        >
          Case Study
        </button>
        <button 
          disabled
          style={{borderStyle: 'solid', borderColor: "#03A79D", borderWidth: 1}} 
          className="rounded-full text-green text-sm mr-2 py-1 px-2"
        >
          Team Extension
        </button>
        <button 
          disabled
          style={{borderStyle: 'solid', borderColor: "#03A79D", borderWidth: 1}} 
          className="rounded-full text-green text-sm mr-2 py-1 px-2"
        >
          Mobile
        </button>
      </div>

			<div className="my-10">
        <h2 className="text-5xl tracking-tight font-semibold mb-4">
          Feature expansion for Yodel's mobile app
        </h2>
        <p className="leading-relaxed font-light text-md mb-2">
          Yodel is a leading UK logistics company, which serves over 600K users monthly through its mobile app. It allows users to track parcels, create return labels, and customize delivery preferences.
        </p>
        <p className="leading-relaxed font-light text-md mb-2">
          The previous app had limited functionality, outdated code, and poor user reviews. Our goal was to add new features, improve performance and integrate user accounts, while collaborating closely with Yodel's internal teams.
        </p>
      </div>

      <div className="my-10">
        <h2 className="text-2xl tracking-tight font-semibold my-2">
          Solution
        </h2>
        <p className="leading-relaxed font-light text-md mb-2">
          We have upgraded the codebase, implementing Single Sign-On (SSO), adding biometric authentication, and enhancing the user experience with features like store locators, safe place pictures, live chat, push notifications, and app review prompts.
        </p>
        <Link className="text-green" href={`/case-studies/yodel-mobile`}>
          Read more →
        </Link>
      </div>

      <div className="my-10">
        <h2 className="text-2xl tracking-tight font-semibold my-2">
          Results
        </h2>
        <div className="flex flex-row mb-2">
          <div className="flex-col mr-6">
            <div className="flex-row text-gray-400">
              Active monthly users
            </div>
            <div className="flex-row text-3xl font-semibold">
              610K
            </div>
          </div>
          <div className="flex-col mr-6">
            <div className="flex-row text-gray-400">
              Download increase
            </div>
            <div className="flex-row text-3xl font-semibold">
              16X
            </div>
          </div>
          <div className="flex-col mr-6">
            <div className="flex-row text-gray-400">
              App rating
            </div>
            <div className="flex flex-row items-center flex-nowrap text-3xl font-semibold">
              4.6
              <Image className="mx-1" src="/icons/Star-icon.svg" width={20} height={20} alt="Star icon" />
            </div>
          </div>
        </div>
        <Link className="text-green" href="https://www.yodel.co.uk/" target="_blank" rel="noopener noreferrer">
          Visit Yodel's website →
        </Link>
      </div>
    </div>
	</div>
);