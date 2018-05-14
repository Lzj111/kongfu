var app = angular.module("kongFu", []);

app.controller('personalCenterCtrl', function ($scope) {
    $scope.pageParameter = {
        faceImg: "../image/%e4%b8%aa%e4%ba%ba%e5%9b%be%e7%89%87.PNG",
        userName: "我有一只小毛驴",
        userId: "ZHN250",
        sumCommission: "200",
        canWithdraw: "180",
        agencyCount: 5,
        oneAgency: 2,
        twoAgency: 2,
        threeAgency: 1,
        orderList: [
            { type: 1, name: "我的任务" },
            { type: 2, name: "提现记录" },
            { type: 3, name: "新手教程" },
        ]
    }

    $scope.copyNo = function () {
        alert("复制");
    }

    $scope.withDraw = function () {
        alert("提现");
    }

    $scope.orderClick = function (type) {
        if (type == "1") {
            alert("我的任务")
        }
        if (type == "2") {
            alert("提现记录")
        }
        if (type == "3") {
            alert("新手教程")
        }
    }

});

