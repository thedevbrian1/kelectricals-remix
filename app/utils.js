import { json } from "@remix-run/node";

export const navLinks = [
    {
        path: '/',
        name: 'Home',
        id: 1,
    },
    {
        path: '/about',
        name: 'About',
        id: 2,
    },
    {
        path: '/projects',
        name: 'Projects',
        id: 3,
    },
    {
        path: '/about#contact',
        name: 'Contact',
        id: 4,
    }
];

export function validateEmail(email) {
    if (typeof email !== "string" || !email || email.length < 3 || !email.includes("@")) {
        return 'Email is invalid';
    }
}

export function validateName(name) {
    if (typeof name !== "string" || name.length < 2) {
        return 'Name is invalid';
    }
}

export function trimPhone(phone) {
    return phone.replace(/\s+/g, '');
}

export function validatePhone(phone) {
    const safariomRegex = /^(?:254|\+254|0)?([71](?:(?:0[0-8])|(?:[12][0-9])|(?:9[0-9])|(?:4[0-3])|(?:4[68]))[0-9]{6})$/;

    const airtelRegex = /^(?:254|\+254|0)?(7(?:(?:3[0-9])|(?:5[0-6])|(?:8[0-2])|(?:8[6-9]))[0-9]{6})$/;

    const telkomRegex = /^(?:254|\+254|0)?(77[0-9][0-9]{6})$/;

    if (typeof phone !== "string" || phone.length < 10) {
        return 'Phone number is invalid';
    }
    else if (!phone.match(safariomRegex) && !phone.match(airtelRegex) && !phone.match(telkomRegex)) {
        return 'Phone number is invalid';
    }
}

export function validateMessage(message) {
    if (message.length === 0) {
        return 'Message cannot be empty';
    } else if (typeof message !== 'string' || message.length < 2) {
        return 'Message is invalid';
    }
}

export function badRequest(data) {
    return json(data, { status: 404 });
}

export async function sendEmail({ name, email, phone, message }) {
    const Mailjet = require('node-mailjet');
    const mailjet = Mailjet.apiConnect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

    try {
        const res = await mailjet
            .post("send", { 'version': 'v3' })
            .request({
                "FromEmail": "brayomwas95@gmail.com",
                "FromName": "thedevbrian Website",
                "Recipients": [
                    {
                        "Email": "mwangib041@gmail.com",
                        "Name": "Brian Mwangi"
                    }
                ],
                "Subject": "Test email from KE",
                "Text-part": "This is the text part of this email",
                "Html-part": `
            <h3>Message from website</h3>
            <p>${message}</p>
            <p>Here are my contact details: </p>
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Phone: ${phone} </p>
            `
            });
        // console.log('Email response: ', res.body);
    } catch (err) {
        throw new Response(err, { status: err.statusCode })
    }

}