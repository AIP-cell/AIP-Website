import axios from 'axios';
import env from '../../env.js';

export async function verifyTurnstileToken(token) {
	const secretKey = env.CLOUDFLARE_SECRET_KEY;
	if (!token) {
		return {
			success: false,
			message: 'No Turnstile token provided',
		};
	}

	try {
		const response = await axios.post(
			'https://challenges.cloudflare.com/turnstile/v0/siteverify',
			new URLSearchParams({
				secret: secretKey,
				response: token,
			}).toString(),
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			},
		);
		const { data } = response;

		if (!data.success) {
			return {
				success: false,
				message: 'Turnstile verification failed',
				errorCodes: data['error-codes'] || [],
			};
		}

		return {
			success: true,
			message: 'Human verified successfully',
		};
	} catch (error) {
		return {
			success: false,
			message: 'Verification request failed',
			error: error.message,
		};
	}
}
