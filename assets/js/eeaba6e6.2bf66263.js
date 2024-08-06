"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[56896],{67261:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=e(86070),t=e(25710);const r={},c="1402.\u505a\u83dc\u987a\u5e8f",l={id:"leetcode/1401-1500/\u505a\u83dc\u987a\u5e8f",title:"1402.\u505a\u83dc\u987a\u5e8f",description:"\u94fe\u63a5\uff1a1402.\u505a\u83dc\u987a\u5e8f",source:"@site/docs/leetcode/1401-1500/1402.\u505a\u83dc\u987a\u5e8f.md",sourceDirName:"leetcode/1401-1500",slug:"/leetcode/1401-1500/\u505a\u83dc\u987a\u5e8f",permalink:"/docs/leetcode/1401-1500/\u505a\u83dc\u987a\u5e8f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1402,frontMatter:{},sidebar:"journal",previous:{title:"1401.\u5706\u548c\u77e9\u5f62\u662f\u5426\u6709\u91cd\u53e0",permalink:"/docs/leetcode/1401-1500/\u5706\u548c\u77e9\u5f62\u662f\u5426\u6709\u91cd\u53e0"},next:{title:"1403.\u975e\u9012\u589e\u987a\u5e8f\u7684\u6700\u5c0f\u5b50\u5e8f\u5217",permalink:"/docs/leetcode/1401-1500/\u975e\u9012\u589e\u987a\u5e8f\u7684\u6700\u5c0f\u5b50\u5e8f\u5217"}},o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(n){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"1402\u505a\u83dc\u987a\u5e8f",children:"1402.\u505a\u83dc\u987a\u5e8f"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(s.a,{href:"https://leetcode.cn/problems/reducing-dishes",children:"1402.\u505a\u83dc\u987a\u5e8f"}),(0,i.jsx)(s.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,i.jsx)(s.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u6392\u5e8f",(0,i.jsx)(s.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u53a8\u5e08\u5728\u51c6\u5907\u4e86\u4e00\u5b9a\u6570\u91cf\u7684\u83dc\u80b4\u540e\u53ef\u4ee5\u83b7\u5f97\u7684\u6700\u5927 like-time \u7cfb\u6570 \u603b\u548c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-22"}),"\n",(0,i.jsx)(s.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(s.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.93MB"}),"\n",(0,i.jsx)(s.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(s.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u8d2a\u5fc3\u5224\u65ad\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxSatisfaction(vector<int>& satisfaction) {\n        sort(satisfaction.begin(), satisfaction.end());\n        int n = satisfaction.size(), nsum = 0, vsum = 0, res = 0;\n        for (int i = 0; i < n; i++) {\n            nsum += (i + 1) * satisfaction[i];\n            vsum += satisfaction[i];\n        }\n        res = max(res, nsum);\n        for (int i = 1; i < n; i++) {\n            if (satisfaction[i] >= 0) break;\n            nsum -= vsum;\n            vsum -= satisfaction[i - 1];\n            res = max(res, nsum);\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,i.jsx)(s.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-22"}),"\n",(0,i.jsx)(s.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,i.jsx)(s.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.69MB"}),"\n",(0,i.jsx)(s.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(s.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"class Solution:\n    def maxSatisfaction(self, satisfaction: List[int]) -> int:\n        satisfaction.sort()\n        n = len(satisfaction)\n        res = nsum = sum((i + 1) * satisfaction[i] for i in range(n))\n        sumv = sum(satisfaction)\n        for i in range(1, n):\n            if satisfaction[i] >= 0: break\n            nsum -= sumv\n            sumv -= satisfaction[i - 1]\n            res = max(res, nsum)\n\n        return max(0, res)\n"})}),"\n",(0,i.jsx)(s.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-22"}),"\n",(0,i.jsx)(s.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,i.jsx)(s.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.98MB"}),"\n",(0,i.jsx)(s.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(s.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-rust",children:"impl Solution {\n    pub fn max_satisfaction(mut satisfaction: Vec<i32>) -> i32 {\n        satisfaction.sort();\n        let n = satisfaction.len();\n        let mut res = 0;\n        let mut nsum = 0;\n        let mut vsum = 0;\n        for i in 0..n {\n            nsum += (i as i32 + 1) * satisfaction[i];\n            vsum += satisfaction[i]\n        }\n        res = res.max(nsum);\n        for i in 1..n {\n            if satisfaction[i] >= 0 {\n                break;\n            }\n            nsum -= vsum;\n            vsum -= satisfaction[i - 1];\n            res = res.max(nsum);\n        }\n        res\n    }\n}\n\n"})})]})}function d(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},25710:(n,s,e)=>{e.d(s,{R:()=>c,x:()=>l});var i=e(30758);const t={},r=i.createContext(t);function c(n){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),i.createElement(r.Provider,{value:s},n.children)}}}]);