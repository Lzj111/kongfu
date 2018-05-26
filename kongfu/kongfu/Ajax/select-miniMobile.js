
var area;
var condition;


$.ajax({
    url: "../partTimeJob/PartTimeArea.ashx",
    type:"Post",
    success: function (data) {
        //alert(data);
        var areaArr = JSON.parse(data);
        AreaSelect(areaArr);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(XMLHttpRequest.status + "" + XMLHttpRequest.readyState + "" + textStatus);
    }
});
$.ajax({
    url: "../partTimeJob/PartTimeCondition.ashx",
    type: "Post",
    success: function (data) {
        //alert(data);
        var conditionArr = JSON.parse(data);
        //ConditionSelect(conditionArr);
    }
});
jobListLoad("","");
function jobListLoad(a, c) {
    $.ajax({
        url: "../partTimeJob/PartTimeJobList.ashx?area=" + a +"&type="+localStorage.getItem("type"),
        typr: "psot",
        success: function (data) {
            //alert(data);
            var jobArr = JSON.parse(data);
            //var jobHtml = " ";
            var divList = $("#jobList");
            var start = 0;

            divList.onscroll = function () {
                if (divList.scrollHeight - divList.scrollTop - 90 < 30) {
                    load(start, 2, jobArr);
                    start += 2;
                }
            }

            //for (var i = 0; i < jobArr.length; i++) {
            //    //alert(jobArr[i].JobId + "  " + jobArr[i].JobTitle + "  " + jobArr[i].JobMoney);
            //    jobHtml += "<a href='javascript:void(0);' onclick='getJobInfo(" + jobArr[i].JobId + ")'><div class='w75 t-c h20 f28 p2 radio' style='border-bottom:0.5px solid #DDDDDD;'>";
            //    jobHtml += "<input class='jobId' name='jobId' type='hidden' value='" + jobArr[i].JobId + "'/>";
            //    jobHtml += "<h1 id='jobTitle' class='t-l col-10 f32 mt3 ml3 color2' style='font-weight:bold;'>" + jobArr[i].JobTitle + "</h1>";
            //    jobHtml += "<p class='t-l col-8 f28 mt2 ml3'><b class='f32 color-danger'>" + jobArr[i].JobMoney + "</b></p>";
            //    jobHtml += "<a class='t-r fr col-2 f28 mr1 '>查看</a>";
            //    jobHtml += "</div></a>";
            //}
            ////alert(jobHtml);
            //$("#jobList").html(jobHtml);
        }
    });
}
function load(start, num, arr) {
    if (start + num > arr.length) { return; }
    for (var i = 0; i < jobArr.length; i++) {
        //alert(jobArr[i].JobId + "  " + jobArr[i].JobTitle + "  " + jobArr[i].JobMoney);
        jobHtml += "<a href='javascript:void(0);' onclick='getJobInfo(" + jobArr[i].JobId + ")'><div class='w75 t-c h20 f28 p2 radio' style='border-bottom:0.5px solid #DDDDDD;'>";
        jobHtml += "<input class='jobId' name='jobId' type='hidden' value='" + jobArr[i].JobId + "'/>";
        jobHtml += "<h1 id='jobTitle' class='t-l col-10 f32 mt3 ml3 color2' style='font-weight:bold;'>" + jobArr[i].JobTitle + "</h1>";
        jobHtml += "<p class='t-l col-8 f28 mt2 ml3'><b class='f32 color-danger'>" + jobArr[i].JobMoney + "</b></p>";
        jobHtml += "<a class='t-r fr col-2 f28 mr1 '>查看</a>";
        jobHtml += "</div></a>";
    }
    //alert(jobHtml);
    $("#jobList").html(jobHtml);
}

function getJobInfo(jobId) {
    localStorage.setItem("jobId", jobId);
    location.href = "JobInfo.html";  
}


