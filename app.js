require('dotenv').config();
const mailgun = require("mailgun-js");
const mg = mailgun({
	apiKey: process.env.API_KEY,
	domain: process.env.DOMAIN
});
const data = {
	from: "Mailgun Sandbox <postmaster@" + process.env.DOMAIN + ">",
	to: process.env.EMAIL,
	subject: "Hello from mailgun",
	text: "Testing Mailgun email"
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});

// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10000 emails/month for free.