"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[35507],{57024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var s=t(86070),r=t(25710);const o={},i="1464.\u6570\u7ec4\u4e2d\u4e24\u5143\u7d20\u7684\u6700\u5927\u4e58\u79ef",l={id:"leetcode/1401-1500/\u6570\u7ec4\u4e2d\u4e24\u5143\u7d20\u7684\u6700\u5927\u4e58\u79ef",title:"1464.\u6570\u7ec4\u4e2d\u4e24\u5143\u7d20\u7684\u6700\u5927\u4e58\u79ef",description:"\u94fe\u63a5\uff1a1464.\u6570\u7ec4\u4e2d\u4e24\u5143\u7d20\u7684\u6700\u5927\u4e58\u79ef",source:"@site/docs/leetcode/1401-1500/1464.\u6570\u7ec4\u4e2d\u4e24\u5143\u7d20\u7684\u6700\u5927\u4e58\u79ef.md",sourceDirName:"leetcode/1401-1500",slug:"/leetcode/1401-1500/\u6570\u7ec4\u4e2d\u4e24\u5143\u7d20\u7684\u6700\u5927\u4e58\u79ef",permalink:"/web/site/docs/leetcode/1401-1500/\u6570\u7ec4\u4e2d\u4e24\u5143\u7d20\u7684\u6700\u5927\u4e58\u79ef",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1464,frontMatter:{},sidebar:"journal",previous:{title:"1463.\u6458\u6a31\u6843II",permalink:"/web/site/docs/leetcode/1401-1500/\u6458\u6a31\u6843II"},next:{title:"1465.\u5207\u5272\u540e\u9762\u79ef\u6700\u5927\u7684\u86cb\u7cd5",permalink:"/web/site/docs/leetcode/1401-1500/\u5207\u5272\u540e\u9762\u79ef\u6700\u5927\u7684\u86cb\u7cd5"}},c={},u=[{value:"\u9898\u89e3 1 - rust",id:"\u9898\u89e3-1---rust",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1464\u6570\u7ec4\u4e2d\u4e24\u5143\u7d20\u7684\u6700\u5927\u4e58\u79ef",children:"1464.\u6570\u7ec4\u4e2d\u4e24\u5143\u7d20\u7684\u6700\u5927\u4e58\u79ef"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-product-of-two-elements-in-an-array",children:"1464.\u6570\u7ec4\u4e2d\u4e24\u5143\u7d20\u7684\u6700\u5927\u4e58\u79ef"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6392\u5e8f\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums\uff0c\u8bf7\u4f60\u9009\u62e9\u6570\u7ec4\u7684\u4e24\u4e2a\u4e0d\u540c\u4e0b\u6807 i \u548c j\uff0c\u4f7f (nums[i]-1)*(nums[j]-1) \u53d6\u5f97\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---rust",children:"\u9898\u89e3 1 - rust"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-08-27"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5c42\u5e8f\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use std::cell::RefCell;\nuse std::collections::VecDeque;\nuse std::rc::Rc;\nimpl Solution {\n    pub fn width_of_binary_tree(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {\n        let root = root.unwrap();\n        let mut q = VecDeque::<(i32, Rc<RefCell<TreeNode>>)>::new();\n        q.push_back((0, root.clone()));\n        let mut ans = 1_i32;\n        let mut size = 1;\n        while !q.is_empty() {\n            let (idx, node) = q.pop_front().unwrap();\n            if node.as_ref().borrow().left.is_some() {\n                q.push_back((\n                    idx * 2 + 1,\n                    node.as_ref().borrow().left.as_ref().unwrap().clone(),\n                ));\n            }\n            if node.as_ref().borrow().right.is_some() {\n                q.push_back((\n                    idx * 2 + 2,\n                    node.as_ref().borrow().right.as_ref().unwrap().clone(),\n                ));\n            }\n            size -= 1;\n            if size == 0 {\n                size = q.len();\n                if !q.is_empty() {\n                    ans = ans.max(q.back().unwrap().0 - q.front().unwrap().0 + 1);\n                }\n            }\n        }\n        ans\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(30758);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);