"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[95509],{98740:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"leetcode/1-100/\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868","title":"21.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868","description":"\u94fe\u63a5\uff1a21.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868","source":"@site/docs/leetcode/1-100/21.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868.md","sourceDirName":"leetcode/1-100","slug":"/leetcode/1-100/\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868","permalink":"/docs/leetcode/1-100/\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":21,"frontMatter":{},"sidebar":"journal","previous":{"title":"20.\u6709\u6548\u7684\u62ec\u53f7","permalink":"/docs/leetcode/1-100/\u6709\u6548\u7684\u62ec\u53f7"},"next":{"title":"22.\u62ec\u53f7\u751f\u6210","permalink":"/docs/leetcode/1-100/\u62ec\u53f7\u751f\u6210"}}');var s=t(25105),i=t(8556);const r={},o="21.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868",d={},c=[{value:"\u9898\u89e3 1 - rust",id:"\u9898\u89e3-1---rust",level:2},{value:"\u9898\u89e3 2 - c",id:"\u9898\u89e3-2---c",level:2},{value:"\u9898\u89e3 3 - javascript",id:"\u9898\u89e3-3---javascript",level:2},{value:"\u9898\u89e3 4 - python",id:"\u9898\u89e3-4---python",level:2},{value:"\u9898\u89e3 5 - cpp",id:"\u9898\u89e3-5---cpp",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"21\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868",children:"21.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/merge-two-sorted-lists",children:"21.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u9012\u5f52\u3001\u94fe\u8868",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5c06\u4e24\u4e2a\u5347\u5e8f\u94fe\u8868\u5408\u5e76\u4e3a\u4e00\u4e2a\u65b0\u7684\u5347\u5e8f\u94fe\u8868\u5e76\u8fd4\u56de\u3002\u65b0\u94fe\u8868\u662f\u901a\u8fc7\u62fc\u63a5\u7ed9\u5b9a\u7684\u4e24\u4e2a\u94fe\u8868\u7684\u6240\u6709\u8282\u70b9\u7ec4\u6210\u7684\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---rust",children:"\u9898\u89e3 1 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-05"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.06MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\npub fn merge_two_lists(\n    mut list1: Option<Box<ListNode>>,\n    mut list2: Option<Box<ListNode>>,\n) -> Option<Box<ListNode>> {\n    let mut head = ListNode::new(0);\n    let mut p = &mut head;\n    let tmp = Box::new(ListNode::new(-1));\n    while list1.is_some() || list2.is_some() {\n        if list2.is_none()\n            || list1.is_some() && list1.as_ref().unwrap().val <= list2.as_ref().unwrap().val\n        {\n            let mut node = list1.take().unwrap();\n            let next = node.next.take();\n            p.next = Some(node);\n            list1 = next;\n        } else {\n            let mut node = list2.take().unwrap();\n            let next = node.next.take();\n            p.next = Some(node);\n            list2 = next;\n        }\n        p = p.next.as_mut().unwrap();\n    }\n    head.next\n}\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---c",children:"\u9898\u89e3 2 - c"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-30"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u65b0\u5efa\u4e00\u4e2a\u5934\u7ed3\u70b9\uff0c\u904d\u5386\u4e24\u4e2a\u8282\u70b9\u8fdb\u884c\u6bd4\u8f83\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2){\n    struct ListNode *root = (struct ListNode *)malloc(sizeof(struct ListNode)), *p = root;\n    while (list1 && list2) {\n        if (list1->val <= list2->val) {\n            p->next = list1;\n            list1 = list1->next;\n        } else {\n            p->next = list2;\n            list2 = list2->next;\n        }\n        p = p->next;\n    }\n    if (!list1) p->next = list2;\n    if (!list2) p->next = list1;\n    return root->next;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---javascript",children:"\u9898\u89e3 3 - javascript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-01"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a35.5MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u901a\u8fc7\u961f\u5217\u50a8\u5b58\u540e\u6392\u5e8f\u8f93\u51fa\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nvar mergeTwoLists = function (l1, l2) {\n  if (l1 === null && l2 === null) return null;\n  let tmp1 = l1,\n    tmp2 = l2;\n  const queue = [];\n  while (tmp1 !== null && tmp2 !== null) {\n    if (tmp1.val <= tmp2.val) {\n      queue.push(tmp1);\n      tmp1 = tmp1.next;\n    } else {\n      queue.push(tmp2);\n      tmp2 = tmp2.next;\n    }\n  }\n  while (tmp1 !== null) {\n    queue.push(tmp1);\n    tmp1 = tmp1.next;\n  }\n  while (tmp2 !== null) {\n    queue.push(tmp2);\n    tmp2 = tmp2.next;\n  }\n  const root = queue[0];\n  let tmp = root;\n  for (let i = 1, len = queue.length; i < len; i++) {\n    const node = queue[i] === undefined ? null : queue[i];\n    tmp.next = node;\n    tmp = tmp.next;\n  }\n  return root;\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-4---python",children:"\u9898\u89e3 4 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-05"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.59MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        head = ListNode()\n        p = head\n        while list1 or list2:\n            if not list2 or list1 and list1.val <= list2.val:\n                p.next = list1\n                list1 = list1.next\n            else:\n                p.next = list2\n                list2 = list2.next\n            p = p.next\n        return head.next\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-5---cpp",children:"\u9898\u89e3 5 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-05"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.5MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        ListNode *head = new ListNode(), *p = head;\n        while (list1 || list2) {\n            if (!list2 || list1 && list1->val <= list2->val) {\n                p->next = list1;\n                list1 = list1->next;\n            } else {\n                p->next = list2;\n                list2 = list2->next;\n            }\n            p = p->next;\n        }\n        return head->next;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},8556:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var l=t(58101);const s={},i=l.createContext(s);function r(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);