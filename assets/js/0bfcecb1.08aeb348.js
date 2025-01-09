"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[23035],{11587:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/401-500/\u975e\u9012\u51cf\u5b50\u5e8f\u5217","title":"491.\u975e\u9012\u51cf\u5b50\u5e8f\u5217","description":"\u94fe\u63a5\uff1a491.\u975e\u9012\u51cf\u5b50\u5e8f\u5217","source":"@site/docs/leetcode/401-500/491.\u975e\u9012\u51cf\u5b50\u5e8f\u5217.md","sourceDirName":"leetcode/401-500","slug":"/leetcode/401-500/\u975e\u9012\u51cf\u5b50\u5e8f\u5217","permalink":"/docs/leetcode/401-500/\u975e\u9012\u51cf\u5b50\u5e8f\u5217","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":491,"frontMatter":{},"sidebar":"journal","previous":{"title":"488.\u7956\u739b\u6e38\u620f","permalink":"/docs/leetcode/401-500/\u7956\u739b\u6e38\u620f"},"next":{"title":"492.\u6784\u9020\u77e9\u5f62","permalink":"/docs/leetcode/401-500/\u6784\u9020\u77e9\u5f62"}}');var s=t(25105),o=t(8556);const c={},i="491.\u975e\u9012\u51cf\u5b50\u5e8f\u5217",l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"491\u975e\u9012\u51cf\u5b50\u5e8f\u5217",children:"491.\u975e\u9012\u51cf\u5b50\u5e8f\u5217"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/non-decreasing-subsequences",children:"491.\u975e\u9012\u51cf\u5b50\u5e8f\u5217"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u56de\u6eaf",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6574\u578b\u6570\u7ec4, \u4f60\u7684\u4efb\u52a1\u662f\u627e\u5230\u6240\u6709\u8be5\u6570\u7ec4\u7684\u9012\u589e\u5b50\u5e8f\u5217\uff0c\u9012\u589e\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\u81f3\u5c11\u662f 2\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-08-25"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a292ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a55.9MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6df1\u5ea6\u904d\u5386\u6bcf\u79cd\u53ef\u80fd,\u526a\u7eb8+\u56de\u6eaf"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function findSubsequences(nums: number[]): number[][] {\n  const len = nums.length;\n  if (len === 0) return [];\n  const arr: number[][] = [];\n  const arrSet = new Set<string>();\n  findNext();\n  return arr.filter(v => v.length !== 1);\n  function findNext(now: number[] = [], i = 0): void {\n    for (; i < len; i++) {\n      const num = nums[i];\n      if (now[now.length - 1] > num) continue;\n      now.push(num);\n      const clone = [...now];\n      const cloneSetStr = clone.join(',');\n      if (!arrSet.has(cloneSetStr)) {\n        arr.push(clone);\n        arrSet.add(cloneSetStr);\n      }\n      findNext(now, i + 1);\n      now.pop();\n    }\n  }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(58101);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);