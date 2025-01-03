"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[986],{82440:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>a});var i=s(74848),r=s(28453);const c={title:"\u79df\u6237\u95f4\u8d44\u6e90\u9694\u79bb",weight:3},l=void 0,t={id:"user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants/resource_isolation_between_tenants",title:"\u79df\u6237\u95f4\u8d44\u6e90\u9694\u79bb",description:"OceanBase \u6570\u636e\u5e93\u662f\u591a\u79df\u6237\u7684\u6570\u636e\u5e93\u7cfb\u7edf\uff0c\u4e3a\u4e86\u786e\u4fdd\u79df\u6237\u95f4\u4e0d\u51fa\u73b0\u8d44\u6e90\u4e89\u62a2\u4fdd\u969c\u4e1a\u52a1\u7a33\u5b9a\u8fd0\u884c\uff0cOceanBase \u6570\u636e\u5e93\u9488\u5bf9\u79df\u6237\u95f4\u7684\u8d44\u6e90\u8fdb\u884c\u4e86\u9694\u79bb\u3002",source:"@site/docs/user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants/03_resource_isolation_between_tenants.md",sourceDirName:"user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants",slug:"/user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants/resource_isolation_between_tenants",permalink:"/docs/user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants/resource_isolation_between_tenants",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants/03_resource_isolation_between_tenants.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u79df\u6237\u95f4\u8d44\u6e90\u9694\u79bb",weight:3},sidebar:"operation_and_maintenanceSidebar",previous:{title:"\u79df\u6237\u80cc\u666f\u77e5\u8bc6",permalink:"/docs/user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants/background_knowledge"},next:{title:"\u79df\u6237\u5185\u8d44\u6e90\u9694\u79bb\u6982\u8ff0",permalink:"/docs/user_manual/operation_and_maintenance/zh-CN/scenario_best_practices/chapter_01_multi_tenants/resource_isolation_within_a_tenant/overview"}},d={},a=[{value:"OceanBase \u6570\u636e\u5e93\u79df\u6237\u9694\u79bb\u7684\u4f18\u52bf",id:"oceanbase-\u6570\u636e\u5e93\u79df\u6237\u9694\u79bb\u7684\u4f18\u52bf",level:2},{value:"\u9694\u79bb\u6548\u679c",id:"\u9694\u79bb\u6548\u679c",level:2},{value:"\u8d44\u6e90\u5206\u7c7b",id:"\u8d44\u6e90\u5206\u7c7b",level:2},{value:"\u8282\u70b9\u7684\u53ef\u7528 CPU",id:"\u8282\u70b9\u7684\u53ef\u7528-cpu",level:3},{value:"\u8282\u70b9\u7684\u53ef\u7528 Memory",id:"\u8282\u70b9\u7684\u53ef\u7528-memory",level:3},{value:"\u67e5\u770b\u6bcf\u4e2a\u8282\u70b9\u7684\u53ef\u7528\u8d44\u6e90",id:"\u67e5\u770b\u6bcf\u4e2a\u8282\u70b9\u7684\u53ef\u7528\u8d44\u6e90",level:3},{value:"\u8d44\u6e90\u9694\u79bb",id:"\u8d44\u6e90\u9694\u79bb",level:2},{value:"\u5185\u5b58\u9694\u79bb",id:"\u5185\u5b58\u9694\u79bb",level:3},{value:"CPU \u9694\u79bb",id:"cpu-\u9694\u79bb",level:3}];function o(n){const e={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"OceanBase \u6570\u636e\u5e93\u662f\u591a\u79df\u6237\u7684\u6570\u636e\u5e93\u7cfb\u7edf\uff0c\u4e3a\u4e86\u786e\u4fdd\u79df\u6237\u95f4\u4e0d\u51fa\u73b0\u8d44\u6e90\u4e89\u62a2\u4fdd\u969c\u4e1a\u52a1\u7a33\u5b9a\u8fd0\u884c\uff0cOceanBase \u6570\u636e\u5e93\u9488\u5bf9\u79df\u6237\u95f4\u7684\u8d44\u6e90\u8fdb\u884c\u4e86\u9694\u79bb\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6240\u8c13\u8d44\u6e90\u9694\u79bb\uff0c\u5c31\u662f\u8282\u70b9\u63a7\u5236\u672c\u5730\u591a\u4e2a Unit \u95f4\u7684\u8d44\u6e90\u5206\u914d\u7684\u884c\u4e3a, \u5b83\u662f\u8282\u70b9\u672c\u5730\u7684\u884c\u4e3a\u3002\u7c7b\u4f3c\u7684\u6280\u672f\u662f Docker \u548c\u865a\u62df\u673a\uff0c\u4f46 OceanBase \u6570\u636e\u5e93\u5e76\u6ca1\u6709\u4f9d\u8d56 Docker \u6216\u865a\u62df\u673a\u6280\u672f\uff0c\u800c\u662f\u5728\u6570\u636e\u5e93\u5185\u90e8\u5b9e\u73b0\u8d44\u6e90\u9694\u79bb\u3002"}),"\n",(0,i.jsx)(e.p,{children:"OceanBase \u6570\u636e\u5e93\u4e2d\u628a Unit \u5f53\u4f5c\u7ed9\u79df\u6237\u5206\u914d\u8d44\u6e90\u7684\u57fa\u672c\u5355\u4f4d\uff0c\u4e00\u4e2a Unit \u53ef\u4ee5\u7c7b\u6bd4\u4e8e\u4e00\u4e2a Docker \u5bb9\u5668\u3002\u4e00\u4e2a\u8282\u70b9\u4e0a\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a Unit\uff0c\u5728\u8282\u70b9\u4e0a\u6bcf\u521b\u5efa\u4e00\u4e2a Unit \u90fd\u4f1a\u5360\u7528\u4e00\u90e8\u5206\u8be5\u8282\u70b9\u7684 CPU\u3001\u5185\u5b58\u7b49\u7269\u7406\u8d44\u6e90\uff0c\u8282\u70b9\u7684\u8d44\u6e90\u5206\u914d\u60c5\u51b5\u4f1a\u8bb0\u5f55\u5728\u5185\u90e8\u8868\u4e2d\u4ee5\u4fbf DBA \u67e5\u770b\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e00\u4e2a\u79df\u6237\u53ef\u4ee5\u5728\u591a\u4e2a\u8282\u70b9\u4e0a\u653e\u7f6e\u591a\u4e2a Unit\uff0c\u4f46\u4e00\u4e2a\u79df\u6237\u5728\u67d0\u4e2a\u8282\u70b9\u4e0a\u53ea\u80fd\u6709\u4e00\u4e2a Unit\u3002\u4e00\u4e2a\u79df\u6237\u7684\u591a\u4e2a Unit \u76f8\u4e92\u72ec\u7acb\uff0cOceanBase \u6570\u636e\u5e93\u76ee\u524d\u6ca1\u6709\u6c47\u603b\u591a\u4e2a Unit \u7684\u8d44\u6e90\u5360\u7528\u8fdb\u884c\u5168\u5c40\u7684\u8d44\u6e90\u63a7\u5236, \u5177\u4f53\u6765\u8bb2\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u4e00\u4e2a\u79df\u6237\u5728\u67d0\u4e2a\u8282\u70b9\u4e0a\u7684\u8d44\u6e90\u6ca1\u5f97\u5230\u6ee1\u8db3\uff0c\u5c31\u8ba9\u5b83\u5728\u53e6\u4e00\u4e2a\u8282\u70b9\u4e0a\u53bb\u62a2\u5176\u5b83\u79df\u6237\u7684\u8d44\u6e90\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"oceanbase-\u6570\u636e\u5e93\u79df\u6237\u9694\u79bb\u7684\u4f18\u52bf",children:"OceanBase \u6570\u636e\u5e93\u79df\u6237\u9694\u79bb\u7684\u4f18\u52bf"}),"\n",(0,i.jsx)(e.p,{children:"\u76f8\u6bd4 Docker \u548c\u865a\u62df\u673a\uff0cOceanBase \u6570\u636e\u5e93\u7684\u79df\u6237\u9694\u79bb\u66f4\u52a0\u8f7b\u91cf\uff0c\u5e76\u4e14\u4fbf\u4e8e\u5b9e\u73b0\u4f18\u5148\u7ea7\u7b49\u9ad8\u7ea7\u7279\u6027\u3002\n\u4ece OceanBase \u6570\u636e\u5e93\u7684\u9700\u6c42\u6765\u770b\uff0cDocker \u6216\u865a\u62df\u673a\u7684\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u4e2a\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Docker \u6216\u865a\u62df\u673a\u8fd0\u884c\u73af\u5883\u7684\u5f00\u9500\u592a\u91cd\uff0cOceanBase \u6570\u636e\u5e93\u9700\u8981\u652f\u6301\u8f7b\u91cf\u7ea7\u79df\u6237\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Docker \u6216\u865a\u62df\u673a\u89c4\u683c\u53d8\u5316\u4ee5\u53ca\u8fc1\u79fb\u5f00\u9500\u6bd4\u8f83\u5927\uff0cOceanBase \u6570\u636e\u5e93\u5e0c\u671b\u79df\u6237\u7684\u89c4\u683c\u53d8\u5316\u548c\u8fc1\u79fb\u5c3d\u91cf\u5feb\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Docker \u6216\u865a\u62df\u673a\u4e0d\u4fbf\u4e8e\u79df\u6237\u95f4\u7684\u8d44\u6e90\u5171\u4eab, \u4f8b\u5982\uff0c\u5bf9\u8c61\u6c60\u7684\u5171\u4eab\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Docker \u6216\u865a\u62df\u673a\u7684\u8d44\u6e90\u9694\u79bb\u5f88\u96be\u5b9a\u5236\uff0c\u4f8b\u5982\uff0c\u79df\u6237\u5185\u7684\u4f18\u5148\u7ea7\u652f\u6301\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u9664\u6b64\u4e4b\u5916\uff0cDocker \u6216\u865a\u62df\u673a\u7684\u5b9e\u73b0\u4e0d\u4fbf\u4e8e\u66b4\u9732\u7edf\u4e00\u89c6\u56fe\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u9694\u79bb\u6548\u679c",children:"\u9694\u79bb\u6548\u679c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5185\u5b58\u5b8c\u5168\u9694\u79bb\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"SQL \u6267\u884c\u8fc7\u7a0b\u5404\u79cd\u7b97\u5b50\u4f7f\u7528\u7684\u5185\u5b58\u662f\u5206\u79bb\u7684\uff0c\u4e00\u4e2a\u79df\u6237\u7684\u5185\u5b58\u8017\u5c3d\u4e0d\u4f1a\u5f71\u54cd\u5230\u53e6\u4e00\u4e2a\u79df\u6237\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Block Cache \u548c MemTable \u662f\u5206\u79bb\u7684\uff0c\u4e00\u4e2a\u79df\u6237\u7684\u5185\u5b58\u8017\u5c3d\u4e0d\u4f1a\u5f71\u54cd\u5230\u53e6\u4e00\u4e2a\u79df\u6237\u7684\u5199\u5165\u548c\u8bfb\u53d6\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"CPU \u5b8c\u5168\u9694\u79bb\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6700\u57fa\u7840\u7684 CPU \u9694\u79bb\u662f\u901a\u8fc7\u7528\u6237\u6001\u8c03\u5ea6\uff0c\u63a7\u5236\u6d3b\u8dc3\u7ebf\u7a0b\u6570\u6765\u5b9e\u73b0\u7684\u3002\u6bcf\u4e2a\u79df\u6237\u6709\u72ec\u7acb\u7684\u7ebf\u7a0b\u6c60\uff0c\u7ebf\u7a0b\u6c60\u7684\u89c4\u683c\u662f\u7531\u79df\u6237\u89c4\u683c\u548c\u4e00\u4e9b\u914d\u7f6e\u53c2\u6570\u6765\u51b3\u5b9a\u7684\u3002\u4e00\u4e2a\u79df\u6237\u80fd\u4f7f\u7528\u7684 CPU \u8d44\u6e90\u662f\u7531 Unit \u89c4\u683c\u51b3\u5b9a\u7684\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4e3a\u4e86\u8fbe\u5230\u66f4\u597d\u7684\u9694\u79bb\u6548\u679c\uff0c\u4ece V4.0.0 \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u914d\u7f6e cgroup \u6765\u8fdb\u884c CPU \u9694\u79bb\u3002cgroup \uff08Control Groups\uff09\u662f Linux \u5185\u6838\u63d0\u4f9b\u7684\u4e00\u79cd\u673a\u5236\uff0c\u8fd9\u79cd\u673a\u5236\u53ef\u4ee5\u6839\u636e\u7279\u5b9a\u7684\u884c\u4e3a\uff0c\u5c06\u4e00\u7cfb\u5217\u7cfb\u7edf\u4efb\u52a1\u53ca\u5176\u5b50\u4efb\u52a1\u6574\u5408\uff08\u6216\u5206\u9694\uff09\u5230\u6309\u8d44\u6e90\u5212\u5206\u7b49\u7ea7\u7684\u4e0d\u540c\u7ec4\u5185\uff0c\u4ece\u800c\u4e3a\u7cfb\u7edf\u8d44\u6e90\u7ba1\u7406\u63d0\u4f9b\u4e00\u4e2a\u7edf\u4e00\u7684\u6846\u67b6\u3002cgroup \u80fd\u5bf9\u7ebf\u7a0b\u7684 CPU \u4f7f\u7528\u7387\u8fdb\u884c\u7cbe\u51c6\u7684\u9650\u5236\uff0c\u8fbe\u5230\u79df\u6237\u4e4b\u95f4 CPU \u5f3a\u9694\u79bb\u7684\u6548\u679c\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image",src:s(36550).A+"",width:"1332",height:"914"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4e0d\u540c\u79df\u6237\u7684 SQL \u6a21\u5757\u662f\u4e0d\u4f1a\u4e92\u76f8\u5f71\u54cd\u7684\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"SQL \u7684 Plan Cache \u662f\u6309\u79df\u6237\u5206\u79bb\u7684\uff0c\u4e00\u4e2a\u79df\u6237\u7684 Plan Cache \u6dd8\u6c70\u4e0d\u4f1a\u5f71\u54cd\u53e6\u4e00\u4e2a\u79df\u6237\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"SQL \u7684 Audit \u8868\u662f\u5206\u79bb\u7684\uff0c\u4e00\u4e2a\u79df\u6237\u7684 QPS \u592a\u9ad8\uff0c\u4e0d\u4f1a\u51b2\u6d17\u6389\u53e6\u4e00\u4e2a\u79df\u6237\u7684 Audit \u4fe1\u606f\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4e0d\u540c\u79df\u6237\u7684\u4e8b\u52a1\u6a21\u5757\u662f\u4e0d\u4f1a\u4e92\u76f8\u5f71\u54cd\u7684\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4e00\u4e2a\u79df\u6237\u7684\u884c\u9501\u6302\u8d77\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5230\u5176\u4ed6\u79df\u6237\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4e00\u4e2a\u79df\u6237\u7684\u4e8b\u52a1\u6302\u8d77\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5230\u5176\u4ed6\u79df\u6237\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4e00\u4e2a\u79df\u6237\u7684\u56de\u653e\u51fa\u95ee\u9898\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5230\u5176\u5b83\u79df\u6237\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4e0d\u540c\u79df\u6237\u7684 Clog \u6a21\u5757\u662f\u4e0d\u4f1a\u4e92\u76f8\u5f71\u54cd\u7684\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u65e5\u5fd7\u6d41\u7684\u76ee\u5f55\u4ee5\u79df\u6237\u4e3a\u5355\u4f4d\uff0c\u6700\u7ec8\u5728\u78c1\u76d8\u4e0a\u7684\u5b9e\u73b0\u8868\u73b0\u4e3a\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"  tenant_id\n      \u251c\u2500\u2500 unit_id_0\n      \u2502   \u251c\u2500\u2500 log\n      \u2502   \u2514\u2500\u2500 meta\n      \u251c\u2500\u2500 unit_id_1\n      \u2502   \u251c\u2500\u2500 log\n      \u2502   \u2514\u2500\u2500 meta\n      \u2514\u2500\u2500 unit_id_2\n          \u251c\u2500\u2500 log\n          \u2514\u2500\u2500 meta\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8d44\u6e90\u5206\u7c7b",children:"\u8d44\u6e90\u5206\u7c7b"}),"\n",(0,i.jsx)(e.p,{children:"\u4ece\u8bbe\u8ba1\u4e0a\uff0cOceanBase \u6570\u636e\u5e93\u4ece V4.0.0 \u7248\u672c\u652f\u6301\u79df\u6237\u95f4 CPU\u3001Memory\u3001IOPS \u9694\u79bb\uff0c\u4e00\u4e2a Unit \u53ef\u4ee5\u6307\u5b9a CPU\u3001Memory\u3001IOPS\u3001log_disk_size \u8fd9 4 \u79cd\u8d44\u6e90\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"obclient> \n    CREATE RESOURCE UNIT name\n        MAX_CPU = 1, [MIN_CPU = 1,]\n        MEMORY_SIZE = '5G',\n        [MAX_IOPS = 1024, MIN_IOPS = 1024, IOPS_WEIGHT=0,]\n        [LOG_DISK_SIZE = '2G'];\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u8282\u70b9\u7684\u53ef\u7528-cpu",children:"\u8282\u70b9\u7684\u53ef\u7528 CPU"}),"\n",(0,i.jsxs)(e.p,{children:["\u8282\u70b9\u5728\u542f\u52a8\u65f6\u4f1a\u63a2\u6d4b\u7269\u7406\u673a\u6216\u5bb9\u5668\u7684\u5728\u7ebf CPU \u4e2a\u6570\uff0c\u5982\u679c\u8282\u70b9\u63a2\u6d4b\u5f97\u4e0d\u51c6\u786e\uff08\u4f8b\u5982\u5728\u5bb9\u5668\u5316\u73af\u5883\u91cc)\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"cpu_count"})," \u914d\u7f6e\u9879\u6765\u6307\u5b9a\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u7531\u4e8e\u8282\u70b9\u4f1a\u4e3a\u540e\u53f0\u7ebf\u7a0b\u9884\u7559\u4e24\u4e2a CPU\uff0c\u6545\u5b9e\u9645\u53ef\u4ee5\u5206\u7ed9\u79df\u6237\u7684 CPU \u603b\u6570\u4f1a\u5c11\u4e24\u4e2a\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u8282\u70b9\u7684\u53ef\u7528-memory",children:"\u8282\u70b9\u7684\u53ef\u7528 Memory"}),"\n",(0,i.jsxs)(e.p,{children:["\u8282\u70b9\u5728\u542f\u52a8\u65f6\u4f1a\u63a2\u6d4b\u7269\u7406\u673a\u6216\u5bb9\u5668\u7684\u5185\u5b58\uff0c\u7531\u4e8e\u8282\u70b9\u9700\u8981\u4e3a\u5176\u5b83\u8fdb\u7a0b\u9884\u7559\u4e00\u90e8\u5206\u5185\u5b58\uff0c\u6545 observer \u8fdb\u7a0b\u7684\u53ef\u7528\u5185\u5b58\u7b49\u4e8e ",(0,i.jsx)(e.code,{children:"\u7269\u7406\u5185\u5b58 * memory_limit_percentage"}),"\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u9879 ",(0,i.jsx)(e.code,{children:"memory_limit"})," \u76f4\u63a5\u914d\u7f6e observer \u8fdb\u7a0b\u53ef\u7528\u7684\u603b\u5185\u5b58\u5927\u5c0f\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["observer \u8fdb\u7a0b\u53ef\u7528\u7684\u5185\u5b58\u9700\u8981\u8fdb\u4e00\u6b65\u6263\u9664\u6389\u5185\u90e8\u5171\u7528\u6a21\u5757\u7684\u90a3\u4e00\u90e8\u5206\uff0c\u8fd9\u90e8\u5206\u5185\u5b58\u5927\u5c0f\u7531\u914d\u7f6e\u9879 ",(0,i.jsx)(e.code,{children:"system_memory"})," \u6307\u5b9a\uff0c\u5269\u4e0b\u7684\u5185\u5b58\u624d\u662f\u79df\u6237\u53ef\u7528\u7684\u603b\u5185\u5b58\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u67e5\u770b\u6bcf\u4e2a\u8282\u70b9\u7684\u53ef\u7528\u8d44\u6e90",children:"\u67e5\u770b\u6bcf\u4e2a\u8282\u70b9\u7684\u53ef\u7528\u8d44\u6e90"}),"\n",(0,i.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"oceanbase.GV$OB_SERVERS"})," \u89c6\u56fe\u67e5\u770b\u6bcf\u4e2a\u8282\u70b9\u7684\u53ef\u7528\u8d44\u6e90\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"obclient> SELECT * FROM oceanbase.GV$OB_SERVERS\\G\n*************************** 1. row ***************************\n                 SVR_IP: xx.xx.xx.xx\n               SVR_PORT: 57234\n                   ZONE: zone1\n               SQL_PORT: 57235\n           CPU_CAPACITY: 14\n       CPU_CAPACITY_MAX: 14\n           CPU_ASSIGNED: 6.5\n       CPU_ASSIGNED_MAX: 6.5\n           MEM_CAPACITY: 10737418240\n           MEM_ASSIGNED: 6442450944\n      LOG_DISK_CAPACITY: 316955164672\n      LOG_DISK_ASSIGNED: 15569256438\n        LOG_DISK_IN_USE: 939524096\n     DATA_DISK_CAPACITY: 10737418240\n       DATA_DISK_IN_USE: 624951296\nDATA_DISK_HEALTH_STATUS: NORMAL\nDATA_DISK_ABNORMAL_TIME: NULL\n1 row in set\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u8d44\u6e90\u9694\u79bb",children:"\u8d44\u6e90\u9694\u79bb"}),"\n",(0,i.jsx)(e.h3,{id:"\u5185\u5b58\u9694\u79bb",children:"\u5185\u5b58\u9694\u79bb"}),"\n",(0,i.jsxs)(e.p,{children:["\u8282\u70b9\u7684\u5185\u5b58\u8d44\u6e90\u5b9e\u9645\u4e0a\u4e0d\u652f\u6301\u8d85\u5356\uff0c\u5f15\u5165\u5185\u5b58\u8d85\u5356\u53cd\u800c\u4f1a\u5bfc\u81f4\u79df\u6237\u5de5\u4f5c\u4e0d\u7a33\u5b9a\uff0c\u4ece V4.0.0 \u7248\u672c\u5f00\u59cb\uff0cOceanBase \u6570\u636e\u5e93\u4e0d\u518d\u652f\u6301\u5185\u5b58\u8d85\u5356\u3002\u5e9f\u5f03 ",(0,i.jsx)(e.code,{children:"MIN_MEMORY"})," \u548c ",(0,i.jsx)(e.code,{children:"MAX_MEMORY"})," \u914d\u7f6e\uff0c\u91c7\u7528 ",(0,i.jsx)(e.code,{children:"MEMORY_SIZE"})," \u53c2\u6570\u4ee3\u66ff\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"cpu-\u9694\u79bb",children:"CPU \u9694\u79bb"}),"\n",(0,i.jsx)(e.p,{children:"\u5728 OceanBase \u6570\u636e\u5e93 V3.1.x \u7248\u672c\u4e4b\u524d\uff0c\u4e3b\u8981\u901a\u8fc7\u63a7\u5236\u7ebf\u7a0b\u6570\u6765\u63a7\u5236 CPU \u7684\u5360\u7528\uff1b\u5728 OceanBase \u6570\u636e\u5e93 V3.1.x \u53ca\u4e4b\u540e\u7684\u7248\u672c\uff0c\u5141\u8bb8\u914d\u7f6e cgroup \u6765\u63a7\u5236 CPU \u7684\u5360\u7528\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7ebf\u7a0b\u5206\u7c7b"})}),"\n",(0,i.jsx)(e.p,{children:"\u8282\u70b9\u4f1a\u542f\u52a8\u5f88\u591a\u4e0d\u540c\u529f\u80fd\u7684\u7ebf\u7a0b\uff0c\u672c\u8282\u6309\u7167\u6700\u7c97\u7565\u7684\u6807\u51c6\u53ef\u4ee5\u5206\u4e3a\u4ee5\u4e0b\u4e24\u7c7b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4e00\u7c7b\u662f\u5904\u7406 SQL \u548c\u4e8b\u52a1\u63d0\u4ea4\u7684\u7ebf\u7a0b\uff0c\u7edf\u79f0\u4e3a\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5176\u4f59\u7684\u662f\u5904\u7406\u7f51\u7edc IO\u3001\u78c1\u76d8 IO\u3001Compaction \u4ee5\u53ca\u5b9a\u65f6\u4efb\u52a1\u7684\u7ebf\u7a0b\uff0c\u7edf\u79f0\u4e3a\u540e\u53f0\u7ebf\u7a0b\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u5f53\u524d\u7248\u672c\uff0c\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b\u548c\u5927\u90e8\u5206\u540e\u53f0\u7ebf\u7a0b\u662f\u5206\u79df\u6237\u7684\uff0c\u7f51\u7edc\u7ebf\u7a0b\u662f\u5171\u4eab\u7ebf\u7a0b\u7684\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u57fa\u4e8e\u7ebf\u7a0b\u6570\u7684\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b\u7684 CPU \u9694\u79bb"})}),"\n",(0,i.jsx)(e.p,{children:"Unit \u7684 CPU \u9694\u79bb\u662f\u901a\u8fc7\u4e00\u4e2a Unit \u7684\u6d3b\u8dc3\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b\u6570\u5b9e\u73b0\u7684\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u7531\u4e8e SQL \u6267\u884c\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u6709 IO \u7b49\u5f85\u3001\u9501\u7b49\u5f85\u7b49\uff0c\u6240\u4ee5\u4e00\u4e2a\u7ebf\u7a0b\u65e0\u6cd5\u7528\u6ee1\u4e00\u4e2a\u7269\u7406 CPU\uff0c\u6545\u5728\u7f3a\u7701\u914d\u7f6e\u4e0b\uff0cOBServer \u8282\u70b9\u4f1a\u7ed9\u6bcf\u4e2a CPU \u542f\u52a8 4 \u4e2a\u7ebf\u7a0b\uff0c4 \u8fd9\u4e2a\u500d\u6570\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,i.jsx)(e.code,{children:"cpu_quota_concurrency"})," \u6765\u63a7\u5236\u3002\u8fd9\u5c31\u610f\u5473\u7740\u5982\u679c\u4e00\u4e2a Unit \u7684 ",(0,i.jsx)(e.code,{children:"MAX_CPU"})," \u662f 10\uff0c\u90a3\u4e48\u5b83\u80fd\u540c\u65f6\u8fd0\u884c\u7684\u6d3b\u8dc3\u7ebf\u7a0b\u662f 40\uff0c\u6700\u5927\u7269\u7406 CPU \u7684\u5360\u7528\u662f 400%\u3002"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u57fa\u4e8e cgroup \u7684\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b\u7684 CPU \u9694\u79bb"})}),"\n",(0,i.jsx)(e.p,{children:"\u5f00\u542f cgroup \u540e\u6700\u5927\u7684\u53d8\u5316\u662f\u4e0d\u540c\u79df\u6237\u7684\u5de5\u4f5c\u7ebf\u7a0b\u653e\u5230\u4e0d\u540c\u7684 cgroup \u76ee\u5f55\u5185\uff0c\u79df\u6237\u95f4\u7684 CPU \u9694\u79bb\u6548\u679c\u4f1a\u66f4\u597d\u3002\u6700\u540e\u7684\u9694\u79bb\u6548\u679c\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u4e00\u4e2a OBServer \u4e0a\u53ea\u6709\u4e00\u4e2a\u79df\u6237\u8d1f\u8f7d\u5f88\u9ad8\uff0c\u5176\u4f59\u79df\u6237\u6bd4\u8f83\u7a7a\u95f2\uff0c\u90a3\u4e48\u8fd9\u4e2a\u8d1f\u8f7d\u9ad8\u7684\u79df\u6237\u7684 CPU \u4e5f\u4f1a\u53d7\u5230 ",(0,i.jsx)(e.code,{children:"MAX_CPU"})," \u7684\u9650\u5236\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5ef6\u7eed\u4e0a\u9762\u7684\u573a\u666f\uff0c\u5982\u679c\u6709\u591a\u4e2a\u7a7a\u95f2\u7684\u79df\u6237\u7684\u8d1f\u8f7d\u4e0a\u5347\u4e86\uff0c\u5bfc\u81f4\u7269\u7406 CPU \u4e0d\u591f\u4e86\uff0ccgroup \u4f1a\u6309\u7167\u6743\u91cd\u5206\u914d\u65f6\u95f4\u7247\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u540e\u53f0\u7ebf\u7a0b\u7684 CPU \u9694\u79bb"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"V4.0.0 \u7248\u672c\u7684\u540e\u53f0\u62c6\u5206\u4e86\u79df\u6237\uff0c\u6bcf\u4e2a\u79df\u6237\u4e0b\u6709\u5bf9\u5e94\u7684\u7ebf\u7a0b\u6570\u63a7\u5236\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4e3a\u4e86\u66f4\u597d\u7684\u9694\u79bb\u6548\u679c\uff0c\u540e\u53f0\u7ebf\u7a0b\u4e5f\u4f1a\u653e\u5230\u4e0d\u540c\u7684 cgroup \u76ee\u5f55\u5185\uff0c\u5b9e\u73b0\u79df\u6237\u95f4\u9694\u79bb\uff0c\u79df\u6237\u5185\u548c\u5de5\u4f5c\u7ebf\u7a0b\u9694\u79bb\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u5927\u67e5\u8be2\u5904\u7406"})}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u4eec\u8ba4\u4e3a\u76f8\u6bd4\u4e8e\u5927\u67e5\u8be2\uff0c\u8ba9\u77ed\u67e5\u8be2\u5c3d\u5feb\u8fd4\u56de\u5bf9\u7528\u6237\u66f4\u6709\u610f\u4e49\uff0c\u5373\u5927\u67e5\u8be2\u7684\u67e5\u8be2\u4f18\u5148\u7ea7\u66f4\u4f4e\uff0c\u5f53\u5927\u67e5\u8be2\u548c\u77ed\u67e5\u8be2\u540c\u65f6\u4e89\u62a2 CPU \u65f6\uff0c\u7cfb\u7edf\u4f1a\u9650\u5236\u5927\u67e5\u8be2\u7684 CPU \u4f7f\u7528\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5f53\u4e00\u4e2a\u7ebf\u7a0b\u6267\u884c\u7684 SQL \u67e5\u8be2\u8017\u65f6\u592a\u957f\uff0c\u8fd9\u6761\u67e5\u8be2\u5c31\u4f1a\u88ab\u5224\u5b9a\u4e3a\u5927\u67e5\u8be2, \u4e00\u65e6\u5224\u5b9a\u4e3a\u5927\u67e5\u8be2\uff0c\u6267\u884c\u5927\u67e5\u8be2\u7684\u7ebf\u7a0b\u4f1a\u7b49\u5728\u4e00\u4e2a Pthread Condition \u4e0a\uff0c\u8fd9\u6837\u5c31\u4e3a\u5176\u5b83\u7684\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b\u8ba9\u51fa\u4e86 CPU\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5177\u4f53\u5b9e\u73b0\u4e0a\uff0cOBServer \u8282\u70b9\u5728\u4ee3\u7801\u4e2d\u63d2\u5165\u4e86\u5f88\u591a\u68c0\u67e5\u70b9\uff0c\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u4f1a\u901a\u8fc7\u68c0\u67e5\u70b9\u5b9a\u671f\u68c0\u67e5\u81ea\u5df1\u7684\u72b6\u6001\uff0c\u5982\u679c\u5224\u65ad\u5e94\u8be5\u6302\u8d77\uff0c\u90a3\u4e48\u7ebf\u7a0b\u5c31\u4f1a\u7b49\u5f85\u5728\u4e00\u4e2a Pthread Condition \u4e0a\uff0c\u7b49\u5230\u5408\u9002\u7684\u65f6\u673a\u518d\u88ab\u5524\u9192\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u540c\u65f6\u6709\u5927\u67e5\u8be2\u548c\u5c0f\u67e5\u8be2\uff0c\u5927\u67e5\u8be2\u6700\u591a\u5360\u7528 30% \u7684\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b\uff0c30% \u8fd9\u4e2a\u767e\u5206\u6bd4\u503c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u9879 ",(0,i.jsx)(e.code,{children:"large_query_worker_percentage"})," \u6765\u8bbe\u7f6e\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u6709\u4e24\u70b9\u9700\u8981\u8bf4\u660e\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5f53\u6ca1\u6709\u5c0f\u67e5\u8be2\u7684\u65f6\u5019\uff0c\u5927\u67e5\u8be2\u53ef\u4ee5\u7528\u5230 100% \u7684\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b\u3002\u53ea\u6709\u5f53\u540c\u65f6\u6709\u5927\u67e5\u8be2\u548c\u5c0f\u67e5\u8be2\u65f6\uff0c30% \u7684\u6bd4\u4f8b\u624d\u751f\u6548\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u4e00\u4e2a\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b\u56e0\u4e3a\u6267\u884c\u5927\u67e5\u8be2\u88ab\u6302\u8d77\u65f6\uff0c\u4f5c\u4e3a\u8865\u507f\uff0c\u7cfb\u7edf\u53ef\u80fd\u4f1a\u65b0\u521b\u5efa\u4e00\u4e2a\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u4f46\u662f\u603b\u7684\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b\u6570\u4e0d\u80fd\u8d85\u8fc7 ",(0,i.jsx)(e.code,{children:"MAX_CPU"})," \u7684 10 \u500d\uff0c10 \u8fd9\u4e2a\u500d\u6570\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u9879 ",(0,i.jsx)(e.code,{children:"workers_per_cpu_quota"})," \u6765\u8bbe\u7f6e\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u63d0\u524d\u8bc6\u522b\u5927\u67e5\u8be2"})}),"\n",(0,i.jsx)(e.p,{children:"\u7531\u4e8e\u8282\u70b9\u6302\u8d77\u4e00\u4e2a\u5927\u67e5\u8be2\u7ebf\u7a0b\uff0c\u5c31\u4f1a\u542f\u52a8\u4e00\u4e2a\u65b0\u7684\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b, \u4f46\u662f\u5982\u679c\u6709\u5927\u91cf\u5927\u67e5\u8be2\u6d8c\u5165\uff0cOBServer \u8282\u70b9\u65b0\u521b\u5efa\u7684\u7ebf\u7a0b\u8fd8\u662f\u88ab\u7528\u6765\u5904\u7406\u5927\u67e5\u8be2\uff0c\u5f88\u5feb\u8fbe\u5230\u79df\u6237\u5de5\u4f5c\u7ebf\u7a0b\u6570\u4e0a\u9650\uff0c\u5728\u8fd9\u6279\u5927\u67e5\u8be2\u6d88\u8017\u5b8c\u4e4b\u524d\u5c31\u6ca1\u6709\u673a\u4f1a\u518d\u5904\u7406\u77ed\u67e5\u8be2\u4e86\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e3a\u4e86\u4f18\u5316\u8fd9\u4e2a\u573a\u666f\uff0cOBServer \u8282\u70b9\u4f1a\u5728 SQL \u5f00\u59cb\u6267\u884c\u4e4b\u524d\u9884\u5224\u5b83\u662f\u4e0d\u662f\u5927\u67e5\u8be2\uff0c\u9884\u5224\u7684\u672c\u8d28\u5c31\u662f\u4f30\u8ba1 SQL \u7684\u6267\u884c\u65f6\u95f4\u3002\u9884\u5224\u4e3b\u8981\u4f9d\u636e\u4ee5\u4e0b\u5047\u8bbe\u573a\u666f\uff1a\u5982\u679c\u4e24\u6761 SQL \u7684\u6267\u884c Plan \u662f\u4e00\u6837\u7684\uff0c\u53ef\u4ee5\u731c\u6d4b\u5b83\u4eec\u7684\u6267\u884c\u65f6\u95f4\u4e5f\u662f\u76f8\u4f3c\u7684\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u7528 Plan \u6700\u8fd1\u7684\u6267\u884c\u65f6\u95f4\u6765\u5224\u65ad SQL \u4f1a\u4e0d\u4f1a\u662f\u5927\u67e5\u8be2\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u67d0\u6761 SQL \u88ab\u9884\u5224\u4e3a\u5927\u67e5\u8be2\uff0c\u90a3\u4e48\u8be5\u67e5\u8be2\u5c31\u4f1a\u88ab\u653e\u5165\u4e00\u4e2a\u7279\u6b8a\u7684\u5927\u67e5\u8be2\u961f\u5217\uff0c\u5176\u7ebf\u7a0b\u4f1a\u88ab\u91ca\u653e\uff0c\u7cfb\u7edf\u5c31\u4f1a\u63a5\u7740\u6267\u884c\u540e\u9762\u7684\u8bf7\u6c42\u4e86\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},36550:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/001-6b8267ef15589fda10bb8874d21191e2.png"},28453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>t});var i=s(96540);const r={},c=i.createContext(r);function l(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);