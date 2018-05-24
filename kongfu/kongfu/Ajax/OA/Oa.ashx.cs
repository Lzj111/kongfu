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
            string condition = HttpContext.Current.Request.Params["condition"];
            DbHelperSQL.connectionString = "server=39.108.219.12;database=kongfu;uid=sa;pwd=juzixy.888";
            string sql = "";
            DataSet DS = DbHelperSQL.Query();
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