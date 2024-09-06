"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[90444],{5961:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=e(86070),s=e(25710);const l={},r="2049.\u7edf\u8ba1\u6700\u9ad8\u5206\u7684\u8282\u70b9\u6570\u76ee",c={id:"leetcode/2001-2100/\u7edf\u8ba1\u6700\u9ad8\u5206\u7684\u8282\u70b9\u6570\u76ee",title:"2049.\u7edf\u8ba1\u6700\u9ad8\u5206\u7684\u8282\u70b9\u6570\u76ee",description:"\u94fe\u63a5\uff1a2049.\u7edf\u8ba1\u6700\u9ad8\u5206\u7684\u8282\u70b9\u6570\u76ee",source:"@site/docs/leetcode/2001-2100/2049.\u7edf\u8ba1\u6700\u9ad8\u5206\u7684\u8282\u70b9\u6570\u76ee.md",sourceDirName:"leetcode/2001-2100",slug:"/leetcode/2001-2100/\u7edf\u8ba1\u6700\u9ad8\u5206\u7684\u8282\u70b9\u6570\u76ee",permalink:"/docs/leetcode/2001-2100/\u7edf\u8ba1\u6700\u9ad8\u5206\u7684\u8282\u70b9\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2049,frontMatter:{},sidebar:"journal",previous:{title:"2048.\u4e0b\u4e00\u4e2a\u66f4\u5927\u7684\u6570\u503c\u5e73\u8861\u6570",permalink:"/docs/leetcode/2001-2100/\u4e0b\u4e00\u4e2a\u66f4\u5927\u7684\u6570\u503c\u5e73\u8861\u6570"},next:{title:"2050.\u5e76\u884c\u8bfe\u7a0bIII",permalink:"/docs/leetcode/2001-2100/\u5e76\u884c\u8bfe\u7a0bIII"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"2049\u7edf\u8ba1\u6700\u9ad8\u5206\u7684\u8282\u70b9\u6570\u76ee",children:"2049.\u7edf\u8ba1\u6700\u9ad8\u5206\u7684\u8282\u70b9\u6570\u76ee"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(t.a,{href:"https://leetcode.cn/problems/count-nodes-with-the-highest-score",children:"2049.\u7edf\u8ba1\u6700\u9ad8\u5206\u7684\u8282\u70b9\u6570\u76ee"}),(0,i.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u4e8c\u53c9\u6811",(0,i.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u6709 \u6700\u9ad8\u5f97\u5206 \u8282\u70b9\u7684 \u6570\u76ee \u3002"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-11"}),"\n",(0,i.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a128ms"}),"\n",(0,i.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a79.6MB"}),"\n",(0,i.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7edf\u8ba1\u6bcf\u4e2a\u70b9\u7684\u7236\u8282\u70b9\uff0c\u5de6\u5b50\u6811\u4e2a\u6570\uff0c\u53f3\u5b50\u6811\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"class Solution {\n   public:\n    struct node {\n        int parent, left, right, lcnt, rcnt;\n    };\n    // ans\n    int ans = 0;\n    long long maxnum = -1;\n    void setAns(long long num) {\n        if (num >= maxnum) {\n            if (num > maxnum) ans = 0;\n            ans++;\n            maxnum = num;\n        }\n    }\n    int countHighestScoreNodes(vector<int>& parents) {\n        int n = parents.size();\n        vector<node> list(n);\n        // init\n        for (int i = 0; i < n; i++) {\n            list[i].parent = parents[i];\n            list[i].left = list[i].right = -1;\n            list[i].lcnt = list[i].rcnt = 0;\n        }\n        // load\n        for (int i = 1; i < n; i++) {\n            if (list[list[i].parent].left == -1)\n                list[list[i].parent].left = i;\n            else\n                list[list[i].parent].right = i;\n        }\n        // check\n        int sum = check(list, 0);\n        // res\n        for (int i = 1; i < n; i++) {\n            if (list[i].lcnt == 0 && list[i].rcnt == 0) {\n                setAns((long long)list[0].lcnt + list[0].rcnt);\n                continue;\n            }\n            setAns((long long)format(sum - 1 - list[i].lcnt - list[i].rcnt) *\n                   format(list[i].lcnt) * format(list[i].rcnt));\n        }\n        // res0\n        setAns((long long)format(list[0].lcnt) * format(list[0].rcnt));\n        return ans;\n    }\n    int check(vector<node>& list, int node) {\n        int ans = 0;\n        if (list[node].left != -1) {\n            list[node].lcnt = check(list, list[node].left);\n            ans += list[node].lcnt;\n        }\n        if (list[node].right != -1) {\n            list[node].rcnt = check(list, list[node].right);\n            ans += list[node].rcnt;\n        }\n        return ans + 1;\n    }\n    int format(int num) { return num == 0 ? 1 : num; }\n};\n"})})]})}function u(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,t,e)=>{e.d(t,{R:()=>r,x:()=>c});var i=e(30758);const s={},l=i.createContext(s);function r(n){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(l.Provider,{value:t},n.children)}}}]);