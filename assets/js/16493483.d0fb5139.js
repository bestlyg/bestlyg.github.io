"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[25365],{49258:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1201-1300/\u73a9\u7b79\u7801","title":"1217.\u73a9\u7b79\u7801","description":"\u94fe\u63a5\uff1a1217.\u73a9\u7b79\u7801","source":"@site/docs/leetcode/1201-1300/1217.\u73a9\u7b79\u7801.md","sourceDirName":"leetcode/1201-1300","slug":"/leetcode/1201-1300/\u73a9\u7b79\u7801","permalink":"/docs/leetcode/1201-1300/\u73a9\u7b79\u7801","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1217,"frontMatter":{},"sidebar":"journal","previous":{"title":"1210.\u7a7f\u8fc7\u8ff7\u5bab\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570","permalink":"/docs/leetcode/1201-1300/\u7a7f\u8fc7\u8ff7\u5bab\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570"},"next":{"title":"1218.\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217","permalink":"/docs/leetcode/1201-1300/\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217"}}');var o=t(86070),c=t(31503);const r={},i="1217.\u73a9\u7b79\u7801",l={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"1217\u73a9\u7b79\u7801",children:"1217.\u73a9\u7b79\u7801"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-cost-to-move-chips-to-the-same-position",children:"1217.\u73a9\u7b79\u7801"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u6570\u5b66",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u5c06\u6240\u6709\u7b79\u7801\u79fb\u52a8\u5230\u540c\u4e00\u4f4d\u7f6e\u4e0a\u6240\u9700\u8981\u7684 \u6700\u5c0f\u4ee3\u4ef7 \u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-07-08"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u56e0\u4e3a\u8df3\u4e00\u683c 1 \u6d88\u8d39\uff0c\u8df3\u4e24\u683c 0 \u6d88\u8d39\uff0c\u76f8\u5f53\u4e8e\u53ea\u6709\u5728\u76f8\u90bb\u683c\u624d\u4f1a\u6d88\u8d39\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int minCostToMoveChips(vector<int>& position) {\n        int ans1 = 0, ans2 = 0;\n        for (auto& num : position) {\n            if (num & 1)\n                ans1++;\n            else\n                ans2++;\n        }\n        return min(ans1, ans2);\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(30758);const o={},c=s.createContext(o);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);