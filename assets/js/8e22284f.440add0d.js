"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[97450],{25052:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"leetcode/2401-2500/\u7edf\u8ba1\u4e2d\u4f4d\u6570\u4e3aK\u7684\u5b50\u6570\u7ec4","title":"2488.\u7edf\u8ba1\u4e2d\u4f4d\u6570\u4e3aK\u7684\u5b50\u6570\u7ec4","description":"\u94fe\u63a5\uff1a2488.\u7edf\u8ba1\u4e2d\u4f4d\u6570\u4e3aK\u7684\u5b50\u6570\u7ec4","source":"@site/docs/leetcode/2401-2500/2488.\u7edf\u8ba1\u4e2d\u4f4d\u6570\u4e3aK\u7684\u5b50\u6570\u7ec4.md","sourceDirName":"leetcode/2401-2500","slug":"/leetcode/2401-2500/\u7edf\u8ba1\u4e2d\u4f4d\u6570\u4e3aK\u7684\u5b50\u6570\u7ec4","permalink":"/docs/leetcode/2401-2500/\u7edf\u8ba1\u4e2d\u4f4d\u6570\u4e3aK\u7684\u5b50\u6570\u7ec4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2488,"frontMatter":{},"sidebar":"journal","previous":{"title":"2487.\u4ece\u94fe\u8868\u4e2d\u79fb\u9664\u8282\u70b9","permalink":"/docs/leetcode/2401-2500/\u4ece\u94fe\u8868\u4e2d\u79fb\u9664\u8282\u70b9"},"next":{"title":"2490.\u56de\u73af\u53e5","permalink":"/docs/leetcode/2401-2500/\u56de\u73af\u53e5"}}');var r=i(25105),t=i(8556);const l={},c="2488.\u7edf\u8ba1\u4e2d\u4f4d\u6570\u4e3aK\u7684\u5b50\u6570\u7ec4",d={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2},{value:"\u9898\u89e3 4 - cpp",id:"\u9898\u89e3-4---cpp",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"2488\u7edf\u8ba1\u4e2d\u4f4d\u6570\u4e3ak\u7684\u5b50\u6570\u7ec4",children:"2488.\u7edf\u8ba1\u4e2d\u4f4d\u6570\u4e3aK\u7684\u5b50\u6570\u7ec4"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/count-subarrays-with-median-k",children:"2488.\u7edf\u8ba1\u4e2d\u4f4d\u6570\u4e3aK\u7684\u5b50\u6570\u7ec4"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u524d\u7f00\u548c",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u957f\u5ea6\u4e3a n \u7684\u6570\u7ec4 nums \uff0c\u8be5\u6570\u7ec4\u7531\u4ece 1 \u5230 n \u7684 \u4e0d\u540c \u6574\u6570\u7ec4\u6210\u3002\u53e6\u7ed9\u4f60\u4e00\u4e2a\u6b63\u6574\u6570 k \u3002\u7edf\u8ba1\u5e76\u8fd4\u56de num \u4e2d\u7684 \u4e2d\u4f4d\u6570 \u7b49\u4e8e k \u7684\u975e\u7a7a\u5b50\u6570\u7ec4\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-27"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a51.4MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u56e0\u4e3a\u662f\u4e2d\u4f4d\u6570\u4e14\u53ea\u6709\u4e00\u4e2a\uff0c\u627e\u5230\u552f\u4e00\u7684 k\uff0c\u5411\u5de6\u904d\u5386\u8bb0\u5f55\u60c5\u51b5\u5b58\u50a8\uff0c\u518d\u5411\u53f3\u904d\u5386\u7edf\u8ba1\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'#define X first\n#define Y second\n#define lb(x) ((x) & (-x))\n#define mem(a,b) memset(a,b,sizeof(a))\n#define debug freopen("r.txt","r",stdin)\n#define pi pair<int,int>\nusing namespace std;\ntypedef long long ll;\nclass Solution {\npublic:\n    int countSubarrays(vector<int>& nums, int k) {\n        int ans = 1, idx = findK(nums, k), n = nums.size();\n        unordered_map<int, int> m;\n        pi item = make_pair(0, 0);\n        for (int i = idx - 1; i >= 0; i--) {\n            if (nums[i] > k) item.Y += 1;\n            else item.X += 1;\n            if (item.Y - item.X == 0 || item.Y - item.X == 1) ans++;\n            m[item.Y - item.X]++;\n        }\n        item = make_pair(0, 0);\n        for (int j = idx + 1; j < n; j++) {\n          if (nums[j] > k) item.Y += 1;\n          else item.X += 1;\n          if (item.Y - item.X == 0) ans += 1 + m[0] + m[1];\n          else if (item.Y - item.X == 1) ans += 1 + m[0] + m[-1];\n          else ans += m[item.X - item.Y] + m[item.X - item.Y + 1];\n        }\n        return ans;\n    }\n    int findK(vector<int>& nums, int k) {\n      for (int i = 0; i < nums.size(); i++) if (nums[i] == k) return i;\n      return -1;\n    }\n};\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-16"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a120ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.7MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def maximalNetworkRank(self, n: int, roads: List[List[int]]) -> int:\n        l = [set() for _ in range(n)]\n        for [n1, n2] in roads:\n            l[n1].add(n2)\n            l[n2].add(n1)\n        res = 0\n        for i in range(n):\n            for j in range(n):\n                if i != j:\n                    res = max(res, len(l[i]) + len(l[j]) + (-1 if j in l[i] else 0))\n        return res\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-16"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a3.2MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn count_subarrays(nums: Vec<i32>, k: i32) -> i32 {\n        let mut m = std::collections::HashMap::<i32, i32>::new();\n        let (mut res, mut cur, mut find_k) = (0, 0, false);\n        for num in nums {\n            if num > k {\n                cur += 1;\n            } else if num < k {\n                cur -= 1;\n            } else {\n                find_k = true;\n            }\n            if find_k {\n                res += *m.get(&cur).unwrap_or(&0)\n                    + *m.get(&(cur - 1)).unwrap_or(&0)\n                    + ((cur == 0 || cur == 1) as i32);\n            } else {\n                *m.entry(cur).or_insert(0) += 1;\n            }\n        }\n        res\n    }\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-4---cpp",children:"\u9898\u89e3 4 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-16"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a51.4MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u503c\u5224\u65ad\u524d\u9762\u53ef\u53d6\u503c\uff0c\u5e76\u5b58\u5165map\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int countSubarrays(vector<int>& nums, int k) {\n        unordered_map<int, int> m;\n        int res = 0, cur = 0;\n        bool findK = false;\n        for (auto &num : nums) {\n            if (num > k) cur += 1;\n            else if (num < k) cur -= 1;\n            if (num == k) findK = true;\n            if (findK) res += m[cur] + m[cur - 1] + (cur == 0 || cur == 1);\n            else m[cur]++;\n        }\n        return res;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},8556:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var s=i(58101);const r={},t=s.createContext(r);function l(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);