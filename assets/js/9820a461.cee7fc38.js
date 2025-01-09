"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[53998],{49503:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1001-1100/\u62fc\u8f66","title":"1094.\u62fc\u8f66","description":"\u94fe\u63a5\uff1a1094.\u62fc\u8f66","source":"@site/docs/leetcode/1001-1100/1094.\u62fc\u8f66.md","sourceDirName":"leetcode/1001-1100","slug":"/leetcode/1001-1100/\u62fc\u8f66","permalink":"/docs/leetcode/1001-1100/\u62fc\u8f66","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1094,"frontMatter":{},"sidebar":"journal","previous":{"title":"1093.\u5927\u6837\u672c\u7edf\u8ba1","permalink":"/docs/leetcode/1001-1100/\u5927\u6837\u672c\u7edf\u8ba1"},"next":{"title":"1095.\u5c71\u8109\u6570\u7ec4\u4e2d\u67e5\u627e\u76ee\u6807\u503c","permalink":"/docs/leetcode/1001-1100/\u5c71\u8109\u6570\u7ec4\u4e2d\u67e5\u627e\u76ee\u6807\u503c"}}');var i=t(25105),r=t(8556);const l={},o="1094.\u62fc\u8f66",c={},a=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"1094\u62fc\u8f66",children:"1094.\u62fc\u8f66"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/car-pooling",children:"1094.\u62fc\u8f66"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u524d\u7f00\u548c\u3001\u6392\u5e8f\u3001\u6a21\u62df\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5f53\u4e14\u4ec5\u5f53\u4f60\u53ef\u4ee5\u5728\u6240\u6709\u7ed9\u5b9a\u7684\u884c\u7a0b\u4e2d\u63a5\u9001\u6240\u6709\u4e58\u5ba2\u65f6\uff0c\u8fd4\u56de true\uff0c\u5426\u5219\u8bf7\u8fd4\u56de false\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-02"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.64MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u4f18\u5148\u961f\u5217\u8ba1\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:\n        trips.sort(key = lambda o: (o[1], o[2]))\n        size = 0\n        q = []\n        for [num, f, t] in trips:\n            while q and q[0][0] <= f: size -= heappop(q)[1]\n            if size + num > capacity: return False\n            heappush(q, (t, num))\n            size += num\n        return True\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-02"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.07MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn car_pooling(mut trips: Vec<Vec<i32>>, capacity: i32) -> bool {\n        trips.sort_by_key(|o| o[1]);\n        let mut size = 0;\n        let mut q = std::collections::BinaryHeap::<(i32, i32)>::new();\n        for item in trips {\n            let (num, f, t) = (item[0], item[1], item[2]);\n            while q.len() > 0 && -(*q.peek().unwrap()).0 <= f {\n                size -= q.pop().unwrap().1;\n            }\n            if size + num > capacity {\n                return false;\n            }\n            q.push((-t, num));\n            size += num;\n        }\n        true\n    }\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(58101);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);