"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[10978],{30821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=t(86070),s=t(25710);const c={},i="1773.\u7edf\u8ba1\u5339\u914d\u68c0\u7d22\u89c4\u5219\u7684\u7269\u54c1\u6570\u91cf",l={id:"leetcode/1701-1800/\u7edf\u8ba1\u5339\u914d\u68c0\u7d22\u89c4\u5219\u7684\u7269\u54c1\u6570\u91cf",title:"1773.\u7edf\u8ba1\u5339\u914d\u68c0\u7d22\u89c4\u5219\u7684\u7269\u54c1\u6570\u91cf",description:"\u94fe\u63a5\uff1a1773.\u7edf\u8ba1\u5339\u914d\u68c0\u7d22\u89c4\u5219\u7684\u7269\u54c1\u6570\u91cf",source:"@site/docs/leetcode/1701-1800/1773.\u7edf\u8ba1\u5339\u914d\u68c0\u7d22\u89c4\u5219\u7684\u7269\u54c1\u6570\u91cf.md",sourceDirName:"leetcode/1701-1800",slug:"/leetcode/1701-1800/\u7edf\u8ba1\u5339\u914d\u68c0\u7d22\u89c4\u5219\u7684\u7269\u54c1\u6570\u91cf",permalink:"/docs/leetcode/1701-1800/\u7edf\u8ba1\u5339\u914d\u68c0\u7d22\u89c4\u5219\u7684\u7269\u54c1\u6570\u91cf",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1773,frontMatter:{},sidebar:"journal",previous:{title:"1769.\u79fb\u52a8\u6240\u6709\u7403\u5230\u6bcf\u4e2a\u76d2\u5b50\u6240\u9700\u7684\u6700\u5c0f\u64cd\u4f5c\u6570",permalink:"/docs/leetcode/1701-1800/\u79fb\u52a8\u6240\u6709\u7403\u5230\u6bcf\u4e2a\u76d2\u5b50\u6240\u9700\u7684\u6700\u5c0f\u64cd\u4f5c\u6570"},next:{title:"1774.\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c",permalink:"/docs/leetcode/1701-1800/\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1773\u7edf\u8ba1\u5339\u914d\u68c0\u7d22\u89c4\u5219\u7684\u7269\u54c1\u6570\u91cf",children:"1773.\u7edf\u8ba1\u5339\u914d\u68c0\u7d22\u89c4\u5219\u7684\u7269\u54c1\u6570\u91cf"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/count-items-matching-a-rule",children:"1773.\u7edf\u8ba1\u5339\u914d\u68c0\u7d22\u89c4\u5219\u7684\u7269\u54c1\u6570\u91cf"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7edf\u8ba1\u5e76\u8fd4\u56de \u5339\u914d\u68c0\u7d22\u89c4\u5219\u7684\u7269\u54c1\u6570\u91cf \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-29"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a30.2MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'class Solution {\npublic:\n    int countMatches(vector<vector<string>>& items, string ruleKey, string ruleValue) {\n        return accumulate(items.begin(), items.end(), 0, [&](int sum, vector<string> &s){\n            int idx = ruleKey == "type" ? 0 : ruleKey == "color" ? 1 : 2;\n            if (s[idx] == ruleValue) sum += 1;\n            return sum;\n        });\n    }\n};\n'})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(30758);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);