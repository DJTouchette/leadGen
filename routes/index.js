const LeadRoutes = require('./leads');

function initiateRoutes(app, port) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/', (req, res) => {
    res.send('Hello World! The API is at http://localhost:' + port);
  });

  const leadRoutes = new LeadRoutes(app).initiateRoutes();

}

module.exports = initiateRoutes;