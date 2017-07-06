'use strict';
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const stories = {
    title: '',
    estimate: 5,
    workflow: 'open'
  };
  res.send(stories);
});

module.exports = router;
