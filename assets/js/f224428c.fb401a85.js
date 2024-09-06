"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[42840],{89019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var l=t(86070),s=t(25710);const i={},r="142.\u73af\u5f62\u94fe\u8868II",c={id:"leetcode/101-200/\u73af\u5f62\u94fe\u8868II",title:"142.\u73af\u5f62\u94fe\u8868II",description:"\u94fe\u63a5\uff1a142.\u73af\u5f62\u94fe\u8868II",source:"@site/docs/leetcode/101-200/142.\u73af\u5f62\u94fe\u8868II.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u73af\u5f62\u94fe\u8868II",permalink:"/docs/leetcode/101-200/\u73af\u5f62\u94fe\u8868II",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:142,frontMatter:{},sidebar:"journal",previous:{title:"141.\u73af\u5f62\u94fe\u8868",permalink:"/docs/leetcode/101-200/\u73af\u5f62\u94fe\u8868"},next:{title:"143.\u91cd\u6392\u94fe\u8868",permalink:"/docs/leetcode/101-200/\u91cd\u6392\u94fe\u8868"}},d={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2},{value:"\u9898\u89e3 4 - cpp",id:"\u9898\u89e3-4---cpp",level:2},{value:"\u9898\u89e3 5 - python",id:"\u9898\u89e3-5---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"142\u73af\u5f62\u94fe\u8868ii",children:"142.\u73af\u5f62\u94fe\u8868II"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/linked-list-cycle-ii",children:"142.\u73af\u5f62\u94fe\u8868II"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u94fe\u8868\u3001\u53cc\u6307\u9488",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u94fe\u8868\uff0c\u8fd4\u56de\u94fe\u8868\u5f00\u59cb\u5165\u73af\u7684\u7b2c\u4e00\u4e2a\u8282\u70b9\u3002 \u5982\u679c\u94fe\u8868\u65e0\u73af\uff0c\u5219\u8fd4\u56de null\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-10"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a120ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.4MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528 set \u53bb\u91cd\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function detectCycle(head: ListNode | null): ListNode | null {\n  if (head === null || head.next === null) return null;\n  const set = new Set<ListNode>([head]);\n  let temp = head;\n  while (temp.next !== null) {\n    if (set.has(temp.next)) return temp.next;\n    set.add(temp.next);\n    temp = temp.next;\n  }\n  return null;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-10"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a100ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.9MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","[\u53c2\u8003\u94fe\u63a5](https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode-solution/)\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function detectCycle(head: ListNode | null): ListNode | null {\n  if (head === null) return null;\n  let f: ListNode | null = head;\n  let s: ListNode | null = head;\n  while (f !== null && f.next !== null) {\n    f = f.next.next;\n    s = s.next!;\n    if (f === s) {\n      let h: ListNode | null = head;\n      while (h !== s) {\n        h = h.next!;\n        s = s.next!;\n      }\n      return h;\n    }\n  }\n  return null;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-06"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.8MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5feb\u6162\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function detectCycle(head: ListNode | null): ListNode | null {\n  if (head === null || head.next === null) return null;\n  let fast: ListNode | null = head;\n  let slow: ListNode | null = head;\n  while (fast !== null && fast.next !== null) {\n    fast = fast!.next!.next;\n    slow = slow!.next;\n    if (fast === slow) break;\n  }\n  if (fast !== slow) return null;\n  slow = head;\n  while (fast !== slow) {\n    fast = fast!.next;\n    slow = slow!.next;\n  }\n  return slow;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-4---cpp",children:"\u9898\u89e3 4 - cpp"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-03"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.3MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\uff0c \u5feb\u6307\u9488\u8dd1\u4e86 a+b+c+b \u65f6\uff0c\u6162\u6307\u9488\u8dd1\u4e86 a+b\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    ListNode *detectCycle(ListNode *head) {\n        if (!head) return NULL;\n        ListNode *fast = head, *slow = head;\n        while (fast && fast->next) {\n            slow = slow->next;\n            fast = fast->next->next;\n            if (fast == slow) break;\n        }\n        if (!(fast && fast->next)) return NULL;\n        slow = head;\n        while (slow != fast) {\n            slow = slow->next;\n            fast = fast->next;\n        }\n        return slow;\n    }\n};\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-5---python",children:"\u9898\u89e3 5 - python"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-30"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a20.1MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        slow = fast = head\n        while fast and fast.next and fast.next != slow:\n            slow = slow.next\n            fast = fast.next.next\n        if not fast or not fast.next:\n            return None\n        slow = head\n        fast = fast.next.next\n        while fast != slow:\n            fast = fast.next\n            slow = slow.next\n        return slow\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var l=t(30758);const s={},i=l.createContext(s);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);