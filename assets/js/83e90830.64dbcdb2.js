"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[63455],{27165:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"leetcode/1801-1900/\u7edf\u8ba1\u4e00\u4e2a\u6570\u7ec4\u4e2d\u597d\u5bf9\u5b50\u7684\u6570\u76ee","title":"1814.\u7edf\u8ba1\u4e00\u4e2a\u6570\u7ec4\u4e2d\u597d\u5bf9\u5b50\u7684\u6570\u76ee","description":"\u94fe\u63a5\uff1a1814.\u7edf\u8ba1\u4e00\u4e2a\u6570\u7ec4\u4e2d\u597d\u5bf9\u5b50\u7684\u6570\u76ee","source":"@site/docs/leetcode/1801-1900/1814.\u7edf\u8ba1\u4e00\u4e2a\u6570\u7ec4\u4e2d\u597d\u5bf9\u5b50\u7684\u6570\u76ee.md","sourceDirName":"leetcode/1801-1900","slug":"/leetcode/1801-1900/\u7edf\u8ba1\u4e00\u4e2a\u6570\u7ec4\u4e2d\u597d\u5bf9\u5b50\u7684\u6570\u76ee","permalink":"/docs/leetcode/1801-1900/\u7edf\u8ba1\u4e00\u4e2a\u6570\u7ec4\u4e2d\u597d\u5bf9\u5b50\u7684\u6570\u76ee","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1814,"frontMatter":{},"sidebar":"journal","previous":{"title":"1813.\u53e5\u5b50\u76f8\u4f3c\u6027III","permalink":"/docs/leetcode/1801-1900/\u53e5\u5b50\u76f8\u4f3c\u6027III"},"next":{"title":"1815.\u5f97\u5230\u65b0\u9c9c\u751c\u751c\u5708\u7684\u6700\u591a\u7ec4\u6570","permalink":"/docs/leetcode/1801-1900/\u5f97\u5230\u65b0\u9c9c\u751c\u751c\u5708\u7684\u6700\u591a\u7ec4\u6570"}}');var i=s(25105),r=s(8556);const l={},c="1814.\u7edf\u8ba1\u4e00\u4e2a\u6570\u7ec4\u4e2d\u597d\u5bf9\u5b50\u7684\u6570\u76ee",o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"1814\u7edf\u8ba1\u4e00\u4e2a\u6570\u7ec4\u4e2d\u597d\u5bf9\u5b50\u7684\u6570\u76ee",children:"1814.\u7edf\u8ba1\u4e00\u4e2a\u6570\u7ec4\u4e2d\u597d\u5bf9\u5b50\u7684\u6570\u76ee"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/count-nice-pairs-in-an-array",children:"1814.\u7edf\u8ba1\u4e00\u4e2a\u6570\u7ec4\u4e2d\u597d\u5bf9\u5b50\u7684\u6570\u76ee"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6570\u5b66\u3001\u8ba1\u6570",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u597d\u4e0b\u6807\u5bf9\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-17"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a55.5MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"const int mod = 1e9 + 7;\nclass Solution {\npublic:\n    int countNicePairs(vector<int>& nums) {\n        unordered_map<int, int> m;\n        int ans = 0;\n        for (auto &num : nums) ans = (ans + m[num - rev(num)]++) % mod;\n        return ans;\n    }\n    int rev(int num) {\n        int ans = 0;\n        for (; num; num /= 10) ans = ans * 10 + num % 10;\n        return ans;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-17"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a3.7MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:"use std::collections::HashMap;\nconst MOD: i32 = 1000000007;\nimpl Solution {\n    pub fn count_nice_pairs(nums: Vec<i32>) -> i32 {\n        let mut m = HashMap::<i32, i32>::new();\n        let mut ans = 0;\n        for num in nums {\n            let k = num - Solution::rev(num);\n            let v = if m.contains_key(&k) {\n                m.get_mut(&k).unwrap()\n            } else {\n                m.insert(k, 0);\n                m.get_mut(&k).unwrap()\n            };\n            ans = (ans + *v) % MOD;\n            *v += 1;\n        }\n        ans\n    }\n    fn rev(num: i32) -> i32 {\n        let mut num = num;\n        let mut ans = 0;\n        while num != 0 {\n            ans = ans * 10 + num % 10;\n            num /= 10;\n        }\n        ans\n    }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-17"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a260ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a23.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\ndef countNicePairs(self, nums: List[int]) -> int:\n    m = Counter()\n    ans = 0\n    for num in nums:\n        k = num - int(str(num)[::-1])\n        ans += m[k]\n        m[k] += 1\n    return int(ans % (1e9 + 7))\n"})})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},8556:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var t=s(58101);const i={},r=t.createContext(i);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);