//var weekdayArr = [{ id: '', value: '全武汉' }, { id: 'Area_Wh_1', value: '江岸区' }, { id: 'Area_Wh_2', value: '江汉区' }, { id: 'Area_Wh_3', value: '硚口区' }, { id: 'Area_Wh_4', value: '汉阳区' }, { id: 'Area_Wh_5', value: '武昌区' }, { id: 'Area_Wh_6', value: '青山区' }, { id: 'Area_Wh_7', value: '洪山区' }, { id: 'Area_Wh_8', value: '东西湖区' }, { id: 'Area_Wh_9', value: '汉南区' }, { id: 'Area_Wh_10', value: '蔡甸区' }, { id: 'Area_Wh_11', value: '江夏区' }, { id: 'Area_Wh_12', value: '黄陂区' }, { id: 'Area_Wh_13', value: '新洲区' }];
//var timeArr = ['08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];
var numArr = ['1', '2', '3', '4', '5'];
//----------------------------------------------------------
//更多参数详情可查看文档 https://github.com/onlyhom/mobileSelect.js

/**
 * 参数说明
 * @param trigger(必填参数) 触发对象的id/class/tag
 * @param wheels(必填参数)  数据源,需要显示的数据
 * @param title 控件标题
 * @param position 初始化定位
 * @param callback 选择成功后触发的回调函数，返回indexArr(选中的选项索引)、data(选中的数据)
 * @param transitionEnd 每一次手势滑动结束后触发的回调函数,返回indexArr(当前选中的选项索引)、data(选中的数据)
 * @param keyMap 字段名映射
 */

/**
 * 函数说明(实例化之后才可用)
 * @function setTitle()      参数 string                 设置控件的标题
 * @function updateWheel()   参数 sliderIndex, data      重新渲染指定的轮子(可用于先实例化，后通过ajax获取数据的场景)
 * @function updateWheels()  参数 data                   重新渲染所有轮子,仅限级联数据格式使用(可用于先实例化，后通过ajax获取数据的场景)
 * @function locatePosition() 参数 sliderIndex, posIndex  传入位置数组，重定位轮子的位置
 * @function show()          参数 无参                   唤起弹窗组件
 * @function getValue()      参数 无参                   获取组件选择的值
 */

function AreaSelect(area){
    var mobileSelect1 = new MobileSelect({
        trigger: '#trigger1',
        title: '单项选择',
        wheels: [{
            //data: weekdayArr
            data: area
        }],
        position: [2], //初始化定位 打开时默认选中的哪个 如果不填默认为0
        transitionEnd: function (indexArr, data) {
            console.log(data);
        },
        callback: function (indexArr, data) {
            console.log(data[0].id);
            jobListLoad(data[0].id,"");
            area = data[0].id;
            localStorage.setItem("area", area);
        }
    });
};
//function ConditionSelect(condition) {
//    var mobileSelect2 = new MobileSelect({
//        trigger: '#trigger2',
//        title: '单项选择',
//        wheels: [{
//            //data: weekdayArr
//            data: condition
//        }],
//        position: [2], //初始化定位 打开时默认选中的哪个 如果不填默认为0
//        transitionEnd: function (indexArr, data) {
//            console.log(data.id);
//        },
//        callback: function (indexArr, data) {
//            console.log(data[0].id);
//            //alert(localStorage.getItem("area"));
//            jobListLoad(localStorage.getItem("area"), data[0].id);
//            condition = data[0].id;
//            localStorage.setItem("condition", condition);
//        }
//    });
//};
//var mobileSelect1 = new MobileSelect({
//    trigger: '#trigger1',
//    title: '单项选择',
//    wheels: [{
//        //data: weekdayArr
//        data: areaArr
//    }],
//    position: [2], //初始化定位 打开时默认选中的哪个 如果不填默认为0
//    transitionEnd: function (indexArr, data) {
//        console.log(data);
//    },
//    callback: function (indexArr, data) {
//        console.log(data);
//    }
//});

//var mobileSelect2 = new MobileSelect({
//    trigger: '#trigger2',
//    title: '双项选择',
//    wheels: [{
//        data: weekdayArr
//    },
//        {
//            data: timeArr
//        }
//    ],
//    position: [1, 2],
//    transitionEnd: function (indexArr, data) {
//        console.log(data);
//    },
//    callback: function (indexArr, data) {
//        console.log(data);
//    }
//});

//var mobileSelect5 = new MobileSelect({
//    trigger: '#trigger5',
//    title: '车型选择',
//    wheels: [{
//        data: UplinkData
//    }],
//    position: [2, 0],
//    transitionEnd: function (indexArr, data) {
//        console.log(data);
//    },
//    callback: function (indexArr, data) {
//        console.log(data);
//    }
//});
