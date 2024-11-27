"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[33820],{46527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/1101-1200/\u5feb\u7167\u6570\u7ec4","title":"1146.\u5feb\u7167\u6570\u7ec4","description":"\u94fe\u63a5\uff1a1146.\u5feb\u7167\u6570\u7ec4","source":"@site/docs/leetcode/1101-1200/1146.\u5feb\u7167\u6570\u7ec4.md","sourceDirName":"leetcode/1101-1200","slug":"/leetcode/1101-1200/\u5feb\u7167\u6570\u7ec4","permalink":"/docs/leetcode/1101-1200/\u5feb\u7167\u6570\u7ec4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1146,"frontMatter":{},"sidebar":"journal","previous":{"title":"1145.\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f","permalink":"/docs/leetcode/1101-1200/\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f"},"next":{"title":"1147.\u6bb5\u5f0f\u56de\u6587","permalink":"/docs/leetcode/1101-1200/\u6bb5\u5f0f\u56de\u6587"}}');var l=t(86070),i=t(31503);const r={},o="1146.\u5feb\u7167\u6570\u7ec4",c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"1146\u5feb\u7167\u6570\u7ec4",children:"1146.\u5feb\u7167\u6570\u7ec4"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/snapshot-array",children:"1146.\u5feb\u7167\u6570\u7ec4"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u4e8c\u5206\u67e5\u627e",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5b9e\u73b0\u652f\u6301\u4e0b\u5217\u63a5\u53e3\u7684\u300c\u5feb\u7167\u6570\u7ec4\u300d- SnapshotArray\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-04-26"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a424ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.39MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4ec5\u5b58\u50a8\u53d8\u66f4\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"class SnapshotArray:\n    def __init__(self, length: int):\n        self.next_snap = 0\n        self.list = [[(-1, 0)] for _ in range(length)]\n    def set(self, index: int, val: int) -> None:\n        if self.list[index][-1][0] == self.next_snap:\n            self.list[index][-1] = (self.next_snap, val)\n        else:\n            self.list[index].append((self.next_snap, val))\n    def snap(self) -> int:\n        snap = self.next_snap\n        self.next_snap += 1\n        return snap\n    def get(self, index: int, snap_id: int) -> int:\n        res = bisect_right(self.list[index], (snap_id, 1e10))\n        return self.list[index][res - 1][1]\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(30758);const l={},i=s.createContext(l);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);