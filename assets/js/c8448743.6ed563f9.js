"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[13890],{8640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=t(86070),c=t(25710);const r={},l="1021.\u5220\u9664\u6700\u5916\u5c42\u7684\u62ec\u53f7",i={id:"leetcode/1001-1100/\u5220\u9664\u6700\u5916\u5c42\u7684\u62ec\u53f7",title:"1021.\u5220\u9664\u6700\u5916\u5c42\u7684\u62ec\u53f7",description:"\u94fe\u63a5\uff1a1021.\u5220\u9664\u6700\u5916\u5c42\u7684\u62ec\u53f7",source:"@site/docs/leetcode/1001-1100/1021.\u5220\u9664\u6700\u5916\u5c42\u7684\u62ec\u53f7.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u5220\u9664\u6700\u5916\u5c42\u7684\u62ec\u53f7",permalink:"/docs/leetcode/1001-1100/\u5220\u9664\u6700\u5916\u5c42\u7684\u62ec\u53f7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1021,frontMatter:{},sidebar:"journal",previous:{title:"1020.\u98de\u5730\u7684\u6570\u91cf",permalink:"/docs/leetcode/1001-1100/\u98de\u5730\u7684\u6570\u91cf"},next:{title:"1023.\u9a7c\u5cf0\u5f0f\u5339\u914d",permalink:"/docs/leetcode/1001-1100/\u9a7c\u5cf0\u5f0f\u5339\u914d"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1021\u5220\u9664\u6700\u5916\u5c42\u7684\u62ec\u53f7",children:"1021.\u5220\u9664\u6700\u5916\u5c42\u7684\u62ec\u53f7"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/remove-outermost-parentheses",children:"1021.\u5220\u9664\u6700\u5916\u5c42\u7684\u62ec\u53f7"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5bf9 S \u8fdb\u884c\u539f\u8bed\u5316\u5206\u89e3\uff0c\u5220\u9664\u5206\u89e3\u4e2d\u6bcf\u4e2a\u539f\u8bed\u5b57\u7b26\u4e32\u7684\u6700\u5916\u5c42\u62ec\u53f7\uff0c\u8fd4\u56de S \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-19"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.7MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u6808\u7ef4\u62a4\u5185\u5c42\u62ec\u53f7\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function removeOuterParentheses(S: string): string {\n  const stack: string[] = [];\n  let ans = '';\n  let deep = 0;\n  let count = 0;\n  for (const c of S) {\n    if (c === '(') {\n      stack.push(c);\n      deep++;\n      count++;\n    } else if (--deep === 0) {\n      let str = '';\n      while (--count !== 0) str = stack.pop()! + str;\n      ans += str;\n    } else {\n      stack.push(c);\n      count++;\n    }\n  }\n  return ans;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-28"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.4MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e00\u6b21\u904d\u5386, \u50a8\u5b58\u5f53\u524d\u7b49\u7ea7\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    string removeOuterParentheses(string s) {\n        string ans = \"\";\n        int level = 0;\n        for (auto& ch : s) {\n            if (ch == '(') {\n                if (level != 0) ans += ch;\n                level++;\n            } else {\n                level--;\n                if (level != 0) ans += ch;\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(30758);const c={},r=s.createContext(c);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);