using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using DataSimulator;

namespace kongfu.Ajax
{
    /// <summary>
    /// Oa 的摘要说明
    /// </summary>
    public class Oa : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            //condition: condition
            string title = HttpContext.Current.Request.Params["title"];
            string money = HttpContext.Current.Request.Params["money"];
            int select = int.Parse(HttpContext.Current.Request.Params["select"]);
            string method = HttpContext.Current.Request.Params["method"];
            string address = HttpContext.Current.Request.Params["address"];
            int num = int.Parse(HttpContext.Current.Request.Params["num"]);
            string startdate = HttpContext.Current.Request.Params["startdate"];
            string workdate = HttpContext.Current.Request.Params["workdate"];
            string condition = HttpContext.Current.Request.Params["condition"];
            string table = HttpContext.Current.Request.Params["table"];
            DbHelperSQL.connectionString = "server=39.108.219.12;database=kongfu;uid=sa;pwd=juzixy.888";
            string sql = "INSERT INTO[dbo].[Job]([Job_Title],[Job_Type],[Job_Money],[Job_Settlement],[Job_Address],[Job_Time],[Job_PeopleNum],[Job_StartDate],[Job_WorkDate],[Job_Condition],[Job_Content])VALUES('" + title + "','" + select + "','" + money + "','" + method + "','" + address + "','" + DateTime.Now + "'," + num + ",'" + startdate + "','" + workdate + "','" + condition + "','" + table + "')";
            DataSet DS = DbHelperSQL.Query(sql);
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