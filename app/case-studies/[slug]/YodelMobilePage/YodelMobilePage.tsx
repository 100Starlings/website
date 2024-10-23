"use client";
import Image from "next/image";
import MobileShop from "@/public/images/mobile-shop.png";
import StoreLocator from "@/public/images/caseStudies/yodel-store-locator.png";
import Home from "@/public/images/caseStudies/yodel-mobile-home.png";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

export default function YodelMobilePage() {
	return (
    <div id="container" className="flex flex-col gap-[3rem] mb-[3rem] mx-[1rem] lg:mx-[2rem] mt-[4rem]">
      <div className="card items-center max-w-7xl mx-auto">
        <div
          className="flex flex-row flex-wrap lg:flex-nowrap mb-6"
        >
          <div id="section-image" className="lg:basis-1/2">
            <Image src={MobileShop} className="rounded-xl" alt="MobileShop" />
          </div>

          <div id="section-text" className="lg:basis-1/2 p-8 md:p-16">
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
                    <StarIcon className="mx-1" width={20} height={20} />
                  </div>
                </div>
              </div>
              <Link className="text-green" href="https://www.yodel.co.uk/" target="_blank" rel="noopener noreferrer">
                Visit Yodel's website →
              </Link>
            </div>
          </div>
        </div>

        <div
          className="flex flex-row flex-wrap-reverse lg:flex-nowrap mb-6"
        >
          <div id="section-text" className="lg:basis-1/2 p-8 md:p-16">
            <h2 className="text-2xl tracking-tight font-semibold my-2">
              Implementation
            </h2>
            <p className="leading-relaxed font-light text-md mb-2 text-justify">
              This project started at the end of the first quarter of 2021 and was released in November 2021. Scrum methodology was followed according to Yodel's practices, encouraging continuous communication between teams to coordinate the two-week sprints. The app was built with the cross-platform framework React Native, which allowed us to have one single code base catering for both iOS and Android while allowing us to make use of their native capabilities. 
            </p>
            <p className="leading-relaxed font-light text-md mb-2">
              As part of it, we've developed the following core functionalities:
            </p>
            <div className="flex flex-row">
              <div className="flex-col align-center m-3">
                <p className="text-green">
                  <CheckCircleIcon width={24} />
                </p>
              </div>
              <div className="flex-col">
                <p className="leading-relaxed text-md mb-2">
                  <b>Single Sign On (SSO):</b><span className="font-light"> which allows users to register their account with the click of a button via Facebook, Google or Apple, hence streamlining the account creation process.</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-col align-center m-3">
                <p className="text-green">
                  <CheckCircleIcon width={24} />
                </p>
              </div>
              <div className="flex-col">
                <p className="leading-relaxed text-md mb-2">
                  <b>Biometric Authentication:</b><span className="font-light"> once a user has created an account, the app encourages them to set up biometrics to ensure logging in back to the app immediately without needing to write credentials.</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-col align-center m-3">
                <p className="text-green">
                  <CheckCircleIcon width={24} />
                </p>
              </div>
              <div className="flex-col">
                <p className="leading-relaxed text-md mb-2">
                  <b>Store locator:</b><span className="font-light"> making use of geolocation libraries, the users are able to find stores nearby where they can pick up and drop off their parcels while being able to see what additional services they provide as well as working hours and storefront pictures to be able to spot them in the street.</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-col align-center m-3">
                <p className="text-green">
                  <CheckCircleIcon width={24} />
                </p>
              </div>
              <div className="flex-col">
                <p className="leading-relaxed text-md mb-2">
                  <b>Safe Place Pictures</b><span className="font-light"> this allows users to upload a picture of their preferred safe place so that the courier can leave parcels safely, hence giving users peace of mind when their parcels arrive at home, and there is no one to receive them.</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-col align-center m-3">
                <p className="text-green">
                  <CheckCircleIcon width={24} />
                </p>
              </div>
              <div className="flex-col">
                <p className="leading-relaxed text-md mb-2">
                  <b>Live Chat</b><span className="font-light"> making use of Sprinklr as a third-party solution, we make use of their embedded web chat to allow users to communicate with Yodel's contact centres quickly.</span>
                </p>
              </div>
            </div>
          </div>

          <div id="section-image" className="lg:basis-1/3 mx-auto">
            <Image src={StoreLocator} className="rounded-xl" alt="StoreLocator" />
          </div>
        </div>

        <div
          className="flex flex-row flex-wrap lg:flex-nowrap"
        >
          <div id="section-image" className="lg:basis-1/3 mx-auto">
            <Image src={Home} className="rounded-xl" alt="StoreLocator" />
          </div>
          <div id="section-text" className="lg:basis-1/2 p-8 md:p-16">
            <div className="flex flex-row">
              <div className="flex-col align-center m-3">
                <p className="text-green">
                  <CheckCircleIcon width={24} />
                </p>
              </div>
              <div className="flex-col">
                <p className="leading-relaxed text-md mb-2">
                  <b>Storyblok CDN for Messages:</b><span className="font-light"> a backend implementation was created using the Storyblok CDN to provide Yodel's marketing team with a way to communicate specifically with Yodel App users. This allows them to post announcements in the app which the user will be prompted to see. To achieve this, we made use of our open-source gem, <Link className="text-green" href="https://www.rubyblok.com/" target="_blank" rel="noopener noreferrer"><b>Rubyblok.</b></Link></span>
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-col align-center m-3">
                <p className="text-green">
                  <CheckCircleIcon width={24} />
                </p>
              </div>
              <div className="flex-col">
                <p className="leading-relaxed text-md mb-2">
                  <b>Push Notifications</b><span className="font-light"> this gives users live updates on the states of their parcels, allowing them to navigate to the app to the main point of interest to see more details of it, as well as allowing the marketing team to communicate with users proactively.</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-col align-center m-3">
                <p className="text-green">
                  <CheckCircleIcon width={24} />
                </p>
              </div>
              <div className="flex-col">
                <p className="leading-relaxed text-md mb-2">
                  <b>Universal Links</b><span className="font-light"> this encourages users to Aengage with the app's prime experience when clicking on Yodel email updates as well as allowing users creating their accounts to immediately verify without the need to copy/paste an authentication code sent to their emails, hence improving the overall experience.</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-col align-center m-3">
                <p className="text-green">
                  <CheckCircleIcon width={24} />
                </p>
              </div>
              <div className="flex-col">
                <p className="leading-relaxed text-md mb-2">
                  <b>App Review Prompts:</b><span className="font-light"> using an interaction-based strategy, users are presented with native App Review prompts which encourage satisfied users to give a review of the app, hence increasing the chances to improve app store ratings. At the same time it also encourages not satisfied users to provide feedback on their experience, hence allowing the business to get a front-line view of what things can be improved in the future.</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-col align-center m-3">
                <p className="text-green">
                  <CheckCircleIcon width={24} />
                </p>
              </div>
              <div className="flex-col">
                <p className="leading-relaxed text-md mb-2">
                  <b>Forced Upgrade:</b><span className="font-light"> sometimes the business may want to release a new feature or key fixes to the app, which require users to update to the latest version of the app. Making use of the same backend implementation for the Storyblok CDN, we provide the marketing team with means to trigger an upgrade screen which prevents users in old versions of the app from using it, while encouraging them to update it to the latest version by sending them directly to the Yodel app store listing.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
	);
}