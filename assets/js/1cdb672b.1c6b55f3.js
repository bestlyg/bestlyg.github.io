"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[59476],{24804:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(86070),i=t(25710);const r={},o="464.\u6211\u80fd\u8d62\u5417",l={id:"leetcode/401-500/\u6211\u80fd\u8d62\u5417",title:"464.\u6211\u80fd\u8d62\u5417",description:"\u94fe\u63a5\uff1a464.\u6211\u80fd\u8d62\u5417",source:"@site/docs/leetcode/401-500/464.\u6211\u80fd\u8d62\u5417.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u6211\u80fd\u8d62\u5417",permalink:"/docs/leetcode/401-500/\u6211\u80fd\u8d62\u5417",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:464,frontMatter:{},sidebar:"journal",previous:{title:"463.\u5c9b\u5c7f\u7684\u5468\u957f",permalink:"/docs/leetcode/401-500/\u5c9b\u5c7f\u7684\u5468\u957f"},next:{title:"466.\u7edf\u8ba1\u91cd\u590d\u4e2a\u6570",permalink:"/docs/leetcode/401-500/\u7edf\u8ba1\u91cd\u590d\u4e2a\u6570"}},a={},c=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"464\u6211\u80fd\u8d62\u5417",children:"464.\u6211\u80fd\u8d62\u5417"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/can-i-win",children:"464.\u6211\u80fd\u8d62\u5417"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u8bb0\u5fc6\u5316\u641c\u7d22\u3001\u6570\u5b66\u3001\u52a8\u6001\u89c4\u5212\u3001\u72b6\u6001\u538b\u7f29\u3001\u535a\u5f08",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5224\u65ad\u5148\u51fa\u624b\u7684\u73a9\u5bb6\u662f\u5426\u80fd\u7a33\u8d62\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-29"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1008ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a161.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8bb0\u5fc6\u5316 dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var canIWin = function (maxChoosableInteger, desiredTotal) {\n  if (((maxChoosableInteger + 1) * maxChoosableInteger) / 2 < desiredTotal) return false;\n  const map = {};\n  return dfs();\n  function dfs(num = 0, total = desiredTotal) {\n    if (map[num]) return map[num];\n    if (total <= 0) return (map[num] = true);\n    for (let i = 1; i <= maxChoosableInteger; i++) {\n      if (num & (1 << i)) continue;\n      if (i >= total || !dfs(num | (1 << i), total - i)) return (map[num] = true);\n    }\n    return (map[num] = false);\n  }\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-22"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a856ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a85.7MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs,\u8bb0\u5fc6\u5316\uff0c\u5f53\u524d\u4eba\u8d62\u7684\u65f6\u5019\u8bf4\u660e\u4e0b\u4e00\u5c42\u7ea7\u9700\u8981\u8f93\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int maxChoosableInteger, desiredTotal, maxBit;\n    unordered_map<int, bool> m;\n    bool canIWin(int maxChoosableInteger, int desiredTotal) {\n        if ((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal)\n            return false;\n        this->maxBit = 1 << maxChoosableInteger;\n        this->maxChoosableInteger = maxChoosableInteger;\n        this->desiredTotal = desiredTotal;\n        return dfs(0, 0);\n    }\n    bool dfs(int used, int sum) {\n        if (m.count(used)) return m[used];\n        if (sum >= desiredTotal) return m[used] = true;\n        if (check(used, sum)) return m[used] = true;\n        int ans = false;\n        for (int i = 1; i <= maxChoosableInteger; i++) {\n            int bit = 1 << i;\n            if (used & bit) continue;\n            ans = ans || !dfs(used | bit, sum + i);\n        }\n        return m[used] = ans;\n    }\n    bool check(int used, int sum) {\n        int num = desiredTotal - sum;\n        if (num > maxChoosableInteger) return false;\n        for (int i = num; i <= maxChoosableInteger; i++) {\n            int bit = 1 << i;\n            if (!(used & bit)) return true;\n        }\n        return false;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(30758);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);