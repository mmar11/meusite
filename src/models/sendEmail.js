import sgMail from '@sendgrid/mail'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

function sendEmail(text, email, name) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    let msg = {
        to: process.env.EMAIL, // Change to your recipient or add to you .env file
        from: process.env.EMAIL, // Change to your verified sender or add to you .env file
        subject: 'Message from Marcelo website',
        text: `Message`,
        html: `Message received from:  Name: ${name} - Email:${email} with text: ${text}`
    }

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}
export { sendEmail }