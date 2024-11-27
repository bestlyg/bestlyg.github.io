"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[35896],{87247:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"leetcode/1-100/\u5168\u6392\u5217","title":"46.\u5168\u6392\u5217","description":"\u94fe\u63a5\uff1a46.\u5168\u6392\u5217","source":"@site/docs/leetcode/1-100/46.\u5168\u6392\u5217.md","sourceDirName":"leetcode/1-100","slug":"/leetcode/1-100/\u5168\u6392\u5217","permalink":"/docs/leetcode/1-100/\u5168\u6392\u5217","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":46,"frontMatter":{},"sidebar":"journal","previous":{"title":"45.\u8df3\u8dc3\u6e38\u620fII","permalink":"/docs/leetcode/1-100/\u8df3\u8dc3\u6e38\u620fII"},"next":{"title":"47.\u5168\u6392\u5217II","permalink":"/docs/leetcode/1-100/\u5168\u6392\u5217II"}}');var r=s(86070),i=s(31503);const l={},c="46.\u5168\u6392\u5217",o={},u=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"46\u5168\u6392\u5217",children:"46.\u5168\u6392\u5217"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/permutations",children:"46.\u5168\u6392\u5217"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u56de\u6eaf",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a \u6ca1\u6709\u91cd\u590d \u6570\u5b57\u7684\u5e8f\u5217\uff0c\u8fd4\u56de\u5176\u6240\u6709\u53ef\u80fd\u7684\u5168\u6392\u5217\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-25"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37.3MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u901a\u8fc7\u9012\u5f52\u5bf9\u6bcf\u5c42\u5224\u65ad\u540e\u538b\u6808\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar permute = function (nums) {\n  const len = nums.length;\n  if (len === 1) return [nums];\n  const res = [];\n  for (let i = 0; i < len; i++) {\n    const newNums = permute(nums.filter((_, index) => index !== i));\n    for (const newNum of newNums) res.push([nums[i]].concat(newNum));\n  }\n  return res;\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-21"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5168\u6392\u5217\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function permute(nums: number[]): number[][] {\n  const ans: number[][] = [];\n  find();\n  return ans;\n  function find(list = nums, queue: number[] = []): void {\n    if (list.length === 0) {\n      ans.push(queue.slice());\n      return;\n    }\n    for (let i = 0, l = list.length; i < l; i++) {\n      queue.push(list[i]);\n      find([...list.slice(0, i), ...list.slice(i + 1)], queue);\n      queue.pop();\n    }\n  }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31503:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var t=s(30758);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);