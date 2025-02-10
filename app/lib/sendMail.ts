import type { FormData } from "@/components/contact";

export async function sendMail(data: FormData) {
	const apiEndpoint = '/api/email';

	try {
		const res = await fetch(apiEndpoint, { method: 'POST', body: JSON.stringify(data) });
		const response = await res.json();

		return response.message;
	} catch (err) {
		return err;
	}
}