"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[38338],{59080:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(86070),i=t(31503);const s={},o="2844.\u751f\u6210\u7279\u6b8a\u6570\u5b57\u7684\u6700\u5c11\u64cd\u4f5c",l={id:"leetcode/2801-2900/\u751f\u6210\u7279\u6b8a\u6570\u5b57\u7684\u6700\u5c11\u64cd\u4f5c",title:"2844.\u751f\u6210\u7279\u6b8a\u6570\u5b57\u7684\u6700\u5c11\u64cd\u4f5c",description:"\u94fe\u63a5\uff1a2844.\u751f\u6210\u7279\u6b8a\u6570\u5b57\u7684\u6700\u5c11\u64cd\u4f5c",source:"@site/docs/leetcode/2801-2900/2844.\u751f\u6210\u7279\u6b8a\u6570\u5b57\u7684\u6700\u5c11\u64cd\u4f5c.md",sourceDirName:"leetcode/2801-2900",slug:"/leetcode/2801-2900/\u751f\u6210\u7279\u6b8a\u6570\u5b57\u7684\u6700\u5c11\u64cd\u4f5c",permalink:"/docs/leetcode/2801-2900/\u751f\u6210\u7279\u6b8a\u6570\u5b57\u7684\u6700\u5c11\u64cd\u4f5c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2844,frontMatter:{},sidebar:"journal",previous:{title:"2834.\u627e\u51fa\u7f8e\u4e3d\u6570\u7ec4\u7684\u6700\u5c0f\u548c",permalink:"/docs/leetcode/2801-2900/\u627e\u51fa\u7f8e\u4e3d\u6570\u7ec4\u7684\u6700\u5c0f\u548c"},next:{title:"2848.\u4e0e\u8f66\u76f8\u4ea4\u7684\u70b9",permalink:"/docs/leetcode/2801-2900/\u4e0e\u8f66\u76f8\u4ea4\u7684\u70b9"}},c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"2844\u751f\u6210\u7279\u6b8a\u6570\u5b57\u7684\u6700\u5c11\u64cd\u4f5c",children:"2844.\u751f\u6210\u7279\u6b8a\u6570\u5b57\u7684\u6700\u5c11\u64cd\u4f5c"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-operations-to-make-a-special-number",children:"2844.\u751f\u6210\u7279\u6b8a\u6570\u5b57\u7684\u6700\u5c11\u64cd\u4f5c"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u5b66\u3001\u5b57\u7b26\u4e32\u3001\u679a\u4e3e",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u6700\u5c11\u9700\u8981\u591a\u5c11\u6b21\u64cd\u4f5c\u53ef\u4ee5\u4f7f num \u53d8\u6210\u7279\u6b8a\u6570\u5b57\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-07-25"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.51MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5224\u65ad\u7ed3\u5c3e\u4e24\u4f4d\u662f\u5426\u4e3a\u7279\u5b9a\u5b57\u7b26\u4e32\u5373\u53ef\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Solution:\n    def minimumOperations(self, num: str) -> int:\n        arr = ["00", "25", "50", "75"]\n        def run(end_num: str) -> int:\n            i = len(num) - 1\n            j = len(end_num) - 1\n            while i >= 0 and j >= 0:\n                if num[i] == end_num[j]: j -= 1\n                i -= 1\n            if j != -1: return len(num)\n            return len(num) - i - 1 - 2\n        return min(min(run(end_num) for end_num in arr), len(num) - num.count(\'0\'))\n'})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(30758);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);