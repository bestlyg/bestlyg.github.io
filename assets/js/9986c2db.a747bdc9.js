"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[38522],{63795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"leetcode/901-1000/\u6700\u8fd1\u7684\u8bf7\u6c42\u6b21\u6570","title":"933.\u6700\u8fd1\u7684\u8bf7\u6c42\u6b21\u6570","description":"\u94fe\u63a5\uff1a933.\u6700\u8fd1\u7684\u8bf7\u6c42\u6b21\u6570","source":"@site/docs/leetcode/901-1000/933.\u6700\u8fd1\u7684\u8bf7\u6c42\u6b21\u6570.md","sourceDirName":"leetcode/901-1000","slug":"/leetcode/901-1000/\u6700\u8fd1\u7684\u8bf7\u6c42\u6b21\u6570","permalink":"/docs/leetcode/901-1000/\u6700\u8fd1\u7684\u8bf7\u6c42\u6b21\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":933,"frontMatter":{},"sidebar":"journal","previous":{"title":"931.\u4e0b\u964d\u8def\u5f84\u6700\u5c0f\u548c","permalink":"/docs/leetcode/901-1000/\u4e0b\u964d\u8def\u5f84\u6700\u5c0f\u548c"},"next":{"title":"934.\u6700\u77ed\u7684\u6865","permalink":"/docs/leetcode/901-1000/\u6700\u77ed\u7684\u6865"}}');var r=t(86070),i=t(31503);const c={},l="933.\u6700\u8fd1\u7684\u8bf7\u6c42\u6b21\u6570",u={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - go",id:"\u9898\u89e3-3---go",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"933\u6700\u8fd1\u7684\u8bf7\u6c42\u6b21\u6570",children:"933.\u6700\u8fd1\u7684\u8bf7\u6c42\u6b21\u6570"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/number-of-recent-calls",children:"933.\u6700\u8fd1\u7684\u8bf7\u6c42\u6b21\u6570"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u961f\u5217\u3001\u6570\u636e\u6d41",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5199\u4e00\u4e2a RecentCounter \u7c7b\u6765\u8ba1\u7b97\u7279\u5b9a\u65f6\u95f4\u8303\u56f4\u5185\u6700\u8fd1\u7684\u8bf7\u6c42\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-14"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a264ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a47.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u961f\u5217\u76f4\u63a5\u5224\u65ad\u5934\u90e8\u503c\u662f\u5426\u7b26\u5408\u8981\u6c42\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class RecentCounter {\n  private queue: number[] = [];\n  ping(t: number): number {\n    this.queue.push(t);\n    while (this.queue[0] < t - 3000) {\n      this.queue.shift();\n    }\n    return this.queue.length;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-06"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a132ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a56MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","queue\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class RecentCounter {\n   public:\n    queue<int> q;\n    RecentCounter() {}\n    int ping(int t) {\n        q.push(t);\n        while (t - q.front() > 3000) q.pop();\n        return q.size();\n    }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-3---go",children:"\u9898\u89e3 3 - go"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-06"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a136ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ago"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","queue\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type RecentCounter struct {\n    queue []int\n}\nfunc Constructor() RecentCounter {\n    res := RecentCounter{}\n    return res\n}\nfunc (this *RecentCounter) Ping(t int) int {\n    this.queue = append(this.queue, t)\n    for t-this.queue[0] > 3000 {\n        this.queue = this.queue[1:]\n    }\n    return len(this.queue)\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(30758);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);