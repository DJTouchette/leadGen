    const bodyParser = require('body-parser');
    const cookieParser = require('cookie-parser');
    const morgan = require('morgan');

    function applyMiddleware(app) {
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());
      app.use(cookieParser());
      
      if (process.env.DEV) {
        app.use(morgan('dev'));
      }
    }

    module.exports = applyMiddleware;