"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[88397],{30667:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=t(86070),s=t(25710);const r={},c="1601.\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee",o={id:"leetcode/1601-1700/\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee",title:"1601.\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee",description:"\u94fe\u63a5\uff1a1601.\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee",source:"@site/docs/leetcode/1601-1700/1601.\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee.md",sourceDirName:"leetcode/1601-1700",slug:"/leetcode/1601-1700/\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee",permalink:"/docs/leetcode/1601-1700/\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1601,frontMatter:{},sidebar:"journal",previous:{title:"1600.\u738b\u4f4d\u7ee7\u627f\u987a\u5e8f",permalink:"/docs/leetcode/1501-1600/\u738b\u4f4d\u7ee7\u627f\u987a\u5e8f"},next:{title:"1603.\u8bbe\u8ba1\u505c\u8f66\u7cfb\u7edf",permalink:"/docs/leetcode/1601-1700/\u8bbe\u8ba1\u505c\u8f66\u7cfb\u7edf"}},l={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"1601\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee",children:"1601.\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/maximum-number-of-achievable-transfer-requests",children:"1601.\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u56de\u6eaf\u3001\u679a\u4e3e",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u4ece\u539f\u8bf7\u6c42\u5217\u8868\u4e2d\u9009\u51fa\u82e5\u5e72\u4e2a\u8bf7\u6c42\uff0c\u4f7f\u5f97\u5b83\u4eec\u662f\u4e00\u4e2a\u53ef\u884c\u7684\u8bf7\u6c42\u5217\u8868\uff0c\u5e76\u8fd4\u56de\u6240\u6709\u53ef\u884c\u5217\u8868\u4e2d\u6700\u5927\u8bf7\u6c42\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-28"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a416ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a24.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7edf\u8ba1\u6240\u6709\u73af\uff0c\u4f9d\u6b21\u9009\u62e9\u73af\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    struct node {\n        int data, cnt;\n        unordered_map<int, int> next;\n    };\n    int maximumRequests(int n, vector<vector<int>> &requests) {\n        vector<node> list(n);\n        int ans = 0;\n        for (int i = 0; i < n; i++) {\n            list[i].data = i;\n            list[i].cnt = 0;\n        }\n        for (auto &request : requests) {\n            int from = request[0], to = request[1];\n            if (from == to) {\n                ans++;\n                continue;\n            }\n            list[from].next[to]++;\n            list[from].cnt++;\n        }\n        unordered_set<int> s;\n        vector<vector<int>> arr;\n        for (int i = 0; i < n; i++) {\n            vector<vector<int>> res = getlist(list, i, s, i, 1);\n            for (auto &item : res) {\n                reverse(item.begin(), item.end());\n                arr.push_back(item);\n            }\n        }\n        return dfs(list, arr, s) + ans;\n    }\n\n    int dfs(vector<node> &list, vector<vector<int>> &arr,\n            unordered_set<int> &used) {\n        int n = arr.size(), ans = 0;\n        for (int i = 0; i < n; i++) {\n            if (used.count(i) || !check(list, arr[i])) continue;\n            int cur = 0, cnt = 0;\n            while (check(list, arr[i])) {\n                cnt++;\n                cur += arr[i].size() - 1;\n                setlist(list, arr[i], -1);\n            }\n            used.insert(i);\n            cur += dfs(list, arr, used);\n            used.erase(i);\n            while (cnt--) setlist(list, arr[i], 1);\n            ans = max(ans, cur);\n        }\n        return ans;\n    }\n\n    void setlist(vector<node> &list, vector<int> &arr, int add) {\n        for (int i = 0; i < arr.size() - 1; i++) {\n            list[arr[i]].next[arr[i + 1]] += add;\n        }\n    }\n    bool check(vector<node> &list, vector<int> &arr) {\n        for (int i = 0; i < arr.size() - 1; i++) {\n            if (list[arr[i]].next[arr[i + 1]] == 0) return 0;\n        }\n        return 1;\n    }\n    vector<vector<int>> getlist(vector<node> &list, int &find,\n                                unordered_set<int> &s, int cur, int init) {\n        vector<vector<int>> ans;\n        if (init == 0 && cur == find) {\n            vector<int> res(1, cur);\n            ans.push_back(res);\n            return ans;\n        }\n        s.insert(cur);\n        for (auto &item : list[cur].next) {\n            if (!s.count(item.first) || init == 0 && item.first == find) {\n                vector<vector<int>> nextlist =\n                    getlist(list, find, s, item.first, 0);\n                if (nextlist.size() == 0) continue;\n                for (auto &next : nextlist) {\n                    next.push_back(cur);\n                    ans.push_back(next);\n                }\n            }\n        }\n        s.erase(cur);\n        return ans;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-28"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.6MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u4e8e\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u9009\u62e9\u6216\u4e0d\u9009\u62e9\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int ans = 0, samecnt = 0;\n    vector<vector<int>> list;\n    vector<int> houses = vector<int>(20, 0);\n    int maximumRequests(int n, vector<vector<int>> &requests) {\n        for (auto &request : requests) {\n            if (request[0] == request[1]) {\n                samecnt++;\n                continue;\n            }\n            list.push_back(request);\n        }\n        dfs(0, 0);\n        return ans + samecnt;\n    }\n    void dfs(int idx, int cnt) {\n        if (idx == list.size()) {\n            for (auto &house : houses) {\n                if (house) return;\n            }\n            ans = max(ans, cnt);\n            return;\n        }\n        dfs(idx + 1, cnt);\n        houses[list[idx][0]]++;\n        houses[list[idx][1]]--;\n        dfs(idx + 1, cnt + 1);\n        houses[list[idx][0]]--;\n        houses[list[idx][1]]++;\n    }\n};\n"})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var i=t(30758);const s={},r=i.createContext(s);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);