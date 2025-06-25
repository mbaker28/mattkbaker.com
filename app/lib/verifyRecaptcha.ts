"use server";

export default async function verifyRecaptcha(token?: string): Promise<boolean> {
    if (!token) {
        return false;
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    });

    const json = await response.json();
    return json.success;
}