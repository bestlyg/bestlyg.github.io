"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[5477],{24281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/1901-2000/\u5bfb\u627e\u5cf0\u503cII","title":"1901.\u5bfb\u627e\u5cf0\u503cII","description":"\u94fe\u63a5\uff1a1901.\u5bfb\u627e\u5cf0\u503cII","source":"@site/docs/leetcode/1901-2000/1901.\u5bfb\u627e\u5cf0\u503cII.md","sourceDirName":"leetcode/1901-2000","slug":"/leetcode/1901-2000/\u5bfb\u627e\u5cf0\u503cII","permalink":"/docs/leetcode/1901-2000/\u5bfb\u627e\u5cf0\u503cII","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1901,"frontMatter":{},"sidebar":"journal","previous":{"title":"1894.\u627e\u5230\u9700\u8981\u8865\u5145\u7c89\u7b14\u7684\u5b66\u751f\u7f16\u53f7","permalink":"/docs/leetcode/1801-1900/\u627e\u5230\u9700\u8981\u8865\u5145\u7c89\u7b14\u7684\u5b66\u751f\u7f16\u53f7"},"next":{"title":"1911.\u6700\u5927\u5b50\u5e8f\u5217\u4ea4\u66ff\u548c","permalink":"/docs/leetcode/1901-2000/\u6700\u5927\u5b50\u5e8f\u5217\u4ea4\u66ff\u548c"}}');var s=t(25105),r=t(8556);const l={},o="1901.\u5bfb\u627e\u5cf0\u503cII",c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1901\u5bfb\u627e\u5cf0\u503cii",children:"1901.\u5bfb\u627e\u5cf0\u503cII"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/find-a-peak-element-ii",children:"1901.\u5bfb\u627e\u5cf0\u503cII"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u77e9\u9635",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a \u4ece 0 \u5f00\u59cb\u7f16\u53f7 \u7684 m x n \u77e9\u9635 mat \uff0c\u5176\u4e2d\u4efb\u610f\u4e24\u4e2a\u76f8\u90bb\u683c\u5b50\u7684\u503c\u90fd \u4e0d\u76f8\u540c \u3002\u627e\u51fa \u4efb\u610f\u4e00\u4e2a \u5cf0\u503c mat[i][j] \u5e76 \u8fd4\u56de\u5176\u4f4d\u7f6e [i,j] \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-19"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.8MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206row\uff0c\u5bf9\u6bcf\u5c42\u8fdb\u884c\u627e\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def findPeakGrid(self, mat: List[List[int]]) -> List[int]:\n        n = len(mat)\n        l, r = 0, n - 1\n        while l <= r:\n            i = (l + r) // 2\n            j = mat[i].index(max(mat[i]))\n            if i - 1 >= 0 and mat[i][j] < mat[i - 1][j]: r = i - 1\n            elif i + 1 < n and mat[i][j] < mat[i + 1][j]: l = i + 1\n            else: return [i, j]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(58101);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);