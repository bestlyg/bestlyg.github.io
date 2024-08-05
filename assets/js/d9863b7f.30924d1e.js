"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[68808],{4072:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=s(86070),t=s(25710);const r={},l="849.\u5230\u6700\u8fd1\u7684\u4eba\u7684\u6700\u5927\u8ddd\u79bb",c={id:"leetcode/801-900/\u5230\u6700\u8fd1\u7684\u4eba\u7684\u6700\u5927\u8ddd\u79bb",title:"849.\u5230\u6700\u8fd1\u7684\u4eba\u7684\u6700\u5927\u8ddd\u79bb",description:"\u94fe\u63a5\uff1a849.\u5230\u6700\u8fd1\u7684\u4eba\u7684\u6700\u5927\u8ddd\u79bb",source:"@site/docs/leetcode/801-900/849.\u5230\u6700\u8fd1\u7684\u4eba\u7684\u6700\u5927\u8ddd\u79bb.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u5230\u6700\u8fd1\u7684\u4eba\u7684\u6700\u5927\u8ddd\u79bb",permalink:"/web/site/docs/leetcode/801-900/\u5230\u6700\u8fd1\u7684\u4eba\u7684\u6700\u5927\u8ddd\u79bb",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:849,frontMatter:{},sidebar:"journal",previous:{title:"847.\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84",permalink:"/web/site/docs/leetcode/801-900/\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84"},next:{title:"851.\u55a7\u95f9\u548c\u5bcc\u6709",permalink:"/web/site/docs/leetcode/801-900/\u55a7\u95f9\u548c\u5bcc\u6709"}},d={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function x(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"849\u5230\u6700\u8fd1\u7684\u4eba\u7684\u6700\u5927\u8ddd\u79bb",children:"849.\u5230\u6700\u8fd1\u7684\u4eba\u7684\u6700\u5927\u8ddd\u79bb"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/maximize-distance-to-closest-person",children:"849.\u5230\u6700\u8fd1\u7684\u4eba\u7684\u6700\u5927\u8ddd\u79bb"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4ed6\u5230\u79bb\u4ed6\u6700\u8fd1\u7684\u4eba\u7684\u6700\u5927\u8ddd\u79bb\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-22"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.14MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u65f6\u8bb0\u5f55\u524d\u4e00\u4e2a1\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxDistToClosest(vector<int>& seats) {\n        int prev = -1, idx = 0, res = INT_MIN;\n        while (idx < seats.size()) {\n            if (seats[idx] == 1) {\n                if (prev == -1) res = max(res, idx);\n                else res = max(res, (idx - prev) / 2);\n                prev = idx;\n            }\n            idx += 1;\n        }\n        res = max(res, (int)seats.size() - 1 - prev);\n        return res;\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-22"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.38MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maxDistToClosest(self, seats: List[int]) -> int:\n        prev = -1\n        idx = 0\n        res = -inf\n        while idx < len(seats):\n            if seats[idx] == 1:\n                if prev == -1:\n                    res = max(res, idx)\n                else:\n                    res = max(res, (idx - prev) // 2)\n                prev = idx\n            idx += 1\n        res = max(res, len(seats) - 1 - prev)\n        return res\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-22"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.15MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn max_dist_to_closest(seats: Vec<i32>) -> i32 {\n        let mut prev = -1;\n        let mut idx = 0;\n        let mut res = i32::MIN;\n        while idx < seats.len() {\n            if seats[idx] == 1 {\n                let idx = idx as i32;\n                res = res.max(if prev == -1 { idx } else { (idx - prev) / 2 });\n                prev = idx;\n            }\n            idx += 1;\n        }\n        res = res.max(seats.len() as i32 - 1 - prev);\n        res\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(30758);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);