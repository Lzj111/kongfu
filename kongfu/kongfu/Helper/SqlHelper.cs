using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using System.Collections;

namespace personalCenter.Provider
{
    public class SqlHelper
    {
        public static readonly string conString = ConfigurationManager.ConnectionStrings["sqlConnection"].ConnectionString;

        //增删改
        public static bool ExeNonQuery(string sql, CommandType type, params SqlParameter[] lists)
        {
            bool bFlag = false;
            using (SqlConnection con = new SqlConnection(conString))
            {
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = con;
                cmd.CommandText = sql;
                cmd.CommandType = type;
                if (lists != null)
                {
                    foreach (SqlParameter p in lists)
                    {
                        cmd.Parameters.Add(p);
                    }
                }
                try
                {
                    if (con.State == ConnectionState.Closed)
                    {
                        con.Open();
                    }
                    int result = cmd.ExecuteNonQuery();
                    if (result > 0)
                    {
                        bFlag = true;
                    }

                }
                catch { ;}
            }
            return bFlag;
        }

        //查．读
        public static SqlDataReader ExeDataReader(string sql, CommandType type, params SqlParameter[] lists)
        {
            SqlConnection con = new SqlConnection(conString);
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = sql;
            cmd.CommandType = type;

            if (con.State == ConnectionState.Closed)
            {
                con.Open();
            }

            if (lists != null)
            {
                foreach (SqlParameter p in lists)
                {
                    cmd.Parameters.Add(p);
                }
            }

            SqlDataReader reader = cmd.ExecuteReader();

            return reader;
        }

        //返回单个值
        public static object GetScalar(string sql, CommandType type, params SqlParameter[] lists)
        {
            object returnValue = null;
            using (SqlConnection con = new SqlConnection(conString))
            {
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = con;
                cmd.CommandText = sql;
                cmd.CommandType = type;
                if (lists != null)
                {
                    foreach (SqlParameter p in lists)
                    {
                        cmd.Parameters.Add(p);
                    }
                }
                try
                {
                    if (con.State == ConnectionState.Closed)
                    {
                        con.Open();
                    }
                    returnValue = cmd.ExecuteScalar();

                }
                catch { ; }
            }
            return returnValue;
        }

        //事务
        public static bool ExeNonQueryTran(List<SqlCommand> list)
        {
            bool flag = true;
            SqlTransaction tran = null;
            using (SqlConnection con = new SqlConnection(conString))
            {
                try
                {
                    if (con.State == ConnectionState.Closed)
                    {
                        con.Open();
                        tran = con.BeginTransaction();
                        foreach (SqlCommand com in list)
                        {
                            com.Connection = con;
                            com.Transaction = tran;
                            com.ExecuteNonQuery();
                        }
                        tran.Commit();
                    }
                }
                catch (Exception ex)
                {
                    Console.Write(ex.Message);
                    tran.Rollback();
                    flag = false;
                }
            }
            return flag;
        }

        // 事物执行多个sql
        public static bool ExeNonQueryTran(List<string> sqlList)
        {
            bool flag = true;
            using (SqlConnection conn = new SqlConnection(conString))
            {
                SqlTransaction tran = null;//OleDbTransaction表示要在数据源执行的SQL事物
                
                try
                {
                    if (conn.State == ConnectionState.Closed)
                    {
                        conn.Open();
                        tran = conn.BeginTransaction();//BeginTransaction()表示开始数据库事务
                        SqlCommand oc = new SqlCommand();//OleDbCommand类表示要对数据源执行的 SQL 语句或存储过程。
                        oc.Connection = conn;//指定数据库连接
                        oc.Transaction = tran;//指定开始的事务
                        
                        foreach (string sql in sqlList)//用foreach遍历ArrayList，ArrayList里的每一个元素都是string类型的sql语句
                        {
                            oc.CommandText = sql;//设置要对数据源执行的SQL命令文本
                            oc.ExecuteNonQuery();//执行SQL并返回所受影响行数
                        }
                        tran.Commit();//提交事物
                    }
                }
                catch (Exception ex)//如果发生异常了，就将事务回滚
                {
                    flag = false;
                    tran.Rollback();//让事物回滚
                }
            }
            return flag;//返回受影响的行数用以判断操作是否成功
        }

        //返回DataTable
        public static DataTable GetTable(string sql)
        {
            SqlConnection conn = new SqlConnection(conString);
            SqlDataAdapter da = new SqlDataAdapter(sql, conn);
            DataTable table = new DataTable();
            da.Fill(table);
            return table;
        }

    }
}
