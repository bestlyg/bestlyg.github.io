"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[21527],{91872:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=i(86070),s=i(25710);const r={},l="2561.\u91cd\u6392\u6c34\u679c",o={id:"leetcode/2501-2600/\u91cd\u6392\u6c34\u679c",title:"2561.\u91cd\u6392\u6c34\u679c",description:"\u94fe\u63a5\uff1a2561.\u91cd\u6392\u6c34\u679c",source:"@site/docs/leetcode/2501-2600/2561.\u91cd\u6392\u6c34\u679c.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u91cd\u6392\u6c34\u679c",permalink:"/web/site/docs/leetcode/2501-2600/\u91cd\u6392\u6c34\u679c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2561,frontMatter:{},sidebar:"journal",previous:{title:"2560.\u6253\u5bb6\u52ab\u820dIV",permalink:"/web/site/docs/leetcode/2501-2600/\u6253\u5bb6\u52ab\u820dIV"},next:{title:"2562.\u627e\u51fa\u6570\u7ec4\u7684\u4e32\u8054\u503c",permalink:"/web/site/docs/leetcode/2501-2600/\u627e\u51fa\u6570\u7ec4\u7684\u4e32\u8054\u503c"}},c={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"2561\u91cd\u6392\u6c34\u679c",children:"2561.\u91cd\u6392\u6c34\u679c"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/rearranging-fruits",children:"2561.\u91cd\u6392\u6c34\u679c"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u7684\u5b57\u7b26\u4e32\u6570\u7ec4 words \u4ee5\u53ca\u4e00\u4e2a\u4e8c\u7ef4\u6574\u6570\u6570\u7ec4 queries \u3002\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u6570\u7ec4\uff0c\u5176\u4e2d\u6570\u7ec4\u7684\u7b2c i \u4e2a\u5143\u7d20\u5bf9\u5e94\u7b2c i \u4e2a\u67e5\u8be2\u7684\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-05"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a140ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a83.8MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5148\u62b5\u6d88\u76f8\u540c\u6570\u5b57, \u540e\u6700\u5c0f\u548c\u6700\u5927\u503c\u8fdb\u884c\u5339\u914d, \u540c\u65f6\u8003\u8651\u4e24\u4e2a\u503c\u901a\u8fc7\u6700\u5c0f\u503c\u8fdb\u884c\u4e00\u6b21\u4ea4\u6362\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    long long minCost(vector<int>& basket1, vector<int>& basket2) {\n        unordered_map<int, int> m;\n        for (auto &v : basket1) m[v]++;\n        for (auto &v : basket2) m[v]--;\n        vector<int> list;\n        int nmin = 0x3f3f3f3f;\n        for (auto &item : m) {\n            if (item.second % 2  != 0) return -1;\n            nmin = min(nmin, item.first);\n            for (int i = 0; i < abs(item.second) / 2; i++) list.push_back(item.first);\n        }\n        sort(list.begin(), list.end());\n        long long ans = 0;\n        for (int i = 0; i < list.size() / 2; i++) ans += min(list[i], nmin * 2);\n        return ans;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-05"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a212ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a36.7MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n  def minCost(self, basket1: List[int], basket2: List[int]) -> int:\n      m = Counter()\n      for num1, num2 in zip(basket1, basket2):\n          m[num1] += 1\n          m[num2] -= 1\n      nmin = min(m)\n      l = []\n      for k, v in m.items():\n          if v % 2 != 0:\n              return -1\n          for _ in range(abs(v) // 2):\n              l.append(k)\n      l.sort()\n      ans = 0\n      for i in range(len(l) // 2):\n          ans += min(l[i], nmin * 2)\n      return ans\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-05"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a4.9MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn min_cost(basket1: Vec<i32>, basket2: Vec<i32>) -> i64 {\n        use std::collections::HashMap;\n        let mut m = HashMap::<i32, i32>::new();\n        for num in basket1 {\n            let v = m.entry(num).or_insert(0);\n            *v += 1;\n        }\n        for num in basket2 {\n            let v = m.entry(num).or_insert(0);\n            *v -= 1;\n        }\n        let mut nmin = i32::MAX;\n        let mut list = vec![];\n        for (k, v) in m.iter() {\n            if *v % 2 != 0 {\n                return -1;\n            }\n            nmin = nmin.min(*k);\n            for _ in 0..(*v).abs() / 2 {\n                list.push(*k);\n            }\n        }\n        list.sort();\n        let mut ans = 0;\n        for i in 0..list.len() / 2 {\n            ans += list[i].min(nmin * 2) as i64;\n        }\n        ans\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>o});var t=i(30758);const s={},r=t.createContext(s);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);