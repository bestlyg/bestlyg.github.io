"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[84164],{70591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=n(86070),c=n(25710);const r={},o="621.\u4efb\u52a1\u8c03\u5ea6\u5668",l={id:"leetcode/601-700/\u4efb\u52a1\u8c03\u5ea6\u5668",title:"621.\u4efb\u52a1\u8c03\u5ea6\u5668",description:"\u94fe\u63a5\uff1a621.\u4efb\u52a1\u8c03\u5ea6\u5668",source:"@site/docs/leetcode/601-700/621.\u4efb\u52a1\u8c03\u5ea6\u5668.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u4efb\u52a1\u8c03\u5ea6\u5668",permalink:"/docs/leetcode/601-700/\u4efb\u52a1\u8c03\u5ea6\u5668",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:621,frontMatter:{},sidebar:"journal",previous:{title:"617.\u5408\u5e76\u4e8c\u53c9\u6811",permalink:"/docs/leetcode/601-700/\u5408\u5e76\u4e8c\u53c9\u6811"},next:{title:"622.\u8bbe\u8ba1\u5faa\u73af\u961f\u5217",permalink:"/docs/leetcode/601-700/\u8bbe\u8ba1\u5faa\u73af\u961f\u5217"}},i={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"621\u4efb\u52a1\u8c03\u5ea6\u5668",children:"621.\u4efb\u52a1\u8c03\u5ea6\u5668"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(t.a,{href:"https://leetcode.cn/problems/task-scheduler",children:"621.\u4efb\u52a1\u8c03\u5ea6\u5668"}),(0,s.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u8ba1\u6570\u3001\u6392\u5e8f\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,s.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u7528\u5b57\u7b26\u6570\u7ec4 \xa0tasks \u8868\u793a\u7684 CPU \u9700\u8981\u6267\u884c\u7684\u4efb\u52a1\u5217\u8868\u3002\u5176\u4e2d\u6bcf\u4e2a\u5b57\u6bcd\u8868\u793a\u4e00\u79cd\u4e0d\u540c\u79cd\u7c7b\u7684\u4efb\u52a1\u3002\u4efb\u52a1\u53ef\u4ee5\u4ee5\u4efb\u610f\u987a\u5e8f\u6267\u884c\uff0c\u5e76\u4e14\u6bcf\u4e2a\u4efb\u52a1\u90fd\u53ef\u4ee5\u5728 1 \u4e2a\u5355\u4f4d\u65f6\u95f4\u5185\u6267\u884c\u5b8c\u3002\u5728\u4efb\u4f55\u4e00\u4e2a\u5355\u4f4d\u65f6\u95f4\uff0cCPU \u53ef\u4ee5\u5b8c\u6210\u4e00\u4e2a\u4efb\u52a1\uff0c\u6216\u8005\u5904\u4e8e\u5f85\u547d\u72b6\u6001\u3002\u7136\u800c\uff0c\u4e24\u4e2a \u76f8\u540c\u79cd\u7c7b \u7684\u4efb\u52a1\u4e4b\u95f4\u5fc5\u987b\u6709\u957f\u5ea6\u4e3a\u6574\u6570 n \u7684\u51b7\u5374\u65f6\u95f4\uff0c\u56e0\u6b64\u81f3\u5c11\u6709\u8fde\u7eed n \u4e2a\u5355\u4f4d\u65f6\u95f4\u5185 CPU \u5728\u6267\u884c\u4e0d\u540c\u7684\u4efb\u52a1\uff0c\u6216\u8005\u5728\u5f85\u547d\u72b6\u6001\u3002\u4f60\u9700\u8981\u8ba1\u7b97\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u6240\u9700\u8981\u7684 \u6700\u77ed\u65f6\u95f4 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-12-06"}),"\n",(0,s.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,s.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.9MB"}),"\n",(0,s.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","[\u53c2\u8003\u94fe\u63a5](https://leetcode-cn.com/problems/task-scheduler/solution/ren-wu-diao-du-qi-by-leetcode-solution-ur9w/)\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"function leastInterval(tasks: string[], n: number): number {\n  const countCache: Record<string, number> = {};\n  for (const task of tasks) {\n    countCache[task] = 1 + (countCache[task] ?? 0);\n  }\n  const maxExec = Math.max(...Object.values(countCache));\n  const maxCount = Object.values(countCache).reduce(\n    (total, v) => total + (v === maxExec ? 1 : 0),\n    0\n  );\n  return Math.max((maxExec - 1) * (n + 1) + maxCount, tasks.length);\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(30758);const c={},r=s.createContext(c);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);