"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[38893],{44409:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>m});var s=i(86070),l=i(25710);const t={},r="908.\u6700\u5c0f\u5dee\u503cI",c={id:"leetcode/901-1000/\u6700\u5c0f\u5dee\u503cI",title:"908.\u6700\u5c0f\u5dee\u503cI",description:"\u94fe\u63a5\uff1a908.\u6700\u5c0f\u5dee\u503cI",source:"@site/docs/leetcode/901-1000/908.\u6700\u5c0f\u5dee\u503cI.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u6700\u5c0f\u5dee\u503cI",permalink:"/docs/leetcode/901-1000/\u6700\u5c0f\u5dee\u503cI",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:908,frontMatter:{},sidebar:"journal",previous:{title:"907.\u5b50\u6570\u7ec4\u7684\u6700\u5c0f\u503c\u4e4b\u548c",permalink:"/docs/leetcode/901-1000/\u5b50\u6570\u7ec4\u7684\u6700\u5c0f\u503c\u4e4b\u548c"},next:{title:"909.\u86c7\u68af\u68cb",permalink:"/docs/leetcode/901-1000/\u86c7\u68af\u68cb"}},o={},m=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - go",id:"\u9898\u89e3-2---go",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"908\u6700\u5c0f\u5dee\u503ci",children:"908.\u6700\u5c0f\u5dee\u503cI"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/smallest-range-i",children:"908.\u6700\u5c0f\u5dee\u503cI"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5728\u5bf9 nums \u4e2d\u7684\u6bcf\u4e2a\u7d22\u5f15\u6700\u591a\u5e94\u7528\u4e00\u6b21\u4e0a\u8ff0\u64cd\u4f5c\u540e\uff0c\u8fd4\u56de nums \u7684\u6700\u4f4e \u5206\u6570 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-23"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u83b7\u5f97\u6700\u5927\u6700\u5c0f\u503c\u8fdb\u884c\u6bd4\u8f83\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int smallestRangeI(vector<int>& nums, int k) {\n        sort(nums.begin(), nums.end());\n        int n = nums.size(), nmin = nums[0], nmax = nums[n - 1],\n            mid = (nmax + nmin) / 2;\n        if (mid - k > nmin)\n            nmin += k;\n        else\n            nmin = mid;\n        if (mid + k < nmax)\n            nmax -= k;\n        else\n            nmax = mid;\n        return nmax - nmin;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---go",children:"\u9898\u89e3 2 - go"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-04-30"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ago"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u67e5\u770b\u6700\u5927\u6700\u5c0f\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"func smallestRangeI(nums []int, k int) int {\n  n := len(nums)\n  if n == 1 {\n    return 0\n  }\n  var (\n    min = nums[0]\n    max = nums[0]\n  )\n  for _, val := range nums {\n    if min > val {\n      min = val\n    }\n    if max < val {\n      max = val\n    }\n  }\n  mid := (min + max) >> 1\n  if mid-min <= k {\n    min = mid\n  } else {\n    min += k\n  }\n  if max-mid <= k {\n    max = mid\n  } else {\n    max -= k\n  }\n  return max - min\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var s=i(30758);const l={},t=s.createContext(l);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);