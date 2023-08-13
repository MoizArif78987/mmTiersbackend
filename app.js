var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var checkstatusRouter = require('./routes/checkStatus');
var reviewRouter = require('./routes/review')
var getreviewRouter = require('./routes/getreviews')
var bookingrequestRouter = require('./routes/bookingrequest')
var addemployeeRouter = require('./routes/addemployee')
var getemployeesRouter = require('./routes/getemployees')
var deleteemployeeRouter = require('./routes/deleteEmployee')
var editemployeeRouter = require('./routes/editemployee')
var checkStatusandpaymentRouter = require('./routes/checkStatusandPayment')
var stripepageRouter = require('./routes/stripepage')
var contactRouter = require('./routes/contact')
var getmessageRouter = require('./routes/getmessages')
var replyRouter = require('./routes/reply')



var database = require('./database/sql');
const cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/checkStatus',checkstatusRouter)
app.use('/review', reviewRouter)
app.use('/getreviews', getreviewRouter)
app.use('/bookingrequest', bookingrequestRouter)
app.use('/addemployee',addemployeeRouter)
app.use('/getemployees',getemployeesRouter)
app.use('/deleteEmployee',deleteemployeeRouter)
app.use('/editEmployee',editemployeeRouter)
app.use('/checkStatusandpayment',checkStatusandpaymentRouter)
app.use('/stripepage', stripepageRouter)
app.use('/contact', contactRouter)
app.use('/getmessage', getmessageRouter)
app.use('/reply', replyRouter)


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
