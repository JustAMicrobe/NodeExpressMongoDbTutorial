// wiki.js - wiki route module

var express = require('express');
var router = express.Router();

// Homepage
router.get('/', function (req, res) {
  res.send('wiki Home page');
});

// about
router.get('/about', function (req, res) {
  res.send('about the wiki');
});

module.exports('wiki');