"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[62541],{28376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var s=t(86070),r=t(25710);const c={},l="LCR165.\u89e3\u5bc6\u6570\u5b57",i={id:"leetcode/1-100/LCR165.\u89e3\u5bc6\u6570\u5b57",title:"LCR165.\u89e3\u5bc6\u6570\u5b57",description:"\u94fe\u63a5\uff1aLCR165.\u89e3\u5bc6\u6570\u5b57",source:"@site/docs/leetcode/1-100/LCR165.\u89e3\u5bc6\u6570\u5b57.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/LCR165.\u89e3\u5bc6\u6570\u5b57",permalink:"/docs/leetcode/1-100/LCR165.\u89e3\u5bc6\u6570\u5b57",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR161.\u8fde\u7eed\u5929\u6570\u7684\u6700\u9ad8\u9500\u552e\u989d",permalink:"/docs/leetcode/1-100/LCR161.\u8fde\u7eed\u5929\u6570\u7684\u6700\u9ad8\u9500\u552e\u989d"},next:{title:"LCR166.\u73e0\u5b9d\u7684\u6700\u9ad8\u4ef7\u503c",permalink:"/docs/leetcode/1-100/LCR166.\u73e0\u5b9d\u7684\u6700\u9ad8\u4ef7\u503c"}},o={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"lcr165\u89e3\u5bc6\u6570\u5b57",children:"LCR165.\u89e3\u5bc6\u6570\u5b57"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof",children:"LCR165.\u89e3\u5bc6\u6570\u5b57"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6570\u5b57\uff0c\u6211\u4eec\u6309\u7167\u5982\u4e0b\u89c4\u5219\u628a\u5b83\u7ffb\u8bd1\u4e3a\u5b57\u7b26\u4e32\uff1a0 \u7ffb\u8bd1\u6210 \u201ca\u201d \uff0c1 \u7ffb\u8bd1\u6210 \u201cb\u201d\uff0c\u2026\u2026\uff0c11 \u7ffb\u8bd1\u6210 \u201cl\u201d\uff0c\u2026\u2026\uff0c25 \u7ffb\u8bd1\u6210 \u201cz\u201d\u3002\u4e00\u4e2a\u6570\u5b57\u53ef\u80fd\u6709\u591a\u4e2a\u7ffb\u8bd1\u3002\u8bf7\u7f16\u7a0b\u5b9e\u73b0\u4e00\u4e2a\u51fd\u6570\uff0c\u7528\u6765\u8ba1\u7b97\u4e00\u4e2a\u6570\u5b57\u6709\u591a\u5c11\u79cd\u4e0d\u540c\u7684\u7ffb\u8bd1\u65b9\u6cd5\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-09"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a60ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a32.4MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u5224\u65ad\u5f53\u524d\u503c\u662f\u5426<=25 \u4e0d\u662f\u5219\u5206\u6bb5\u8ba1\u7b97\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function translateNum(num: number): number {\n  if (num < 10) return 1;\n  else if (num <= 25) {\n    return 2;\n  } else if (num < 100) {\n    return 1;\n  } else {\n    const s = num.toString();\n    const subNum2 = Number(s.substr(0, 2));\n    let num2 = 0;\n    if (subNum2 <= 25) num2 = translateNum(Number(s.substr(2)));\n    return translateNum(Number(s.substr(1))) + num2;\n  }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(30758);const r={},c=s.createContext(r);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);