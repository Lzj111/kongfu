using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace kongfu.partTimeJob.model
{
    public class Job
    {
        private int jobId;
        private int userId;
        private String wxId;
        private String jobTitle;
        private String jobMoney;
        private String jobSettlement;
        private String jobAddress;
        private String jobTime;
        private int jobPeopleNum;
        private int jobBrowseNum;
        private String jobStartDate;
        private String jobWorkDate;
        private String jobCondition;
        private String jobContent;

        public int JobId { get; set; }
        public int UserId { get; set; }
        public String WxId { get; set; }
        public String JobTitle { get; set; }
        public String JobMoney { get; set; }
        public String JobSettlement { get; set; }
        public String JobAddress { get; set; }
        public String JobTime { get; set; }
        public int JobPeopleNum { get; set; }
        public int JobBrowseNum { get; set; }
        public String JobStartDate { get; set; }
        public String JobWorkDate { get; set; }
        public String JobCondition { get; set; }
        public String JobContent { get; set; }
    }
}