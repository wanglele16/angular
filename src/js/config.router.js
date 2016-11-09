'use strict';

/*angular.module('backstage')
  .config(['$routeProvider',function($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/table'
      })
      .when('/table', {
        templateUrl: '/tpls/table.html',
        controller: 'testController'
      })
      .when('/form', {
        templateUrl: '/tpls/form.html'
      })
  }])*/

angular.module('backstage')
  .config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/app/table1');
    $stateProvider
      .state('app', {
        url: '/app',
        templateUrl: require('../tpls/app.string'),
        controller: 'appController'
      })
      .state('app.table1', {
        url: '/table1',
        templateUrl: require('../tpls/table1.string'),
        controller: 'table1Controller'
      })
      .state('app.specific', {
        url: '/specific/:speId',
        templateUrl: require('../tpls/specific.string'),
        controller: 'specificController'
      })
      .state('app.table2', {
        url: '/table2',
        templateUrl: require('../tpls/table2.string'),
        controller: 'table1Controller'
      })
      .state('app.table3', {
        url: '/table3',
        templateUrl: require('../tpls/table3.string'),
        controller: 'table3Controller'
      })
      .state('app.table4', {
        url: '/table4',
        templateUrl: require('../tpls/table4.string'),
        controller: 'table4Controller'
      })
      .state('app.table5', {
        url: '/table5',
        templateUrl: require('../tpls/table5.string'),
        controller: 'table5Controller'
      })
      .state('app.table6', {
        url: '/table6',
        templateUrl: require('../tpls/table6.string'),
        controller: 'table6Controller'
      })

  }])
