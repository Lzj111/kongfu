using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using personalCenter.Provider;
using Newtonsoft.Json.Converters;

namespace kongfu.Provider
{
    /// <summary>
    /// personalCenter 的摘要说明
    /// </summary>
    public class personalCenter : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";

            try
            {
                //操作类型
                string operationType = context.Request["operationType"];

                // 根据openId获取用户信息
                if (operationType == "getUserInfo")
                {
                    string rtnStr = getUserInfoByopenId(context.Request["openId"].ToString());
                    context.Response.Write(rtnStr);
                }

                // 获取代理信息
                if (operationType == "srrogate")
                {
                    string rtnStr = getSrrogateInformationByInvitation(context.Request["invitation"]);
                    context.Response.Write(rtnStr);
                }

                // 注册会员 or 填写邀请码
                if (operationType == "invitation")
                {
                    string membership = context.Request["membership"];
                    string referrer = context.Request["referrer"];
                    bool flag = insertInvitationCode(membership, referrer);
                    context.Response.Write(flag);
                }

                // 获取提现记录
                if (operationType == "record")
                {
                    string userId = context.Request["userId"];
                    string rtnStr = getRecordByUserId(userId);
                    context.Response.Write(rtnStr);
                }

            }
            catch (Exception ex)
            {
                context.Response.Write(ex.Message);
            }

        }


        // 根据openId获取用户信息
        public string getUserInfoByopenId(string openId)
        {
            string sql = string.Format(" SELECT User_Id, User_Name, User_Face, Wx_id, Invitation_Code,isVip FROM [kongfu].[dbo].[User] where Wx_id='{0}' ", openId);
            DataTable dt = SqlHelper.GetTable(sql);
            String rtnStr = Newtonsoft.Json.JsonConvert.SerializeObject(dt, new DataTableConverter());
            return rtnStr;
        }

        // 获取一级代理/二级代理 的方式 //返回我的钱包
        public string getSrrogateInformationByInvitation(string invitation)
        {

            List<DataTable> listData = new List<DataTable>();
            string sql = string.Format(" select * from [SrrogateIormation] where Referrer_Code='{0}' ", invitation);
            listData.Add(SqlHelper.GetTable(sql));
            sql = string.Format(" select * from [SrrogateIormation] where Referrer_Code in (select Membership_Code from [SrrogateIormation] where Referrer_Code='{0}') ", invitation);
            listData.Add(SqlHelper.GetTable(sql));

            String rtnStr = Newtonsoft.Json.JsonConvert.SerializeObject(listData, new DataTableConverter());
            return rtnStr;
        }

        // 填写邀请码
        public bool insertInvitationCode(string membership, string referrer)
        {
            List<string> sqlList = new List<string>();
            string sql = string.Format(" insert into [SrrogateIormation](Id, Membership_Code, Referrer_Code) values(NEWID(),'{0}','{1}') ", membership, referrer);
            sqlList.Add(sql);
            string sqlInsVIP = string.Format(" update [user] set IsVIP=1 where Invitation_Code='{0}' ", membership);
            sqlList.Add(sqlInsVIP);
            bool flag = SqlHelper.ExeNonQueryTran(sqlList);
            return flag;
        }

        // 获取提现记录
        public string getRecordByUserId(string userId)
        {
            List<DataTable> listData = new List<DataTable>();
            string sql = string.Format(" select CASE WHEN sum(moneynum) is NULL THEN 0 ELSE sum(moneynum) END  record from [MoneyRecord] where user_Id='{0}' ", userId);
            listData.Add(SqlHelper.GetTable(sql));
            sql = string.Format(" select Id,User_Id,MoneyNum,CreateDate from MoneyRecord where user_Id='{0}' ", userId);
            listData.Add(SqlHelper.GetTable(sql));
            String rtnStr = Newtonsoft.Json.JsonConvert.SerializeObject(listData, new DataTableConverter());
            return rtnStr;
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}