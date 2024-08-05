"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[70778],{63583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(86070),l=t(25710);const i={},r="1269.\u505c\u5728\u539f\u5730\u7684\u65b9\u6848\u6570",o={id:"leetcode/1201-1300/\u505c\u5728\u539f\u5730\u7684\u65b9\u6848\u6570",title:"1269.\u505c\u5728\u539f\u5730\u7684\u65b9\u6848\u6570",description:"\u94fe\u63a5\uff1a1269.\u505c\u5728\u539f\u5730\u7684\u65b9\u6848\u6570",source:"@site/docs/leetcode/1201-1300/1269.\u505c\u5728\u539f\u5730\u7684\u65b9\u6848\u6570.md",sourceDirName:"leetcode/1201-1300",slug:"/leetcode/1201-1300/\u505c\u5728\u539f\u5730\u7684\u65b9\u6848\u6570",permalink:"/web/site/docs/leetcode/1201-1300/\u505c\u5728\u539f\u5730\u7684\u65b9\u6848\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1269,frontMatter:{},sidebar:"journal",previous:{title:"1268.\u641c\u7d22\u63a8\u8350\u7cfb\u7edf",permalink:"/web/site/docs/leetcode/1201-1300/\u641c\u7d22\u63a8\u8350\u7cfb\u7edf"},next:{title:"1276.\u4e0d\u6d6a\u8d39\u539f\u6599\u7684\u6c49\u5821\u5236\u4f5c\u65b9\u6848",permalink:"/web/site/docs/leetcode/1201-1300/\u4e0d\u6d6a\u8d39\u539f\u6599\u7684\u6c49\u5821\u5236\u4f5c\u65b9\u6848"}},d={},c=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1269\u505c\u5728\u539f\u5730\u7684\u65b9\u6848\u6570",children:"1269.\u505c\u5728\u539f\u5730\u7684\u65b9\u6848\u6570"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps",children:"1269.\u505c\u5728\u539f\u5730\u7684\u65b9\u6848\u6570"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u52a8\u6001\u89c4\u5212",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u94fe\u8868\u6570\u7ec4\uff0c\u6bcf\u4e2a\u94fe\u8868\u90fd\u5df2\u7ecf\u6309\u5347\u5e8f\u6392\u5217\u3002\u8bf7\u4f60\u5c06\u6240\u6709\u94fe\u8868\u5408\u5e76\u5230\u4e00\u4e2a\u5347\u5e8f\u94fe\u8868\u4e2d\uff0c\u8fd4\u56de\u5408\u5e76\u540e\u7684\u94fe\u8868\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-26"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a404ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5faa\u73af\u6570\u7ec4\u8fdb\u884c\u6dfb\u52a0\uff0c\u628a\u6570\u7ec4\u4e24\u4e24\u6dfb\u52a0\uff0c\u6dfb\u52a0\u65f6\u5224\u65ad\u6570\u503c\u5c0f\u4ee5\u53ca\u662f\u5426\u4e3a null\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode[]} lists\n * @return {ListNode}\n */\nvar mergeKLists = function (lists) {\n  if (lists.length === 0) return null;\n  if (lists.length === 1) return lists[0];\n  let resNode;\n  for (const node of lists) {\n    if (node === null) continue;\n    if (resNode === undefined) resNode = node;\n    else resNode = add(resNode, node);\n  }\n  return resNode === undefined ? null : resNode;\n};\nfunction add(node1, node2) {\n  let tempNode1 = node1;\n  let tempNode2 = node2;\n  let resNode;\n  let tempNode3;\n  while (tempNode1 !== null || tempNode2 !== null) {\n    let minNode;\n    if (tempNode1 === null) {\n      minNode = tempNode2;\n      tempNode2 = tempNode2.next;\n    } else if (tempNode2 === null) {\n      minNode = tempNode1;\n      tempNode1 = tempNode1.next;\n    } else if (tempNode1.val < tempNode2.val) {\n      minNode = tempNode1;\n      tempNode1 = tempNode1.next;\n    } else {\n      minNode = tempNode2;\n      tempNode2 = tempNode2.next;\n    }\n    if (resNode === undefined) {\n      tempNode3 = resNode = minNode;\n    } else {\n      tempNode3.next = minNode;\n      tempNode3 = tempNode3.next;\n    }\n  }\n  return resNode;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-13"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a220ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a48.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5f52\u5e76\u601d\u60f3\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function mergeKLists(lists: Array<ListNode | null>): ListNode | null {\n  lists = lists.filter(list => list !== null);\n  const len = lists.length;\n  if (len === 0) return null;\n  const merge = (start: number, end: number): ListNode | null => {\n    console.log(start, end);\n    if (start > end) return null;\n    if (start === end) return lists[start];\n    const mid = (start + end) >> 1;\n    const list1 = merge(start, mid);\n    const list2 = merge(mid + 1, end);\n    if (list1 === null) return list2;\n    if (list2 === null) return list1;\n    const first = new ListNode(0);\n    let temp = first;\n    let p1: ListNode | null = list1;\n    let p2: ListNode | null = list2;\n    while (p1 && p2) {\n      if (p1.val <= p2.val) {\n        temp.next = p1;\n        temp = temp.next;\n        p1 = p1.next;\n      } else {\n        temp.next = p2;\n        temp = temp.next;\n        p2 = p2.next;\n      }\n    }\n    if (p1) temp.next = p1;\n    if (p2) temp.next = p2;\n    return first.next;\n  };\n  return merge(0, len - 1);\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(30758);const l={},i=s.createContext(l);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);