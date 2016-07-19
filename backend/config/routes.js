var express = require('express'),
    router  = new express.Router();

// Require controllers.
var blontourageController = require('../controllers/blontourage');

// root path:

// users resource paths:
router.get('/api/blontourage', blontourageController.index);
// router.get('/users/:id', usersController.show);

module.exports = router;
