(function() {
    'use strict';

    angular.module('bidit')
        .factory('ItemService', function() {
            return [{
            	id: "#13434234",
                title: "item  1",
                description: "Lenovo 8GB i7",
                price: 260,
                remaining: "32h:5m:4s"
            }, {
            	id: "#23434234",
                title: "item  2",
                description: "Lenovo 4GB i5",
                price: 300,
                remaining: "32h:5m:4s"
            }, {
            	id: "#33434234",
                title: "item  3",
                description: "HP 16GB i7",
                price: 80,
                remaining: "32h:5m:4s"
            }, {
            	id: "#43434234",
                title: "item  4",
                description: "Mac 8GB i7",
                price: 120,
                remaining: "32h:5m:4s"
            }];
        });
})();
