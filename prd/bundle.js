/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	__webpack_require__(7);
	
	__webpack_require__(8);
	__webpack_require__(9);
	
	__webpack_require__(10);
	
	__webpack_require__(19);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*angular.module('backstage',
	  [
	    'ngRoute',
	    'app-ctrl',
	    'app-service'
	  ]
	)*/
	
	var backstage = angular.module('backstage', ['ui.router', 'app-ctrl', 'app-service']);
	
	exports.backstage = backstage;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// import {backstage} from "./main.js";
	// console.log(backstage);
	var appCtrl = angular.module('app-ctrl', []);
	exports.appCtrl = appCtrl;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main = __webpack_require__(5);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appService = angular.module('app-service', []);
	exports.default = appService;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _controller = __webpack_require__(6);
	
	_controller.appCtrl.controller('appController', ['$scope', '$http', function ($scope, $http) {
	    // console.log($http);
	    $scope.backstage = {
	        "name": "千锋教育",
	        "user": "Wang",
	        "profile": "简介",
	        "settings": "设置",
	        "logout": "退出"
	    };
	    $scope.menuList = [];
	    $http.get('/mock/menu.json').then(function (res) {
	        $scope.menuList = res.data.menu;
	    }, function () {
	        console.log("err");
	    });
	
	    $scope.curr = 0;
	    $scope.changeStyle = function (i) {
	        $scope.curr = i;
	    };
	}]);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _controller = __webpack_require__(6);
	
	_controller.appCtrl.controller('table1Controller', ['$scope', '$http', function ($scope, $http) {
	    $scope.studentInfo = [];
	    $scope.pages = [1, 2, 3, 4, 5];
	    $scope.curpage = 1;
	    $scope.searchcon = '';
	
	    loadData();
	
	    function loadData() {
	        $http.get('/mock/userinfo' + $scope.curpage + '.json').then(function (res) {
	            $scope.studentInfo = res.data;
	        });
	    };
	
	    $scope.minuspage = function () {
	        if ($scope.curpage <= 1) {
	            $scope.curpage = 1;
	        } else {
	            $scope.curpage--;
	        }
	        loadData();
	    };
	    $scope.addPage = function () {
	        if ($scope.curpage >= 5) {
	            $scope.curpage = 5;
	        } else {
	            $scope.curpage++;
	        }
	        loadData();
	    };
	    $scope.changepage = function (index) {
	        $scope.curpage = index;
	        loadData();
	    };
	
	    $scope.bianji = function (list, index) {
	        $scope.currchangeInfo = list;
	        //console.log(  $scope.currchangeInfo);
	        $scope.currchangeindex = index;
	    };
	    $scope.saveData = function () {
	        //console.log(1);
	        $scope.studentInfo[$scope.currchangeindex] = $scope.currchangeInfo;
	    };
	    $scope.cancelData = function () {
	        //console.log(1);
	        loadData();
	    };
	    $scope.delData = function () {
	        $scope.studentInfo.splice($scope.currchangeindex, 1);
	    };
	
	    /*  $scope.search = function(value) {
	          if ($scope.searchcon != "") {
	              if(value.xuehao.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ) {
	                  return true;
	              } else {
	                  return false;
	              }
	          } else {
	              return true;
	          }
	      }*/
	}]);
	
	_controller.appCtrl.controller('specificController', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
	    console.log($stateParams.speId);
	    $scope.studentInfo = [];
	
	    loadData();
	
	    function loadData() {
	        for (var i = 1; i <= 5; i++) {
	            $http.get('/mock/userinfo' + i + '.json').then(function (res) {
	                /*  $scope.studentInfo.push(res.data);
	                    $scope.studentInfo.forEach(function(value, index) {
	                    value.forEach(v, i) {
	                      console.log(v);
	                    }
	                      console.log(value);
	                  })*/
	            });
	        }
	    };
	}]);
	
	_controller.appCtrl.controller('table2Controller', ['$scope', function ($scope) {
	    // console.log("table2Controller");
	}]);
	
	_controller.appCtrl.controller('table3Controller', ['$scope', function ($scope) {}]);
	
	_controller.appCtrl.controller('table4Controller', ['$scope', function ($scope) {}]);
	
	_controller.appCtrl.controller('table5Controller', ['$scope', function ($scope) {}]);
	
	_controller.appCtrl.controller('table6Controller', ['$scope', function ($scope) {}]);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

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
	
	angular.module('backstage').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('/app/table1');
	  $stateProvider.state('app', {
	    url: '/app',
	    templateUrl: __webpack_require__(11),
	    controller: 'appController'
	  }).state('app.table1', {
	    url: '/table1',
	    templateUrl: __webpack_require__(12),
	    controller: 'table1Controller'
	  }).state('app.specific', {
	    url: '/specific/:speId',
	    templateUrl: __webpack_require__(18),
	    controller: 'specificController'
	  }).state('app.table2', {
	    url: '/table2',
	    templateUrl: __webpack_require__(13),
	    controller: 'table1Controller'
	  }).state('app.table3', {
	    url: '/table3',
	    templateUrl: __webpack_require__(14),
	    controller: 'table3Controller'
	  }).state('app.table4', {
	    url: '/table4',
	    templateUrl: __webpack_require__(15),
	    controller: 'table4Controller'
	  }).state('app.table5', {
	    url: '/table5',
	    templateUrl: __webpack_require__(16),
	    controller: 'table5Controller'
	  }).state('app.table6', {
	    url: '/table6',
	    templateUrl: __webpack_require__(17),
	    controller: 'table6Controller'
	  });
	}]);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "tpls/app.string";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "tpls/table1.string";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "tpls/table2.string";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "tpls/table3.string";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "tpls/table4.string";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "tpls/table5.string";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "tpls/table6.string";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "tpls/specific.string";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	angular.module('backstage').directive('locationInfo', function () {
	    return {
	        restrict: 'EA',
	        templateUrl: __webpack_require__(20),
	        scope: true,
	        link: function link(scope, elem, attrs) {},
	        controller: function controller($scope) {}
	    };
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "tpls/directivelocation.string";

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map