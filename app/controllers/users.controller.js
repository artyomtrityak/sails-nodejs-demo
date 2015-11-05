'use strict';

var express = require('express'),
  router = express.Router();

module.exports = router;

router.get('/', function(req, res) {
  res.status(200).json({ok: 5});
});

router.get('/:id', function(req, res) {
  res.status(200).json({ok: 6});
});
