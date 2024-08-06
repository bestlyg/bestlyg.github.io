"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[16053],{2150:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=i(86070),c=i(25710);const l={},t="LCP06.\u62ff\u786c\u5e01",r={id:"leetcode/LCP/LCP06.\u62ff\u786c\u5e01",title:"LCP06.\u62ff\u786c\u5e01",description:"\u94fe\u63a5\uff1aLCP06.\u62ff\u786c\u5e01",source:"@site/docs/leetcode/LCP/LCP06.\u62ff\u786c\u5e01.md",sourceDirName:"leetcode/LCP",slug:"/leetcode/LCP/LCP06.\u62ff\u786c\u5e01",permalink:"/docs/leetcode/LCP/LCP06.\u62ff\u786c\u5e01",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u9762\u8bd5\u989817.21.\u76f4\u65b9\u56fe\u7684\u6c34\u91cf",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989817.21.\u76f4\u65b9\u56fe\u7684\u6c34\u91cf"},next:{title:"LCP07.\u4f20\u9012\u4fe1\u606f",permalink:"/docs/leetcode/LCP/LCP07.\u4f20\u9012\u4fe1\u606f"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"lcp06\u62ff\u786c\u5e01",children:"LCP06.\u62ff\u786c\u5e01"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/na-ying-bi",children:"LCP06.\u62ff\u786c\u5e01"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u684c\u4e0a\u6709 n \u5806\u529b\u6263\u5e01\uff0c\u6bcf\u5806\u7684\u6570\u91cf\u4fdd\u5b58\u5728\u6570\u7ec4 coins \u4e2d\u3002\u6211\u4eec\u6bcf\u6b21\u53ef\u4ee5\u9009\u62e9\u4efb\u610f\u4e00\u5806\uff0c\u62ff\u8d70\u5176\u4e2d\u7684\u4e00\u679a\u6216\u8005\u4e24\u679a\uff0c\u6c42\u62ff\u5b8c\u6240\u6709\u529b\u6263\u5e01\u7684\u6700\u5c11\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-20"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.17MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minCount(vector<int>& coins) {\n        int res = 0;\n        for (auto &coin : coins) res += ceil(1.0 * coin / 2);\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-20"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def minCount(self, coins: List[int]) -> int:\n        return sum(ceil(coin / 2) for coin in coins)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-20"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn min_count(coins: Vec<i32>) -> i32 {\n        coins\n            .into_iter()\n            .map(|coin| (coin as f64 / 2.0).ceil() as i32)\n            .sum()\n    }\n}\n"})})]})}function h(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>r});var s=i(30758);const c={},l=s.createContext(c);function t(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);