const setupMailer = require('./config');
const transporter = setupMailer();

function sendEmail(mailOptions) {
  // transporter.sendMail(mailOptions, function(err, info) {
  //   if (err) return new Error('failed to send email');

  //   console.log('Message sent ' + info.response);
  //   return info.response;
  // });
  return new Promise(
      (resolve, reject) => {
        transporter.sendMail(mailOptions, function(err, info) {
        if (err) return reject(new Error('failed to send email'));

        console.log('Message sent ' + info.response);
        resolve(info.response);
        });
      }   
    );
  // transporter.sendMail(mailOptions, function(err, info) {
  //   if (err) return reject(new Error('failed to send email'));

  //   console.log('Message sent ' + info.response);
  //   resolve(info.response);
  // });

  
}

function mailOptionsGen(subject, text) {
  return {
    from: '"LeadGen" <lead.gen.new.builds@gmail.com>', // sender address
    to: 'djtouchette1993@gmail.com', // list of receivers
    subject: subject, // Subject line
    text: text, // plaintext body
  };
};

module.exports.sendEmail = sendEmail;
module.exports.mailOptionsGen = mailOptionsGen;