"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[91816],{37146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"leetcode/1401-1500/\u5e76\u884c\u8bfe\u7a0bII","title":"1494.\u5e76\u884c\u8bfe\u7a0bII","description":"\u94fe\u63a5\uff1a1494.\u5e76\u884c\u8bfe\u7a0bII","source":"@site/docs/leetcode/1401-1500/1494.\u5e76\u884c\u8bfe\u7a0bII.md","sourceDirName":"leetcode/1401-1500","slug":"/leetcode/1401-1500/\u5e76\u884c\u8bfe\u7a0bII","permalink":"/docs/leetcode/1401-1500/\u5e76\u884c\u8bfe\u7a0bII","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1494,"frontMatter":{},"sidebar":"journal","previous":{"title":"1491.\u53bb\u6389\u6700\u4f4e\u5de5\u8d44\u548c\u6700\u9ad8\u5de5\u8d44\u540e\u7684\u5de5\u8d44\u5e73\u5747\u503c","permalink":"/docs/leetcode/1401-1500/\u53bb\u6389\u6700\u4f4e\u5de5\u8d44\u548c\u6700\u9ad8\u5de5\u8d44\u540e\u7684\u5de5\u8d44\u5e73\u5747\u503c"},"next":{"title":"1499.\u6ee1\u8db3\u4e0d\u7b49\u5f0f\u7684\u6700\u5927\u503c","permalink":"/docs/leetcode/1401-1500/\u6ee1\u8db3\u4e0d\u7b49\u5f0f\u7684\u6700\u5927\u503c"}}');var r=t(25105),s=t(8556);const c={},o="1494.\u5e76\u884c\u8bfe\u7a0bII",l={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1494\u5e76\u884c\u8bfe\u7a0bii",children:"1494.\u5e76\u884c\u8bfe\u7a0bII"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/parallel-courses-ii",children:"1494.\u5e76\u884c\u8bfe\u7a0bII"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u56fe\u3001\u52a8\u6001\u89c4\u5212\u3001\u72b6\u6001\u538b\u7f29",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\xa0n\xa0\u8868\u793a\u67d0\u6240\u5927\u5b66\u91cc\u8bfe\u7a0b\u7684\u6570\u76ee\uff0c\u7f16\u53f7\u4e3a\xa01\xa0\u5230\xa0n\xa0\uff0c\u6570\u7ec4\xa0relations\xa0\u4e2d\uff0c\xa0relations[i] = [xi, yi]\xa0 \u8868\u793a\u4e00\u4e2a\u5148\u4fee\u8bfe\u7684\u5173\u7cfb\uff0c\u4e5f\u5c31\u662f\u8bfe\u7a0b\xa0xi\xa0\u5fc5\u987b\u5728\u8bfe\u7a0b\xa0yi\xa0\u4e4b\u524d\u4e0a\u3002\u540c\u65f6\u4f60\u8fd8\u6709\u4e00\u4e2a\u6574\u6570\xa0k\xa0\u3002\u5728\u4e00\u4e2a\u5b66\u671f\u4e2d\uff0c\u4f60 \u6700\u591a\xa0\u53ef\u4ee5\u540c\u65f6\u4e0a k\xa0\u95e8\u8bfe\uff0c\u524d\u63d0\u662f\u8fd9\u4e9b\u8bfe\u7684\u5148\u4fee\u8bfe\u5728\u4e4b\u524d\u7684\u5b66\u671f\u91cc\u5df2\u7ecf\u4e0a\u8fc7\u4e86\u3002\u8bf7\u4f60\u8fd4\u56de\u4e0a\u5b8c\u6240\u6709\u8bfe\u6700\u5c11\u9700\u8981\u591a\u5c11\u4e2a\u5b66\u671f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-16"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a680ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a168.4MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u904d\u5386\uff0c\u5224\u65ad\u540c\u4e00\u671f\u6bcf\u4e2a\u70b9\u4e0a\u8bfe\u7684\u60c5\u51b5\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'#define SIZE 13\nstruct Node {\n    int idx, child_cnt;\n    unordered_set<int> parents, children;\n};\nclass Solution {\npublic:\n    int minNumberOfSemesters(int n, vector<vector<int>>& relations, int k) {\n        vector<Node> list(n);\n        for (int i = 0; i < n; i++) {\n            list[i].idx = i;\n            list[i].child_cnt = 0;\n        }\n        for (auto &item : relations) {\n            list[item[1] - 1].parents.insert(item[0] - 1);\n            list[item[0] - 1].children.insert(item[1] - 1);\n        }\n        // for (int i = 0; i < n; i++) {\n        //     cout << "i = " << i\n        //          << ", parent = ";\n        //     for (auto &p : list[i].parents) cout << p << ", ";\n        //     cout << ", children = ";\n        //     for (auto &c : list[i].children) cout << c << ", ";\n        //     cout << endl;\n        // }\n        int empty = 0, res = INT_MAX;\n        for (int i = 0; i < n; i++) {\n            if (list[i].parents.size() == 0) empty |= 1 << i;\n        }\n        unordered_map<int, unordered_map<int, unordered_map<int, unordered_map<int, int>>>> cache;\n        function<int(int, int, int, int)> dfs = [&](int empty, int used, int cur_res, int cur_k){\n            if (cache[empty][used][cur_res][cur_k]) return cache[empty][used][cur_res][cur_k];\n            // cout << "dfs "\n            //      << ", empty = " << bitset<SIZE>(empty).to_string()\n            //      << ", used = " << bitset<SIZE>(used).to_string()\n            //      << ", cur_res = " << cur_res\n            //      << ", cur_k = " << cur_k\n            //      << endl;\n            if (used == (1 << n) - 1) {\n                if (cur_k) cur_res += 1;\n                return cache[empty][used][cur_res][cur_k] = cur_res;\n            }\n            if (cur_k == k || empty == 0) {\n                int next_empty = empty;\n                for (int i = 0; i < n; i++) {\n                    if ((used & (1 << i)) == 0 && list[i].parents.size() == 0) next_empty |= 1 << i;\n                }\n                return cache[empty][used][cur_res][cur_k] = dfs(next_empty, used, cur_res + 1, 0);\n            }\n            int res = INT_MAX;\n            for (int i = 0; i < n; i++) {\n                if (empty & (1 << i)) {\n                    for (auto &c : list[i].children) list[c].parents.erase(i);\n                    res = min(res, dfs(empty & ~(1 << i), used | (1 << i), cur_res, cur_k + 1));\n                    for (auto &c : list[i].children) list[c].parents.insert(i);\n                }\n            }\n            return cache[empty][used][cur_res][cur_k] = res;\n        };\n        return dfs(empty, 0, 0, 0);\n    }\n};\n'})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(58101);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);