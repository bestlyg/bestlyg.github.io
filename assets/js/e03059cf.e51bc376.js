"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[41048],{30913:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=s(86070),c=s(25710);const l={},i="771.\u5b9d\u77f3\u4e0e\u77f3\u5934",r={id:"leetcode/701-800/\u5b9d\u77f3\u4e0e\u77f3\u5934",title:"771.\u5b9d\u77f3\u4e0e\u77f3\u5934",description:"\u94fe\u63a5\uff1a771.\u5b9d\u77f3\u4e0e\u77f3\u5934",source:"@site/docs/leetcode/701-800/771.\u5b9d\u77f3\u4e0e\u77f3\u5934.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u5b9d\u77f3\u4e0e\u77f3\u5934",permalink:"/docs/leetcode/701-800/\u5b9d\u77f3\u4e0e\u77f3\u5934",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:771,frontMatter:{},sidebar:"journal",previous:{title:"769.\u6700\u591a\u80fd\u5b8c\u6210\u6392\u5e8f\u7684\u5757",permalink:"/docs/leetcode/701-800/\u6700\u591a\u80fd\u5b8c\u6210\u6392\u5e8f\u7684\u5757"},next:{title:"773.\u6ed1\u52a8\u8c1c\u9898",permalink:"/docs/leetcode/701-800/\u6ed1\u52a8\u8c1c\u9898"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"771\u5b9d\u77f3\u4e0e\u77f3\u5934",children:"771.\u5b9d\u77f3\u4e0e\u77f3\u5934"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/jewels-and-stones",children:"771.\u5b9d\u77f3\u4e0e\u77f3\u5934"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u5b57\u7b26\u4e32 J \u4ee3\u8868\u77f3\u5934\u4e2d\u5b9d\u77f3\u7684\u7c7b\u578b\uff0c\u548c\u5b57\u7b26\u4e32 S \u4ee3\u8868\u4f60\u62e5\u6709\u7684\u77f3\u5934\u3002 S \u4e2d\u6bcf\u4e2a\u5b57\u7b26\u4ee3\u8868\u4e86\u4e00\u79cd\u4f60\u62e5\u6709\u7684\u77f3\u5934\u7684\u7c7b\u578b\uff0c\u4f60\u60f3\u77e5\u9053\u4f60\u62e5\u6709\u7684\u77f3\u5934\u4e2d\u6709\u591a\u5c11\u662f\u5b9d\u77f3\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-02"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.9MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u54c8\u5e0c\u50a8\u5b58\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function numJewelsInStones(J: string, S: string): number {\n  const cache: Record<string, number> = {};\n  const setCache = (c: string) => (cache[c] = cache[c] ? cache[c] + 1 : 1);\n  const getCache = (c: string) => (cache[c] ? cache[c] : 0);\n  for (const c of S) setCache(c);\n  let sum = 0;\n  for (const c of J) sum += getCache(c);\n  return sum;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-24"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.1MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int numJewelsInStones(string jewels, string stones) {\n        bool list[200] = {0};\n        for (auto &o : jewels) list[o] = true;\n        int sum = 0;\n        for (auto &c : stones) {\n            if (list[c]) sum++;\n        }\n        return sum;\n    }\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-24"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def numJewelsInStones(self, jewels: str, stones: str) -> int:\n        s = set(jewels)\n        return sum(o in s for o in stones)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-24"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.9MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn num_jewels_in_stones(jewels: String, stones: String) -> i32 {\n        let mut list = [false; 200];\n        for c in jewels.bytes() {\n            list[c as usize] = true;\n        }\n        stones\n            .bytes()\n            .into_iter()\n            .filter(|c| list[*c as usize])\n            .collect::<Vec<_>>()\n            .len() as i32\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var t=s(30758);const c={},l=t.createContext(c);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);