"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[5914],{53846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/3101-3200/\u6784\u9020\u76f8\u540c\u989c\u8272\u7684\u6b63\u65b9\u5f62","title":"3127.\u6784\u9020\u76f8\u540c\u989c\u8272\u7684\u6b63\u65b9\u5f62","description":"\u94fe\u63a5\uff1a3127.\u6784\u9020\u76f8\u540c\u989c\u8272\u7684\u6b63\u65b9\u5f62","source":"@site/docs/leetcode/3101-3200/3127.\u6784\u9020\u76f8\u540c\u989c\u8272\u7684\u6b63\u65b9\u5f62.md","sourceDirName":"leetcode/3101-3200","slug":"/leetcode/3101-3200/\u6784\u9020\u76f8\u540c\u989c\u8272\u7684\u6b63\u65b9\u5f62","permalink":"/docs/leetcode/3101-3200/\u6784\u9020\u76f8\u540c\u989c\u8272\u7684\u6b63\u65b9\u5f62","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3127,"frontMatter":{},"sidebar":"journal","previous":{"title":"3117.\u5212\u5206\u6570\u7ec4\u5f97\u5230\u6700\u5c0f\u7684\u503c\u4e4b\u548c","permalink":"/docs/leetcode/3101-3200/\u5212\u5206\u6570\u7ec4\u5f97\u5230\u6700\u5c0f\u7684\u503c\u4e4b\u548c"},"next":{"title":"3128.\u76f4\u89d2\u4e09\u89d2\u5f62","permalink":"/docs/leetcode/3101-3200/\u76f4\u89d2\u4e09\u89d2\u5f62"}}');var o=t(25105),s=t(8556);const c={},i="3127.\u6784\u9020\u76f8\u540c\u989c\u8272\u7684\u6b63\u65b9\u5f62",l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"3127\u6784\u9020\u76f8\u540c\u989c\u8272\u7684\u6b63\u65b9\u5f62",children:"3127.\u6784\u9020\u76f8\u540c\u989c\u8272\u7684\u6b63\u65b9\u5f62"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/make-a-square-with-the-same-color",children:"3127.\u6784\u9020\u76f8\u540c\u989c\u8272\u7684\u6b63\u65b9\u5f62"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u679a\u4e3e\u3001\u77e9\u9635",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4f60\u7684\u4efb\u52a1\u662f\u6539\u53d8 \u81f3\u591a\u4e00\u4e2a \u683c\u5b50\u7684\u989c\u8272\uff0c\u4f7f\u5f97\u77e9\u9635\u4e2d\u5b58\u5728\u4e00\u4e2a 2 x 2 \u989c\u8272\u5b8c\u5168\u76f8\u540c\u7684\u6b63\u65b9\u5f62\u3002\u5982\u679c\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a\u76f8\u540c\u989c\u8272\u7684 2 x 2 \u6b63\u65b9\u5f62\uff0c\u90a3\u4e48\u8fd4\u56de true \uff0c\u5426\u5219\u8fd4\u56de false \u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-08-31"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a37ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.36MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6240\u6709\u53ef\u80fd\uff0c\u5224\u65ad\u4ee5\u5b83\u4e3a\u5de6\u4e0a\u89d2\u70b9\u7684\u56db\u4e2a\u65b9\u683c\u662f\u5426\u5b58\u57283\u4e2a\u76f8\u540c\u989c\u8272"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def canMakeSquare(self, grid: List[List[str]]) -> bool:\n        for i in range(2):\n            for j in range(2):\n                counter = Counter()\n                counter[grid[i][j]] += 1\n                counter[grid[i + 1][j]] += 1\n                counter[grid[i][j + 1]] += 1\n                counter[grid[i + 1][j + 1]] += 1\n                if any(cnt >= 3 for cnt in counter.values()):\n                    return True\n        return False\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(58101);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);