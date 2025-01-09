"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[21158],{59888:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"leetcode/LCR/LCR036.\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c","title":"LCR036.\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c","description":"\u94fe\u63a5\uff1aLCR036.\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c","source":"@site/docs/leetcode/LCR/LCR036.\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c.md","sourceDirName":"leetcode/LCR","slug":"/leetcode/LCR/LCR036.\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c","permalink":"/docs/leetcode/LCR/LCR036.\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"LCR035.\u6700\u5c0f\u65f6\u95f4\u5dee","permalink":"/docs/leetcode/LCR/LCR035.\u6700\u5c0f\u65f6\u95f4\u5dee"},"next":{"title":"LCR041.\u6570\u636e\u6d41\u4e2d\u7684\u79fb\u52a8\u5e73\u5747\u503c","permalink":"/docs/leetcode/LCR/LCR041.\u6570\u636e\u6d41\u4e2d\u7684\u79fb\u52a8\u5e73\u5747\u503c"}}');var r=s(25105),i=s(8556);const c={},o="LCR036.\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c",l={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"lcr036\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c",children:"LCR036.\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/8Zf90G",children:"LCR036.\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6570\u7ec4\u3001\u6570\u5b66",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6839\u636e \u9006\u6ce2\u5170\u8868\u793a\u6cd5\uff0c\u6c42\u8be5\u540e\u7f00\u8868\u8fbe\u5f0f\u7684\u8ba1\u7b97\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-23"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.6MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6808\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'class Solution {\n   public:\n    int s2i(string str) {\n        int ans = 0, f = 1;\n        for (int i = 0; i < str.size(); i++) {\n            if (i == 0 && str[i] == \'-\') {\n                f = -1;\n                continue;\n            }\n            ans = ans * 10 + str[i] - \'0\';\n        }\n        return ans * f;\n    }\n    int evalRPN(vector<string>& tokens) {\n        stack<int> s;\n        for (auto& str : tokens) {\n            if (str == "+" || str == "-" || str == "*" || str == "/") {\n                int num1 = s.top();\n                s.pop();\n                int num2 = s.top();\n                s.pop();\n                int ans;\n                if (str == "+")\n                    ans = num2 + num1;\n                else if (str == "-")\n                    ans = num2 - num1;\n                else if (str == "*")\n                    ans = num2 * num1;\n                else\n                    ans = num2 / num1;\n                s.push(ans);\n            } else {\n                s.push(s2i(str));\n            }\n        }\n        return s.top();\n    }\n};\n'})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},8556:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>o});var t=s(58101);const r={},i=t.createContext(r);function c(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);