"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[68437],{53466:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var l=s(86070),i=s(25710);const t={},r="202.\u5feb\u4e50\u6570",c={id:"leetcode/201-300/\u5feb\u4e50\u6570",title:"202.\u5feb\u4e50\u6570",description:"\u94fe\u63a5\uff1a202.\u5feb\u4e50\u6570",source:"@site/docs/leetcode/201-300/202.\u5feb\u4e50\u6570.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u5feb\u4e50\u6570",permalink:"/docs/leetcode/201-300/\u5feb\u4e50\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:202,frontMatter:{},sidebar:"journal",previous:{title:"201.\u6570\u5b57\u8303\u56f4\u6309\u4f4d\u4e0e",permalink:"/docs/leetcode/201-300/\u6570\u5b57\u8303\u56f4\u6309\u4f4d\u4e0e"},next:{title:"203.\u79fb\u9664\u94fe\u8868\u5143\u7d20",permalink:"/docs/leetcode/201-300/\u79fb\u9664\u94fe\u8868\u5143\u7d20"}},o={},a=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - c",id:"\u9898\u89e3-3---c",level:2},{value:"\u9898\u89e3 4 - cpp",id:"\u9898\u89e3-4---cpp",level:2},{value:"\u9898\u89e3 5 - cpp",id:"\u9898\u89e3-5---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"202\u5feb\u4e50\u6570",children:"202.\u5feb\u4e50\u6570"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(e.a,{href:"https://leetcode.cn/problems/happy-number",children:"202.\u5feb\u4e50\u6570"}),(0,l.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,l.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u6570\u5b66\u3001\u53cc\u6307\u9488",(0,l.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7f16\u5199\u4e00\u4e2a\u7b97\u6cd5\u6765\u5224\u65ad\u4e00\u4e2a\u6570 n \u662f\u4e0d\u662f\u5feb\u4e50\u6570\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-30"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a35.2MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u5224\u65ad\uff0c\u4f7f\u7528 Set \u5224\u65ad\u662f\u5426\u91cd\u590d\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number} n\n * @return {boolean}\n */\nvar isHappy = function (n) {\n  const set = new Set();\n  return happy(n);\n  function happy(n) {\n    if (set.has(n)) return false;\n    set.add(n);\n    let num = 0;\n    while (n !== 0) {\n      num += (n % 10) ** 2;\n      n = Math.floor(n / 10);\n    }\n    if (num === 1) return true;\n    else return happy(num);\n  }\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-06"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.7MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5faa\u73af\u8ba1\u7b97\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:"function isHappy(n: number): boolean {\n  const set = new Set();\n  while (n !== 1) {\n    if (set.has(n)) return false;\n    set.add(n);\n    let sum = 0;\n    while (n !== 0) {\n      sum += (n % 10) ** 2;\n      n = ~~(n / 10);\n    }\n    n = sum;\n  }\n  return true;\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-3---c",children:"\u9898\u89e3 3 - c"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-19"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.3MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5feb\u6162\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"int comp(int n) {\n    int sum = 0, num;\n    while (n) {\n        num = n % 10;\n        sum += num * num;\n        n /= 10;\n    }\n    return sum;\n}\nbool isHappy(int n){\n    int fast = n, slow = n;\n    do{\n        fast = comp(comp(fast));\n        slow = comp(slow);\n    } while(fast != slow);\n    return slow == 1;\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-4---cpp",children:"\u9898\u89e3 4 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-03"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.2MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\uff0c\u8bb0\u5f55\u5f53\u524d\u503c\u662f\u5426\u88ab\u904d\u5386\u8fc7\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    unordered_set<int> s;\n    bool isHappy(int n) {\n        if (s.count(n)) return 0;\n        s.insert(n);\n        int ans = 0;\n        for (; n; n /= 10) ans += pow(n % 10, 2);\n        if (ans == 1) return 1;\n        return isHappy(ans);\n    }\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-5---cpp",children:"\u9898\u89e3 5 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-03"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.6MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5feb\u6162\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int next(int n) {\n        int ans = 0;\n        for (; n; n /= 10) ans += pow(n % 10, 2);\n        return ans;\n    }\n    bool isHappy(int n) {\n        int slow = n, fast = n;\n        while (fast != 1) {\n            slow = next(slow);\n            fast = next(next(fast));\n            if (slow == fast) break;\n        }\n        return fast == 1;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var l=s(30758);const i={},t=l.createContext(i);function r(n){const e=l.useContext(t);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);