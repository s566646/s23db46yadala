var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('student', { title: 'search results for a student' });
});

module.exports = router;