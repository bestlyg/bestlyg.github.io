"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[19459],{96187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(86070),r=t(25710);const i={},o="1694.\u91cd\u65b0\u683c\u5f0f\u5316\u7535\u8bdd\u53f7\u7801",c={id:"leetcode/1601-1700/\u91cd\u65b0\u683c\u5f0f\u5316\u7535\u8bdd\u53f7\u7801",title:"1694.\u91cd\u65b0\u683c\u5f0f\u5316\u7535\u8bdd\u53f7\u7801",description:"\u94fe\u63a5\uff1a1694.\u91cd\u65b0\u683c\u5f0f\u5316\u7535\u8bdd\u53f7\u7801",source:"@site/docs/leetcode/1601-1700/1694.\u91cd\u65b0\u683c\u5f0f\u5316\u7535\u8bdd\u53f7\u7801.md",sourceDirName:"leetcode/1601-1700",slug:"/leetcode/1601-1700/\u91cd\u65b0\u683c\u5f0f\u5316\u7535\u8bdd\u53f7\u7801",permalink:"/docs/leetcode/1601-1700/\u91cd\u65b0\u683c\u5f0f\u5316\u7535\u8bdd\u53f7\u7801",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1694,frontMatter:{},sidebar:"journal",previous:{title:"1691.\u5806\u53e0\u957f\u65b9\u4f53\u7684\u6700\u5927\u9ad8\u5ea6",permalink:"/docs/leetcode/1601-1700/\u5806\u53e0\u957f\u65b9\u4f53\u7684\u6700\u5927\u9ad8\u5ea6"},next:{title:"1696.\u8df3\u8dc3\u6e38\u620fVI",permalink:"/docs/leetcode/1601-1700/\u8df3\u8dc3\u6e38\u620fVI"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1694\u91cd\u65b0\u683c\u5f0f\u5316\u7535\u8bdd\u53f7\u7801",children:"1694.\u91cd\u65b0\u683c\u5f0f\u5316\u7535\u8bdd\u53f7\u7801"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/reformat-phone-number",children:"1694.\u91cd\u65b0\u683c\u5f0f\u5316\u7535\u8bdd\u53f7\u7801"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u683c\u5f0f\u5316\u540e\u7684\u7535\u8bdd\u53f7\u7801\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-01"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.9MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    string reformatNumber(string number) {\n        string tmp = \"\", ans = \"\";\n        for (auto &c : number) {\n            if (c != '-' && c != ' ') tmp += c;\n        }\n        int len = tmp.size(), idx = 0;\n        while (len > 4) {\n            ans += to_string(tmp[idx++] - '0') + to_string(tmp[idx++] - '0') + to_string(tmp[idx++] - '0') + \"-\";\n            len -= 3;\n        }\n        if (len == 4) {\n            ans += to_string(tmp[idx++] - '0') + to_string(tmp[idx++] - '0') + \"-\" + to_string(tmp[idx++] - '0') + to_string(tmp[idx++] - '0');\n        } else {\n            while (idx < tmp.size()) ans += to_string(tmp[idx++] - '0');\n        }\n        return ans;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(30758);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);