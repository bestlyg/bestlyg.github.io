"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[72851],{63198:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var i=s(86070),t=s(25710);const r={},o="241.\u4e3a\u8fd0\u7b97\u8868\u8fbe\u5f0f\u8bbe\u8ba1\u4f18\u5148\u7ea7",c={id:"leetcode/201-300/\u4e3a\u8fd0\u7b97\u8868\u8fbe\u5f0f\u8bbe\u8ba1\u4f18\u5148\u7ea7",title:"241.\u4e3a\u8fd0\u7b97\u8868\u8fbe\u5f0f\u8bbe\u8ba1\u4f18\u5148\u7ea7",description:"\u94fe\u63a5\uff1a241.\u4e3a\u8fd0\u7b97\u8868\u8fbe\u5f0f\u8bbe\u8ba1\u4f18\u5148\u7ea7",source:"@site/docs/leetcode/201-300/241.\u4e3a\u8fd0\u7b97\u8868\u8fbe\u5f0f\u8bbe\u8ba1\u4f18\u5148\u7ea7.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u4e3a\u8fd0\u7b97\u8868\u8fbe\u5f0f\u8bbe\u8ba1\u4f18\u5148\u7ea7",permalink:"/web/site/docs/leetcode/201-300/\u4e3a\u8fd0\u7b97\u8868\u8fbe\u5f0f\u8bbe\u8ba1\u4f18\u5148\u7ea7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:241,frontMatter:{},sidebar:"journal",previous:{title:"240.\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635II",permalink:"/web/site/docs/leetcode/201-300/\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635II"},next:{title:"242.\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd",permalink:"/web/site/docs/leetcode/201-300/\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd"}},p={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2}];function l(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"241\u4e3a\u8fd0\u7b97\u8868\u8fbe\u5f0f\u8bbe\u8ba1\u4f18\u5148\u7ea7",children:"241.\u4e3a\u8fd0\u7b97\u8868\u8fbe\u5f0f\u8bbe\u8ba1\u4f18\u5148\u7ea7"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/different-ways-to-add-parentheses",children:"241.\u4e3a\u8fd0\u7b97\u8868\u8fbe\u5f0f\u8bbe\u8ba1\u4f18\u5148\u7ea7"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u9012\u5f52\u3001\u8bb0\u5fc6\u5316\u641c\u7d22\u3001\u6570\u5b66\u3001\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u542b\u6709\u6570\u5b57\u548c\u8fd0\u7b97\u7b26\u7684\u5b57\u7b26\u4e32\uff0c\u4e3a\u8868\u8fbe\u5f0f\u6dfb\u52a0\u62ec\u53f7\uff0c\u6539\u53d8\u5176\u8fd0\u7b97\u4f18\u5148\u7ea7\u4ee5\u6c42\u51fa\u4e0d\u540c\u7684\u7ed3\u679c\u3002\u4f60\u9700\u8981\u7ed9\u51fa\u6240\u6709\u53ef\u80fd\u7684\u7ec4\u5408\u7684\u7ed3\u679c\u3002\u6709\u6548\u7684\u8fd0\u7b97\u7b26\u53f7\u5305\u542b +,\xa0-\xa0 \u4ee5\u53ca \xa0*\xa0\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-25"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.3MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u4e8e\u6bcf\u4e2a\u64cd\u4f5c\u7b26\u5f53\u4f5c\u6839\u8282\u70b9\u8ba1\u7b97\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function diffWaysToCompute(expression: string): number[] {\n  return dfs(expression);\n  function split(expression: string, idx: number) {\n    return [expression.substring(0, idx), expression.substring(idx + 1)];\n  }\n  function comp(num1: number, num2: number, op: string): number {\n    switch (op) {\n      case '+':\n        return num1 + num2;\n      case '-':\n        return num1 - num2;\n      case '*':\n        return num1 * num2;\n      default:\n        return num1 + num2;\n    }\n  }\n  function dfs(expression: string): number[] {\n    const n = expression.length;\n    const opIdxs: number[] = [];\n    for (let i = 0; i < n; i++) {\n      const ch = expression[i];\n      if (ch === '+' || ch === '-' || ch === '*') opIdxs.push(i);\n    }\n    if (opIdxs.length === 0) return [+expression];\n    const ans: number[] = [];\n    for (const idx of opIdxs) {\n      const [left, right] = split(expression, idx);\n      for (const num1 of dfs(left)) {\n        for (const num2 of dfs(right)) {\n          ans.push(comp(num1, num2, expression[idx]));\n        }\n      }\n    }\n    return ans;\n  }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-07-01"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a12.4MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5206\u6cbb\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    unordered_set<char> opset;\n    Solution() {\n        opset.insert('+');\n        opset.insert('-');\n        opset.insert('*');\n    }\n    vector<int> diffWaysToCompute(string expression) {\n        vector<int> ans, oplist;\n        int n = expression.size();\n        for (int i = 0; i < n; i++) {\n            if (opset.count(expression[i])) oplist.push_back(i);\n        }\n        if (oplist.size() == 0)\n            ans.push_back(toNum(expression));\n        else\n            dfs(expression, oplist, ans);\n        return ans;\n    }\n    int toNum(string &expression) {\n        int num = 0, n = expression.size(), i = 0;\n        while (i < n && !opset.count(expression[i]))\n            num = num * 10 + expression[i++] - '0';\n        return num;\n    }\n    void dfs(string &expression, vector<int> &oplist, vector<int> &ans) {\n        for (auto &idx : oplist) {\n            vector<int> llist = diffWaysToCompute(expression.substr(0, idx));\n            vector<int> rlist = diffWaysToCompute(\n                expression.substr(idx + 1, expression.size() - idx));\n            for (auto &num1 : llist) {\n                for (auto &num2 : rlist) {\n                    switch (expression[idx]) {\n                        case '+':\n                            ans.push_back(num1 + num2);\n                            break;\n                        case '-':\n                            ans.push_back(num1 - num2);\n                            break;\n                        case '*':\n                            ans.push_back(num1 * num2);\n                            break;\n                    }\n                }\n            }\n        }\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-07-01"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a12.4MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5206\u6cbb\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    unordered_set<char> opset;\n    Solution() {\n        opset.insert('+');\n        opset.insert('-');\n        opset.insert('*');\n    }\n    vector<int> diffWaysToCompute(string expression) {\n        vector<int> ans, oplist;\n        int n = expression.size();\n        for (int i = 0; i < n; i++) {\n            if (opset.count(expression[i])) oplist.push_back(i);\n        }\n        if (oplist.size() == 0)\n            ans.push_back(toNum(expression));\n        else\n            dfs(expression, oplist, ans);\n        return ans;\n    }\n    int toNum(string &expression) {\n        int num = 0, n = expression.size(), i = 0;\n        while (i < n && !opset.count(expression[i]))\n            num = num * 10 + expression[i++] - '0';\n        return num;\n    }\n    void dfs(string &expression, vector<int> &oplist, vector<int> &ans) {\n        for (auto &idx : oplist) {\n            vector<int> llist = diffWaysToCompute(expression.substr(0, idx));\n            vector<int> rlist = diffWaysToCompute(\n                expression.substr(idx + 1, expression.size() - idx));\n            for (auto &num1 : llist) {\n                for (auto &num2 : rlist) {\n                    switch (expression[idx]) {\n                        case '+':\n                            ans.push_back(num1 + num2);\n                            break;\n                        case '-':\n                            ans.push_back(num1 - num2);\n                            break;\n                        case '*':\n                            ans.push_back(num1 * num2);\n                            break;\n                    }\n                }\n            }\n        }\n    }\n};\n"})})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>c});var i=s(30758);const t={},r=i.createContext(t);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);