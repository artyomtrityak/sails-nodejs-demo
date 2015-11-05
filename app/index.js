var express = require('express'),
    
  //Express middlewares
  cors = require('cors'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  errorhandler = require('errorhandler'),

  app = express();

app.set('trust proxy', 1);

//Apply middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler());
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
