var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {title: 'Home'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', {title: 'About'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', {title: 'Contact Us'});
});


module.exports = router;
