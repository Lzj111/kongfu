var app = angular.module("kongFu", []);

app.controller('personalCenterCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.pageParameter = {
        userDetail: {
            userId: "",
            faceImg: "../image/%e4%b8%aa%e4%ba%ba%e5%9b%be%e7%89%87.PNG",
            userName: "***",
            invitationCode: "***",
            isVip: 0,
            wxId: "123456789",
            dredgeShow: false,
        },
        invitationDetail: {
            agencyCount: 0,
            oneAgency: 0,
            twoAgency: 0,
            //threeAgency: 1,
            myMoney: "0",
            Accelerate: "0",
        },
        orderList: [
            { type: 1, imgSrc: "../image/personalCenter/qianbao.png", name: "我的钱包", content: "0" },
            { type: 2, imgSrc: "../image/personalCenter/jiasu.png", name: "积分加速", content: "0" },
            { type: 3, imgSrc: "../image/personalCenter/zhuansi.png", name: "成为VIP会员", content: "立即开通" },
        ],
        menuList: [
            { type: 1, imgSrc: "../image/personalCenter/fensi.png", name: "我的粉丝" },
            { type: 2, imgSrc: "../image/personalCenter/erweima.png", name: "推广二维码" },
            { type: 3, imgSrc: "../image/personalCenter/uperweima.png", name: "上传二维码" },
            { type: 4, imgSrc: "../image/personalCenter/zhifubao.png", name: "绑定支付宝" },
            { type: 5, imgSrc: "../image/personalCenter/shouchang.png", name: "我的收藏" },
            { type: 6, imgSrc: "../image/personalCenter/kefu.png", name: "联系客服" },
            { type: 7, imgSrc: "../image/personalCenter/guanyu.png", name: "关于我们" },
        ]
    }

    InitUserPage($scope.pageParameter.userDetail.wxId);
    function InitUserPage(wxId) {
        //根据wxId获取用户数据
        $http({
            method: 'get', //get请求方式
            url: 'http://localhost:8000/Provider/personalCenter.ashx/ProcessRequest',   //请求地址
            params: { operationType: "getUserInfo", openId: wxId, },
        }).then(function (result) {
            var userInfo = result.data[0];
            console.log("用户信息：", userInfo);
            $scope.pageParameter.userDetail.userId = userInfo.User_Id;
            $scope.pageParameter.userDetail.faceImg = userInfo.User_Face;
            $scope.pageParameter.userDetail.userName = userInfo.User_Name;
            $scope.pageParameter.userDetail.invitationCode = userInfo.Invitation_Code;
            $scope.pageParameter.userDetail.isVip = userInfo.isVip;
            $scope.pageParameter.userDetail.dredgeShow = userInfo.isVip == "0" ? true : false;
            // 根据当前用户的邀请码Id得到用户的代理信息
            $http({
                method: 'get', //get请求方式
                url: 'http://localhost:8000/Provider/personalCenter.ashx/ProcessRequest',   //请求地址
                params: { operationType: "srrogate", invitation: $scope.pageParameter.userDetail.invitationCode, },
            }).then(function (result) {
                var invitationInfo = result.data;
                $scope.pageParameter.invitationDetail.agencyCount = invitationInfo[0].length + invitationInfo[1].length;
                $scope.pageParameter.invitationDetail.oneAgency = invitationInfo[0].length;
                $scope.pageParameter.invitationDetail.twoAgency = invitationInfo[1].length;

                console.log("代理信息：", invitationInfo);
            }, function (result) {
                //失败时执行 
                console.log(result);
            });
        }, function (result) {
            //失败时执行 
            console.log(result);
        });
    }

    $scope.copyNo = function () {
        alert("复制");
    }

    $scope.withDraw = function () {
        alert("提现");
    }

    $scope.orderClick = function (type) {
        if (type == "1") {
            alert("我的钱包")
        }
        if (type == "2") {
            alert("积分加速")
        }
        if (type == "3") {
            location.href = "memberShip.html";
        }
    }
    $scope.menuClick = function (type) {
        $.each($scope.pageParameter.menuList, function (i, item) {
            if (type == item.type) {
                alert("您点击了" + item.name);
            }
        });
    }

}]);

