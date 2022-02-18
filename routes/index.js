var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Purchase route
router.get('/purchase', (req, res) => {
  res.render('routesView', {
    title: 'Purchase Page',
    functionality: 'This used is used for purchasing.',
  });
});

// Auth route
router.get('/auth', (req, res) => {
  res.render('routesView', {
    title: 'Authentication Page',
    functionality: 'You can use this page to login.',
  });
});

module.exports = router;
