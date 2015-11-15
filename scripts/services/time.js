(function() {
  'use strict';

  angular
    .moudle('timeTracker')
    .factory('time', time);

    function time($resource) {
      var time = $resource('data/time.json');
      return {};
    }
});