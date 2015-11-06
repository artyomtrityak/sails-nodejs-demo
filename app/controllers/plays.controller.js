'use strict';

var express = require('express'),
  router = express.Router();

module.exports = router;

//Get plays list
router.get('/', function(req, res) {
  res.status(200).json({plays: []});
});

//Get play
router.get('/:id', function(req, res) {
  res.status(200).json({ok: 2});
});

//Create play
router.post('/', function(req, res) {
  res.status(200).json({ok: 3});
});

//Update play
router.put('/:id', function(req, res) {
  res.status(200).json({ok: 4});
});

//Delete play
router.delete('/:id', function(req, res) {
  res.status(200).json({ok: 5});
});

//Join play
router.post('/join/:id', function(req, res) {
  res.status(200).json({ok: 6});
});
