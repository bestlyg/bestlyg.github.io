"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[15297],{93548:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=i(86070),r=i(25710);const l={},s="2560.\u6253\u5bb6\u52ab\u820dIV",c={id:"leetcode/2501-2600/\u6253\u5bb6\u52ab\u820dIV",title:"2560.\u6253\u5bb6\u52ab\u820dIV",description:"\u94fe\u63a5\uff1a2560.\u6253\u5bb6\u52ab\u820dIV",source:"@site/docs/leetcode/2501-2600/2560.\u6253\u5bb6\u52ab\u820dIV.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u6253\u5bb6\u52ab\u820dIV",permalink:"/docs/leetcode/2501-2600/\u6253\u5bb6\u52ab\u820dIV",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2560,frontMatter:{},sidebar:"journal",previous:{title:"2558.\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269",permalink:"/docs/leetcode/2501-2600/\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269"},next:{title:"2561.\u91cd\u6392\u6c34\u679c",permalink:"/docs/leetcode/2501-2600/\u91cd\u6392\u6c34\u679c"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2},{value:"\u9898\u89e3 4 - python",id:"\u9898\u89e3-4---python",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"2560\u6253\u5bb6\u52ab\u820div",children:"2560.\u6253\u5bb6\u52ab\u820dIV"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/house-robber-iv",children:"2560.\u6253\u5bb6\u52ab\u820dIV"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u7684\u5b57\u7b26\u4e32\u6570\u7ec4 words \u4ee5\u53ca\u4e00\u4e2a\u4e8c\u7ef4\u6574\u6570\u6570\u7ec4 queries \u3002\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u6570\u7ec4\uff0c\u5176\u4e2d\u6570\u7ec4\u7684\u7b2c i \u4e2a\u5143\u7d20\u5bf9\u5e94\u7b2c i \u4e2a\u67e5\u8be2\u7684\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-05"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a136ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a55.6MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7ed3\u679c\u4e8c\u5206+dp\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    long long minCost(vector<int>& basket1, vector<int>& basket2) {\n        unordered_map<int, int> m;\n        for (auto &v : basket1) m[v]++;\n        for (auto &v : basket2) m[v]--;\n        vector<int> list;\n        int nmin = 0x3f3f3f3f;\n        for (auto &item : m) {\n            if (item.second % 2 != 0) return -1;\n            nmin = min(nmin, item.first);\n            for (int i = 0; i < abs(item.second) / 2; i++) list.push_back(item.first);\n        }\n        sort(list.begin(), list.end());\n        long long ans = 0;\n        for (int i = 0; i < list.size() / 2; i++) ans += min(list[i], nmin * 2);\n        return ans;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-05"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a740ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a22.9MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def minCapability(self, nums: List[int], k: int) -> int:\n        def bs(target):\n            prev1, prev2 = 0, 0\n            for num in nums:\n                if num <= target:\n                    prev1, prev2 = prev2, max(prev1 + 1, prev2)\n                else:\n                    prev1 = prev2\n            return prev2\n        l, r = 1, max(nums)\n        while l < r:\n            m = (l + r) // 2\n            if bs(m) >= k: r = m\n            else: l = m + 1\n        return l\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-05"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a4MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn min_capability(nums: Vec<i32>, k: i32) -> i32 {\n        let (mut l, mut r) = (1, 1);\n        for num in nums.iter() {\n            r = r.max(*num);\n        }\n        let bs = move |target| {\n            let (mut prev1, mut prev2) = (0, 0);\n            for num in nums.iter() {\n                if *num <= target {\n                    let tmp = prev2;\n                    prev2 = prev2.max(prev1 + 1);\n                    prev1 = tmp;\n                } else {\n                    prev1 = prev2;\n                }\n            }\n            prev2\n        };\n        while l < r {\n            let m = (l + r) / 2;\n            if bs(m) >= k {\n                r = m;\n            } else {\n                l = m + 1\n            }\n        }\n        l\n    }\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-4---python",children:"\u9898\u89e3 4 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-19"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a520ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a27.9MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def minCapability(self, nums: List[int], k: int) -> int:\n        n = len(nums)\n\n        def check(target: int) -> bool:\n            cnt = 0\n            prev = -1\n            for i in range(n):\n                if nums[i] <= target and (prev == -1 or prev + 1 != i):\n                    prev = i\n                    cnt += 1\n            return cnt >= k\n\n        l, r = min(nums), max(nums)\n        while l < r:\n            m = (l + r) // 2\n            if check(m):\n                r = m\n            else:\n                l = m + 1\n        return l\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>c});var t=i(30758);const r={},l=t.createContext(r);function s(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);