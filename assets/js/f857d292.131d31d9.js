"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[84194],{71138:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var l=s(86070),t=s(25710);const i={},r="2552.\u7edf\u8ba1\u4e0a\u5347\u56db\u5143\u7ec4",c={id:"leetcode/2501-2600/\u7edf\u8ba1\u4e0a\u5347\u56db\u5143\u7ec4",title:"2552.\u7edf\u8ba1\u4e0a\u5347\u56db\u5143\u7ec4",description:"\u94fe\u63a5\uff1a2552.\u7edf\u8ba1\u4e0a\u5347\u56db\u5143\u7ec4",source:"@site/docs/leetcode/2501-2600/2552.\u7edf\u8ba1\u4e0a\u5347\u56db\u5143\u7ec4.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u7edf\u8ba1\u4e0a\u5347\u56db\u5143\u7ec4",permalink:"/docs/leetcode/2501-2600/\u7edf\u8ba1\u4e0a\u5347\u56db\u5143\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2552,frontMatter:{},sidebar:"journal",previous:{title:"2551.\u5c06\u73e0\u5b50\u653e\u5165\u80cc\u5305\u4e2d",permalink:"/docs/leetcode/2501-2600/\u5c06\u73e0\u5b50\u653e\u5165\u80cc\u5305\u4e2d"},next:{title:"2558.\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269",permalink:"/docs/leetcode/2501-2600/\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269"}},o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"2552\u7edf\u8ba1\u4e0a\u5347\u56db\u5143\u7ec4",children:"2552.\u7edf\u8ba1\u4e0a\u5347\u56db\u5143\u7ec4"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(e.a,{href:"https://leetcode.cn/problems/count-increasing-quadruplets",children:"2552.\u7edf\u8ba1\u4e0a\u5347\u56db\u5143\u7ec4"}),(0,l.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,l.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u72b6\u6570\u7ec4\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u679a\u4e3e\u3001\u524d\u7f00\u548c",(0,l.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u957f\u5ea6\u4e3a n \u4e0b\u6807\u4ece 0 \u5f00\u59cb\u7684\u6574\u6570\u6570\u7ec4 nums \uff0c\u5b83\u5305\u542b 1 \u5230 n \u7684\u6240\u6709\u6570\u5b57\uff0c\u8bf7\u4f60\u8fd4\u56de\u4e0a\u5347\u56db\u5143\u7ec4\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-01"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a272ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a10.6MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u679a\u4e3el\uff0c\u5bf9\u4e8e\u6bcf\u4e00\u4e2al\uff0c\u67e5\u627e\u53ef\u80fd\u7684j\uff0c\u8bb0\u5f55j\u7684132\u6a21\u5f0f\u4e2a\u6570\uff0c\u5373i<j<k&&v[i]<v[k]<v[j]\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    typedef long long ll;\n    ll countQuadruplets(vector<int>& nums) {\n        int n = nums.size();\n        ll ans = 0;\n        vector<int> list(n, 0);\n        for (int l = 0; l < n; l++) {\n            for (int j = 0; j < l - 1; j++) {\n                if (nums[j] < nums[l]) ans += list[j];\n            }\n            for (int j = 0, cnt = 0; j < l; j++) {\n                if (nums[j] > nums[l]) list[j] += cnt;\n                if (nums[j] < nums[l]) cnt++;\n            }\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-01"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a2284ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.2MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def countQuadruplets(self, nums: List[int]) -> int:\n        n = len(nums)\n        ans = 0\n        list = [0] * n\n        for l in range(n):\n            for j in range(l):\n                if nums[j] < nums[l]:\n                    ans += list[j]\n            cnt = 0\n            for j in range(l):\n                if nums[j] > nums[l]:\n                    list[j] += cnt\n                if nums[j] < nums[l]:\n                    cnt += 1\n        return ans\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-01"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn count_quadruplets(nums: Vec<i32>) -> i64 {\n        let n = nums.len();\n        let mut list = vec![0; n];\n        let mut ans = 0;\n        for l in 0..n {\n            for j in 0..l {\n                if nums[j] < nums[l] {\n                    ans += list[j];\n                }\n            }\n            let mut cnt = 0;\n            for j in 0..l {\n                if nums[j] > nums[l] {\n                    list[j] += cnt;\n                }\n                if nums[j] < nums[l] {\n                    cnt += 1;\n                }\n            }\n        }\n        ans\n    }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var l=s(30758);const t={},i=l.createContext(t);function r(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);