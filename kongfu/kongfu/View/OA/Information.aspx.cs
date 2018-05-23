using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DataSimulator;
using System.Data;

namespace kongfu.View.OA
{
    public partial class Information : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string con = "server=39.108.219.12;database=kongfu;uid=sa;pwd=juzixy.888";
            DbHelperSQL.connectionString = con;
            string sql = "SELECT  a.[Job_Id],a.[User_Id],a.[Wx_Id],a.[Job_Title],a.[Job_Type],a.[Job_Money],a.[Job_Settlement],a.[Job_Address],a.[Job_Time],a.[Job_PeopleNum],a.[Job_BrowseNum],a.[Job_StartDate],a.[Job_WorkDate],a.[Job_Condition],b.Dict_Item_Name  FROM [kongfu].[dbo].[Job] as a left join [dbo].[Dict_Item] as b on a.Job_Address = b.Dict_Item_Value";
            DataSet ds = DbHelperSQL.Query(sql);
            ds.Tables[0].Columns.Add("types", typeof(string));
            DataRow dr = ds.Tables[0].NewRow();
            for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
            {
                string type = ds.Tables[0].Rows[i]["Job_Type"].ToString();
                if (type != null && type != "")
                {

                }
                else if(type=="0")
                {
                    ds.Tables[0].Rows[0]["types"] = "全职";
                }
                else if (type == "1")
                {
                    ds.Tables[0].Rows[0]["types"] = "兼职";
                }
                else if (type == "2")
                {
                    ds.Tables[0].Rows[0]["types"] = "网赚";
                }
            }
            DataTable dt = ds.Tables[0];
            rep.DataSource = ds;
            rep.DataBind();
        }
    }
}