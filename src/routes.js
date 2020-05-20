var express = require('express');
var router = express.Router();

const modelViewController = require('./controllers/ModelView');

router.get('/', modelViewController.ShowModel);

module.exports = router;    