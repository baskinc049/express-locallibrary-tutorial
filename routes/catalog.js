// Where Are We?
/* 
**"Routes" to forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions.
Controller functions get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser.
Views (templates) used by the controllers to render the data.
*/

const express = require('express');
const router = express.Router();

// Require Controllers
const book_controller = require('../controllers/bookController'); 
const author_controller = require('../controllers/authorController');
const genre_controller = require('../controllers/genreController');
const book_instance_controller = require('../controllers/bookInstanceController');

// *** BOOK ROUTES *** //

// Catalog Homepage
router.get('/', book_controller.index);

// GET All Books
router.get('/books', book_instance_controller.book_list);

// GET Book by ID
router.get('/books/:id', book_instance_controller.book_detail);


// *** GENRE ROUTES *** //

// All Genres
router.get('/genre', genre_controller.genre_list);

// Genre by Name
router.get('/genre/:name', genre_controller.genre_detail);


// *** AUTHOR ROUTES *** //

// All Authors
router.get('/author', author_controller.author_list);

// Authors by Name
router.get('/author/:id', author_controller.author_detail);


module.exports = router;