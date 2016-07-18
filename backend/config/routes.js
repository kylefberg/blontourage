var express = require('express'),
    router  = new express.Router();

// Require controllers.
var pagesController = require('../controllers/pages');
var blontourageController = require('../controllers/blontourage');

// root path:
router.get('/', pagesController.welcome);

// users resource paths:
router.get('/blontourage',     blontourageController.index);
// router.get('/users/:id', usersController.show);

module.exports = router;
