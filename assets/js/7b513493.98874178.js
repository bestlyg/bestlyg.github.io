"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[62923],{37086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"leetcode/601-700/\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570","title":"673.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570","description":"\u94fe\u63a5\uff1a673.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570","source":"@site/docs/leetcode/601-700/673.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570.md","sourceDirName":"leetcode/601-700","slug":"/leetcode/601-700/\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570","permalink":"/docs/leetcode/601-700/\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":673,"frontMatter":{},"sidebar":"journal","previous":{"title":"670.\u6700\u5927\u4ea4\u6362","permalink":"/docs/leetcode/601-700/\u6700\u5927\u4ea4\u6362"},"next":{"title":"674.\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217","permalink":"/docs/leetcode/601-700/\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217"}}');var l=t(25105),i=t(8556);const r={},c="673.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570",a={},o=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"673\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570",children:"673.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/number-of-longest-increasing-subsequence",children:"673.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u72b6\u6570\u7ec4\u3001\u7ebf\u6bb5\u6811\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u672a\u6392\u5e8f\u7684\u6574\u6570\u6570\u7ec4\uff0c\u627e\u5230\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-20"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.5MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"function findNumberOfLIS(nums: number[]): number {\n  const n = nums.length;\n  const dp = new Array(n).fill(0).map(_ => ({ val: 1, cnt: 1 }));\n  let maxVal = 1;\n  let maxCnt = 0;\n  for (let i = 0; i < n; i++) {\n    const num = nums[i];\n    for (let j = 0; j < i; j++) {\n      if (nums[j] < num) {\n        const len = dp[j].val + 1;\n        if (dp[i].val < len) {\n          dp[i].val = len;\n          dp[i].cnt = dp[j].cnt;\n        } else if (dp[i].val === len) dp[i].cnt += dp[j].cnt;\n      }\n    }\n    if (maxVal < dp[i].val) {\n      maxVal = Math.max(maxVal, dp[i].val);\n      maxCnt = dp[i].cnt;\n    } else if (maxVal === dp[i].val) maxCnt += dp[i].cnt;\n  }\n  return maxCnt;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(58101);const l={},i=s.createContext(l);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);