"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[78938],{46122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/301-400/\u6d88\u9664\u6e38\u620f","title":"390.\u6d88\u9664\u6e38\u620f","description":"\u94fe\u63a5\uff1a390.\u6d88\u9664\u6e38\u620f","source":"@site/docs/leetcode/301-400/390.\u6d88\u9664\u6e38\u620f.md","sourceDirName":"leetcode/301-400","slug":"/leetcode/301-400/\u6d88\u9664\u6e38\u620f","permalink":"/docs/leetcode/301-400/\u6d88\u9664\u6e38\u620f","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":390,"frontMatter":{},"sidebar":"journal","previous":{"title":"389.\u627e\u4e0d\u540c","permalink":"/docs/leetcode/301-400/\u627e\u4e0d\u540c"},"next":{"title":"391.\u5b8c\u7f8e\u77e9\u5f62","permalink":"/docs/leetcode/301-400/\u5b8c\u7f8e\u77e9\u5f62"}}');var r=t(25105),c=t(8556);const i={},o="390.\u6d88\u9664\u6e38\u620f",l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"390\u6d88\u9664\u6e38\u620f",children:"390.\u6d88\u9664\u6e38\u620f"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/elimination-game",children:"390.\u6d88\u9664\u6e38\u620f"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u9012\u5f52\u3001\u6570\u5b66",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u6574\u6570 n \uff0c\u8fd4\u56de arr \u6700\u540e\u5269\u4e0b\u7684\u6570\u5b57\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-04"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs, \u6bcf\u6b21\u51cf\u5c11\u540e\u90fd\u4e3a\u7b49\u5dee\u6570\u5217\uff0c\u8bb0\u5f55\u6bcf\u6b21\u7684\u5934\u503c\u548c\u95f4\u9694\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    /*\n    cnt \u6709\u591a\u5c11\u4e2a\n    step \u6bcf\u4e2a\u95f4\u9694\u591a\u5c11\n    start \u8d77\u59cb\u503c\n    dir \u65b9\u5411\n    */\n    int dfs(int cnt, int step, int start, int dir) {\n        if (cnt == 1) return start;\n        return dfs(cnt >> 1, step << 1,\n                   start + (dir == 1 || cnt & 1 ? step : 0), dir * -1);\n    }\n    int lastRemaining(int n) { return dfs(n, 1, 1, 1); }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(58101);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);