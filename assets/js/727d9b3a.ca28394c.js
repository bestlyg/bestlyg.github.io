"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[13e3],{20546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/2701-2800/\u6ee1\u8db3\u76ee\u6807\u5de5\u4f5c\u65f6\u957f\u7684\u5458\u5de5\u6570\u76ee","title":"2798.\u6ee1\u8db3\u76ee\u6807\u5de5\u4f5c\u65f6\u957f\u7684\u5458\u5de5\u6570\u76ee","description":"\u94fe\u63a5\uff1a2798.\u6ee1\u8db3\u76ee\u6807\u5de5\u4f5c\u65f6\u957f\u7684\u5458\u5de5\u6570\u76ee","source":"@site/docs/leetcode/2701-2800/2798.\u6ee1\u8db3\u76ee\u6807\u5de5\u4f5c\u65f6\u957f\u7684\u5458\u5de5\u6570\u76ee.md","sourceDirName":"leetcode/2701-2800","slug":"/leetcode/2701-2800/\u6ee1\u8db3\u76ee\u6807\u5de5\u4f5c\u65f6\u957f\u7684\u5458\u5de5\u6570\u76ee","permalink":"/docs/leetcode/2701-2800/\u6ee1\u8db3\u76ee\u6807\u5de5\u4f5c\u65f6\u957f\u7684\u5458\u5de5\u6570\u76ee","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2798,"frontMatter":{},"sidebar":"journal","previous":{"title":"2789.\u5408\u5e76\u540e\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u5143\u7d20","permalink":"/docs/leetcode/2701-2800/\u5408\u5e76\u540e\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u5143\u7d20"},"next":{"title":"2806.\u53d6\u6574\u8d2d\u4e70\u540e\u7684\u8d26\u6237\u4f59\u989d","permalink":"/docs/leetcode/2801-2900/\u53d6\u6574\u8d2d\u4e70\u540e\u7684\u8d26\u6237\u4f59\u989d"}}');var r=n(86070),o=n(31503);const l={},c="2798.\u6ee1\u8db3\u76ee\u6807\u5de5\u4f5c\u65f6\u957f\u7684\u5458\u5de5\u6570\u76ee",i={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"2798\u6ee1\u8db3\u76ee\u6807\u5de5\u4f5c\u65f6\u957f\u7684\u5458\u5de5\u6570\u76ee",children:"2798.\u6ee1\u8db3\u76ee\u6807\u5de5\u4f5c\u65f6\u957f\u7684\u5458\u5de5\u6570\u76ee"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(t.a,{href:"https://leetcode.cn/problems/number-of-employees-who-met-the-target",children:"2798.\u6ee1\u8db3\u76ee\u6807\u5de5\u4f5c\u65f6\u957f\u7684\u5458\u5de5\u6570\u76ee"}),(0,r.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4",(0,r.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u7528\u6574\u6570\u8868\u793a\u5e76\u8fd4\u56de\u5de5\u4f5c\u81f3\u5c11 target \u5c0f\u65f6\u7684\u5458\u5de5\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-04-30"}),"\n",(0,r.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,r.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.41MB"}),"\n",(0,r.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:\n        return len(list(filter(lambda v: v >= target, hours)))\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var s=n(30758);const r={},o=s.createContext(r);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);