"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[37239],{85125:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"leetcode/2001-2100/\u4f7f\u6bcf\u4f4d\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570","title":"2037.\u4f7f\u6bcf\u4f4d\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570","description":"\u94fe\u63a5\uff1a2037.\u4f7f\u6bcf\u4f4d\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570","source":"@site/docs/leetcode/2001-2100/2037.\u4f7f\u6bcf\u4f4d\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570.md","sourceDirName":"leetcode/2001-2100","slug":"/leetcode/2001-2100/\u4f7f\u6bcf\u4f4d\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570","permalink":"/docs/leetcode/2001-2100/\u4f7f\u6bcf\u4f4d\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2037,"frontMatter":{},"sidebar":"journal","previous":{"title":"2034.\u80a1\u7968\u4ef7\u683c\u6ce2\u52a8","permalink":"/docs/leetcode/2001-2100/\u80a1\u7968\u4ef7\u683c\u6ce2\u52a8"},"next":{"title":"2038.\u5982\u679c\u76f8\u90bb\u4e24\u4e2a\u989c\u8272\u5747\u76f8\u540c\u5219\u5220\u9664\u5f53\u524d\u989c\u8272","permalink":"/docs/leetcode/2001-2100/\u5982\u679c\u76f8\u90bb\u4e24\u4e2a\u989c\u8272\u5747\u76f8\u540c\u5219\u5220\u9664\u5f53\u524d\u989c\u8272"}}');var i=s(86070),r=s(31503);const l={},c="2037.\u4f7f\u6bcf\u4f4d\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570",o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"2037\u4f7f\u6bcf\u4f4d\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570",children:"2037.\u4f7f\u6bcf\u4f4d\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-number-of-moves-to-seat-everyone",children:"2037.\u4f7f\u6bcf\u4f4d\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u6392\u5e8f",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4f7f\u6240\u6709\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u5750\u7684 \u6700\u5c11\u79fb\u52a8\u6b21\u6570 \uff0c\u5e76\u786e\u4fdd\u6ca1\u6709\u4e24\u4f4d\u5b66\u751f\u7684\u5ea7\u4f4d\u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-31"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.5MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minMovesToSeat(vector<int>& seats, vector<int>& students) {\n        sort(seats.begin(), seats.end());\n        sort(students.begin(), students.end());\n        int ans = 0;\n        for (int i = 0; i < seats.size(); i++) ans += abs(seats[i] - students[i]);\n        return ans;\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-31"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn min_moves_to_seat(seats: Vec<i32>, students: Vec<i32>) -> i32 {\n        let mut seats = seats;\n        let mut students = students;\n        seats.sort();\n        students.sort();\n        let mut ans = 0;\n        for i in 0..seats.len() {\n            ans += (seats[i] - students[i]).abs();\n        }\n        ans\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},31503:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var t=s(30758);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);