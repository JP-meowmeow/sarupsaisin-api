// test-email.js
require('dotenv').config();
const transporter = require('./config/nodemailer');

async function testEmail() {
  try {
    console.log("Testing email with:", {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: 'Test Email',
      text: 'If you receive this email, your email configuration is working.'
    });

    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending test email:', error);
  }
}

testEmail();