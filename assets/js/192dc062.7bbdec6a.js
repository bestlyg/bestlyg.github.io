"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[63174],{24206:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var t=s(86070),i=s(31503);const r={},l="2535.\u6570\u7ec4\u5143\u7d20\u548c\u4e0e\u6570\u5b57\u548c\u7684\u7edd\u5bf9\u5dee",c={id:"leetcode/2501-2600/\u6570\u7ec4\u5143\u7d20\u548c\u4e0e\u6570\u5b57\u548c\u7684\u7edd\u5bf9\u5dee",title:"2535.\u6570\u7ec4\u5143\u7d20\u548c\u4e0e\u6570\u5b57\u548c\u7684\u7edd\u5bf9\u5dee",description:"\u94fe\u63a5\uff1a2535.\u6570\u7ec4\u5143\u7d20\u548c\u4e0e\u6570\u5b57\u548c\u7684\u7edd\u5bf9\u5dee",source:"@site/docs/leetcode/2501-2600/2535.\u6570\u7ec4\u5143\u7d20\u548c\u4e0e\u6570\u5b57\u548c\u7684\u7edd\u5bf9\u5dee.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u6570\u7ec4\u5143\u7d20\u548c\u4e0e\u6570\u5b57\u548c\u7684\u7edd\u5bf9\u5dee",permalink:"/docs/leetcode/2501-2600/\u6570\u7ec4\u5143\u7d20\u548c\u4e0e\u6570\u5b57\u548c\u7684\u7edd\u5bf9\u5dee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2535,frontMatter:{},sidebar:"journal",previous:{title:"2532.\u8fc7\u6865\u7684\u65f6\u95f4",permalink:"/docs/leetcode/2501-2600/\u8fc7\u6865\u7684\u65f6\u95f4"},next:{title:"2536.\u5b50\u77e9\u9635\u5143\u7d20\u52a01",permalink:"/docs/leetcode/2501-2600/\u5b50\u77e9\u9635\u5143\u7d20\u52a01"}},u={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"2535\u6570\u7ec4\u5143\u7d20\u548c\u4e0e\u6570\u5b57\u548c\u7684\u7edd\u5bf9\u5dee",children:"2535.\u6570\u7ec4\u5143\u7d20\u548c\u4e0e\u6570\u5b57\u548c\u7684\u7edd\u5bf9\u5dee"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/difference-between-element-sum-and-digit-sum-of-an-array",children:"2535.\u6570\u7ec4\u5143\u7d20\u548c\u4e0e\u6570\u5b57\u548c\u7684\u7edd\u5bf9\u5dee"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de \u5143\u7d20\u548c \u4e0e \u6570\u5b57\u548c \u7684\u7edd\u5bf9\u5dee\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-15"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.2MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int differenceOfSum(vector<int>& nums) {\n        int num1 = 0, num2 = 0;\n        for (int num : nums) num1 += num, num2 += comp(num);\n        return abs(num1 - num2);\n    }\n    int comp(int num) {\n        int ans = 0;\n        for (; num; num /= 10) ans += num % 10;\n        return ans;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-15"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn difference_of_sum(nums: Vec<i32>) -> i32 {\n        let mut ans = 0;\n        for num in nums {\n            ans += num;\n            ans -= Solution::comp(num);\n        }\n        ans.abs()\n    }\n    fn comp(num: i32) -> i32 {\n        let mut num = num;\n        let mut ans = 0;\n        while num > 0 {\n            ans += num % 10;\n            num /= 10;\n        }\n        ans\n    }\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-09-26"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a82ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.44MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def differenceOfSum(self, nums: List[int]) -> int:\n        def t(num: int) -> int:\n            return sum(int(v) for v in list(str(num)))\n        return sum(nums) - sum(t(num) for num in nums)\n"})})]})}function m(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var t=s(30758);const i={},r=t.createContext(i);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);