"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[48550],{55243:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>j,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var r=e(86070),i=e(25710);const a="/**\n * \u5229\u7528\u6a21\u5f0f\u4e32\u751f\u6210\u72b6\u6001\u673a\n *\n * pHead********pEnd\n * pHead === pEnd\n *\n * @param pattern \u6a21\u5f0f\u4e32\n * @returns \u4f20\u5165\u5f53\u524d\u914d\u5bf9\u7684\u6700\u540e\u4e00\u4f4d\uff0c\u8fd4\u56de\u6a21\u5f0f\u4e32\u5934\u90e8\u80fd\u5339\u914d\u7684\u6700\u540e\u4e00\u4f4d\n */\nfunction getNext(pattern: string): number[] {\n    const next = [-1];\n    /**\n     * i \u5df2\u5339\u914d\u6210\u529f\u7684\u6700\u540e\u4e00\u4f4d\n     * j \u5728\u6700\u540e\u4e00\u4f4d\u4e3ai\u7684\u524d\u63d0\u4e0b\uff0c\u5339\u914d\u6700\u591a\u80fd\u5339\u914d\u5230\u524dj\u4f4d\n     */\n    for (let i = 1, j = -1; pattern[i]; i++) {\n        while (j !== -1 && pattern[i] !== pattern[j + 1]) j = next[j];\n        if (pattern[i] === pattern[j + 1]) j++;\n        next[i] = j;\n    }\n    return next;\n}\nexport function kmp(text: string, pattern: string): number {\n    const next = getNext(pattern);\n    /**\n     * i \u5f53\u524d\u5339\u914d\u5230\u5b57\u7b26\u4e0b\u6807\n     * j \u5f53\u524d\u6210\u529f\u5339\u914d\u7684\u6a21\u5f0f\u4e32\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u7684\u4e0b\u6807\n     */\n    for (let i = 0, j = -1; text[i]; i++) {\n        const c = text[i];\n        while (j !== -1 && c !== pattern[j + 1]) j = next[j];\n        if (c === pattern[j + 1]) j++;\n        if (!pattern[j + 1]) return i - j;\n    }\n    return -1;\n}\n",s="function getNext(pattern: string): number[] {\n    const n = pattern.length;\n    const ans: number[] = new Array(n).fill(-1);\n    for (let i = 1, j = -1; i < n; i++) {\n        while (j !== -1 && pattern[j + 1] !== pattern[i]) j = ans[j];\n        if (pattern[j + 1] === pattern[i]) j++;\n        ans[i] = j;\n    }\n    return ans;\n}\nconst COUNT = 26;\nconst codeA = 'a'.codePointAt(0)!;\n/**\n *\n * @param pattern\n * @param next\n * @returns \u8fd4\u56de\u8df3\u8dc3\u6570\u7ec4\uff0c\u8868\u793a\u5f53j\u7684\u503c\u4e3ai\u65f6\uff0c\u4e14j\u7684\u4e0b\u4e00\u4e2a\u7684\u503c\u4e3aj\u65f6\uff0c\u8fdb\u884c\u8df3\u8dc3\n */\nfunction getJump(pattern: string, next: number[]): number[][] {\n    const n = pattern.length;\n    const ans: number[][] = new Array(n).fill(0).map(_ => new Array(COUNT).fill(-1));\n    ans[-1] = new Array(COUNT).fill(-1);\n    ans[-1][pattern.codePointAt(0)! - codeA] = 0;\n    for (let i = 0; i < n; i++) {\n        const nextI = next[i];\n        ans[i] = [...ans[nextI]];\n        ans[i][pattern.codePointAt(i + 1)! - codeA] = i + 1;\n    }\n    return ans;\n}\nexport function kmp2(text: string, pattern: string): number {\n    const next = getNext(pattern);\n    const jump = getJump(pattern, next);\n    const n = text.length;\n    for (let i = 0, j = -1; i < n; i++) {\n        j = jump[j][text.codePointAt(i)! - codeA];\n        if (j === pattern.length - 1) return i - pattern.length + 1;\n    }\n    return -1;\n}\n";var l=e(82598);const c={},o="KMP(KMP)",p={id:"\u7b97\u6cd5/\u4e32/kmp",title:"KMP(KMP)",description:"- KMP \u662f Knuth\u2013Morris\u2013Pratt \u7684\u7b80\u79f0\uff08\u53d6\u540d\u81ea 3 \u4f4d\u53d1\u660e\u4eba\u7684\u540d\u5b57\uff09\uff0c\u4e8e 1977 \u5e74\u53d1\u5e03\u3002",source:"@site/docs/\u7b97\u6cd5/\u4e32/kmp.mdx",sourceDirName:"\u7b97\u6cd5/\u4e32",slug:"/\u7b97\u6cd5/\u4e32/kmp",permalink:"/docs/\u7b97\u6cd5/\u4e32/kmp",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u66b4\u529b\u5339\u914d(BruteForce)",permalink:"/docs/\u7b97\u6cd5/\u4e32/bruteForce"},next:{title:"Manacher(Manacher)",permalink:"/docs/\u7b97\u6cd5/\u4e32/manacher"}},j={},u=[{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801",level:2}];function x(n){const t={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kmpkmp",children:"KMP(KMP)"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"KMP \u662f Knuth\u2013Morris\u2013Pratt \u7684\u7b80\u79f0\uff08\u53d6\u540d\u81ea 3 \u4f4d\u53d1\u660e\u4eba\u7684\u540d\u5b57\uff09\uff0c\u4e8e 1977 \u5e74\u53d1\u5e03\u3002"}),"\n",(0,r.jsx)(t.li,{children:"KMP \u7684\u7cbe\u5999\u4e4b\u5904\uff1a\u5145\u5206\u5229\u7528\u4e86\u6b64\u524d\u6bd4\u8f83\u8fc7\u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u5f88\u806a\u660e\u5730\u8df3\u8fc7\u4e00\u4e9b\u4e0d\u5fc5\u8981\u7684\u6bd4\u8f83\u4f4d\u7f6e\uff0cKMP \u4f1a\u9884\u5148\u6839\u636e\u6a21\u5f0f\u4e32\u7684\u5185\u5bb9\u751f\u6210\u4e00\u5f20 next \u8868\uff08\u4e00\u822c\u662f\u4e2a\u6570\u7ec4\uff09"}),"\n",(0,r.jsx)(t.li,{children:"\u5229\u7528\u72b6\u6001\u673a\u539f\u7406\uff0c\u5bf9\u6a21\u5f0f\u4e32\u8fdb\u884c\u751f\u6210\u72b6\u6001\u673a\u6570\u7ec4\uff0c\u904d\u5386\u6587\u672c\u4e32\uff0c\u5bf9\u4e8e\u6bcf\u4e00\u4f4d\u6587\u672c\u4e32\u66f4\u6539\u6a21\u5f0f\u4e32\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(t.li,{children:"\u6bcf\u6b21\u53ea\u5904\u7406\u5f53\u524d\u5b57\u7b26\uff0c\u4e0d\u9700\u8981\u5168\u6587\u672c\u4e32\u7684\u8f7d\u5165\uff0c\u5e38\u7528\u4e8e\u6d41\u6570\u636e\u7684\u5339\u914d\u3002"}),"\n"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u5bf9\u6a21\u5f0f\u4e32\u8fdb\u884c\u5904\u7406\uff0c\u904d\u5386\u6a21\u5f0f\u4e32\u4f9d\u6b21\u5224\u65ad\u4ee5\u5f53\u524d\u4f4d\u7f6e\u7ed3\u5c3e\u65f6\uff0c\u6700\u591a n \u4f4d\u5c3e\u90e8\u5b57\u7b26\u4e32\u80fd\u5339\u914d n \u4f4d\u5934\u90e8\u5b57\u7b26\u4e32\uff0c\u751f\u6210 next \u6570\u7ec4"}),"\n",(0,r.jsx)(t.li,{children:"\u904d\u5386\u6587\u672c\u4e32\u4f9d\u6b21\u8fdb\u884c\u5339\u914d"}),"\n",(0,r.jsx)(t.li,{children:"\u5f53\u524d\u5b57\u7b26\u65e0\u6cd5\u5339\u914d\u65f6\uff0c\u8fdb\u884c\u56de\u6eaf\u5feb\u901f\u524d\u8fdb"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u6838\u5fc3\u4ee3\u7801",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,r.jsx)(l.A,{language:"tsx",children:a}),"\n",(0,r.jsx)(l.A,{language:"tsx",children:s})]})}function d(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}}}]);