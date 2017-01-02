require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const applyMiddleware = require('./middleware');
const routes = require('../routes/index');

function makeServer() {
  applyMiddleware(app);
  routes(app, port);

  app.listen(port, () => {
    console.log('listening on port: ' + port);
  });

  return app;
};

module.exports = makeServer;
