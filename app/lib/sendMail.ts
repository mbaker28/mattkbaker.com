"use server";

import nodemailer from 'nodemailer';
import { z } from 'zod';
import Mail from 'nodemailer/lib/mailer';
import { revalidatePath } from 'next/cache';

export async function sendMail(
	prevState: {
		name: string,
		email: string
		message: string,
		status: string
	},
	formData: FormData
) {
	const FormSchema = z.object({
		email: z.string(),
		name: z.string(),
		message: z.string()
	});

	const { email, name, message } = FormSchema.parse({
		email: formData.get('email'),
		name: formData.get('name'),
		message: formData.get('message')
	});

	const transport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.MY_EMAIL,
			pass: process.env.MY_PASSWORD
		}
	});

	const mailOptions: Mail.Options = {
		from: process.env.MY_EMAIL,
		to: process.env.MY_EMAIL,
		replyTo: { name, address: email },
		subject: `New portfolio form submission from ${name} (${email})`,
		text: message
	};

	try {
		const status = await new Promise<string>((resolve, reject) => {
			transport.sendMail(mailOptions, function(err) {
				if (!err) {
					resolve('Email sent');
				} else {
					reject(err.message);
				}
			})
		});

		revalidatePath('/contact');
		return { name, email, message, status };
	} catch (err) {
		return { name, email, message, status: 'Failed to send email' };
	}
}