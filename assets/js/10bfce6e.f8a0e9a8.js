"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[54519],{42362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var i=t(86070),s=t(25710);const c={},r="335.\u8def\u5f84\u4ea4\u53c9",o={id:"leetcode/301-400/\u8def\u5f84\u4ea4\u53c9",title:"335.\u8def\u5f84\u4ea4\u53c9",description:"\u94fe\u63a5\uff1a335.\u8def\u5f84\u4ea4\u53c9",source:"@site/docs/leetcode/301-400/335.\u8def\u5f84\u4ea4\u53c9.md",sourceDirName:"leetcode/301-400",slug:"/leetcode/301-400/\u8def\u5f84\u4ea4\u53c9",permalink:"/docs/leetcode/301-400/\u8def\u5f84\u4ea4\u53c9",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:335,frontMatter:{},sidebar:"journal",previous:{title:"334.\u9012\u589e\u7684\u4e09\u5143\u5b50\u5e8f\u5217",permalink:"/docs/leetcode/301-400/\u9012\u589e\u7684\u4e09\u5143\u5b50\u5e8f\u5217"},next:{title:"337.\u6253\u5bb6\u52ab\u820dIII",permalink:"/docs/leetcode/301-400/\u6253\u5bb6\u52ab\u820dIII"}},d={},l=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"335\u8def\u5f84\u4ea4\u53c9",children:"335.\u8def\u5f84\u4ea4\u53c9"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/self-crossing",children:"335.\u8def\u5f84\u4ea4\u53c9"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u51e0\u4f55\u3001\u6570\u7ec4\u3001\u6570\u5b66",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 distance \u3002\u5224\u65ad\u4f60\u6240\u7ecf\u8fc7\u7684\u8def\u5f84\u662f\u5426\u76f8\u4ea4\u3002\u5982\u679c\u76f8\u4ea4\uff0c\u8fd4\u56de true \uff1b\u5426\u5219\uff0c\u8fd4\u56de false \u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-29"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.7MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","[\u53c2\u8003\u94fe\u63a5](https://leetcode-cn.com/problems/self-crossing/solution/gong-shui-san-xie-fen-qing-kuang-tao-lun-zdrb/)\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function isSelfCrossing(distance: number[]): boolean {\n  const n = distance.length;\n  if (n <= 3) return false;\n  for (let i = 3; i < n; i++) {\n    if (i >= 3 && distance[i] >= distance[i - 2] && distance[i - 1] <= distance[i - 3]) return true;\n    if (\n      i >= 4 &&\n      distance[i - 1] === distance[i - 3] &&\n      distance[i] + distance[i - 4] >= distance[i - 2]\n    )\n      return true;\n    if (\n      i >= 5 &&\n      distance[i - 1] <= distance[i - 3] &&\n      distance[i - 2] > distance[i - 4] &&\n      distance[i] + distance[i - 4] >= distance[i - 2] &&\n      distance[i - 1] + distance[i - 5] >= distance[i - 3]\n    )\n      return true;\n  }\n  return false;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(30758);const s={},c=i.createContext(s);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);