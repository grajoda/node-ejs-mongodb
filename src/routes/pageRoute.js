/*
    Basic Route Template
*/

const express = require('express');

const middleware = require('../middlewares/middleware');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.get('/home', pageController.renderHome );


module.exports = router;