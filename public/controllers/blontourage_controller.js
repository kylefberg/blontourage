(function() {
  'use strict';

  angular
    .module('blontourage')
    .controller('BlontourageController', BlontourageController);

  BlontourageController.$inject = ["$http"];

  function BlontourageController($http) {
    var vm = this;
    vm.all = [];
    var url = 'http://api.bandsintown.com/artists/blontourage/events.json?api_version=2.0&app_id=blontourage'
    function findShows() {

        request.get(url, function (error, res, body) {
          var concerts = body;
          console.log(body);
        })
        } function(err) {
          $log.warn(err);
        };
    }



  }
})();


