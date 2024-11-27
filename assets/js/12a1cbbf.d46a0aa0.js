"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[66599],{88351:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>o,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/601-700/\u6570\u7ec4\u7684\u5ea6","title":"697.\u6570\u7ec4\u7684\u5ea6","description":"\u94fe\u63a5\uff1a697.\u6570\u7ec4\u7684\u5ea6","source":"@site/docs/leetcode/601-700/697.\u6570\u7ec4\u7684\u5ea6.md","sourceDirName":"leetcode/601-700","slug":"/leetcode/601-700/\u6570\u7ec4\u7684\u5ea6","permalink":"/docs/leetcode/601-700/\u6570\u7ec4\u7684\u5ea6","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":697,"frontMatter":{},"sidebar":"journal","previous":{"title":"696.\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32","permalink":"/docs/leetcode/601-700/\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32"},"next":{"title":"698.\u5212\u5206\u4e3ak\u4e2a\u76f8\u7b49\u7684\u5b50\u96c6","permalink":"/docs/leetcode/601-700/\u5212\u5206\u4e3ak\u4e2a\u76f8\u7b49\u7684\u5b50\u96c6"}}');var r=t(86070),i=t(31503);const c={},a="697.\u6570\u7ec4\u7684\u5ea6",l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"697\u6570\u7ec4\u7684\u5ea6",children:"697.\u6570\u7ec4\u7684\u5ea6"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/degree-of-an-array",children:"697.\u6570\u7ec4\u7684\u5ea6"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u975e\u7a7a\u4e14\u53ea\u5305\u542b\u975e\u8d1f\u6570\u7684\u6574\u6570\u6570\u7ec4 \xa0nums\uff0c\u6570\u7ec4\u7684\u5ea6\u7684\u5b9a\u4e49\u662f\u6307\u6570\u7ec4\u91cc\u4efb\u4e00\u5143\u7d20\u51fa\u73b0\u9891\u6570\u7684\u6700\u5927\u503c\u3002\u4f60\u7684\u4efb\u52a1\u662f\u5728 nums \u4e2d\u627e\u5230\u4e0e \xa0nums\xa0 \u62e5\u6709\u76f8\u540c\u5927\u5c0f\u7684\u5ea6\u7684\u6700\u77ed\u8fde\u7eed\u5b50\u6570\u7ec4\uff0c\u8fd4\u56de\u5176\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-20"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a208ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.3MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8bfb\u53d6\u5230\u5ea6\u540e\u76f4\u63a5\u53d6\u5934\u5c3e\u8fdb\u884c\u5224\u65ad\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function findShortestSubArray(nums: number[]): number {\n  const map = new Map<number, number>();\n  nums.forEach(num => map.set(num, 1 + (map.get(num) ?? 0)));\n  const degreeValue = Math.max(...map.values());\n  const degreeList = [];\n  for (const [k, v] of map) v === degreeValue && degreeList.push(k);\n  return Math.min(...degreeList.map(num => nums.lastIndexOf(num) - nums.indexOf(num) + 1));\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-20"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.3MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f18\u5316\u9898\u89e3 1\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function findShortestSubArray(nums: number[]): number {\n  const indexMap = new Map<number, [number, number]>();\n  const computeIndex = (num: number) => {\n    const [start, end] = indexMap.get(num)!;\n    return end - start + 1;\n  };\n  const map = new Map<number, number>();\n  for (let i = 0, len = nums.length; i < len; i++) {\n    const num = nums[i];\n    map.set(num, 1 + (map.get(num) ?? 0));\n    const indexes = indexMap.get(num);\n    if (indexes) {\n      indexes[1] = i;\n    } else {\n      indexMap.set(num, [i, i]);\n    }\n  }\n  const degreeValue = Math.max(...map.values());\n  const degreeList = [];\n  for (const [k, v] of map) v === degreeValue && degreeList.push(k);\n  return Math.min(...degreeList.map(num => computeIndex(num)));\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-20"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a100ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.4MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f18\u5316\u9898\u89e3 1\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function findShortestSubArray(nums: number[]): number {\n  const map: Record<number, [number, number, number]> = {};\n  nums.forEach((num, i) => {\n    const data = map[num];\n    if (data) {\n      data[0]++;\n      data[2] = i;\n    } else {\n      map[num] = [1, i, i];\n    }\n  });\n  const data = Object.values(map);\n  const degreeValue = Math.max(...data.map(([c]) => c));\n  return Math.min(\n    ...data.filter(([c]) => c === degreeValue).map(([, start, end]) => end - start + 1)\n  );\n}\n"})})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var s=t(30758);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);