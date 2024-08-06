"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[85513],{3151:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=t(86070),s=t(25710);const r={},l="\u9762\u8bd5\u989817.21.\u76f4\u65b9\u56fe\u7684\u6c34\u91cf",c={id:"leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989817.21.\u76f4\u65b9\u56fe\u7684\u6c34\u91cf",title:"\u9762\u8bd5\u989817.21.\u76f4\u65b9\u56fe\u7684\u6c34\u91cf",description:"\u94fe\u63a5\uff1a\u9762\u8bd5\u989817.21.\u76f4\u65b9\u56fe\u7684\u6c34\u91cf",source:"@site/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989817.21.\u76f4\u65b9\u56fe\u7684\u6c34\u91cf.md",sourceDirName:"leetcode/\u9762\u8bd5\u9898",slug:"/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989817.21.\u76f4\u65b9\u56fe\u7684\u6c34\u91cf",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989817.21.\u76f4\u65b9\u56fe\u7684\u6c34\u91cf",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u9762\u8bd5\u989817.20.\u8fde\u7eed\u4e2d\u503c",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989817.20.\u8fde\u7eed\u4e2d\u503c"},next:{title:"LCP06.\u62ff\u786c\u5e01",permalink:"/docs/leetcode/LCP/LCP06.\u62ff\u786c\u5e01"}},o={},h=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u9762\u8bd5\u98981721\u76f4\u65b9\u56fe\u7684\u6c34\u91cf",children:"\u9762\u8bd5\u989817.21.\u76f4\u65b9\u56fe\u7684\u6c34\u91cf"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/volume-of-histogram-lcci",children:"\u9762\u8bd5\u989817.21.\u76f4\u65b9\u56fe\u7684\u6c34\u91cf"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u52a8\u6001\u89c4\u5212\u3001\u5355\u8c03\u6808",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u76f4\u65b9\u56fe(\u4e5f\u79f0\u67f1\u72b6\u56fe)\uff0c\u5047\u8bbe\u6709\u4eba\u4ece\u4e0a\u9762\u6e90\u6e90\u4e0d\u65ad\u5730\u5012\u6c34\uff0c\u6700\u540e\u76f4\u65b9\u56fe\u80fd\u5b58\u591a\u5c11\u6c34\u91cf?\u76f4\u65b9\u56fe\u7684\u5bbd\u5ea6\u4e3a 1\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-02"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.9MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6c42\u51fa\u5de6\u53f3\u6700\u9ad8\u9ad8\u5ea6\u8fdb\u884c\u6bd4\u8f83\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function trap(height: number[]): number {\n  let max = 0;\n  const len = height.length;\n  const left: number[] = [0];\n  for (let i = 1; i < len; i++) left.push((max = Math.max(max, height[i - 1])));\n  const right: number[] = [0];\n  max = 0;\n  for (let i = len - 2; i >= 0; i--) right.unshift((max = Math.max(max, height[i + 1])));\n  let ans = 0;\n  for (let i = 0; i < len; i++) {\n    const num = Math.min(left[i], right[i]) - height[i];\n    ans += num > 0 ? num : 0;\n  }\n  return ans;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-02"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a112ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.8MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f18\u5316\u9898\u89e3 1\uff0c\u53d6\u6d88\u53f3\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function trap(height: number[]): number {\n  let max = 0;\n  const len = height.length;\n  const left: number[] = [0];\n  for (let i = 1; i < len; i++) left.push((max = Math.max(max, height[i - 1])));\n  let ans = 0;\n  max = 0;\n  for (let i = len - 2; i >= 0; i--) {\n    const num = Math.min(left[i], (max = Math.max(max, height[i + 1]))) - height[i];\n    ans += num > 0 ? num : 0;\n  }\n  return ans;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(30758);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);