"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[58295],{50264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/1701-1800/\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c","title":"1774.\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c","description":"\u94fe\u63a5\uff1a1774.\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c","source":"@site/docs/leetcode/1701-1800/1774.\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c.md","sourceDirName":"leetcode/1701-1800","slug":"/leetcode/1701-1800/\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c","permalink":"/docs/leetcode/1701-1800/\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1774,"frontMatter":{},"sidebar":"journal","previous":{"title":"1773.\u7edf\u8ba1\u5339\u914d\u68c0\u7d22\u89c4\u5219\u7684\u7269\u54c1\u6570\u91cf","permalink":"/docs/leetcode/1701-1800/\u7edf\u8ba1\u5339\u914d\u68c0\u7d22\u89c4\u5219\u7684\u7269\u54c1\u6570\u91cf"},"next":{"title":"1775.\u901a\u8fc7\u6700\u5c11\u64cd\u4f5c\u6b21\u6570\u4f7f\u6570\u7ec4\u7684\u548c\u76f8\u7b49","permalink":"/docs/leetcode/1701-1800/\u901a\u8fc7\u6700\u5c11\u64cd\u4f5c\u6b21\u6570\u4f7f\u6570\u7ec4\u7684\u548c\u76f8\u7b49"}}');var r=t(25105),c=t(8556);const o={},i="1774.\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c",l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1774\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c",children:"1774.\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/closest-dessert-cost",children:"1774.\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u56de\u6eaf",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u6700\u63a5\u8fd1 target \u7684\u751c\u70b9\u6210\u672c\u3002\u5982\u679c\u6709\u591a\u79cd\u65b9\u6848\uff0c\u8fd4\u56de \u6210\u672c\u76f8\u5bf9\u8f83\u4f4e \u7684\u4e00\u79cd\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-04"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.4MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int closestCost(vector<int>& baseCosts, vector<int>& toppingCosts, int target) {\n        int ans = baseCosts[0], n = toppingCosts.size();\n        function<void(int, int)> dfs = [&](int cur, int idx) {\n            if (abs(cur - target) < abs(ans - target) || abs(cur - target) == abs(ans - target) && cur < ans) ans = cur;\n            if (idx == n) return;\n            dfs(cur, idx + 1);\n            dfs(cur + toppingCosts[idx], idx + 1);\n            dfs(cur + toppingCosts[idx] * 2, idx + 1);\n        };\n        for (auto &cost : baseCosts) dfs(cost, 0);\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(58101);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);