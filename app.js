// 2. CREATES THE EXPRESS APPLICATION OBJECT
// Setting up the app with various settings and middleware, then exports the app from the module.

// A. Importing useful libraries for error handling, cookie parsing, and logging.
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// B. Importing modules from ROUTES dir to define particular routes for different parts of the site.
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// C. Create the APP OBJECT using the above imported express module.
var app = express();

// D. View TEMPLATE ENGINE Setup
// Identify where the templates will be stored - subfolder /views
app.set('views', path.join(__dirname, 'views'));
// Set the template library to pug.
app.set('view engine', 'pug');

// E. Adding MIDDLEWARE - Calling middleware stack via .use()
// morgan - HTTP request logger middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Serving Static Files in the /public dir
app.use(express.static(path.join(__dirname, 'public')));

// F. ROUTE HANDLING CODE
// Adding route-handling code to the request chain.
app.use('/', indexRouter);
app.use('/users', usersRouter);

// G. ADDITIONAL MIDDLEWARE
// Hangler methods for HTTP 404 responses.

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

// The Express app object (app) is now fully configured

// H. EXPORT CONFIGURED APP
// Export the app object to be supplied to the www entry point (bin/www).
module.exports = app; 

// NEXT - users.js