"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[3837],{27572:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var t=i(86070),s=i(31503);const c={},l="1103.\u5206\u7cd6\u679cII",r={id:"leetcode/1101-1200/\u5206\u7cd6\u679cII",title:"1103.\u5206\u7cd6\u679cII",description:"\u94fe\u63a5\uff1a1103.\u5206\u7cd6\u679cII",source:"@site/docs/leetcode/1101-1200/1103.\u5206\u7cd6\u679cII.md",sourceDirName:"leetcode/1101-1200",slug:"/leetcode/1101-1200/\u5206\u7cd6\u679cII",permalink:"/docs/leetcode/1101-1200/\u5206\u7cd6\u679cII",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1103,frontMatter:{},sidebar:"journal",previous:{title:"1096.\u82b1\u62ec\u53f7\u5c55\u5f00II",permalink:"/docs/leetcode/1001-1100/\u82b1\u62ec\u53f7\u5c55\u5f00II"},next:{title:"1104.\u4e8c\u53c9\u6811\u5bfb\u8def",permalink:"/docs/leetcode/1101-1200/\u4e8c\u53c9\u6811\u5bfb\u8def"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"1103\u5206\u7cd6\u679cii",children:"1103.\u5206\u7cd6\u679cII"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/distribute-candies-to-people",children:"1103.\u5206\u7cd6\u679cII"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u6a21\u62df",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4e00\u4e2a\u957f\u5ea6\u4e3a num_people\u3001\u5143\u7d20\u4e4b\u548c\u4e3a candies \u7684\u6570\u7ec4\uff0c\u4ee5\u8868\u793a\u7cd6\u679c\u7684\u6700\u7ec8\u5206\u53d1\u60c5\u51b5\uff08\u5373 ans[i] \u8868\u793a\u7b2c i \u4e2a\u5c0f\u670b\u53cb\u5206\u5230\u7684\u7cd6\u679c\u6570\uff09\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-28"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.32MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> distributeCandies(int candies, int num_people) {\n        vector<int> ans(num_people,0);\n        for (int i = 0, cnt = 1; candies > 0; i = (i + 1) % num_people,cnt++) {\n            ans[i] += min(candies, cnt);\n            candies -= cnt;\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-06-03"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a37ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.5MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def distributeCandies(self, candies: int, num_people: int) -> List[int]:\n        res = [0] * num_people\n        cur = 1\n        idx = 0\n        while candies:\n            v = min(cur, candies)\n            res[idx] += v\n            candies -= v\n            cur += 1\n            idx = (idx + 1) % num_people\n        return res\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},31503:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var t=i(30758);const s={},c=t.createContext(s);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);