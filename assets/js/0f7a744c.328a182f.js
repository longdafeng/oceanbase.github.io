"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[7883],{331:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var t=s(74848),n=s(28453);const o={slug:"ob-schema",title:"What Is a Schema in OceanBase Database?"},i="What Is a Schema in OceanBase Database?",r={id:"blogs/tech/ob-schema",title:"What Is a Schema in OceanBase Database?",description:'In the OceanBase open source community, questions like "What is a schema?" are often seen.',source:"@site/docs/blogs/tech/ob-schema.md",sourceDirName:"blogs/tech",slug:"/blogs/tech/ob-schema",permalink:"/docs/blogs/tech/ob-schema",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/blogs/tech/ob-schema.md",tags:[],version:"current",frontMatter:{slug:"ob-schema",title:"What Is a Schema in OceanBase Database?"},sidebar:"blogsSidebar",previous:{title:"OceanBase Technical Insights for High-Concurrency Scenarios",permalink:"/docs/blogs/tech/high-concurrency"},next:{title:"Mastering Parallel Execution in OceanBase Database: Part 1 - Introduction",permalink:"/docs/blogs/tech/parallel-execution-I"}},c={},h=[{value:"How do I modify the syntax of a DDL statement when it fails with a syntax error?",id:"how-do-i-modify-the-syntax-of-a-ddl-statement-when-it-fails-with-a-syntax-error",level:2},{value:"How do I troubleshoot a DDL statement that failed with a vague error?",id:"how-do-i-troubleshoot-a-ddl-statement-that-failed-with-a-vague-error",level:2},{value:"What do I do if I am unable to obtain useful logs after executing a DDL statement?",id:"what-do-i-do-if-i-am-unable-to-obtain-useful-logs-after-executing-a-ddl-statement",level:2},{value:"What do I do if OBServers hang during schema refreshes?",id:"what-do-i-do-if-observers-hang-during-schema-refreshes",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"what-is-a-schema-in-oceanbase-database",children:"What Is a Schema in OceanBase Database?"})}),"\n",(0,t.jsx)(a.p,{children:'In the OceanBase open source community, questions like "What is a schema?" are often seen.'}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691459740667.png",alt:"1691459740"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Many mistakenly believe schemas and databases are synonymous in OceanBase Database. In this article, we talk about what a schema truly is."})}),"\n",(0,t.jsx)(a.p,{children:"In short, the meaning of a schema differs across MySQL and Oracle modes of OceanBase Database and its metadata management module."}),"\n",(0,t.jsx)(a.h1,{id:"schema-in-oceanbase-database-in-mysql-mode",children:"Schema in OceanBase Database in MySQL Mode"}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0Schema is a synonym for database. You can replace DATABASE with SCHEMA in SQL statements. For example, you can replace CREATE DATABASE with CREATE SCHEMA."}),"\n",(0,t.jsx)(a.h1,{id:"schema-in-oceanbase-database-in-oracle-mode",children:"Schema in OceanBase Database in Oracle Mode"}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0In OceanBase Database in Oracle mode, a schema is a collection of database objects owned by a user. It provides privilege management and namespace isolation, similar to a user space. Schema objects are database objects in a specific schema, such as tables, views, and indexes. Non-schema objects are database objects that do not belong to a specific schema, such as users, roles, and tablespaces."}),"\n",(0,t.jsx)(a.p,{children:"When a user is created, it has a default schema with the same name as the username. With appropriate privileges, a user can access and use objects in other schemas. When you access an object without specifying a schema, the system automatically adds the default schema name of the object."}),"\n",(0,t.jsxs)(a.p,{children:["If the user you currently use has the necessary privileges to access or modify objects in other schemas, you can switch to another schema by executing ",(0,t.jsx)(a.code,{children:"alter session set current_schema = other_schema_name;"}),". This allows you to work within the context of the specified schema."]}),"\n",(0,t.jsx)(a.h1,{id:"schema-in-the-metadata-management-module-of-oceanbase-database",children:"Schema in the Metadata Management Module of OceanBase Database"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691459773537.png",alt:"1691459773"})}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0In the metadata management module of OceanBase Database, a schema refers to the complete set of metadata describing database objects that must be synchronized across a cluster. This includes, but is not limited to, metadata for tables, databases, and users. Additionally, OceanBase Database employs a multi-version schema approach, ensuring eventual consistency of in-memory schema information across the cluster."}),"\n",(0,t.jsx)(a.h1,{id:"what-does-a-schema-encompass",children:"What does a schema encompass?"}),"\n",(0,t.jsx)(a.p,{children:'\xa0 \xa0 \xa0 \xa0After understanding that a schema represents metadata, you may naturally wonder, "What does the metadata encompass?"'}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691459787349.png",alt:"1691459787"})}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0The preceding answer requires clarification. Metadata for database objects is exclusively modified by DDL statements. In contrast, estimated row counts are influenced solely by DML statements and are therefore statistical information, not metadata. Consequently, estimated row counts are not part of the table schema."}),"\n",(0,t.jsxs)(a.p,{children:["For a comprehensive understanding of what constitutes metadata, refer to the code under ",(0,t.jsx)(a.code,{children:"src/share/schema"}),". For example, to view the table metadata stored in the table schema, check the members of the ",(0,t.jsx)(a.code,{children:"ObTableSchema"})," class and its parent classes in ",(0,t.jsx)(a.a,{href:"https://github.com/oceanbase/oceanbase/blob/9940650223427978ac634ff0d7423ab53c74a95e/src/share/schema/ob_table_schema.h#L821",children:"ob_table_schema.h"}),"."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691459798799.png",alt:"1691459798"})}),"\n",(0,t.jsx)(a.h1,{id:"execution-process-of-ddl-statements",children:"Execution Process of DDL Statements"}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0You now understand what a schema is and its components. As a schema can be modified only through DDL statements, we briefly explain their execution process to help troubleshoot DDL issues."}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0DDL statements are not processed by the optimizer; instead, they are sent as commands to a RootServer (RS) for processing. The following figure shows the execution process in OceanBase Database."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"1691459810",src:s(92980).A+"",width:"920",height:"298"})}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0Let's use a common CREATE TABLE statement as an example:"}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0The OBServer resolves the CREATE TABLE statement, stores the table information in create_table_arg, and sends create_table_arg to the RS through a remote procedure call (RPC). The RS then performs the following operations:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Check whether the schema used by the OBServer during resolution is of the latest version through optimistic locking. If not, retry the entire DDL statement."}),"\n",(0,t.jsx)(a.li,{children:"Obtain a new, monotonically increasing table ID within the tenant from the __all_sys_stat table."}),"\n",(0,t.jsx)(a.li,{children:"Persist the information provided in create_table_arg to internal tables such as __all_table_history for durability."}),"\n",(0,t.jsx)(a.li,{children:"Record the DDL change log in the __all_ddl_operation table for use in scenarios such as incremental refreshes."}),"\n",(0,t.jsx)(a.li,{children:"Publish the updated schema by notifying all nodes to refresh their in-memory schema cache."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"1691461106",src:s(72384).A+"",width:"863",height:"548"})}),"\n",(0,t.jsx)(a.p,{children:'\xa0 \xa0 \xa0 \xa0Upon receiving the PUBLISH SCHEMA command from the RS, other OBServers load the incremental schema changes from the internal tables into their in-memory schema cache. This process is often referred to as a "schema refresh."'}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0What happens when the DDL service on the RS calls publish_schema() to broadcast the new schema version to all OBServers?"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"The OBServer where the RS resides calls refresh_schema directly."}),"\n",(0,t.jsx)(a.li,{children:"Every other alive OBServer receives a switch_schema command, with the value of the schema_version parameter being the latest schema version."}),"\n",(0,t.jsx)(a.li,{children:"Upon receiving the command, each OBServer generates an ObSchemaRefreshTask to asynchronously refresh its schema to the latest version."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"1691459823",src:s(10521).A+"",width:"918",height:"278"})}),"\n",(0,t.jsx)(a.p,{children:"Here is another figure."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"The upper part of the figure shows DDL statement execution, during which the DDL service on the RS writes data to the internal tables and notifies each OBServer to load metadata changes into their in-memory schema cache."}),"\n",(0,t.jsx)(a.li,{children:"The lower part of the figure shows query execution, during which metadata is read from the in-memory schema cache."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691459832525.png",alt:"1691459832"})}),"\n",(0,t.jsx)(a.p,{children:"The GV$OB_SERVER_SCHEMA_INFO view in the question mentioned at the beginning of this article provides the information about the latest refreshed schema version for each tenant on every OBServer. Key schema information in this view includes REFRESHED_SCHEMA_VERSION, SCHEMA_COUNT, and SCHEMA_SIZE, defined as follows:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"REFRESHED_SCHEMA_VERSION: the schema version refreshed for the tenant on the OBServer."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"RECEIVED_SCHEMA_VERSION: the schema version in the latest refresh task received from the RS for the tenant on the OBServer."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"SCHEMA_COUNT: the total number of schema objects, such as tables and databases, for the schema version."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"SCHEMA_SIZE: the total memory used by the schema objects for the schema version, in bytes."}),"\n",(0,t.jsx)(a.p,{children:"obclient> select * from oceanbase.GV$OB_SERVER_SCHEMA_INFO\\G\r\n*************************** 1. row ***************************\r\nSVR_IP: 11.158.31.20\r\nSVR_PORT: 22602\r\nTENANT_ID: 1002\r\nREFRESHED_SCHEMA_VERSION: 1690109029768968\r\nRECEIVED_SCHEMA_VERSION: 1690113309637344\r\nSCHEMA_COUNT: 1583\r\nSCHEMA_SIZE: 1537240\r\nMIN_SSTABLE_SCHEMA_VERSION: -1\r\n1 row in set (0.01 sec)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h1,{id:"troubleshooting-of-ddl-and-schema-issues",children:"Troubleshooting of DDL and Schema Issues"}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0Now that we've discussed so much, let's move on to some typical DDL and schema issues. Feel free to share any good troubleshooting methods you've found."}),"\n",(0,t.jsx)(a.h2,{id:"how-do-i-modify-the-syntax-of-a-ddl-statement-when-it-fails-with-a-syntax-error",children:"How do I modify the syntax of a DDL statement when it fails with a syntax error?"}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0Customers often attempt to migrate metadata from their existing databases to OceanBase Database Community Edition. For example, we recently encountered a customer who tried to apply a PostgreSQL partitioned table definition to a tenant in OceanBase Database in MySQL mode. The execution failed and the customer mistakenly concluded that OceanBase Database does not support partitioned tables."}),"\n",(0,t.jsx)(a.p,{children:"CREATE TABLE value_stream_dashboard_counts (\r\nid bigint NOT NULL,\r\nnamespace_id bigint NOT NULL,\r\ncount bigint NOT NULL,\r\nmetric smallint NOT NULL\r\n)\r\nPARTITION BY RANGE (id);"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691459848425.png",alt:"1691459848"})}),"\n",(0,t.jsxs)(a.p,{children:['\xa0 \xa0 \xa0 \xa0How do I troubleshoot syntax errors in OceanBase Database in MySQL mode? A common approach is to consult the various OceanBase syntax documentation resources. However, OceanBase syntax is evolving rapidly as its MySQL compatibility improves. The documentation may not accurately reflect the currently supported syntax, and even eventual consistency cannot be guaranteed. A senior colleague once wisely said, "Documentation can be misleading, but code never lies." All syntax supported by OceanBase Database Community Edition is defined in a Yet Another Compiler Compiler (Yacc) file named ',(0,t.jsx)(a.a,{href:"https://github.com/oceanbase/oceanbase/blob/9940650223427978ac634ff0d7423ab53c74a95e/src/sql/parser/sql_parser_mysql_mode.y#L4391",children:"sql_parser_mysql_mode.y"}),"."]}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0With the syntax rules in this file, we can easily correct the preceding SQL statement for execution in OceanBase Database in MySQL mode."}),"\n",(0,t.jsx)(a.p,{children:"CREATE TABLE value_stream_dashboard_counts (\r\nid bigint NOT NULL,\r\nnamespace_id bigint NOT NULL,\r\ncount bigint NOT NULL,\r\nmetric smallint NOT NULL\r\n)\r\nPARTITION BY RANGE (id)(\r\nPARTITION p0 VALUES LESS THAN (100),\r\nPARTITION p1 VALUES LESS THAN (200),\r\nPARTITION p2 VALUES LESS THAN (300),\r\nPARTITION p3 VALUES LESS THAN MAXVALUE\r\n);"}),"\n",(0,t.jsx)(a.h2,{id:"how-do-i-troubleshoot-a-ddl-statement-that-failed-with-a-vague-error",children:"How do I troubleshoot a DDL statement that failed with a vague error?"}),"\n",(0,t.jsxs)(a.p,{children:["\xa0 \xa0 \xa0 \xa0For example, I encountered an error while executing a DDL statement. The error message indicated that a check constraint contains an invalid expression, but it did not pinpoint the offending part of the expression. Was the issue with the column ",(0,t.jsx)(a.code,{children:"c1"}),", the equality operator ",(0,t.jsx)(a.code,{children:"="}),", the function ",(0,t.jsx)(a.code,{children:"sysdate()"}),", or the entire expression ",(0,t.jsx)(a.code,{children:"c1 = sysdate()"}),"?"]}),"\n",(0,t.jsx)(a.p,{children:"obclient> create table t1(c1 int, check (c1 = sysdate()));\r\nERROR 3814 (HY000): An expression of a check constraint contains disallowed function."}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0First, query the trace_id of the failed statement."}),"\n",(0,t.jsx)(a.p,{children:"select last_trace_id();\r\n+------------------------------------+\r\n| last_trace_id()                    |\r\n+------------------------------------+\r\n| Y584A0B9E1F14-00060127094761A8-0-0 |\r\n+------------------------------------+\r\n1 row in set (0.00 sec)"}),"\n",(0,t.jsxs)(a.p,{children:["\xa0 \xa0 \xa0 \xa0Then, run ",(0,t.jsx)(a.code,{children:"grep Y584A0B9E1F14-00060127094761B0-0-0 observer.log\\*"})," to obtain the OBServer logs."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691459866653.png",alt:"1691459866"})}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0The first warning log for this trace indicates that a deterministic expression is wrongly specified in the check constraint. However, it actually means a non-deterministic expression is used, which is not allowed."}),"\n",(0,t.jsxs)(a.p,{children:["\xa0 \xa0 \xa0 \xa0To understand what constitutes a non-deterministic expression, refer to the code based on the file name and line number indicated in the log, such as ",(0,t.jsx)(a.a,{href:"https://github.com/oceanbase/oceanbase/blob/9940650223427978ac634ff0d7423ab53c74a95e/src/sql/resolver/expr/ob_raw_expr_util.cpp#L1856",children:"ob_raw_expr_util.cpp:1856"}),". You can navigate to the definition of a specific function on the web page, such as ",(0,t.jsx)(a.a,{href:"https://github.com/oceanbase/oceanbase/blob/master/src/sql/resolver/expr/ob_raw_expr.cpp#L832",children:"ObRawExpr::is_non_pure_sys_func_expr"}),"."]}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0All non-deterministic expressions are listed there, including sysdate, which was used in the failed statement."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691459880888.png",alt:"1691459880"})}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0We can infer that the expression within a check constraint must be deterministic, producing the same result each time the expression is executed. The sysdate expression, which returns the current time, produces a different result upon each execution and is thus not allowed in check constraints. This is a good opportunity to explore other examples of non-deterministic expressions."}),"\n",(0,t.jsx)(a.h2,{id:"what-do-i-do-if-i-am-unable-to-obtain-useful-logs-after-executing-a-ddl-statement",children:"What do I do if I am unable to obtain useful logs after executing a DDL statement?"}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0For example, I executed a DDL statement to create a database, but it failed with an error."}),"\n",(0,t.jsx)(a.p,{children:"obclient> create database xiaofeng_db;\r\nERROR 4016 (HY000): Internal error"}),"\n",(0,t.jsx)(a.p,{children:"obclient> select last_trace_id();\r\n+------------------------------------+\r\n| last_trace_id()                    |\r\n+------------------------------------+\r\n| Y584A0B9E1F14-00060127094761B4-0-0 |\r\n+------------------------------------+\r\n1 row in set (0.00 sec)"}),"\n",(0,t.jsxs)(a.p,{children:["I tried running ",(0,t.jsx)(a.code,{children:"grep Y584A0B9E1F14-00060127094761B4-0-0 observer.log*"})," to obtain logs based on the trace ID, but only found an RPC error."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691459892911.png",alt:"1691459893"})}),"\n",(0,t.jsxs)(a.p,{children:["Since DDL::Arg is sent to the RS for execution, the issue likely originated there. Therefore, run ",(0,t.jsx)(a.code,{children:"grep Y584A0B9E1F14-00060127094761B4-0-0 rootservice.log* | vi -"})," to obtain the RS logs, and search for the first occurrence of ",(0,t.jsx)(a.code,{children:"ret=-4016"})," in the log file based on the error code 4016."]}),"\n",(0,t.jsxs)(a.p,{children:["\xa0 \xa0 \xa0 \xa0The error log indicates that the issue occurred on line 2887 of the ",(0,t.jsx)(a.code,{children:"ob\\_root\\_service.cpp"}),' file. The error message is "create_database failed, because db_name is forbidden." We encourage you to first analyze the issue based on the file name and line number in the error log. If the cause remains unclear, contact OceanBase Database Technical Support for assistance.']}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0The file contains an intentionally added error code to simulate errors on the RS. Any attempt to create a database named xiaofeng_db will trigger a 4016 OB_ERR_UNEXPECTED error."}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"rootservice.log"})," file is often overlooked during the troubleshooting of DDL and schema issues. Even many highly experienced OceanBase kernel developers have wasted considerable time debugging a minor bug due to this oversight. If you find no clue in the ",(0,t.jsx)(a.code,{children:"observer.log"})," file when troubleshooting this type of issues, remember to check the ",(0,t.jsx)(a.code,{children:"rootservice.log"})," file."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691459923618.png",alt:"1691459923"})}),"\n",(0,t.jsx)(a.h2,{id:"what-do-i-do-if-observers-hang-during-schema-refreshes",children:"What do I do if OBServers hang during schema refreshes?"}),"\n",(0,t.jsx)(a.p,{children:"\xa0 \xa0 \xa0 \xa0A schema refresh involves loading data from internal tables into memory and verifying schema validity. If the verification fails, it indicates an issue with the metadata persisted in the internal tables, causing OBServers to hang. This happens because executing DDL statements, DML statements, or queries based on corrupted metadata may incur many data correctness issues. This situation is rare but can cause severe consequences."}),"\n",(0,t.jsx)(a.p,{children:'\xa0 \xa0 \xa0 \xa0If a DDL statement hangs and messages such as "Trying so hard to die" and "schema meta is still not consistent after rebuild, need fixing" appear in the RS logs, manual intervention is needed to restore the environment by modifying incorrect data in the OceanBase Database internal tables. This process is risky. We recommend that you contact OceanBase Database Technical Support for assistance in diagnosing the root cause and restoring your environment. If you are using OceanBase Database Community Edition, join DingTalk group 33254054 and contact the group administrator.'}),"\n",(0,t.jsx)(a.h1,{id:"references",children:"References"}),"\n",(0,t.jsxs)(a.p,{children:["Overview of database objects in MySQL mode: ",(0,t.jsx)(a.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-10000000001702409",children:"https://www.oceanbase.com/docs/common-oceanbase-database-10000000001702409"})]}),"\n",(0,t.jsxs)(a.p,{children:["Overview of database objects in Oracle mode: ",(0,t.jsx)(a.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-10000000001702405",children:"https://www.oceanbase.com/docs/common-oceanbase-database-10000000001702405"})]}),"\n",(0,t.jsxs)(a.p,{children:["Answer from Yanmu in the Q&A section of the OceanBase community: ",(0,t.jsx)(a.a,{href:"https://ask.oceanbase.com/t/topic/35601662/3",children:"https://ask.oceanbase.com/t/topic/35601662/3"})]}),"\n",(0,t.jsxs)(a.p,{children:["Source code of OceanBase Database: ",(0,t.jsx)(a.a,{href:"https://github.com/oceanbase/oceanbase/blob/9940650223427978ac634ff0d7423ab53c74a95e/src/share/schema/ob_table_schema.h#L821",children:"https://github.com/oceanbase/oceanbase/blob/9940650223427978ac634ff0d7423ab53c74a95e/src/share/schema/ob_table_schema.h#L821"})]})]})}function l(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},92980:(e,a,s)=>{s.d(a,{A:()=>t});const t=s.p+"assets/images/1691459810134-e74d7f7e284c458bc48a70c693ef7202.png"},10521:(e,a,s)=>{s.d(a,{A:()=>t});const t=s.p+"assets/images/1691459823348-f88e9281a6071d14aed0dc2eb3a8e918.png"},72384:(e,a,s)=>{s.d(a,{A:()=>t});const t=s.p+"assets/images/1691461106276-6ad48ae42a241db4cbdc8a36f61117a0.png"},28453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>r});var t=s(96540);const n={},o=t.createContext(n);function i(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);