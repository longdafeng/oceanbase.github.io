"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[2781],{49498:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=s(74848),a=s(28453);const r={title:"\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u6700\u4f73\u5b9e\u8df5",weight:2},i=void 0,l={id:"user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/optimizer_statistics/best_practices",title:"\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u6700\u4f73\u5b9e\u8df5",description:"\u8bf4\u660e\uff1a\u76ee\u524d DBA \u8fdb\u9636\u6559\u7a0b\u7684\u5185\u5bb9\u6682\u65f6\u5bf9\u5e94\u7684\u662f OceanBase 4.x \u793e\u533a\u7248\u672c\uff0c\u672c\u5c0f\u8282\u7684\u67b6\u6784\u90e8\u5206\u4e0d\u6d89\u53ca\u5546\u4e1a\u7248\u4e2d Oracle \u6a21\u5f0f\u79df\u6237\u4e0b\u7684\u5185\u5bb9\u3002\u793e\u533a\u7248\u548c\u5546\u4e1a\u7248\u7684\u80fd\u529b\u533a\u522b\u8be6\u89c1\uff1a\u5b98\u7f51\u94fe\u63a5\u3002",source:"@site/docs/user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/optimizer_statistics/02_best_practices.md",sourceDirName:"user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/optimizer_statistics",slug:"/user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/optimizer_statistics/best_practices",permalink:"/docs/user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/optimizer_statistics/best_practices",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/optimizer_statistics/02_best_practices.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u6700\u4f73\u5b9e\u8df5",weight:2},sidebar:"operation_and_maintenanceSidebar",previous:{title:"\u7edf\u8ba1\u4fe1\u606f\u8fd0\u7ef4\u624b\u518c",permalink:"/docs/user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/optimizer_statistics/operations_and_maintenance"},next:{title:"\u624b\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u547d\u4ee4\u624b\u518c",permalink:"/docs/user_manual/operation_and_maintenance/zh-CN/operations_and_maintenance/optimizer_statistics/command"}},c={},d=[{value:"\u4e3a\u4f55\u8981\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f",id:"\u4e3a\u4f55\u8981\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f",level:2},{value:"\u7edf\u8ba1\u4fe1\u606f\u7684\u9ed8\u8ba4\u6536\u96c6\u7b56\u7565",id:"\u7edf\u8ba1\u4fe1\u606f\u7684\u9ed8\u8ba4\u6536\u96c6\u7b56\u7565",level:2},{value:"\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7b56\u7565\u914d\u7f6e",id:"\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7b56\u7565\u914d\u7f6e",level:2},{value:"\u4e1a\u52a1\u9ad8\u5cf0\u4e0e\u7edf\u8ba1\u4fe1\u606f\u7ef4\u62a4\u7a97\u53e3\u91cd\u53e0",id:"\u4e1a\u52a1\u9ad8\u5cf0\u4e0e\u7edf\u8ba1\u4fe1\u606f\u7ef4\u62a4\u7a97\u53e3\u91cd\u53e0",level:3},{value:"\u5b58\u5728\u8d85\u5927\u7684\u4e1a\u52a1\u8868\u5bfc\u81f4\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u4e0d\u5b8c",id:"\u5b58\u5728\u8d85\u5927\u7684\u4e1a\u52a1\u8868\u5bfc\u81f4\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u4e0d\u5b8c",level:3},{value:"\u8dd1\u6279\u573a\u666f\u5bfc\u5b8c\u6570\u636e\u76f4\u63a5\u67e5\u8be2\u7f3a\u5931\u7edf\u8ba1\u4fe1\u606f",id:"\u8dd1\u6279\u573a\u666f\u5bfc\u5b8c\u6570\u636e\u76f4\u63a5\u67e5\u8be2\u7f3a\u5931\u7edf\u8ba1\u4fe1\u606f",level:3},{value:"\u6309\u65e5\u671f\u9884\u5efa\u5206\u533a\u7684\u6570\u636e\u8868\u67e5\u8be2\u5f53\u5929\u5bfc\u5165\u7684\u6570\u636e",id:"\u6309\u65e5\u671f\u9884\u5efa\u5206\u533a\u7684\u6570\u636e\u8868\u67e5\u8be2\u5f53\u5929\u5bfc\u5165\u7684\u6570\u636e",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u8bf4\u660e\uff1a\u76ee\u524d DBA \u8fdb\u9636\u6559\u7a0b\u7684\u5185\u5bb9\u6682\u65f6\u5bf9\u5e94\u7684\u662f OceanBase 4.x \u793e\u533a\u7248\u672c\uff0c\u672c\u5c0f\u8282\u7684\u67b6\u6784\u90e8\u5206\u4e0d\u6d89\u53ca\u5546\u4e1a\u7248\u4e2d Oracle \u6a21\u5f0f\u79df\u6237\u4e0b\u7684\u5185\u5bb9\u3002\u793e\u533a\u7248\u548c\u5546\u4e1a\u7248\u7684\u80fd\u529b\u533a\u522b\u8be6\u89c1\uff1a",(0,t.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000001428510",children:"\u5b98\u7f51\u94fe\u63a5"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e3a\u4f55\u8981\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f",children:"\u4e3a\u4f55\u8981\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f"}),"\n",(0,t.jsx)(n.p,{children:"\u4f18\u5316\u5668\u751f\u6210\u548c\u9009\u62e9\u6700\u4f18\u7684\u6267\u884c\u8ba1\u5212\uff0c\u5f80\u5f80\u662f\u57fa\u4e8e\u4ee3\u4ef7\u6765\u8bc4\u4f30\u7684\uff0c\u56e0\u6b64\u4e00\u4e2a\u6267\u884c\u8ba1\u5212\u7684\u4ee3\u4ef7\u8bc4\u4f30\u7684\u662f\u5426\u51c6\u786e\uff0c\u5bf9\u4e8e\u4f18\u5316\u5668\u7684\u8ba1\u5212\u751f\u6210\u81f3\u5173\u91cd\u8981\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4ee3\u4ef7\u8ba1\u7b97\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f18\u5316\u5668\u4f1a\u6839\u636e\u4ee3\u4ef7\u6a21\u578b\u548c\u6bcf\u4e2a\u7b97\u5b50\u4f30\u7b97\u51fa\u7684\u884c\u6570\u8bc4\u4f30\u4ee5\u53ca\u5404\u6267\u884c\u8ba1\u5212\u7684\u4ee3\u4ef7\u3002\u5728\u8fd9\u4e4b\u4e2d\uff0c\u7edf\u8ba1\u4fe1\u606f\u626e\u6f14\u4e86\u91cd\u8981\u7684\u89d2\u8272\u3002\u7edf\u8ba1\u4fe1\u606f\u662f\u5426\u51c6\u786e\u76f4\u63a5\u5f71\u54cd\u4e86\u7b97\u5b50\u7684\u884c\u6570\u4f30\u7b97\uff0c\u8fdb\u4e00\u6b65\u4f1a\u5f71\u54cd\u5230\u8ba1\u5212\u7684\u4ee3\u4ef7\u8ba1\u7b97\u548c\u8ba1\u5212\u7684\u9009\u62e9\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u56e0\u6b64\u4fdd\u6301\u7edf\u8ba1\u4fe1\u606f\u7684\u51c6\u786e\u6027\u5bf9\u4e8e\u751f\u6210\u597d\u7684\u6267\u884c\u8ba1\u5212\u81f3\u5173\u91cd\u8981\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u7edf\u8ba1\u4fe1\u606f\u7684\u9ed8\u8ba4\u6536\u96c6\u7b56\u7565",children:"\u7edf\u8ba1\u4fe1\u606f\u7684\u9ed8\u8ba4\u6536\u96c6\u7b56\u7565"}),"\n",(0,t.jsx)(n.p,{children:"\u7edf\u8ba1\u4fe1\u606f\u4f1a\u5728\u6bcf\u4e2a\u5de5\u4f5c\u65e5\uff08\u5468\u4e00\u81f3\u5468\u4e94\uff0922:00 \u5f00\u59cb\u6536\u96c6\uff0c\u6700\u957f\u6536\u96c6 4 \u5c0f\u65f6\uff1b\u6216\u5728\u6bcf\u4e2a\u975e\u5de5\u4f5c\u65e5\uff08\u6bcf\u5468\u516d\u5468\u65e5\uff096:00 \u5f00\u59cb\u6536\u96c6\uff0c\u6700\u957f\u6536\u96c6 20 \u5c0f\u65f6\u3002\u8fd9\u4e9b\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7684\u65f6\u95f4\u6bb5\u6211\u4eec\u79f0\u4e4b\u4e3a\u7edf\u8ba1\u4fe1\u606f\u7ef4\u62a4\u7a97\u53e3\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u6bcf\u4e2a\u7edf\u8ba1\u4fe1\u606f\u7ef4\u62a4\u7a97\u53e3\u5185\uff0c\u4f18\u5316\u5668\u4f1a\u4e3a\u6bcf\u4e2a\u7edf\u8ba1\u4fe1\u606f\u8fc7\u671f\u7684\u8868/\u5206\u533a\u91cd\u65b0\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7edf\u8ba1\u4fe1\u606f\u8fc7\u671f\u7684\u5224\u5b9a\u662f\u4e00\u4e2a\u8868/\u5206\u533a\u4e0a\u6ca1\u6709\u6536\u96c6\u8fc7\u7edf\u8ba1\u4fe1\u606f\uff0c\u6216\u8868/\u5206\u533a\u4e0a\u589e\u5220\u6539\u7684\u6570\u636e\u91cf\u8d85\u8fc7\u4e86\u4e0a\u6b21\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u65f6\u884c\u6570\u7684 ",(0,t.jsx)(n.strong,{children:"10%"}),"\u3002\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u65f6\uff0c\u9ed8\u8ba4\u7684\u6536\u96c6\u7b56\u7565\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u914d\u7f6e\u540d\u79f0"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u542b\u4e49"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u9ed8\u8ba4\u7b56\u7565"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"degree"}),(0,t.jsx)(n.td,{children:"\u5e76\u884c\u5ea6"}),(0,t.jsx)(n.td,{children:"1 \u5e76\u884c\u5ea6\uff0c\u5355\u7ebf\u7a0b\u626b\u63cf\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"method_opt"}),(0,t.jsx)(n.td,{children:"\u5217\u7ea7\u7edf\u8ba1\u4fe1\u606f\u7684\u6536\u96c6\u7b56\u7565"}),(0,t.jsx)(n.td,{children:"\u6536\u96c6\u6240\u6709\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u5e76\u6536\u96c6\u5728where\u6761\u4ef6\u4e2d\u51fa\u73b0\u8fc7\u4e14\u5b58\u5728\u6570\u636e\u503e\u659c\u5217\u7684\u76f4\u65b9\u56fe"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"granularity"}),(0,t.jsx)(n.td,{children:"\u6536\u96c6\u9897\u7c92"}),(0,t.jsx)(n.td,{children:"\u6536\u96c6\u5206\u533a\u7ea7\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u5e76\u6839\u636e\u7ed3\u679c\u63a8\u5bfc\u5168\u5c40\u7ea7\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\u975e\u5206\u533a\u8868\u7684\u60c5\u51b5\u4e0b\u76f4\u63a5\u6536\u96c6\u5168\u5c40\u7ea7\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"estimate_percent"}),(0,t.jsx)(n.td,{children:"\u91c7\u6837\u6bd4\u4f8b"}),(0,t.jsx)(n.td,{children:"\u4e0d\u91c7\u6837\uff0c \u901a\u8fc7\u5168\u8868\u626b\u63cf\u624b\u673a\u7edf\u8ba1\u4fe1\u606f\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"block_sample"}),(0,t.jsx)(n.td,{children:"\u662f\u5426\u91c7\u6837\u5757\u91c7\u6837"}),(0,t.jsx)(n.td,{children:"\u4e0d\u4f7f\u7528\u5757\u91c7\u6837\uff0c\u4f7f\u7528\u884c\u91c7\u6837\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7b56\u7565\u914d\u7f6e",children:"\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7b56\u7565\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u91c7\u7528\u9ed8\u8ba4\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7b56\u7565\u5bf9\u4e0e\u5927\u591a\u6570\u7684\u8868\u90fd\u662f\u9002\u7528\u7684\uff0c\u4f46\u662f\u5728\u4e00\u4e9b\u7279\u5b9a\u7684\u573a\u666f\u4e0b\u4e0d\u4e00\u5b9a\u80fd\u6ee1\u8db3\u4e1a\u52a1\u7684\u573a\u666f\uff0c\u9700\u8981\u7528\u6237\u6839\u636e\u4e1a\u52a1\u7279\u70b9\u8fdb\u884c\u9002\u5f53\u7684\u914d\u7f6e\u3002\u5e38\u89c1\u7684\u573a\u666f\u53ca\u914d\u7f6e\u7b56\u7565\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.h3,{id:"\u4e1a\u52a1\u9ad8\u5cf0\u4e0e\u7edf\u8ba1\u4fe1\u606f\u7ef4\u62a4\u7a97\u53e3\u91cd\u53e0",children:"\u4e1a\u52a1\u9ad8\u5cf0\u4e0e\u7edf\u8ba1\u4fe1\u606f\u7ef4\u62a4\u7a97\u53e3\u91cd\u53e0"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)("font",{color:"red",children:"OceanBase \u7edf\u8ba1\u4fe1\u606f\u7ef4\u62a4\u7a97\u53e3\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u53c2\u8003\u4e86 Oracle \u7684\u8bbe\u7f6e\u3002\u4f46\u662f\u5bf9\u4e8e\u5f88\u591a\u56fd\u5185\u4e1a\u52a1\u6765\u8bf4\uff0c\u5de5\u4f5c\u65e5\u7684 22:00 \u4f9d\u7136\u662f\u4e1a\u52a1\u9ad8\u5cf0\u65f6\u671f\uff0c\u6b64\u65f6\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u53ef\u80fd\u4f1a\u51fa\u73b0\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7684 SQL \u4e0e\u4e1a\u52a1 SQL \u62a2\u5360\u8d44\u6e90\uff0c\u5f71\u54cd\u4e1a\u52a1 SQL \u7684\u8fd0\u884c\u3002\u9488\u5bf9\u8fd9\u4e2a\u573a\u666f\uff0c\u53ef\u4ee5\u8c03\u6574\u7edf\u8ba1\u4fe1\u606f\u7ef4\u62a4\u7a97\u53e3\u7684\u5f00\u59cb\u65f6\u95f4\uff0c\u4f7f\u5176\u4e0e\u4e1a\u52a1\u9ad8\u5cf0\u9519\u5f00\u3002"})})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u4f8b\u5982\u73b0\u5728\u662f 2024-03-07, \u5468\u56db\u65e9\u4e0a 11 \u70b9\u3002\n-- \u9700\u8981\u8c03\u6574\u4e3a\u4ece\u5468\u4e94\u8d77\uff0c\u4ee5\u540e\u90fd\u662f\u51cc\u6668 2 \u70b9\u5f00\u59cb\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\uff0c\u5927\u5bb6\u53ef\u4ee5\u8fd9\u6837\u8fdb\u884c\u8bbe\u7f6e:\n\ncall dbms_scheduler.set_attribute(\n    'FRIDAY_WINDOW', 'NEXT_DATE', '2024-03-08 02:00:00');\n\ncall dbms_scheduler.set_attribute(\n    'SATURDAY_WINDOW', 'NEXT_DATE', '2024-03-09 02:00:00');\n\ncall dbms_scheduler.set_attribute(\n    'SUNDAY_WINDOW', 'NEXT_DATE', '2024-03-10 02:00:00');\n\ncall dbms_scheduler.set_attribute(\n    'MONDAY_WINDOW', 'NEXT_DATE', '2024-03-11 02:00:00');\n\ncall dbms_scheduler.set_attribute(\n    'TUESDAY_WINDOW', 'NEXT_DATE', '2024-03-12 02:00:00');\n\ncall dbms_scheduler.set_attribute(\n    'WEDNESDAY_WINDOW', 'NEXT_DATE', '2024-03-13 02:00:00');\n\ncall dbms_scheduler.set_attribute(\n    'THURSDAY_WINDOW', 'NEXT_DATE', '2024-03-14 02:00:00');\n\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u4ee5\u4e0a\u547d\u4ee4\u4ec5\u9002\u7528\u4e8e OceanBase MySQL \u6a21\u5f0f\u7684\u79df\u6237\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5b58\u5728\u8d85\u5927\u7684\u4e1a\u52a1\u8868\u5bfc\u81f4\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u4e0d\u5b8c",children:"\u5b58\u5728\u8d85\u5927\u7684\u4e1a\u52a1\u8868\u5bfc\u81f4\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u4e0d\u5b8c"}),"\n",(0,t.jsx)(n.p,{children:"\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7684\u9ed8\u8ba4\u7b56\u7565\u4e0b\uff0c\u9700\u8981\u5355\u5e76\u53d1\u5168\u8868\u626b\u63cf\u5f85\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u7684\u8868 / \u5206\u533a\u3002\u5982\u679c\u5f85\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u7684\u8868 / \u5206\u533a\u7684\u6570\u636e\u91cf\u7279\u522b\u5927\uff0c\u6216\u8005\u5360\u7528\u7684\u78c1\u76d8\u7a7a\u95f4\u7279\u522b\u591a\uff0c\u4f1a\u5bfc\u81f4\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u8017\u65f6\u8fc7\u957f\u5f71\u54cd\u540e\u7eed\u5176\u5b83\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\uff0c\u751a\u81f3\u5f53\u524d\u8868\u53ef\u80fd\u4f1a\u6536\u96c6\u8d85\u65f6\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u4e1a\u52a1\u73af\u5883\u4e0b\u5b58\u5728\u6570\u636e\u91cf\u8fc7\u4ebf\uff0c\u6216\u8005\u78c1\u76d8\u7a7a\u95f4\u5360\u7528\u8d85\u8fc7 20G \u7684\u8868\u65f6\uff0c\u5efa\u8bae\u53c2\u8003\u4ee5\u4e0b\u65b9\u6848\u914d\u7f6e\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7b56\u7565\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u8df3\u8fc7\u5927\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5982 MySQL \u79df\u6237\u6a21\u5f0f\u4e0b\u9ed8\u8ba4\u4f1a\u6536\u96c6 longtext \u5217\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u5982\u679c longtext \u5217\u4e2d\u4fdd\u5b58\u7684\u90fd\u662f\u5927\u5bf9\u8c61\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6536\u96c6\u7279\u522b\u6162\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u4e0b\u793a\u4f8b\u4e2d\uff0c\u7b2c\u56db\u4e2a\u53c2\u6570\u914d\u7f6e\u6536\u96c6\u54ea\u4e9b\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u9700\u8981\u628a\u9664\u5927\u5bf9\u8c61\u5916\u7684\u6240\u6709\u5217\u90fd\u52a0\u4e0a\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"call dbms_stats.set_table_prefs(\n  'databse_name',\n  'table_name',\n  'method_opt',\n  'for columns col1,col2,col3,... size auto');\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u63d0\u9ad8\u5e76\u884c\u5ea6\u6216\u914d\u7f6e\u5757\u91c7\u6837\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u63d0\u9ad8\u5e76\u884c\u5ea6\u53ef\u4ee5\u8ba9\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u65f6\u4f7f\u7528\u66f4\u591a\u7684\u7ebf\u7a0b\u540c\u65f6\u6536\u96c6\uff0c\u901a\u8fc7\u6d88\u8017\u66f4\u591a\u7684\u8d44\u6e90\u8fbe\u5230\u5feb\u901f\u6536\u96c6\u7684\u6548\u679c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u5757\u91c7\u6837\uff0c\u53ef\u4ee5\u901a\u8fc7\u91c7\u6837\u7684\u65b9\u5f0f\u51cf\u5c11\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u65f6\u8981\u5904\u7406\u7684\u6570\u636e\u91cf\uff0c\u4e5f\u8fbe\u5230\u5230\u5feb\u901f\u6536\u96c6\u7684\u6548\u679c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e24\u8005\u90fd\u53ef\u4ee5\u8fbe\u5230\u63d0\u5347\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u6548\u7387\u7684\uff0c\u533a\u522b\u4e8e\u5e76\u884c\u7684\u65b9\u5f0f\u901a\u8fc7\u727a\u7272\u8d44\u6e90\u4fdd\u8bc1\u4e86\u7edf\u8ba1\u4fe1\u606f\u7684\u51c6\u786e\u6027\uff0c\u91c7\u7528\u7684\u65b9\u5f0f\u901a\u8fc7\u727a\u7272\u7edf\u8ba1\u4fe1\u606f\u7684\u51c6\u786e\u6027\u4fdd\u8bc1\u4e86\u7cfb\u7edf\u8d44\u6e90\u7684\u53ef\u7528\u6027\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u6237\u53ef\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u9009\u62e9\u5176\u4e2d\u4e00\u79cd\u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u914d\u7f6e\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u65f6\u7684\u5e76\u884c\u5ea6\ncall dbms_stats.set_table_prefs(\n  'databse_name',\n  'table_name',\n  'degree',\n  '4');\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u914d\u7f6e\u5f00\u542f\u5757\u91c7\u6837\ncall dbms_stats.set_table_prefs(\n  'databse_name',\n  'table_name',\n  'block_sample',\n  'True');\n\n-- \u914d\u7f6e\u91c7\u6837\u6bd4\u4f8b\uff0c\u53ef\u6839\u636e\u8868\u7684\u6570\u91cf\u7ea7\u8fdb\u884c\u914d\u7f6e\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u91c7\u96c6\u5343\u4e07\u7ea7\u7684\u6570\u636e\u5373\u53ef\u5145\u5206\u53cd\u5e94\u4e00\u4e2a\u8868\u7684\u6570\u636e\u7279\u5f81\ncall dbms_stats.set_table_prefs(\n  'databse_name',\n  'table_name',\n  'estimate_percent',\n  '0.1');\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"\u5bf9\u4e8e\u5206\u533a\u8868\uff0c\u53ef\u4ee5\u8003\u8651\u4e0d\u6536\u96c6\u5168\u5c40\u7edf\u8ba1\u4fe1\u606f\u3002\u5982\u4e0b\u793a\u4f8b\u4e2d\uff0c\u7b2c\u56db\u4e2a\u53c2\u6570\u914d\u7f6e\u6536\u96c6\u4ec0\u4e48\u7ea7\u522b\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u4e00\u7ea7\u5206\u533a\u8868\u53ef\u914d\u7f6e\u53ea\u6536\u96c6\u4e00\u7ea7\u5206\u533a\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u4e8c\u7ea7\u5206\u533a\u8868\u53ef\u914d\u7f6e\u53ea\u6536\u96c6\u4e8c\u7ea7\u5206\u533a\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u91c7\u7528\u8fd9\u79cd\u7b56\u7565\uff0c\u9700\u8981\u5220\u9664\u5168\u5c40\u7edf\u8ba1\u4fe1\u606f\uff08\u4e00\u7ea7\u5206\u533a\u8868\u548c\u4e8c\u7ea7\u5206\u533a\u8868\u65f6\uff09\u548c\u4e00\u7ea7\u5206\u533a\u7edf\u8ba1\u4fe1\u606f\uff08\u4ec5\u4e8c\u7ea7\u5206\u533a\u8868\u65f6\uff09\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u4e00\u7ea7\u5206\u533a\u8868\ncall dbms_stats.set_table_prefs(\n  'databse_name',\n  'table_name',\n  'granularity',\n  'PARTITION');\n\n-- \u4e8c\u7ea7\u5206\u533a\u8868\ncall dbms_stats.set_table_prefs(\n  'databse_name',\n  'table_name',\n  'granularity',\n  'SUBPARTITION');\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8dd1\u6279\u573a\u666f\u5bfc\u5b8c\u6570\u636e\u76f4\u63a5\u67e5\u8be2\u7f3a\u5931\u7edf\u8ba1\u4fe1\u606f",children:"\u8dd1\u6279\u573a\u666f\u5bfc\u5b8c\u6570\u636e\u76f4\u63a5\u67e5\u8be2\u7f3a\u5931\u7edf\u8ba1\u4fe1\u606f"}),"\n",(0,t.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u81ea\u52a8\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u7684\u4efb\u52a1\u662f\u5b9a\u65f6\u89e6\u53d1\u7684\uff0c\u5728\u6b64\u4e4b\u5916\u7edf\u8ba1\u4fe1\u606f\u662f\u4e0d\u4f1a\u66f4\u65b0\u7684\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728 4.2.4 \u53ca 4.2.5 \u4ee5\u4e0a\u7248\u672c\u7248\u672c\u7684 OBServer \u4e2d\uff0c\u63d0\u4f9b\u4e86\u5f02\u6b65\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7684\u80fd\u529b\uff0c\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4e1a\u52a1\u5b58\u5728\u7a7a\u8868\u6216\u5c0f\u6570\u636e\u91cf\u7684\u8868\u5bfc\u5165\u5927\u91cf\u6570\u636e\u540e\u7acb\u5373\u67e5\u8be2\u7684\u573a\u666f\uff08\u901a\u5e38\u5b58\u5728\u4e8e\u8dd1\u6279\u573a\u666f\u4e2d\uff09\uff0c\u4f18\u5316\u5668\u4f1a\u56e0\u4e3a\u7f3a\u5931\u7edf\u8ba1\u4fe1\u606f\u6216\u7edf\u8ba1\u4fe1\u606f\u4e25\u91cd\u8fc7\u671f\u751f\u6210\u4e0d\u4f18\u7684\u8ba1\u5212\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)("font",{color:"red",children:"\u9488\u5bf9\u8fd9\u79cd\u573a\u666f\uff0c\u5efa\u8bae\u4e1a\u52a1\u5728\u6279\u91cf\u5bfc\u5165\u6570\u636e\u540e\u624b\u52a8\u8fdb\u884c\u4e00\u6b21\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u540e\u518d\u8fdb\u884c\u4e1a\u52a1\u67e5\u8be2\u3002\u5982\u679c\u5bfc\u5165\u7684\u6570\u636e\u975e\u5e38\u5927\uff0c\u53ef\u4ee5\u8c03\u6574\u4e00\u4e0b\u624b\u52a8\u6536\u96c6\u7684\u7b56\u7565\uff0c\u8be6\u7ec6\u53ef\u4ee5\u53c2\u8003\u672c\u6587\u4e2d\u7684 \u201c\u5b58\u5728\u8d85\u5927\u7684\u4e1a\u52a1\u8868\u5bfc\u81f4\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u4e0d\u5b8c\u201d \u90e8\u5206\u3002"})})}),"\n",(0,t.jsx)(n.h3,{id:"\u6309\u65e5\u671f\u9884\u5efa\u5206\u533a\u7684\u6570\u636e\u8868\u67e5\u8be2\u5f53\u5929\u5bfc\u5165\u7684\u6570\u636e",children:"\u6309\u65e5\u671f\u9884\u5efa\u5206\u533a\u7684\u6570\u636e\u8868\u67e5\u8be2\u5f53\u5929\u5bfc\u5165\u7684\u6570\u636e"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u6309\u65e5\u671f\u9884\u5efa\u5206\u533a\u7684\u6570\u636e\u8868\uff0c\u90e8\u5206\u9884\u5efa\u7684\u5206\u533a\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u65f6\u662f\u4e0d\u5b58\u5728\u4efb\u4f55\u6570\u636e\u7684\uff0c\u4f18\u5316\u5668\u770b\u5230\u7684\u8fd9\u4e9b\u5206\u533a\u7684\u7edf\u8ba1\u4fe1\u606f\u4e3a 0 \u884c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u65e6\u67d0\u4e2a\u5206\u533a\u5f53\u5929\u5bfc\u5165\u4e86\u65b0\u7684\u6570\u636e\uff0c\u5e76\u4e14\u4e1a\u52a1\u903b\u8f91\u4f1a\u67e5\u8be2\u8fd9\u4e00\u5929\u65b0\u5bfc\u5165\u7684\u6570\u636e\uff0c\u4f18\u5316\u5668\u5c31\u6781\u5bb9\u6613\u56e0\u4e3a\u7edf\u8ba1\u4fe1\u606f\u4e25\u91cd\u8fc7\u671f\u800c\u751f\u6210\u4e0d\u4f18\u7684\u8ba1\u5212\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u9488\u5bf9\u8fd9\u79cd\u573a\u666f\uff0c\u5efa\u8bae\u5728\u5f53\u5929\u6570\u636e\u5bfc\u5165\u540e\u624b\u52a8\u6536\u96c6\u4e00\u6b21\u5bf9\u5e94\u5206\u533a\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728 4.2.4 \u53ca 4.2.5 \u4ee5\u4e0a\u7248\u672c\u7248\u672c\u7684 OBServer \u4e2d\uff0c\u63d0\u4f9b\u4e86\u5f02\u6b65\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7684\u80fd\u529b\uff0c\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(96540);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);