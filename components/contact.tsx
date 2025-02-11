'use client';

import { useActionState } from 'react';
import { sendMail } from "@/app/lib/sendMail";
import styles from "@/app/styles/submit-button.module.css";

const initialState = {
	name: '',
	email: '',
	message: '',
	status: ''
};

export default function Contact() {
	const [state, formAction, isPending] = useActionState(sendMail, initialState);

	const buttonClass = isPending ? styles.loading : '';

	return (
		<form action={formAction}>
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
				<button className={`${buttonClass} ${styles.button} hover:bg-purple-800 rounded-md bg-purple-500 py-3 px-8 font-semibold text-white outline-none`}>
					<span>Submit</span>
				</button>
			</div>
			<div>
				<span aria-live='polite' role="status" className="w-full font-medium">{state?.status}</span>
			</div>
		</form>
	);
}