"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[63841],{65732:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(86070),i=t(25710);const o={},c="447.\u56de\u65cb\u9556\u7684\u6570\u91cf",r={id:"leetcode/401-500/\u56de\u65cb\u9556\u7684\u6570\u91cf",title:"447.\u56de\u65cb\u9556\u7684\u6570\u91cf",description:"\u94fe\u63a5\uff1a447.\u56de\u65cb\u9556\u7684\u6570\u91cf",source:"@site/docs/leetcode/401-500/447.\u56de\u65cb\u9556\u7684\u6570\u91cf.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u56de\u65cb\u9556\u7684\u6570\u91cf",permalink:"/docs/leetcode/401-500/\u56de\u65cb\u9556\u7684\u6570\u91cf",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:447,frontMatter:{},sidebar:"journal",previous:{title:"446.\u7b49\u5dee\u6570\u5217\u5212\u5206II-\u5b50\u5e8f\u5217",permalink:"/docs/leetcode/401-500/\u7b49\u5dee\u6570\u5217\u5212\u5206II-\u5b50\u5e8f\u5217"},next:{title:"448.\u627e\u5230\u6240\u6709\u6570\u7ec4\u4e2d\u6d88\u5931\u7684\u6570\u5b57",permalink:"/docs/leetcode/401-500/\u627e\u5230\u6240\u6709\u6570\u7ec4\u4e2d\u6d88\u5931\u7684\u6570\u5b57"}},p={},l=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"447\u56de\u65cb\u9556\u7684\u6570\u91cf",children:"447.\u56de\u65cb\u9556\u7684\u6570\u91cf"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/number-of-boomerangs",children:"447.\u56de\u65cb\u9556\u7684\u6570\u91cf"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6570\u5b66",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u5e73\u9762\u4e0a\u6240\u6709\u56de\u65cb\u9556\u7684\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-13"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a252ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a60.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","map \u50a8\u5b58\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function numberOfBoomerangs(points: number[][]): number {\n  const n = points.length;\n  const getDistance = ([x1, y1]: number[], [x2, y2]: number[]) => (x1 - x2) ** 2 + (y1 - y2) ** 2;\n  const pointMap: Map<number[], Map<number, number>> = new Map();\n  let ans = 0;\n  for (let i = 0; i < n; i++) {\n    const p1 = points[i];\n    let map1 = pointMap.get(p1);\n    if (!map1) pointMap.set(p1, (map1 = new Map()));\n    for (let j = i + 1; j < n; j++) {\n      const p2 = points[j];\n      let map2 = pointMap.get(p2);\n      if (!map2) pointMap.set(p2, (map2 = new Map()));\n      const distance = getDistance(p1, p2);\n      const count1 = map1.get(distance) ?? 0;\n      map1.set(distance, count1 + 1);\n      ans += count1 * 2;\n      const count2 = map2.get(distance) ?? 0;\n      map2.set(distance, count2 + 1);\n      ans += count2 * 2;\n    }\n  }\n  return ans;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-01-08"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a788ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.06MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4ee5\u4e00\u4e2a\u70b9\u4e3a\u4e2d\u70b9\uff0c\u904d\u5386\u6240\u6709\u5176\u4ed6\u70b9\u5224\u65ad\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def numberOfBoomerangs(self, points: List[List[int]]) -> int:\n        ans = 0\n        for p1 in points:\n            map = Counter()n\n            for p2 in points:\n                d = (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2\n                ans += map[d] * 2\n                map[d] += 1\n        return ans\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var s=t(30758);const i={},o=s.createContext(i);function c(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);