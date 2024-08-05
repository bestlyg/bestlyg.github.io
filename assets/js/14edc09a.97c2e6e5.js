"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[31496],{50109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=t(86070),i=t(25710);const r={},l="2516.\u6bcf\u79cd\u5b57\u7b26\u81f3\u5c11\u53d6K\u4e2a",c={id:"leetcode/2501-2600/\u6bcf\u79cd\u5b57\u7b26\u81f3\u5c11\u53d6K\u4e2a",title:"2516.\u6bcf\u79cd\u5b57\u7b26\u81f3\u5c11\u53d6K\u4e2a",description:"\u94fe\u63a5\uff1a2516.\u6bcf\u79cd\u5b57\u7b26\u81f3\u5c11\u53d6K\u4e2a",source:"@site/docs/leetcode/2501-2600/2516.\u6bcf\u79cd\u5b57\u7b26\u81f3\u5c11\u53d6K\u4e2a.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u6bcf\u79cd\u5b57\u7b26\u81f3\u5c11\u53d6K\u4e2a",permalink:"/web/site/docs/leetcode/2501-2600/\u6bcf\u79cd\u5b57\u7b26\u81f3\u5c11\u53d6K\u4e2a",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2516,frontMatter:{},sidebar:"journal",previous:{title:"2515.\u5230\u76ee\u6807\u5b57\u7b26\u4e32\u7684\u6700\u77ed\u8ddd\u79bb",permalink:"/web/site/docs/leetcode/2501-2600/\u5230\u76ee\u6807\u5b57\u7b26\u4e32\u7684\u6700\u77ed\u8ddd\u79bb"},next:{title:"2517.\u793c\u76d2\u7684\u6700\u5927\u751c\u871c\u5ea6",permalink:"/web/site/docs/leetcode/2501-2600/\u793c\u76d2\u7684\u6700\u5927\u751c\u871c\u5ea6"}},o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"2516\u6bcf\u79cd\u5b57\u7b26\u81f3\u5c11\u53d6k\u4e2a",children:"2516.\u6bcf\u79cd\u5b57\u7b26\u81f3\u5c11\u53d6K\u4e2a"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/take-k-of-each-character-from-left-and-right",children:"2516.\u6bcf\u79cd\u5b57\u7b26\u81f3\u5c11\u53d6K\u4e2a"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u6ed1\u52a8\u7a97\u53e3",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4f60\u5fc5\u987b\u53d6\u8d70\u6bcf\u79cd\u5b57\u7b26 \u81f3\u5c11 k \u4e2a\uff0c\u8fd4\u56de\u9700\u8981\u7684 \u6700\u5c11 \u5206\u949f\u6570\uff1b\u5982\u679c\u65e0\u6cd5\u53d6\u5230\uff0c\u5219\u8fd4\u56de -1 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-25"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.1MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int takeCharacters(string s, int k) {\n        if (k == 0) return 0;\n        int l = 0, r = s.size(), m, list[3] = {0};\n        for (auto &ch : s) list[ch - 'a']++;\n        if (list[0] < k || list[1] < k || list[2] < k) return -1;\n        while (l < r) {\n            m = (l + r) / 2;\n            if (check(s, k, m)) r = m;\n            else l = m + 1;\n        }\n        return l;\n    }\n    bool check(string &s, int &k, int &m) {\n        int list[3] = {0}, l = 0, r = s.size() - m;\n        for (int i = s.size() - 1; i >= r; i--) list[s[i] - 'a']++;\n        if (checklist(list, k)) return true;\n        while (l < m) {\n            list[s[l++] - 'a']++;\n            list[s[r++] - 'a']--;\n            if (checklist(list, k)) return true;\n        }\n        return false;\n    }\n    bool checklist(int list[3], int k) {\n        return list[0] >= k && list[1] >= k && list[2] >= k;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(30758);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);