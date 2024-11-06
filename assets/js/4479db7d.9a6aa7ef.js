"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[65504],{80213:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(86070),i=t(31503);const s={},o="3176.\u6c42\u51fa\u6700\u957f\u597d\u5b50\u5e8f\u5217I",l={id:"leetcode/3101-3200/\u6c42\u51fa\u6700\u957f\u597d\u5b50\u5e8f\u5217I",title:"3176.\u6c42\u51fa\u6700\u957f\u597d\u5b50\u5e8f\u5217I",description:"\u94fe\u63a5\uff1a3176.\u6c42\u51fa\u6700\u957f\u597d\u5b50\u5e8f\u5217I",source:"@site/docs/leetcode/3101-3200/3176.\u6c42\u51fa\u6700\u957f\u597d\u5b50\u5e8f\u5217I.md",sourceDirName:"leetcode/3101-3200",slug:"/leetcode/3101-3200/\u6c42\u51fa\u6700\u957f\u597d\u5b50\u5e8f\u5217I",permalink:"/docs/leetcode/3101-3200/\u6c42\u51fa\u6700\u957f\u597d\u5b50\u5e8f\u5217I",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3176,frontMatter:{},sidebar:"journal",previous:{title:"3175.\u627e\u5230\u8fde\u7eed\u8d62K\u573a\u6bd4\u8d5b\u7684\u7b2c\u4e00\u4f4d\u73a9\u5bb6",permalink:"/docs/leetcode/3101-3200/\u627e\u5230\u8fde\u7eed\u8d62K\u573a\u6bd4\u8d5b\u7684\u7b2c\u4e00\u4f4d\u73a9\u5bb6"},next:{title:"3180.\u6267\u884c\u64cd\u4f5c\u53ef\u83b7\u5f97\u7684\u6700\u5927\u603b\u5956\u52b1I",permalink:"/docs/leetcode/3101-3200/\u6267\u884c\u64cd\u4f5c\u53ef\u83b7\u5f97\u7684\u6700\u5927\u603b\u5956\u52b1I"}},c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"3176\u6c42\u51fa\u6700\u957f\u597d\u5b50\u5e8f\u5217i",children:"3176.\u6c42\u51fa\u6700\u957f\u597d\u5b50\u5e8f\u5217I"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/find-the-maximum-length-of-a-good-subsequence-i",children:"3176.\u6c42\u51fa\u6700\u957f\u597d\u5b50\u5e8f\u5217I"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u5220\u9664\u6240\u6709\u6570\u5b57\u5b57\u7b26\u4ee5\u540e\u5269\u4e0b\u7684\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-09-06"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a7064ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.84MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][k]\u8868\u793a\u4ee5i\u4e0b\u6807\u4e3a\u6700\u540e\u4e00\u4e2a\u5143\u7d20\uff0c\u5728\u4e0d\u8d85\u8fc7k\u4e2a\u7ea6\u675f\u7684\u60c5\u51b5\u4e0b\u7684\u6700\u5927\u957f\u5ea6"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maximumLength(self, nums: List[int], nmax: int) -> int:\n        n = len(nums)\n        dp = [[1 for _ in range(nmax + 1)] for _ in range(n + 1)] \n        res = 0\n        for i in range(1, n + 1):\n            for k in range(0, nmax + 1):\n                for j in range(1, i):\n                    if nums[i - 1] == nums[j - 1]:\n                        dp[i][k] = max(dp[i][k], dp[j][k] + 1)\n                    elif k > 0:\n                        dp[i][k] = max(dp[i][k], dp[j][k - 1] + 1)\n                res = max(res, dp[i][k])\n        return res\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(30758);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);