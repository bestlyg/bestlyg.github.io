"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[85594],{17852:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>f,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var t=r(86070),s=r(25710);const l={},f="2671.\u9891\u7387\u8ddf\u8e2a\u5668",c={id:"leetcode/2601-2700/\u9891\u7387\u8ddf\u8e2a\u5668",title:"2671.\u9891\u7387\u8ddf\u8e2a\u5668",description:"\u94fe\u63a5\uff1a2671.\u9891\u7387\u8ddf\u8e2a\u5668",source:"@site/docs/leetcode/2601-2700/2671.\u9891\u7387\u8ddf\u8e2a\u5668.md",sourceDirName:"leetcode/2601-2700",slug:"/leetcode/2601-2700/\u9891\u7387\u8ddf\u8e2a\u5668",permalink:"/docs/leetcode/2601-2700/\u9891\u7387\u8ddf\u8e2a\u5668",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2671,frontMatter:{},sidebar:"journal",previous:{title:"2670.\u627e\u51fa\u4e0d\u540c\u5143\u7d20\u6570\u76ee\u5dee\u6570\u7ec4",permalink:"/docs/leetcode/2601-2700/\u627e\u51fa\u4e0d\u540c\u5143\u7d20\u6570\u76ee\u5dee\u6570\u7ec4"},next:{title:"2672.\u6709\u76f8\u540c\u989c\u8272\u7684\u76f8\u90bb\u5143\u7d20\u6570\u76ee",permalink:"/docs/leetcode/2601-2700/\u6709\u76f8\u540c\u989c\u8272\u7684\u76f8\u90bb\u5143\u7d20\u6570\u76ee"}},i={},o=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"2671\u9891\u7387\u8ddf\u8e2a\u5668",children:"2671.\u9891\u7387\u8ddf\u8e2a\u5668"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/frequency-tracker",children:"2671.\u9891\u7387\u8ddf\u8e2a\u5668"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u54c8\u5e0c\u8868",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8bbe\u8ba1\u5e76\u5b9e\u73b0\u4e00\u4e2a\u80fd\u591f\u5bf9\u5176\u4e2d\u7684\u503c\u8fdb\u884c\u8ddf\u8e2a\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5e76\u652f\u6301\u5bf9\u9891\u7387\u76f8\u5173\u67e5\u8be2\u8fdb\u884c\u5e94\u7b54\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-03-21"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a374ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a81.89MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u4e24\u4e2adict\u8bb0\u5f55\u6570\u91cf\u548c\u9891\u7387\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class FrequencyTracker:\n    def __init__(self):\n        self.freq_map = {}\n        self.cnt_map = {}\n    \n    def del_freq(self, freq: int, number: int):\n        if freq in self.freq_map and number in self.freq_map[freq]:\n            self.freq_map[freq].remove(number)\n            if not len(self.freq_map[freq]): del self.freq_map[freq]\n\n    def add_freq(self, freq: int, number: int):\n        if freq not in self.freq_map: self.freq_map[freq] = set()\n        if number not in self.freq_map[freq]: self.freq_map[freq].add(number)\n\n    def add(self, number: int) -> None:\n        if number not in self.cnt_map: self.cnt_map[number] = 0\n        self.del_freq(self.cnt_map[number], number)\n        self.cnt_map[number] += 1\n        self.add_freq(self.cnt_map[number], number)\n\n    def deleteOne(self, number: int) -> None:\n        if number not in self.cnt_map: self.cnt_map[number] = 0\n        self.del_freq(self.cnt_map[number], number)\n        if self.cnt_map[number] > 0:\n            self.cnt_map[number] -= 1\n            self.add_freq(self.cnt_map[number], number)\n\n    def hasFrequency(self, frequency: int) -> bool:\n        return frequency in self.freq_map\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},25710:(e,n,r)=>{r.d(n,{R:()=>f,x:()=>c});var t=r(30758);const s={},l=t.createContext(s);function f(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:f(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);