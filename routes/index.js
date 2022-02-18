var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Purchase route
router.get('/purchase', (req, res) => {
  res.json({ blah: 'blah' });
});

// Auth route
router.get('/auth', (req, res) => {
  res.json({ blah: 'auth blah' });
});

module.exports = router;
