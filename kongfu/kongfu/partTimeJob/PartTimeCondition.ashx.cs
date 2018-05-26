using DataSimulator;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;

namespace kongfu.partTimeJob
{
    /// <summary>
    /// PartTimeCondition 的摘要说明
    /// </summary>
    public class PartTimeCondition : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            String dictId = String.Empty;
            String result = getType(dictId);
            context.Response.Write(result);
        }

        private static String getType(String dictId)
        {
            StringBuilder sb = new StringBuilder();
            try
            {
                String sql = String.Empty;
                if (!String.IsNullOrEmpty(dictId))
                {
                    sql = "select * FROM Dict_Item where Dict_Id = " + dictId;
                }
                else
                {
                    sql = "select * FROM Dict_Item where Dict_Id='7'";
                }
                using (SqlDataReader list = DbHelperSQL.ExecuteReader(sql))
                {
                    sb.Append("[");
                    while (list.Read())
                    {
                        sb.Append("{\"id\":\"" + list["Dict_Item_Value"] + "\",\"value\" :\"" + list["Dict_Item_Name"] + "\"},");
                    }
                    sb.Append("]");
                }
                sb.Remove(sb.Length - 2, 1);
                return sb.ToString();
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
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