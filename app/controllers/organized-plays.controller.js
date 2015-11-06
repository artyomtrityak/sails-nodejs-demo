'use strict';

var express = require('express'),
  router = express.Router();

module.exports = router;

//Get list of available organized plays
router.get('/', function(req, res) {
  res.status(200).json({organizedPlays: []});
});
