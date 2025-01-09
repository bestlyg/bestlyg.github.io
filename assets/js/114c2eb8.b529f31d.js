"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[76307],{65451:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"leetcode/LCP/LCP33.\u84c4\u6c34","title":"LCP33.\u84c4\u6c34","description":"\u94fe\u63a5\uff1aLCP33.\u84c4\u6c34","source":"@site/docs/leetcode/LCP/LCP33.\u84c4\u6c34.md","sourceDirName":"leetcode/LCP","slug":"/leetcode/LCP/LCP33.\u84c4\u6c34","permalink":"/docs/leetcode/LCP/LCP33.\u84c4\u6c34","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"LCP30.\u9b54\u5854\u6e38\u620f","permalink":"/docs/leetcode/LCP/LCP30.\u9b54\u5854\u6e38\u620f"},"next":{"title":"LCP40.\u5fc3\u7b97\u6311\u6218","permalink":"/docs/leetcode/LCP/LCP40.\u5fc3\u7b97\u6311\u6218"}}');var r=t(25105),i=t(8556);const o={},s="LCP33.\u84c4\u6c34",l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"lcp33\u84c4\u6c34",children:"LCP33.\u84c4\u6c34"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/o8SXZn",children:"LCP33.\u84c4\u6c34"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6bcf\u4e2a\u6c34\u7f38\u5bf9\u5e94\u6700\u4f4e\u84c4\u6c34\u91cf\u8bb0\u4f5c vat[i]\uff0c\u8fd4\u56de\u5c0f\u6263\u81f3\u5c11\u9700\u8981\u591a\u5c11\u6b21\u64cd\u4f5c\u53ef\u4ee5\u5b8c\u6210\u6240\u6709\u6c34\u7f38\u84c4\u6c34\u8981\u6c42\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-21"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u5806\u83b7\u53d6\u9700\u8981\u6b21\u6570\u6700\u591a\u7684\u6876\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int storeWater(vector<int>& bucket, vector<int>& vat) {\n        auto get_cnt = [&](int idx) {\n            if (bucket[idx] == 0) {\n                if (vat[idx] == 0) return 0;\n                return 0x3f3f3f3f;\n            }\n            return (int)ceil(1.0 * vat[idx] / bucket[idx]);\n        };\n        auto cmp = [&](int x, int y) -> bool { \n            return get_cnt(x) < get_cnt(y);\n        };\n        priority_queue<int, vector<int>, decltype(cmp)> q(cmp);\n        for (int i = 0; i < bucket.size(); i++) q.push(i);\n        int res = get_cnt(q.top()), add = 0;\n        while (get_cnt(q.top()) > 1) {\n            int cur_cnt = get_cnt(q.top());\n            while (get_cnt(q.top()) == cur_cnt) {\n                int idx = q.top();\n                q.pop();\n                do {\n                    bucket[idx] += 1;\n                    add += 1;\n                } while(get_cnt(idx) == cur_cnt);\n                q.push(idx);\n            }\n            res = min(res, get_cnt(q.top()) + add);\n        }\n        return res;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var c=t(58101);const r={},i=c.createContext(r);function o(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);