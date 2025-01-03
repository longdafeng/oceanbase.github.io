"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[1989],{41248:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=s(74848),r=s(28453);const a={title:"Run the Sysbench benchmark",weight:4},l="3.3 Run the Sysbench benchmark",i={id:"user_manual/quick_starts/en-US/chapter_03_test_oceanbase_database/sysbench_test",title:"Run the Sysbench benchmark",description:"Sysbench is a LuaJIT-based multi-thread benchmark tool that allows you to write scripts to test the CPU, memory, thread, I/O, and database performance. It is often used to evaluate and test the database workload under various system parameter configurations. You can run the Sysbench benchmark to test a variety of database businesses by customizing Lua scripts without modifying the source code.",source:"@site/docs/user_manual/quick_starts/en-US/chapter_03_test_oceanbase_database/03_sysbench_test.md",sourceDirName:"user_manual/quick_starts/en-US/chapter_03_test_oceanbase_database",slug:"/user_manual/quick_starts/en-US/chapter_03_test_oceanbase_database/sysbench_test",permalink:"/docs/user_manual/quick_starts/en-US/chapter_03_test_oceanbase_database/sysbench_test",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/quick_starts/en-US/chapter_03_test_oceanbase_database/03_sysbench_test.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Run the Sysbench benchmark",weight:4},sidebar:"quick_startsSidebar",previous:{title:"Factors affecting the performance of OceanBase Database",permalink:"/docs/user_manual/quick_starts/en-US/chapter_03_test_oceanbase_database/influence_factor"},next:{title:"Run the TPC-C benchmark",permalink:"/docs/user_manual/quick_starts/en-US/chapter_03_test_oceanbase_database/tpcc_test"}},c={},d=[{value:"Use obdiag to inspect the cluster before running the benchmark",id:"use-obdiag-to-inspect-the-cluster-before-running-the-benchmark",level:2},{value:"Prepare the environment",id:"prepare-the-environment",level:2},{value:"Test plan",id:"test-plan",level:2},{value:"Test environment (Alibaba Cloud ECS)",id:"test-environment-alibaba-cloud-ecs",level:3},{value:"Software versions",id:"software-versions",level:3},{value:"Tenant specifications",id:"tenant-specifications",level:3},{value:"Use OBD to run the benchmark",id:"use-obd-to-run-the-benchmark",level:2},{value:"Manually run the Sysbench benchmark",id:"manually-run-the-sysbench-benchmark",level:2},{value:"Step 1: Install Sysbench",id:"step-1-install-sysbench",level:3},{value:"Step 2: Tune parameters",id:"step-2-tune-parameters",level:3},{value:"Step 3: Run the Sysbench benchmark",id:"step-3-run-the-sysbench-benchmark",level:3},{value:"Test results",id:"test-results",level:2},{value:"High performance deployment and troubleshooting",id:"high-performance-deployment-and-troubleshooting",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"33-run-the-sysbench-benchmark",children:"3.3 Run the Sysbench benchmark"})}),"\n",(0,t.jsx)(n.p,{children:"Sysbench is a LuaJIT-based multi-thread benchmark tool that allows you to write scripts to test the CPU, memory, thread, I/O, and database performance. It is often used to evaluate and test the database workload under various system parameter configurations. You can run the Sysbench benchmark to test a variety of database businesses by customizing Lua scripts without modifying the source code."}),"\n",(0,t.jsx)(n.p,{children:"This topic describes two methods to run the Sysbench benchmark on OceanBase Database in a CentOS Linux 7.9 environment based on the x86 architecture."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use OceanBase Deployer (OBD) to run the benchmark."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the official Sysbench tool to manually run the Sysbench benchmark step by step."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"use-obdiag-to-inspect-the-cluster-before-running-the-benchmark",children:"Use obdiag to inspect the cluster before running the benchmark"}),"\n",(0,t.jsxs)(n.p,{children:["OceanBase Database is a native distributed database system. Root cause analysis for faults is complex because a variety of factors need to be considered, such as the server environment, parameters, and runtime load. Experts must collect and analyze extensive information during troubleshooting. Therefore, ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-obdiag-en-10000000001574808",children:"OceanBase Diagnostic Tool obdiag"})," is introduced to help efficiently collect information scattered on various nodes. Before you run the Sysbench benchmark, you can use obdiag to perform a health check on OceanBase Database."]}),"\n",(0,t.jsx)(n.h2,{id:"prepare-the-environment",children:"Prepare the environment"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Java Development Kit (JDK): Use V1.8u131 or later."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Sysbench: Use Sysbench V1.0 or later."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["CMake: Run the ",(0,t.jsx)(n.code,{children:"sudo yum install make"})," command to install CMake."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Automake: Run the ",(0,t.jsx)(n.code,{children:"sudo yum install automake"})," command to install Automake."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Autoconf: Run the ",(0,t.jsx)(n.code,{children:"sudo yum install autoconf"})," command to install Autoconf."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Libtool: Run the ",(0,t.jsx)(n.code,{children:"sudo yum install libtool"})," command to install Libtool."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["GNU Compiler Collection (GCC): Run the ",(0,t.jsx)(n.code,{children:"sudo yum install gcc"})," command to install GCC."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["MariaDB-devel: Run the ",(0,t.jsx)(n.code,{children:"sudo yum install mariadb-devel mariadb"})," command to install MariaDB-devel."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["OceanBase Client (OBClient): For information about OBClient, see the ",(0,t.jsx)(n.a,{href:"https://github.com/oceanbase/obclient",children:"GitHub repository"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notice"})}),"\n",(0,t.jsxs)(n.p,{children:["In OBClient V2.2.0 or later, the OceanBase 2.0 protocol and end-to-end tracing are enabled by default, which will affect the performance in the Sysbench benchmark. We recommend that you set the ",(0,t.jsx)(n.code,{children:"export ENABLE_PROTOCOL_OB20"})," environment variable to ",(0,t.jsx)(n.code,{children:"0"})," to disable the protocol."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"test-plan",children:"Test plan"}),"\n",(0,t.jsx)(n.p,{children:"The Sysbench benchmark requires five servers, one for deploying Sysbench and OBD, one for deploying OceanBase Database Proxy (ODP) separately, and three for deploying an OceanBase cluster that has three zones, with each containing one OBServer node."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notice"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"We recommend that you deploy ODP on a separate server to avoid resource contention with OceanBase Database."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"We recommend that you set input/output operations per second (IOPS) to a value greater than 10000, and configure three disks for system logs, transaction logs, and data files, respectively."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you use OBD to deploy the cluster, we recommend that you do not use the ",(0,t.jsx)(n.code,{children:"obd cluster autodeploy"})," command. This is because for consideration of system stability, the command will not maximize the resource utilization. We recommend that you customize the OBD configuration file to maximize the resource utilization."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"test-environment-alibaba-cloud-ecs",children:"Test environment (Alibaba Cloud ECS)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Service type"}),(0,t.jsx)(n.th,{children:"ECS type"}),(0,t.jsx)(n.th,{children:"Number of instances"}),(0,t.jsx)(n.th,{children:"Number of CPU cores"}),(0,t.jsx)(n.th,{children:"Memory"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OceanBase Database"}),(0,t.jsx)(n.td,{children:"ecs.g7.8xlarge"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"32"}),(0,t.jsx)(n.td,{children:"128 GB. The system disk of each server is sized 300 GB. Two 400 GB cloud disks are mounted as the clog disk and data disk, respectively. The performance level is PL1."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sysbench"}),(0,t.jsx)(n.td,{children:"ecs.c7.4xlarge"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"16"}),(0,t.jsx)(n.td,{children:"32 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ODP"}),(0,t.jsx)(n.td,{children:"ecs.c7.16xlarge"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"64"}),(0,t.jsx)(n.td,{children:"128 GB"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"software-versions",children:"Software versions"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Service type"}),(0,t.jsx)(n.th,{children:"Software version"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OceanBase Database"}),(0,t.jsx)(n.td,{children:"OceanBase_CE 4.2.1.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ODP"}),(0,t.jsx)(n.td,{children:"OBProxy_CE 4.2.1.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sysbench"}),(0,t.jsx)(n.td,{children:"1.0.20"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"tenant-specifications",children:"Tenant specifications"}),"\n",(0,t.jsxs)(n.p,{children:["After deployment, you need to create a tenant and a user for running the Sysbench benchmark. The sys tenant is a built-in tenant for cluster management and cannot be used for testing. Set the ",(0,t.jsx)(n.code,{children:"primary_zone"})," parameter to ",(0,t.jsx)(n.code,{children:"RANDOM"}),", which means that the leader of a new partition is randomly distributed to any OBServer node."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE RESOURCE UNIT sysbench_unit max_cpu 26, memory_size '100g';\nCREATE RESOURCE POOL sysbench_pool unit = 'sysbench_unit', unit_num = 1, zone_list=('zone1','zone2','zone3');\nCREATE TENANT sysbench_tenant resource_pool_list=('sysbench_pool'),  zone_list('zone1', 'zone2', 'zone3'), primary_zone=RANDOM, locality='F@zone1,F@zone2,F@zone3' set variables ob_compatibility_mode='mysql', ob_tcp_invited_nodes='%';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"use-obd-to-run-the-benchmark",children:"Use OBD to run the benchmark"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.p,{children:["If you use OBD to run the test, the test cluster must be a cluster managed by OBD. By default, a cluster deployed by using OBD is managed by OBD. To use a cluster deployed by using another method as the test cluster, you need to take over the cluster to OBD. For more information, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/community-obd-en-10000000001181553",children:"User Guide of OBD"})," in OceanBase Deployer Documentation."]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install ob-sysbench."}),"\n",(0,t.jsx)(n.p,{children:"The ob-sysbench tool encapsulates the native Sysbench tool to improve the ease of use. Run the following command to install ob-sysbench:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo yum install -y yum-utils\nsudo yum-config-manager --add-repo https://mirrors.aliyun.com/oceanbase/OceanBase.repo\nsudo yum install ob-sysbench\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Write the test script."}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the script is named ",(0,t.jsx)(n.code,{children:"ob_sysbench.sh"}),". You can specify a custom name. In the script, ",(0,t.jsx)(n.code,{children:"deploy_name"})," specifies the cluster name and ",(0,t.jsx)(n.code,{children:"tenant_name"})," specifies the name of the test tenant, which is ",(0,t.jsx)(n.code,{children:"sysbench_tenant"})," in the 'Tenant specifications' section. You need to modify the cluster name and tenant name based on the actual situation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'#!/bin/bash\nexport ENABLE_PROTOCOL_OB20=0\n\necho "run oltp_point_select test"\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_point_select.lua --table-size=1000000 --threads=32 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_point_select.lua --table-size=1000000 --threads=64 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_point_select.lua --table-size=1000000 --threads=128 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_point_select.lua --table-size=1000000 --threads=256 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_point_select.lua --table-size=1000000 --threads=512 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_point_select.lua --table-size=1000000 --threads=1024 --rand-type=uniform\n\necho "run oltp_read_only test"\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_read_only.lua --table-size=1000000 --threads=32 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_read_only.lua --table-size=1000000 --threads=64 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_read_only.lua --table-size=1000000 --threads=128 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_read_only.lua --table-size=1000000 --threads=256 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_read_only.lua --table-size=1000000 --threads=512 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_read_only.lua --table-size=1000000 --threads=1024 --rand-type=uniform\n\necho "run oltp_write_only test"\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_write_only.lua --table-size=1000000 --threads=32 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_write_only.lua --table-size=1000000 --threads=64 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_write_only.lua --table-size=1000000 --threads=128 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_write_only.lua --table-size=1000000 --threads=256 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_write_only.lua --table-size=1000000 --threads=512 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_write_only.lua --table-size=1000000 --threads=1024 --rand-type=uniform\n\necho "run oltp_read_write test"\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_read_write.lua --table-size=1000000 --threads=32 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_read_write.lua --table-size=1000000 --threads=64 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_read_write.lua --table-size=1000000 --threads=128 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_read_write.lua --table-size=1000000 --threads=256 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_read_write.lua --table-size=1000000 --threads=512 --rand-type=uniform\nobd test sysbench <deploy_name> --tenant=<tenant_name> --script-name=oltp_read_write.lua --table-size=1000000 --threads=1024 --rand-type=uniform\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the benchmark."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"./ob_sysbench.sh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After you run the script, the system lists the steps and outputs. This process takes a longer time when a larger amount of data is involved. The ",(0,t.jsx)(n.code,{children:"obd test sysbench"})," command automatically completes all operations, including generating test data, tuning performance parameters, importing data, and running the benchmark. For more information about the command, see ",(0,t.jsx)(n.strong,{children:"obd test sysbench"})," in ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/community-obd-en-10000000001181574",children:"OBD Command > Testing commands"})," in OceanBase Deployer Documentation."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"manually-run-the-sysbench-benchmark",children:"Manually run the Sysbench benchmark"}),"\n",(0,t.jsx)(n.h3,{id:"step-1-install-sysbench",children:"Step 1: Install Sysbench"}),"\n",(0,t.jsx)(n.p,{children:"Perform the following steps to install Sysbench:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Download Sysbench."}),"\n",(0,t.jsxs)(n.p,{children:["Download Sysbench from the ",(0,t.jsx)(n.a,{href:"https://github.com/akopytov/sysbench/releases/tag/1.0.20",children:"GitHub repository"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Decompress the Sysbench package."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[admin@test ~]$ unzip sysbench-1.0.20.zip\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Compile Sysbench."}),"\n",(0,t.jsx)(n.p,{children:"Go to the directory where Sysbench is decompressed and run the following command to compile Sysbench:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[admin@test ~]$ cd sysbench-1.0.20\n[admin@test sysbench-1.0.20]$ ./autogen.sh\n[admin@test sysbench-1.0.20]$ ./configure --prefix=/usr/sysbench/ --with-mysql-includes=/usr/include/mysql/ --with-mysql-libs=/usr/lib64/mysql/ --with-mysql\n[admin@test sysbench-1.0.20]$ make\n[admin@test sysbench-1.0.20]$ sudo make install\n"})}),"\n",(0,t.jsx)(n.p,{children:"The following table describes the parameters."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--prefix"}),(0,t.jsx)(n.td,{children:"The installation directory of Sysbench."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--with-mysql-includes"}),(0,t.jsxs)(n.td,{children:["The ",(0,t.jsx)(n.code,{children:"includes"})," directory of MySQL."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--with-mysql-libs"}),(0,t.jsxs)(n.td,{children:["The ",(0,t.jsx)(n.code,{children:"lib"})," directory of MySQL."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--with-mysql"}),(0,t.jsx)(n.td,{children:"Specifies whether MySQL is supported. By default, MySQL is supported."})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Verify whether Sysbench is successfully installed."}),"\n",(0,t.jsx)(n.p,{children:"Run the following command to verify whether Sysbench is successfully installed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[admin@test sysbench-1.0.20]$ /usr/sysbench/bin/sysbench --help\n"})}),"\n",(0,t.jsx)(n.p,{children:"If the following information is returned, Sysbench is successfully installed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"Usage:\n   sysbench [options]... [testname] [command]\nCommands implemented by most tests: prepare run cleanup help\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-2-tune-parameters",children:"Step 2: Tune parameters"}),"\n",(0,t.jsx)(n.p,{children:"Before you run the Sysbench benchmark, you need to tune related parameters."}),"\n",(0,t.jsxs)(n.p,{children:["To tune parameters of ODP, run the ",(0,t.jsx)(n.code,{children:"obclient -h<host_ip> -P<host_port> -uroot@sys -A -p"})," command to connect to the sys tenant."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsx)(n.p,{children:"To modify ODP parameters, you must log on to the sys tenant of the OceanBase cluster by using the IP address and port of ODP."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"# Increase the maximum runtime memory of ODP\nALTER proxyconfig SET proxy_mem_limited='4G';\n# Disable the compression protocol of ODP\nALTER proxyconfig set enable_compression_protocol=false;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To tune OceanBase Database parameters, run the ",(0,t.jsx)(n.code,{children:"obclient -h<host_ip> -P<host_port> -uroot@sys -A -p"})," command to connect to the sys tenant."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"# Disable SQL audit\nALTER system SET enable_sql_audit=false;\n# Disable information collection for performance events\nALTER system SET enable_perf_event=false;\n# Set the syslog level to ERROR to reduce generated logs\nALTER system SET syslog_level='ERROR';\n# Disable trace log recording\nalter system set enable_record_trace_log=false;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-3-run-the-sysbench-benchmark",children:"Step 3: Run the Sysbench benchmark"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.p,{children:["This section uses the ",(0,t.jsx)(n.code,{children:"oltp_read_write.lua"})," test case as an example and 32 processes are started. In the ",(0,t.jsx)(n.code,{children:"sysbench-1.0.20/src/lua"})," directory, test cases for different scenarios are stored, such as ",(0,t.jsx)(n.code,{children:"oltp_point_select.lua"}),", ",(0,t.jsx)(n.code,{children:"oltp_read_only.lua"}),", and ",(0,t.jsx)(n.code,{children:"oltp_write_only.lua"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clear data."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[admin@test lua]$ /usr/sysbench/bin/sysbench oltp_read_write.lua --mysql-host=x.x.x.x --mysql-port=xxxx --mysql-db=test --mysql-user=$user@$tenant --mysql-password=****** --table_size=1000000 --tables=30 --threads=32 --report-interval=10 --rand-type=uniform --time=60 cleanup\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Initialize the test data."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[admin@test lua]$ /usr/sysbench/bin/sysbench oltp_read_write.lua --mysql-host=x.x.x.x --mysql-port=xxxx --mysql-db=test --mysql-user=$user@$tenant --mysql-password=****** --table_size=1000000 --tables=30 --threads=32 --report-interval=10 --rand-type=uniform --time=60 prepare\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the benchmark."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[admin@test lua]$ /usr/sysbench/bin/sysbench oltp_read_write.lua --mysql-host=x.x.x.x --mysql-port=xxxx --mysql-db=test --mysql-user=$user@$tenant --mysql-password=****** --table_size=1000000 --tables=30 --threads=32 --report-interval=10 --time=60 --rand-type=uniform --db-ps-mode=disable run\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"test-results",children:"Test results"}),"\n",(0,t.jsx)(n.p,{children:"Point Select performance"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Threads"}),(0,t.jsx)(n.th,{children:"V4.2.1 QPS"}),(0,t.jsx)(n.th,{children:"V4.2.1 95% Latency (ms)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"32"}),(0,t.jsx)(n.td,{children:"138746.60"}),(0,t.jsx)(n.td,{children:"0.26"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"64"}),(0,t.jsx)(n.td,{children:"252231.37"}),(0,t.jsx)(n.td,{children:"0.29"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"128"}),(0,t.jsx)(n.td,{children:"447755.19"}),(0,t.jsx)(n.td,{children:"0.34"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"256"}),(0,t.jsx)(n.td,{children:"730315.66"}),(0,t.jsx)(n.td,{children:"0.48"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"512"}),(0,t.jsx)(n.td,{children:"1009966.93"}),(0,t.jsx)(n.td,{children:"0.90"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1024"}),(0,t.jsx)(n.td,{children:"1012734.80"}),(0,t.jsx)(n.td,{children:"2.66"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Read Only performance"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Threads"}),(0,t.jsx)(n.th,{children:"V4.2.1 QPS"}),(0,t.jsx)(n.th,{children:"V4.2.1 95% Latency (ms)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"32"}),(0,t.jsx)(n.td,{children:"121733.00"}),(0,t.jsx)(n.td,{children:"4.65"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"64"}),(0,t.jsx)(n.td,{children:"221563.16"}),(0,t.jsx)(n.td,{children:"5.09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"128"}),(0,t.jsx)(n.td,{children:"392138.56"}),(0,t.jsx)(n.td,{children:"5.67"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"256"}),(0,t.jsx)(n.td,{children:"577951.13"}),(0,t.jsx)(n.td,{children:"8.58"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"512"}),(0,t.jsx)(n.td,{children:"763726.51"}),(0,t.jsx)(n.td,{children:"17.01"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1024"}),(0,t.jsx)(n.td,{children:"740835.95"}),(0,t.jsx)(n.td,{children:"38.94"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Write Only performance"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Threads"}),(0,t.jsx)(n.th,{children:"V4.2.1 QPS"}),(0,t.jsx)(n.th,{children:"V4.2.1 95% Latency (ms)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"32"}),(0,t.jsx)(n.td,{children:"43984.28"}),(0,t.jsx)(n.td,{children:"7.17"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"64"}),(0,t.jsx)(n.td,{children:"82554.92"}),(0,t.jsx)(n.td,{children:"6.55"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"128"}),(0,t.jsx)(n.td,{children:"114874.89"}),(0,t.jsx)(n.td,{children:"10.09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"256"}),(0,t.jsx)(n.td,{children:"181982.10"}),(0,t.jsx)(n.td,{children:"12.52"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"512"}),(0,t.jsx)(n.td,{children:"253635.91"}),(0,t.jsx)(n.td,{children:"19.29"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1024"}),(0,t.jsx)(n.td,{children:"292482.33"}),(0,t.jsx)(n.td,{children:"36.89"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Read/Write performance"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Threads"}),(0,t.jsx)(n.th,{children:"V4.2.1 QPS"}),(0,t.jsx)(n.th,{children:"V4.2.1 95% Latency (ms)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"32"}),(0,t.jsx)(n.td,{children:"72554.47"}),(0,t.jsx)(n.td,{children:"11.87"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"64"}),(0,t.jsx)(n.td,{children:"139369.33"}),(0,t.jsx)(n.td,{children:"11.65"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"128"}),(0,t.jsx)(n.td,{children:"247061.25"}),(0,t.jsx)(n.td,{children:"12.30"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"256"}),(0,t.jsx)(n.td,{children:"313660.08"}),(0,t.jsx)(n.td,{children:"23.95"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"512"}),(0,t.jsx)(n.td,{children:"497734.89"}),(0,t.jsx)(n.td,{children:"25.74"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1024"}),(0,t.jsx)(n.td,{children:"547816.87"}),(0,t.jsx)(n.td,{children:"54.83"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"high-performance-deployment-and-troubleshooting",children:"High performance deployment and troubleshooting"}),"\n",(0,t.jsxs)(n.p,{children:["The test results may not be as expected because the installation and configuration of OceanBase Database, creation of the business tenant, and usage details of Sysbench vary depending on the environment. Some cases about performance issues are provided for your reference. For more information about the cases, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001103505",children:"Reference > Performance test > Achieve high performance with Sysbench on OceanBase Database: deployment and troubleshooting"})," in OceanBase Database Documentation."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(96540);const r={},a=t.createContext(r);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);