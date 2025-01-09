"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[10660],{15482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/1701-1800/\u5b8c\u6210\u6240\u6709\u5de5\u4f5c\u7684\u6700\u77ed\u65f6\u95f4","title":"1723.\u5b8c\u6210\u6240\u6709\u5de5\u4f5c\u7684\u6700\u77ed\u65f6\u95f4","description":"\u94fe\u63a5\uff1a1723.\u5b8c\u6210\u6240\u6709\u5de5\u4f5c\u7684\u6700\u77ed\u65f6\u95f4","source":"@site/docs/leetcode/1701-1800/1723.\u5b8c\u6210\u6240\u6709\u5de5\u4f5c\u7684\u6700\u77ed\u65f6\u95f4.md","sourceDirName":"leetcode/1701-1800","slug":"/leetcode/1701-1800/\u5b8c\u6210\u6240\u6709\u5de5\u4f5c\u7684\u6700\u77ed\u65f6\u95f4","permalink":"/docs/leetcode/1701-1800/\u5b8c\u6210\u6240\u6709\u5de5\u4f5c\u7684\u6700\u77ed\u65f6\u95f4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1723,"frontMatter":{},"sidebar":"journal","previous":{"title":"1720.\u89e3\u7801\u5f02\u6216\u540e\u7684\u6570\u7ec4","permalink":"/docs/leetcode/1701-1800/\u89e3\u7801\u5f02\u6216\u540e\u7684\u6570\u7ec4"},"next":{"title":"1725.\u53ef\u4ee5\u5f62\u6210\u6700\u5927\u6b63\u65b9\u5f62\u7684\u77e9\u5f62\u6570\u76ee","permalink":"/docs/leetcode/1701-1800/\u53ef\u4ee5\u5f62\u6210\u6700\u5927\u6b63\u65b9\u5f62\u7684\u77e9\u5f62\u6570\u76ee"}}');var i=t(25105),s=t(8556);const o={},c="1723.\u5b8c\u6210\u6240\u6709\u5de5\u4f5c\u7684\u6700\u77ed\u65f6\u95f4",l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"1723\u5b8c\u6210\u6240\u6709\u5de5\u4f5c\u7684\u6700\u77ed\u65f6\u95f4",children:"1723.\u5b8c\u6210\u6240\u6709\u5de5\u4f5c\u7684\u6700\u77ed\u65f6\u95f4"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/find-minimum-time-to-finish-all-jobs",children:"1723.\u5b8c\u6210\u6240\u6709\u5de5\u4f5c\u7684\u6700\u77ed\u65f6\u95f4"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u56de\u6eaf\u3001\u72b6\u6001\u538b\u7f29",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u5206\u914d\u65b9\u6848\u4e2d\u5c3d\u53ef\u80fd \u6700\u5c0f \u7684 \u6700\u5927\u5de5\u4f5c\u65f6\u95f4 \u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-08"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a3336ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.8MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u56de\u6eaf\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function minimumTimeRequired(jobs: number[], k: number): number {\n  const len = jobs.length;\n  if (len === k) return Math.max(...jobs);\n  const workers: number[] = new Array(k).fill(0);\n  let min = Infinity;\n  const distribute = (jobIndex: number = 0) => {\n    if (jobIndex === len) {\n      min = Math.min(min, Math.max(...workers));\n      return;\n    }\n    for (let i = 0; i < k; i++) {\n      if (i > 0 && workers[i] === workers[i - 1]) continue;\n      workers[i] += jobs[jobIndex];\n      distribute(jobIndex + 1);\n      workers[i] -= jobs[jobIndex];\n    }\n  };\n  distribute();\n  return min;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(58101);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);