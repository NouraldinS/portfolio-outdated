const express = require('express');
const home = require('./homeController');

const router = express.Router();

router.get('/', home.get);

module.exports = router;
