const mailer = require('../mailer/index');

function objToString(obj) {
  let newString = '';

  for (let key in obj) {
    newString += String(key) + ': ' + String(obj[key] + '\n');
  }

  return newString;
};

class LeadsController {
  constructor() {

  }

  emailAgent(req, res, next) {
    const { name, phone, email, message, isRealtor, building } = req.body;
    const info = objToString({ name, phone, email, message, isRealtor, building });
    const optionObj = mailer.mailOptionsGen('New lead from ' + building, info);

    const mailPromise = mailer.sendEmail(optionObj);

    mailPromise.then((info) => {
      res.json({ success: true, content: info });
    })
    .catch((err) => {
      res.json({ success: false, content: err });
    });
  }
}

module.exports = LeadsController;