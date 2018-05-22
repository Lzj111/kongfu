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
            string sql = "SELECT  [Job_Id],[User_Id],[Wx_Id],[Job_Title],[Job_Type],[Job_Money],[Job_Settlement],[Job_Address],[Job_Time],[Job_PeopleNum],[Job_BrowseNum],[Job_StartDate],[Job_WorkDate],[Job_Condition]  FROM [kongfu].[dbo].[Job]";
            DataSet ds = DbHelperSQL.Query(sql);
            DataTable dt = ds.Tables[0];
            rep.DataSource = ds;
            rep.DataBind();
        }
    }
}