// import env from '../../env.js';
// import nodemailer from 'nodemailer';

// export async function enquiryNotificationToAdmin(firstName, email, message, type) {
// 	const transporter = nodemailer.createTransport({
// 		host: env.SEND_IN_BLUE_HOST,
// 		port: env.SEND_IN_BLUE_PORT,
// 		auth: {
// 			user: env.SEND_IN_BLUE_USER,
// 			pass: env.SEND_IN_BLUE_PASSWORD,
// 		},
// 	});

// 	const mailOptions = {
// 		from: env.USER_MAIL,
// 		to: env.USER_MAIL,
// 		subject: 'New Website Enquiry Received!',
// 		text: `Dear Admin,

// 		You have received a new enquiry from the AIP website.

// 		Details:
// 		-----------------------
// 		Name: ${firstName}
// 		Email: ${email}
// 		Enquiry Type: ${type}

// 	    Message:

// 		${message}

// 		-----------------------

// 		Please review and respond accordingly.

// 		Best regards,
// 		AIP Website Notification System`,
// 	};

// 	await transporter.sendMail(mailOptions);
// }
// export async function enquiryNotificationToUser(firstName, email) {
// 	const transporter = nodemailer.createTransport({
// 		host: env.SEND_IN_BLUE_HOST,
// 		port: env.SEND_IN_BLUE_PORT,
// 		auth: {
// 			user: env.SEND_IN_BLUE_USER,
// 			pass: env.SEND_IN_BLUE_PASSWORD,
// 		},
// 	});

// 	const mailOptions = {
// 		from: env.USER_MAIL,
// 		to: `${email}`,
// 		subject: 'Thank You for Contacting AIP!',
// 		text: `Dear ${firstName},

// Thank you for reaching out to AIP! We have received your message and appreciate you taking the time to contact us.

// Our team will review your inquiry and get back to you within the next 24-25 hours. If your request is urgent, please feel free to follow up.

// Best regards,
// The AIP Team `,
// 	};

// 	await transporter.sendMail(mailOptions);
// }
import env from '../../env.js';
import SibApiV3Sdk from '@sendinblue/client';

const brevoClient = new SibApiV3Sdk.TransactionalEmailsApi();
brevoClient.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, env.SEND_IN_BLUE_API_KEY);

export async function enquiryNotificationToAdmin(firstName, email, message, type) {
	try {
		const sendSmtpEmail = {
			sender: { email: env.USER_MAIL, name: 'AIP Website' },
			to: [{ email: env.USER_MAIL, name: 'Admin' }],
			subject: 'New Website Enquiry Received!',
			htmlContent: `
                <p>Dear Admin,</p>
                <p>You have received a new enquiry from the AIP website.</p>
                <p><strong>Details:</strong></p>
                <ul>
                    <li><strong>Name:</strong> ${firstName}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Enquiry Type:</strong> ${type}</li>
                </ul>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <p>-----------------------</p>
                <p>Please review and respond accordingly.</p>
                <p>Best regards,<br>AIP Website Notification System</p>
            `,
		};

		await brevoClient.sendTransacEmail(sendSmtpEmail);
	} catch (error) {
		console.error('Error sending email to admin:', error);
		throw error;
	}
}

export async function enquiryNotificationToUser(firstName, email) {
	try {
		const sendSmtpEmail = {
			sender: { email: env.USER_MAIL, name: 'AIP Team' },
			to: [{ email: email, name: firstName }],
			subject: 'Thank You for Contacting AIP!',
			htmlContent: `
                <p>Dear ${firstName},</p>
                <p>Thank you for reaching out to AIP! We have received your message and appreciate you taking the time to contact us.</p>
                <p>Our team will review your inquiry and get back to you within the next 24-25 hours. If your request is urgent, please feel free to follow up.</p>
                <p>Best regards,<br>The AIP Team</p>
            `,
		};

		await brevoClient.sendTransacEmail(sendSmtpEmail);
	} catch (error) {
		console.error('Error sending email to user:', error);
		throw error;
	}
}
