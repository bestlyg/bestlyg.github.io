"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[65226],{47236:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"\u7b97\u6cd5/\u4e32/sunday","title":"Sunday(Sunday)","description":"- Sunday \u7b97\u6cd5\u7531 Daniel M.Sunday \u5728 1990 \u5e74\u63d0\u51fa\u3002","source":"@site/docs/\u7b97\u6cd5/\u4e32/sunday.mdx","sourceDirName":"\u7b97\u6cd5/\u4e32","slug":"/\u7b97\u6cd5/\u4e32/sunday","permalink":"/docs/\u7b97\u6cd5/\u4e32/sunday","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"ShiftAnd(ShiftAnd)","permalink":"/docs/\u7b97\u6cd5/\u4e32/shiftAnd"},"next":{"title":"RSA(RSA)","permalink":"/docs/\u7b97\u6cd5/\u52a0\u5bc6\u7b97\u6cd5/rsa"}}');var i=t(86070),s=t(31503);const a="/**\n * \u904d\u5386\u6a21\u5f0f\u4e32\uff0c\u83b7\u53d6\u6bcf\u4e2a\u5b57\u7b26\u51fa\u73b0\u7684\u6700\u540e\u4e00\u4e2a\u4e0b\u6807\u4f4d\n * @param pattern\n * @returns \u8fd4\u56de\u51fd\u6570\uff0c\u4f20\u5165\u4efb\u610f\u5b57\u7b26\uff0c\u8fd4\u56de\u8be5\u5b57\u7b26\u5728\u6a21\u5f0f\u4e32\u4e2d\u7684\u4e0b\u6807\u4f4d\uff0c\u4e0d\u5b58\u5728\u8fd4\u56de-1\n */\nfunction getMap(pattern: string): (c: string) => number {\n    const map: Record<string, number> = {};\n    for (let i = 0; pattern[i]; i++) map[pattern[i]] = i;\n    return c => map[c] ?? -1;\n}\nexport function sunday(text: string, pattern: string): number {\n    const map = getMap(pattern);\n    const len = pattern.length;\n    /**\n     * i \u5f53\u524d\u5339\u914d\u7684\u5b57\u7b26\u4e0b\u6807\u4f4d\n     * len - map( text[i + len]  ) \u5bf9\u9f50\u6587\u672c\u4e32\u4e0e\u6a21\u5f0f\u4e32\u7b2ci+len\u4f4d\u7684\u4e0b\u6807\uff0c\u8fdb\u884c\u5feb\u901f\u5339\u914d\n     */\n    for (let i = 0; text[i]; i += len - map(text[i + len])) {\n        let j = 0;\n        while (pattern[j] && pattern[j] === text[i + j]) j++;\n        if (!pattern[j]) return i;\n    }\n    return -1;\n}\n";var l=t(21675);const d={},u="Sunday(Sunday)",c={},o=[{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801",level:2}];function p(n){const e={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"sundaysunday",children:"Sunday(Sunday)"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Sunday \u7b97\u6cd5\u7531 Daniel M.Sunday \u5728 1990 \u5e74\u63d0\u51fa\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u53ea\u4e0d\u8fc7 Sunday \u7b97\u6cd5\u662f\u4ece\u524d\u5f80\u540e\u5339\u914d\uff0c\u5728\u5339\u914d\u5931\u8d25\u65f6\u5173\u6ce8\u7684\u662f\u4e3b\u4e32\u4e2d\u53c2\u52a0\u5339\u914d\u7684\u6700\u672b\u4f4d\u5b57\u7b26\u7684\u4e0b\u4e00\u4f4d\u5b57\u7b26\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5e38\u7528\u4f5c\u5feb\u901f\u5339\u914d\u6587\u672c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u5bf9\u6a21\u5f0f\u4e32\u8fdb\u884c\u5904\u7406\uff0c\u83b7\u53d6\u6bcf\u4e2a\u5b57\u7b26\u6700\u540e\u4e00\u4f4d\u51fa\u73b0\u7684\u4e0b\u6807"}),"\n",(0,i.jsx)(e.li,{children:"\u904d\u5386\u6587\u672c\u4e32\u4f9d\u6b21\u8fdb\u884c\u5339\u914d"}),"\n",(0,i.jsx)(e.li,{children:"\u5f53\u524d\u5b57\u7b26\u65e0\u6cd5\u5339\u914d\u65f6\uff0c\u83b7\u53d6 i+len \u4e0b\u6807\u7684\u5b57\u7b26\u4ece\u6a21\u5f0f\u4e32\u4e2d\u8fdb\u884c\u67e5\u627e\uff0c\u4ece\u800c\u8fdb\u884c\u5feb\u901f\u5339\u914d"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6838\u5fc3\u4ee3\u7801",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,i.jsx)(l.A,{language:"tsx",children:a})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}}}]);