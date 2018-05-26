$(function () {
    var pageParameter = {
        userDetail: {
            userId: "9ED67445-5807-4342-8C51-F4AEB04CE440",
            faceImg: "../image/%e4%b8%aa%e4%ba%ba%e5%9b%be%e7%89%87.PNG",
            userName: "***",
            invitationCode: "***",
            isVip: 0,
            wxId: "111111",
            dredgeShow: false,
        },
        invitationDetail: {
            agencyCount: 0,
            oneAgency: 0,
            twoAgency: 0,
            threeAgency: 0,
            myMoney: "0",
            Accelerate: "0",
        },
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

    InitUserPage(pageParameter.userDetail.wxId);
    function InitUserPage(wxId) {
        //根据wxId获取用户数据
        $.ajax({
            method: 'get', //get请求方式
            url: 'http://localhost:31024/Provider/personalCenter.ashx/ProcessRequest',   //请求地址
            async: false,
            data: "operationType=getUserInfo&openId=" + wxId,
            success: function (result) {
                var userInfo = JSON.parse(result)[0];
                console.log("用户信息：", userInfo);
                if (userInfo != undefined && userInfo != null) {
                    pageParameter.userDetail.userId = userInfo.User_Id;
                    pageParameter.userDetail.faceImg = userInfo.User_Face;
                    pageParameter.userDetail.userName = userInfo.User_Name;
                    pageParameter.userDetail.invitationCode = userInfo.Invitation_Code;
                    pageParameter.userDetail.isVip = userInfo.isVip;

                    if (pageParameter.userDetail.isVip == "1") {
                        $("div.order-list>div:eq(1)").addClass("dredge-show-bottom");
                        $("div.order-list>div:eq(2)").addClass("vip-hide");
                    }
                    $("img.content-face").attr("src", pageParameter.userDetail.faceImg);
                    $("label.content-username").html(pageParameter.userDetail.userName);
                    $("label.copy-label").html(pageParameter.userDetail.invitationCode);
                }
            }
        });


        // 根据当前用户的邀请码Id得到用户的代理信息
        $.ajax({
            method: 'get', //get请求方式
            url: 'http://localhost:31024/Provider/personalCenter.ashx/ProcessRequest',   //请求地址
            data: "operationType=srrogate&invitation=" + pageParameter.userDetail.invitationCode,
            success: function (result) {
                var invitationInfo = JSON.parse(result);
                if (invitationInfo != undefined && invitationInfo != null) {
                    pageParameter.invitationDetail.agencyCount = invitationInfo[0].length + invitationInfo[1].length;
                    pageParameter.invitationDetail.twoAgency = invitationInfo[0].length;
                    pageParameter.invitationDetail.threeAgency = invitationInfo[1].length;

                    $("label.people-num").html(pageParameter.invitationDetail.agencyCount);
                    $("label.oneAgency").html(pageParameter.invitationDetail.oneAgency);
                    $("label.twoAgency").html(pageParameter.invitationDetail.twoAgency);
                    $("label.threeAgency").html(pageParameter.invitationDetail.threeAgency);
                    $("label.myMoney").html("¥" + pageParameter.invitationDetail.myMoney);
                    $("label.accelerate").html("仅剩" + pageParameter.invitationDetail.Accelerate + "天加速");
                }
                console.log("代理信息：", invitationInfo);
            }
        });

        // 根据当前用户id获取提现记录
        $.ajax({
            method: 'get', //get请求方式
            url: 'http://localhost:31024/Provider/personalCenter.ashx/ProcessRequest',   //请求地址
            data: "operationType=record&userId=" + pageParameter.userDetail.userId,
            success: function (result) {
                var record = JSON.parse(result);
                console.log("提现记录：", record);
            }
        });


        //绑定菜单集合
        var $menuListHtml = "";
        $.each(pageParameter.menuList, function (i, item) {
            $menuListHtml += "<div class='menu-item' onclick='menuClick(" + item.type + ")'>" +
                "<img src='" + item.imgSrc + "'/><label>" + item.name + "</label></div>";
        });
        $("div.menu-list").append($menuListHtml);
    }

    // 复制命令
    copyNo = function () {
        var oInput = document.createElement('input');
        oInput.value = pageParameter.userDetail.invitationCode;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.remove();
    }

    // 提现
    withDraw = function () {
        alert("提现");
    }

    // 列表点击
    orderClick = function (type) {
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

    // 底部菜单
    menuClick = function (type) {
        $.each(pageParameter.menuList, function (i, item) {
            if (type == item.type) {
                alert("您点击了" + item.name);
            }
        });
    }
});
