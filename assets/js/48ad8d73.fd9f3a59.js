"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[89118],{57274:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"leetcode/1901-2000/\u597d\u5b50\u96c6\u7684\u6570\u76ee","title":"1994.\u597d\u5b50\u96c6\u7684\u6570\u76ee","description":"\u94fe\u63a5\uff1a1994.\u597d\u5b50\u96c6\u7684\u6570\u76ee","source":"@site/docs/leetcode/1901-2000/1994.\u597d\u5b50\u96c6\u7684\u6570\u76ee.md","sourceDirName":"leetcode/1901-2000","slug":"/leetcode/1901-2000/\u597d\u5b50\u96c6\u7684\u6570\u76ee","permalink":"/docs/leetcode/1901-2000/\u597d\u5b50\u96c6\u7684\u6570\u76ee","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1994,"frontMatter":{},"sidebar":"journal","previous":{"title":"1993.\u6811\u4e0a\u7684\u64cd\u4f5c","permalink":"/docs/leetcode/1901-2000/\u6811\u4e0a\u7684\u64cd\u4f5c"},"next":{"title":"1995.\u7edf\u8ba1\u7279\u6b8a\u56db\u5143\u7ec4","permalink":"/docs/leetcode/1901-2000/\u7edf\u8ba1\u7279\u6b8a\u56db\u5143\u7ec4"}}');var o=t(25105),r=t(8556);const i={},c="1994.\u597d\u5b50\u96c6\u7684\u6570\u76ee",l={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"1994\u597d\u5b50\u96c6\u7684\u6570\u76ee",children:"1994.\u597d\u5b50\u96c6\u7684\u6570\u76ee"})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(e.a,{href:"https://leetcode.cn/problems/the-number-of-good-subsets",children:"1994.\u597d\u5b50\u96c6\u7684\u6570\u76ee"}),(0,o.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,o.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u6570\u5b66\u3001\u52a8\u6001\u89c4\u5212\u3001\u72b6\u6001\u538b\u7f29",(0,o.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de nums \u4e2d\u4e0d\u540c\u7684 \u597d \u5b50\u96c6\u7684\u6570\u76ee\u5bf9 109 + 7 \u53d6\u4f59 \u7684\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-22"}),"\n",(0,o.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a220ms"}),"\n",(0,o.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a179.2MB"}),"\n",(0,o.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,o.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs \u904d\u5386\uff0c\u5bf9\u4e8e\u6240\u6709\u53ef\u91cd\u5408\u56e0\u5b50\u8fdb\u884c\u904d\u5386\uff0c\u53ef\u5728\u6bcf\u4e2a\u65b9\u6848\u4e2d\u589e\u52a0 1 \u7684\u53ef\u80fd\u6027\uff0c\u6bcf\u4e2a\u65b9\u6848\u90fd\u53ef\u4ee5\u9009\u62e9\u4efb\u610f\u4e00\u4e2a 1 \u6216\u8005\u4e0d\u9009\u62e9\uff0c\u603b\u53ef\u80fd\u6027\u4e3a pow(2, cnt1)\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cpp",children:"int mod = 1e9 + 7;\n#define MAX 40\nunordered_map<int, int> m = {\n    {23, 0b00000000010000000000000000000000},\n    {19, 0b00000000000001000000000000000000},\n    {17, 0b00000000000000010000000000000000},\n    {15, 0b00000000000000000000000000010100},\n    {14, 0b00000000000000000000000001000010},\n    {13, 0b00000000000000000001000000000000},\n    {30, 0b00000000000000000000000000010110},\n    {11, 0b00000000000000000000010000000000},\n    {29, 0b00010000000000000000000000000000},\n    {10, 0b00000000000000000000000000010010},\n    {26, 0b00000000000000000001000000000010},\n    {7, 0b00000000000000000000000001000000},\n    {6, 0b00000000000000000000000000000110},\n    {5, 0b00000000000000000000000000010000},\n    {22, 0b00000000000000000000010000000010},\n    {3, 0b00000000000000000000000000000100},\n    {21, 0b00000000000000000000000001000100},\n    {2, 0b00000000000000000000000000000010},\n    {1, 0b00000000000000000000000000000001},\n};\nint mod = 1e9 + 7;\n#define MAX 40\nclass Solution {\n   public:\n    int arr[MAX] = {0}, num1;\n    int numberOfGoodSubsets(vector<int> &nums) {\n        for (auto &num : nums) {\n            if (m.count(num)) arr[num]++;\n        }\n        num1 = qpow(2, arr[1]);\n        long long ans = 0;\n        for (int num = 2; num < MAX; num++) {\n            if (arr[num]) dfs(ans, num, m[num], arr[num]);\n        }\n        return ans % mod;\n    }\n    void dfs(long long &ans, int num, int bits, long long sum) {\n        ans = (ans + sum * num1) % mod;\n        for (int nnum = num + 1; nnum < MAX; nnum++) {\n            if (arr[nnum] == 0 || m[nnum] & bits) continue;\n            dfs(ans, nnum, bits | m[nnum], sum * arr[nnum] % mod);\n        }\n    }\n    int qpow(int a, int b) {\n        long long ans = 1, tmp = a;\n        while (b) {\n            if (b & 1) ans = (ans * tmp) % mod;\n            tmp = (tmp * tmp) % mod;\n            b >>= 1;\n        }\n        return ans;\n    }\n};\n"})})]})}function m(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},8556:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var s=t(58101);const o={},r=s.createContext(o);function i(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);