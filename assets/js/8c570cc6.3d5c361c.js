"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[21087],{7277:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>t,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"\u6570\u636e\u7ed3\u6784/\u6811/\u4e8c\u53c9\u6811","title":"\u4e8c\u53c9\u6811(BinaryTree)","description":"- \u6bcf\u4e2a\u8282\u70b9\u7684\u5ea6\uff0c\u6700\u5927\u4e3a 2 \u7684\u6811","source":"@site/docs/\u6570\u636e\u7ed3\u6784/\u6811/\u4e8c\u53c9\u6811.mdx","sourceDirName":"\u6570\u636e\u7ed3\u6784/\u6811","slug":"/\u6570\u636e\u7ed3\u6784/\u6811/\u4e8c\u53c9\u6811","permalink":"/docs/\u6570\u636e\u7ed3\u6784/\u6811/\u4e8c\u53c9\u6811","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"\u4e8c\u53c9\u641c\u7d22\u6811(BinarySearchTree)","permalink":"/docs/\u6570\u636e\u7ed3\u6784/\u6811/\u4e8c\u53c9\u641c\u7d22\u6811"},"next":{"title":"\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811(BlanceBinarySearchTree)","permalink":"/docs/\u6570\u636e\u7ed3\u6784/\u6811/\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811"}}');var l=r(86070),s=r(31503);const t={},d="\u4e8c\u53c9\u6811(BinaryTree)",o={},h=[{value:"\u6027\u8d28",id:"\u6027\u8d28",level:2},{value:"\u771f\u4e8c\u53c9\u6811",id:"\u771f\u4e8c\u53c9\u6811",level:2},{value:"\u6ee1\u4e8c\u53c9\u6811",id:"\u6ee1\u4e8c\u53c9\u6811",level:2},{value:"\u5b8c\u5168\u4e8c\u53c9\u6811",id:"\u5b8c\u5168\u4e8c\u53c9\u6811",level:2},{value:"\u524d\u9a71\u8282\u70b9",id:"\u524d\u9a71\u8282\u70b9",level:2},{value:"\u540e\u9a71\u8282\u70b9",id:"\u540e\u9a71\u8282\u70b9",level:2},{value:"\u6027\u8d28",id:"\u6027\u8d28-1",level:3},{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801",level:2}];function u(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u4e8c\u53c9\u6811binarytree",children:"\u4e8c\u53c9\u6811(BinaryTree)"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6bcf\u4e2a\u8282\u70b9\u7684\u5ea6\uff0c\u6700\u5927\u4e3a 2 \u7684\u6811"}),"\n",(0,l.jsx)(e.li,{children:"\u6709\u5e8f\u6811"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6027\u8d28",children:"\u6027\u8d28"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u975e\u7a7a\u4e8c\u53c9\u6811\u7684\u7b2c i \u5c42,\u6700\u591a\u6709 2",(0,l.jsx)("sup",{children:"i-1"}),"\u4e2a\u8282\u70b9(i>=1)"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5728\u9ad8\u5ea6\u4e3a h \u7684\u4e8c\u53c9\u6811\u4e0a\u6700\u591a\u6709 2",(0,l.jsx)("sup",{children:"h"}),"-1 \u4e2a\u8282\u70b9(h>=1)"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5bf9\u4e8e\u4efb\u4f55\u4e00\u68f5\u975e\u7a7a\u4e8c\u53c9\u6811\uff0c\u5982\u679c\u53f6\u5b50\u8282\u70b9\u4e2a\u6570 n0,\u5ea6\u4e3a 2 \u7684\u8282\u70b9\u4e2a\u6570\u4e3a n2\uff0c\u5219 n0=n2+1","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6821\u9a8c"}),"\n",(0,l.jsx)(e.li,{children:"\u4e8c\u53c9\u6811\u8282\u70b9\u603b\u4e2a\u6570\u4e3a n=n0+n1+n2"}),"\n",(0,l.jsx)(e.li,{children:"\u4e8c\u53c9\u6811\u8fb9\u7684\u4e2a\u6570 2 \u4e3a t=n1+2*n2"}),"\n",(0,l.jsx)(e.li,{children:"\u8282\u70b9\u6570=\u8fb9\u6570+1,n0+n1+n2 = n1+2*n2+1"}),"\n",(0,l.jsx)(e.li,{children:"\u56e0\u6b64 n0=n2+1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u771f\u4e8c\u53c9\u6811",children:"\u771f\u4e8c\u53c9\u6811"}),"\n",(0,l.jsx)(e.p,{children:"\u6ca1\u6709\u5ea6\u4e3a 1 \u7684\u4e8c\u53c9\u6811"}),"\n",(0,l.jsx)(e.h2,{id:"\u6ee1\u4e8c\u53c9\u6811",children:"\u6ee1\u4e8c\u53c9\u6811"}),"\n",(0,l.jsx)(e.p,{children:"\u6700\u540e\u4e00\u5c42\u8282\u70b9\u5ea6\u90fd\u4e3a 0\uff0c\u5176\u4ed6\u8282\u70b9\u7684\u5ea6\u4e3a 2 \u7684\u4e8c\u53c9\u6811\uff0c\u6ee1\u4e8c\u53c9\u6811\u4e00\u5b9a\u662f\u771f\u4e8c\u53c9\u6811\uff0c\u771f\u4e8c\u53c9\u6811\u4e0d\u4e00\u5b9a\u662f\u6ee1\u4e8c\u53c9\u6811"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5047\u8bbe\u9ad8\u5ea6\u4e3a h,\u603b\u8282\u70b9\u6570\u4e3a n\uff0c\u90a3\u4e48"}),"\n",(0,l.jsxs)(e.li,{children:["\u7b2c i \u5c42\u8282\u70b9\u6570\u4e3a 2",(0,l.jsx)("sup",{children:"i-1"})]}),"\n",(0,l.jsxs)(e.li,{children:["\u53f6\u5b50\u8282\u70b9\u6570\u4e3a 2",(0,l.jsx)("sup",{children:"h-1"})]}),"\n",(0,l.jsxs)(e.li,{children:["\u603b\u7ed3\u70b9\u6570 n=2",(0,l.jsx)("sup",{children:"h"}),"-1=2",(0,l.jsx)("sup",{children:"0"}),"+2",(0,l.jsx)("sup",{children:"2"}),"+2",(0,l.jsx)("sup",{children:"3"}),"+...+2",(0,l.jsx)("sup",{children:"h-1"})]}),"\n",(0,l.jsxs)(e.li,{children:["\u9ad8\u5ea6\u4e3a h=log",(0,l.jsx)("sub",{children:"2"}),"(n+1)"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5b8c\u5168\u4e8c\u53c9\u6811",children:"\u5b8c\u5168\u4e8c\u53c9\u6811"}),"\n",(0,l.jsx)(e.p,{children:"\u5bf9\u8282\u70b9\u4ece\u4e0a\u81f3\u4e0b\u3001\u4ece\u5de6\u81f3\u53f3\u5f00\u59cb\u7f16\u53f7\uff0c\u5176\u6240\u6709\u7f16\u53f7\u90fd\u80fd\u4e0e\u76f8\u540c\u9ad8\u5ea6\u7684\u6ee1\u4e8c\u53c9\u6811\u4e2d\u7684\u7f16\u53f7\u5bf9\u5e94"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u53f6\u5b50\u8282\u70b9\u53ea\u4f1a\u51fa\u73b0\u5728\u6700\u540e 2 \u5c42\uff0c\u6700\u540e 1 \u5c42\u7684\u53f6\u5b50\u8282\u70b9\u90fd\u9760\u5de6\u5bf9\u9f50"}),"\n",(0,l.jsx)(e.li,{children:"\u5b8c\u5168\u4e8c\u53c9\u6811\u4ece\u6839\u8282\u70b9\u81f3\u5012\u6570\u7b2c 2 \u5c42\u662f\u4e00\u68f5\u6ee1\u4e8c\u53c9\u6811"}),"\n",(0,l.jsx)(e.li,{children:"\u6ee1\u4e8c\u53c9\u6811\u4e00\u5b9a\u662f\u5b8c\u5168\u4e8c\u53c9\u6811\uff0c\u5b8c\u5168\u4e8c\u53c9\u6811\u4e0d\u4e00\u5b9a\u662f\u6ee1\u4e8c\u53c9\u6811"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u524d\u9a71\u8282\u70b9",children:"\u524d\u9a71\u8282\u70b9"}),"\n",(0,l.jsx)(e.p,{children:"\u5bf9\u4e8e\u4e00\u68f5\u6811\u8fdb\u884c\u4e2d\u5e8f\u904d\u5386\u540e\uff0c\u4e00\u4e2a\u8282\u70b9\u7684\u524d\u4e00\u4e2a\u8282\u70b9\u5373\u4e3a\u524d\u9a71\u8282\u70b9"}),"\n",(0,l.jsx)(e.h2,{id:"\u540e\u9a71\u8282\u70b9",children:"\u540e\u9a71\u8282\u70b9"}),"\n",(0,l.jsx)(e.p,{children:"\u5bf9\u4e8e\u4e00\u68f5\u6811\u8fdb\u884c\u4e2d\u5e8f\u904d\u5386\u540e\uff0c\u4e00\u4e2a\u8282\u70b9\u7684\u540e\u4e00\u4e2a\u8282\u70b9\u5373\u4e3a\u540e\u9a71\u8282\u70b9"}),"\n",(0,l.jsx)(e.h3,{id:"\u6027\u8d28-1",children:"\u6027\u8d28"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5ea6\u4e3a 1 \u7684\u8282\u70b9\u53ea\u6709\u5de6\u5b50\u6811"}),"\n",(0,l.jsx)(e.li,{children:"\u5ea6\u4e3a 1 \u7684\u8282\u70b9\u8981\u4e48\u662f 1 \u4e2a\uff0c\u8981\u4e48\u662f 0 \u4e2a"}),"\n",(0,l.jsx)(e.li,{children:"\u540c\u6837\u8282\u70b9\u6570\u91cf\u7684\u4e8c\u53c9\u6811\uff0c\u5b8c\u5168\u4e8c\u53c9\u6811\u7684\u9ad8\u5ea6\u6700\u5c0f"}),"\n",(0,l.jsxs)(e.li,{children:["\u5047\u8bbe\u5b8c\u5168\u4e8c\u53c9\u6811\u9ad8\u5ea6\u4e3a h \u90a3\u4e48","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u81f3\u5c11\u6709 2",(0,l.jsx)("sup",{children:"h-1"}),"\u4e2a\u8282\u70b9(2",(0,l.jsx)("sup",{children:"0"}),"+2",(0,l.jsx)("sup",{children:"2"}),"+2",(0,l.jsx)("sup",{children:"3"}),"+...+2",(0,l.jsx)("sup",{children:"h-2"}),"+1)"]}),"\n",(0,l.jsxs)(e.li,{children:["\u81f3\u591a\u6709 2",(0,l.jsx)("sup",{children:"h"}),"-1 \u4e2a\u8282\u70b9(2",(0,l.jsx)("sup",{children:"0"}),"+2",(0,l.jsx)("sup",{children:"2"}),"+2",(0,l.jsx)("sup",{children:"3"}),"+...+2",(0,l.jsx)("sup",{children:"h-1"}),",\u6ee1\u4e8c\u53c9\u6811)"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u603b\u7ed3\u70b9\u6570\u4e3a n","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["2",(0,l.jsx)("sup",{children:"h-1"}),"<=","n","<",(0,l.jsx)("sup",{children:"h"})]}),"\n",(0,l.jsxs)(e.li,{children:["h-1","<=","log",(0,l.jsx)("sub",{children:"2"}),"n","<","h"]}),"\n",(0,l.jsxs)(e.li,{children:["h=Math.floor(log",(0,l.jsx)("sub",{children:"2"}),"n)+1"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u4e00\u68f5\u6709 n \u4e2a\u8282\u70b9\u7684\u5b8c\u5168\u4e8c\u53c9\u6811(n>0),\u4ece\u4e0a\u5230\u4e0b\u3001\u4ece\u5de6\u5230\u53f3\u8282\u70b9\u4ece 1 \u5f00\u59cb\u7f16\u53f7\uff0c\u5bf9\u4efb\u610f\u7b2c i \u4e2a\u8282\u70b9","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679c i=1\uff0c\u5219\u5b83\u662f\u6839\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c i>1,\u5b83\u7684\u7236\u8282\u70b9\u4e3a Math.floor(i/2)"}),"\n",(0,l.jsxs)(e.li,{children:["\u5982\u679c 2*i","<=","n,\u5b83\u7684\u5de6\u5b50\u8282\u70b9\u7f16\u53f7\u4e3a 2*i"]}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c 2*i>n,\u5b83\u65e0\u5de6\u5b50\u8282\u70b9"}),"\n",(0,l.jsxs)(e.li,{children:["\u5982\u679c 2*i+1","<=","n,\u5b83\u7684\u53f3\u5b50\u8282\u70b9\u7f16\u53f7\u4e3a 2*i+1"]}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c 2*i+1>n,\u5b83\u65e0\u53f3\u5b50\u8282\u70b9"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u4e00\u68f5\u6709 n \u4e2a\u8282\u70b9\u7684\u5b8c\u5168\u4e8c\u53c9\u6811(n>0),\u4ece\u4e0a\u5230\u4e0b\u3001\u4ece\u5de6\u5230\u53f3\u8282\u70b9\u4ece 0 \u5f00\u59cb\u7f16\u53f7\uff0c\u5bf9\u4efb\u610f\u7b2c i \u4e2a\u8282\u70b9","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679c i=0\uff0c\u5219\u5b83\u662f\u6839\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c i>0,\u5b83\u7684\u7236\u8282\u70b9\u4e3a Math.floor((i-1)/2)"}),"\n",(0,l.jsxs)(e.li,{children:["\u5982\u679c 2*i+1","<=","n-1,\u5b83\u7684\u5de6\u5b50\u8282\u70b9\u7f16\u53f7\u4e3a 2*i+1"]}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c 2*i+1>n-1,\u5b83\u65e0\u5de6\u5b50\u8282\u70b9"}),"\n",(0,l.jsxs)(e.li,{children:["\u5982\u679c 2*i+2","<=","n-1,\u5b83\u7684\u53f3\u5b50\u8282\u70b9\u7f16\u53f7\u4e3a 2*i+2"]}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c 2*i+2>n-1,\u5b83\u65e0\u53f3\u5b50\u8282\u70b9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6838\u5fc3\u4ee3\u7801",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:"import { Comparator } from '@/shared';\nimport { repeat } from 'lodash';\n/** \u8282\u70b9\u7684\u5ea6 */\nexport type BinaryTreeNodeDegree = 0 | 1 | 2;\n/** \u8282\u70b9\u662f\u7236\u8282\u70b9\u7684\u5de6\u53f3\u5b50\u6811 */\nexport enum BinaryTreeNodeChildPosition {\n  LEFT = 'left',\n  RIGHT = 'right',\n}\nexport const reverseBinaryTreeNodeChildPosition = (pos: BinaryTreeNodeChildPosition) =>\n  pos === BinaryTreeNodeChildPosition.LEFT\n    ? BinaryTreeNodeChildPosition.RIGHT\n    : BinaryTreeNodeChildPosition.LEFT;\n/** \u4e8c\u53c9\u6811\u8282\u70b9 */\nexport class BinaryTreeNode<T> {\n  /** \u6811\u7684\u5ea6 */\n  get degree(): BinaryTreeNodeDegree {\n    if (this.left !== null && this.right !== null) return 2;\n    else if (this.left !== null || this.right !== null) return 1;\n    else return 0;\n  }\n  /** \u662f\u7236\u8282\u70b9\u7684\u5de6\u5b50\u8282\u70b9 */\n  get isLeftChild(): boolean {\n    return !!(this.parent?.left === this);\n  }\n  /** \u662f\u7236\u8282\u70b9\u7684\u53f3\u5b50\u8282\u70b9 */\n  get isRightChild(): boolean {\n    return !!(this.parent?.right === this);\n  }\n  get childPosition(): BinaryTreeNodeChildPosition {\n    return this.isLeftChild ? BinaryTreeNodeChildPosition.LEFT : BinaryTreeNodeChildPosition.RIGHT;\n  }\n  get sibling(): BinaryTreeNode<T> | null {\n    return this.parent === null\n      ? null\n      : this.parent[reverseBinaryTreeNodeChildPosition(this.childPosition)];\n  }\n  constructor(\n    /** \u8282\u70b9\u50a8\u5b58\u7684\u503c */\n    public val: T,\n    /** \u7236\u8282\u70b9 */\n    public parent: BinaryTreeNode<T> | null = null,\n    /** \u5de6\u5b50\u8282\u70b9 */\n    public left: BinaryTreeNode<T> | null = null,\n    /** \u53f3\u5b50\u8282\u70b9 */\n    public right: BinaryTreeNode<T> | null = null\n  ) {}\n  /** \u4ece\u7236\u8282\u70b9\u79fb\u9664\u81ea\u5df1 */\n  remove() {\n    if (this.parent === null) return;\n    this.parent[this.childPosition] = null;\n  }\n  /** \u540e\u9a71\u8282\u70b9 */\n  successor(): BinaryTreeNode<T> | null {\n    // \u5982\u679c\u6ca1\u6709\u53f3\u8282\u70b9\u65f6\u627e\u662f\u7236\u8282\u70b9\u5de6\u8282\u70b9\u7684\u7956\u5148\u8282\u70b9\n    if (this.right === null) {\n      let node: BinaryTreeNode<T> | null = this;\n      while (node.parent !== null && node.isRightChild) node = node.parent;\n      return node.parent;\n    }\n    let successor = this.right;\n    while (successor.left !== null) successor = successor.left;\n    return successor;\n  }\n  /** \u524d\u9a71\u8282\u70b9 */\n  predecessor(): BinaryTreeNode<T> | null {\n    // \u5982\u679c\u6ca1\u6709\u5de6\u8282\u70b9\u65f6\u627e\u662f\u7236\u8282\u70b9\u53f3\u8282\u70b9\u7684\u7956\u5148\u8282\u70b9\n    if (this.left === null) {\n      let node: BinaryTreeNode<T> | null = this;\n      while (node.parent !== null && node.isLeftChild) node = node.parent;\n      return node.parent;\n    }\n    let predecessor = this.left;\n    while (predecessor.right !== null) predecessor = predecessor.right;\n    return predecessor;\n  }\n  toString(): string {\n    return `${this.val}`;\n  }\n}\nexport abstract class BinaryTree<T> {\n  protected root: BinaryTreeNode<T> | null = null;\n  protected _size = 0;\n  get size() {\n    return this._size;\n  }\n  get empty() {\n    return this.size === 0;\n  }\n  constructor(protected compare: Comparator<T>) {}\n  protected abstract createNode(\n    val: T,\n    parent: BinaryTreeNode<T> | null,\n    left: BinaryTreeNode<T> | null,\n    right: BinaryTreeNode<T> | null\n  ): BinaryTreeNode<T>;\n  clear() {\n    this.root = null;\n    this._size = 0;\n  }\n  /**\n   * \u524d\u5e8f\u904d\u5386\n   * \u5148\u8bfb\u53d6val\u503c\uff0c\u518d\u904d\u5386\u5de6\u8282\u70b9\uff0c\u518d\u904d\u5386\u53f3\u8282\u70b9\n   */\n  preorder(): T[] {\n    return this._preorder(this.root, []);\n  }\n  protected _preorder(node: BinaryTreeNode<T> | null, queue: T[]): T[] {\n    if (node === null) return queue;\n    queue.push(node.val);\n    this._preorder(node.left, queue);\n    this._preorder(node.right, queue);\n    return queue;\n  }\n  /**\n   * \u4e2d\u5e8f\u904d\u5386\n   * \u5148\u904d\u5386\u5de6\u8282\u70b9\uff0c\u518d\u8bfb\u53d6val\u503c\uff0c\u518d\u904d\u5386\u53f3\u8282\u70b9\n   */\n  inorder(): T[] {\n    return this._inorder(this.root, []);\n  }\n  protected _inorder(node: BinaryTreeNode<T> | null, queue: T[]): T[] {\n    if (node === null) return queue;\n    this._inorder(node.left, queue);\n    queue.push(node.val);\n    this._inorder(node.right, queue);\n    return queue;\n  }\n  /**\n   * \u540e\u5e8f\u904d\u5386\n   * \u5148\u904d\u5386\u5de6\u8282\u70b9\uff0c\u518d\u904d\u5386\u53f3\u8282\u70b9\uff0c\u518d\u8bfb\u53d6val\u503c\n   */\n  postorder(): T[] {\n    return this._postorder(this.root, []);\n  }\n  protected _postorder(node: BinaryTreeNode<T> | null, queue: T[]): T[] {\n    if (node === null) return queue;\n    this._postorder(node.left, queue);\n    this._postorder(node.right, queue);\n    queue.push(node.val);\n    return queue;\n  }\n  /**\n   * \u5c42\u5e8f\u904d\u5386\n   * \u6309\u884c\u904d\u5386\u6811\n   */\n  levelOrder(): T[] {\n    const list: T[] = [];\n    if (this.root === null) return list;\n    const queue: BinaryTreeNode<T>[] = [this.root];\n    while (queue.length !== 0) {\n      const node = queue.shift()!;\n      list.push(node.val);\n      node.left && queue.push(node.left);\n      node.right && queue.push(node.right);\n    }\n    return list;\n  }\n  //\u251c\u2502\u2500\u2514\u250c\n  print(): string {\n    return this.root === null ? '' : this._print(this.root);\n  }\n  private _print(node: BinaryTreeNode<T>, prefix = ''): string {\n    const left = node.left;\n    const right = node.right;\n    const nodeStr = node.toString();\n    const halfLength = (nodeStr.length + (prefix === '' ? 0 : 3)) >> 1;\n    const blankStr = repeat(' ', halfLength);\n    const lineStr = repeat('\u2500', halfLength);\n    prefix += blankStr;\n    let str = nodeStr + `\\n`;\n    if (right !== null) {\n      str +=\n        prefix +\n        (left === null ? '\u2514' : '\u251c') +\n        lineStr +\n        ' R ' +\n        this._print(right, `${prefix}${left === null ? ' ' : '\u2502'}${blankStr}`);\n    }\n    if (left !== null) {\n      str += `${prefix}\u2514${lineStr}` + ' L ' + this._print(left, `${prefix}${blankStr} `);\n    }\n    return str;\n  }\n}\n"})})]})}function c(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},31503:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>d});var i=r(30758);const l={},s=i.createContext(l);function t(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);