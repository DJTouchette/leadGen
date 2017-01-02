const mailer = require('../mailer/index');
const LeadsController = require('../controllers/Leads');

class LeadRoutes {
  constructor(app) {
    this.controller = new LeadsController();
    this.app = app;
  }

  reportLead() {
    this.app.post('/sendemail', this.controller.emailAgent);
  }

  initiateRoutes() {
    this.reportLead();
  }
}

function leadRoutes(app) {
  app.post('/sendemail', (req, res) => {
    console.log(req.body);
    // mailer.sendEmail(mailer.mailOptionsGen());
    return res.json({success: true});
  });
}

module.exports = LeadRoutes;