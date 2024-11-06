"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[59958],{46607:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var t=s(86070),i=s(31503);const l={},r="2462.\u96c7\u4f63K\u4f4d\u5de5\u4eba\u7684\u603b\u4ee3\u4ef7",o={id:"leetcode/2401-2500/\u96c7\u4f63K\u4f4d\u5de5\u4eba\u7684\u603b\u4ee3\u4ef7",title:"2462.\u96c7\u4f63K\u4f4d\u5de5\u4eba\u7684\u603b\u4ee3\u4ef7",description:"\u94fe\u63a5\uff1a2462.\u96c7\u4f63K\u4f4d\u5de5\u4eba\u7684\u603b\u4ee3\u4ef7",source:"@site/docs/leetcode/2401-2500/2462.\u96c7\u4f63K\u4f4d\u5de5\u4eba\u7684\u603b\u4ee3\u4ef7.md",sourceDirName:"leetcode/2401-2500",slug:"/leetcode/2401-2500/\u96c7\u4f63K\u4f4d\u5de5\u4eba\u7684\u603b\u4ee3\u4ef7",permalink:"/docs/leetcode/2401-2500/\u96c7\u4f63K\u4f4d\u5de5\u4eba\u7684\u603b\u4ee3\u4ef7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2462,frontMatter:{},sidebar:"journal",previous:{title:"2461.\u957f\u5ea6\u4e3aK\u5b50\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u548c",permalink:"/docs/leetcode/2401-2500/\u957f\u5ea6\u4e3aK\u5b50\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u548c"},next:{title:"2463.\u6700\u5c0f\u79fb\u52a8\u603b\u8ddd\u79bb",permalink:"/docs/leetcode/2401-2500/\u6700\u5c0f\u79fb\u52a8\u603b\u8ddd\u79bb"}},c={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"2462\u96c7\u4f63k\u4f4d\u5de5\u4eba\u7684\u603b\u4ee3\u4ef7",children:"2462.\u96c7\u4f63K\u4f4d\u5de5\u4eba\u7684\u603b\u4ee3\u4ef7"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/total-cost-to-hire-k-workers",children:"2462.\u96c7\u4f63K\u4f4d\u5de5\u4eba\u7684\u603b\u4ee3\u4ef7"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u6a21\u62df\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u96c7\u4f63\u6070\u597d k \u4f4d\u5de5\u4eba\u7684\u603b\u4ee3\u4ef7\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-06"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a136ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a75.2MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f18\u5148\u961f\u5217\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    long long totalCost(vector<int>& costs, int k, int candidates) {\n        int n = costs.size();\n        int lmax = candidates, rmax = n - 1 - candidates;\n        priority_queue<int, vector<int>, greater<int>> ql, qr, qa;\n        for (int i = 0; i < candidates; i++) {\n            ql.push(costs[i]);\n            qr.push(costs[n - 1 - i]);\n        }\n        if (lmax > rmax) {\n            for (int i = 0; i < n; i++) {\n                qa.push(costs[i]);\n            }\n        }\n        long long sum = 0;\n        for (int i = 0; i < k; i++) {\n            // cout << "i = " << i << endl;\n            if (lmax > rmax) {\n                sum += qa.top();\n                qa.pop();\n            } else {\n                // cout << "lmax = " << lmax << ", rmax = " << rmax << endl;\n                if (ql.top() <= qr.top()) {\n                    sum += ql.top();\n                    ql.pop();\n                    ql.push(costs[lmax]);\n                    lmax++;\n                } else {\n                    sum += qr.top();\n                    qr.pop();\n                    qr.push(costs[rmax]);\n                    rmax--;\n                }\n                if (lmax > rmax) {\n                    while (ql.size()) {\n                        qa.push(ql.top());\n                        ql.pop();\n                    }\n                    while (qr.size()) {\n                        qa.push(qr.top());\n                        qr.pop();\n                    }\n                }\n                // cout << "lmax = " << lmax << ", rmax = " << rmax << endl;\n            }\n        }\n        return sum;\n    }\n};\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-05-01"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a305ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a32.84MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f18\u5148\u961f\u5217\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def totalCost(self, costs: List[int], k: int, candidates: int) -> int:\n        n = len(costs)\n        q = []\n        for i in range(candidates): \n            heappush(q, (costs[i], i))\n            if n - 1 - i >= candidates:\n                heappush(q, (costs[n - 1 - i], n - 1 - i))\n        l = candidates\n        r = n - 1 - candidates\n        res = 0\n        while k:\n            picked, picked_index = heappop(q)\n            res += picked\n            if l <= r:\n                if picked_index < l:\n                    heappush(q, (costs[l], l))\n                    l += 1\n                else:\n                    heappush(q, (costs[r], r))\n                    r -= 1\n            k -= 1\n        return res\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>o});var t=s(30758);const i={},l=t.createContext(i);function r(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);