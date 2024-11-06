"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[58114],{73172:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(86070),s=t(31503);const r={},c="1652.\u62c6\u70b8\u5f39",l={id:"leetcode/1601-1700/\u62c6\u70b8\u5f39",title:"1652.\u62c6\u70b8\u5f39",description:"\u94fe\u63a5\uff1a1652.\u62c6\u70b8\u5f39",source:"@site/docs/leetcode/1601-1700/1652.\u62c6\u70b8\u5f39.md",sourceDirName:"leetcode/1601-1700",slug:"/leetcode/1601-1700/\u62c6\u70b8\u5f39",permalink:"/docs/leetcode/1601-1700/\u62c6\u70b8\u5f39",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1652,frontMatter:{},sidebar:"journal",previous:{title:"1646.\u83b7\u53d6\u751f\u6210\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c",permalink:"/docs/leetcode/1601-1700/\u83b7\u53d6\u751f\u6210\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c"},next:{title:"1653.\u4f7f\u5b57\u7b26\u4e32\u5e73\u8861\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570",permalink:"/docs/leetcode/1601-1700/\u4f7f\u5b57\u7b26\u4e32\u5e73\u8861\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"1652\u62c6\u70b8\u5f39",children:"1652.\u62c6\u70b8\u5f39"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/defuse-the-bomb",children:"1652.\u62c6\u70b8\u5f39"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6ed1\u52a8\u7a97\u53e3",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60 \u5faa\u73af \u6570\u7ec4 code \u548c\u6574\u6570\u5bc6\u94a5 k \uff0c\u8bf7\u4f60\u8fd4\u56de\u89e3\u5bc6\u540e\u7684\u7ed3\u679c\u6765\u62c6\u9664\u70b8\u5f39\uff01\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-24"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.2MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> decrypt(vector<int>& code, int k) {\n        int n = code.size();\n        vector<int> ans(n, 0);\n        for (int i = 0; i < n; i++) {\n            if (k > 0) {\n                for (int j = (i + 1) % n, cnt = 0; cnt < k; cnt++, j = (j + 1) % n) ans[i] += code[j];\n            } else if (k < 0) {\n                for (int j = (i - 1 + n) % n, cnt = 0; cnt < -k; cnt++, j = (j - 1 + n) % n) ans[i] += code[j];\n            }\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-05-05"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a53ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.42MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def decrypt(self, code: List[int], k: int) -> List[int]:\n        n = len(code)\n        if k == 0: return [0] * n\n        def get(idx: int) -> int:\n            res = 0\n            next = idx\n            for _ in range(abs(k)):\n                next = ((1 if k > 0 else -1) + next + n) % n\n                res += code[next]\n            return res\n        return [get(i) for i in range(n)]\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-05-05"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a53ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.42MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def decrypt(self, code: List[int], k: int) -> List[int]:\n        n = len(code)\n        if k == 0: return [0] * n\n        def get(idx: int) -> int:\n            res = 0\n            next = idx\n            for _ in range(abs(k)):\n                next = ((1 if k > 0 else -1) + next + n) % n\n                res += code[next]\n            return res\n        return [get(i) for i in range(n)]\n"})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var i=t(30758);const s={},r=i.createContext(s);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);