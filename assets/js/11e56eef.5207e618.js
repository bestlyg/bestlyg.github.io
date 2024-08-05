"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[14249],{83489:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(86070),o=t(25710);const i={},s="543.\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",c={id:"leetcode/501-600/\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",title:"543.\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",description:"\u94fe\u63a5\uff1a543.\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",source:"@site/docs/leetcode/501-600/543.\u4e8c\u53c9\u6811\u7684\u76f4\u5f84.md",sourceDirName:"leetcode/501-600",slug:"/leetcode/501-600/\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",permalink:"/web/site/docs/leetcode/501-600/\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:543,frontMatter:{},sidebar:"journal",previous:{title:"541.\u53cd\u8f6c\u5b57\u7b26\u4e32II",permalink:"/web/site/docs/leetcode/501-600/\u53cd\u8f6c\u5b57\u7b26\u4e32II"},next:{title:"547.\u7701\u4efd\u6570\u91cf",permalink:"/web/site/docs/leetcode/501-600/\u7701\u4efd\u6570\u91cf"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"543\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",children:"543.\u4e8c\u53c9\u6811\u7684\u76f4\u5f84"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/diameter-of-binary-tree",children:"543.\u4e8c\u53c9\u6811\u7684\u76f4\u5f84"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u68f5\u4e8c\u53c9\u6811\uff0c\u4f60\u9700\u8981\u8ba1\u7b97\u5b83\u7684\u76f4\u5f84\u957f\u5ea6\u3002\u4e00\u68f5\u4e8c\u53c9\u6811\u7684\u76f4\u5f84\u957f\u5ea6\u662f\u4efb\u610f\u4e24\u4e2a\u7ed3\u70b9\u8def\u5f84\u957f\u5ea6\u4e2d\u7684\u6700\u5927\u503c\u3002\u8fd9\u6761\u8def\u5f84\u53ef\u80fd\u7a7f\u8fc7\u4e5f\u53ef\u80fd\u4e0d\u7a7f\u8fc7\u6839\u7ed3\u70b9\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-15"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.7MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs \u7edf\u8ba1\u5de6\u53f3\u5b50\u6811\u7684\u9ad8\u5ea6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int h(TreeNode* node) {\n        if (!node) return 0;\n        return max(h(node->left), h(node->right)) + 1;\n    }\n    int diameterOfBinaryTree(TreeNode* root) {\n        if (!root) return 0;\n        return max(h(root->left) + h(root->right),\n                   max(diameterOfBinaryTree(root->left),\n                       diameterOfBinaryTree(root->right)));\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(30758);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);