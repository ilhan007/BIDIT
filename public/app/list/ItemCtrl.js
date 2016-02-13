(function() {
    'use strict';

    angular.module('bidit')
        .controller('ItemCtrl', ['$scope', 'ItemService', function($scope, ItemService) {
            
            $scope.items = ItemService;
           	console.log($scope.items);
        }]);
})();