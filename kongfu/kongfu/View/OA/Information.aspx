<%@ Page Title="" Language="C#" MasterPageFile="~/View/OA/OA.Master" AutoEventWireup="true" CodeBehind="Information.aspx.cs" Inherits="kongfu.View.OA.Information" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="col-xs-2">
        <div class="tile">
            <h3 class="tile-title">输入指纹ID</h3>
            <p>Inputting fingerprint number</p>
            <input runat="server" class="form-control" id="finger" type="search" value placeholder="ID" /><br />
            <asp:Button runat="server" CssClass="btn btn-primary btn-large btn-block" ID="id" Text="确定" OnClick="Page_Load" />
        </div>
    </div>
    <div class="col-xs-10">
        <asp:Repeater runat="server" ID="rep">
            <HeaderTemplate>
                <table class="table table-striped table-hover" style="border: 2px solid #f1f1f1;">
                    <thead>
                        <tr>
                            <%--<th>ID</th>--%>
                            <th>标题</th>
                            <th>金额</th>
                            <th>结算方式</th>
                            <th>地区</th>
                            <th>时间</th>
                            <th>人数</th>
                            <th>浏览数量</th>
                            <th>起止日期</th>
                            <th>兼职时间</th>
                            <th>条件限制</th>
                        </tr>
                    </thead>
            </HeaderTemplate>
            <ItemTemplate>
                <tbody>
                    <tr runat="server">
                        <%--<th id="id" runat="server"><%#Eval("Id") %></th>--%>
                        <th id="FingerID" runat="server">
                            <%#Eval("FingerID") %>
                        </th>
                        <th id="WorkTime" runat="server">
                            <%#Eval("WorkTime") %>
                        </th>
                        <th id="HomeTime" runat="server">
                            <%#Eval("HomeTime") %>
                        </th>
                        <th id="WorkDate" runat="server">
                            <%#Eval("WorkDate") %>
                        </th>
                        <th id="AtteType" runat="server">
                            <%#Eval("test") %>
                        </th>
                        <th id="WorkStati" runat="server">
                            <%#Eval("time") %>
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
