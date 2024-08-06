"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[95924],{31605:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var u=t(86070),i=t(25710);const a={},r="365.\u6c34\u58f6\u95ee\u9898",c={id:"leetcode/301-400/\u6c34\u58f6\u95ee\u9898",title:"365.\u6c34\u58f6\u95ee\u9898",description:"\u94fe\u63a5\uff1a365.\u6c34\u58f6\u95ee\u9898",source:"@site/docs/leetcode/301-400/365.\u6c34\u58f6\u95ee\u9898.md",sourceDirName:"leetcode/301-400",slug:"/leetcode/301-400/\u6c34\u58f6\u95ee\u9898",permalink:"/docs/leetcode/301-400/\u6c34\u58f6\u95ee\u9898",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:365,frontMatter:{},sidebar:"journal",previous:{title:"363.\u77e9\u5f62\u533a\u57df\u4e0d\u8d85\u8fc7K\u7684\u6700\u5927\u6570\u503c\u548c",permalink:"/docs/leetcode/301-400/\u77e9\u5f62\u533a\u57df\u4e0d\u8d85\u8fc7K\u7684\u6700\u5927\u6570\u503c\u548c"},next:{title:"367.\u6709\u6548\u7684\u5b8c\u5168\u5e73\u65b9\u6570",permalink:"/docs/leetcode/301-400/\u6709\u6548\u7684\u5b8c\u5168\u5e73\u65b9\u6570"}},s={},l=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function j(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(e.h1,{id:"365\u6c34\u58f6\u95ee\u9898",children:"365.\u6c34\u58f6\u95ee\u9898"}),"\n",(0,u.jsxs)(e.blockquote,{children:["\n",(0,u.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,u.jsx)(e.a,{href:"https://leetcode.cn/problems/water-and-jug-problem",children:"365.\u6c34\u58f6\u95ee\u9898"}),(0,u.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,u.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u5b66",(0,u.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6709\u4e24\u4e2a\u5bb9\u91cf\u5206\u522b\u4e3a x \u5347 \u548c y \u5347 \u7684\u6c34\u58f6\u4ee5\u53ca\u65e0\u9650\u591a\u7684\u6c34\u3002\u8bf7\u5224\u65ad\u80fd\u5426\u901a\u8fc7\u4f7f\u7528\u8fd9\u4e24\u4e2a\u6c34\u58f6\uff0c\u4ece\u800c\u53ef\u4ee5\u5f97\u5230\u6070\u597d z \u5347 \u7684\u6c34\uff1f\u3002"]}),"\n"]}),"\n",(0,u.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,u.jsxs)(e.ul,{children:["\n",(0,u.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-21"}),"\n",(0,u.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a2516ms"}),"\n",(0,u.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a81.7MB"}),"\n",(0,u.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,u.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5e7f\u5ea6\u4f18\u5148\uff0c\u904d\u5386\u6240\u6709\u53ef\u80fd\u3002"]}),"\n"]}),"\n",(0,u.jsx)(e.pre,{children:(0,u.jsx)(e.code,{className:"language-typescript",children:"function canMeasureWater(\n  jug1Capacity: number,\n  jug2Capacity: number,\n  targetCapacity: number\n): boolean {\n  type State = [number, number];\n  const format = (x: number, y: number) => `${x}::${y}`;\n  const set = new Set<string>([format(0, 0)]);\n  const queue: State[] = [[0, 0]];\n  return find();\n  function find(): boolean {\n    while (queue.length !== 0) {\n      const cur = queue.shift()!;\n      const next = findNext(cur);\n      if (next.some(([x, y]) => x + y === targetCapacity)) return true;\n      next.forEach(v => {\n        const str = format(...v);\n        if (!set.has(str)) {\n          set.add(str);\n          queue.push(v);\n        }\n      });\n    }\n    return false;\n  }\n  function findNext([x, y]: State): State[] {\n    return [\n      [0, y],\n      [x, 0],\n      [jug1Capacity, y],\n      [x, jug2Capacity],\n      [Math.max(x - (jug2Capacity - y), 0), Math.min(y + x, jug2Capacity)],\n      [Math.min(x + y, jug1Capacity), Math.max(y - (jug1Capacity - x), 0)],\n    ];\n  }\n}\n"})}),"\n",(0,u.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,u.jsxs)(e.ul,{children:["\n",(0,u.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-01-28"}),"\n",(0,u.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a2181ms"}),"\n",(0,u.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a67.66MB"}),"\n",(0,u.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,u.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs\u3002"]}),"\n"]}),"\n",(0,u.jsx)(e.pre,{children:(0,u.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def canMeasureWater(self, jug1Capacity: int, jug2Capacity: int, targetCapacity: int) -> bool:\n        used = defaultdict(defaultdict)\n        q = deque()\n        q.append((0, 0))\n        used[0][0] = True\n        while q:\n            jug1, jug2 = q.popleft()\n            if jug1 == targetCapacity or jug2 == targetCapacity or jug1 + jug2 == targetCapacity:\n                return True\n            arr =[\n                [jug1Capacity, jug2],\n                [0, jug2],\n                [min(jug1Capacity, jug1 + jug2), jug2 - (min(jug1Capacity, jug1 + jug2) - jug1)],\n                [jug1, jug2Capacity],\n                [jug1, 0],\n                [jug1 - (min(jug2Capacity, jug1 + jug2) - jug2), min(jug2Capacity, jug1 + jug2)]\n            ]\n            for jug1, jug2 in arr:\n                if jug2 not in used[jug1]:\n                    q.append((jug1, jug2))\n                    used[jug1][jug2] = True\n        return False\n"})}),"\n",(0,u.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,u.jsxs)(e.ul,{children:["\n",(0,u.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-01-28"}),"\n",(0,u.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a441ms"}),"\n",(0,u.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a21.37MB"}),"\n",(0,u.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,u.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,u.jsx)(e.pre,{children:(0,u.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn can_measure_water(jug1_capacity: i32, jug2_capacity: i32, target_capacity: i32) -> bool {\n        use std::cmp::min;\n        use std::collections::{HashMap, VecDeque};\n        let mut used: HashMap<i32, HashMap<i32, bool>> = Default::default();\n        let mut q: VecDeque<(i32, i32)> = Default::default();\n        q.push_back((0, 0));\n        used.entry(0).or_default().entry(0).or_insert(true);\n        while let Some((jug1, jug2)) = q.pop_front() {\n            if jug1 == target_capacity || jug2 == target_capacity || jug1 + jug2 == target_capacity\n            {\n                return true;\n            }\n            let next = [\n                [jug1_capacity, jug2],\n                [0, jug2],\n                [\n                    min(jug1_capacity, jug1 + jug2),\n                    jug2 - (min(jug1_capacity, jug1 + jug2) - jug1),\n                ],\n                [jug1, jug2_capacity],\n                [jug1, 0],\n                [\n                    jug1 - (min(jug2_capacity, jug1 + jug2) - jug2),\n                    min(jug2_capacity, jug1 + jug2),\n                ],\n            ];\n            for [jug1, jug2] in next {\n                let item = used.entry(jug1).or_default().entry(jug2).or_default();\n                if !*item {\n                    q.push_back((jug1, jug2));\n                    *item = true;\n                }\n            }\n        }\n        false\n    }\n}\n"})})]})}function o(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,u.jsx)(e,{...n,children:(0,u.jsx)(j,{...n})}):j(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var u=t(30758);const i={},a=u.createContext(i);function r(n){const e=u.useContext(a);return u.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),u.createElement(a.Provider,{value:e},n.children)}}}]);