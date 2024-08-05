"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[45902],{83840:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=t(86070),s=t(25710);const l={},c="788.\u65cb\u8f6c\u6570\u5b57",r={id:"leetcode/701-800/\u65cb\u8f6c\u6570\u5b57",title:"788.\u65cb\u8f6c\u6570\u5b57",description:"\u94fe\u63a5\uff1a788.\u65cb\u8f6c\u6570\u5b57",source:"@site/docs/leetcode/701-800/788.\u65cb\u8f6c\u6570\u5b57.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u65cb\u8f6c\u6570\u5b57",permalink:"/docs/leetcode/701-800/\u65cb\u8f6c\u6570\u5b57",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:788,frontMatter:{},sidebar:"journal",previous:{title:"787.K\u7ad9\u4e2d\u8f6c\u5185\u6700\u4fbf\u5b9c\u7684\u822a\u73ed",permalink:"/docs/leetcode/701-800/K\u7ad9\u4e2d\u8f6c\u5185\u6700\u4fbf\u5b9c\u7684\u822a\u73ed"},next:{title:"789.\u9003\u8131\u963b\u788d\u8005",permalink:"/docs/leetcode/701-800/\u9003\u8131\u963b\u788d\u8005"}},a={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"788\u65cb\u8f6c\u6570\u5b57",children:"788.\u65cb\u8f6c\u6570\u5b57"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/rotated-digits",children:"788.\u65cb\u8f6c\u6570\u5b57"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u52a8\u6001\u89c4\u5212",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u73b0\u5728\u6211\u4eec\u6709\u4e00\u4e2a\u6b63\u6574\u6570 N, \u8ba1\u7b97\u4ece 1 \u5230 N \u4e2d\u6709\u591a\u5c11\u4e2a\u6570 X \u662f\u597d\u6570\uff1f\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-25"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.8MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\uff0c\u6bcf\u6b21\u4ece\u524d\u9762\u72b6\u6001\u63a8\u8fdb\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // 0 -> \u65e0\u6cd5\u65cb\u8f6c\n    // 1 -> \u65cb\u8f6c\u540e\u662f\u672c\u8eab\n    // 2 -> \u65cb\u8f6c\u540e\u4e0d\u662f\u672c\u8eab\n    int rotatedDigits(int n) {\n        vector<int> list(n + 1, 0);\n        int ans = 0;\n        for (int i = 1; i <= n; i++) {\n            if (i < 10) {\n                switch (i) {\n                    case 0:\n                    case 1:\n                    case 8: list[i] = 1; break;\n                    case 2:\n                    case 5:\n                    case 6:\n                    case 9: list[i] = 2; break;\n                    default: list[i] = 0; break;\n                }\n            } else {\n                int num1 = i / 10, num2 = i % 10;\n                if (list[num1] == 0 || num2 == 3 || num2 == 4 || num2 == 7) list[i] = 0;\n                else if (list[num1] == 1) list[i] = num2 == 0 || num2 == 1 || num2 == 8 ? 1 : 2;\n                else list[i] = 2;\n            }\n            if (list[i] == 2) ans++;\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-25"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.8MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\uff0c\u6bcf\u6b21\u6784\u9020\u76f8\u540c\u4f4d\u6570\u7684\u6570\u5b57\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    int rotatedDigits(int n) {\n        int len = get_len(n), list[3] = {0}, ans = 0;\n        dfs(len, n, list, 0, 0, ans);\n        return ans;\n    }\n    void dfs(int len, int n, int (&list)[3], int num, int cnt, int &ans) {\n        if (num > n) return;\n        if (cnt == len) {\n            if (list[0] == 0 && list[2] > 0) ans++;\n            // cout << "len = " << len\n            //      << ", list = [" << list[0] << ", " << list[1] << ", " << list[2]\n            //      << "], num = " << num << ", cnt = " << cnt << ", ans = " << ans << endl;\n            return;\n        }\n        for (int i = 0; i < 10; i++) {\n            list[get_tag(i)]++;\n            dfs(len, n, list, num * 10 + i, cnt + 1, ans);\n            list[get_tag(i)]--;\n        }\n    }\n    int get_len(int n) {\n        int ans = 0;\n        while (n) n /= 10, ans++;\n        return ans;\n    }\n    int get_tag(int n) {\n        switch (n) {\n            case 0:\n            case 1:\n            case 8: return 1;\n            case 2:\n            case 5:\n            case 6:\n            case 9: return 2;\n            default: return 0;\n        }\n    }\n};\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-25"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.7MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\uff0c\u4f18\u5316\u975e\u5012\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int rotatedDigits(int n) {\n        int len = get_len(n), list[2] = {0}, ans = 0;\n        dfs(len, n, list, 0, 0, ans);\n        return ans;\n    }\n    void dfs(int len, int n, int (&list)[2], int num, int cnt, int &ans) {\n        if (num > n) return;\n        if (cnt == len) {\n            if (list[1] > 0) ans++;\n            return;\n        }\n        for (int i = 0; i < 10; i++) {\n            int tag = get_tag(i);\n            if (tag == -1) continue;\n            list[tag]++;\n            dfs(len, n, list, num * 10 + i, cnt + 1, ans);\n            list[tag]--;\n        }\n    }\n    int get_len(int n) {\n        int ans = 0;\n        while (n) n /= 10, ans++;\n        return ans;\n    }\n    int get_tag(int n) {\n        switch (n) {\n            case 0:\n            case 1:\n            case 8: return 0;\n            case 2:\n            case 5:\n            case 6:\n            case 9: return 1;\n            default: return -1;\n        }\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var i=t(30758);const s={},l=i.createContext(s);function c(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);