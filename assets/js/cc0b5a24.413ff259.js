"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[68595],{48121:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(86070),c=t(31503);const s={},r="1240.\u94fa\u74f7\u7816",l={id:"leetcode/1201-1300/\u94fa\u74f7\u7816",title:"1240.\u94fa\u74f7\u7816",description:"\u94fe\u63a5\uff1a1240.\u94fa\u74f7\u7816",source:"@site/docs/leetcode/1201-1300/1240.\u94fa\u74f7\u7816.md",sourceDirName:"leetcode/1201-1300",slug:"/leetcode/1201-1300/\u94fa\u74f7\u7816",permalink:"/docs/leetcode/1201-1300/\u94fa\u74f7\u7816",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1240,frontMatter:{},sidebar:"journal",previous:{title:"1239.\u4e32\u8054\u5b57\u7b26\u4e32\u7684\u6700\u5927\u957f\u5ea6",permalink:"/docs/leetcode/1201-1300/\u4e32\u8054\u5b57\u7b26\u4e32\u7684\u6700\u5927\u957f\u5ea6"},next:{title:"1247.\u4ea4\u6362\u5b57\u7b26\u4f7f\u5f97\u5b57\u7b26\u4e32\u76f8\u540c",permalink:"/docs/leetcode/1201-1300/\u4ea4\u6362\u5b57\u7b26\u4f7f\u5f97\u5b57\u7b26\u4e32\u76f8\u540c"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"1240\u94fa\u74f7\u7816",children:"1240.\u94fa\u74f7\u7816"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/tiling-a-rectangle-with-the-fewest-squares",children:"1240.\u94fa\u74f7\u7816"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u56de\u6eaf",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u623f\u5b50\u7684\u5ba2\u5385\u5927\u5c0f\u4e3a\xa0n\xa0x m\uff0c\u4e3a\u4fdd\u6301\u6781\u7b80\u7684\u98ce\u683c\uff0c\u9700\u8981\u4f7f\u7528\u5c3d\u53ef\u80fd\u5c11\u7684 \u6b63\u65b9\u5f62 \u74f7\u7816\u6765\u94fa\u76d6\u5730\u9762\u3002\u5047\u8bbe\u6b63\u65b9\u5f62\u74f7\u7816\u7684\u89c4\u683c\u4e0d\u9650\uff0c\u8fb9\u957f\u90fd\u662f\u6574\u6570\u3002\u8bf7\u4f60\u5e2e\u8bbe\u8ba1\u5e08\u8ba1\u7b97\u4e00\u4e0b\uff0c\u6700\u5c11\u9700\u8981\u7528\u5230\u591a\u5c11\u5757\u65b9\u5f62\u74f7\u7816\uff1f\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-08"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\uff0c\u50a8\u5b58\u5df2\u7ecf\u904d\u5386\u8fc7\u7684\u70b9\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int tilingRectangle(int n, int m) {\n        int res = INT_MAX, list[20] = {0};\n        function<void(int, int, int)> dfs = [&](int i, int j, int cnt) {\n            if (i == n) {\n                res = min(res, cnt);\n            } else if (j == m) {\n                dfs(i + 1, 0, cnt);\n            } else if (list[i] & (1 << j)) {\n                dfs(i, j + 1, cnt);\n            } else if (cnt < res) {\n                int ncnt = 0, mcnt = 0;\n                for (int p = i; p < n && !(list[p] & (1 << j)); p++) ncnt++;\n                for (int p = j; p < m && !(list[i] & (1 << p)); p++) mcnt++;\n                int nmcnt = min(ncnt, mcnt);\n                for (int ccnt = nmcnt; ccnt >= 1; ccnt--) {\n                    for (int p = i; p < i + ccnt; p++) list[p] |= (((1 << ccnt) - 1) << j);\n                    dfs(i, j + ccnt, cnt + 1);\n                    for (int p = i; p < i + ccnt; p++) list[p] &= ~(((1 << ccnt) - 1) << j);\n                }\n            }\n        };\n        dfs(0, 0, 0);\n        return res;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>l});var i=t(30758);const c={},s=i.createContext(c);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);