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
                            <th>指纹ID</th>
                            <th>上班打卡时间</th>
                            <th>下班打卡时间</th>
                            <th>日期</th>
                            <th>类型</th>
                            <th>工时</th>
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
                            <%--<asp:HiddenField ID="HiddenField1" runat="server" Value='<%# Eval("Name") %>' />--%>
                        </th>
                        <th id="HomeTime" runat="server">
                            <%#Eval("HomeTime") %>
                        </th>
                        <th id="WorkDate" runat="server">
                            <%#Eval("WorkDate") %>
                        </th>
                        <th id="AtteType" runat="server">
                           <%-- <%#DataBinder.Eval(Container.DataItem,"AtteType").ToString()=="99"?"正常":"不正常" %>--%>
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
