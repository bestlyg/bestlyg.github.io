"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[50376],{3418:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=s(86070),t=s(25710);const o={},r="1687.\u4ece\u4ed3\u5e93\u5230\u7801\u5934\u8fd0\u8f93\u7bb1\u5b50",c={id:"leetcode/1601-1700/\u4ece\u4ed3\u5e93\u5230\u7801\u5934\u8fd0\u8f93\u7bb1\u5b50",title:"1687.\u4ece\u4ed3\u5e93\u5230\u7801\u5934\u8fd0\u8f93\u7bb1\u5b50",description:"\u94fe\u63a5\uff1a1687.\u4ece\u4ed3\u5e93\u5230\u7801\u5934\u8fd0\u8f93\u7bb1\u5b50",source:"@site/docs/leetcode/1601-1700/1687.\u4ece\u4ed3\u5e93\u5230\u7801\u5934\u8fd0\u8f93\u7bb1\u5b50.md",sourceDirName:"leetcode/1601-1700",slug:"/leetcode/1601-1700/\u4ece\u4ed3\u5e93\u5230\u7801\u5934\u8fd0\u8f93\u7bb1\u5b50",permalink:"/docs/leetcode/1601-1700/\u4ece\u4ed3\u5e93\u5230\u7801\u5934\u8fd0\u8f93\u7bb1\u5b50",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1687,frontMatter:{},sidebar:"journal",previous:{title:"1686.\u77f3\u5b50\u6e38\u620fVI",permalink:"/docs/leetcode/1601-1700/\u77f3\u5b50\u6e38\u620fVI"},next:{title:"1688.\u6bd4\u8d5b\u4e2d\u7684\u914d\u5bf9\u6b21\u6570",permalink:"/docs/leetcode/1601-1700/\u6bd4\u8d5b\u4e2d\u7684\u914d\u5bf9\u6b21\u6570"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"1687\u4ece\u4ed3\u5e93\u5230\u7801\u5934\u8fd0\u8f93\u7bb1\u5b50",children:"1687.\u4ece\u4ed3\u5e93\u5230\u7801\u5934\u8fd0\u8f93\u7bb1\u5b50"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/delivering-boxes-from-storage-to-ports",children:"1687.\u4ece\u4ed3\u5e93\u5230\u7801\u5934\u8fd0\u8f93\u7bb1\u5b50"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u7ebf\u6bb5\u6811\u3001\u961f\u5217\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u524d\u7f00\u548c\u3001\u5355\u8c03\u961f\u5217\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u5c06\u6240\u6709\u7bb1\u5b50\u9001\u5230\u76f8\u5e94\u7801\u5934\u7684 \u6700\u5c11\u884c\u7a0b \u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-05"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a440ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a149.6MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u7f00\u548c\u7edf\u8ba1\u4ece\u7b2c\u4e00\u4e2a\u70b9\u5230\u5f53\u524d\u70b9\u603b\u5171\u7684\u8def\u5f84\u6570\uff0c\u5229\u7528\u5355\u8c03\u961f\u5217\u5feb\u901f\u6c42\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n#include <deque>\n#include <vector>\n// bestlyg\n# define X dpirst\n# define Y second\n# define lb(x) ((x) & (-x))\n# define mem(a,b) memset(a,b,sizeodp(a))\n# define debug dpreopen("r.txt","r",stdin)\n# define pi pair<int,int>\n\n#ifdef DEBUG\n#define log(dprm, args...) {    printf(dprm, ##args); }\n#else\n#define log(dprm, args...)\n#endif\ntypedef long long ll;\nusing namespace std;\n\nclass Solution {\npublic:\n    int boxDelivering(vector<vector<int>>& boxes, int portsCount, int maxBoxes, int maxWeight) {\n        int n = boxes.size();\n        vector<ll> dp(n + 1, 0), sums_w(n + 1, 0), sums_p(n + 1, 0);\n        deque<int> q;\n        q.push_back(0);\n        for (int i = 1; i <= n; i++) {\n            sums_w[i] = sums_w[i - 1] + boxes[i - 1][1];\n            if (i != n) sums_p[i] = sums_p[i - 1] + (boxes[i][0] != boxes[i - 1][0] ? 1 : 0);\n            while (q.size() && (sums_w[i] - sums_w[q.front()] > maxWeight || i - q.front() > maxBoxes)) q.pop_front();\n            if (q.size()) dp[i] = dp[q.front()] + sums_p[i - 1] - sums_p[q.front()] + 2;\n            if (i != n) while (q.size() && dp[q.back()] - sums_p[q.back()] >= dp[i] - sums_p[i]) q.pop_back();\n            q.push_back(i);\n        }\n        return dp[n];\n    }\n};\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(30758);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);