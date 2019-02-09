var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require("mongoose");

const config = require('./config');
var indexRouter = require('./routes/index');
var postRouter = require("./routes/post");
var authRouter = require("./routes/auth");

var app = express();
app.use(require('connect-history-api-fallback')());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());

app.set('jwt-secret', config.secret);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/post', postRouter);
app.use('/auth', authRouter);

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log("Connection to mongodb");
});
app.db = db;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/blog', { 
  'useNewUrlParser': true, 
  'useCreateIndex': true
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
