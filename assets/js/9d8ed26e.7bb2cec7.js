"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[38768],{50499:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1-100/\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4","title":"49.\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4","description":"\u94fe\u63a5\uff1a49.\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4","source":"@site/docs/leetcode/1-100/49.\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4.md","sourceDirName":"leetcode/1-100","slug":"/leetcode/1-100/\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4","permalink":"/docs/leetcode/1-100/\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":49,"frontMatter":{},"sidebar":"journal","previous":{"title":"48.\u65cb\u8f6c\u56fe\u50cf","permalink":"/docs/leetcode/1-100/\u65cb\u8f6c\u56fe\u50cf"},"next":{"title":"50.Pow(x,n)","permalink":"/docs/leetcode/1-100/Pow(x,n)"}}');var r=t(25105),c=t(8556);const i={},o="49.\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4",l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"49\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4",children:"49.\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/group-anagrams",children:"49.\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u6392\u5e8f",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u5c06\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u7ec4\u5408\u5728\u4e00\u8d77\u3002\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u6307\u5b57\u6bcd\u76f8\u540c\uff0c\u4f46\u6392\u5217\u4e0d\u540c\u7684\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-12-14"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a176ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a50.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528 map \u53bb\u50a8\u5b58,key \u91cd\u65b0\u53d8\u6362\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function groupAnagrams(strs: string[]): string[][] {\n  const cache: Record<string, string[]> = {};\n  const toKey = (str: string) =>\n    str\n      .split('')\n      .sort((a, b) => a.codePointAt(0)! - b.codePointAt(0)!)\n      .join('');\n  for (const str of strs) {\n    const key = toKey(str);\n    let arr = cache[key];\n    if (!arr) {\n      cache[key] = arr = [];\n    }\n    arr.push(str);\n  }\n  return Object.values(cache);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-23"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u6392\u5e8f\u540e\u5f52\u5e76\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        unordered_map<string, vector<string>> m;\n        for (int i = 0; i < strs.size(); i++) {\n            string str = strs[i];\n            string head = str;\n            sort(head.begin(), head.end());\n            m[head].push_back(str);\n        }\n        vector<vector<string>> ans;\n        for (auto it = m.begin(); it != m.end(); it++) {\n            ans.push_back(it->second);\n        }\n        return ans;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(58101);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);