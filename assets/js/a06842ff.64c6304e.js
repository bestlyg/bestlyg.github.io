"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[20796],{72990:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"leetcode/901-1000/\u5728\u957f\u5ea62N\u7684\u6570\u7ec4\u4e2d\u627e\u51fa\u91cd\u590dN\u6b21\u7684\u5143\u7d20","title":"961.\u5728\u957f\u5ea62N\u7684\u6570\u7ec4\u4e2d\u627e\u51fa\u91cd\u590dN\u6b21\u7684\u5143\u7d20","description":"\u94fe\u63a5\uff1a961.\u5728\u957f\u5ea62N\u7684\u6570\u7ec4\u4e2d\u627e\u51fa\u91cd\u590dN\u6b21\u7684\u5143\u7d20","source":"@site/docs/leetcode/901-1000/961.\u5728\u957f\u5ea62N\u7684\u6570\u7ec4\u4e2d\u627e\u51fa\u91cd\u590dN\u6b21\u7684\u5143\u7d20.md","sourceDirName":"leetcode/901-1000","slug":"/leetcode/901-1000/\u5728\u957f\u5ea62N\u7684\u6570\u7ec4\u4e2d\u627e\u51fa\u91cd\u590dN\u6b21\u7684\u5143\u7d20","permalink":"/docs/leetcode/901-1000/\u5728\u957f\u5ea62N\u7684\u6570\u7ec4\u4e2d\u627e\u51fa\u91cd\u590dN\u6b21\u7684\u5143\u7d20","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":961,"frontMatter":{},"sidebar":"journal","previous":{"title":"959.\u7531\u659c\u6760\u5212\u5206\u533a\u57df","permalink":"/docs/leetcode/901-1000/\u7531\u659c\u6760\u5212\u5206\u533a\u57df"},"next":{"title":"965.\u5355\u503c\u4e8c\u53c9\u6811","permalink":"/docs/leetcode/901-1000/\u5355\u503c\u4e8c\u53c9\u6811"}}');var r=s(25105),c=s(8556);const i={},l="961.\u5728\u957f\u5ea62N\u7684\u6570\u7ec4\u4e2d\u627e\u51fa\u91cd\u590dN\u6b21\u7684\u5143\u7d20",o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"961\u5728\u957f\u5ea62n\u7684\u6570\u7ec4\u4e2d\u627e\u51fa\u91cd\u590dn\u6b21\u7684\u5143\u7d20",children:"961.\u5728\u957f\u5ea62N\u7684\u6570\u7ec4\u4e2d\u627e\u51fa\u91cd\u590dN\u6b21\u7684\u5143\u7d20"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/n-repeated-element-in-size-2n-array",children:"961.\u5728\u957f\u5ea62N\u7684\u6570\u7ec4\u4e2d\u627e\u51fa\u91cd\u590dN\u6b21\u7684\u5143\u7d20"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u627e\u51fa\u5e76\u8fd4\u56de\u91cd\u590d\u4e86 n \u6b21\u7684\u90a3\u4e2a\u5143\u7d20\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-25"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a24.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u67e5\u627e\u67d0\u4e2a\u5143\u7d20\u7684\u51fa\u73b0\u6b21\u6570\u662f\u5426\u5927\u4e8e 1\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int repeatedNTimes(vector<int>& nums) {\n        int m[10004] = {0};\n        for (auto& num : nums) {\n            if (++m[num] > 1) return num;\n        }\n        return 0;\n    }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-21"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a28ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a24.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u968f\u673a\u9009\u62e9,\u53ea\u6709\u76ee\u6807\u6570\u662f\u91cd\u590d\u7684\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int repeatedNTimes(vector<int> &nums) {\n        srand(time(0));\n        int n = nums.size();\n        while (1) {\n            int x = rand() % n, y = rand() % n;\n            if (x != y && nums[x] == nums[y]) return nums[x];\n        }\n        return -1;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8556:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(58101);const r={},c=t.createContext(r);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);