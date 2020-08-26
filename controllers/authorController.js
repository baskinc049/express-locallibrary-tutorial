const Author = require('../models/Author');

// Display List of All Authors
exports.author_list = (req, res) => {
    res.send("NOT IMPLEMENTED: Author List");
};

// Display Detail Page for a specific Author
exports.author_list = (req, res) => {
    res.send("NOT IMPLEMENTED: Author Profile: " + req.params.id);
};

// DESC
// This controller module for Authors first requires the model that will be used to access and read the data, then URL handlers are exported that will be responsible for handling requests.