"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[64333],{95198:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"leetcode/1701-1800/\u4e0e\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6700\u5927\u5f02\u6216\u503c","title":"1707.\u4e0e\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6700\u5927\u5f02\u6216\u503c","description":"\u94fe\u63a5\uff1a1707.\u4e0e\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6700\u5927\u5f02\u6216\u503c","source":"@site/docs/leetcode/1701-1800/1707.\u4e0e\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6700\u5927\u5f02\u6216\u503c.md","sourceDirName":"leetcode/1701-1800","slug":"/leetcode/1701-1800/\u4e0e\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6700\u5927\u5f02\u6216\u503c","permalink":"/docs/leetcode/1701-1800/\u4e0e\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6700\u5927\u5f02\u6216\u503c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1707,"frontMatter":{},"sidebar":"journal","previous":{"title":"1706.\u7403\u4f1a\u843d\u4f55\u5904","permalink":"/docs/leetcode/1701-1800/\u7403\u4f1a\u843d\u4f55\u5904"},"next":{"title":"1710.\u5361\u8f66\u4e0a\u7684\u6700\u5927\u5355\u5143\u6570","permalink":"/docs/leetcode/1701-1800/\u5361\u8f66\u4e0a\u7684\u6700\u5927\u5355\u5143\u6570"}}');var s=t(25105),o=t(8556);const l={},i="1707.\u4e0e\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6700\u5927\u5f02\u6216\u503c",c={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1707\u4e0e\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6700\u5927\u5f02\u6216\u503c",children:"1707.\u4e0e\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6700\u5927\u5f02\u6216\u503c"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-xor-with-an-element-from-array",children:"1707.\u4e0e\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6700\u5927\u5f02\u6216\u503c"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u5b57\u5178\u6811\u3001\u6570\u7ec4",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 answer \u4f5c\u4e3a\u67e5\u8be2\u7684\u7b54\u6848\uff0c\u5176\u4e2d answer.length == queries.length \u4e14 answer[i] \u662f\u7b2c i \u4e2a\u67e5\u8be2\u7684\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-23"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a3000ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a122.9MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6784\u5efa\u5b57\u5178\u6811\uff0c\u6392\u5e8f\u540e\u8ba1\u7b97\u6700\u5927\u53ef\u80fd\u5f02\u6216\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class Trie {\n  left: Trie | null = null;\n  right: Trie | null = null;\n  val: number | null = null;\n}\nfunction maximizeXor(nums: number[], queries: number[][]): number[] {\n  const root = new Trie();\n  const add = (num: number) => {\n    let node = root;\n    for (let i = 31; i >= 0; i--) {\n      const val = (num >> i) & 1;\n      if (val === 1) node = node.right ?? (node.right = new Trie());\n      else node = node.left ?? (node.left = new Trie());\n      node.val = num;\n    }\n  };\n  const select = (num: number): number => {\n    let node = root;\n    for (let i = 31; i >= 0; i--) {\n      const val = (num >> i) & 1;\n      if (val === 1) node = node.left ?? node.right!;\n      else node = node.right ?? node.left!;\n    }\n    return node.val!;\n  };\n  nums.sort((a, b) => a - b);\n  const queryMap = new Map<number[], number>();\n  queries.forEach((v, i) => queryMap.set(v, i));\n  queries.sort(([, a], [, b]) => a - b);\n  const ans: number[] = [];\n  for (const query of queries) {\n    const [x, m] = query;\n    while (nums.length > 0 && nums[0] <= m) add(nums.shift()!);\n    const index = queryMap.get(query)!;\n    ans[index] = root.left === null && root.right === null ? -1 : x ^ select(x);\n  }\n  return ans;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(58101);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);