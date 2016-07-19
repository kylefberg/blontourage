angular.module('blontourage')
.filter('addBreaks', function() {
  return function(input) {
    return input.split(' ').join('<br />').replace(/,/g, '');
  };
});
