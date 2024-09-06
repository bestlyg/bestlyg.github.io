"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[29844],{78482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var s=t(86070),c=t(25710);const i={},l="946.\u9a8c\u8bc1\u6808\u5e8f\u5217",r={id:"leetcode/901-1000/\u9a8c\u8bc1\u6808\u5e8f\u5217",title:"946.\u9a8c\u8bc1\u6808\u5e8f\u5217",description:"\u94fe\u63a5\uff1a946.\u9a8c\u8bc1\u6808\u5e8f\u5217",source:"@site/docs/leetcode/901-1000/946.\u9a8c\u8bc1\u6808\u5e8f\u5217.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u9a8c\u8bc1\u6808\u5e8f\u5217",permalink:"/docs/leetcode/901-1000/\u9a8c\u8bc1\u6808\u5e8f\u5217",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:946,frontMatter:{},sidebar:"journal",previous:{title:"944.\u5220\u5217\u9020\u5e8f",permalink:"/docs/leetcode/901-1000/\u5220\u5217\u9020\u5e8f"},next:{title:"947.\u79fb\u9664\u6700\u591a\u7684\u540c\u884c\u6216\u540c\u5217\u77f3\u5934",permalink:"/docs/leetcode/901-1000/\u79fb\u9664\u6700\u591a\u7684\u540c\u884c\u6216\u540c\u5217\u77f3\u5934"}},p={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"946\u9a8c\u8bc1\u6808\u5e8f\u5217",children:"946.\u9a8c\u8bc1\u6808\u5e8f\u5217"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/validate-stack-sequences",children:"946.\u9a8c\u8bc1\u6808\u5e8f\u5217"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6570\u7ec4\u3001\u6a21\u62df",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a \xa0pushed\xa0 \u548c \xa0popped\xa0 \u4e24\u4e2a\u5e8f\u5217\uff0c\u6bcf\u4e2a\u5e8f\u5217\u4e2d\u7684 \u503c\u90fd\u4e0d\u91cd\u590d\uff0c\u53ea\u6709\u5f53\u5b83\u4eec\u53ef\u80fd\u662f\u5728\u6700\u521d\u7a7a\u6808\u4e0a\u8fdb\u884c\u7684\u63a8\u5165 push \u548c\u5f39\u51fa pop \u64cd\u4f5c\u5e8f\u5217\u7684\u7ed3\u679c\u65f6\uff0c\u8fd4\u56de true\uff1b\u5426\u5219\uff0c\u8fd4\u56de false\xa0\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-19"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7ef4\u62a4\u6808\uff0c\u5224\u65ad\u6570\u636e\u662f\u5426\u6b63\u5e38\u5f39\u51fa\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function validateStackSequences(pushed: number[], popped: number[]): boolean {\n  const stack: number[] = [];\n  for (const push of pushed) {\n    stack.push(push);\n    while (popped.length > 0 && popped[0] === stack[stack.length - 1]) {\n      stack.pop();\n      popped.shift();\n    }\n  }\n  return popped.length === 0;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-08-31"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.8MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","stack\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {\n        int len = popped.size();\n        stack<int> s;\n        for (int i1 = 0, i2 = 0; i1 < len; i1++) {\n            s.push(pushed[i1]);\n            while (i2 < len && s.size() && s.top() == popped[i2]) {\n                s.pop();\n                i2++;\n            }\n        }\n        return s.empty();\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(30758);const c={},i=s.createContext(c);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);