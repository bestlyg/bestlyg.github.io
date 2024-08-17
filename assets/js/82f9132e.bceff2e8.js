"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[3629],{72834:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var t=s(86070),r=s(25710);const c={},a="12.\u6574\u6570\u8f6c\u7f57\u9a6c\u6570\u5b57",i={id:"leetcode/1-100/\u6574\u6570\u8f6c\u7f57\u9a6c\u6570\u5b57",title:"12.\u6574\u6570\u8f6c\u7f57\u9a6c\u6570\u5b57",description:"\u94fe\u63a5\uff1a12.\u6574\u6570\u8f6c\u7f57\u9a6c\u6570\u5b57",source:"@site/docs/leetcode/1-100/12.\u6574\u6570\u8f6c\u7f57\u9a6c\u6570\u5b57.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u6574\u6570\u8f6c\u7f57\u9a6c\u6570\u5b57",permalink:"/docs/leetcode/1-100/\u6574\u6570\u8f6c\u7f57\u9a6c\u6570\u5b57",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"journal",previous:{title:"11.\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",permalink:"/docs/leetcode/1-100/\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668"},next:{title:"13.\u7f57\u9a6c\u6570\u5b57\u8f6c\u6574\u6570",permalink:"/docs/leetcode/1-100/\u7f57\u9a6c\u6570\u5b57\u8f6c\u6574\u6570"}},l={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"12\u6574\u6570\u8f6c\u7f57\u9a6c\u6570\u5b57",children:"12.\u6574\u6570\u8f6c\u7f57\u9a6c\u6570\u5b57"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/integer-to-roman",children:"12.\u6574\u6570\u8f6c\u7f57\u9a6c\u6570\u5b57"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u6570\u5b66\u3001\u5b57\u7b26\u4e32",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\uff0c\u5c06\u5176\u8f6c\u4e3a\u7f57\u9a6c\u6570\u5b57\u3002\u8f93\u5165\u786e\u4fdd\u5728 1 \u5230 3999 \u7684\u8303\u56f4\u5185\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-02"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a144ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.3MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u5224\u65ad\u6bcf\u4e00\u4f4d\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function intToRoman(num: number): string {\n  const len = (num + '').length;\n  let s = '';\n  switch (len) {\n    case 4: {\n      const n = ~~(num / 1000);\n      for (let i = 0; i < n; i++) s += 'M';\n      s += intToRoman(num % 1000);\n      break;\n    }\n    case 3: {\n      const n = ~~(num / 100);\n      switch (n) {\n        case 9: {\n          s += 'CM';\n          break;\n        }\n        case 8: {\n          s += 'DCCC';\n          break;\n        }\n        case 7: {\n          s += 'DCC';\n          break;\n        }\n        case 6: {\n          s += 'DC';\n          break;\n        }\n        case 5: {\n          s += 'D';\n          break;\n        }\n        case 4: {\n          s += 'CD';\n          break;\n        }\n        case 3: {\n          s += 'CCC';\n          break;\n        }\n        case 2: {\n          s += 'CC';\n          break;\n        }\n        case 1: {\n          s += 'C';\n          break;\n        }\n      }\n      s += intToRoman(num % 100);\n      break;\n    }\n    case 2: {\n      const n = ~~(num / 10);\n      switch (n) {\n        case 9: {\n          s += 'XC';\n          break;\n        }\n        case 8: {\n          s += 'LXXX';\n          break;\n        }\n        case 7: {\n          s += 'LXX';\n          break;\n        }\n        case 6: {\n          s += 'LX';\n          break;\n        }\n        case 5: {\n          s += 'L';\n          break;\n        }\n        case 4: {\n          s += 'XL';\n          break;\n        }\n        case 3: {\n          s += 'XXX';\n          break;\n        }\n        case 2: {\n          s += 'XX';\n          break;\n        }\n        case 1: {\n          s += 'X';\n          break;\n        }\n      }\n      s += intToRoman(num % 10);\n      break;\n    }\n    case 1: {\n      switch (num) {\n        case 9: {\n          s += 'IX';\n          break;\n        }\n        case 8: {\n          s += 'VIII';\n          break;\n        }\n        case 7: {\n          s += 'VII';\n          break;\n        }\n        case 6: {\n          s += 'VI';\n          break;\n        }\n        case 5: {\n          s += 'V';\n          break;\n        }\n        case 4: {\n          s += 'IV';\n          break;\n        }\n        case 3: {\n          s += 'III';\n          break;\n        }\n        case 2: {\n          s += 'II';\n          break;\n        }\n        case 1: {\n          s += 'I';\n          break;\n        }\n      }\n      break;\n    }\n  }\n  return s;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-14"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a212ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.3MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5206\u8282\u5904\u7406\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"const config: Map<number, Map<number, string>> = new Map([\n  [\n    100,\n    new Map([\n      [1, 'C'],\n      [5, 'D'],\n      [10, 'M'],\n    ]),\n  ],\n  [\n    10,\n    new Map([\n      [1, 'X'],\n      [5, 'L'],\n      [10, 'C'],\n    ]),\n  ],\n  [\n    1,\n    new Map([\n      [1, 'I'],\n      [5, 'V'],\n      [10, 'X'],\n    ]),\n  ],\n]);\nfunction intToRoman(num: number): string {\n  let ans = '';\n  if (num >= 1000) {\n    ans += 'M'.repeat(~~(num / 1000));\n    num = num % 1000;\n  }\n  for (const [val, map] of config) {\n    if (num < val) continue;\n    const c1 = map.get(1)!;\n    const c5 = map.get(5)!;\n    const c10 = map.get(10)!;\n    const c = ~~(num / val);\n    num = num % val;\n    if (c === 9) ans += c1 + c10;\n    else if (c >= 5) ans += c5 + c1.repeat(c - 5);\n    else if (c === 4) ans += c1 + c5;\n    else ans += c1.repeat(c);\n  }\n  return ans;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-16"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a148ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.2MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function intToRoman(num: number): string {\n  let ans = '';\n  const list: { val: number; template: [string, string, string] }[] = [\n    {\n      val: 1000,\n      template: ['M', 'M', 'M'],\n    },\n    {\n      val: 100,\n      template: ['M', 'D', 'C'],\n    },\n    {\n      val: 10,\n      template: ['C', 'L', 'X'],\n    },\n    {\n      val: 1,\n      template: ['X', 'V', 'I'],\n    },\n  ];\n  for (const { val, template } of list) {\n    if (num >= val) {\n      ans += createStr(Math.floor(num / val), ...template);\n      num %= val;\n    }\n  }\n  return ans;\n  function createStr(num: number, hight: string, mid: string, low: string) {\n    if (num <= 3) return low.repeat(num);\n    else if (num <= 5) return low.repeat(5 - num) + mid;\n    else if (num <= 8) return mid + low.repeat(num - 5);\n    else return low + hight;\n  }\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>i});var t=s(30758);const r={},c=t.createContext(r);function a(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);