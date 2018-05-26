$(function () {
    var pageParameter = {
        faceImg: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1033062629,3975475618&fm=27&gp=0.jpg",
        userName: "我有一只小毛驴",
        userId: "ZHN250",
        payMoney: 50,
    }

    InitVIPPage();
    function InitVIPPage() {
        $("img.header-face").attr("src", pageParameter.faceImg);
        $("label.userName").html(pageParameter.userName);
        $("label.userId").html(pageParameter.userId);
    }

    payNow = function () {
        alert("调用支付");
    }

});