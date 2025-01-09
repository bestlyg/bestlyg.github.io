"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[20550],{10967:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1101-1200/\u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6","title":"1111.\u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6","description":"\u94fe\u63a5\uff1a1111.\u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6","source":"@site/docs/leetcode/1101-1200/1111.\u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6.md","sourceDirName":"leetcode/1101-1200","slug":"/leetcode/1101-1200/\u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6","permalink":"/docs/leetcode/1101-1200/\u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1111,"frontMatter":{},"sidebar":"journal","previous":{"title":"1110.\u5220\u70b9\u6210\u6797","permalink":"/docs/leetcode/1101-1200/\u5220\u70b9\u6210\u6797"},"next":{"title":"1122.\u6570\u7ec4\u7684\u76f8\u5bf9\u6392\u5e8f","permalink":"/docs/leetcode/1101-1200/\u6570\u7ec4\u7684\u76f8\u5bf9\u6392\u5e8f"}}');var r=t(25105),c=t(8556);const i={},l="1111.\u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6",o={},a=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1111\u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6",children:"1111.\u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-nesting-depth-of-two-valid-parentheses-strings",children:"1111.\u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u300c\u6709\u6548\u62ec\u53f7\u5b57\u7b26\u4e32\u300d seq\uff0c\u8bf7\u4f60\u5c06\u5176\u5206\u6210\u4e24\u4e2a\u4e0d\u76f8\u4ea4\u7684\u6709\u6548\u62ec\u53f7\u5b57\u7b26\u4e32\uff0cA \u548c B\uff0c\u5e76\u4f7f\u8fd9\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u6df1\u5ea6\u6700\u5c0f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-09"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a35.6MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6df1\u5ea6\u5e73\u8861\u5373\u5947\u6570\u6df1\u5ea6\u5f52\u7c7b\u4e00\u8fb9\uff0c\u5076\u6570\u6df1\u5ea6\u5f52\u7c7b\u4e00\u8fb9\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {string} seq\n * @return {number[]}\n */\nvar maxDepthAfterSplit = function (seq) {\n  let dep = 0;\n  return seq.split('').map(value => (value === '(' ? ++dep % 2 : dep-- % 2));\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(58101);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);