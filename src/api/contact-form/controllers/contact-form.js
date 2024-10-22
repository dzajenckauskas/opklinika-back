'use strict';


/**
 * contact-form controller
*/
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});


const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::contact-form.contact-form', ({ strapi }) => ({
    async create(ctx) {
        const { data } = await super.create(ctx);
        const emailContent = `
        <h1>New Contact Form Submission</h1>
        <p><strong>Date:</strong> ${data.attributes.createdAt}</p>
        <p><strong>Name:</strong> ${data.attributes.name}</p>
        <p><strong>Email:</strong> ${data.attributes.email}</p>
        <p><strong>Message:</strong> ${data.attributes.message}</p>
    `;
        async function main() {
            const info = await transporter.sendMail({
                to: ['info@opklinika.lt', '1000kaktusu@gmail.com'],
                from: 'info@opklinika.lt',
                subject: `NAUJA užklausos forma užpildyta per OPKLINIKA.LT: ${data.attributes.name}`,
                html: emailContent
            });
            console.log("Message sent: %s", info.messageId);
        }

        main().catch(console.error);


        return { data };
    }
}));
