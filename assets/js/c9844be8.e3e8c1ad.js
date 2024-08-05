"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[82818],{64677:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=t(86070),o=t(25710);const r={},l="1261.\u5728\u53d7\u6c61\u67d3\u7684\u4e8c\u53c9\u6811\u4e2d\u67e5\u627e\u5143\u7d20",i={id:"leetcode/1201-1300/\u5728\u53d7\u6c61\u67d3\u7684\u4e8c\u53c9\u6811\u4e2d\u67e5\u627e\u5143\u7d20",title:"1261.\u5728\u53d7\u6c61\u67d3\u7684\u4e8c\u53c9\u6811\u4e2d\u67e5\u627e\u5143\u7d20",description:"\u94fe\u63a5\uff1a1261.\u5728\u53d7\u6c61\u67d3\u7684\u4e8c\u53c9\u6811\u4e2d\u67e5\u627e\u5143\u7d20",source:"@site/docs/leetcode/1201-1300/1261.\u5728\u53d7\u6c61\u67d3\u7684\u4e8c\u53c9\u6811\u4e2d\u67e5\u627e\u5143\u7d20.md",sourceDirName:"leetcode/1201-1300",slug:"/leetcode/1201-1300/\u5728\u53d7\u6c61\u67d3\u7684\u4e8c\u53c9\u6811\u4e2d\u67e5\u627e\u5143\u7d20",permalink:"/docs/leetcode/1201-1300/\u5728\u53d7\u6c61\u67d3\u7684\u4e8c\u53c9\u6811\u4e2d\u67e5\u627e\u5143\u7d20",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1261,frontMatter:{},sidebar:"journal",previous:{title:"1260.\u4e8c\u7ef4\u7f51\u683c\u8fc1\u79fb",permalink:"/docs/leetcode/1201-1300/\u4e8c\u7ef4\u7f51\u683c\u8fc1\u79fb"},next:{title:"1262.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c",permalink:"/docs/leetcode/1201-1300/\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c"}},c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1261\u5728\u53d7\u6c61\u67d3\u7684\u4e8c\u53c9\u6811\u4e2d\u67e5\u627e\u5143\u7d20",children:"1261.\u5728\u53d7\u6c61\u67d3\u7684\u4e8c\u53c9\u6811\u4e2d\u67e5\u627e\u5143\u7d20"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/find-elements-in-a-contaminated-binary-tree",children:"1261.\u5728\u53d7\u6c61\u67d3\u7684\u4e8c\u53c9\u6811\u4e2d\u67e5\u627e\u5143\u7d20"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u8bbe\u8ba1\u3001\u54c8\u5e0c\u8868\u3001\u4e8c\u53c9\u6811",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u5148\u8fd8\u539f\u4e8c\u53c9\u6811\uff0c\u7136\u540e\u5b9e\u73b0 FindElements \u7c7b\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-03-12"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a66ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a20.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class FindElements:\n    def __init__(self, root: Optional[TreeNode]):\n        self.set = set()\n        def dfs(node: Optional[TreeNode], cur: int):\n            if not node: return\n            self.set.add(cur)\n            dfs(node.left, cur * 2 + 1)\n            dfs(node.right, cur * 2 + 2)\n        dfs(root, 0)\n    def find(self, target: int) -> bool:\n        return target in self.set\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(30758);const o={},r=s.createContext(o);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);