"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface Specialist {
  first_name: string;
  image_url: string;
  description: string;
  calendar: string;
}

interface SpecialistDescriptionProps {
  currentSpecialists: Specialist[];
}

const SpecialistDescription: React.FC<SpecialistDescriptionProps> = ({ currentSpecialists }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    const truncated = text.substr(0, text.lastIndexOf(' ', maxLength));
    return truncated + '...';
  };

  return (
    <>
      <div id="specialist-presentation" className="flex flex-row flex-wrap sm:flex-nowrap items-center my-5">
        <div className="mr-4 mb-4 sm:mb-0">
          <Image
            src={currentSpecialists[currentIndex]?.image_url || ""}
            className="rounded-full"
            alt="Specialist"
            width={80}
            height={80}
          />
        </div>

        <div className="sm:basis-3/4">
          <p className="text-bold mb-2">Talk to {currentSpecialists[currentIndex]?.first_name} about your challenge</p>
          <p className="text-xs font-light text-justify">
            {truncateText(currentSpecialists[currentIndex]?.description || '', 140)}
            <a href={`/specialists/${currentIndex}`} className="text-green ml-2">
              Read more ›
            </a>
          </p>
        </div>
      </div>

      <div id="cta-button-group" className="flex flex-row">
        <a href={currentSpecialists[currentIndex]?.calendar || "/#contact"} className="button dark mr-6">
          Book a session
        </a>

        <a href={"/#contact"} className="button">
          Contact us
        </a>
      </div>

      <div id="carousel-button-group" className="flex flex-row items-center justify-center sm:justify-start my-5 sm:ml-2">
        {currentSpecialists.map((_, index) => (
          <div className="mr-2">
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-400' : 'bg-gray-300'}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SpecialistDescription;
