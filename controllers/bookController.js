
// @desc Display catalog home page and handle anything to do with books and book instances
// @routes GET /catalog
// @access Public

// Where Are We?
/* 
"Routes" to forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions.
**Controller functions to get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser.
Views (templates) used by the controllers to render the data.
*/

const Book = require('../models/Book');

// Additional function to display the site welcome page
exports.index = (req, res) => {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all books.
exports.book_list = (req, res) => {
    res.send('NOT IMPLEMENTED: Book list');
};

// Details for a specific book
exports.book_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};