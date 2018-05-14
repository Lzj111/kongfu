var app = angular.module("memberShip", []);

app.controller('memberShipCtrl', function ($scope) {
    $scope.pageParameter = {
        faceImg: "../image/%e4%b8%aa%e4%ba%ba%e5%9b%be%e7%89%87.PNG",
        userName: "我有一只小毛驴",
        userId: "ZHN250",
        payMoney:50,
      

    }

    $scope.payNow = function () {
        alert("调用支付");
    }

});

