'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { sendMail } from "@/app/lib/sendMail";
import styles from "@/app/styles/submit-button.module.css";

export type FormData = {
	name: string,
	email: string,
	message: string
};

export default function Contact() {
	const { register, handleSubmit } = useForm<FormData>();
	const [status, setStatus] = useState('');
	const [buttonClass, setButtonClass] = useState('');

	const onSubmit = async (data: FormData) => {
		setButtonClass(styles.loading);

		const message = await sendMail(data);

		setStatus(message);
		setButtonClass('');
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-5">
				<label
					htmlFor="name"
					className="mb-3 block font-medium"
				>
					Full Name
				</label>
				<input
					type="text"
					placeholder="Full Name"
					className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
					required={true}
					{...register('name', { required: true })}
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
					type="email"
					placeholder="example@domain.com"
					className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
					required={true}
					{...register('email', { required: true })}
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
					rows={4}
					placeholder="Type your message"
					className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
					required={true}
					{...register('message', { required: true })}
				/>
			</div>
			<div className="mb-5">
				<button className={`${buttonClass} ${styles.button} hover:bg-purple-800 rounded-md bg-purple-500 py-3 px-8 font-semibold text-white outline-none`}>
					<span>Submit</span>
				</button>
			</div>
			<div>
				<span className="w-full font-medium">{status}</span>
			</div>
		</form>
	);
}