"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[11640],{89571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=t(86070),l=t(25710);const r={},c="1894.\u627e\u5230\u9700\u8981\u8865\u5145\u7c89\u7b14\u7684\u5b66\u751f\u7f16\u53f7",i={id:"leetcode/1801-1900/\u627e\u5230\u9700\u8981\u8865\u5145\u7c89\u7b14\u7684\u5b66\u751f\u7f16\u53f7",title:"1894.\u627e\u5230\u9700\u8981\u8865\u5145\u7c89\u7b14\u7684\u5b66\u751f\u7f16\u53f7",description:"\u94fe\u63a5\uff1a1894.\u627e\u5230\u9700\u8981\u8865\u5145\u7c89\u7b14\u7684\u5b66\u751f\u7f16\u53f7",source:"@site/docs/leetcode/1801-1900/1894.\u627e\u5230\u9700\u8981\u8865\u5145\u7c89\u7b14\u7684\u5b66\u751f\u7f16\u53f7.md",sourceDirName:"leetcode/1801-1900",slug:"/leetcode/1801-1900/\u627e\u5230\u9700\u8981\u8865\u5145\u7c89\u7b14\u7684\u5b66\u751f\u7f16\u53f7",permalink:"/docs/leetcode/1801-1900/\u627e\u5230\u9700\u8981\u8865\u5145\u7c89\u7b14\u7684\u5b66\u751f\u7f16\u53f7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1894,frontMatter:{},sidebar:"journal",previous:{title:"1893.\u68c0\u67e5\u662f\u5426\u533a\u57df\u5185\u6240\u6709\u6574\u6570\u90fd\u88ab\u8986\u76d6",permalink:"/docs/leetcode/1801-1900/\u68c0\u67e5\u662f\u5426\u533a\u57df\u5185\u6240\u6709\u6574\u6570\u90fd\u88ab\u8986\u76d6"},next:{title:"1901.\u5bfb\u627e\u5cf0\u503cII",permalink:"/docs/leetcode/1901-2000/\u5bfb\u627e\u5cf0\u503cII"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1894\u627e\u5230\u9700\u8981\u8865\u5145\u7c89\u7b14\u7684\u5b66\u751f\u7f16\u53f7",children:"1894.\u627e\u5230\u9700\u8981\u8865\u5145\u7c89\u7b14\u7684\u5b66\u751f\u7f16\u53f7"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/find-the-student-that-will-replace-the-chalk",children:"1894.\u627e\u5230\u9700\u8981\u8865\u5145\u7c89\u7b14\u7684\u5b66\u751f\u7f16\u53f7"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u524d\u7f00\u548c\u3001\u6a21\u62df",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u9700\u8981 \u8865\u5145 \u7c89\u7b14\u7684\u5b66\u751f \u7f16\u53f7 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-10"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1052ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a49.6MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5faa\u73af\u76f8\u51cf\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function chalkReplacer(chalk: number[], k: number): number {\n  const sum = chalk.reduce((total, cur) => total + cur, 0);\n  while (k >= sum) k -= sum;\n  let idx = 0;\n  while (k >= chalk[idx]) k -= chalk[idx++];\n  return idx;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-10"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a796ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a54.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206+\u524d\u7f00\u548c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function chalkReplacer(chalk: number[], k: number): number {\n  let sum = 0;\n  const sums: number[] = [0];\n  const n = chalk.length;\n  for (let i = 0; i < n; i++) sums.push((sum += chalk[i]));\n  while (k >= sum) k -= sum;\n  return find(k) - 1;\n  function find(num: number) {\n    let l = 0;\n    let r = n;\n    while (l < r) {\n      const mid = (l + r) >> 1;\n      if (sums[mid] > num) r = mid;\n      else l = mid + 1;\n    }\n    return l;\n  }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(30758);const l={},r=s.createContext(l);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);