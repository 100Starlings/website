"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const SuccessMessage = () => {
	return <div className="bg-green p-2 text-white">Your message has been sent!</div>;
};

const EmailContactForm = () => {
	const form = useRef();
	const [showModal, setShowModal] = useState(false);

	const disableSubmitBtn = () => {
		document.querySelector("button[type=submit]").disabled = true;
		document.querySelector("button[type=submit]").style.display = "none";
	};

	const toggleModal = () => {
		setShowModal((prevShowModal) => !prevShowModal);
	};

	const sendEmail = (e) => {
		e.preventDefault(); // prevents the page from reloading when you hit “Send”

		emailjs.sendForm("service_0kdyeox", "template_2qf66jh", form.current, "owd3D6nlM9_JyPCgK").then(
			() => {
				toggleModal();
				disableSubmitBtn();
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<div className="p-[1rem] lg:p-[2rem] rounded-md w-full z-10">
			<form ref={form} onSubmit={sendEmail} className="mx-auto w-full max-w-screen xl:max-w-lg z-10">
				<div className="grid grid-cols-1 gap-x-8 gap-y-4 xl:gap-y-6 sm:grid-cols-2">
					<div>
						<label type="text" name="first_name" htmlFor="first_name" className="text-white block text-sm leading-6">
							First name*
						</label>
						<div className="mt-1 xl:mt-2.5">
							<input
								required
								type="text"
								name="first_name"
								autoComplete="given-name"
								className="block w-full rounded-md border-[1.5px] border-[var(--card-bg)] px-3.5 py-2 shadow-sm ring-0 bg-[--card-bg] ring-green placeholder focus:ring-0 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<label htmlFor="last_name" className="text-white block text-sm leading-6">
							Last name*
						</label>
						<div className="mt-1 xl:mt-2.5">
							<input
								required
								type="text"
								name="last_name"
								autoComplete="family-name"
								className="block w-full rounded-md border-[1.5px] border-[var(--card-bg)] px-3.5 py-2 shadow-sm ring-0 ring-inset bg-[--card-bg] ring-green placeholder focus-visible:ring-green sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label htmlFor="company" className="text-white block text-sm leading-6">
							Company*
						</label>
						<div className="mt-1 xl:mt-2.5">
							<input
								required
								type="text"
								name="company"
								id="company"
								autoComplete="organization"
								className="block w-full rounded-md border-[1.5px] border-[var(--card-bg)] px-3.5 py-2 shadow-sm ring-0 ring-inset bg-[--card-bg] ring-green placeholder focus-visible:ring-green sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label htmlFor="email" className="text-white block text-sm leading-6">
							Email*
						</label>
						<div className="mt-1 xl:mt-2.5">
							<input
								required
								type="email"
								name="user_email"
								id="email"
								autoComplete="email"
								className="block w-full rounded-md border-[1.5px] border-[var(--card-bg)] px-3.5 py-2 shadow-sm ring-0 ring-inset bg-[--card-bg] ring-green placeholder focus-visible:ring-green sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div className="sm:col-span-2">
						<label htmlFor="message" className="text-white block text-sm leading-6">
							Message
						</label>
						<div className="mt-1 xl:mt-2.5">
							<textarea
								required
								name="message"
								id="message"
								rows={4}
								className="block w-full rounded-md border-[1.5px] border-[var(--card-bg)] px-3.5 py-2 shadow-sm ring-0 ring-inset bg-[--card-bg] ring-green placeholder focus-visible:ring-green sm:text-sm sm:leading-6"
								defaultValue={""}
							/>
						</div>
					</div>
				</div>
				{showModal && (
					<div className="bg-green py-2 px-3 text-white mt-4 rounded-md flex justify-between">
						<span>Thank you for getting in touch!</span>
						<span className="close" onClick={toggleModal}>
							&times;
						</span>
					</div>
				)}
				<div className="mt-4 xl:mt-10 flex">
					<button
						type="submit"
						value="Send"
						className="button text-sm hover:bg-gradient-to-tr from-green to-blue hover:text-[var(--text-light)]"
					>
						Send message
					</button>
				</div>
			</form>
		</div>
	);
};

export default EmailContactForm;
