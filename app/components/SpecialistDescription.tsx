"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

interface Specialist {
  first_name: string;
  last_name: string;
  image_url: string;
  description: string;
  calendar: string;
}

interface SpecialistDescriptionProps {
  currentSpecialists: Specialist[];
}

const SpecialistDescription: React.FC<SpecialistDescriptionProps> = ({ currentSpecialists }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentSpecialists.length);
  };

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    const truncated = text.substr(0, text.lastIndexOf(' ', maxLength));
    return truncated + '...';
  };

  return (
    <div id="specialist-section">
      <div className="flex items-center justify-left flex-row flex-wrap sm:flex-nowrap">
        <div className="sm:basis-2/12">
          <Image
            src={currentSpecialists[currentIndex]?.image_url || ""}
            className="rounded-full"
            alt="Specialist"
            width={80}
            height={80}
          />
        </div>

        <div className="sm:basis-8/12">
          <p className="sm:text-md">Connect with {currentSpecialists[currentIndex]?.first_name} {currentSpecialists[currentIndex]?.last_name}</p>
          <p className="text-xs font-light text-justify">
            {truncateText(currentSpecialists[currentIndex]?.description || '', 190)}
            <a href={`/team/${currentSpecialists[currentIndex]?.first_name}-${currentSpecialists[currentIndex]?.last_name}`} className="text-green ml-2">
              Read more ›
            </a>
          </p>
        </div>

        <button onClick={handleNext} aria-label="Next specialist" className="mt-3 sm:ml-4 sm:basis-2/12">
          <ArrowRightCircleIcon className="w-6 h-6 text-green hover:text-gray-700" />
        </button>
      </div>

      <div id="cta-button-group" className="flex flex-row my-8">
        <a href={currentSpecialists[currentIndex]?.calendar || "/#contact"} className="button dark mr-6">
          Book a session
        </a>

        <a href={"/#contact"} className="button">
          Contact us
        </a>
      </div>
    </div>
  );
};

export default SpecialistDescription;
