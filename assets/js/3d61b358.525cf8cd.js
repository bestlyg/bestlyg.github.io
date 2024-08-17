"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[97283],{57476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(86070),r=n(25710);const i={},l="669.\u4fee\u526a\u4e8c\u53c9\u641c\u7d22\u6811",s={id:"leetcode/601-700/\u4fee\u526a\u4e8c\u53c9\u641c\u7d22\u6811",title:"669.\u4fee\u526a\u4e8c\u53c9\u641c\u7d22\u6811",description:"\u94fe\u63a5\uff1a669.\u4fee\u526a\u4e8c\u53c9\u641c\u7d22\u6811",source:"@site/docs/leetcode/601-700/669.\u4fee\u526a\u4e8c\u53c9\u641c\u7d22\u6811.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u4fee\u526a\u4e8c\u53c9\u641c\u7d22\u6811",permalink:"/docs/leetcode/601-700/\u4fee\u526a\u4e8c\u53c9\u641c\u7d22\u6811",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:669,frontMatter:{},sidebar:"journal",previous:{title:"667.\u4f18\u7f8e\u7684\u6392\u5217II",permalink:"/docs/leetcode/601-700/\u4f18\u7f8e\u7684\u6392\u5217II"},next:{title:"670.\u6700\u5927\u4ea4\u6362",permalink:"/docs/leetcode/601-700/\u6700\u5927\u4ea4\u6362"}},c={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"669\u4fee\u526a\u4e8c\u53c9\u641c\u7d22\u6811",children:"669.\u4fee\u526a\u4e8c\u53c9\u641c\u7d22\u6811"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(t.a,{href:"https://leetcode.cn/problems/trim-a-binary-search-tree",children:"669.\u4fee\u526a\u4e8c\u53c9\u641c\u7d22\u6811"}),(0,o.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,o.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u641c\u7d22\u6811\u3001\u4e8c\u53c9\u6811",(0,o.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u901a\u8fc7\u4fee\u526a\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u4f7f\u5f97\u6240\u6709\u8282\u70b9\u7684\u503c\u5728[low, high]\u4e2d\u3002"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-10"}),"\n",(0,o.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,o.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.7MB"}),"\n",(0,o.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,o.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:"class Solution {\npublic:\n    TreeNode* trimBST(TreeNode* root, int low, int high) {\n        if (!root) return nullptr;\n        root->left = trimBST(root->left, low, high);\n        root->right = trimBST(root->right, low, high);\n        if (root->val < low) root = root->right;\n        else if (root->val > high) root = root->left;\n        return root;\n    }\n};\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},25710:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var o=n(30758);const r={},i=o.createContext(r);function l(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);