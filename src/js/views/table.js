import {
    appCtrl
} from "../controller.js";


appCtrl.controller('table1Controller', ['$scope', '$http', function($scope, $http) {
    $scope.studentInfo = [];
    $scope.pages = [1, 2, 3, 4, 5];
    $scope.curpage = 1;
    $scope.searchcon = '';

    loadData();

    function loadData() {
        $http.get('/mock/userinfo' + $scope.curpage + '.json')
            .then(function(res) {
                $scope.studentInfo = res.data;
            });
    };

    $scope.minuspage = function() {
        if ($scope.curpage <= 1) {
            $scope.curpage = 1;
        } else {
            $scope.curpage--;
        }
        loadData();
    }
    $scope.addPage = function() {
        if ($scope.curpage >= 5) {
            $scope.curpage = 5;
        } else {
            $scope.curpage++;
        }
        loadData();
    }
    $scope.changepage = function(index) {
        $scope.curpage = index;
        loadData();
    }

    $scope.bianji = function(list, index) {
        $scope.currchangeInfo = list;
        //console.log(  $scope.currchangeInfo);
        $scope.currchangeindex = index;
    }
    $scope.saveData = function() {
        //console.log(1);
        $scope.studentInfo[$scope.currchangeindex] = $scope.currchangeInfo;
    }
    $scope.cancelData = function() {
        //console.log(1);
        loadData();
    }
    $scope.delData = function() {
        $scope.studentInfo.splice($scope.currchangeindex, 1);
    }

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


appCtrl.controller('specificController', ['$scope', '$stateParams', '$http',
    function($scope, $stateParams, $http) {
        console.log($stateParams.speId);
        $scope.studentInfo = [];

        loadData();

        function loadData() {
            for (var i = 1; i <= 5; i++) {
                $http.get('/mock/userinfo' + i + '.json')
                    .then(function(res) {
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

    }
]);

appCtrl.controller('table2Controller', ['$scope', function($scope) {
    // console.log("table2Controller");
}]);

appCtrl.controller('table3Controller', ['$scope', function($scope) {

}]);

appCtrl.controller('table4Controller', ['$scope', function($scope) {

}]);

appCtrl.controller('table5Controller', ['$scope', function($scope) {

}]);

appCtrl.controller('table6Controller', ['$scope', function($scope) {

}]);
