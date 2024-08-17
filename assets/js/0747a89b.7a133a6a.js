"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[15393],{20685:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var t=i(86070),s=i(25710);const d={},c="838.\u63a8\u591a\u7c73\u8bfa",o={id:"leetcode/801-900/\u63a8\u591a\u7c73\u8bfa",title:"838.\u63a8\u591a\u7c73\u8bfa",description:"\u94fe\u63a5\uff1a838.\u63a8\u591a\u7c73\u8bfa",source:"@site/docs/leetcode/801-900/838.\u63a8\u591a\u7c73\u8bfa.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u63a8\u591a\u7c73\u8bfa",permalink:"/docs/leetcode/801-900/\u63a8\u591a\u7c73\u8bfa",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:838,frontMatter:{},sidebar:"journal",previous:{title:"837.\u65b021\u70b9",permalink:"/docs/leetcode/801-900/\u65b021\u70b9"},next:{title:"839.\u76f8\u4f3c\u5b57\u7b26\u4e32\u7ec4",permalink:"/docs/leetcode/801-900/\u76f8\u4f3c\u5b57\u7b26\u4e32\u7ec4"}},r={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"838\u63a8\u591a\u7c73\u8bfa",children:"838.\u63a8\u591a\u7c73\u8bfa"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/push-dominoes",children:"838.\u63a8\u591a\u7c73\u8bfa"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u8868\u793a\u6700\u7ec8\u72b6\u6001\u7684\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-21"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.3MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp, \u7edf\u8ba1\u6bcf\u79d2\u949f\u7684\u72b6\u6001\u8fdb\u884c\u63a8\u5bfc\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    string pushDominoes(string dominoes) {\n        int n = dominoes.size(), change, cnt = 0;\n        string dp[2];\n        dp[0] = dominoes;\n        do {\n            change = 0;\n            int idx = cnt & 1, nidx = (cnt + 1) & 1;\n            dp[nidx] = dp[idx];\n            for (int i = 0; i < n; i++) {\n                if (dp[idx][i] == '.') {\n                    if (i > 0 && dp[idx][i - 1] == 'R' && i < n - 1 &&\n                        dp[idx][i + 1] == 'L')\n                        dp[idx][i] = '.';\n                    else if (i > 0 && dp[idx][i - 1] == 'R') {\n                        change = 1;\n                        dp[nidx][i] = 'R';\n                    } else if (i < n - 1 && dp[idx][i + 1] == 'L') {\n                        change = 1;\n                        dp[nidx][i] = 'L';\n                    } else if (i > 0 && dp[idx][i - 1] == '.' ||\n                               i < n - 1 && dp[idx][i + 1] == '.')\n                        dp[idx][i] = '.';\n                }\n            }\n            cnt++;\n        } while (change);\n        return dp[cnt & 1];\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>o});var t=i(30758);const s={},d=t.createContext(s);function c(n){const e=t.useContext(d);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);