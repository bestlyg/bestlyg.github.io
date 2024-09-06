"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[77552],{8744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var r=t(86070),s=t(25710);const c={},i="779.\u7b2cK\u4e2a\u8bed\u6cd5\u7b26\u53f7",l={id:"leetcode/701-800/\u7b2cK\u4e2a\u8bed\u6cd5\u7b26\u53f7",title:"779.\u7b2cK\u4e2a\u8bed\u6cd5\u7b26\u53f7",description:"\u94fe\u63a5\uff1a779.\u7b2cK\u4e2a\u8bed\u6cd5\u7b26\u53f7",source:"@site/docs/leetcode/701-800/779.\u7b2cK\u4e2a\u8bed\u6cd5\u7b26\u53f7.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u7b2cK\u4e2a\u8bed\u6cd5\u7b26\u53f7",permalink:"/docs/leetcode/701-800/\u7b2cK\u4e2a\u8bed\u6cd5\u7b26\u53f7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:779,frontMatter:{},sidebar:"journal",previous:{title:"773.\u6ed1\u52a8\u8c1c\u9898",permalink:"/docs/leetcode/701-800/\u6ed1\u52a8\u8c1c\u9898"},next:{title:"780.\u5230\u8fbe\u7ec8\u70b9",permalink:"/docs/leetcode/701-800/\u5230\u8fbe\u7ec8\u70b9"}},o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"779\u7b2ck\u4e2a\u8bed\u6cd5\u7b26\u53f7",children:"779.\u7b2cK\u4e2a\u8bed\u6cd5\u7b26\u53f7"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/k-th-symbol-in-grammar",children:"779.\u7b2cK\u4e2a\u8bed\u6cd5\u7b26\u53f7"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u9012\u5f52\u3001\u6570\u5b66",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u884c\u6570 n \u548c\u5e8f\u6570 k\uff0c\u8fd4\u56de\u7b2c n \u884c\u4e2d\u7b2c k \u4e2a\u5b57\u7b26\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-20"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5f53\u524d\u5c42\u524d\u534a\u6bb5\u548c\u4e0a\u5c42\u4e00\u6837\uff0c\u7b2c\u4e09\u6bb5\u548c\u7b2c\u4e8c\u6bb5\u76f8\u540c\uff0c\u7b2c\u4e00\u6bb5\u548c\u7b2c\u56db\u6bb5\u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int kthGrammar(int n, int k) {\n        if (n == 1) return 0;\n        else if (n == 2) return k == 1 ? 0 : 1;\n        int nmax = pow(2, n - 1), nextK = k;\n        if (k > nmax / 2 && k <= nmax / 4 * 3) nextK = k - nmax / 2 + nmax / 4;\n        else if (k > nmax / 4 * 3) nextK = k - nmax / 2 - nmax / 4;\n        return kthGrammar(n - 1, nextK);\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(30758);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);