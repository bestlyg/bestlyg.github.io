"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[71461],{64621:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(86070),i=t(25710);const s="/**\n * \u9632\u6296\n */\nexport const debounce = (time: number) => {\n    let timeout: NodeJS.Timeout;\n    return (fn: (...args: any[]) => void) => {\n        if (timeout) clearTimeout(timeout);\n        timeout = setTimeout(fn, time) as any;\n    };\n};\n/**\n * \u8282\u6d41\n */\nexport const throttle = (time: number) => {\n    let run = false;\n    return (fn: (...args: any[]) => void) => {\n        if (run) return;\n        run = true;\n        setTimeout(() => {\n            fn();\n            run = false;\n        }, time);\n    };\n};\n/**\n * \u65b0\u5efa\u5bf9\u8c61\u5b9e\u4f8b\n */\nexport const newInstance = (fn: (...args: any[]) => any, ...args: unknown[]) => {\n    const instance = Object.create(fn.prototype);\n    const res = fn.apply(instance, args);\n    return res instanceof Object ? res : instance;\n};\n/**\n * \u968f\u673a\u503c[a,b]\n * @param min \u6700\u5c0f\u503c\n * @param max \u6700\u5927\u503c\n */\nexport function random(min: number, max: number) {\n    return min + Math.floor(Math.random() * (max - min + 1));\n}\n";var a=t(82598);const o={},c="\u5e38\u89c1\u51fd\u6570\u624b\u5199",l={id:"\u7b97\u6cd5/\u901a\u7528/\u5e38\u89c1",title:"\u5e38\u89c1\u51fd\u6570\u624b\u5199",description:"\u9632\u6296(debounce)",source:"@site/docs/\u7b97\u6cd5/\u901a\u7528/\u5e38\u89c1.mdx",sourceDirName:"\u7b97\u6cd5/\u901a\u7528",slug:"/\u7b97\u6cd5/\u901a\u7528/\u5e38\u89c1",permalink:"/docs/\u7b97\u6cd5/\u901a\u7528/\u5e38\u89c1",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u5feb\u901f\u6392\u5e8f(QuickSort)",permalink:"/docs/\u7b97\u6cd5/\u6392\u5e8f/\u5feb\u901f\u6392\u5e8f"},next:{title:"\u6b27\u51e0\u91cc\u5f97\u7b97\u6cd5(euclidean)",permalink:"/docs/\u7b97\u6cd5/\u901a\u7528/\u6b27\u51e0\u91cc\u5f97\u7b97\u6cd5"}},d={},u=[{value:"\u9632\u6296(debounce)",id:"\u9632\u6296debounce",level:2},{value:"\u8282\u6d41(throttle)",id:"\u8282\u6d41throttle",level:2},{value:"\u65b0\u5efa\u5bf9\u8c61\u5b9e\u4f8b(new)",id:"\u65b0\u5efa\u5bf9\u8c61\u5b9e\u4f8bnew",level:2},{value:"\u968f\u673a\u503c(random)",id:"\u968f\u673a\u503crandom",level:2},{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801",level:2}];function m(n){const e={h1:"h1",h2:"h2",header:"header",p:"p",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u5e38\u89c1\u51fd\u6570\u624b\u5199",children:"\u5e38\u89c1\u51fd\u6570\u624b\u5199"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9632\u6296debounce",children:"\u9632\u6296(debounce)"}),"\n",(0,r.jsx)(e.p,{children:"\u9632\u6b62\u7528\u6237\u9891\u7e41\u89e6\u53d1\uff0c\u53ea\u4f1a\u5728\u6700\u540e\u4e00\u6b21\u89e6\u53d1\u540e\u6267\u884c"}),"\n",(0,r.jsx)(e.h2,{id:"\u8282\u6d41throttle",children:"\u8282\u6d41(throttle)"}),"\n",(0,r.jsx)(e.p,{children:"\u9632\u6b62\u7528\u6237\u9891\u7e41\u89e6\u53d1\uff0c\u65e0\u8bba\u4f55\u65f6\u89e6\u53d1\uff0c\u53ea\u4f1a\u4e00\u5b9a\u65f6\u95f4\u6267\u884c\u4e00\u6b21"}),"\n",(0,r.jsx)(e.h2,{id:"\u65b0\u5efa\u5bf9\u8c61\u5b9e\u4f8bnew",children:"\u65b0\u5efa\u5bf9\u8c61\u5b9e\u4f8b(new)"}),"\n",(0,r.jsx)(e.p,{children:"\u624b\u5199 new \u51fd\u6570"}),"\n",(0,r.jsx)(e.h2,{id:"\u968f\u673a\u503crandom",children:"\u968f\u673a\u503c(random)"}),"\n",(0,r.jsx)(e.p,{children:"\u83b7\u53d6 min \u5230 max \u8303\u56f4\u5185\u7684\u6700\u5c0f\u503c"}),"\n",(0,r.jsx)(e.h2,{id:"\u6838\u5fc3\u4ee3\u7801",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,r.jsx)(a.A,{language:"tsx",children:s})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(m,{...n})}):m(n)}}}]);