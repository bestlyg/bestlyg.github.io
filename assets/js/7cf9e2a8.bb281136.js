"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[23752],{65932:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=l(86070),o=l(25710);const s={},r="1993.\u6811\u4e0a\u7684\u64cd\u4f5c",i={id:"leetcode/1901-2000/\u6811\u4e0a\u7684\u64cd\u4f5c",title:"1993.\u6811\u4e0a\u7684\u64cd\u4f5c",description:"\u94fe\u63a5\uff1a1993.\u6811\u4e0a\u7684\u64cd\u4f5c",source:"@site/docs/leetcode/1901-2000/1993.\u6811\u4e0a\u7684\u64cd\u4f5c.md",sourceDirName:"leetcode/1901-2000",slug:"/leetcode/1901-2000/\u6811\u4e0a\u7684\u64cd\u4f5c",permalink:"/docs/leetcode/1901-2000/\u6811\u4e0a\u7684\u64cd\u4f5c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1993,frontMatter:{},sidebar:"journal",previous:{title:"1991.\u627e\u5230\u6570\u7ec4\u7684\u4e2d\u95f4\u4f4d\u7f6e",permalink:"/docs/leetcode/1901-2000/\u627e\u5230\u6570\u7ec4\u7684\u4e2d\u95f4\u4f4d\u7f6e"},next:{title:"1994.\u597d\u5b50\u96c6\u7684\u6570\u76ee",permalink:"/docs/leetcode/1901-2000/\u597d\u5b50\u96c6\u7684\u6570\u76ee"}},c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"1993\u6811\u4e0a\u7684\u64cd\u4f5c",children:"1993.\u6811\u4e0a\u7684\u64cd\u4f5c"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/operations-on-tree",children:"1993.\u6811\u4e0a\u7684\u64cd\u4f5c"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u8bbe\u8ba1\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u68f5 n \u4e2a\u8282\u70b9\u7684\u6811\uff0c\u7f16\u53f7\u4ece 0 \u5230 n - 1 \uff0c\u4ee5\u7236\u8282\u70b9\u6570\u7ec4 parent \u7684\u5f62\u5f0f\u7ed9\u51fa\uff0c\u5176\u4e2d parent[i] \u662f\u7b2c i \u4e2a\u8282\u70b9\u7684\u7236\u8282\u70b9\u3002\u6811\u7684\u6839\u8282\u70b9\u4e3a 0 \u53f7\u8282\u70b9\uff0c\u6240\u4ee5 parent[0] = -1 \uff0c\u56e0\u4e3a\u5b83\u6ca1\u6709\u7236\u8282\u70b9\u3002\u4f60\u60f3\u8981\u8bbe\u8ba1\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\u5b9e\u73b0\u6811\u91cc\u9762\u5bf9\u8282\u70b9\u7684\u52a0\u9501\uff0c\u89e3\u9501\u548c\u5347\u7ea7\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-23"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.61MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Node:\n    def __init__(self, val: int):\n        self.val = val\n        self.parent = None\n        self.children = []\n        self.lock_state = 0\n\n    def lock(self, user: int) -> bool:\n        if self.lock_state:\n            return False\n        self.lock_state = user\n        return True\n\n    def unlock(self, user: int) -> bool:\n        if self.lock_state != user:\n            return False\n        self.lock_state = 0\n        return True\n\n    def unlock_children(self) -> bool:\n        for node in self.children:\n            node.lock_state = 0\n            node.unlock_children()\n\n    def is_lock(self) -> bool:\n        return self.lock_state != 0\n\n    def is_parent_unlock(self) -> bool:\n        return not self.parent or not self.parent.is_lock() and self.parent.is_parent_unlock()\n\n    def exist_children_lock(self) -> bool:\n        return any(child.is_lock() or child.exist_children_lock() for child in self.children)\n\n\nclass LockingTree:\n    def __init__(self, parent: List[int]):\n        self.nodes = [Node(i) for i in range(len(parent))]\n        self.root = self.nodes[0]\n        for i in range(1, len(parent)):\n            self.nodes[i].parent = self.nodes[parent[i]]\n            self.nodes[parent[i]].children.append(self.nodes[i])\n\n    def lock(self, num: int, user: int) -> bool:\n        return self.nodes[num].lock(user)\n\n    def unlock(self, num: int, user: int) -> bool:\n        return self.nodes[num].unlock(user)\n\n    def upgrade(self, num: int, user: int) -> bool:\n        node = self.nodes[num]\n        if not node.is_lock() and node.is_parent_unlock() and node.exist_children_lock():\n            node.lock(user)\n            node.unlock_children()\n            return True\n        return False\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},25710:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>i});var t=l(30758);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);