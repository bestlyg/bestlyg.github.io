"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[6645],{64728:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>u});const l=JSON.parse('{"id":"leetcode/1201-1300/\u627e\u51fa\u7ed9\u5b9a\u65b9\u7a0b\u7684\u6b63\u6574\u6570\u89e3","title":"1237.\u627e\u51fa\u7ed9\u5b9a\u65b9\u7a0b\u7684\u6b63\u6574\u6570\u89e3","description":"\u94fe\u63a5\uff1a1237.\u627e\u51fa\u7ed9\u5b9a\u65b9\u7a0b\u7684\u6b63\u6574\u6570\u89e3","source":"@site/docs/leetcode/1201-1300/1237.\u627e\u51fa\u7ed9\u5b9a\u65b9\u7a0b\u7684\u6b63\u6574\u6570\u89e3.md","sourceDirName":"leetcode/1201-1300","slug":"/leetcode/1201-1300/\u627e\u51fa\u7ed9\u5b9a\u65b9\u7a0b\u7684\u6b63\u6574\u6570\u89e3","permalink":"/docs/leetcode/1201-1300/\u627e\u51fa\u7ed9\u5b9a\u65b9\u7a0b\u7684\u6b63\u6574\u6570\u89e3","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1237,"frontMatter":{},"sidebar":"journal","previous":{"title":"1235.\u89c4\u5212\u517c\u804c\u5de5\u4f5c","permalink":"/docs/leetcode/1201-1300/\u89c4\u5212\u517c\u804c\u5de5\u4f5c"},"next":{"title":"1238.\u5faa\u73af\u7801\u6392\u5217","permalink":"/docs/leetcode/1201-1300/\u5faa\u73af\u7801\u6392\u5217"}}');var i=t(25105),s=t(8556);const r={},c="1237.\u627e\u51fa\u7ed9\u5b9a\u65b9\u7a0b\u7684\u6b63\u6574\u6570\u89e3",o={},u=[{value:"\u9898\u89e3 1 - rust",id:"\u9898\u89e3-1---rust",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"1237\u627e\u51fa\u7ed9\u5b9a\u65b9\u7a0b\u7684\u6b63\u6574\u6570\u89e3",children:"1237.\u627e\u51fa\u7ed9\u5b9a\u65b9\u7a0b\u7684\u6b63\u6574\u6570\u89e3"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/find-positive-integer-solution-for-a-given-equation",children:"1237.\u627e\u51fa\u7ed9\u5b9a\u65b9\u7a0b\u7684\u6b63\u6574\u6570\u89e3"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u53cc\u6307\u9488\u3001\u4e8c\u5206\u67e5\u627e\u3001\u4ea4\u4e92",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u51fd\u6570  f(x, y) \u548c\u4e00\u4e2a\u76ee\u6807\u7ed3\u679c z\uff0c\u51fd\u6570\u516c\u5f0f\u672a\u77e5\uff0c\u8bf7\u4f60\u8ba1\u7b97\u65b9\u7a0b f(x,y) == z \u6240\u6709\u53ef\u80fd\u7684\u6b63\u6574\u6570 \u6570\u5bf9 x \u548c y\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---rust",children:"\u9898\u89e3 1 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-18"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn find_solution(customfunction: &CustomFunction, z: i32) -> Vec<Vec<i32>> {\n        let mut res = vec![];\n        for x in 1..=1000 {\n            let (mut l, mut r) = (1, 1000);\n            while l <= r {\n                let m = (l + r) / 2;\n                let val = customfunction.f(x, m);\n                if val == z {\n                    res.push(vec![x, m]);\n                    break;\n                }\n                if val > z {\n                    r = m - 1;\n                } else {\n                    l = m + 1;\n                }\n            }\n        }\n        res\n    }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-18"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.3MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<vector<int>> findSolution(CustomFunction& customfunction, int z) {\n        vector<vector<int>> res;\n        for (int x = 1; x <= 1000; x++) {\n            int l = 1, r = 1000, m;\n            while (l <= r) {\n                m = (l + r) / 2;\n                int val = customfunction.f(x, m);\n                if (val == z) {\n                    vector<int> item{ x, m };\n                    res.push_back(item);\n                    break;\n                }\n                if (val > z) r = m - 1;\n                else l = m + 1;\n            }\n        }\n        return res;\n    }\n  };\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-18"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a148ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.9MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def findSolution(self, customfunction: 'CustomFunction', z: int) -> List[List[int]]:\n        res = []\n        for x in range(1, 1001):\n            l, r = 1, 1000\n            while l <= r:\n                m = (l + r)//2\n                val = customfunction.f(x, m)\n                if val == z:\n                    res.append([x, m])\n                    break\n                if val > z:\n                    r = m - 1\n                else:\n                    l = m + 1\n        return res\n"})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8556:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var l=t(58101);const i={},s=l.createContext(i);function r(n){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);