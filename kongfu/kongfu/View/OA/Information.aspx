<%@ Page Title="" Language="C#" MasterPageFile="~/View/OA/OA.Master" AutoEventWireup="true" CodeBehind="Information.aspx.cs" Inherits="kongfu.View.OA.Information" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <style type="text/css">

    </style>
    <div class="col-xs-2">
        <div class="tile">
            <h3 class="tile-title">功能</h3>
            <p>Collective</p>
            <%--<input runat="server" class="form-control" id="finger" type="search" value placeholder="ID" /><br />--%>
            <a href="Revised.aspx" class="btn btn-primary btn-large btn-block" id="id">添加数据</a>
        </div>
    </div>
    <div class="col-xs-10" style="font-size:12px;">
        <asp:Repeater runat="server" ID="rep">
            <HeaderTemplate>
                <table class="table table-striped table-hover" style="border: 2px solid #f1f1f1;">
                    <thead>
                        <tr>
                            <th>ID</th>
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
                            <th>删除</th>
                        </tr>
                    </thead>
            </HeaderTemplate>
            <ItemTemplate>
                <tbody>
                    <tr runat="server">
                        <th id="Job_Id" runat="server">
                            <%#Eval("Job_Id") %>
                        </th>
                        <th id="User_Id" runat="server">
                            <%#Eval("User_Id") %>
                        </th>
                        <th id="Wx_Id" runat="server">
                            <%#Eval("Wx_Id") %>
                        </th>
                        <th id="Job_Title" runat="server">
                            <%#Eval("Job_Title") %>
                        </th>
                        <th id="Job_Type" runat="server">
                            <%#Eval("types") %>
                        </th>
                        <th id="Job_Money" runat="server">
                            <%#Eval("Job_Money") %>
                        </th>
                        <th id="Job_Settlement" runat="server">
                            <%#Eval("Job_Settlement") %>
                        </th>
                        <th id="Job_Address" runat="server">
                            <%#Eval("Dict_Item_Name") %>
                        </th>
                        <th id="Job_Time" runat="server">
                            <%#Eval("Job_Time") %>
                        </th>
                        <th id="Job_PeopleNum" runat="server">
                            <%#Eval("Job_PeopleNum") %>
                        </th>
                        <th id="Job_BrowseNum" runat="server">
                            <%#Eval("Job_BrowseNum") %>
                        </th>
                        <th id="Job_StartDate" runat="server">
                            <%#Eval("Job_StartDate") %>
                        </th>
                        <th id="Job_WorkDate" runat="server">
                            <%#Eval("Job_WorkDate") %>
                        </th>
                        <th id="Job_Condition" runat="server">
                            <%#Eval("Job_Condition") %>
                        </th>
                        <th id="Modify" runat="server">
                            <a class="btn btn-large btn-primary" style="padding:3px;font-size:12px;">修改</a>
                        </th>
                        <th id="delete" runat="server">
                            <a class="btn btn-large btn-primary" style="padding:3px;font-size:12px;">删除</a>
                        </th>
                    </tr>
                </tbody>
            </ItemTemplate>
            <FooterTemplate>
                </table>
            </FooterTemplate>
        </asp:Repeater>
    </div>

</asp:Content>
