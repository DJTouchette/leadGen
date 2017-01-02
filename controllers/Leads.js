const mailer = require('../mailer/index');

class LeadsController {
  constructor() {

  }

  emailAgent(req, res, next) {
    const { name, phone, email, message } = req.body;
    const info = JSON.stringify({ name, phone, email, message });
    const optionObj = mailer.mailOptionsGen('New Lead', info);

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