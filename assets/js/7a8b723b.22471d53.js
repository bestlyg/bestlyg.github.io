"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[61757],{65259:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var t=i(86070),l=i(25710);const s={},r="2616.\u6700\u5c0f\u5316\u6570\u5bf9\u7684\u6700\u5927\u5dee\u503c",c={id:"leetcode/2601-2700/\u6700\u5c0f\u5316\u6570\u5bf9\u7684\u6700\u5927\u5dee\u503c",title:"2616.\u6700\u5c0f\u5316\u6570\u5bf9\u7684\u6700\u5927\u5dee\u503c",description:"\u94fe\u63a5\uff1a2616.\u6700\u5c0f\u5316\u6570\u5bf9\u7684\u6700\u5927\u5dee\u503c",source:"@site/docs/leetcode/2601-2700/2616.\u6700\u5c0f\u5316\u6570\u5bf9\u7684\u6700\u5927\u5dee\u503c.md",sourceDirName:"leetcode/2601-2700",slug:"/leetcode/2601-2700/\u6700\u5c0f\u5316\u6570\u5bf9\u7684\u6700\u5927\u5dee\u503c",permalink:"/web/site/docs/leetcode/2601-2700/\u6700\u5c0f\u5316\u6570\u5bf9\u7684\u6700\u5927\u5dee\u503c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2616,frontMatter:{},sidebar:"journal",previous:{title:"2615.\u7b49\u503c\u8ddd\u79bb\u548c",permalink:"/web/site/docs/leetcode/2601-2700/\u7b49\u503c\u8ddd\u79bb\u548c"},next:{title:"2617.\u7f51\u683c\u56fe\u4e2d\u6700\u5c11\u8bbf\u95ee\u7684\u683c\u5b50\u6570",permalink:"/web/site/docs/leetcode/2601-2700/\u7f51\u683c\u56fe\u4e2d\u6700\u5c11\u8bbf\u95ee\u7684\u683c\u5b50\u6570"}},o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"2616\u6700\u5c0f\u5316\u6570\u5bf9\u7684\u6700\u5927\u5dee\u503c",children:"2616.\u6700\u5c0f\u5316\u6570\u5bf9\u7684\u6700\u5927\u5dee\u503c"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/minimize-the-maximum-difference-of-pairs",children:"2616.\u6700\u5c0f\u5316\u6570\u5bf9\u7684\u6700\u5927\u5dee\u503c"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0\xa0\u5f00\u59cb\u7684\u6574\u6570\u6570\u7ec4\xa0nums\xa0\u548c\u4e00\u4e2a\u6574\u6570\xa0p\xa0\u3002\u8bf7\u4f60\u4ece\xa0nums\xa0\u4e2d\u627e\u5230\xa0p \u4e2a\u4e0b\u6807\u5bf9\uff0c\u6bcf\u4e2a\u4e0b\u6807\u5bf9\u5bf9\u5e94\u6570\u503c\u53d6\u5dee\u503c\uff0c\u4f60\u9700\u8981\u4f7f\u5f97\u8fd9 p \u4e2a\u5dee\u503c\u7684\xa0\u6700\u5927\u503c\xa0\u6700\u5c0f\u3002\u540c\u65f6\uff0c\u4f60\u9700\u8981\u786e\u4fdd\u6bcf\u4e2a\u4e0b\u6807\u5728\u8fd9\xa0p\xa0\u4e2a\u4e0b\u6807\u5bf9\u4e2d\u6700\u591a\u51fa\u73b0\u4e00\u6b21\u3002\u5bf9\u4e8e\u4e00\u4e2a\u4e0b\u6807\u5bf9\xa0i\xa0\u548c\xa0j\xa0\uff0c\u8fd9\u4e00\u5bf9\u7684\u5dee\u503c\u4e3a\xa0|nums[i] - nums[j]|\xa0\uff0c\u5176\u4e2d\xa0|x|\xa0\u8868\u793a x\xa0\u7684 \u7edd\u5bf9\u503c\xa0\u3002\u8bf7\u4f60\u8fd4\u56de p\xa0\u4e2a\u4e0b\u6807\u5bf9\u5bf9\u5e94\u6570\u503c \u6700\u5927\u5dee\u503c\xa0\u7684 \u6700\u5c0f\u503c\xa0\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-09"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a160ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a79.3MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6700\u5927\u6700\u5c0f\uff0c\u4e8c\u5206\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minimizeMax(vector<int>& nums, int p) {\n        sort(nums.begin(), nums.end());\n        int n = nums.size();\n        auto check = [&](int target) -> bool {\n            int cnt = 0;\n            for(int i = 0; i < n && cnt < p; i++){\n                if (i + 1 < n && nums[i + 1] - nums[i] <= target) i++, cnt++;\n            }\n            return cnt >= p;\n        };\n        int l = 0, r = 1e9 + 7;\n        while(l < r){\n            int mid = (l + r) / 2;\n            if(check(mid)) r = mid;\n            else l = mid + 1;\n        }\n        return l;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-09"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1140ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a29.6MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def minimizeMax(self, nums: List[int], p: int) -> int:\n        nums.sort()\n        n = len(nums)\n  \n        def check(target: int) -> bool:\n            cnt = 0\n            i = 0\n            while i < n and cnt < p:\n                if i + 1 < n and nums[i + 1] - nums[i] <= target:\n                    i += 1\n                    cnt += 1\n                i += 1\n            return cnt >= p\n        l, r = 0, 1000000000+7\n        while l < r:\n            m = (l + r) // 2\n            if check(m):\n                r = m\n            else:\n                l = m+1\n        return l\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-09"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a3.3MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn minimize_max(mut nums: Vec<i32>, p: i32) -> i32 {\n        nums.sort();\n        let n = nums.len();\n        let (mut l, mut r) = (0, *nums.iter().max().unwrap());\n        let check = |target: i32| -> bool {\n            let mut cnt = 0;\n            let mut i = 0;\n            while i < n && cnt < p {\n                if i + 1 < n && nums[i + 1] - nums[i] <= target {\n                    i += 1;\n                    cnt += 1;\n                }\n                i += 1;\n            }\n            cnt >= p\n        };\n        while l < r {\n            let m = (l + r) / 2;\n            if check(m) {\n                r = m;\n            } else {\n                l = m + 1;\n            }\n        }\n        l\n    }\n}\n"})})]})}function m(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var t=i(30758);const l={},s=t.createContext(l);function r(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);