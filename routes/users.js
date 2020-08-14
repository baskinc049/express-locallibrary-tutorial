// 3. ROUTES

// Load the express module to get access to the express.Router() object
var express = require('express');
var router = express.Router();

// The route defines a callback that is invoked whenever an HTTP GET request with the correct pattern is detected
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Challenge - Add a new route
router.get('/info', (req, res, next) => {
  res.send('information about users')
});


// Export the configured route to be used in app.js
module.exports = router;

// NEXT - index.js and index.pug
