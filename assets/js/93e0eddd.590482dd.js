"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[16595],{56140:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=t(86070),i=t(25710);const r={},l="457.\u73af\u5f62\u6570\u7ec4\u662f\u5426\u5b58\u5728\u5faa\u73af",c={id:"leetcode/401-500/\u73af\u5f62\u6570\u7ec4\u662f\u5426\u5b58\u5728\u5faa\u73af",title:"457.\u73af\u5f62\u6570\u7ec4\u662f\u5426\u5b58\u5728\u5faa\u73af",description:"\u94fe\u63a5\uff1a457.\u73af\u5f62\u6570\u7ec4\u662f\u5426\u5b58\u5728\u5faa\u73af",source:"@site/docs/leetcode/401-500/457.\u73af\u5f62\u6570\u7ec4\u662f\u5426\u5b58\u5728\u5faa\u73af.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u73af\u5f62\u6570\u7ec4\u662f\u5426\u5b58\u5728\u5faa\u73af",permalink:"/docs/leetcode/401-500/\u73af\u5f62\u6570\u7ec4\u662f\u5426\u5b58\u5728\u5faa\u73af",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:457,frontMatter:{},sidebar:"journal",previous:{title:"455.\u5206\u53d1\u997c\u5e72",permalink:"/docs/leetcode/401-500/\u5206\u53d1\u997c\u5e72"},next:{title:"459.\u91cd\u590d\u7684\u5b50\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/401-500/\u91cd\u590d\u7684\u5b50\u5b57\u7b26\u4e32"}},u={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"457\u73af\u5f62\u6570\u7ec4\u662f\u5426\u5b58\u5728\u5faa\u73af",children:"457.\u73af\u5f62\u6570\u7ec4\u662f\u5426\u5b58\u5728\u5faa\u73af"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/circular-array-loop",children:"457.\u73af\u5f62\u6570\u7ec4\u662f\u5426\u5b58\u5728\u5faa\u73af"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u53cc\u6307\u9488",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5982\u679c nums \u4e2d\u5b58\u5728\u5faa\u73af\uff0c\u8fd4\u56de true \uff1b\u5426\u5219\uff0c\u8fd4\u56de false \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-07"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a644ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a89MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function circularArrayLoop(nums: number[]): boolean {\n  const n = nums.length;\n  const queue: [number, Set<number>][] = new Array(n).fill(0).map((_, i) => [i, new Set([i])]);\n  while (queue.length) {\n    const [idx, set] = queue.shift()!;\n    const next = getNextIdx(idx, nums[idx]);\n    if (next === idx) continue;\n    if (set.has(next)) return true;\n    if ((nums[idx] > 0 && nums[next] < 0) || (nums[idx] < 0 && nums[next] > 0) || set.size === n)\n      continue;\n    set.add(next);\n    queue.push([next, set]);\n  }\n  return false;\n  function getNextIdx(idx: number, step: number): number {\n    let ans = idx + step;\n    while (ans >= n) ans -= n;\n    while (ans < 0) ans += n;\n    return ans;\n  }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-08"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u4e8e\u6bcf\u4e2a\u8d77\u70b9\u8fdb\u884c\u53cc\u6307\u9488\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int getNext(int i, vector<int>& nums) {\n        int delta = 1000 * nums.size(), n = nums.size();\n        if (nums[i] < 0) delta *= -1;\n        nums[i] += delta;\n        return ((i + nums[i]) % n + n) % n;\n    }\n    bool circularArrayLoop(vector<int>& nums) {\n        for (int i = 0; i < nums.size(); i++) {\n            if (abs(nums[i]) > 1000) continue;\n            int p = i, q = i;\n            do {\n                p = getNext(p, nums);\n                q = getNext(getNext(q, nums), nums);\n            } while (p != q);\n            int a = 0, b = 0, l = 0;\n            do {\n                if (nums[p] > 0)\n                    a++;\n                else\n                    b++;\n                l++;\n                p = getNext(p, nums);\n            } while (p != q);\n            if (l > 1 && (a == 0 || b == 0)) return 1;\n        }\n        return 0;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var s=t(30758);const i={},r=s.createContext(i);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);