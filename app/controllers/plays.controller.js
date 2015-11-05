'use strict';

var express = require('express'),
  router = express.Router();

module.exports = router;

router.get('/', function(req, res) {
  console.log(req.app.get('test'));
  res.status(200).json({ok: 3});
});

router.get('/:id', function(req, res) {
  res.status(200).json({ok: 4});
});
