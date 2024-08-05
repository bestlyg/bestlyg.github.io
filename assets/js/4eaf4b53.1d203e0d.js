"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[39937],{50205:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=t(86070),i=t(25710);const r={},l="739.\u6bcf\u65e5\u6e29\u5ea6",c={id:"leetcode/701-800/\u6bcf\u65e5\u6e29\u5ea6",title:"739.\u6bcf\u65e5\u6e29\u5ea6",description:"\u94fe\u63a5\uff1a739.\u6bcf\u65e5\u6e29\u5ea6",source:"@site/docs/leetcode/701-800/739.\u6bcf\u65e5\u6e29\u5ea6.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u6bcf\u65e5\u6e29\u5ea6",permalink:"/web/site/docs/leetcode/701-800/\u6bcf\u65e5\u6e29\u5ea6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:739,frontMatter:{},sidebar:"journal",previous:{title:"738.\u5355\u8c03\u9012\u589e\u7684\u6570\u5b57",permalink:"/web/site/docs/leetcode/701-800/\u5355\u8c03\u9012\u589e\u7684\u6570\u5b57"},next:{title:"740.\u5220\u9664\u5e76\u83b7\u5f97\u70b9\u6570",permalink:"/web/site/docs/leetcode/701-800/\u5220\u9664\u5e76\u83b7\u5f97\u70b9\u6570"}},o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"739\u6bcf\u65e5\u6e29\u5ea6",children:"739.\u6bcf\u65e5\u6e29\u5ea6"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/daily-temperatures",children:"739.\u6bcf\u65e5\u6e29\u5ea6"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6570\u7ec4\u3001\u5355\u8c03\u6808",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6839\u636e\u6bcf\u65e5 \u6c14\u6e29 \u5217\u8868\uff0c\u8bf7\u91cd\u65b0\u751f\u6210\u4e00\u4e2a\u5217\u8868\uff0c\u5bf9\u5e94\u4f4d\u7f6e\u7684\u8f93\u51fa\u662f\u9700\u8981\u518d\u7b49\u5f85\u591a\u4e45\u6e29\u5ea6\u624d\u4f1a\u5347\u9ad8\u8d85\u8fc7\u8be5\u65e5\u7684\u5929\u6570\u3002\u5982\u679c\u4e4b\u540e\u90fd\u4e0d\u4f1a\u5347\u9ad8\uff0c\u8bf7\u5728\u8be5\u4f4d\u7f6e\u7528 0 \u6765\u4ee3\u66ff\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-11"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1732ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5012\u5e8f\u904d\u5386\uff0c\u76f8\u6bd4\u8d77\u6b63\u5e8f\u904d\u5386\u7684\u6bcf\u6b21\u90fd\u904d\u5386\u5230\u91cd\u590d\u503c\u8282\u7ea6\u65f6\u95f4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function dailyTemperatures(T: number[]): number[] {\n  const len = T.length;\n  if (len === 0) return [];\n  let ans: number[] = [];\n  for (let i = len - 1; i >= 0; i--) {\n    if (i === len - 1) {\n      ans.unshift(0);\n      continue;\n    }\n    ans.unshift(find(T[i], i + 1));\n  }\n  return ans;\n  function find(num: number, index: number): number {\n    for (let i = index; i < len; i++) if (T[i] > num) return i - index + 1;\n    return 0;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-11"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a196ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a50.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7ef4\u62a4\u5355\u8c03\u6808\uff0c\u6808\u9876\u5143\u7d20\u5c0f\u4e8e\u5f53\u524d\u5143\u7d20\u5373\u8d4b\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function dailyTemperatures(T: number[]): number[] {\n  const stack: number[] = [];\n  const ans: number[] = [];\n  for (let i = 0, len = T.length; i < len; i++) {\n    while (stack.length !== 0 && T[stack.slice(-1)[0]] < T[i]) {\n      const index = stack.pop() as number;\n      ans[index] = i - index;\n    }\n    stack.push(i);\n  }\n  while (stack.length !== 0) ans[stack.pop() as number] = 0;\n  return ans;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-19"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a240ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a60.6MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5355\u8c03\u9012\u589e\u6808\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function dailyTemperatures(temperatures: number[]): number[] {\n  const stack: number[] = [];\n  const len = temperatures.length;\n  const ans: number[] = new Array(len).fill(0);\n  for (let i = 0; i < len; i++) {\n    const v = temperatures[i];\n    while (stack.length && temperatures[stack[stack.length - 1]] < v) {\n      const prev = stack.pop()!;\n      ans[prev] = i - prev;\n    }\n    stack.push(i);\n  }\n  return ans;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(30758);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);