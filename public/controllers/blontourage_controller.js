(function() {
  'use strict';

  angular
    .module('blontourage')
    .controller('BlontourageController', BlontourageController);

  BlontourageController.$inject = ["$http", "$log"];

  function BlontourageController($http, $log) {
    var vm = this;
    vm.shows = [];
    vm.music = false;

    $http.get('/api/blontourage').then(function (res) {
      console.log(res);
      var shows = JSON.parse(res.data);
      // shows.forEach(function(show) {
        // modify the show objects any way you want
      //   show.formatted_datetime = 'THE DATE AND TIME';
      // });
      vm.shows = shows;
    }, function(err) {
      $log.warn(err);
    });

  }


})();


