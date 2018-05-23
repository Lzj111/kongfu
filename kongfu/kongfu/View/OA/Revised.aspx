<%@ Page Title="" Language="C#" MasterPageFile="~/View/OA/OA.Master" AutoEventWireup="true" CodeBehind="Revised.aspx.cs" Inherits="kongfu.View.OA.Revised" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Theme included stylesheets -->
    <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
    <!-- Main Quill library -->
    <script src="//cdn.quilljs.com/1.3.6/quill.js"></script>

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
                    <h5>标题</h5>
                    <input type="text" value="" placeholder="Inactive" class="form-control" />
                </div>
                <div>
                    <div class="col-xs-2">
                        <h5>类型</h5>
                        <input runat="server" class="form-control" id="Search1" type="search" value placeholder="ID" />
                    </div>
                </div>
                <div>
                    <div class="col-xs-2">
                        <h5>金额</h5>
                        <input runat="server" class="form-control" id="Search9" type="search" value placeholder="ID" />
                    </div>
                </div>
                <div>
                    <div class="col-xs-2">
                        <h5>结算方式</h5>
                        <input runat="server" class="form-control" id="Search2" type="search" value placeholder="ID" />
                    </div>
                </div>
                <div>
                    <div class="col-xs-2">
                        <h5>地区</h5>
                        <input runat="server" class="form-control" id="Search3" type="search" value placeholder="ID" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div>
                    <div class="col-xs-2">
                        <h5>人数</h5>
                        <input runat="server" class="form-control" id="Search4" type="search" value placeholder="ID" />
                    </div>
                </div>
                <div>
                    <div class="col-xs-2">
                        <h5>起止日期</h5>
                        <input runat="server" class="form-control" id="Search5" type="search" value placeholder="ID" />
                    </div>
                </div>
                <div>
                    <div class="col-xs-2">
                        <h5>条件限制</h5>
                        <input runat="server" class="form-control" id="Search6" type="search" value placeholder="ID" />
                    </div>
                </div>
            </div>
            <div>
                <h5>招聘内容</h5>
                <div id="editor">
                </div>
            </div>
        </div>
        <%--<th>ID</th>
        <th>用户编号</th>
        <th>微信编号</th>
        <th>标题</th>
        <th>类型</th>
        <th>金额</th>
        <th>结算方式</th>
        <th>地区</th>
        <th>发布时间</th>
        <th>人数</th>
        <th>浏览数量</th>
        <th>起止日期</th>
        <th>兼职时间</th>
        <th>条件限制</th>
        <th>修改</th>
        <th>删除</th>--%>
    <script>
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

        //var quill = new Quill('#editor', {
        //    modules: {
        //        toolbar: '#toolbar'
        //    },
        //    theme: 'snow'

        //});

        var quill = new Quill('#editor', {
            modules: {
                toolbar: toolbarOptions
            },
            theme: 'snow'
        });
        function upload() {
            var delta = quill.getContents();
        }

    </script>
</asp:Content>
