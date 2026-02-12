import { ContactUsFormModel } from '../../modals/ContactFormModal.js';
import { serverError } from '../../utils/errorHandler.js';
import { enquiryNotificationToAdmin, enquiryNotificationToUser } from '../../utils/mailOption.js';
import { verifyTurnstileToken } from '../../utils/recaptcha.js';

export const createContactForm = async (req, res, next) => {
	try {
		// eslint-disable-next-line camelcase
		const { name, email, message, type } = req.body;

		console.log('request data::', name, email, message, type);

		// TEMPORARY: CAPTCHA validation disabled due to Cloudflare Turnstile 401 error
		// TODO: Fix Cloudflare site key and secret key pair, then uncomment below
		// const data = await verifyTurnstileToken(req.body.captchaToken);

		// if (!data.success) {
		// 	return res.status(433).json({
		// 		success: true,
		// 		message: 'reCAPTCHA validation failed',
		// 	});
		// }

		await enquiryNotificationToAdmin(name, email, message, type);
		// await enquiryNotificationToUser(name, email); // Commented out - only admin receives emails

		await ContactUsFormModel.create({
			name: name,
			email: email,
			message: message,
			type: type,
			deletedAt: null,
		});

		return res.status(200).json({
			success: true,
			message: 'Form submitted successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};
