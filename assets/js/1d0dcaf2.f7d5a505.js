"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[70236],{85119:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(86070),o=t(25710);const s={},i="2525.\u6839\u636e\u89c4\u5219\u5c06\u7bb1\u5b50\u5206\u7c7b",l={id:"leetcode/2501-2600/\u6839\u636e\u89c4\u5219\u5c06\u7bb1\u5b50\u5206\u7c7b",title:"2525.\u6839\u636e\u89c4\u5219\u5c06\u7bb1\u5b50\u5206\u7c7b",description:"\u94fe\u63a5\uff1a2525.\u6839\u636e\u89c4\u5219\u5c06\u7bb1\u5b50\u5206\u7c7b",source:"@site/docs/leetcode/2501-2600/2525.\u6839\u636e\u89c4\u5219\u5c06\u7bb1\u5b50\u5206\u7c7b.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u6839\u636e\u89c4\u5219\u5c06\u7bb1\u5b50\u5206\u7c7b",permalink:"/docs/leetcode/2501-2600/\u6839\u636e\u89c4\u5219\u5c06\u7bb1\u5b50\u5206\u7c7b",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2525,frontMatter:{},sidebar:"journal",previous:{title:"2523.\u8303\u56f4\u5185\u6700\u63a5\u8fd1\u7684\u4e24\u4e2a\u8d28\u6570",permalink:"/docs/leetcode/2501-2600/\u8303\u56f4\u5185\u6700\u63a5\u8fd1\u7684\u4e24\u4e2a\u8d28\u6570"},next:{title:"2529.\u6b63\u6574\u6570\u548c\u8d1f\u6574\u6570\u7684\u6700\u5927\u8ba1\u6570",permalink:"/docs/leetcode/2501-2600/\u6b63\u6574\u6570\u548c\u8d1f\u6574\u6570\u7684\u6700\u5927\u8ba1\u6570"}},c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"2525\u6839\u636e\u89c4\u5219\u5c06\u7bb1\u5b50\u5206\u7c7b",children:"2525.\u6839\u636e\u89c4\u5219\u5c06\u7bb1\u5b50\u5206\u7c7b"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/categorize-box-according-to-criteria",children:"2525.\u6839\u636e\u89c4\u5219\u5c06\u7bb1\u5b50\u5206\u7c7b"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u56db\u4e2a\u6574\u6570 length \uff0cwidth \uff0cheight \u548c mass \uff0c\u5206\u522b\u8868\u793a\u4e00\u4e2a\u7bb1\u5b50\u7684\u4e09\u4e2a\u7ef4\u5ea6\u548c\u8d28\u91cf\uff0c\u8bf7\u4f60\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u7bb1\u5b50 \u7c7b\u522b \u7684\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-20"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.66MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u903b\u8f91\u5224\u65ad\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Solution:\n    def categorizeBox(self, length: int, width: int, height: int, mass: int) -> str:\n        v = length * width * height\n        bulky = length >= 10 ** 4 or width >= 10 ** 4 or height >= 10 ** 4 or v >= 10 ** 9\n        heavy = mass >= 100\n        if bulky and heavy:\n            return "Both"\n        elif bulky:\n            return "Bulky"\n        elif heavy:\n            return "Heavy"\n        return "Neither"\n\n'})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(30758);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);