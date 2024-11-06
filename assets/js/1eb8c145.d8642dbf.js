"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[54350],{21954:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var s=t(86070),r=t(31503);const c={},i="517.\u8d85\u7ea7\u6d17\u8863\u673a",o={id:"leetcode/501-600/\u8d85\u7ea7\u6d17\u8863\u673a",title:"517.\u8d85\u7ea7\u6d17\u8863\u673a",description:"\u94fe\u63a5\uff1a517.\u8d85\u7ea7\u6d17\u8863\u673a",source:"@site/docs/leetcode/501-600/517.\u8d85\u7ea7\u6d17\u8863\u673a.md",sourceDirName:"leetcode/501-600",slug:"/leetcode/501-600/\u8d85\u7ea7\u6d17\u8863\u673a",permalink:"/docs/leetcode/501-600/\u8d85\u7ea7\u6d17\u8863\u673a",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:517,frontMatter:{},sidebar:"journal",previous:{title:"516.\u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217",permalink:"/docs/leetcode/501-600/\u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217"},next:{title:"518.\u96f6\u94b1\u5151\u6362II",permalink:"/docs/leetcode/501-600/\u96f6\u94b1\u5151\u6362II"}},l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"517\u8d85\u7ea7\u6d17\u8863\u673a",children:"517.\u8d85\u7ea7\u6d17\u8863\u673a"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/super-washing-machines",children:"517.\u8d85\u7ea7\u6d17\u8863\u673a"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 \xa0machines \u4ee3\u8868\u4ece\u5de6\u81f3\u53f3\u6bcf\u53f0\u6d17\u8863\u673a\u4e2d\u7684\u8863\u7269\u6570\u91cf\uff0c\u8bf7\u7ed9\u51fa\u80fd\u8ba9\u6240\u6709\u6d17\u8863\u673a\u4e2d\u5269\u4e0b\u7684\u8863\u7269\u7684\u6570\u91cf\u76f8\u7b49\u7684 \u6700\u5c11\u7684\u64cd\u4f5c\u6b65\u6570 \u3002\u5982\u679c\u4e0d\u80fd\u4f7f\u6bcf\u53f0\u6d17\u8863\u673a\u4e2d\u8863\u7269\u7684\u6570\u91cf\u76f8\u7b49\uff0c\u5219\u8fd4\u56de -1 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-29"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.1MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3\uff0c\u7edf\u8ba1\u6bcf\u4e2a\u6d17\u8863\u673a\u91cc\u8863\u670d\u6570\u4e0e\u5e73\u5747\u8863\u670d\u6570\u7684\u5dee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function findMinMoves(machines: number[]): number {\n  const sum = machines.reduce((total, cur) => total + cur, 0);\n  const n = machines.length;\n  if (sum % n !== 0) return -1;\n  const avg = ~~(sum / n);\n  let ans = 0;\n  let num = 0;\n  for (let i = 0; i < n; i++) {\n    num += machines[i] - avg;\n    ans = Math.max(ans, Math.max(machines[i] - avg, Math.abs(num)));\n  }\n  return ans;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(30758);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);