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

//Bind routes
require('app/controllers')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
