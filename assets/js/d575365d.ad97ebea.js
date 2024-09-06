"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[38454],{60973:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var l=i(86070),t=i(25710);const s={},r="2251.\u82b1\u671f\u5185\u82b1\u7684\u6570\u76ee",o={id:"leetcode/2201-2300/\u82b1\u671f\u5185\u82b1\u7684\u6570\u76ee",title:"2251.\u82b1\u671f\u5185\u82b1\u7684\u6570\u76ee",description:"\u94fe\u63a5\uff1a2251.\u82b1\u671f\u5185\u82b1\u7684\u6570\u76ee",source:"@site/docs/leetcode/2201-2300/2251.\u82b1\u671f\u5185\u82b1\u7684\u6570\u76ee.md",sourceDirName:"leetcode/2201-2300",slug:"/leetcode/2201-2300/\u82b1\u671f\u5185\u82b1\u7684\u6570\u76ee",permalink:"/docs/leetcode/2201-2300/\u82b1\u671f\u5185\u82b1\u7684\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2251,frontMatter:{},sidebar:"journal",previous:{title:"2244.\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u9700\u8981\u7684\u6700\u5c11\u8f6e\u6570",permalink:"/docs/leetcode/2201-2300/\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u9700\u8981\u7684\u6700\u5c11\u8f6e\u6570"},next:{title:"2258.\u9003\u79bb\u706b\u707e",permalink:"/docs/leetcode/2201-2300/\u9003\u79bb\u706b\u707e"}},c={},p=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"2251\u82b1\u671f\u5185\u82b1\u7684\u6570\u76ee",children:"2251.\u82b1\u671f\u5185\u82b1\u7684\u6570\u76ee"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/number-of-flowers-in-full-bloom",children:"2251.\u82b1\u671f\u5185\u82b1\u7684\u6570\u76ee"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6709\u5e8f\u96c6\u5408\u3001\u524d\u7f00\u548c\u3001\u6392\u5e8f",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4e00\u4e2a\u5927\u5c0f\u4e3a n \u7684\u6574\u6570\u6570\u7ec4 answer \uff0c\u5176\u4e2d answer[i]\u662f\u7b2c i \u4e2a\u4eba\u5230\u8fbe\u65f6\u5728\u82b1\u671f\u5185\u82b1\u7684 \u6570\u76ee \u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-28"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a240ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a82.55MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u904d\u5386\uff0c\u5dee\u5206\u6570\u7ec4\u8bb0\u5f55\u5f53\u524d\u503c\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> fullBloomFlowers(vector<vector<int>>& flowers, vector<int>& people) {\n        vector<pair<int, int>> flist;\n        for (auto &item : flowers) {\n            flist.push_back(make_pair(item[0], 1));\n            flist.push_back(make_pair(item[1] + 1, -1));\n        }\n        sort(flist.begin(), flist.end(), [&](auto &a, auto &b) {\n            return a.first < b.first;\n        });\n        vector<int> plist;\n        for (int i = 0; i < people.size(); i++) plist.push_back(i);\n        sort(plist.begin(), plist.end(), [&](auto &a, auto &b) {\n            return people[a] < people[b];\n        });\n        int pidx = 0, cur = 0;\n        vector<int> res(people.size(), 0);\n        for (auto &item : flist) {\n            while (pidx < plist.size() && people[plist[pidx]] < item.first) {\n                res[plist[pidx]] = cur;\n                pidx += 1;\n            }\n            cur += item.second;\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-28"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a228ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.3MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def fullBloomFlowers(self, flowers: List[List[int]], people: List[int]) -> List[int]:\n        flist = []\n        for [start, end] in flowers:\n            flist.append((start, 1))\n            flist.append((end + 1, -1))\n        flist.sort()\n        plist = [i for i in range(len(people))]\n        plist.sort(key = lambda i: people[i])\n        pidx = 0\n        res = [0 for _ in range(len(people))]\n        cur = 0\n        for (idx, d) in flist:\n            while pidx < len(plist) and people[plist[pidx]] < idx:\n                res[plist[pidx]] = cur\n                pidx += 1\n            cur += d\n        return res\n\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-28"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.7MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn full_bloom_flowers(flowers: Vec<Vec<i32>>, people: Vec<i32>) -> Vec<i32> {\n        let mut flist = vec![];\n        for item in flowers {\n            flist.push((item[0], 1));\n            flist.push((item[1] + 1, -1));\n        }\n        flist.sort_by_cached_key(|o| o.0);\n        let mut plist = (0..people.len()).collect::<Vec<usize>>();\n        plist.sort_by_cached_key(|i| people[*i]);\n        let mut res = vec![0; people.len()];\n        let mut pidx = 0;\n        let mut cur = 0;\n        for (idx, d) in flist {\n            while pidx < plist.len() && people[plist[pidx]] < idx {\n                res[plist[pidx]] = cur;\n                pidx += 1;\n            }\n            cur += d;\n        }\n        res\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},25710:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var l=i(30758);const t={},s=l.createContext(t);function r(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);