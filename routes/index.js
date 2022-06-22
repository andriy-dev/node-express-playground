var express = require('express');
var router = express.Router();
const { index } = require('../controller/controller');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
