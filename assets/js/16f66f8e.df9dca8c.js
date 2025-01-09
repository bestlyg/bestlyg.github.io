"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[66695],{13360:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/601-700/\u5b50\u6570\u7ec4\u6700\u5927\u5e73\u5747\u6570I","title":"643.\u5b50\u6570\u7ec4\u6700\u5927\u5e73\u5747\u6570I","description":"\u94fe\u63a5\uff1a643.\u5b50\u6570\u7ec4\u6700\u5927\u5e73\u5747\u6570I","source":"@site/docs/leetcode/601-700/643.\u5b50\u6570\u7ec4\u6700\u5927\u5e73\u5747\u6570I.md","sourceDirName":"leetcode/601-700","slug":"/leetcode/601-700/\u5b50\u6570\u7ec4\u6700\u5927\u5e73\u5747\u6570I","permalink":"/docs/leetcode/601-700/\u5b50\u6570\u7ec4\u6700\u5927\u5e73\u5747\u6570I","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":643,"frontMatter":{},"sidebar":"journal","previous":{"title":"641.\u8bbe\u8ba1\u5faa\u73af\u53cc\u7aef\u961f\u5217","permalink":"/docs/leetcode/601-700/\u8bbe\u8ba1\u5faa\u73af\u53cc\u7aef\u961f\u5217"},"next":{"title":"646.\u6700\u957f\u6570\u5bf9\u94fe","permalink":"/docs/leetcode/601-700/\u6700\u957f\u6570\u5bf9\u94fe"}}');var s=t(25105),c=t(8556);const i={},l="643.\u5b50\u6570\u7ec4\u6700\u5927\u5e73\u5747\u6570I",o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"643\u5b50\u6570\u7ec4\u6700\u5927\u5e73\u5747\u6570i",children:"643.\u5b50\u6570\u7ec4\u6700\u5927\u5e73\u5747\u6570I"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-average-subarray-i",children:"643.\u5b50\u6570\u7ec4\u6700\u5927\u5e73\u5747\u6570I"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6ed1\u52a8\u7a97\u53e3",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a n \u4e2a\u6574\u6570\uff0c\u627e\u51fa\u5e73\u5747\u6570\u6700\u5927\u4e14\u957f\u5ea6\u4e3a k \u7684\u8fde\u7eed\u5b50\u6570\u7ec4\uff0c\u5e76\u8f93\u51fa\u8be5\u6700\u5927\u5e73\u5747\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-04"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a116ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a49MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f7f\u7528\u4e00\u4e2a\u6570\u53bb\u50a8\u5b58\u5df2\u904d\u5386\u8fc7\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function findMaxAverage(nums: number[], k: number): number {\n  let num = nums.slice(0, k).reduce((total, cur) => total + cur, 0);\n  let max = num;\n  for (let i = k, l = nums.length; i < l; i++) {\n    max = Math.max((num = num - nums[i - k] + nums[i]), max);\n  }\n  return max / k;\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(58101);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);