"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[62923],{33282:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var s=t(86070),i=t(25710);const l={},c="673.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570",r={id:"leetcode/601-700/\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570",title:"673.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570",description:"\u94fe\u63a5\uff1a673.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570",source:"@site/docs/leetcode/601-700/673.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570",permalink:"/web/site/docs/leetcode/601-700/\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:673,frontMatter:{},sidebar:"journal",previous:{title:"670.\u6700\u5927\u4ea4\u6362",permalink:"/web/site/docs/leetcode/601-700/\u6700\u5927\u4ea4\u6362"},next:{title:"674.\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217",permalink:"/web/site/docs/leetcode/601-700/\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217"}},a={},o=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"673\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570",children:"673.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/number-of-longest-increasing-subsequence",children:"673.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u72b6\u6570\u7ec4\u3001\u7ebf\u6bb5\u6811\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u672a\u6392\u5e8f\u7684\u6574\u6570\u6570\u7ec4\uff0c\u627e\u5230\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-20"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.5MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"function findNumberOfLIS(nums: number[]): number {\n  const n = nums.length;\n  const dp = new Array(n).fill(0).map(_ => ({ val: 1, cnt: 1 }));\n  let maxVal = 1;\n  let maxCnt = 0;\n  for (let i = 0; i < n; i++) {\n    const num = nums[i];\n    for (let j = 0; j < i; j++) {\n      if (nums[j] < num) {\n        const len = dp[j].val + 1;\n        if (dp[i].val < len) {\n          dp[i].val = len;\n          dp[i].cnt = dp[j].cnt;\n        } else if (dp[i].val === len) dp[i].cnt += dp[j].cnt;\n      }\n    }\n    if (maxVal < dp[i].val) {\n      maxVal = Math.max(maxVal, dp[i].val);\n      maxCnt = dp[i].cnt;\n    } else if (maxVal === dp[i].val) maxCnt += dp[i].cnt;\n  }\n  return maxCnt;\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var s=t(30758);const i={},l=s.createContext(i);function c(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);