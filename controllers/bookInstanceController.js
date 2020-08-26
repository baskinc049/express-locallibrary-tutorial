const BookInstance = require('../models/Book');

// List of All Books
exports.bookinstance_list = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance list')
};

//Details Page for Specific Book Instance
exports.bookinstance_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance detail: ' + req.params.id);
};