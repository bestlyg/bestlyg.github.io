"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[18332],{5071:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/1101-1200/\u6bb5\u5f0f\u56de\u6587","title":"1147.\u6bb5\u5f0f\u56de\u6587","description":"\u94fe\u63a5\uff1a1147.\u6bb5\u5f0f\u56de\u6587","source":"@site/docs/leetcode/1101-1200/1147.\u6bb5\u5f0f\u56de\u6587.md","sourceDirName":"leetcode/1101-1200","slug":"/leetcode/1101-1200/\u6bb5\u5f0f\u56de\u6587","permalink":"/docs/leetcode/1101-1200/\u6bb5\u5f0f\u56de\u6587","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1147,"frontMatter":{},"sidebar":"journal","previous":{"title":"1146.\u5feb\u7167\u6570\u7ec4","permalink":"/docs/leetcode/1101-1200/\u5feb\u7167\u6570\u7ec4"},"next":{"title":"1154.\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5929","permalink":"/docs/leetcode/1101-1200/\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5929"}}');var s=t(25105),r=t(8556);const l={},c="1147.\u6bb5\u5f0f\u56de\u6587",o={},d=[{value:"\u9898\u89e3 1 - rust",id:"\u9898\u89e3-1---rust",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - cpp",id:"\u9898\u89e3-4---cpp",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"1147\u6bb5\u5f0f\u56de\u6587",children:"1147.\u6bb5\u5f0f\u56de\u6587"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-chunked-palindrome-decomposition",children:"1147.\u6bb5\u5f0f\u56de\u6587"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212\u3001\u54c8\u5e0c\u51fd\u6570\u3001\u6eda\u52a8\u54c8\u5e0c",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 text\uff0c\u5728\u786e\u4fdd\u5b83\u6ee1\u8db3\u6bb5\u5f0f\u56de\u6587\u7684\u524d\u63d0\u4e0b\uff0c\u8bf7\u4f60\u8fd4\u56de \u6bb5 \u7684 \u6700\u5927\u6570\u91cf k\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---rust",children:"\u9898\u89e3 1 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-12"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn longest_decomposition(text: String) -> i32 {\n        let text = text.chars().collect::<Vec<char>>();\n        let n = text.len();\n        let mut res = 0;\n        let check = |mut i1: usize, mut i2: usize, mut size: usize| -> bool {\n            while size != 0 {\n                if text[i1] != text[i2] {\n                    return false;\n                }\n                i1 += 1;\n                i2 += 1;\n                size -= 1;\n            }\n            true\n        };\n        let mut i = 0;\n        while i <= n / 2 {\n            let mut f = false;\n            let mut cnt = 1;\n            while i + cnt <= n - i {\n                if check(i, n - i - cnt, cnt) {\n                    f = true;\n                    res += if i == n - i - cnt { 1 } else { 2 };\n                    i += cnt - 1;\n                    break;\n                }\n                cnt += 1;\n            }\n            if !f {\n                if (n - 2 * i) / 2 != 0 {\n                    res += 1;\n                }\n                break;\n            }\n            i += 1;\n        }\n        res\n    }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-12"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.5MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs \u6bcf\u6b21\u8bfb\u53d6\u4e24\u5934\u6700\u77ed\u76f8\u5339\u914d\u5b57\u7b26\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function longestDecomposition(text: string): number {\n  const n = text.length;\n  if (n <= 1) return n;\n  let lidx = 1;\n  let lstr = text[0];\n  let ridx = n - 2;\n  let rstr = text[n - 1];\n  while (ridx > lidx && lstr !== rstr) {\n    lstr += text[lidx++];\n    rstr = text[ridx--] + rstr;\n  }\n  if (ridx <= lidx && lstr !== rstr) return 1;\n  return longestDecomposition(text.substring(lidx, ridx + 1)) + 2;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-12"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.8MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def longestDecomposition(self, text: str) -> int:\n        n = len(text)\n        res = 0\n        def check(i1: int, i2: int, size: int) -> bool:\n            while size:\n                if text[i1] != text[i2]:\n                    return False\n                i1 += 1\n                i2 += 1\n                size -= 1\n            return True\n        i = 0\n        while i <= n // 2:\n            f = False\n            cnt = 1\n            while i + cnt <= n - i:\n                if check(i, n - i - cnt, cnt):\n                    f = True\n                    if i == n - i - cnt:\n                        res += 1\n                    else:\n                        res += 2\n                    i += cnt-1\n                    break\n                cnt += 1\n            if not f:\n                if (n - 2 * i) / 2 != 0:\n                    res += 1\n                break\n            i += 1\n        return res\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-4---cpp",children:"\u9898\u89e3 4 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-12"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int longestDecomposition(string text) {\n        int n = text.size(), res = 0;\n        auto check = [&](int i1, int i2, int size) -> bool {\n            while (size--) {\n                if (text[i1++] != text[i2++]) return false;\n            }\n            return true;\n        };\n        for (int i = 0; i <= n / 2; i++) {\n            int f = false;\n            for (int cnt = 1; i + cnt <= n - i; cnt++) {\n                if (check(i, n - i - cnt, cnt)) {\n                    f = true;\n                    if (i == n - i - cnt) res += 1; // \u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\n                    else res += 2; \n                    i += cnt - 1;\n                    break;\n                }\n            }\n            if (!f) {\n                if ((n - 2 * i) / 2 != 0) res += 1; // \u53ea\u5269\u7a7a\u5b57\u7b26\u4e32\n                break;\n            }\n        }\n        return res;\n    }\n};\n"})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},8556:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var i=t(58101);const s={},r=i.createContext(s);function l(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);