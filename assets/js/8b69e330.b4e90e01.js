"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[92415],{53685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=t(86070),s=t(25710);const r={},i="881.\u6551\u751f\u8247",o={id:"leetcode/801-900/\u6551\u751f\u8247",title:"881.\u6551\u751f\u8247",description:"\u94fe\u63a5\uff1a881.\u6551\u751f\u8247",source:"@site/docs/leetcode/801-900/881.\u6551\u751f\u8247.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u6551\u751f\u8247",permalink:"/web/site/docs/leetcode/801-900/\u6551\u751f\u8247",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:881,frontMatter:{},sidebar:"journal",previous:{title:"879.\u76c8\u5229\u8ba1\u5212",permalink:"/web/site/docs/leetcode/801-900/\u76c8\u5229\u8ba1\u5212"},next:{title:"882.\u7ec6\u5206\u56fe\u4e2d\u7684\u53ef\u5230\u8fbe\u8282\u70b9",permalink:"/web/site/docs/leetcode/801-900/\u7ec6\u5206\u56fe\u4e2d\u7684\u53ef\u5230\u8fbe\u8282\u70b9"}},c={},p=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"881\u6551\u751f\u8247",children:"881.\u6551\u751f\u8247"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/boats-to-save-people",children:"881.\u6551\u751f\u8247"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u6392\u5e8f",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u8f7d\u5230\u6bcf\u4e00\u4e2a\u4eba\u6240\u9700\u7684\u6700\u5c0f\u8239\u6570\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-26"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a176ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.6MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3\uff0c\u53cc\u6307\u9488\u4ece\u4e24\u8fb9\u5411\u4e2d\u95f4\u8ba1\u7b97\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function numRescueBoats(people: number[], limit: number): number {\n  people.sort((a, b) => a - b);\n  let ans = 0;\n  let l = 0;\n  let r = people.length - 1;\n  while (l <= r) {\n    if (people[r] + people[l] <= limit) l++;\n    r--;\n    ans++;\n  }\n  return ans;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-06-10"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a22.12MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3\u4f7f\u6bcf\u6761\u8239\u4e0a\u5c3d\u53ef\u80fd\u591a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def numRescueBoats(self, people: List[int], limit: int) -> int:\n        people.sort()\n        l = 0\n        r = len(people) - 1\n        res = 0\n        while l <= r:\n            if people[l] + people[r] <= limit: l += 1\n            res += 1\n            r -= 1\n        return res\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var l=t(30758);const s={},r=l.createContext(s);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);