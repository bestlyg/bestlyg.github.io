"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[77074],{17219:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/501-600/\u6709\u6548\u7684\u6b63\u65b9\u5f62","title":"593.\u6709\u6548\u7684\u6b63\u65b9\u5f62","description":"\u94fe\u63a5\uff1a593.\u6709\u6548\u7684\u6b63\u65b9\u5f62","source":"@site/docs/leetcode/501-600/593.\u6709\u6548\u7684\u6b63\u65b9\u5f62.md","sourceDirName":"leetcode/501-600","slug":"/leetcode/501-600/\u6709\u6548\u7684\u6b63\u65b9\u5f62","permalink":"/docs/leetcode/501-600/\u6709\u6548\u7684\u6b63\u65b9\u5f62","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":593,"frontMatter":{},"sidebar":"journal","previous":{"title":"592.\u5206\u6570\u52a0\u51cf\u8fd0\u7b97","permalink":"/docs/leetcode/501-600/\u5206\u6570\u52a0\u51cf\u8fd0\u7b97"},"next":{"title":"594.\u6700\u957f\u548c\u8c10\u5b50\u5e8f\u5217","permalink":"/docs/leetcode/501-600/\u6700\u957f\u548c\u8c10\u5b50\u5e8f\u5217"}}');var r=t(25105),l=t(8556);const o={},s="593.\u6709\u6548\u7684\u6b63\u65b9\u5f62",c={},d=[{value:"\u9898\u89e3 1 - rust",id:"\u9898\u89e3-1---rust",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"593\u6709\u6548\u7684\u6b63\u65b9\u5f62",children:"593.\u6709\u6548\u7684\u6b63\u65b9\u5f62"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/valid-square",children:"593.\u6709\u6548\u7684\u6b63\u65b9\u5f62"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u51e0\u4f55\u3001\u6570\u5b66",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a 2D \u7a7a\u95f4\u4e2d\u56db\u4e2a\u70b9\u7684\u5750\u6807 p1, p2, p3 \u548c p4\uff0c\u5982\u679c\u8fd9\u56db\u4e2a\u70b9\u6784\u6210\u4e00\u4e2a\u6b63\u65b9\u5f62\uff0c\u5219\u8fd4\u56de true \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---rust",children:"\u9898\u89e3 1 - rust"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-07-29"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6bcf\u6761\u8fb9\u90fd\u76f8\u7b49\u4e14\u4efb\u610f\u4e09\u4e2a\u89d2\u90fd\u80fd\u7ec4\u6210\u76f4\u89d2\u4e09\u89d2\u5f62\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn valid_square(p1: Vec<i32>, p2: Vec<i32>, p3: Vec<i32>, p4: Vec<i32>) -> bool {\n        Solution::is_right_triangle(&p1, &p2, &p3)\n            && Solution::is_right_triangle(&p1, &p2, &p4)\n            && Solution::is_right_triangle(&p1, &p3, &p4)\n            && Solution::is_right_triangle(&p2, &p3, &p4)\n    }\n    fn is_right_triangle(p1: &Vec<i32>, p2: &Vec<i32>, p3: &Vec<i32>) -> bool {\n        let d1 = Solution::get_length(p1, p2);\n        let d2 = Solution::get_length(p1, p3);\n        let d3 = Solution::get_length(p3, p2);\n        d1 != 0\n            && d2 != 0\n            && d3 != 0\n            && (d1 + d2 == d3 && d1 == d2 || d1 + d3 == d2 && d1 == d3 || d2 + d3 == d1 && d2 == d3)\n    }\n    fn get_length(p1: &Vec<i32>, p2: &Vec<i32>) -> i32 {\n        (p1[0] - p2[0]).pow(2) + (p1[1] - p2[1]).pow(2)\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(58101);const r={},l=i.createContext(r);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);