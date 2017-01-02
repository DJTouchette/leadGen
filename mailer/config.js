const nodemailer = require('nodemailer');
function setupMailer() {
  const transporter = nodemailer.createTransport(process.env.smtpUrl);

  return transporter;
};

module.exports = setupMailer;