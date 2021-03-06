﻿<%@ Page Title="" Language="C#" MasterPageFile="~/View/OA/OA.Master" AutoEventWireup="true" CodeBehind="Revised.aspx.cs" Inherits="kongfu.View.OA.Revised" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Theme included stylesheets -->
    <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
    <!-- Main Quill library -->
    <script src="//cdn.quilljs.com/1.3.6/quill.js"></script>

    <style type="text/css">
        #select {
            /*用div的样式代替select的样式*/
            width: 80%;
            height: 40px;
            border-radius: 5px;
            /*盒子阴影修饰作用,自己随意*/
            box-shadow: 0 0 5px #ccc;
            position: relative;
        }

        select {
            /*清除select的边框样式*/
            border: none;
            /*清除select聚焦时候的边框颜色*/
            outline: none;
            /*将select的宽高等于div的宽高*/
            width: 100%;
            height: 40px;
            line-height: 40px;
            /*隐藏select的下拉图标*/
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            /*通过padding-left的值让文字居中*/
            padding-left: 60px;
        }

        /*使用伪类给select添加自己想用的图标*/
        #select:after {
            content: "";
            width: 14px;
            height: 8px;
            background: url(img/xiala.png) no-repeat center;
            /*通过定位将图标放在合适的位置*/
            position: absolute;
            right: 20px;
            top: 45%;
            /*给自定义的图标实现点击下来功能*/
            pointer-events: none;
        }
    </style>


    <div class="col-xs-2">
        <div class="tile">
            <h3 class="tile-title">功能</h3>
            <p>Collective</p>
            <a runat="server" class="btn btn-primary btn-large btn-block" onclick="upload()">添加</a>
        </div>
    </div>
    <div class="col-xs-10" style="font-size: 12px;">

        <div class="row">
            <div class="col-xs-4">
                <h6>标题</h6>
                <input type="text" id="title" value="" placeholder="Inactive" class="form-control" />
            </div>
            <div class="col-xs-2">
                <h6>类型</h6>
                <div id="select">
                    <select data-toggle="select" class="form-control select select-danger mrs mbm" style="width=80%;">
                        <option value="0">全职</option>
                        <option value="1">兼职</option>
                        <option value="1">网赚</option>
                    </select>
                </div>
            </div>
            <div>
                <div class="col-xs-2">
                    <h6>金额</h6>
                    <input class="form-control" id="money" type="text"  placeholder="ID" />
                </div>
            </div>
            <div>
                <div class="col-xs-2">
                    <h6>结算方式</h6>
                    <input  class="form-control" id="method" type="text"  placeholder="ID" />
                </div>
            </div>
            <div>
                <div class="col-xs-2">
                    <h6>地区</h6>
                    <input  class="form-control" id="address" type="text"  placeholder="ID" />
                </div>
            </div>
        </div>
        <div class="row">
            <div>
                <div class="col-xs-2">
                    <h6>人数</h6>
                    <input class="form-control" id="num" type="text"  placeholder="ID" />
                </div>
            </div>
            <div>
                <div class="col-xs-2">
                    <h6>起止日期</h6>
                    <input class="form-control" id="startdate" type="text"  placeholder="ID" />
                </div>
            </div>
            <div>
                <div class="col-xs-2">
                    <h6>工作时间</h6>
                    <input class="form-control" id="workdate" type="text"  placeholder="ID" />
                </div>
            </div>
            <div>
                <div class="col-xs-2">
                    <h6>条件限制</h6>
                    <input  class="form-control" id="condition" type="text"  placeholder="ID" />
                </div>
            </div>
        </div>
        <div>
            <h5>招聘内容</h5>
            <div id="editor">
            </div>
        </div>
    </div>
    <script type="text/javascript">
        var toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            //['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'image': 'Image' }],
            //[{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean']                                         // remove formatting button
        ];
        var quill = new Quill('#editor', {
            modules: {
                toolbar: toolbarOptions
            },
            theme: 'snow'
        });
        function upload() {
            //表格内的数据带html标签
            let table = quill.container.firstChild.innerHTML;


            //获取标题的值
            var title = $("#title").val();
            if (document.getElementById("title").value == '') {
                alert("请输入标题！");
                return false;
            }
            //获取金额的值
            var money = $("#money").val();
            if (document.getElementById("money").value == '') {
                alert("请输入金额！");
                return false;
            }
            //获取类型的值
            var select = $("#select option:selected").val();

            //获取结算方式
            var method = $("#method").val();
            if (document.getElementById("method").value == '') {
                alert("请输入结算方式！");
                return false;
            }
            //获取地区
            var address = $("#address").val();
            if (document.getElementById("address").value == '') {
                alert("请输入地区！");
                return false;
            }
            //获取人数
            var num = $("#num").val();
            if (document.getElementById("num").value == '') {
                alert("请输入人数！");
                return false;
            }
            //获取启止日期
            var startdate = $("#startdate").val();
            if (document.getElementById("startdate").value == '') {
                alert("请输入开始时间！");
                return false;
            }
            //获取工作时间
            var workdate = $("#workdate").val();
            if (document.getElementById("workdate").value == '') {
                alert("请输入工作时间！");
                return false;
            }
            //获取条件限制
            var condition = $("#condition").val();
            if (document.getElementById("condition").value == '') {
                alert("请输入条件限制！");
                return false;
            }

            

            $.ajax({
                type: "POST",
                url: "../../Ajax/OA/Oacontrol.ashx",
                data: { title: title, money: money, select: select, method: method, address: address, num: num, startdate: startdate, workdate: workdate, condition: condition, table: table },
                dataType: "json",
                success: function (data) {
                    //$('#resText').empty();   //清空resText里面的所有内容
                    alert("添加成功");
                }
            });

        }

    </script>
</asp:Content>
