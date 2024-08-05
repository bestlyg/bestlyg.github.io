"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[74281],{10846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(86070),r=n(25710);const i={},l="301.\u5220\u9664\u65e0\u6548\u7684\u62ec\u53f7",o={id:"leetcode/301-400/\u5220\u9664\u65e0\u6548\u7684\u62ec\u53f7",title:"301.\u5220\u9664\u65e0\u6548\u7684\u62ec\u53f7",description:"\u94fe\u63a5\uff1a301.\u5220\u9664\u65e0\u6548\u7684\u62ec\u53f7",source:"@site/docs/leetcode/301-400/301.\u5220\u9664\u65e0\u6548\u7684\u62ec\u53f7.md",sourceDirName:"leetcode/301-400",slug:"/leetcode/301-400/\u5220\u9664\u65e0\u6548\u7684\u62ec\u53f7",permalink:"/docs/leetcode/301-400/\u5220\u9664\u65e0\u6548\u7684\u62ec\u53f7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:301,frontMatter:{},sidebar:"journal",previous:{title:"231.2\u7684\u5e42",permalink:"/docs/leetcode/201-300/231.2\u7684\u5e42"},next:{title:"303.\u533a\u57df\u548c\u68c0\u7d22-\u6570\u7ec4\u4e0d\u53ef\u53d8",permalink:"/docs/leetcode/301-400/\u533a\u57df\u548c\u68c0\u7d22-\u6570\u7ec4\u4e0d\u53ef\u53d8"}},c={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"301\u5220\u9664\u65e0\u6548\u7684\u62ec\u53f7",children:"301.\u5220\u9664\u65e0\u6548\u7684\u62ec\u53f7"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(t.a,{href:"https://leetcode.cn/problems/remove-invalid-parentheses",children:"301.\u5220\u9664\u65e0\u6548\u7684\u62ec\u53f7"}),(0,s.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,s.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5b57\u7b26\u4e32\u3001\u56de\u6eaf",(0,s.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u7531\u82e5\u5e72\u62ec\u53f7\u548c\u5b57\u6bcd\u7ec4\u6210\u7684\u5b57\u7b26\u4e32 s \uff0c\u5220\u9664\u6700\u5c0f\u6570\u91cf\u7684\u65e0\u6548\u62ec\u53f7\uff0c\u4f7f\u5f97\u8f93\u5165\u7684\u5b57\u7b26\u4e32\u6709\u6548\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-27"}),"\n",(0,s.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,s.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.3MB"}),"\n",(0,s.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"const map: Record<string, string[]> = {};\nfunction removeInvalidParentheses(s: string): string[] {\n  if (map[s]) return map[s];\n  const replaceStr = s.replace(new RegExp('[(]|[)]', 'g'), '');\n  const leftList: number[] = [];\n  const rightList: number[] = [];\n  const n = s.length;\n  for (let i = 0; i < n; i++) {\n    const ch = s[i];\n    if (ch === '(') leftList.push(i);\n    if (ch === ')') rightList.push(i);\n  }\n  if (leftList.length === 0 || rightList.length === 0) return [replaceStr];\n  let max = replaceStr.length;\n  const ans = new Set<string>(['', replaceStr]);\n  for (const left of leftList) {\n    let rightIdx = findRight(left);\n    for (let rlen = rightList.length; rightIdx < rlen; rightIdx++) {\n      const right = rightList[rightIdx];\n      for (const s0 of removeInvalidParentheses(s.substring(0, left))) {\n        for (const s1 of removeInvalidParentheses(s.substring(left + 1, right))) {\n          for (const s2 of removeInvalidParentheses(s.substring(right + 1))) {\n            const str = `${s0}(${s1})${s2}`;\n            max = Math.max(max, str.length);\n            ans.add(str);\n          }\n        }\n      }\n    }\n  }\n  return (map[s] = Array.from(ans).filter(v => v.length === max));\n  function findRight(leftIdx: number) {\n    let left = 0;\n    let right = rightList.length - 1;\n    if (rightList[right] < leftIdx) return Infinity;\n    while (left < right) {\n      const mid = (left + right) >> 1;\n      if (rightList[mid] >= leftIdx) right = mid;\n      else left = mid + 1;\n    }\n    return left;\n  }\n}\n"})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},25710:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var s=n(30758);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);