import React, { useState, useEffect } from "react";
import testimonials from "@/data/testimonials.json";
import { HeartIcon } from "@heroicons/react/24/outline";
import "./TestimonialSection.css";

const TestimonialSection = () => {
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
		<section id="testimonials" className="card max-w-7xl p-8">
			<div className="flex flex-row items-center flex-wrap sm:flex-nowrap sm:gap-x-28">
				<div id="title-section" className="sm:basis-1/3 sm:py-8 sm:pl-8">
					<div
						className="my-4 w-6 h-6 flex items-center justify-center rounded-full border"
						style={{ border: "1.4px solid #03A79D" }}
					>
						<HeartIcon className="text-green" width={16} height={16} />
					</div>

					<h1 id="title" className="header large font-light my-4">
						From our clients
					</h1>

					<h3 id="subtitle" className="text-slate-600 dark:text-white text-sm font-light mt-4">
						Here&apos;s what other businesses have to say about working with us.
					</h3>
				</div>

				<div id="testimonial-section" className="flex items-center sm:basis-2/3 py-4 sm:p-8 mb-4 sm:mb-0 min-h-[25rem]">
					<div className={`testimonial ${isVisible ? "visible" : ""}`}>
						<p className="mb-[1rem] text-xl dark:text-white text-slate-600 font-extralight leading-relaxed">
							"{testimonials[current].quote}"
						</p>
						<h3 className="font-bold text-lg">{testimonials[current].name}</h3>
						<h4 className="text-slate-600 dark:text-white text-sm font-light mt-1">{testimonials[current].title}</h4>
					</div>
				</div>
			</div>

			<div id="carousel-button-group" className="flex items-center justify-center sm:mb-2">
				{testimonials.map((_, index) => (
					<button
						key={index}
						className={index === current ? "dot active" : "dot"}
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
		</section>
	);
};

export default TestimonialSection;
