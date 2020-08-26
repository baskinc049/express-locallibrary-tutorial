const Genre = require('../models/Genre');

// List of All Genres
exports.genre_list = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre list');
};

// Details Page for a specific Genre
exports.genre_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
};