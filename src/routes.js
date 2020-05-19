var express = require('express');
var router = express.Router();

const modelViewController = require('./controllers/ModelView');

router.get('/:objectType', modelViewController.ShowModel);

module.exports = router;    