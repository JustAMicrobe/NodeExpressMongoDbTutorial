﻿'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

router.get('/cool', function (req, res) {
  res.send('you are so cool')
});

module.exports = router;
