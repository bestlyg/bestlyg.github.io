"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[844],{91649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var s=t(86070),c=t(31503);const r={},o="1249.\u79fb\u9664\u65e0\u6548\u7684\u62ec\u53f7",i={id:"leetcode/1201-1300/\u79fb\u9664\u65e0\u6548\u7684\u62ec\u53f7",title:"1249.\u79fb\u9664\u65e0\u6548\u7684\u62ec\u53f7",description:"\u94fe\u63a5\uff1a1249.\u79fb\u9664\u65e0\u6548\u7684\u62ec\u53f7",source:"@site/docs/leetcode/1201-1300/1249.\u79fb\u9664\u65e0\u6548\u7684\u62ec\u53f7.md",sourceDirName:"leetcode/1201-1300",slug:"/leetcode/1201-1300/\u79fb\u9664\u65e0\u6548\u7684\u62ec\u53f7",permalink:"/docs/leetcode/1201-1300/\u79fb\u9664\u65e0\u6548\u7684\u62ec\u53f7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1249,frontMatter:{},sidebar:"journal",previous:{title:"1247.\u4ea4\u6362\u5b57\u7b26\u4f7f\u5f97\u5b57\u7b26\u4e32\u76f8\u540c",permalink:"/docs/leetcode/1201-1300/\u4ea4\u6362\u5b57\u7b26\u4f7f\u5f97\u5b57\u7b26\u4e32\u76f8\u540c"},next:{title:"1250.\u68c0\u67e5\u300c\u597d\u6570\u7ec4\u300d",permalink:"/docs/leetcode/1201-1300/\u68c0\u67e5\u300c\u597d\u6570\u7ec4\u300d"}},l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1249\u79fb\u9664\u65e0\u6548\u7684\u62ec\u53f7",children:"1249.\u79fb\u9664\u65e0\u6548\u7684\u62ec\u53f7"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-remove-to-make-valid-parentheses",children:"1249.\u79fb\u9664\u65e0\u6548\u7684\u62ec\u53f7"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u7531 '('\u3001')' \u548c\u5c0f\u5199\u5b57\u6bcd\u7ec4\u6210\u7684\u5b57\u7b26\u4e32 s\u3002\u4f60\u9700\u8981\u4ece\u5b57\u7b26\u4e32\u4e2d\u5220\u9664\u6700\u5c11\u6570\u76ee\u7684 '(' \u6216\u8005 ')'\xa0\uff08\u53ef\u4ee5\u5220\u9664\u4efb\u610f\u4f4d\u7f6e\u7684\u62ec\u53f7)\uff0c\u4f7f\u5f97\u5269\u4e0b\u7684\u300c\u62ec\u53f7\u5b57\u7b26\u4e32\u300d\u6709\u6548\u3002\u8bf7\u8fd4\u56de\u4efb\u610f\u4e00\u4e2a\u5408\u6cd5\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-19"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a112ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4ece\u5de6\u5230\u53f3\u53bb\u9664\u53f3\u62ec\u53f7\uff0c\u4ece\u53f3\u5230\u5de6\u53bb\u9664\u5de6\u62ec\u53f7\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function minRemoveToMakeValid(s: string): string {\n  let fCount = 0;\n  let ans = '';\n  for (const c of s) {\n    if (c === '(') {\n      fCount++;\n      ans += c;\n    } else if (c === ')') {\n      if (fCount !== 0) {\n        ans += c;\n        fCount--;\n      }\n    } else {\n      ans += c;\n    }\n  }\n  const temp = ans;\n  fCount = 0;\n  ans = '';\n  for (let i = temp.length - 1; i >= 0; i--) {\n    const c = temp[i];\n    if (c === ')') {\n      fCount++;\n      ans = c + ans;\n    } else if (c === '(') {\n      if (fCount !== 0) {\n        ans = c + ans;\n        fCount--;\n      }\n    } else {\n      ans = c + ans;\n    }\n  }\n  return ans;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(30758);const c={},r=s.createContext(c);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);