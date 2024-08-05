"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[36475],{61451:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=t(86070),c=t(25710);const r={},s="38.\u5916\u89c2\u6570\u5217",l={id:"leetcode/1-100/\u5916\u89c2\u6570\u5217",title:"38.\u5916\u89c2\u6570\u5217",description:"\u94fe\u63a5\uff1a38.\u5916\u89c2\u6570\u5217",source:"@site/docs/leetcode/1-100/38.\u5916\u89c2\u6570\u5217.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u5916\u89c2\u6570\u5217",permalink:"/web/site/docs/leetcode/1-100/\u5916\u89c2\u6570\u5217",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:38,frontMatter:{},sidebar:"journal",previous:{title:"37.\u89e3\u6570\u72ec",permalink:"/web/site/docs/leetcode/1-100/\u89e3\u6570\u72ec"},next:{title:"39.\u7ec4\u5408\u603b\u548c",permalink:"/web/site/docs/leetcode/1-100/\u7ec4\u5408\u603b\u548c"}},d={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - c",id:"\u9898\u89e3-2---c",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"38\u5916\u89c2\u6570\u5217",children:"38.\u5916\u89c2\u6570\u5217"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/count-and-say",children:"38.\u5916\u89c2\u6570\u5217"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6b63\u6574\u6570 n \uff0c\u8f93\u51fa\u5916\u89c2\u6570\u5217\u7684\u7b2c n \u9879\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-15"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u5c42\u7ea7\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function countAndSay(n: number): string {\n  return findNext();\n  function findNext(str = '1', level = n): string {\n    if (level === 1) return str;\n    let next = '';\n    for (let i = 0, l = str.length; i < l; i++) {\n      const ch = str[i];\n      let cnt = 1;\n      while (i < l - 1 && str[i + 1] === ch) {\n        i++;\n        cnt++;\n      }\n      next += cnt + ch;\n    }\n    return findNext(next, level - 1);\n  }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---c",children:"\u9898\u89e3 2 - c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-30"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.4MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u5bf9\u6bcf\u4e00\u5c42\u8fdb\u884c\u5904\u7406\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#define MAX 20000\nchar *dfs(char *str, int cnt) {\n    if (cnt == 1) return str;\n    int len = strlen(str), idx = 0;\n    char next[MAX];\n    for (int i = 0; i < len; i++) {\n        char ch = str[i];\n        int cnt = 1;\n        while (i + 1 < len && ch == str[i + 1]) {\n            ++i;\n            ++cnt;\n        }\n        idx += sprintf(next + idx, "%d", cnt);\n        next[idx++] = ch;\n    }\n    next[idx] = \'\\0\';\n    return dfs(next, cnt - 1);\n}\nchar * countAndSay(int n){\n    return dfs("1", n);\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-20"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.5MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'class Solution {\n   public:\n    string countAndSay(int n) {\n        string str = "1";\n        while (--n) {\n            string next = "";\n            for (int i = 0, n = str.size(); i < n; i++) {\n                char ch = str[i];\n                int cnt = 1;\n                while (i + 1 < n && str[i + 1] == ch) i++, cnt++;\n                while (cnt) {\n                    next += cnt % 10 + \'0\';\n                    cnt /= 10;\n                }\n                next += ch;\n            }\n            str = next;\n        }\n        return str;\n    }\n};\n'})})]})}function x(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>l});var i=t(30758);const c={},r=i.createContext(c);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);