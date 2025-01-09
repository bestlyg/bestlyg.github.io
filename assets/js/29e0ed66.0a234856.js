"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[16532],{97908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1101-1200/\u201c\u6c14\u7403\u201d\u7684\u6700\u5927\u6570\u91cf","title":"1189.\u201c\u6c14\u7403\u201d\u7684\u6700\u5927\u6570\u91cf","description":"\u94fe\u63a5\uff1a1189.\u201c\u6c14\u7403\u201d\u7684\u6700\u5927\u6570\u91cf","source":"@site/docs/leetcode/1101-1200/1189.\u201c\u6c14\u7403\u201d\u7684\u6700\u5927\u6570\u91cf.md","sourceDirName":"leetcode/1101-1200","slug":"/leetcode/1101-1200/\u201c\u6c14\u7403\u201d\u7684\u6700\u5927\u6570\u91cf","permalink":"/docs/leetcode/1101-1200/\u201c\u6c14\u7403\u201d\u7684\u6700\u5927\u6570\u91cf","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1189,"frontMatter":{},"sidebar":"journal","previous":{"title":"1187.\u4f7f\u6570\u7ec4\u4e25\u683c\u9012\u589e","permalink":"/docs/leetcode/1101-1200/\u4f7f\u6570\u7ec4\u4e25\u683c\u9012\u589e"},"next":{"title":"1190.\u53cd\u8f6c\u6bcf\u5bf9\u62ec\u53f7\u95f4\u7684\u5b50\u4e32","permalink":"/docs/leetcode/1101-1200/\u53cd\u8f6c\u6bcf\u5bf9\u62ec\u53f7\u95f4\u7684\u5b50\u4e32"}}');var o=t(25105),r=t(8556);const c={},l="1189.\u201c\u6c14\u7403\u201d\u7684\u6700\u5927\u6570\u91cf",i={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"1189\u6c14\u7403\u7684\u6700\u5927\u6570\u91cf",children:"1189.\u201c\u6c14\u7403\u201d\u7684\u6700\u5927\u6570\u91cf"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-number-of-balloons",children:"1189.\u201c\u6c14\u7403\u201d\u7684\u6700\u5927\u6570\u91cf"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u8ba1\u6570",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a",'\u5b57\u7b26\u4e32 text \u4e2d\u7684\u6bcf\u4e2a\u5b57\u6bcd\u6700\u591a\u53ea\u80fd\u88ab\u4f7f\u7528\u4e00\u6b21\u3002\u8bf7\u4f60\u8fd4\u56de\u6700\u591a\u53ef\u4ee5\u62fc\u51d1\u51fa\u591a\u5c11\u4e2a\u5355\u8bcd "balloon"\u3002']}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-13"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.5MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int maxNumberOfBalloons(string text) {\n        int m[26] = {0};\n        for (auto &ch : text) m[ch - 'a']++;\n        return min(min(min(m[1], m[0]), m['n' - 'a']),\n                   min(m['l' - 'a'], m['o' - 'a']) / 2);\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(58101);const o={},r=s.createContext(o);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);