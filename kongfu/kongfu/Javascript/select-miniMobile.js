﻿var weekdayArr = ['江岸区', '江汉区', '硚口区', '汉阳区', '武昌区', '青山区', '洪山区', '东西湖区', '汉南区', '蔡甸区', '江夏区', '黄陂区', '新洲区'];
var timeArr = ['08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];
var numArr = ['1', '2', '3', '4', '5'];
var UplinkData = [{
    id: '1',
    value: '兰博基尼'
},
    {
        id: '2',
        value: '劳斯莱斯',
        childs: [{
            id: '1',
            value: '曜影'
        },
            {
                id: '2',
                value: '幻影',
                childs: [{
                    id: '1',
                    value: '标准版'
                },
                    {
                        id: '2',
                        value: '加长版'
                    },
                    {
                        id: '3',
                        value: '巅峰之旅'
                    },
                    {
                        id: '4',
                        value: '流光熠世'
                    },
                    {
                        id: '5',
                        value: '都会典藏版'
                    }
                ]
            },
            {
                id: '3',
                value: '古思特',
                childs: [{
                    id: '1',
                    value: '加长版'
                },
                    {
                        id: '2',
                        value: '永恒之爱'
                    },
                    {
                        id: '3',
                        value: '英骥'
                    },
                    {
                        id: '4',
                        value: '阿尔卑斯典藏版'
                    }
                ]
            },
            {
                id: '4',
                value: '魅影',
                childs: [{
                    id: '1',
                    value: '标准版'
                },
                    {
                        id: '2',
                        value: 'Black Badge'
                    }
                ]
            }
        ]
    },
    {
        id: '3',
        value: '宾利',
        childs: [{
            id: '1',
            value: '慕尚',
            childs: [{
                id: '1',
                value: '标准版'
            },
                {
                    id: '2',
                    value: '极致版'
                }
            ]
        },
            {
                id: '2',
                value: '欧陆',
                childs: [{
                    id: '1',
                    value: '尊贵版'
                },
                    {
                        id: '2',
                        value: '敞篷标准版'
                    },
                    {
                        id: '3',
                        value: '敞篷尊贵版'
                    }
                ]
            }
        ]
    },
    {
        id: '4',
        value: '法拉利',
        childs: [{
            id: '1',
            value: 'LaFerrari'
        },
            {
                id: '2',
                value: '法拉利488'
            },
            {
                id: '3',
                value: 'GTC4Lusso'
            }
        ]
    },
    {
        id: '5',
        value: '玛莎拉蒂',
        childs: [{
            id: '1',
            value: '总裁'
        },
            {
                id: '2',
                value: '玛莎拉蒂GT'
            },
            {
                id: '3',
                value: 'Levante'
            }
        ]
    }
];

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

var mobileSelect1 = new MobileSelect({
    trigger: '#trigger1',
    title: '单项选择',
    wheels: [{
        data: weekdayArr
    }],
    position: [2], //初始化定位 打开时默认选中的哪个 如果不填默认为0
    transitionEnd: function (indexArr, data) {
        console.log(data);
    },
    callback: function (indexArr, data) {
        console.log(data);
    }
});

var mobileSelect2 = new MobileSelect({
    trigger: '#trigger2',
    title: '双项选择',
    wheels: [{
        data: weekdayArr
    },
        {
            data: timeArr
        }
    ],
    position: [1, 2],
    transitionEnd: function (indexArr, data) {
        console.log(data);
    },
    callback: function (indexArr, data) {
        console.log(data);
    }
});

var mobileSelect3 = new MobileSelect({
    trigger: '#trigger3',
    title: '多项选择',
    wheels: [{
        data: numArr
    },
        {
            data: numArr
        },
        {
            data: numArr
        },
        {
            data: numArr
        },
        {
            data: numArr
        }
    ],
    position: [0, 1, 0, 1, 0],
    transitionEnd: function (indexArr, data) {
        console.log(data);
    },
    callback: function (indexArr, data) {
        console.log(data);
    }
});

var mobileSelect4 = new MobileSelect({
    trigger: '#trigger4',
    title: '地区选择',
    wheels: [{
        data: [{
            id: '1',
            value: '附近',
            childs: [{
                id: '1',
                value: '1000米'
            },
                {
                    id: '2',
                    value: '2000米'
                },
                {
                    id: '3',
                    value: '3000米'
                },
                {
                    id: '4',
                    value: '5000米'
                },
                {
                    id: '5',
                    value: '10000米'
                }
            ]
        },
            {
                id: '2',
                value: '上城区'
            },
            {
                id: '3',
                value: '下城区'
            },
            {
                id: '4',
                value: '江干区'
            },
            {
                id: '5',
                value: '拱墅区'
            },
            {
                id: '6',
                value: '西湖区'
            }
        ]
    }],
    transitionEnd: function (indexArr, data) {
        console.log(data);
    },
    callback: function (indexArr, data) {
        console.log(data);
    }
});

var mobileSelect5 = new MobileSelect({
    trigger: '#trigger5',
    title: '车型选择',
    wheels: [{
        data: UplinkData
    }],
    position: [2, 0],
    transitionEnd: function (indexArr, data) {
        console.log(data);
    },
    callback: function (indexArr, data) {
        console.log(data);
    }
});
