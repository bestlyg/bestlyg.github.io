"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[13294],{39077:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/1901-2000/\u961f\u5217\u4e2d\u53ef\u4ee5\u770b\u5230\u7684\u4eba\u6570","title":"1944.\u961f\u5217\u4e2d\u53ef\u4ee5\u770b\u5230\u7684\u4eba\u6570","description":"\u94fe\u63a5\uff1a1944.\u961f\u5217\u4e2d\u53ef\u4ee5\u770b\u5230\u7684\u4eba\u6570","source":"@site/docs/leetcode/1901-2000/1944.\u961f\u5217\u4e2d\u53ef\u4ee5\u770b\u5230\u7684\u4eba\u6570.md","sourceDirName":"leetcode/1901-2000","slug":"/leetcode/1901-2000/\u961f\u5217\u4e2d\u53ef\u4ee5\u770b\u5230\u7684\u4eba\u6570","permalink":"/docs/leetcode/1901-2000/\u961f\u5217\u4e2d\u53ef\u4ee5\u770b\u5230\u7684\u4eba\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1944,"frontMatter":{},"sidebar":"journal","previous":{"title":"1928.\u89c4\u5b9a\u65f6\u95f4\u5185\u5230\u8fbe\u7ec8\u70b9\u7684\u6700\u5c0f\u82b1\u8d39","permalink":"/docs/leetcode/1901-2000/\u89c4\u5b9a\u65f6\u95f4\u5185\u5230\u8fbe\u7ec8\u70b9\u7684\u6700\u5c0f\u82b1\u8d39"},"next":{"title":"1945.\u5b57\u7b26\u4e32\u8f6c\u5316\u540e\u7684\u5404\u4f4d\u6570\u5b57\u4e4b\u548c","permalink":"/docs/leetcode/1901-2000/\u5b57\u7b26\u4e32\u8f6c\u5316\u540e\u7684\u5404\u4f4d\u6570\u5b57\u4e4b\u548c"}}');var r=t(25105),o=t(8556);const i={},l="1944.\u961f\u5217\u4e2d\u53ef\u4ee5\u770b\u5230\u7684\u4eba\u6570",c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1944\u961f\u5217\u4e2d\u53ef\u4ee5\u770b\u5230\u7684\u4eba\u6570",children:"1944.\u961f\u5217\u4e2d\u53ef\u4ee5\u770b\u5230\u7684\u4eba\u6570"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/number-of-visible-people-in-a-queue",children:"1944.\u961f\u5217\u4e2d\u53ef\u4ee5\u770b\u5230\u7684\u4eba\u6570"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6570\u7ec4\u3001\u5355\u8c03\u6808",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4e00\u4e2a\u957f\u5ea6\u4e3a n \u7684\u6570\u7ec4 answer \uff0c\u5176\u4e2d answer[i] \u662f\u7b2c i \u4e2a\u4eba\u5728\u4ed6\u53f3\u4fa7\u961f\u5217\u4e2d\u80fd \u770b\u5230 \u7684 \u4eba\u6570 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-01-05"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a140ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a30.22MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5355\u8c03\u6808\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def canSeePersonsCount(self, heights: List[int]) -> List[int]:\n        n = len(heights)\n        ans = [0] * n\n        s = []\n        for i in range(n):\n            while s and heights[s[-1]] < heights[i]: ans[s.pop()] += 1\n            if s: ans[s[-1]] += 1\n            s.append(i)\n        return ans\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(58101);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);