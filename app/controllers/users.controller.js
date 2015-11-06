'use strict';

var express = require('express'),
  router = express.Router();

module.exports = router;

//Get users list
//TODO: add ACL
router.get('/', function(req, res) {
  res.status(200).json({users: []});
});

//Get user details
//TODO: add ACL
router.get('/:id', function(req, res) {
  res.status(200).json({ok: 2});
});

//Create user
router.post('/', function(req, res) {
  res.status(200).json({ok: 3});
});

//Update user
//TODO: add acl
router.put('/:id', function(req, res) {
  res.status(200).json({ok: 4});
});

//Delete user
//TODO: add ACL
router.delete('/:id', function(req, res) {
  res.status(200).json({ok: 5});
});
