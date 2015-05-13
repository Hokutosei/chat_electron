(function() {
    'use strict';

    var log = function(str) { console.log(str); }

    angular.module('test_electron').controller('IndexController', function($scope, $timeout) {
        $scope.test ="va2r"
        $scope.time = ""

        // clock timer
        $scope.initTime = function() {
            $timeout(function() {
                var currentdate = new Date();
                var datetime = "~> " + currentdate.getDate() + "/"
                                + (currentdate.getMonth()+1)  + "/"
                                + currentdate.getFullYear() + " @ "
                                + currentdate.getHours() + ":"
                                + currentdate.getMinutes() + ":"
                                + currentdate.getSeconds().toFixed();

                $scope.time = datetime;
            }, 0)

            setTimeout($scope.initTime, 1000)
        }

        // messages array to display in page
        $scope.messages = []

        // message submit handler
        $scope.submit = function() {
            $scope.messages.push("me -> " + $scope.message)
            $scope.message = ""
        }

    })


}());
