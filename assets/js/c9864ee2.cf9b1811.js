"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[4393],{89115:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>x,toc:()=>a});var i=s(74848),c=s(28453);const l={title:"IOPS \u8d44\u6e90\u9694\u79bb\u51c6\u5907\u5de5\u4f5c",weight:3},r=void 0,x={id:"user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants/resource_isolation_within_a_tenant/disk_performance_calibration",title:"IOPS \u8d44\u6e90\u9694\u79bb\u51c6\u5907\u5de5\u4f5c",description:"\u78c1\u76d8\u6027\u80fd\u6821\u51c6",source:"@site/docs/user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants/04_resource_isolation_within_a_tenant/03_disk_performance_calibration.md",sourceDirName:"user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants/04_resource_isolation_within_a_tenant",slug:"/user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants/resource_isolation_within_a_tenant/disk_performance_calibration",permalink:"/docs/user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants/resource_isolation_within_a_tenant/disk_performance_calibration",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants/04_resource_isolation_within_a_tenant/03_disk_performance_calibration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"IOPS \u8d44\u6e90\u9694\u79bb\u51c6\u5907\u5de5\u4f5c",weight:3},sidebar:"operation_and_maintenanceSidebar",previous:{title:"CPU \u8d44\u6e90\u9694\u79bb\u51c6\u5907\u5de5\u4f5c",permalink:"/docs/user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants/resource_isolation_within_a_tenant/cgroup_config"},next:{title:"\u914d\u7f6e\u79df\u6237\u5185\u8d44\u6e90\u9694\u79bb",permalink:"/docs/user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants/resource_isolation_within_a_tenant/dbms_resource_manager"}},d={},a=[{value:"\u78c1\u76d8\u6027\u80fd\u6821\u51c6",id:"\u78c1\u76d8\u6027\u80fd\u6821\u51c6",level:2},{value:"IOPS \u57fa\u51c6\u503c\u7684\u8ba1\u7b97",id:"iops-\u57fa\u51c6\u503c\u7684\u8ba1\u7b97",level:3},{value:"\u6821\u51c6\u65b9\u5f0f",id:"\u6821\u51c6\u65b9\u5f0f",level:3},{value:"\u81ea\u52a8\u6821\u51c6",id:"\u81ea\u52a8\u6821\u51c6",level:3},{value:"\u624b\u52a8\u6821\u51c6",id:"\u624b\u52a8\u6821\u51c6",level:3}];function h(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u78c1\u76d8\u6027\u80fd\u6821\u51c6",children:"\u78c1\u76d8\u6027\u80fd\u6821\u51c6"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u63a7\u5236 IOPS \u8d44\u6e90\u9694\u79bb\u524d\uff0c\u9700\u8981\u8fdb\u884c\u78c1\u76d8\u6027\u80fd\u6821\u51c6\u3002\u5982\u679c\u60a8\u4e0d\u9700\u8981\u63a7\u5236 IOPS \u8d44\u6e90\u9694\u79bb\uff0c\u8bf7\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"iops-\u57fa\u51c6\u503c\u7684\u8ba1\u7b97",children:"IOPS \u57fa\u51c6\u503c\u7684\u8ba1\u7b97"}),"\n",(0,i.jsx)(e.p,{children:"\u78c1\u76d8\u6027\u80fd\u7684\u6821\u51c6\u4e3b\u8981\u662f\u5bf9\u78c1\u76d8\u7684 IOPS \u503c\u8fdb\u884c\u6821\u51c6\u3002IOPS \u57fa\u51c6\u503c\u7684\u8ba1\u7b97\u516c\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"IOPS \u57fa\u51c6\u503c= Min(\u78c1\u76d8\u9650\u5236\u7684 IOPS \u503c, (\u76ee\u6807\u5e26\u5bbd / I/O \u64cd\u4f5c\u7684\u6570\u636e\u91cf))"})}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u4e2d\uff0c\u76ee\u6807\u5e26\u5bbd\u7684\u53d6\u503c\u9700\u8981\u8003\u8651\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u9762\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u673a\u5668\u7684\u89c4\u683c\uff0c\u5373\u5b9e\u9645\u7533\u8bf7\u7684\u78c1\u76d8\u7684\u9650\u5236\u5e26\u5bbd\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4e1a\u52a1\u5bf9 RT\uff08Response Time\uff09\u7684\u654f\u611f\u5ea6\u8981\u6c42\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u9700\u8981\u9664\u53bb IO Manager \u6240\u4f7f\u7528\u7684\u90e8\u5206\u5e26\u5bbd\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u901a\u5e38\u9700\u8981\u4e3a Clog \u9884\u7559 10~20 MB \u7684\u5e26\u5bbd\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4ee5 16 KB \u8bfb\u6570\u636e\u4e3a\u4f8b\uff0c\u4e3a\u78c1\u76d8\u8ba1\u7b97 16 KB \u8bfb\u6570\u636e\u5bf9\u5e94\u7684 IOPS \u57fa\u51c6\u503c\u7684\u65b9\u6cd5\u5982\u4e0b\u3002\u5047\u8bbe\u5f53\u524d\u4f7f\u7528\u7684\u78c1\u76d8\u7684\u9650\u5236\u5e26\u5bbd\u4e3a 600 MB\uff0cIOPS \u4e3a 30000\uff0c\u4e14\u4e1a\u52a1\u5bf9 RT \u654f\u611f\u5ea6\u8f83\u9ad8\uff0c\u5982\u679c\u5b8c\u5168\u4f7f\u7528 600 MB \u65f6\u4f1a\u5bfc\u81f4\u6296\u52a8\u6982\u7387\u5927\u5927\u589e\u52a0\uff0c\u518d\u9664\u53bb\u4e3a Clog \u9884\u7559\u7684\u5e26\u5bbd\uff0c\u7efc\u5408\u8003\u8651\u786e\u8ba4\u76ee\u6807\u5e26\u5bbd\u4e3a 400 MB\u3002\u4f7f\u7528 16 KB \u8bfb\u6570\u636e\u8ba1\u7b97\u51fa 400 MB \u5e26\u5bbd\u6700\u591a\u53ef\u8fbe\u5230\u7684 IOPS \u4e3a ",(0,i.jsx)(e.code,{children:"(400 * 1024 KB)/16 KB=25600"}),"\uff0c\u6545\u53ef\u4ee5\u5c06 IOPS \u7684\u503c\u6821\u51c6\u4e3a 25600\u3002\u5982\u679c\u8ba1\u7b97\u51fa\u6765\u7684 IOPS \u503c\u5df2\u7ecf\u8fbe\u5230\u6216\u8d85\u8fc7\u4e86\u8be5\u78c1\u76d8\u7684 IOPS \u4e0a\u9650\uff0c\u4f8b\u5982\uff0c\u67d0\u79cd\u78c1\u76d8\u7684 IOPS \u6700\u9ad8\u4e3a 10000\uff0c\u5219\u53ef\u4ee5\u5c06 IOPS \u7684\u503c\u6821\u51c6\u4e3a 10000\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u6821\u51c6\u65b9\u5f0f",children:"\u6821\u51c6\u65b9\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"OceanBase \u6570\u636e\u5e93\u7684\u78c1\u76d8\u6027\u80fd\u6821\u51c6\u529f\u80fd\u7528\u4e8e\u5bf9 OBServer \u8282\u70b9\u6240\u5728\u78c1\u76d8\u7684\u8bfb\u5199\u6027\u80fd\u8fdb\u884c\u6821\u51c6\u3002OceanBase \u6570\u636e\u5e93\u5f53\u524d\u652f\u6301\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\u78c1\u76d8\u7684\u6027\u80fd\u6821\u51c6\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u81ea\u52a8\u6821\u51c6\uff1a\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"JOB"})," \u8bed\u53e5\u89e6\u53d1\u540e\u53f0\u4efb\u52a1\u81ea\u52a8\u6821\u51c6\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u624b\u52a8\u6821\u51c6\uff1a\u901a\u8fc7\u4e3b\u52a8\u5237\u65b0\u78c1\u76d8\u6821\u51c6\u4fe1\u606f\u6765\u624b\u52a8\u6821\u51c6\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u81ea\u52a8\u6821\u51c6",children:"\u81ea\u52a8\u6821\u51c6"}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u5f53\u524d OceanBase \u96c6\u7fa4\u4e3a\u7a7a\u8d1f\u8f7d\uff0c\u4e14\u78c1\u76d8\u6709\u8f83\u591a\u7a7a\u95f2\u7a7a\u95f4\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"JOB"})," \u8bed\u53e5\u89e6\u53d1\u540e\u53f0\u4efb\u52a1\u7684\u65b9\u5f0f\u81ea\u52a8\u5bf9\u78c1\u76d8\u6027\u80fd\u8fdb\u884c\u6821\u51c6\u3002\u8be5\u65b9\u5f0f\u4e0b\uff0c\u7cfb\u7edf\u9ed8\u8ba4\u4f1a\u5bf9\u6570\u636e\u76d8\u6267\u884c\u4e00\u6b21\u78c1\u76d8\u6821\u51c6\u4efb\u52a1\u3002"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"root"})," \u7528\u6237\u767b\u5f55\u5230\u96c6\u7fa4\u7684 ",(0,i.jsx)(e.code,{children:"sys"})," \u79df\u6237\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u8fde\u63a5\u793a\u4f8b\u5982\u4e0b\uff0c\u8fde\u63a5\u6570\u636e\u5e93\u65f6\u8bf7\u4ee5\u5b9e\u9645\u73af\u5883\u4e3a\u51c6\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"obclient -h10.xx.xx.xx -P2883 -uroot@sys#obdemo -p***** -A\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6839\u636e\u4e1a\u52a1\u4f7f\u7528\u573a\u666f\uff0c\u9009\u62e9\u5408\u9002\u7684\u547d\u4ee4\uff0c\u89e6\u53d1\u78c1\u76d8\u6821\u51c6\u4efb\u52a1\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5bf9\u96c6\u7fa4\u5185\u7684\u6240\u6709 OBServer \u8282\u70b9\u89e6\u53d1\u78c1\u76d8\u6821\u51c6\u4efb\u52a1"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'ALTER SYSTEM RUN JOB "job_name";\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u5176\u4e2d\uff0c",(0,i.jsx)(e.code,{children:"job_name"})," \u4e3a\u6307\u5b9a\u7684\u540e\u53f0\u4efb\u52a1\u540d\u79f0\u3002\u78c1\u76d8\u6821\u51c6\u4efb\u52a1\u5bf9\u5e94\u7684\u540e\u53f0\u4efb\u52a1\u540d\u79f0\u4e3a ",(0,i.jsx)(e.code,{children:"io_calibration"}),"\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'ALTER SYSTEM RUN JOB "io_calibration";\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5bf9\u6307\u5b9a Zone \u5185\u7684\u6240\u6709 OBServer \u8282\u70b9\u89e6\u53d1\u78c1\u76d8\u6821\u51c6\u4efb\u52a1"}),"\n",(0,i.jsx)(e.p,{children:"\u8bed\u53e5\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'ALTER SYSTEM RUN JOB "job_name" ZONE [=] zone_name;\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"job_name"}),"\uff1a\u6307\u5b9a\u7684\u540e\u53f0\u4efb\u52a1\u540d\u79f0\u3002\u78c1\u76d8\u6821\u51c6\u4efb\u52a1\u5bf9\u5e94\u7684\u540e\u53f0\u4efb\u52a1\u540d\u79f0\u4e3a ",(0,i.jsx)(e.code,{children:"io_calibration"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"zone_name"}),"\uff1a\u6307\u5b9a\u5f85\u89e6\u53d1\u78c1\u76d8\u6821\u51c6\u4efb\u52a1\u7684 Zone\u3002\u5f53\u524d\u4ec5\u652f\u6301\u6307\u5b9a\u4e00\u4e2a Zone\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'ALTER SYSTEM RUN JOB "io_calibration" ZONE = zone1;\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5bf9\u6307\u5b9a\u7684\u67d0\u4e2a OBServer \u8282\u70b9\u89e6\u53d1\u78c1\u76d8\u6821\u51c6\u4efb\u52a1"}),"\n",(0,i.jsx)(e.p,{children:"\u8bed\u53e5\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER SYSTEM RUN JOB \"job_name\" SERVER [=] 'svr_ip:svr_port';\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"job_name"}),"\uff1a\u6307\u5b9a\u7684\u540e\u53f0\u4efb\u52a1\u540d\u79f0\u3002\u78c1\u76d8\u6821\u51c6\u4efb\u52a1\u5bf9\u5e94\u7684\u540e\u53f0\u4efb\u52a1\u540d\u79f0\u4e3a ",(0,i.jsx)(e.code,{children:"io_calibration"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"svr_ip"}),"\uff1a\u6307\u5b9a\u5f85\u89e6\u53d1\u78c1\u76d8\u6821\u51c6\u4efb\u52a1\u7684 OBServer \u8282\u70b9\u7684 IP\u3002\u5f53\u524d\u4ec5\u652f\u6301\u6307\u5b9a\u4e00\u4e2a OBServer \u8282\u70b9\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"svr_port"}),"\uff1a\u6307\u5b9a\u5f85\u89e6\u53d1\u78c1\u76d8\u6821\u51c6\u4efb\u52a1\u7684 OBServer \u8282\u70b9\u7684 RPC \u7aef\u53e3\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER SYSTEM RUN JOB \"io_calibration\" SERVER = 'xx.xx.xx.1:2882';\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u67e5\u770b\u78c1\u76d8 I/O \u6821\u51c6\u72b6\u6001\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u89e6\u53d1\u78c1\u76d8\u6821\u51c6\u4efb\u52a1\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"GV$OB_IO_CALIBRATION_STATUS"})," \u6216 ",(0,i.jsx)(e.code,{children:"V$OB_IO_CALIBRATION_STATUS"})," \u89c6\u56fe\u786e\u8ba4 I/O \u6821\u51c6\u72b6\u6001\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM oceanbase.V$OB_IO_CALIBRATION_STATUS;\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u67e5\u8be2\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"+----------------+----------+--------------+-------------+----------------------------+-------------+\n| SVR_IP         | SVR_PORT | STORAGE_NAME | STATUS      | START_TIME                 | FINISH_TIME |\n+----------------+----------+--------------+-------------+----------------------------+-------------+\n| xx.xx.xx.197   |     2882 | DATA         | IN PROGRESS | 2023-06-27 14:30:38.393482 | NULL        |\n+----------------+----------+--------------+-------------+----------------------------+-------------+\n1 row in set\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u78c1\u76d8 I/O \u6821\u51c6\u72b6\u6001\u5206\u4e3a\u4ee5\u4e0b\u51e0\u79cd\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"NOT AVAILABLE"}),"\uff1a\u8868\u793a\u672a\u5f00\u59cb I/O \u6821\u51c6\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"IN PROGRESS"}),"\uff1a\u8868\u793a\u6b63\u5728\u8fdb\u884c I/O \u6821\u51c6\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"READY"}),"\uff1a\u8868\u793a I/O \u6821\u51c6\u5df2\u5b8c\u6210\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"FAILED"}),"\uff1a\u8868\u793a I/O \u6821\u51c6\u6267\u884c\u5931\u8d25\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4ece\u67e5\u8be2\u7ed3\u679c\u53ef\u77e5\uff0c",(0,i.jsx)(e.code,{children:"STATUS"})," \u5b57\u6bb5\u7684\u503c\u4e3a ",(0,i.jsx)(e.code,{children:"IN PROGRESS"}),"\uff0c\u8868\u793a\u6b63\u5728\u8fdb\u884c\u78c1\u76d8 I/O \u6821\u51c6\u3002\u5f85\u78c1\u76d8 I/O \u6821\u51c6\u5b8c\u6210\u540e\uff0c",(0,i.jsx)(e.code,{children:"STATUS"})," \u5b57\u6bb5\u7684\u503c\u4f1a\u53d8\u6210 ",(0,i.jsx)(e.code,{children:"READY"}),"\uff0c\u8868\u793a\u78c1\u76d8\u6821\u51c6\u5df2\u5b8c\u6210\uff0c\u540c\u65f6 ",(0,i.jsx)(e.code,{children:"FINISH_TIME"})," \u5b57\u6bb5\u4e2d\u4f1a\u663e\u793a\u5b8c\u6210\u65f6\u95f4\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"+----------------+----------+--------------+--------+----------------------------+----------------------------+\n| SVR_IP         | SVR_PORT | STORAGE_NAME | STATUS | START_TIME                 | FINISH_TIME                |\n+----------------+----------+--------------+--------+----------------------------+----------------------------+\n| xx.xx.xx.197   |     2882 | DATA         | READY  | 2023-06-27 14:25:20.202022 | 2023-06-27 14:27:00.398748 |\n+----------------+----------+--------------+--------+----------------------------+----------------------------+\n1 row in set\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u786e\u8ba4\u78c1\u76d8 I/O \u6821\u51c6\u662f\u5426\u751f\u6548\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u5f85\u78c1\u76d8 I/O \u6821\u51c6\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"GV$OB_IO_BENCHMARK"})," \u6216 ",(0,i.jsx)(e.code,{children:"V$OB_IO_BENCHMARK"})," \u89c6\u56fe\u786e\u8ba4\u78c1\u76d8 I/O \u6821\u51c6\u662f\u5426\u751f\u6548\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM oceanbase.GV$OB_IO_BENCHMARK;\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u67e5\u8be2\u7ed3\u679c\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"+----------------+----------+--------------+-------+---------+--------+------+---------+\n| SVR_IP         | SVR_PORT | STORAGE_NAME | MODE  | SIZE    | IOPS   | MBPS | LATENCY |\n+----------------+----------+--------------+-------+---------+--------+------+---------+\n| xx.xx.xx.197   |     2882 | DATA         | READ  |    4096 | 124648 |  486 |     128 |\n| xx.xx.xx.197   |     2882 | DATA         | READ  |    8192 | 118546 |  926 |     134 |\n| xx.xx.xx.197   |     2882 | DATA         | READ  |   16384 |  98870 | 1544 |     161 |\n| xx.xx.xx.197   |     2882 | DATA         | READ  |   32768 |  73857 | 2308 |     216 |\n| xx.xx.xx.197   |     2882 | DATA         | READ  |   65536 |  48015 | 3000 |     332 |\n| xx.xx.xx.197   |     2882 | DATA         | READ  |  131072 |  33780 | 4222 |     473 |\n| xx.xx.xx.197   |     2882 | DATA         | READ  |  262144 |  20650 | 5162 |     774 |\n| xx.xx.xx.197   |     2882 | DATA         | READ  |  524288 |  12111 | 6055 |    1321 |\n| xx.xx.xx.197   |     2882 | DATA         | READ  | 1048576 |   6237 | 6237 |    2565 |\n| xx.xx.xx.197   |     2882 | DATA         | READ  | 2097152 |   2762 | 5524 |    5795 |\n| xx.xx.xx.197   |     2882 | DATA         | WRITE |    4096 |  49771 |  194 |     321 |\n| xx.xx.xx.197   |     2882 | DATA         | WRITE |    8192 |  48566 |  379 |     329 |\n| xx.xx.xx.197   |     2882 | DATA         | WRITE |   16384 |  42784 |  668 |     373 |\n| xx.xx.xx.197   |     2882 | DATA         | WRITE |   32768 |  35187 | 1099 |     454 |\n| xx.xx.xx.197   |     2882 | DATA         | WRITE |   65536 |  24892 | 1555 |     642 |\n| xx.xx.xx.197   |     2882 | DATA         | WRITE |  131072 |  12720 | 1590 |    1257 |\n| xx.xx.xx.197   |     2882 | DATA         | WRITE |  262144 |   6889 | 1722 |    2322 |\n| xx.xx.xx.197   |     2882 | DATA         | WRITE |  524288 |   3452 | 1726 |    4636 |\n| xx.xx.xx.197   |     2882 | DATA         | WRITE | 1048576 |   1689 | 1689 |    9481 |\n| xx.xx.xx.197   |     2882 | DATA         | WRITE | 2097152 |    876 | 1752 |   18296 |\n+----------------+----------+--------------+-------+---------+--------+------+---------+\n20 rows in set\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u76f8\u5173\u5b57\u6bb5\u7684\u8bf4\u660e\u4fe1\u606f\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"STORAGE_NAME"}),"\uff1a\u8868\u793a\u5b58\u50a8\u540d\u79f0\u3002",(0,i.jsx)(e.code,{children:"DATA"})," \u8868\u793a\u6570\u636e\u76d8\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"MODE"}),"\uff1a\u8868\u793a I/O \u6a21\u5f0f\u4e3a\u8bfb\u6216\u8005\u5199\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"SIZE"}),"\uff1a\u8868\u793a\u5355\u4e2a I/O \u8bf7\u6c42\u7684\u6570\u636e\u91cf\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"IOPS"}),"\uff1a\u8868\u793a\u6bcf\u79d2\u949f\u5b8c\u6210 I/O \u8bf7\u6c42\u7684\u6570\u91cf\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"MBPS"}),"\uff1a\u8868\u793a\u78c1\u76d8\u5e26\u5bbd\uff0c\u5355\u4f4d\u4e3a MB/s\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"LATENCY"}),"\uff1a\u8868\u793a\u78c1\u76d8\u54cd\u5e94\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a us\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u624b\u52a8\u6821\u51c6",children:"\u624b\u52a8\u6821\u51c6"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u5f53\u524d OceanBase \u96c6\u7fa4\u4e2d\u5df2\u6709\u8d1f\u8f7d\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e3b\u52a8\u5237\u65b0\u78c1\u76d8\u6821\u51c6\u4fe1\u606f\u7684\u65b9\u5f0f\u624b\u52a8\u5bf9\u78c1\u76d8\u6027\u80fd\u8fdb\u884c\u6821\u51c6\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"root"})," \u7528\u6237\u767b\u5f55\u5230\u96c6\u7fa4\u7684 ",(0,i.jsx)(e.code,{children:"sys"})," \u79df\u6237\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u8fde\u63a5\u793a\u4f8b\u5982\u4e0b\uff0c\u8fde\u63a5\u6570\u636e\u5e93\u65f6\u8bf7\u4ee5\u5b9e\u9645\u73af\u5883\u4e3a\u51c6\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"obclient -h10.xx.xx.xx -P2883 -uroot@sys#obdemo -p***** -A\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6839\u636e\u4e1a\u52a1\u4f7f\u7528\u573a\u666f\uff0c\u9009\u62e9\u5408\u9002\u7684\u547d\u4ee4\uff0c\u4e3b\u52a8\u5237\u65b0\u78c1\u76d8\u6821\u51c6\u4fe1\u606f\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5bf9\u96c6\u7fa4\u5185\u7684\u6240\u6709 OBServer \u8282\u70b9\u5237\u65b0\u4e00\u6b21\u78c1\u76d8\u6027\u80fd\u4fe1\u606f"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'ALTER SYSTEM REFRESH IO CALIBRATION [STORAGE [=] \'storage_name\'] [CALIBRATION_INFO [=] ("mode : size : latency : iops" [, "mode : size : latency : iops"])];\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6e05\u9664\u96c6\u7fa4\u5185\u6240\u6709 OBServer \u8282\u70b9\u7684\u78c1\u76d8\u6027\u80fd\u4fe1\u606f"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER SYSTEM REFRESH IO CALIBRATION [STORAGE [=] 'storage_name'] CALIBRATION_INFO = (\"\");\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5bf9\u6307\u5b9a Zone \u5185\u7684\u6240\u6709 OBServer \u8282\u70b9\u5237\u65b0\u4e00\u6b21\u78c1\u76d8\u6821\u51c6\u4fe1\u606f"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'ALTER SYSTEM REFRESH IO CALIBRATION [STORAGE [=] \'storage_name\'] [CALIBRATION_INFO [=] ("mode : size : latency : iops "[, "mode : size : latency : iops"])] ZONE [=] zone_name;\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5bf9\u6307\u5b9a\u7684 OBServer \u8282\u70b9\u5237\u65b0\u4e00\u6b21\u78c1\u76d8\u6821\u51c6\u4fe1\u606f"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER SYSTEM REFRESH IO CALIBRATION [STORAGE [=] 'storage_name'] [CALIBRATION_INFO [=] (\"mode : size : latency : iops\" [, \"mode : size : latency : iops\"])] SERVER [=] 'svr_ip:svr_port';\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"STORAGE"}),"\uff1a\u6307\u5b9a OceanBase \u6570\u636e\u5e93\u5b58\u50a8\u76d8\u7684\u540d\u79f0\uff0c\u5f53\u524d\u4ec5\u652f\u6301 ",(0,i.jsx)(e.code,{children:"DATA"}),"\uff0c\u5373\u6570\u636e\u76d8\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"CALIBRATION_INFO"}),"\uff1a\u6307\u5b9a\u5f85\u5237\u65b0\u7684\u78c1\u76d8\u6821\u51c6\u4fe1\u606f\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u4ece\u5185\u90e8\u8868\u5237\u65b0\u78c1\u76d8\u6027\u80fd\u4fe1\u606f\u3002",(0,i.jsx)(e.code,{children:"CALIBRATION_INFO"})," \u5217\u8868\u4e2d\uff0c\u8bfb\u3001\u5199\u6a21\u5f0f\u90fd\u81f3\u5c11\u9700\u8981\u6307\u5b9a\u4e00\u6761\u8bb0\u5f55\uff0c\u5426\u5219\u7cfb\u7edf\u4f1a\u62a5\u9519\u3002"]}),"\n",(0,i.jsxs)("main",{id:"notice",type:"explain",children:[(0,i.jsx)("h4",{children:"\u8bf4\u660e"}),(0,i.jsxs)("p",{children:["\u6307\u5b9a\u78c1\u76d8\u6821\u51c6\u4fe1\u606f\u65f6\uff0c\u5982\u679c\u5f53\u524d\u6ca1\u6709\u76f8\u5173\u78c1\u76d8\u7684\u538b\u6d4b\u6570\u636e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 FIO \u5de5\u5177\u6267\u884c\u4e00\u6b21\u6027\u80fd\u538b\u6d4b\u6765\u83b7\u53d6\u5f53\u524d\u78c1\u76d8\u7684\u6027\u80fd\u6570\u636e\uff0c\u6709\u5173 FIO \u5de5\u5177\u7684\u8be6\u7ec6\u4ecb\u7ecd\u53ca\u4f7f\u7528\uff0c\u8bf7\u53c2\u89c1 ",(0,i.jsx)("a",{href:"https://fio.readthedocs.io/en/latest/index.html",children:"FIO \u5de5\u5177\u5b98\u7f51"}),"\u3002"]})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"mode"}),"\uff1a\u6307\u5b9a I/O \u6a21\u5f0f\uff0c\u652f\u6301 ",(0,i.jsx)(e.code,{children:"r"}),"\u3001 ",(0,i.jsx)(e.code,{children:"w"}),"\u3001",(0,i.jsx)(e.code,{children:"read"})," \u6216 ",(0,i.jsx)(e.code,{children:"write"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"size"}),"\uff1a\u6307\u5b9a\u5355\u4e2a I/O \u8bf7\u6c42\u7684\u6570\u636e\u91cf\uff0c\u8bbe\u7f6e\u65f6\u5fc5\u987b\u6307\u5b9a\u4e3a\u5e26\u5355\u4f4d\u7684\u6570\u503c\uff0c\u4f8b\u5982\uff1a4K\uff0c\u5355\u4f4d\u652f\u6301 K\u3001KB\u3001M\u3001MB\u3001G\u3001GB\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"latency"}),"\uff1a\u6307\u5b9a\u78c1\u76d8\u54cd\u5e94\u65f6\u95f4\uff0c\u9ed8\u8ba4\u5355\u4f4d\u4e3a\u79d2\uff0c\u5373\u5982\u679c\u6307\u5b9a\u7684\u503c\u4e3a\u7eaf\u6570\u5b57\uff0c\u5219\u5176\u5355\u4f4d\u9ed8\u8ba4\u4e3a\u79d2\u3002\u5f3a\u70c8\u5efa\u8bae\u8bbe\u7f6e\u65f6\u6307\u5b9a\u5355\u4f4d\uff0c\u4e0d\u8981\u4f7f\u7528\u9ed8\u8ba4\u5355\u4f4d\uff0c\u5355\u4f4d\u652f\u6301 us\u3001ms\u3001s\u3001min\u3001h\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"iops"}),"\uff1a\u6307\u5b9a\u6bcf\u79d2\u949f\u5b8c\u6210 I/O \u8bf7\u6c42\u7684\u6570\u91cf\uff0c\u5355\u4f4d\u4e3a 1\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"zone_name"}),"\uff1a\u6307\u5b9a\u5f85\u5237\u65b0\u78c1\u76d8\u6821\u51c6\u4fe1\u606f\u7684 Zone\u3002\u5f53\u524d\u4ec5\u652f\u6301\u6307\u5b9a\u4e00\u4e2a Zone\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"svr_ip"}),"\uff1a\u6307\u5b9a\u5f85\u5237\u65b0\u78c1\u76d8\u6821\u51c6\u4fe1\u606f\u7684 OBServer \u8282\u70b9\u7684 IP\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"svr_port"}),"\uff1a\u6307\u5b9a\u5f85\u5237\u65b0\u78c1\u76d8\u6821\u51c6\u4fe1\u606f\u7684 OBServer \u8282\u70b9\u7684 RPC \u7aef\u53e3\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5bf9\u96c6\u7fa4\u5185\u6240\u6709 OBServer \u8282\u70b9\u7684\u6570\u636e\u76d8\u4ece\u5185\u90e8\u8868\u5237\u65b0\u4e00\u6b21\u78c1\u76d8\u6027\u80fd\u4fe1\u606f"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER SYSTEM REFRESH IO CALIBRATION;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6e05\u9664\u96c6\u7fa4\u5185\u6240\u6709 OBServer \u8282\u70b9\u6570\u636e\u76d8\u7684\u78c1\u76d8\u6027\u80fd\u4fe1\u606f"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'ALTER SYSTEM REFRESH IO CALIBRATION CALIBRATION_INFO = ("");\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5bf9 ",(0,i.jsx)(e.code,{children:"zone1"})," \u5185\u7684\u6240\u6709 OBServer \u8282\u70b9\u7684\u6570\u636e\u76d8\u5237\u65b0\u4e00\u6b21\u78c1\u76d8\u6821\u51c6\u4fe1\u606f"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'ALTER SYSTEM REFRESH IO CALIBRATION STORAGE = \'DATA\' CALIBRATION_INFO = ("read:4K:100us:200000","write:2M:5ms:1500") ZONE = zone1;\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u793a\u4f8b\u4e2d\uff0c\u5237\u65b0\u7684\u78c1\u76d8\u6821\u51c6\u4fe1\u606f\u4e3a\uff1a4KB \u6570\u636e\u968f\u673a\u8bfb\u7684 RT \u4e3a 100 \u5fae\u79d2\uff0cIOPS \u4e3a 200000\uff0c2MB \u6570\u636e\u968f\u673a\u5199\u7684 RT \u4e3a 5 \u6beb\u79d2\uff0cIOPS \u4e3a 1500\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5bf9\u6307\u5b9a OBServer \u8282\u70b9\u7684\u6570\u636e\u76d8\u5237\u65b0\u4e00\u6b21\u78c1\u76d8\u6821\u51c6\u4fe1\u606f"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER SYSTEM REFRESH IO CALIBRATION STORAGE = 'DATA' CALIBRATION_INFO = (\"read:4K:100us:200000\",\"write:2M:5ms:1500\") SERVER = 'xx.xx.xx.1:2882';\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u786e\u8ba4\u78c1\u76d8 I/O \u6821\u51c6\u662f\u5426\u751f\u6548\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u5f85\u78c1\u76d8\u6821\u51c6\u4fe1\u606f\u5237\u65b0\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"GV$OB_IO_BENCHMARK"})," \u6216 ",(0,i.jsx)(e.code,{children:"V$OB_IO_BENCHMARK"})," \u89c6\u56fe\u786e\u8ba4\u78c1\u76d8 I/O \u6821\u51c6\u662f\u5426\u751f\u6548\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM oceanbase.GV$OB_IO_BENCHMARK;\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u67e5\u8be2\u7ed3\u679c\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"+----------------+----------+--------------+-------+---------+--------+------+---------+\n| SVR_IP         | SVR_PORT | STORAGE_NAME | MODE  | SIZE    | IOPS   | MBPS | LATENCY |\n+----------------+----------+--------------+-------+---------+--------+------+---------+\n| xx.xx.xx.197   |     2882 | DATA         | READ  |    4096 | 200000 |  781 |     100 |\n+----------------+----------+--------------+-------+---------+--------+------+---------+\n1 rows in set\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u76f8\u5173\u5b57\u6bb5\u7684\u8bf4\u660e\u4fe1\u606f\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"STORAGE_NAME"}),"\uff1a\u8868\u793a\u5b58\u50a8\u540d\u79f0\u3002",(0,i.jsx)(e.code,{children:"DATA"})," \u8868\u793a\u6570\u636e\u76d8\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"MODE"}),"\uff1a\u8868\u793a I/O \u6a21\u5f0f\u4e3a\u8bfb\u6216\u8005\u5199\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"SIZE"}),"\uff1a\u8868\u793a\u5355\u4e2a I/O \u8bf7\u6c42\u7684\u6570\u636e\u91cf\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"IOPS"}),"\uff1a\u8868\u793a\u6bcf\u79d2\u949f\u5b8c\u6210 I/O \u8bf7\u6c42\u7684\u6570\u91cf\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"MBPS"}),"\uff1a\u8868\u793a\u78c1\u76d8\u5e26\u5bbd\uff0c\u5355\u4f4d\u4e3a MB/s\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"LATENCY"}),"\uff1a\u8868\u793a\u78c1\u76d8\u54cd\u5e94\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u5fae\u79d2\u3002"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>x});var i=s(96540);const c={},l=i.createContext(c);function r(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function x(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);