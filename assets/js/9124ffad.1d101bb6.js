"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[67076],{89839:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=s(86070),c=s(25710);const r={},t="1475.\u5546\u54c1\u6298\u6263\u540e\u7684\u6700\u7ec8\u4ef7\u683c",l={id:"leetcode/1401-1500/\u5546\u54c1\u6298\u6263\u540e\u7684\u6700\u7ec8\u4ef7\u683c",title:"1475.\u5546\u54c1\u6298\u6263\u540e\u7684\u6700\u7ec8\u4ef7\u683c",description:"\u94fe\u63a5\uff1a1475.\u5546\u54c1\u6298\u6263\u540e\u7684\u6700\u7ec8\u4ef7\u683c",source:"@site/docs/leetcode/1401-1500/1475.\u5546\u54c1\u6298\u6263\u540e\u7684\u6700\u7ec8\u4ef7\u683c.md",sourceDirName:"leetcode/1401-1500",slug:"/leetcode/1401-1500/\u5546\u54c1\u6298\u6263\u540e\u7684\u6700\u7ec8\u4ef7\u683c",permalink:"/docs/leetcode/1401-1500/\u5546\u54c1\u6298\u6263\u540e\u7684\u6700\u7ec8\u4ef7\u683c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1475,frontMatter:{},sidebar:"journal",previous:{title:"1470.\u91cd\u65b0\u6392\u5217\u6570\u7ec4",permalink:"/docs/leetcode/1401-1500/\u91cd\u65b0\u6392\u5217\u6570\u7ec4"},next:{title:"1480.\u4e00\u7ef4\u6570\u7ec4\u7684\u52a8\u6001\u548c",permalink:"/docs/leetcode/1401-1500/\u4e00\u7ef4\u6570\u7ec4\u7684\u52a8\u6001\u548c"}},p={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"1475\u5546\u54c1\u6298\u6263\u540e\u7684\u6700\u7ec8\u4ef7\u683c",children:"1475.\u5546\u54c1\u6298\u6263\u540e\u7684\u6700\u7ec8\u4ef7\u683c"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop",children:"1475.\u5546\u54c1\u6298\u6263\u540e\u7684\u6700\u7ec8\u4ef7\u683c"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6570\u7ec4\u3001\u5355\u8c03\u6808",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u7b2c i \u4e2a\u5143\u7d20\u662f\u6298\u6263\u540e\u4f60\u8d2d\u4e70\u5546\u54c1 i \u6700\u7ec8\u9700\u8981\u652f\u4ed8\u7684\u4ef7\u683c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-01"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.8MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5355\u8c03\u6808\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> finalPrices(vector<int>& prices) {\n        stack<int> s;\n        vector<int> ans(prices.begin(), prices.end());\n        for (int i = 0; i < prices.size(); i++) {\n            while (s.size() && prices[s.top()] >= prices[i]) {\n                int prev = s.top();\n                s.pop();\n                ans[prev] -= prices[i];\n            }\n            s.push(i);\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-01"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5355\u8c03\u6808\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"impl Solution {\n    pub fn final_prices(prices: Vec<i32>) -> Vec<i32> {\n        let mut s = Vec::<usize>::new();\n        let mut prices = prices;\n        for i in 0..prices.len() {\n            while !s.is_empty() && prices[*s.last().unwrap()] >= prices[i] {\n                let prev = s.pop().unwrap();\n                prices[prev] -= prices[i];\n            }\n            s.push(i);\n        }\n        prices\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var i=s(30758);const c={},r=i.createContext(c);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);