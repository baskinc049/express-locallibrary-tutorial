// Where Are We?
/* 
**"Routes" to forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions.
Controller functions get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser.
Views (templates) used by the controllers to render the data.
*/

const express = require('express');
const router = express.Router();

// Require Controllers
var book_controller = require('../controllers/bookController'); 


// Catalog Homepage
router.get('/', book_controller.index);

// *** BOOK ROUTES ***

// All Books
router.get('/books', (req, res) => {
    res.send('List of all Books...')
});

// Book by ID
router.get('/books/:id', (req, res) => {
    res.send(`Requested a book with id of ${req.params.id}`)
});

// *** GENRE ROUTES ***

// All Genres
router.get('/genre', (req, res) => {
    res.send('List of all Genres...')
});

// Genre by Name
router.get('/genre/:name', (req, res) => {
    res.send(`Requested a book with id of ${req.params.name}`)
});


// *** AUTHOR ROUTES ***


module.exports = router;