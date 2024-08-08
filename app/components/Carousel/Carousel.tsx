import React, { useState, useEffect } from 'react';
import testimonials from "@/data/testimonials.json";
import './Carousel.css';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setIsVisible(true);
      }, 800);
    }, 11000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container card">
      <div className="flex flex-row flex-wrap sm:flex-nowrap gap-x-16">
        <div className="basis-1/2 sm:basis-1/3 items-center">
          <h1 className="header large mb-[1rem] font-light">
            From our <br/><b>clients</b>
          </h1>
          <h3 className="text-gray-500 mb-[1rem]">
            Here's what other businesses had to say about working with us.
          </h3>
        </div>
        <div className="basis-1/2 sm:basis-2/3 mb-4">
         <div className={`testimonial ${isVisible ? 'visible' : ''}`}>
            <div className="quote-container">
              <p className="text-xl text-gray-500 quote mb-[1rem]">"{testimonials[current].quote}"</p>
            </div>
            <h3 className="name text font-semibold">{testimonials[current].name}</h3>
            <h4 className="title text">{testimonials[current].title}</h4>
          </div>
        </div>
      </div>
      <div className="navigation">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={index === current ? 'dot active' : 'dot'}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrent(index);
                setIsVisible(true);
              }, 800); 
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
