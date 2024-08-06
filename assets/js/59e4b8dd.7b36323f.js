"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[97256],{32889:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var t=i(86070),s=i(25710);const r={},l="70.\u722c\u697c\u68af",c={id:"leetcode/1-100/\u722c\u697c\u68af",title:"70.\u722c\u697c\u68af",description:"\u94fe\u63a5\uff1a70.\u722c\u697c\u68af",source:"@site/docs/leetcode/1-100/70.\u722c\u697c\u68af.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u722c\u697c\u68af",permalink:"/docs/leetcode/1-100/\u722c\u697c\u68af",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:70,frontMatter:{},sidebar:"journal",previous:{title:"69.x\u7684\u5e73\u65b9\u6839",permalink:"/docs/leetcode/1-100/x\u7684\u5e73\u65b9\u6839"},next:{title:"71.\u7b80\u5316\u8def\u5f84",permalink:"/docs/leetcode/1-100/\u7b80\u5316\u8def\u5f84"}},d={},p=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2},{value:"\u9898\u89e3 4 - python",id:"\u9898\u89e3-4---python",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"70\u722c\u697c\u68af",children:"70.\u722c\u697c\u68af"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/climbing-stairs",children:"70.\u722c\u697c\u68af"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8bb0\u5fc6\u5316\u641c\u7d22\u3001\u6570\u5b66\u3001\u52a8\u6001\u89c4\u5212",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5047\u8bbe\u4f60\u6b63\u5728\u722c\u697c\u68af\u3002\u9700\u8981 n \u9636\u4f60\u624d\u80fd\u5230\u8fbe\u697c\u9876\u3002\u6bcf\u6b21\u4f60\u53ef\u4ee5\u722c 1 \u6216 2 \u4e2a\u53f0\u9636\u3002\u4f60\u6709\u591a\u5c11\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u53ef\u4ee5\u722c\u5230\u697c\u9876\u5462\uff1f"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-13"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a32.3MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i]=dp[i-1]+dp[i-2]\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function climbStairs(n: number): number {\n  const dp = [1, 1];\n  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];\n  return dp[n];\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-03"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function climbStairs(n: number): number {\n  const dp = new Array(n + 1);\n  dp[0] = dp[1] = 1;\n  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];\n  return dp[n];\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-21"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int climbStairs(int n) {\n        vector<int> dp(n + 1, 0);\n        dp[0] = dp[1] = 1;\n        for (int i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];\n        return dp[n];\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-4---python",children:"\u9898\u89e3 4 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-10"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.67MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def climbStairs(self, n: int) -> int:\n        if n == 1: return 1\n        dp = [0] * (n + 1)\n        dp[1] = 1\n        dp[2] = 2\n        for i in range(3, n + 1):\n            dp[i] = dp[i - 1] + dp[i - 2]\n        print(dp)\n        return dp[n]\n"})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var t=i(30758);const s={},r=t.createContext(s);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);