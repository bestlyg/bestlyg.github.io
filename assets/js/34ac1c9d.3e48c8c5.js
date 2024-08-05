"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[2725],{15872:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var l=t(86070),s=t(25710);const i={},r="203.\u79fb\u9664\u94fe\u8868\u5143\u7d20",c={id:"leetcode/201-300/\u79fb\u9664\u94fe\u8868\u5143\u7d20",title:"203.\u79fb\u9664\u94fe\u8868\u5143\u7d20",description:"\u94fe\u63a5\uff1a203.\u79fb\u9664\u94fe\u8868\u5143\u7d20",source:"@site/docs/leetcode/201-300/203.\u79fb\u9664\u94fe\u8868\u5143\u7d20.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u79fb\u9664\u94fe\u8868\u5143\u7d20",permalink:"/web/site/docs/leetcode/201-300/\u79fb\u9664\u94fe\u8868\u5143\u7d20",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:203,frontMatter:{},sidebar:"journal",previous:{title:"202.\u5feb\u4e50\u6570",permalink:"/web/site/docs/leetcode/201-300/\u5feb\u4e50\u6570"},next:{title:"204.\u8ba1\u6570\u8d28\u6570",permalink:"/web/site/docs/leetcode/201-300/\u8ba1\u6570\u8d28\u6570"}},d={},o=[{value:"\u9898\u89e3 1 - java",id:"\u9898\u89e3-1---java",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - c",id:"\u9898\u89e3-3---c",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"203\u79fb\u9664\u94fe\u8868\u5143\u7d20",children:"203.\u79fb\u9664\u94fe\u8868\u5143\u7d20"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/remove-linked-list-elements",children:"203.\u79fb\u9664\u94fe\u8868\u5143\u7d20"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u9012\u5f52\u3001\u94fe\u8868",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5220\u9664\u94fe\u8868\u4e2d\u7b49\u4e8e\u7ed9\u5b9a\u503c val \u7684\u6240\u6709\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---java",children:"\u9898\u89e3 1 - java"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-13"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.1MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u521b\u5efa\u65b0\u94fe\u8868\uff0c\u904d\u5386\u8282\u70b9\uff0c\u82e5\u5b58\u5728\u7b26\u5408\u7684\u503c\u5219\u79fb\u9664\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public ListNode removeElements(ListNode head, int val) {\n        ListNode newHead=new ListNode(0);\n        newHead.next=head;\n        ListNode tem=newHead;\n        while(tem!=null&&tem.next!=null) {\n        \tif(tem.next.val==val) {\n        \t\ttem.next=tem.next.next;\n                continue;\n        \t}\n        \ttem=tem.next;\n        }\n        return newHead.next;\n    }\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-06-05"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.3MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u521d\u59cb\u5316\u7a7a\u5934\u8282\u70b9\u4fbf\u4e8e\u8fd0\u7b97\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function removeElements(head: ListNode | null, val: number): ListNode | null {\n  if (head === null) return null;\n  const tempHead = new ListNode(0, head);\n  let p: ListNode | null = tempHead;\n  while (p !== null) {\n    let next: ListNode | null = p.next;\n    while (next !== null && next.val === val) next = next.next;\n    p.next = next;\n    p = next;\n  }\n  return tempHead.next;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-3---c",children:"\u9898\u89e3 3 - c"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-19"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.9MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"struct ListNode* removeElements(struct ListNode* head, int val){\n    if (!head) return NULL;\n    while (head && head->val == val) head = head->next;\n    if (!head) return NULL;\n    struct ListNode *p = head;\n    struct ListNode *work = head;\n    while (work) {\n        work = work->next;\n        while(work && work->val == val) work = work->next;\n        p->next = work;\n        p = p->next;\n    }\n    return head;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var l=t(30758);const s={},i=l.createContext(s);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);