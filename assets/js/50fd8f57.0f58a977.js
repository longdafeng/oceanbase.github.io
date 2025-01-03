"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[1104],{44831:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>_,metadata:()=>a,toc:()=>d});var s=t(74848),i=t(28453);const _={title:"SQL_Audit",weight:8},o=void 0,a={id:"user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/commonly_used_sql/sql_audit",title:"SQL_Audit",description:"\u83b7\u53d6 elapsed_time \u6392\u5e8f\u6700\u8fd1 M \u5206\u949f\u5185\u7684 top N \u7684 SQL",source:"@site/docs/user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/commonly_used_sql/08_sql_audit.md",sourceDirName:"user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/commonly_used_sql",slug:"/user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/commonly_used_sql/sql_audit",permalink:"/docs/user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/commonly_used_sql/sql_audit",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/commonly_used_sql/08_sql_audit.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"SQL_Audit",weight:8},sidebar:"operation_and_maintenanceSidebar",previous:{title:"\u76d1\u63a7\u6307\u6807",permalink:"/docs/user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/commonly_used_sql/monitoring_metrics"},next:{title:"OCP \u4e2d\u4f7f\u7528\u7684\u8fd0\u7ef4 SQL",permalink:"/docs/user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/commonly_used_sql/ocp_monitor_ob"}},r={},d=[{value:"\u83b7\u53d6 elapsed_time \u6392\u5e8f\u6700\u8fd1 M \u5206\u949f\u5185\u7684 top N \u7684 SQL",id:"\u83b7\u53d6-elapsed_time-\u6392\u5e8f\u6700\u8fd1-m-\u5206\u949f\u5185\u7684-top-n-\u7684-sql",level:2},{value:"\u6309 qps \u6392\u5e8f\u83b7\u53d6\u4e1a\u52a1\u79df\u6237\u6700\u8fd1 M \u5206\u949f\u6267\u884c\u6b21\u6570\u6700\u591a\u7684 top N\u7684 SQL",id:"\u6309-qps-\u6392\u5e8f\u83b7\u53d6\u4e1a\u52a1\u79df\u6237\u6700\u8fd1-m-\u5206\u949f\u6267\u884c\u6b21\u6570\u6700\u591a\u7684-top-n\u7684-sql",level:2},{value:"\u6309 sqlid \u67e5\u627e\u6700\u8fd1\u6267\u884c\u7684 N\u4e2a SQL \u8be6\u60c5",id:"\u6309-sqlid-\u67e5\u627e\u6700\u8fd1\u6267\u884c\u7684-n\u4e2a-sql-\u8be6\u60c5",level:2},{value:"\u67e5\u770b\u67d0\u79df\u6237\u5728\u5404 server \u4e0a\u6700\u8fd1 M \u5206\u949f\u7684 qps",id:"\u67e5\u770b\u67d0\u79df\u6237\u5728\u5404-server-\u4e0a\u6700\u8fd1-m-\u5206\u949f\u7684-qps",level:2},{value:"\u67e5\u770b\u79df\u6237 top N \u4e2a\u6700\u6d88\u8017 cpu \u7684 sqlid",id:"\u67e5\u770b\u79df\u6237-top-n-\u4e2a\u6700\u6d88\u8017-cpu-\u7684-sqlid",level:2}];function l(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u83b7\u53d6-elapsed_time-\u6392\u5e8f\u6700\u8fd1-m-\u5206\u949f\u5185\u7684-top-n-\u7684-sql",children:"\u83b7\u53d6 elapsed_time \u6392\u5e8f\u6700\u8fd1 M \u5206\u949f\u5185\u7684 top N \u7684 SQL"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"root@sys"})," \u767b\u9646\u67e5\u8be2\uff0c"]}),"\n",(0,s.jsx)(e.p,{children:"\u83b7\u53d6 elapsed_time \u6392\u5e8f\u6700\u8fd1M\u5206\u949f\u5185\u7684topN\u7684sql"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SELECT\n  /*+READ_CONSISTENCY(WEAK), QUERY_TIMEOUT(100000000)*/\n  tenant_id,\n  tenant_name,\n  user_name,\n  db_name,\n  svr_ip,\n  plan_id,\n  plan_type,\n  affected_rows,\n  return_rows,\n  elapsed_time,\n  execute_time,\n  sql_id,\n  usec_to_time(request_time),\n  substr(\n    replace(query_sql, '\\n', ' '),\n    1,\n    100\n  )\nFROM\n  gv$ob_sql_audit\nWHERE\n  1 = 1\n  AND request_time > (time_to_usec(now()) - 10 * 60 * 1000000)\n  AND is_inner_sql = 0\n-- AND tenant_id = 1001\nORDER BY\n  elapsed_time DESC\nLIMIT\n  10;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6309-qps-\u6392\u5e8f\u83b7\u53d6\u4e1a\u52a1\u79df\u6237\u6700\u8fd1-m-\u5206\u949f\u6267\u884c\u6b21\u6570\u6700\u591a\u7684-top-n\u7684-sql",children:"\u6309 qps \u6392\u5e8f\u83b7\u53d6\u4e1a\u52a1\u79df\u6237\u6700\u8fd1 M \u5206\u949f\u6267\u884c\u6b21\u6570\u6700\u591a\u7684 top N\u7684 SQL"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"root@sys"})," \u767b\u9646\u67e5\u8be2\uff0c"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SELECT\n  /*+READ_CONSISTENCY(WEAK), QUERY_TIMEOUT(100000000)*/\n  tenant_id,\n  sql_id,\n  COUNT(1) / 60 qps,\n  AVG(elapsed_time),\n  AVG(execute_time),\n  AVG(queue_time),\n  AVG(return_rows),\n  AVG(affected_rows),\n  substr(\n    replace(query_sql, '\\n', ' '),\n    1,\n    100\n  ) query_sql,\n  ret_code\nFROM\n  gv$ob_sql_audit\nWHERE\n  1 = 1\n  AND request_time > (time_to_usec(now()) - 10 * 60 * 1000000)\n  AND is_inner_sql = 0\n  AND tenant_id > 1000\nGROUP BY\n  tenant_id,\n  sql_id,\n  query_sql,\n  ret_code\nORDER BY\n  qps DESC\nLIMIT\n  10;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6309-sqlid-\u67e5\u627e\u6700\u8fd1\u6267\u884c\u7684-n\u4e2a-sql-\u8be6\u60c5",children:"\u6309 sqlid \u67e5\u627e\u6700\u8fd1\u6267\u884c\u7684 N\u4e2a SQL \u8be6\u60c5"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"root@sys"})," \u767b\u9646\u67e5\u8be2\uff0c"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SELECT\n  /*+READ_CONSISTENCY(WEAK), QUERY_TIMEOUT(100000000)*/\n  *\nFROM\n  gv$ob_sql_audit\nWHERE\n  1 = 1\n-- AND sql_id = 'xxx'\nORDER BY\n  request_time DESC\nLIMIT\n  10;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u67e5\u770b\u67d0\u79df\u6237\u5728\u5404-server-\u4e0a\u6700\u8fd1-m-\u5206\u949f\u7684-qps",children:"\u67e5\u770b\u67d0\u79df\u6237\u5728\u5404 server \u4e0a\u6700\u8fd1 M \u5206\u949f\u7684 qps"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"root@sys"})," \u767b\u9646\u67e5\u8be2\uff0c"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SELECT\n  t2.zone,\n  t1.tenant_id,\n  t1.svr_ip,\n  COUNT(*) / 10 / 60 AS qps,\n  AVG(t1.elapsed_time),\n  AVG(t1.queue_time),\n  AVG(get_plan_time),\n  AVG(execute_time)\nFROM\n  gv$ob_sql_audit t1,\n  dba_ob_servers t2\nWHERE\n  t1.svr_ip = t2.svr_ip\n  -- AND t1.tenant_id = 1001\n  AND is_executor_rpc = 0\n  AND request_time > (time_to_usec(now()) - 10 * 60 * 1000000)\nGROUP BY\n  t1.tenant_id,\n  t1.svr_ip\nORDER BY\n  qps;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u67e5\u770b\u79df\u6237-top-n-\u4e2a\u6700\u6d88\u8017-cpu-\u7684-sqlid",children:"\u67e5\u770b\u79df\u6237 top N \u4e2a\u6700\u6d88\u8017 cpu \u7684 sqlid"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"root@sys"})," \u767b\u9646\u67e5\u8be2\uff0c"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SELECT\n  sql_id,\n  SUM(elapsed_time - queue_time) sum_t,\n  COUNT(*) cnt,\n  AVG(get_plan_time),\n  AVG(execute_time),\n  substr(\n    replace(query_sql, '\\n', ' '),\n    1,\n    100\n  ) query_sql\nFROM\n  gv$ob_sql_audit\nWHERE\n  tenant_id = tenant_id\n  AND is_executor_rpc = 0\n  AND request_time > (time_to_usec(now()) - 10 * 60 * 1000000)\nGROUP BY\n  sql_id\nORDER BY\n  sum_t DESC\nLIMIT\n  10;\n"})})]})}function c(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>a});var s=t(96540);const i={},_=s.createContext(i);function o(n){const e=s.useContext(_);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(_.Provider,{value:e},n.children)}}}]);