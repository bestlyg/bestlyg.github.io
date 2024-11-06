"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[78031],{20706:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>u,toc:()=>m});var s=i(86070),r=i(31503);const t={},l="1144.\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6",u={id:"leetcode/1101-1200/\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6",title:"1144.\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6",description:"\u94fe\u63a5\uff1a1144.\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6",source:"@site/docs/leetcode/1101-1200/1144.\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6.md",sourceDirName:"leetcode/1101-1200",slug:"/leetcode/1101-1200/\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6",permalink:"/docs/leetcode/1101-1200/\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1144,frontMatter:{},sidebar:"journal",previous:{title:"1143.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",permalink:"/docs/leetcode/1101-1200/\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217"},next:{title:"1145.\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f",permalink:"/docs/leetcode/1101-1200/\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f"}},c={},m=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"1144\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6",children:"1144.\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/decrease-elements-to-make-array-zigzag",children:"1144.\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u5c06\u6570\u7ec4 nums \u8f6c\u6362\u4e3a\u952f\u9f7f\u6570\u7ec4\u6240\u9700\u7684\u6700\u5c0f\u64cd\u4f5c\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-27"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int movesToMakeZigzag(vector<int>& nums) {\n        if (nums.size() == 1) return 0;\n        return min(try1(nums), try2(nums));\n    }\n    int try1(vector<int> &nums) {\n        int res = 0;\n        for (int i = 1; i < nums.size(); i += 2) {\n            int p = nums[i - 1];\n            if (i + 1 < nums.size()) p = min(p, nums[i + 1]);\n            if (nums[i] >= p) res += nums[i] - p + 1;\n        }\n        return res;\n    }\n    int try2(vector<int> &nums) {\n        int res = 0;\n        if (nums[0] >= nums[1]) res += nums[0] - nums[1] + 1;\n        for (int i = 2; i < nums.size(); i += 2) {\n            int p = nums[i - 1];\n            if (i + 1 < nums.size()) p = min(p, nums[i + 1]);\n            if (nums[i] >= p) res += nums[i] - p + 1;\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-27"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def movesToMakeZigzag(self, nums: List[int]) -> int:\n        n = len(nums)\n        if n == 1:\n            return 0\n  \n        def try1():\n            res = 0\n            for i in range(1, n, 2):\n                p = nums[i-1]\n                if i+1 < n:\n                    p = min(p, nums[i+1])\n                if nums[i] >= p:\n                    res += nums[i] - p + 1\n            return res\n  \n        def try2():\n            res = 0\n            if nums[0] >= nums[1]:\n                res += nums[0] - nums[1] + 1\n            for i in range(2, n, 2):\n                p = nums[i - 1]\n                if i + 1 < n:\n                    p = min(p, nums[i + 1])\n                if nums[i] >= p:\n                    res += nums[i] - p + 1\n            return res\n        return min(try1(), try2())\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-27"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn moves_to_make_zigzag(nums: Vec<i32>) -> i32 {\n        let n = nums.len();\n        if n == 1 {\n            0\n        } else {\n            let try1 = || {\n                let mut res = 0;\n                let mut i = 1;\n                while i < n {\n                    let mut p = nums[i - 1];\n                    if i + 1 < n {\n                        p = p.min(nums[i + 1]);\n                    }\n                    if nums[i] >= p {\n                        res += nums[i] - p + 1;\n                    }\n                    i += 2;\n                }\n                res\n            };\n            let try2 = || {\n                let mut res = 0;\n                if nums[0] >= nums[1] {\n                    res += nums[0] - nums[1] + 1;\n                }\n                let mut i = 2;\n                while i < n {\n                    let mut p = nums[i - 1];\n                    if i + 1 < n {\n                        p = p.min(nums[i + 1]);\n                    }\n                    if nums[i] >= p {\n                        res += nums[i] - p + 1;\n                    }\n                    i += 2;\n                }\n                res\n            };\n            try1().min(try2())\n        }\n    }\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>u});var s=i(30758);const r={},t=s.createContext(r);function l(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);