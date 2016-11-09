import {
    appCtrl
} from "../controller.js";
appCtrl.controller('appController', ['$scope', '$http', function($scope, $http) {
    // console.log($http);
    $scope.backstage = {
        "name": "千锋教育",
        "user": "Wang",
        "profile": "简介",
        "settings": "设置",
        "logout": "退出"
    };
    $scope.menuList = [];
    $http.get('/mock/menu.json')
        .then(function(res) {
            $scope.menuList = res.data.menu;
        }, function() {
            console.log("err");
        });

    $scope.curr = 0;
    $scope.changeStyle = function(i) {
      $scope.curr = i;
    }
}]);
