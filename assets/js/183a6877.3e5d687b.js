"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[1920],{85638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=t(74848),i=t(28453);const a={slug:"query-engines",title:"Evolution of Database Query Engines"},s="Classical Volcano Model",r={id:"blogs/tech/query-engines",title:"Evolution of Database Query Engines",description:"In relational databases, the query scheduler and plan executor are as crucial as the query optimizer, and their importance is increasing with advancements in computer hardware. In this article, **Yuming**, a technical expert from the OceanBase team who was born in the 1990s, will walk you through the milestones in the evolution of plan executors.",source:"@site/docs/blogs/tech/query-engines.md",sourceDirName:"blogs/tech",slug:"/blogs/tech/query-engines",permalink:"/docs/blogs/tech/query-engines",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/blogs/tech/query-engines.md",tags:[],version:"current",frontMatter:{slug:"query-engines",title:"Evolution of Database Query Engines"},sidebar:"blogsSidebar",previous:{title:"Mastering Parallel Execution in OceanBase Database: Part 4 - Parallel Execution Types",permalink:"/docs/blogs/tech/parallel-execution-IV"},next:{title:"How We Approach Improving Distributed Query Performance",permalink:"/docs/blogs/tech/refine-performance"}},l={},c=[];function h(e){const n={blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["In relational databases, the query scheduler and plan executor are as crucial as the query optimizer, and their importance is increasing with advancements in computer hardware. In this article, ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"Yuming"})}),", a technical expert from the OceanBase team who was born in the 1990s, will walk you through the milestones in the evolution of plan executors."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"About the author: Wei Yuchen, a technical expert from the OceanBase team of Ant Group, has been working on SQL parsing, execution, and optimization since joining the OceanBase team in 2013."}),"\n",(0,o.jsx)(n.p,{children:"When we talk about SQL queries in relational databases, the query optimizer naturally comes to mind. It is undoubtedly a crucial and complex module in relational computations, responsible for determining the most efficient execution plan to achieve optimal query results. However, two equally important modules contribute to relational computations: the query scheduler and the plan executor."}),"\n",(0,o.jsxs)(n.p,{children:["In the early stages of relational database development, I/O limitations overshadowed computation time for queries, diminishing the roles of the query scheduler and plan executor. Query performance primarily hinged on the execution ",(0,o.jsx)(n.strong,{children:"plan selected by the query optimizer. Nowadays, with advancements in computer hardware, the query scheduler and plan executor are gaining significant prominence. This article focuses on some milestones in the evolution of plan executors."})]}),"\n",(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"classical-volcano-model",children:(0,o.jsx)(n.strong,{children:"Classical Volcano Model"})})}),"\n",(0,o.jsx)(n.p,{children:"The Volcano model is a classical row-based streaming iterator model used by well-known mainstream relational databases such as Oracle, SQL Server, and MySQL."}),"\n",(0,o.jsx)(n.p,{children:"In the Volcano model, all algebraic operators act as iterators, each providing a set of simple interfaces: open(), next(), and close(). A query plan tree consists of these relational operators, which return a row upon each call to next(). Each operator has its own flow control logic for next(). Data is passively pulled through a chain of nested next() calls from the top to the bottom of the plan tree."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/pord/blog/2023-04/1679571504774.png",alt:"1679571504"})}),"\n",(0,o.jsx)(n.p,{children:"The preceding figure shows the query iterator model used in Spark 1.0, a model also used in OceanBase V0.5. This model is a simple example of the Volcano model. The control flow for pulling data originates at the topmost AGGREGATE operator and proceeds down to the bottom of the execution tree. Data, on the other hand, flows upward from the bottom of the execution tree."}),"\n",(0,o.jsx)(n.p,{children:"In the Volcano model, each operator treats its input from the lower-level operator as a table, with each call to next() retrieving one row of data. This design offers the following benefits:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Each operator performs independent algebraic computations and can be placed anywhere in the query plan tree as the query relationship changes. This simplifies operator algorithm implementation and enhances extensibility."}),"\n",(0,o.jsx)(n.li,{children:"Data flows between operators in a row-oriented manner. As long as flow-disrupting operations such as SORT are absent, each operator can operate efficiently with minimal buffering, reducing memory consumption."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"However, the nested operator model has its drawbacks:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Flow control in the Volcano model is a passive pull-based process. Every row of data flowing through each operator incurs additional flow control operations. This results in many redundant flow control instructions when data flows between operators."}),"\n",(0,o.jsx)(n.li,{children:"The next() calls between operators lead to deeply nested virtual function calls, preventing the compiler from inlining virtual functions. Each virtual function call requires a virtual function table lookup, increasing branch instructions. The complex nesting of virtual functions hinders CPU branch prediction, often causing prediction failures that disrupt the CPU pipeline. All these factors contribute to CPU execution inefficiency."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Generally, the direct overhead of a query depends primarily on two factors: the data transfer overhead between storage and operators, and the time spent on data computation."})}),"\n",(0,o.jsxs)(n.p,{children:["The Volcano model was first introduced by Goetz Graefe in 1990 in his paper ",(0,o.jsx)(n.em,{children:"Volcano\u2014An Extensible and Parallel Query Evaluation System"}),'. In the early 1990s, memory was expensive, and I/O was a significant bottleneck compared to CPU execution efficiency. This I/O bottleneck, the so-called "I/O wall" problem, between operators and storage was the primary limiting factor for query efficiency. The Volcano model allocated more memory resources to I/O caching than to CPU execution efficiency, which was a natural trade-off given the hardware constraints at the time.']}),"\n",(0,o.jsxs)(n.h1,{id:"as-hardware-advances-brought-larger-memory-capacities-more-data-can-be-stored-in-memory-however-the-relatively-stagnant-performance-of-single-core-cpus-became-a-bottleneck-this-spurred-numerous-optimizations-aimed-at-improving-cpu-execution-efficiencyoperator-fusion",children:["As hardware advances brought larger memory capacities, more data can be stored in memory. However, the relatively stagnant performance of single-core CPUs became a bottleneck. This spurred numerous optimizations aimed at improving CPU execution efficiency.",(0,o.jsx)(n.br,{}),"\n","Operator Fusion"]}),"\n",(0,o.jsx)(n.p,{children:"The simplest and most effective way to optimize the execution efficiency of operators is to reduce their function calls during execution. The Project and Filter operators are the most common operators in plan trees. In OceanBase V1.0, we fuse these operators into other specific algebraic operators. This significantly reduces the number of operators in a plan tree and minimizes the number of nested next() calls between operators. Integrating the Project and Filter operators as internal capabilities of each operator also enhances code locality and CPU branch prediction."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/pord/blog/2023-04/1679571568453.png",alt:"1679571568"})}),"\n",(0,o.jsxs)(n.p,{children:["The preceding figure shows the execution plan of the query ",(0,o.jsx)(n.code,{children:"select count(\\*) from store\\_sales where ss\\_item\\_sk=1000;"})," in OceanBase V1.0. The number of operators decreases from four to two, with the Filter and Select operators fused as local operations into the other operators."]}),"\n",(0,o.jsx)(n.h1,{id:"rowset-iteration",children:"RowSet Iteration"}),"\n",(0,o.jsx)(n.p,{children:"The Volcano model can be further optimized by using a RowSet mechanism. Instead of processing data row by row, the RowSet mechanism operates on batches of rows. This keeps computation localized within next() without frequently switching between function calls, thus ensuring code locality and reducing the number of function calls."}),"\n",(0,o.jsx)(n.p,{children:"By transforming the data flow in each step into localized loops, the RowSet mechanism leverages modern compiler technology and CPU dynamic branch prediction technology to optimize simple loop instructions to the fullest extent. Furthermore, RowSet construction can be accelerated by using single instruction multiple data (SIMD) instructions of CPUs, which is more efficient than per-row copies in memory. This significantly boosts the execution efficiency of queries that produce large result sets."}),"\n",(0,o.jsx)(n.h1,{id:"push-model",children:"Push Model"}),"\n",(0,o.jsx)(n.p,{children:"The push model was initially used in stream computing. With the advent of the big data era, it has been widely adopted in memory-based online analytical processing (OLAP) databases such as HyPer and LegoBase."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/pord/blog/2023-04/1679571632825.png",alt:"1679571632"})}),"\n",(0,o.jsx)(n.p,{children:"The preceding figure shows the different control and data flow directions of the pull and push models. As shown, the control flow of the pull model aligns more intuitively with our understanding of query execution. In this model, higher-level operators request and process data from lower-level operators on demand, which is essentially a series of nested function calls. Conversely, the push engine pushes computations from higher-level operators down to the operators that produce the data. Data producers then drive the consumption of this data by the higher-level operators."}),"\n",(0,o.jsxs)(n.p,{children:["To better compare the impact of the pull and push models on code structure, we illustrate the implementation of the next() interface of each operator in the aforementioned query in pseudocode, as shown in the following figure.",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.img,{alt:"1679571653",src:t(88473).A+"",width:"1352",height:"1020"})]}),"\n",(0,o.jsx)(n.p,{children:"As shown in the preceding figure, the push model transforms the nested call structure of data iteration compared to the pull model. This simplifies the instruction switching process during query execution, ensuring improved code locality and higher CPU execution efficiency. However, the push model is more complex to implement. The \ufffcHyPer system implements its computation and push engine by using the visitor design pattern. The basic idea is that each operator provides two interfaces: produce() for data production and consume() for data consumption. Different from next() in the pull model, consume() focuses solely on the relational algebra logic of the operator while produce() manages the flow control logic."}),"\n",(0,o.jsx)(n.p,{children:"One challenge is that operators whose relational algebra operations are inherently tied to flow control, such as LIMIT, MERGE JOIN, and NESTED LOOP JOIN, are difficult to implement by using the push model. Their execution efficiency within the push model may be inferior to that within the pull model. The HyPer paper does not offer a solution to this, presumably because HyPer focuses on OLAP scenarios, where flow control operators are less common, making their execution efficiency less of a concern. In extreme cases, these operations can be handled as special cases within other operators."}),"\n",(0,o.jsx)(n.h1,{id:"integration-of-pull-and-push-models",children:"Integration of Pull and Push Models"}),"\n",(0,o.jsx)(n.p,{children:"For a general-purpose relational database, it is necessary to consider the drawbacks of the push model. In online transaction processing (OLTP) scenarios, operations such as MERGE JOIN and NESTED LOOP JOIN are far more common than HASH JOIN. Therefore, it is a wise choice to integrate the pull and push models in the execution engine of the general-purpose relational database. In some time-consuming materialization operations, such as building a hash table for a hash join or performing aggregation, a callback function can be passed down to the lower-level operator through the next() interface. This offloads the time-consuming blocking computation to the next blocking operator through the callback. When the lower-level operator produces all data, it invokes callback functions in the callback list in sequence."}),"\n",(0,o.jsx)(n.p,{children:"Callbacks are not used to push down operations such as LIMIT, MERGE JOIN, and NESTED LOOP JOIN. This implementation requires only minimal changes to the original Volcano model while still realizing some of the advantages of the push model. This represents a reasonable trade-off."}),"\n",(0,o.jsx)(n.h1,{id:"compiled-execution",children:"Compiled Execution"}),"\n",(0,o.jsx)(n.p,{children:'While the pull and push models influence the code layout of the execution process, interpreted execution inherently involves virtual function calls between operators. With advances in computer hardware, memory capacities have grown significantly, allowing more data to be cached in memory and thereby reducing disk access frequency. This mitigates the "I/O wall" effect. However, the inability to leverage CPU registers during interpreted execution leads to frequent memory access, creating a "memory wall" between the CPU and memory. To resolve this issue, an increasing number of in-memory databases, such as HyPer, MemSQL, Hekaton, Impala, and Spark Tungsten, adopt compiled execution to optimize query efficiency.'}),"\n",(0,o.jsx)(n.p,{children:"Compared to interpreted execution, compiled execution offers the following benefits:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"1. Inlining of virtual function calls"}),": In the Volcano model, processing one row of data requires at least one call to next(). These function calls are implemented by the compiler through virtual function dispatches (vtable lookups). Compiled execution, however, eliminates these function calls altogether and optimizes away many control flow instructions required by interpreted execution. This makes CPU execution more efficient."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"2. Intermediate data in memory vs CPU registers"}),": In the Volcano model, operators pass row data by storing it in a memory buffer, necessitating at least one memory access per execution. Compiled execution, however, eliminates such data iteration and stores intermediate data directly in CPU registers provided that sufficient CPU registers are available. Register access is significantly faster than memory access, typically by an order of magnitude."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"3. Loop unrolling and SIMD"}),": When running simple loops, modern compilers and CPUs are incredibly efficient. Compilers automatically unroll simple loops and generate SIMD instructions in each CPU instruction to process multiple tuples. CPU features such as pipelining, prefetching, and instruction reordering enhance the execution efficiency of simple loops. However, compilers and CPUs offer limited optimization for complex function calls, while the Volcano model has highly intricate flow control calls."]}),"\n",(0,o.jsx)(n.p,{children:"In OceanBase V2.0, we use the low-level virtual machine (LLVM) framework to optimize compiled execution for expression operations and Procedural Language (PL) code in the execution engine. Here we introduce the compiled execution of expressions in OceanBase."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"1679571705",src:t(3365).A+"",width:"729",height:"55"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The compilation phase involves three main steps:"}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"1. Intermediate representation (IR) code generation: Consider the expression (c1+c2)*c1+(c1+c2)*3, where all operands are of the BIGINT type. By analyzing the semantic tree of the expression, the LLVM CodeGen API generates IR code, as shown in Figure (a)."}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"1679571741",src:t(80452).A+"",width:"978",height:"280"})}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"2. Code optimization: In the original code, the expression c1+c2 is computed twice. LLVM extracts it as a common subexpression. As shown in Figure (b), the optimized IR code computes c1+c2 only once, and the total number of executed instructions also decreases. If you use interpreted execution for expressions, all intermediate results are materialized in memory. Compiled code, however, allows you to store intermediate results in CPU registers for direct use in the next computation, boosting execution efficiency. LLVM also offers many similar optimizations, which we can use directly to speed up expression computation."}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"3. Just-in-time (JIT) compilation: On-Request Compilation (ORC) JIT in LLVM compiles optimized IR code into executable machine code and returns a pointer to the compiled function."}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"results-comparison",children:"Results Comparison"}),"\n",(0,o.jsx)(n.p,{children:"We compared the performance of several databases in the same test environment by executing the following SQL statement on a 1-GB TPC-H lineitem table that has approximately 6 million rows of data:"}),"\n",(0,o.jsxs)(n.p,{children:["SELECT SUM(CASE WHEN l_partkey IN(1,2,3,7)",(0,o.jsx)(n.br,{}),"\n","THEN l_linenumber + l_partkey +10",(0,o.jsx)(n.br,{}),"\n","ELSE l_linenumber + l_partkey +5",(0,o.jsx)(n.br,{}),"\n","END) AS result",(0,o.jsx)(n.br,{}),"\n","FROM lineitem;"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"1679571812",src:t(99188).A+"",width:"2350",height:"362"})}),"\n",(0,o.jsx)(n.p,{children:"As shown in the preceding figure, compiled execution offers a significant performance advantage over interpreted execution when dealing with large data volumes. This advantage increases proportionally with the data size. However, compiled execution has its drawbacks:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Directly compiling the Volcano model into code blocks may lead to exponential code growth due to function inlining, hindering execution efficiency improvements. Therefore, compiled execution benefits from integrating pull and push models, rather than relying solely on the pull model. If you are interested in compiled execution, we recommend that you read ",(0,o.jsx)(n.em,{children:"Efficiently Compiling Efficient Query Plans for Modern Hardware"})," by Thomas Neumann, the author of HyPer. This paper details optimization techniques for complex operators and provides coding strategies to maximize the efficiency of compiled execution."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Generating binary code for compiled execution is time-consuming, often taking 10 ms or more. For OLAP databases, this compilation time is acceptable because data computation dominates query time. However, for OLTP databases, this compilation time is intolerable for frequent, small queries. To address this issue, OceanBase stores and reuses compilation results in the plan cache, eliminating recompilation of identical queries."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"afterword",children:"Afterword"}),"\n",(0,o.jsx)(n.p,{children:"Software technology development goes hand-in-hand with hardware advancements. Aligning the software technology stack with hardware advancements brings significant benefits to system designs. While OceanBase is not strictly an in-memory database, effective partitioning allows us to cache frequently accessed data in memory, enabling OceanBase to function like a distributed in-memory database. Therefore, the optimization principles for in-memory databases also apply to the architecture of OceanBase."}),"\n",(0,o.jsx)(n.p,{children:"OceanBase is turning these academic ideas into engineering practices, such as wider adoption of compiled execution, computation pushdown, and distributed parallel execution. We are also assessing how columnar storage formats influence database execution engine technology and exploring methods to integrate the advantages of columnar storage engines into OceanBase. This will enhance the execution capability of OceanBase in analytical computing scenarios, solidifying its role as a hybrid transactional/analytical processing (HTAP) database."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},88473:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/1679571653397-55053d3ba7dc3dbb24e5004444650424.png"},3365:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/1679571705458-251af852b50d7489311298e0960092d5.png"},80452:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/1679571741482-8bd7a3bb91b455ee91cc2830b492f3e5.png"},99188:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/1679571812379-4f27a603b6efc21cd7e1a105c71b74a4.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(96540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);