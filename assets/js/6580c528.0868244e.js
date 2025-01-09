"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[91958],{42189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/801-900/\u7ec6\u5206\u56fe\u4e2d\u7684\u53ef\u5230\u8fbe\u8282\u70b9","title":"882.\u7ec6\u5206\u56fe\u4e2d\u7684\u53ef\u5230\u8fbe\u8282\u70b9","description":"\u94fe\u63a5\uff1a882.\u7ec6\u5206\u56fe\u4e2d\u7684\u53ef\u5230\u8fbe\u8282\u70b9","source":"@site/docs/leetcode/801-900/882.\u7ec6\u5206\u56fe\u4e2d\u7684\u53ef\u5230\u8fbe\u8282\u70b9.md","sourceDirName":"leetcode/801-900","slug":"/leetcode/801-900/\u7ec6\u5206\u56fe\u4e2d\u7684\u53ef\u5230\u8fbe\u8282\u70b9","permalink":"/docs/leetcode/801-900/\u7ec6\u5206\u56fe\u4e2d\u7684\u53ef\u5230\u8fbe\u8282\u70b9","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":882,"frontMatter":{},"sidebar":"journal","previous":{"title":"881.\u6551\u751f\u8247","permalink":"/docs/leetcode/801-900/\u6551\u751f\u8247"},"next":{"title":"883.\u4e09\u7ef4\u5f62\u4f53\u6295\u5f71\u9762\u79ef","permalink":"/docs/leetcode/801-900/\u4e09\u7ef4\u5f62\u4f53\u6295\u5f71\u9762\u79ef"}}');var r=t(25105),i=t(8556);const c={},o="882.\u7ec6\u5206\u56fe\u4e2d\u7684\u53ef\u5230\u8fbe\u8282\u70b9",l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"882\u7ec6\u5206\u56fe\u4e2d\u7684\u53ef\u5230\u8fbe\u8282\u70b9",children:"882.\u7ec6\u5206\u56fe\u4e2d\u7684\u53ef\u5230\u8fbe\u8282\u70b9"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/reachable-nodes-in-subdivided-graph",children:"882.\u7ec6\u5206\u56fe\u4e2d\u7684\u53ef\u5230\u8fbe\u8282\u70b9"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u56fe\u3001\u6700\u77ed\u8def\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4e2d\u67a2\u6574\u6570 x \u3002\u5982\u679c\u4e0d\u5b58\u5728\u4e2d\u67a2\u6574\u6570\uff0c\u5219\u8fd4\u56de -1 \u3002\u9898\u76ee\u4fdd\u8bc1\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u8f93\u5165\uff0c\u81f3\u591a\u5b58\u5728\u4e00\u4e2a\u4e2d\u67a2\u6574\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-27"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u5bf9\u6bcf\u4e2a\u503c\u5c1d\u8bd5\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'# define X first\n# define Y second\n# define lb(x) ((x) & (-x))\n# define mem(a,b) memset(a,b,sizeof(a))\n# define debug freopen("r.txt","r",stdin)\n# define pi pair<int,int>\nusing namespace std;\ntypedef long long ll;\nclass Solution {\npublic:\n    int pivotInteger(int n) {\n        int sum = (1 + n) * n / 2;\n        int prev_sum = 0;\n        for (int i = 1; i <=n ; i++) {\n            int next_sum = sum - prev_sum;\n            prev_sum += i;\n            if (prev_sum == next_sum) return i;\n        }\n        return -1;\n    }\n};\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(58101);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);