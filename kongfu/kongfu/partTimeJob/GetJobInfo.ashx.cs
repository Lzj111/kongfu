using DataSimulator;
using kongfu.partTimeJob.model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;

namespace kongfu.partTimeJob
{
    /// <summary>
    /// GetJobInfo 的摘要说明
    /// </summary>
    public class GetJobInfo : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            String jobId = context.Request["jobId"].ToString();
            String json = GetJobByJobId(jobId);
            context.Response.Write(json);
        }

        public String GetJobByJobId(String jobId) {
            String json = String.Empty;
            try
            {
                Job job = new Job();
                String sql = "select * from Job a,Dict_Item b where a.Job_Address=b.Dict_Item_Value and a.Job_Id=" + jobId;
                using (SqlDataReader list = DbHelperSQL.ExecuteReader(sql))
                {
                    while (list.Read())
                    {
                        job.JobId = (int)list["Job_Id"];
                        job.UserId = (int)list["User_Id"];
                        job.WxId = list["Wx_id"].ToString();
                        job.JobTitle = list["Job_Title"].ToString();
                        job.JobMoney = list["Job_Money"].ToString();
                        job.JobTime = list["Job_time"].ToString();
                        job.JobSettlement = list["Job_Settlement"].ToString();
                        job.JobAddress = list["Dict_Item_Name"].ToString();
                        job.JobTime = DateTime.Parse(list["Job_time"].ToString()).GetDateTimeFormats('M')[0].ToString();
                        job.JobPeopleNum = (int)list["Job_PeopleNum"];
                        job.JobBrowseNum = (int)list["Job_BrowseNum"];
                        job.JobStartDate = list["Job_StartDate"].ToString();
                        job.JobWorkDate = list["Job_WorkDate"].ToString();
                        job.JobCondition = list["Job_Condition"].ToString();
                        job.JobContent = list["Job_Content"].ToString();   
                    }
                }
                json = JsonConvert.SerializeObject(job);
            }
            catch (Exception ex)
            {
                
            }
            return json;
        }


        public static string jiema(string s)
        {
            CaptureCollection cs = Regex.Match(s, @"([01]{8})+").Groups[1].Captures;
            byte[] data = new byte[cs.Count];
            for (int i = 0; i < cs.Count; i++)
            {
                data[i] = Convert.ToByte(cs[i].Value, 2);
            }
            return Encoding.Unicode.GetString(data, 0, data.Length);
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