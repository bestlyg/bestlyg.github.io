"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[31796],{21002:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=s(86070),t=s(25710);const r={},c="522.\u6700\u957f\u7279\u6b8a\u5e8f\u5217II",l={id:"leetcode/501-600/\u6700\u957f\u7279\u6b8a\u5e8f\u5217II",title:"522.\u6700\u957f\u7279\u6b8a\u5e8f\u5217II",description:"\u94fe\u63a5\uff1a522.\u6700\u957f\u7279\u6b8a\u5e8f\u5217II",source:"@site/docs/leetcode/501-600/522.\u6700\u957f\u7279\u6b8a\u5e8f\u5217II.md",sourceDirName:"leetcode/501-600",slug:"/leetcode/501-600/\u6700\u957f\u7279\u6b8a\u5e8f\u5217II",permalink:"/docs/leetcode/501-600/\u6700\u957f\u7279\u6b8a\u5e8f\u5217II",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:522,frontMatter:{},sidebar:"journal",previous:{title:"520.\u68c0\u6d4b\u5927\u5199\u5b57\u6bcd",permalink:"/docs/leetcode/501-600/\u68c0\u6d4b\u5927\u5199\u5b57\u6bcd"},next:{title:"523.\u8fde\u7eed\u7684\u5b50\u6570\u7ec4\u548c",permalink:"/docs/leetcode/501-600/\u8fde\u7eed\u7684\u5b50\u6570\u7ec4\u548c"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"522\u6700\u957f\u7279\u6b8a\u5e8f\u5217ii",children:"522.\u6700\u957f\u7279\u6b8a\u5e8f\u5217II"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-uncommon-subsequence-ii",children:"522.\u6700\u957f\u7279\u6b8a\u5e8f\u5217II"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32\u3001\u6392\u5e8f",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u5b57\u7b26\u4e32\u5217\u8868 strs \uff0c\u8fd4\u56de\u5176\u4e2d \u6700\u957f\u7684\u7279\u6b8a\u5e8f\u5217 \u3002\u5982\u679c\u6700\u957f\u7279\u6b8a\u5e8f\u5217\u4e0d\u5b58\u5728\uff0c\u8fd4\u56de -1 \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-06-27"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u4e8e\u6bcf\u4e2a\u5b57\u7b26\u4e32\uff0c\u67e5\u627e\u662f\u5426\u6709\u7236\u4e32\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int findLUSlength(vector<string> &strs) {\n        int ans = -1, n = strs.size();\n        for (int i = 0; i < n; i++) {\n            string s1 = strs[i];\n            bool check = true;\n            for (int j = 0; j < n; j++) {\n                if (i != j && isSubStr(s1, strs[j])) {\n                    check = false;\n                    break;\n                }\n            }\n            if (check) ans = max(ans, (int)s1.size());\n        }\n        return ans;\n    }\n    bool isSubStr(const string &s1, const string &s2) {\n        int i1 = 0, i2 = 0, n1 = s1.size(), n2 = s2.size();\n        for (; i1 < n1 && i2 < n2; i2++)\n            if (s1[i1] == s2[i2]) i1++;\n        return i1 == n1;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-06-17"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a38ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.28MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u679a\u4e3e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def findLUSlength(self, strs: List[str]) -> int:\n        map = Counter(strs)\n        strs.sort(key = lambda s: -len(s))\n        for i in range(len(strs)):\n            s = strs[i]\n            if map[s] > 1: continue\n            need_continue = False\n            for j in range(i):\n                i1 = 0\n                for c in strs[j]:\n                    if s[i1] == c:\n                        i1 += 1\n                    if i1 == len(s):\n                        break\n                if i1 == len(s):\n                    need_continue = True\n                    break\n            if need_continue: continue\n            return len(s)\n        return -1\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>l});var i=s(30758);const t={},r=i.createContext(t);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);