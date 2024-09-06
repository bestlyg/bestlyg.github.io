"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[85760],{68942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(86070),s=n(25710);const i={},c="LCR157.\u5957\u9910\u5185\u5546\u54c1\u7684\u6392\u5217\u987a\u5e8f",l={id:"leetcode/LCR/LCR157.\u5957\u9910\u5185\u5546\u54c1\u7684\u6392\u5217\u987a\u5e8f",title:"LCR157.\u5957\u9910\u5185\u5546\u54c1\u7684\u6392\u5217\u987a\u5e8f",description:"\u94fe\u63a5\uff1aLCR157.\u5957\u9910\u5185\u5546\u54c1\u7684\u6392\u5217\u987a\u5e8f",source:"@site/docs/leetcode/LCR/LCR157.\u5957\u9910\u5185\u5546\u54c1\u7684\u6392\u5217\u987a\u5e8f.md",sourceDirName:"leetcode/LCR",slug:"/leetcode/LCR/LCR157.\u5957\u9910\u5185\u5546\u54c1\u7684\u6392\u5217\u987a\u5e8f",permalink:"/docs/leetcode/LCR/LCR157.\u5957\u9910\u5185\u5546\u54c1\u7684\u6392\u5217\u987a\u5e8f",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR156.\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316\u4e8c\u53c9\u6811",permalink:"/docs/leetcode/LCR/LCR156.\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316\u4e8c\u53c9\u6811"},next:{title:"LCR159.\u5e93\u5b58\u7ba1\u7406III",permalink:"/docs/leetcode/LCR/LCR159.\u5e93\u5b58\u7ba1\u7406III"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"lcr157\u5957\u9910\u5185\u5546\u54c1\u7684\u6392\u5217\u987a\u5e8f",children:"LCR157.\u5957\u9910\u5185\u5546\u54c1\u7684\u6392\u5217\u987a\u5e8f"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(t.a,{href:"https://leetcode.cn/problems/zi-fu-chuan-de-pai-lie-lcof",children:"LCR157.\u5957\u9910\u5185\u5546\u54c1\u7684\u6392\u5217\u987a\u5e8f"}),(0,r.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u56de\u6eaf",(0,r.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8f93\u5165\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u6253\u5370\u51fa\u8be5\u5b57\u7b26\u4e32\u4e2d\u5b57\u7b26\u7684\u6240\u6709\u6392\u5217\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-06-22"}),"\n",(0,r.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a140ms"}),"\n",(0,r.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a47.5MB"}),"\n",(0,r.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5168\u6392\u5217\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function permutation(s: string): string[] {\n  const list = new Set<string>();\n  const dfs = (curStr: string = '', waitStr: string = s) => {\n    if (waitStr.length === 1) {\n      list.add(curStr + waitStr);\n      return;\n    }\n    for (let i = 0, l = waitStr.length; i < l; i++) {\n      const newCurStr = curStr + waitStr[i];\n      const newWaitStr = waitStr.substring(0, i) + waitStr.substring(i + 1);\n      dfs(newCurStr, newWaitStr);\n    }\n  };\n  dfs();\n  return [...list];\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var r=n(30758);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);