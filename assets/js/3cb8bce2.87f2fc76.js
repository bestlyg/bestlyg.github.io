"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[86027],{36198:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var s=e(86070),r=e(25710);const c={},i="150.\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c",a={id:"leetcode/101-200/\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c",title:"150.\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c",description:"\u94fe\u63a5\uff1a150.\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c",source:"@site/docs/leetcode/101-200/150.\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c",permalink:"/docs/leetcode/101-200/\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:150,frontMatter:{},sidebar:"journal",previous:{title:"149.\u76f4\u7ebf\u4e0a\u6700\u591a\u7684\u70b9\u6570",permalink:"/docs/leetcode/101-200/\u76f4\u7ebf\u4e0a\u6700\u591a\u7684\u70b9\u6570"},next:{title:"151.\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd",permalink:"/docs/leetcode/101-200/\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd"}},o={},l=[{value:"\u9898\u89e3 1 - java",id:"\u9898\u89e3-1---java",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2}];function p(n){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"150\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c",children:"150.\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(t.a,{href:"https://leetcode.cn/problems/evaluate-reverse-polish-notation",children:"150.\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u6c42\u503c"}),(0,s.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6570\u7ec4\u3001\u6570\u5b66",(0,s.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6839\u636e\u9006\u6ce2\u5170\u8868\u793a\u6cd5\uff0c\u6c42\u8868\u8fbe\u5f0f\u7684\u503c\u3002\u6709\u6548\u7684\u8fd0\u7b97\u7b26\u5305\u62ec +, -, *, / \u3002\u6bcf\u4e2a\u8fd0\u7b97\u5bf9\u8c61\u53ef\u4ee5\u662f\u6574\u6570\uff0c\u4e5f\u53ef\u4ee5\u662f\u53e6\u4e00\u4e2a\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u89e3-1---java",children:"\u9898\u89e3 1 - java"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-13"}),"\n",(0,s.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,s.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.8MB"}),"\n",(0,s.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,s.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f7f\u7528\u6808\uff0c\u6570\u5b57\u538b\u6808\uff0c\u7b26\u53f7\u51fa\u6808\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'class Solution {\n    public int evalRPN(String[] tokens) {\n        Stack<String> stack = new Stack<String>();\n\t\tint a, b;\n\t\tfor (String s : tokens) {\n\t\t\tswitch (s) {\n\t\t\tcase "+":\n\t\t\t\ta = Integer.parseInt(stack.pop());\n\t\t\t\tb = Integer.parseInt(stack.pop());\n\t\t\t\tstack.push((a + b) + "");\n\t\t\t\tbreak;\n\t\t\tcase "-":\n\t\t\t\ta = Integer.parseInt(stack.pop());\n\t\t\t\tb = Integer.parseInt(stack.pop());\n\t\t\t\tstack.push((b - a) + "");\n\t\t\t\tbreak;\n\t\t\tcase "*":\n\t\t\t\ta = Integer.parseInt(stack.pop());\n\t\t\t\tb = Integer.parseInt(stack.pop());\n\t\t\t\tstack.push((a * b) + "");\n\t\t\t\tbreak;\n\t\t\tcase "/":\n\t\t\t\ta = Integer.parseInt(stack.pop());\n\t\t\t\tb = Integer.parseInt(stack.pop());\n\t\t\t\tstack.push((b / a) + "");\n\t\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\tstack.push(s);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t\treturn Integer.parseInt(stack.pop());\n    }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-20"}),"\n",(0,s.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a724ms"}),"\n",(0,s.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a48.2MB"}),"\n",(0,s.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6808\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"function evalRPN(tokens: string[]): number {\n  const opMap: Record<string, (num1: number, num2: number) => number> = {\n    '+': (num1, num2) => num1 + num2,\n    '-': (num1, num2) => num1 - num2,\n    '*': (num1, num2) => num1 * num2,\n    '/': (num1, num2) => ~~(num1 / num2),\n  };\n  const stack: number[] = [];\n  for (const token of tokens) {\n    console.log(token, stack);\n    if (token === '+' || token === '-' || token === '*' || token === '/') {\n      const num2 = stack.pop()!;\n      const num1 = stack.pop()!;\n      stack.push(opMap[token](num1, num2));\n    } else {\n      stack.push(Number(token));\n    }\n  }\n  return stack[0];\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-23"}),"\n",(0,s.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,s.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.6MB"}),"\n",(0,s.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6808\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'class Solution {\n   public:\n    int s2i(string str) {\n        int ans = 0, f = 1;\n        for (int i = 0; i < str.size(); i++) {\n            if (i == 0 && str[i] == \'-\') {\n                f = -1;\n                continue;\n            }\n            ans = ans * 10 + str[i] - \'0\';\n        }\n        return ans * f;\n    }\n    int evalRPN(vector<string>& tokens) {\n        stack<int> s;\n        for (auto& str : tokens) {\n            if (str == "+" || str == "-" || str == "*" || str == "/") {\n                int num1 = s.top();\n                s.pop();\n                int num2 = s.top();\n                s.pop();\n                int ans;\n                if (str == "+")\n                    ans = num2 + num1;\n                else if (str == "-")\n                    ans = num2 - num1;\n                else if (str == "*")\n                    ans = num2 * num1;\n                else\n                    ans = num2 / num1;\n                s.push(ans);\n            } else {\n                s.push(s2i(str));\n            }\n        }\n        return s.top();\n    }\n};\n'})})]})}function u(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},25710:(n,t,e)=>{e.d(t,{R:()=>i,x:()=>a});var s=e(30758);const r={},c=s.createContext(r);function i(n){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(c.Provider,{value:t},n.children)}}}]);