"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[2666],{69819:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"leetcode/1701-1800/\u5f97\u5230\u8fde\u7eedK\u4e2a1\u7684\u6700\u5c11\u76f8\u90bb\u4ea4\u6362\u6b21\u6570","title":"1703.\u5f97\u5230\u8fde\u7eedK\u4e2a1\u7684\u6700\u5c11\u76f8\u90bb\u4ea4\u6362\u6b21\u6570","description":"\u94fe\u63a5\uff1a1703.\u5f97\u5230\u8fde\u7eedK\u4e2a1\u7684\u6700\u5c11\u76f8\u90bb\u4ea4\u6362\u6b21\u6570","source":"@site/docs/leetcode/1701-1800/1703.\u5f97\u5230\u8fde\u7eedK\u4e2a1\u7684\u6700\u5c11\u76f8\u90bb\u4ea4\u6362\u6b21\u6570.md","sourceDirName":"leetcode/1701-1800","slug":"/leetcode/1701-1800/\u5f97\u5230\u8fde\u7eedK\u4e2a1\u7684\u6700\u5c11\u76f8\u90bb\u4ea4\u6362\u6b21\u6570","permalink":"/docs/leetcode/1701-1800/\u5f97\u5230\u8fde\u7eedK\u4e2a1\u7684\u6700\u5c11\u76f8\u90bb\u4ea4\u6362\u6b21\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1703,"frontMatter":{},"sidebar":"journal","previous":{"title":"1702.\u4fee\u6539\u540e\u7684\u6700\u5927\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32","permalink":"/docs/leetcode/1701-1800/\u4fee\u6539\u540e\u7684\u6700\u5927\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32"},"next":{"title":"1704.\u5224\u65ad\u5b57\u7b26\u4e32\u7684\u4e24\u534a\u662f\u5426\u76f8\u4f3c","permalink":"/docs/leetcode/1701-1800/\u5224\u65ad\u5b57\u7b26\u4e32\u7684\u4e24\u534a\u662f\u5426\u76f8\u4f3c"}}');var i=s(25105),c=s(8556);const o={},l="1703.\u5f97\u5230\u8fde\u7eedK\u4e2a1\u7684\u6700\u5c11\u76f8\u90bb\u4ea4\u6362\u6b21\u6570",r={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"1703\u5f97\u5230\u8fde\u7eedk\u4e2a1\u7684\u6700\u5c11\u76f8\u90bb\u4ea4\u6362\u6b21\u6570",children:"1703.\u5f97\u5230\u8fde\u7eedK\u4e2a1\u7684\u6700\u5c11\u76f8\u90bb\u4ea4\u6362\u6b21\u6570"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-adjacent-swaps-for-k-consecutive-ones",children:"1703.\u5f97\u5230\u8fde\u7eedK\u4e2a1\u7684\u6700\u5c11\u76f8\u90bb\u4ea4\u6362\u6b21\u6570"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u524d\u7f00\u548c\u3001\u6ed1\u52a8\u7a97\u53e3",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4f7f nums \u4e2d\u5305\u542b k \u4e2a \u8fde\u7eed 1 \u7684 \u6700\u5c11 \u4ea4\u6362\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-23"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a564ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a122.5MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","[\u53c2\u8003\u94fe\u63a5](https://leetcode.cn/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solution/tu-jie-zhuan-huan-cheng-zhong-wei-shu-ta-iz4v/)\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minMoves(vector<int>& nums, int k) {\n        int ans = 0x7fffffff;\n        vector<int> ilist, slist(1, 0);\n        for (int i = 0, cnt = 0; i < nums.size(); i++) {\n            if (nums[i] == 1) {\n                ilist.push_back(i - cnt++);\n                slist.push_back(slist.back() + ilist.back());\n            }\n        }\n        for (int i = 0; i + k <= ilist.size(); i++)\n            ans = min(ans, slist[i + k] + slist[i] - 2 * slist[i + k / 2] - k % 2 * ilist[i + k / 2]);\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8556:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(58101);const i={},c=t.createContext(i);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);