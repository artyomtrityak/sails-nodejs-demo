var express = require('express'),
    
  //Express middlewares
  cors = require('cors'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  errorhandler = require('errorhandler'),

  app = express();

app.set('trust proxy', 1);

app.set('test', 555);

//Apply middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));

if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler());
}

//Database
require('app/models');

//Bind routes
require('app/controllers')(app);

// catch 404
app.use(function(req, res, next) {
  res.status(404).json({message: 'API Not Found'});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
