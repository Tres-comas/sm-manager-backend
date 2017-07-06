'use strict';
const express = require('express');
const router = express.Router();
const chance = require('chance').Chance();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const stories = {
    title: chance.string(),
    estimate: chance.integer({min: 1, max: 8}),
    workflow: 0
  };
  res.send(stories);
});

module.exports = router;
