const setupMailer = require('./config');
const transporter = setupMailer();

function sendEmail(mailOptions) {
  const email = new Promise(
      (resolve, reject) => {
        transporter.sendMail(mailOptions, function(err, info) {
        if (err) return reject(new Error('failed to send email'));

        console.log('Message sent ' + info.response);
        resolve(info.response);
        });
      }   
    );
  
  return email;
}

function mailOptionsGen(subject, text) {
  return {
    from: '"LeadGen" <lead.gen.new.builds@gmail.com>', // sender address
    to: 'jessey@ipekian.ca', // list of receivers
    subject: subject, // Subject line
    text: text, // plaintext body
  };
};

module.exports.sendEmail = sendEmail;
module.exports.mailOptionsGen = mailOptionsGen;