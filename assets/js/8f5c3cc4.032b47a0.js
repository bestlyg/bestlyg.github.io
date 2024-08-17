"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[35306],{6504:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=s(86070),i=s(25710);const t={},l="1250.\u68c0\u67e5\u300c\u597d\u6570\u7ec4\u300d",c={id:"leetcode/1201-1300/\u68c0\u67e5\u300c\u597d\u6570\u7ec4\u300d",title:"1250.\u68c0\u67e5\u300c\u597d\u6570\u7ec4\u300d",description:"\u94fe\u63a5\uff1a1250.\u68c0\u67e5\u300c\u597d\u6570\u7ec4\u300d",source:"@site/docs/leetcode/1201-1300/1250.\u68c0\u67e5\u300c\u597d\u6570\u7ec4\u300d.md",sourceDirName:"leetcode/1201-1300",slug:"/leetcode/1201-1300/\u68c0\u67e5\u300c\u597d\u6570\u7ec4\u300d",permalink:"/docs/leetcode/1201-1300/\u68c0\u67e5\u300c\u597d\u6570\u7ec4\u300d",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1250,frontMatter:{},sidebar:"journal",previous:{title:"1249.\u79fb\u9664\u65e0\u6548\u7684\u62ec\u53f7",permalink:"/docs/leetcode/1201-1300/\u79fb\u9664\u65e0\u6548\u7684\u62ec\u53f7"},next:{title:"1252.\u5947\u6570\u503c\u5355\u5143\u683c\u7684\u6570\u76ee",permalink:"/docs/leetcode/1201-1300/\u5947\u6570\u503c\u5355\u5143\u683c\u7684\u6570\u76ee"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"1250\u68c0\u67e5\u597d\u6570\u7ec4",children:"1250.\u68c0\u67e5\u300c\u597d\u6570\u7ec4\u300d"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/check-if-it-is-a-good-array",children:"1250.\u68c0\u67e5\u300c\u597d\u6570\u7ec4\u300d"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66\u3001\u6570\u8bba",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6b63\u6574\u6570\u6570\u7ec4 nums\uff0c\u4f60\u9700\u8981\u4ece\u4e2d\u4efb\u9009\u4e00\u4e9b\u5b50\u96c6\uff0c\u7136\u540e\u5c06\u5b50\u96c6\u4e2d\u6bcf\u4e00\u4e2a\u6570\u4e58\u4ee5\u4e00\u4e2a \u4efb\u610f\u6574\u6570\uff0c\u5e76\u6c42\u51fa\u4ed6\u4eec\u7684\u548c\u3002\u5047\u5982\u8be5\u548c\u7ed3\u679c\u4e3a\xa01\uff0c\u90a3\u4e48\u539f\u6570\u7ec4\u5c31\u662f\u4e00\u4e2a\u300c\u597d\u6570\u7ec4\u300d\uff0c\u5219\u8fd4\u56de True\uff1b\u5426\u5219\u8bf7\u8fd4\u56de False\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-15"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a28.5MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u88f4\u8700\u5b9a\u7406\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int gcd(int a, int b) {\n        if (!b) return a;\n        if (a < b) return gcd(b, a);\n        return gcd(b, a % b);\n    }\n    bool isGoodArray(vector<int>& nums) {\n        int res = nums[0];\n        for (auto &num : nums) {\n            res = gcd(res, num);\n            if (res == 1) break;\n        }\n        return res == 1;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-15"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a22.7MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def isGoodArray(self, nums: List[int]) -> bool:\n        def gcd(a, b):\n            if not b:\n                return a\n            if a < b:\n                return gcd(b, a)\n            return gcd(b, a % b)\n        res = nums[0]\n        for num in nums:\n            res = gcd(res, num)\n            if res == 1:\n                break\n        return res == 1\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-15"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a3.4MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"fn gcd(a: i32, b: i32) -> i32 {\n    if b == 0 {\n        a\n    } else if a < b {\n        gcd(b, a)\n    } else {\n        gcd(b, a % b)\n    }\n}\n\nimpl Solution {\n    pub fn is_good_array(nums: Vec<i32>) -> bool {\n        let mut res = nums[0];\n        for num in nums {\n            res = gcd(res, num);\n            if res == 1 {\n                break;\n            }\n        }\n        res == 1\n    }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var r=s(30758);const i={},t=r.createContext(i);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);