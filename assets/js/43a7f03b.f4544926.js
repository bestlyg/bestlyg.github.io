"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[66945],{80284:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(86070),i=t(25710);const r={},l="1010.\u603b\u6301\u7eed\u65f6\u95f4\u53ef\u88ab60\u6574\u9664\u7684\u6b4c\u66f2",c={id:"leetcode/1001-1100/\u603b\u6301\u7eed\u65f6\u95f4\u53ef\u88ab60\u6574\u9664\u7684\u6b4c\u66f2",title:"1010.\u603b\u6301\u7eed\u65f6\u95f4\u53ef\u88ab60\u6574\u9664\u7684\u6b4c\u66f2",description:"\u94fe\u63a5\uff1a1010.\u603b\u6301\u7eed\u65f6\u95f4\u53ef\u88ab60\u6574\u9664\u7684\u6b4c\u66f2",source:"@site/docs/leetcode/1001-1100/1010.\u603b\u6301\u7eed\u65f6\u95f4\u53ef\u88ab60\u6574\u9664\u7684\u6b4c\u66f2.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u603b\u6301\u7eed\u65f6\u95f4\u53ef\u88ab60\u6574\u9664\u7684\u6b4c\u66f2",permalink:"/web/site/docs/leetcode/1001-1100/\u603b\u6301\u7eed\u65f6\u95f4\u53ef\u88ab60\u6574\u9664\u7684\u6b4c\u66f2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1010,frontMatter:{},sidebar:"journal",previous:{title:"1009.\u5341\u8fdb\u5236\u6574\u6570\u7684\u53cd\u7801",permalink:"/web/site/docs/leetcode/1001-1100/\u5341\u8fdb\u5236\u6574\u6570\u7684\u53cd\u7801"},next:{title:"1011.\u5728D\u5929\u5185\u9001\u8fbe\u5305\u88f9\u7684\u80fd\u529b",permalink:"/web/site/docs/leetcode/1001-1100/\u5728D\u5929\u5185\u9001\u8fbe\u5305\u88f9\u7684\u80fd\u529b"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1010\u603b\u6301\u7eed\u65f6\u95f4\u53ef\u88ab60\u6574\u9664\u7684\u6b4c\u66f2",children:"1010.\u603b\u6301\u7eed\u65f6\u95f4\u53ef\u88ab60\u6574\u9664\u7684\u6b4c\u66f2"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/pairs-of-songs-with-total-durations-divisible-by-60",children:"1010.\u603b\u6301\u7eed\u65f6\u95f4\u53ef\u88ab60\u6574\u9664\u7684\u6b4c\u66f2"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u8ba1\u6570",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u5176\u603b\u6301\u7eed\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u53ef\u88ab 60 \u6574\u9664\u7684\u6b4c\u66f2\u5bf9\u7684\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-07"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a28ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a27.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53d6\u6a21\u540e\u6c42\u9006\u5143\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int numPairsDivisibleBy60(vector<int>& time) {\n        unordered_map<int, int> m;\n        int res = 0;\n        for (auto &t : time) {\n            if (t % 60 == 0) res += m[0];\n            else res += m[60 - t % 60];\n            m[t % 60]++;\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-07"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.6MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def numPairsDivisibleBy60(self, time: List[int]) -> int:\n        m = Counter()\n        res = 0\n        for t in time:\n            if t % 60 == 0:\n                res += m[0]\n            else:\n                res += m[60-t % 60]\n            m[t % 60] += 1\n        return res\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-07"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.4MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn num_pairs_divisible_by60(time: Vec<i32>) -> i32 {\n        let mut m = std::collections::HashMap::<i32, i32>::new();\n        let mut res = 0;\n        for t in time {\n            if t % 60 == 0 {\n                res += m.get(&0).unwrap_or(&0);\n            } else {\n                res += m.get(&(60 - t % 60)).unwrap_or(&0);\n            }\n            *m.entry(t % 60).or_insert(0) += 1;\n        }\n        res\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(30758);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);