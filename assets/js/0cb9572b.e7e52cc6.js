"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[51091],{91961:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/1801-1900/\u6570\u7ec4\u4e2d\u6700\u5927\u6570\u5bf9\u548c\u7684\u6700\u5c0f\u503c","title":"1877.\u6570\u7ec4\u4e2d\u6700\u5927\u6570\u5bf9\u548c\u7684\u6700\u5c0f\u503c","description":"\u94fe\u63a5\uff1a1877.\u6570\u7ec4\u4e2d\u6700\u5927\u6570\u5bf9\u548c\u7684\u6700\u5c0f\u503c","source":"@site/docs/leetcode/1801-1900/1877.\u6570\u7ec4\u4e2d\u6700\u5927\u6570\u5bf9\u548c\u7684\u6700\u5c0f\u503c.md","sourceDirName":"leetcode/1801-1900","slug":"/leetcode/1801-1900/\u6570\u7ec4\u4e2d\u6700\u5927\u6570\u5bf9\u548c\u7684\u6700\u5c0f\u503c","permalink":"/docs/leetcode/1801-1900/\u6570\u7ec4\u4e2d\u6700\u5927\u6570\u5bf9\u548c\u7684\u6700\u5c0f\u503c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1877,"frontMatter":{},"sidebar":"journal","previous":{"title":"1870.\u51c6\u65f6\u5230\u8fbe\u7684\u5217\u8f66\u6700\u5c0f\u65f6\u901f","permalink":"/docs/leetcode/1801-1900/\u51c6\u65f6\u5230\u8fbe\u7684\u5217\u8f66\u6700\u5c0f\u65f6\u901f"},"next":{"title":"1884.\u9e21\u86cb\u6389\u843d-\u4e24\u679a\u9e21\u86cb","permalink":"/docs/leetcode/1801-1900/\u9e21\u86cb\u6389\u843d-\u4e24\u679a\u9e21\u86cb"}}');var s=t(25105),i=t(8556);const c={},o="1877.\u6570\u7ec4\u4e2d\u6700\u5927\u6570\u5bf9\u548c\u7684\u6700\u5c0f\u503c",l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1877\u6570\u7ec4\u4e2d\u6700\u5927\u6570\u5bf9\u548c\u7684\u6700\u5c0f\u503c",children:"1877.\u6570\u7ec4\u4e2d\u6700\u5927\u6570\u5bf9\u548c\u7684\u6700\u5c0f\u503c"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/minimize-maximum-pair-sum-in-array",children:"1877.\u6570\u7ec4\u4e2d\u6700\u5927\u6570\u5bf9\u548c\u7684\u6700\u5c0f\u503c"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u6392\u5e8f",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u5728\u6700\u4f18\u6570\u5bf9\u5212\u5206\u7684\u65b9\u6848\u4e0b\uff0c\u8fd4\u56de\u6700\u5c0f\u7684 \u6700\u5927\u6570\u5bf9\u548c \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-20"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a332ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a53.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3\uff0c\u6392\u5e8f\u540e\u6536\u5c3e\u76f8\u52a0\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function minPairSum(nums: number[]): number {\n  const n = nums.length;\n  const arr = new Array(n / 2).fill(0);\n  nums.sort((a, b) => a - b);\n  for (let i = 0; i < n / 2; i++) arr[i] = nums[i] + nums[n - 1 - i];\n  return Math.max(...arr);\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(58101);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);