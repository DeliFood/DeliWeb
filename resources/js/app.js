/**
 * Created by lanfuli on 10/29/16.
 */

/*jslint node: true, vars: true, bitwise: true */
/*global angular */
/* find out more about jslint: http://www.jslint.com/help.html */

"use strict";
angular.module('myApp', [])
    .controller('myCtrl', ['$scope', function($scope) {
        $scope.count = 0;
        $scope.myFunc = function() {
            $scope.count++;
        };
    }]);
