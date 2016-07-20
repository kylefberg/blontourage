angular.module('blontourage')
.filter('addBreaks', function() {
  return function(input) {
    var a = input.split(' ');
    s = a[0] + '<br />' + a[1];
    a = a.slice(2);
    return s.replace(/,/g, '') + ' ' + a.join('<br/>').replace(/,/g, '');
  };
});
