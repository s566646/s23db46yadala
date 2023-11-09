var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentRouter = require('./routes/student');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');
var Student = require("./models/student");



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/student', studentRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);





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

// We can seed the collection if needed on
async function recreateDB(){
  // Delete everything
  await Student.deleteMany();
  let instance1 = new
  Student({Stu_Name:"Satya", Stu_Age:23,Mail_Id:"Satya@gmail.com"});

  instance1.save().then( () => {
    console.log('Everything went well');
  }).catch( (e) => {
    console.log('There was an error', e.message);
  });

  let instance2 = new
  Student({Stu_Name:"Narayana", Stu_Age:22,Mail_Id:"Nari@gmail.com"});

  instance2.save().then( () => {
    console.log('Everything went well');
  }).catch( (e) => {
    console.log('There was an error', e.message);
  });

  let instance3 = new
  Student({Stu_Name:"Ganesh", Stu_Age:21,Mail_Id:"Ganey@yahoo.com"});

  instance3.save().then( () => {
    console.log('Everything went well');
  }).catch( (e) => {
    console.log('There was an error', e.message);
  });
  }
  let reseed = true;
  if (reseed) { recreateDB();}


module.exports = app;
