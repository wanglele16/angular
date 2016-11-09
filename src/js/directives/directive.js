angular.module('backstage')
    .directive('locationInfo', function() {
        return {
            restrict: 'EA',
            templateUrl: require('./directivelocation.string'),
            scope: true,
            link: function(scope, elem, attrs) {

            },
            controller: function($scope) {

            }
        }
    })
