'use client';

import { useActionState, useState, useRef, FormEvent } from 'react';
import { sendMail } from "@/app/lib/sendMail";
import styles from "@/app/styles/submit-button.module.css";

const initialState = {
	name: '',
	email: '',
	message: '',
	status: ''
};

declare const grecaptcha: any;

export default function Contact() {
	const [state, formAction, isPending] = useActionState(sendMail, initialState);
	const [localPending, setLocalPending] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	const isFormPending = isPending || localPending;

	const buttonClass = isFormPending ? styles.loading : '';

	const handleSubmit = async () => {
		setLocalPending(true);
		const token = await grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '', { action: 'submit' });

		const form = formRef.current;
		if (!form) {
			setLocalPending(false);
			return;
		}

		const hiddenInput = document.createElement('input');
		hiddenInput.type = 'hidden';
		hiddenInput.name = 'recaptchaToken';
		hiddenInput.value = token;
		form.appendChild(hiddenInput);

		form.requestSubmit();
		setLocalPending(false);
	}

	return (
		<form ref={formRef} action={formAction}>
			<div className="mb-5">
				<label
					htmlFor="name"
					className="mb-3 block font-medium"
				>
					Full Name
				</label>
				<input
					id="name"
					type="text"
					name= "name"
					defaultValue={state.name}
					placeholder="Full Name"
					className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
					required={true}
				/>
			</div>
			<div className="mb-5">
				<label
					htmlFor="email"
					className="mb-3 block font-medium"
				>
					Email Address
				</label>
				<input
					id="email"
					type="email"
					name="email"
					defaultValue={state.email}
					placeholder="example@domain.com"
					className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
					required={true}
				/>
			</div>
			<div className="mb-5">
				<label
					htmlFor="message"
					className="mb-3 block font-medium"
				>
					Message
				</label>
				<textarea
					id="message"
					rows={4}
					name="message"
					defaultValue={state.message}
					placeholder="Type your message"
					className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
					required={true}
				/>
			</div>
			<div className="mb-5">
				<button
					className={`${buttonClass} ${styles.button} hover:bg-purple-800 rounded-md bg-purple-500 py-3 px-8 font-semibold text-white outline-none`}
					onClick={handleSubmit}
					disabled={isFormPending}
				>
					<span>Submit</span>
				</button>
			</div>
			<div>
				<span aria-live='polite' role="status" className="w-full font-medium">{state?.status}</span>
			</div>
			<div className="mt-6 text-[1.2rem] text-gray-400">
				This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
			</div>
		</form>
	);
}