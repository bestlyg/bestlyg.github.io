"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[24977],{52569:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=t(86070),i=t(25710);const r={},c="587.\u5b89\u88c5\u6805\u680f",o={id:"leetcode/501-600/\u5b89\u88c5\u6805\u680f",title:"587.\u5b89\u88c5\u6805\u680f",description:"\u94fe\u63a5\uff1a587.\u5b89\u88c5\u6805\u680f",source:"@site/docs/leetcode/501-600/587.\u5b89\u88c5\u6805\u680f.md",sourceDirName:"leetcode/501-600",slug:"/leetcode/501-600/\u5b89\u88c5\u6805\u680f",permalink:"/web/site/docs/leetcode/501-600/\u5b89\u88c5\u6805\u680f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:587,frontMatter:{},sidebar:"journal",previous:{title:"583.\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u5220\u9664\u64cd\u4f5c",permalink:"/web/site/docs/leetcode/501-600/\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u5220\u9664\u64cd\u4f5c"},next:{title:"589.N\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386",permalink:"/web/site/docs/leetcode/501-600/N\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386"}},l={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"587\u5b89\u88c5\u6805\u680f",children:"587.\u5b89\u88c5\u6805\u680f"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/erect-the-fence",children:"587.\u5b89\u88c5\u6805\u680f"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u51e0\u4f55\u3001\u6570\u7ec4\u3001\u6570\u5b66",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5728\u4e00\u4e2a\u4e8c\u7ef4\u7684\u82b1\u56ed\u4e2d\uff0c\u6709\u4e00\u4e9b\u7528 (x, y) \u5750\u6807\u8868\u793a\u7684\u6811\u3002\u7531\u4e8e\u5b89\u88c5\u8d39\u7528\u5341\u5206\u6602\u8d35\uff0c\u4f60\u7684\u4efb\u52a1\u662f\u5148\u7528\u6700\u77ed\u7684\u7ef3\u5b50\u56f4\u8d77\u6240\u6709\u7684\u6811\u3002\u53ea\u6709\u5f53\u6240\u6709\u7684\u6811\u90fd\u88ab\u7ef3\u5b50\u5305\u56f4\u65f6\uff0c\u82b1\u56ed\u624d\u80fd\u56f4\u597d\u6805\u680f\u3002\u4f60\u9700\u8981\u627e\u5230\u6b63\u597d\u4f4d\u4e8e\u6805\u680f\u8fb9\u754c\u4e0a\u7684\u6811\u7684\u5750\u6807\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-04-23"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","andrew \u51f8\u5305\u7b97\u6cd5\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int cross(vector<int> &a, vector<int> &b, vector<int> &c) {\n        int x1 = a[0] - b[0], y1 = a[1] - b[1];\n        int x2 = c[0] - b[0], y2 = c[1] - b[1];\n        return x1 * y2 - x2 * y1;\n    }\n    vector<vector<int>> outerTrees(vector<vector<int>> &trees) {\n        int n = trees.size();\n        if (n <= 3) return trees;\n        sort(trees.begin(), trees.end(),\n             [&](vector<int> &a, vector<int> &b) -> bool {\n                 if (a[0] == b[0]) return a[1] < b[1];\n                 return a[0] < b[0];\n             });\n        vector<int> list, used(n, 0);\n        for (int i = 0; i < n; i++) {\n            while (list.size() > 1 &&\n                   cross(trees[list[list.size() - 2]],\n                         trees[list[list.size() - 1]], trees[i]) < 0) {\n                used[list.back()] = 0;\n                list.pop_back();\n            }\n            list.push_back(i);\n            used[i] = 1;\n        }\n        int size = list.size();\n        used[0] = 0;\n        for (int i = n - 2; i >= 0; i--) {\n            if (used[i]) continue;\n            while (list.size() > size &&\n                   cross(trees[list[list.size() - 2]],\n                         trees[list[list.size() - 1]], trees[i]) < 0) {\n                list.pop_back();\n            }\n            list.push_back(i);\n        }\n        list.pop_back();\n        vector<vector<int>> ans;\n        for (auto &idx : list) ans.emplace_back(trees[idx]);\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(30758);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);