var express = require('express');
var router = express.Router();
const { QueryTypes } = require('sequelize');
const db = require('../config/database');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// https://stackoverflow.com/questions/14669669/how-to-parse-variables-in-querystring-using-express
router.get('/providers', function(req, res) {
  // res.render('index', { title: 'Express' });
  // res.redirect('/catalog');
  //res.send(`Searched for providers by: ${req.query.plan}, ${req.query.spec}, ${req.query.members}.`);
  db.findAll({
    where: {
      plan: req.query.plan,
      prov_spec: req.query.spec,
      member_group: req.query.members 
    } // SELECT * FROM post WHERE plan = ... AND prov_spec = ...;
  });
});

module.exports = router;

// 4. VIEWS (TEMPLATES)
// Views (templates) are stored in the /views dir (as specified in app.js) and are given the file ext. .pug
// Response.render() method is used to render a specified template along with the values of named variables passed in an object

