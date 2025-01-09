"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[44910],{20537:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/2501-2600/\u67e5\u8be2\u6811\u4e2d\u73af\u7684\u957f\u5ea6","title":"2509.\u67e5\u8be2\u6811\u4e2d\u73af\u7684\u957f\u5ea6","description":"\u94fe\u63a5\uff1a2509.\u67e5\u8be2\u6811\u4e2d\u73af\u7684\u957f\u5ea6","source":"@site/docs/leetcode/2501-2600/2509.\u67e5\u8be2\u6811\u4e2d\u73af\u7684\u957f\u5ea6.md","sourceDirName":"leetcode/2501-2600","slug":"/leetcode/2501-2600/\u67e5\u8be2\u6811\u4e2d\u73af\u7684\u957f\u5ea6","permalink":"/docs/leetcode/2501-2600/\u67e5\u8be2\u6811\u4e2d\u73af\u7684\u957f\u5ea6","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2509,"frontMatter":{},"sidebar":"journal","previous":{"title":"2508.\u6dfb\u52a0\u8fb9\u4f7f\u6240\u6709\u8282\u70b9\u5ea6\u6570\u90fd\u4e3a\u5076\u6570","permalink":"/docs/leetcode/2501-2600/\u6dfb\u52a0\u8fb9\u4f7f\u6240\u6709\u8282\u70b9\u5ea6\u6570\u90fd\u4e3a\u5076\u6570"},"next":{"title":"2511.\u6700\u591a\u53ef\u4ee5\u6467\u6bc1\u7684\u654c\u4eba\u57ce\u5821\u6570\u76ee","permalink":"/docs/leetcode/2501-2600/\u6700\u591a\u53ef\u4ee5\u6467\u6bc1\u7684\u654c\u4eba\u57ce\u5821\u6570\u76ee"}}');var l=t(25105),i=t(8556);const s={},c="2509.\u67e5\u8be2\u6811\u4e2d\u73af\u7684\u957f\u5ea6",o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"2509\u67e5\u8be2\u6811\u4e2d\u73af\u7684\u957f\u5ea6",children:"2509.\u67e5\u8be2\u6811\u4e2d\u73af\u7684\u957f\u5ea6"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(e.a,{href:"https://leetcode.cn/problems/cycle-length-queries-in-a-tree",children:"2509.\u67e5\u8be2\u6811\u4e2d\u73af\u7684\u957f\u5ea6"}),(0,l.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,l.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6570\u7ec4\u3001\u4e8c\u53c9\u6811",(0,l.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4e00\u4e2a\u957f\u5ea6\u4e3a m \u7684\u6570\u7ec4 answer \uff0c\u5176\u4e2d answer[i] \u662f\u7b2c i \u4e2a\u67e5\u8be2\u7684\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-18"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a324ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a95.9MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6700\u8fd1\u516c\u5171\u7956\u5148\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:'struct Node{\n    int v, p;\n    unordered_set<int> l, r;\n};\nclass Solution {\npublic:\n    vector<int> cycleLengthQueries(int n, vector<vector<int>>& queries) {\n        vector<int> ans(queries.size());\n        for (int i = 0; i < queries.size(); i++) {\n            ans[i] = query(n, queries[i]);\n        }\n        return ans;\n    }\n    int query(int n, vector<int> &q) {\n        int n1 = q[0], n2 = q[1],\n            l1 = getLevel(n1), l2 = getLevel(n2);\n        if (l1 < l2) {\n            swap(n1, n2);\n            swap(l1, l2);\n        }\n        // cout << "n1 = " << n1 << ", l1 = " << l1 << ", n2 = " << n2 << ", l2 = " << l2 << endl;\n        int ans = 0;\n        while (l1 > l2) {\n            n1 = getParent(n1);\n            l1 = getLevel(n1);\n            ans++;\n        }\n        while (n1 != n2) {\n            ans += 2;\n            n1 = getParent(n1);\n            n2 = getParent(n2);\n        }\n        // cout << "n1 = " << n1 << ", l1 = " << l1 << ", n2 = " << n2 << ", l2 = " << l2 << endl;\n        return ans + 1;\n    }\n    int comp(int n1, int n2) {\n        return 0;\n    }\n    unordered_map<int, int> m;\n    int getLevel(int val) {\n        if (m.count(val)) return m[val];\n        int i = 1, level = 0;\n        while (i <= val) i *= 2, level++;\n        return m[val] = level;\n    }\n    int getParent(int v) {\n        if (v == 1) return v;\n        return v / 2;\n    }\n};\n'})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},8556:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>c});var r=t(58101);const l={},i=r.createContext(l);function s(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);