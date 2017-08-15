'use strict';

eventsApp.controller('EventController', function($scope) {
  $scope.event = {
    name: 'something',
    location: {
      address: '123 something',
      city: 'somewhereville'
    }
  };
});