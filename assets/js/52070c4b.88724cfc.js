"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[37928],{94919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1201-1300/\u5c3d\u53ef\u80fd\u4f7f\u5b57\u7b26\u4e32\u76f8\u7b49","title":"1208.\u5c3d\u53ef\u80fd\u4f7f\u5b57\u7b26\u4e32\u76f8\u7b49","description":"\u94fe\u63a5\uff1a1208.\u5c3d\u53ef\u80fd\u4f7f\u5b57\u7b26\u4e32\u76f8\u7b49","source":"@site/docs/leetcode/1201-1300/1208.\u5c3d\u53ef\u80fd\u4f7f\u5b57\u7b26\u4e32\u76f8\u7b49.md","sourceDirName":"leetcode/1201-1300","slug":"/leetcode/1201-1300/\u5c3d\u53ef\u80fd\u4f7f\u5b57\u7b26\u4e32\u76f8\u7b49","permalink":"/docs/leetcode/1201-1300/\u5c3d\u53ef\u80fd\u4f7f\u5b57\u7b26\u4e32\u76f8\u7b49","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1208,"frontMatter":{},"sidebar":"journal","previous":{"title":"1207.\u72ec\u4e00\u65e0\u4e8c\u7684\u51fa\u73b0\u6b21\u6570","permalink":"/docs/leetcode/1201-1300/\u72ec\u4e00\u65e0\u4e8c\u7684\u51fa\u73b0\u6b21\u6570"},"next":{"title":"1210.\u7a7f\u8fc7\u8ff7\u5bab\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570","permalink":"/docs/leetcode/1201-1300/\u7a7f\u8fc7\u8ff7\u5bab\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570"}}');var r=n(86070),c=n(31503);const i={},l="1208.\u5c3d\u53ef\u80fd\u4f7f\u5b57\u7b26\u4e32\u76f8\u7b49",o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"1208\u5c3d\u53ef\u80fd\u4f7f\u5b57\u7b26\u4e32\u76f8\u7b49",children:"1208.\u5c3d\u53ef\u80fd\u4f7f\u5b57\u7b26\u4e32\u76f8\u7b49"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(t.a,{href:"https://leetcode.cn/problems/get-equal-substrings-within-budget",children:"1208.\u5c3d\u53ef\u80fd\u4f7f\u5b57\u7b26\u4e32\u76f8\u7b49"}),(0,r.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u4e8c\u5206\u67e5\u627e\u3001\u524d\u7f00\u548c\u3001\u6ed1\u52a8\u7a97\u53e3",(0,r.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a\u957f\u5ea6\u76f8\u540c\u7684\u5b57\u7b26\u4e32\uff0cs \u548c t\u3002\u5c06 s\xa0 \u4e2d\u7684\u7b2c \xa0i\xa0 \u4e2a\u5b57\u7b26\u53d8\u5230 \xa0t\xa0 \u4e2d\u7684\u7b2c i \u4e2a\u5b57\u7b26\u9700\u8981 \xa0|s[i] - t[i]|\xa0 \u7684\u5f00\u9500\uff08\u5f00\u9500\u53ef\u80fd\u4e3a 0\uff09\uff0c\u4e5f\u5c31\u662f\u4e24\u4e2a\u5b57\u7b26\u7684 ASCII \u7801\u503c\u7684\u5dee\u7684\u7edd\u5bf9\u503c\u3002\u7528\u4e8e\u53d8\u66f4\u5b57\u7b26\u4e32\u7684\u6700\u5927\u9884\u7b97\u662f \xa0maxCost\u3002\u5728\u8f6c\u5316\u5b57\u7b26\u4e32\u65f6\uff0c\u603b\u5f00\u9500\u5e94\u5f53\u5c0f\u4e8e\u7b49\u4e8e\u8be5\u9884\u7b97\uff0c\u8fd9\u4e5f\u610f\u5473\u7740\u5b57\u7b26\u4e32\u7684\u8f6c\u5316\u53ef\u80fd\u662f\u4e0d\u5b8c\u5168\u7684\u3002\u5982\u679c\u4f60\u53ef\u4ee5\u5c06 s \u7684\u5b50\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3a\u5b83\u5728 t \u4e2d\u5bf9\u5e94\u7684\u5b50\u5b57\u7b26\u4e32\uff0c\u5219\u8fd4\u56de\u53ef\u4ee5\u8f6c\u5316\u7684\u6700\u5927\u957f\u5ea6\u3002\u5982\u679c s \u4e2d\u6ca1\u6709\u5b50\u5b57\u7b26\u4e32\u53ef\u4ee5\u8f6c\u5316\u6210 t \u4e2d\u5bf9\u5e94\u7684\u5b50\u5b57\u7b26\u4e32\uff0c\u5219\u8fd4\u56de 0\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-05"}),"\n",(0,r.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a116ms"}),"\n",(0,r.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a49MB"}),"\n",(0,r.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function equalSubstring(s: string, t: string, maxCost: number): number {\n  const len = s.length;\n  const arr = new Array(len)\n    .fill(0)\n    .map((_, i) => Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0)));\n  let l = 0,\n    r = 0,\n    cost = arr[l];\n  while (r < len) cost = cost + arr[++r] - (cost > maxCost ? arr[l++] : 0);\n  return r - l;\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31503:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(30758);const r={},c=s.createContext(r);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);