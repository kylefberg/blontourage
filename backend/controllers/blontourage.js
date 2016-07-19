// Require resource's model(s).
var User = require("../models/user");
var request = require('request');

var index = function(req, res, next){
  var url = 'http://api.bandsintown.com/artists/blontourage/events.json?api_version=2.0&app_id=blontourage';
  request(url, function(error, resp, body){
    res.json(body);
  });

};

var show = function(req, res, next){
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.json({message: 'Could not find user because ' + err});
    } else if (!user) {
      res.json({message: 'No user with this id.'});
    } else {
      res.json({user: user});
    }
  });
};

module.exports = {
  index: index,
  show:  show
};
