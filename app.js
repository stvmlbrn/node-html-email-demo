require('dotenv-safe').config();

const nodemailer = require('nodemailer');
const Email = require('email-templates');

const transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 465,
  secure: false,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  }
});

const email = new Email({
  transport: transporter,
  send: true,
  preview: false,
});

email.send({
  template: 'hello',
  message: {
    from: 'Steve Milburn <no-reply@blog.com>',
    to: 'john@snow.com',
  },
  locals: {
    fname: 'John',
    lname: 'Snow',
  }
}).then(() => console.log('email has been sent!'));
