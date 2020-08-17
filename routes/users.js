// 3. ROUTES WHAT IS A ROUTE?
// A section of code that associates an HTTP verb (GET, POST, etc.), a URL path/pattern, and a function that is called to handle that patern. Routing refers to how an app's endpoints respond to client request.
// The express.Router middleware to group route handlers for a particular part of the site together. Library-related routes will be in a "catalog" module and other user-related routes will be grouped separately.

/*
app.METHOD(PATH, HANDLER);

Where:
    app is an instance of express.
    METHOD is an HTTP request method, in lowercase.
    PATH is a path on the server.
    HANDLER is the function executed when the route is matched.
*/

// When creating routes make sure that they are exposed to and imported into app.js

// ROUTE PATHS
// Route paths define the endpoints at which requests can be made, they can also be string patterns.

// ROUTE PARAMETERS
// Named URL segments (/:parameter_name/) used to capture values at specific positions in the URL.
// The captured values are stored in the req.params object using the parameter names as keys and can be extracted using req.params.parameter_name.


// Route Tester
// https://forbeslindesay.github.io/express-route-tester/


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
