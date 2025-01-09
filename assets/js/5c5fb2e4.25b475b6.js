"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[16481],{30580:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"leetcode/901-1000/\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4","title":"954.\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4","description":"\u94fe\u63a5\uff1a954.\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4","source":"@site/docs/leetcode/901-1000/954.\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4.md","sourceDirName":"leetcode/901-1000","slug":"/leetcode/901-1000/\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4","permalink":"/docs/leetcode/901-1000/\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":954,"frontMatter":{},"sidebar":"journal","previous":{"title":"953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178","permalink":"/docs/leetcode/901-1000/\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178"},"next":{"title":"958.\u4e8c\u53c9\u6811\u7684\u5b8c\u5168\u6027\u68c0\u9a8c","permalink":"/docs/leetcode/901-1000/\u4e8c\u53c9\u6811\u7684\u5b8c\u5168\u6027\u68c0\u9a8c"}}');var o=r(25105),c=r(8556);const s={},i="954.\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4",l={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"954\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4",children:"954.\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/array-of-doubled-pairs",children:"954.\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6392\u5e8f",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u957f\u5ea6\u4e3a\u5076\u6570\u7684\u6574\u6570\u6570\u7ec4 arr\uff0c\u53ea\u6709\u5bf9 arr \u8fdb\u884c\u91cd\u7ec4\u540e\u53ef\u4ee5\u6ee1\u8db3 \u201c\u5bf9\u4e8e\u6bcf\u4e2a 0 <= i < len(arr) / 2\uff0c\u90fd\u6709 arr[2 * i + 1] = 2 _ arr[2 _ i]\u201d \u65f6\uff0c\u8fd4\u56de true\uff1b\u5426\u5219\uff0c\u8fd4\u56de false\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-04-01"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a100ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a56.9MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u68c0\u67e5\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    bool canReorderDoubled(vector<int> &arr) {\n        deque<int> q1, q2;\n        unordered_map<int, int> m;\n        sort(arr.begin(), arr.end());\n        for (auto &num : arr) {\n            m[num]++;\n            if (num >= 0 && (q1.empty() || q1.back() != num))\n                q1.push_back(num);\n            else if (num < 0 && (q2.empty() || q2.front() != num))\n                q2.push_front(num);\n        }\n        return check(m, q1) && check(m, q2);\n    }\n    bool check(unordered_map<int, int> &m, deque<int> q) {\n        while (q.size()) {\n            int num = q.front();\n            q.pop_front();\n            if (m[num] == 0) continue;\n            if (m[num * 2] < m[num]) return false;\n            m[num * 2] -= m[num];\n        }\n        return true;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8556:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(58101);const o={},c=t.createContext(o);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);