"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[5593],{52912:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(86070),i=t(31503);const r={},c="1184.\u516c\u4ea4\u7ad9\u95f4\u7684\u8ddd\u79bb",l={id:"leetcode/1101-1200/\u516c\u4ea4\u7ad9\u95f4\u7684\u8ddd\u79bb",title:"1184.\u516c\u4ea4\u7ad9\u95f4\u7684\u8ddd\u79bb",description:"\u94fe\u63a5\uff1a1184.\u516c\u4ea4\u7ad9\u95f4\u7684\u8ddd\u79bb",source:"@site/docs/leetcode/1101-1200/1184.\u516c\u4ea4\u7ad9\u95f4\u7684\u8ddd\u79bb.md",sourceDirName:"leetcode/1101-1200",slug:"/leetcode/1101-1200/\u516c\u4ea4\u7ad9\u95f4\u7684\u8ddd\u79bb",permalink:"/docs/leetcode/1101-1200/\u516c\u4ea4\u7ad9\u95f4\u7684\u8ddd\u79bb",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1184,frontMatter:{},sidebar:"journal",previous:{title:"1177.\u6784\u5efa\u56de\u6587\u4e32\u68c0\u6d4b",permalink:"/docs/leetcode/1101-1200/\u6784\u5efa\u56de\u6587\u4e32\u68c0\u6d4b"},next:{title:"1185.\u4e00\u5468\u4e2d\u7684\u7b2c\u51e0\u5929",permalink:"/docs/leetcode/1101-1200/\u4e00\u5468\u4e2d\u7684\u7b2c\u51e0\u5929"}},a={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"1184\u516c\u4ea4\u7ad9\u95f4\u7684\u8ddd\u79bb",children:"1184.\u516c\u4ea4\u7ad9\u95f4\u7684\u8ddd\u79bb"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/distance-between-bus-stops",children:"1184.\u516c\u4ea4\u7ad9\u95f4\u7684\u8ddd\u79bb"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4e58\u5ba2\u4ece\u51fa\u53d1\u70b9 start \u5230\u76ee\u7684\u5730 destination \u4e4b\u95f4\u7684\u6700\u77ed\u8ddd\u79bb\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-29"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.6MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int comp(vector<int>& distance, int start, int destination, int f) {\n        int sum = 0;\n        while (start != destination) {\n            if (f == 1) sum += distance[start];\n            start += f;\n            if (start == distance.size())\n                start = 0;\n            else if (start == -1)\n                start = distance.size() - 1;\n            if (f == -1) sum += distance[start];\n        }\n        return sum;\n    }\n    int distanceBetweenBusStops(vector<int>& distance, int start,\n                                int destination) {\n        return min(comp(distance, start, destination, 1),\n                   comp(distance, start, destination, -1));\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-07-24"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn distance_between_bus_stops(distance: Vec<i32>, start: i32, destination: i32) -> i32 {\n        let n = distance.len() as i32;\n        let (mut sum1, mut sum2) = (0, 0);\n        let (mut cur1, mut cur2) = (start, destination);\n        let mut i = start;\n        while i != destination {\n            sum1 += distance[i as usize];\n            i = (i + 1) % n;\n        }\n        i = destination;\n        while i != start {\n            sum2 += distance[i as usize];\n            i = (i + 1) % n;\n        }\n        sum1.min(sum2)\n    }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-09-16"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.34MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5411\u5de6\u904d\u5386\u548c\u5411\u53f3\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def distanceBetweenBusStops(self, distance: List[int], start: int, destination: int) -> int:\n        n = len(distance)\n        def run(offset: int) -> int:\n            cur = start\n            val = 0\n            while cur != destination:\n                if offset == 1: val += distance[cur]\n                cur = (cur + offset) % n\n                if offset == -1: val += distance[cur]\n            return val\n        return min(run(v) for v in [1, -1])\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var s=t(30758);const i={},r=s.createContext(i);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);