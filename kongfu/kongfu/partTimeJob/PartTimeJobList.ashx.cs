using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using DataSimulator;
using System.Text;
using kongfu.partTimeJob.model;
using Newtonsoft.Json;

namespace kongfu.partTimeJob
{
    /// <summary>
    /// PartTimeJobList 的摘要说明
    /// </summary>
    public class PartTimeJobList : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            String area = context.Request["area"].ToString();
            //String condition = context.Request["condition"].ToString();
            //int page = Convert.ToInt32(context.Request["page"]);
            String type = context.Request["type"];
            String json = getPartTimeList(area, type, 1, 4);
            context.Response.Write(json);
        }

        public static String getPartTimeList(String area,String condition,int page,int pageSize) {
            String json = String.Empty;
            try
            {
                List<Job> jobList = new List<Job>();
                
                String sql = String.Empty;
                if (String.IsNullOrEmpty(area) && String.IsNullOrEmpty(condition)) {
                    //sql = "select * from Job a,Dict_Item b where a.Job_Address=b.Dict_Item_Value order by Job_Id offset " + (page - 1) * pageSize + " rows fetch next " + page * pageSize + " rows only";
                    sql = "select * from Job a,Dict_Item b where a.Job_Address=b.Dict_Item_Value order by job_Id";
                }
                else if (!String.IsNullOrEmpty(area) && String.IsNullOrEmpty(condition))
                {
                    //sql = "select * from Job a,Dict_Item b where a.Job_Address=b.Dict_Item_Value and a.Job_Address='" + area + "' order by Job_Id offset " + (page - 1) * pageSize + " rows fetch next " + page * pageSize + " rows only";
                    sql = "select * from Job a,Dict_Item b where a.Job_Address=b.Dict_Item_Value and a.Job_Address='" + area + "' order by Job_Id ";
                }
                else if (String.IsNullOrEmpty(area) && !String.IsNullOrEmpty(condition))
                {
                    //sql = "select * from Job a,Dict_Item b where a.Job_Address=b.Dict_Item_Value and a.Job_Type='" + condition + "' order by Job_Id offset " + (page - 1) * pageSize + " rows fetch next " + page * pageSize + " rows only";
                    sql = "select * from Job a,Dict_Item b where a.Job_Address=b.Dict_Item_Value and a.Job_Type='" + condition + "' order by Job_Id";

                }
                else {
                    //sql = "select * from Job a,Dict_Item b where a.Job_Address=b.Dict_Item_Value and a.Job_Address='" + area + "' and a.Job_Type='" + condition + "' order by Job_Id offset " + (page - 1) * pageSize + " rows fetch next " + page * pageSize + " rows only";
                    sql = "select * from Job a,Dict_Item b where a.Job_Address=b.Dict_Item_Value and a.Job_Address='" + area + "' and a.Job_Type='" + condition + "' order by Job_Id";
                }
                using (SqlDataReader list = DbHelperSQL.ExecuteReader(sql))
                {
                    while (list.Read())
                    {
                        Job job = new Job();
                        job.JobId = (int)list["Job_Id"];
                        job.UserId = (int)list["User_Id"];
                        job.WxId = list["Wx_id"].ToString();
                        job.JobTitle = list["Job_Title"].ToString();
                        job.JobMoney = list["Job_Money"].ToString();
                        job.JobAddress = list["Dict_Item_Name"].ToString();
                        job.JobTime = list["Job_time"].ToString();
                        job.JobPeopleNum = (int)list["Job_PeopleNum"];
                        job.JobBrowseNum = (int)list["Job_BrowseNum"];
                        job.JobStartDate = list["Job_StartDate"].ToString();
                        job.JobWorkDate = list["Job_WorkDate"].ToString();
                        job.JobCondition = list["Job_Condition"].ToString();
                        job.JobContent = list["Job_Content"].ToString();

                        jobList.Add(job);
                    }
                }
                json = JsonConvert.SerializeObject(jobList);
            }
            catch (Exception ex)
            {
                
            }
            return json;
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