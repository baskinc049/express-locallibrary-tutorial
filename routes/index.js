var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
 // res.redirect('/catalog');
});

module.exports = router;

// 4. VIEWS (TEMPLATES)
// Views (templates) are stored in the /views dir (as specified in app.js) and are given the file ext. .pug
// Response.render() method is used to render a specified template along with the values of named variables passed in an object

