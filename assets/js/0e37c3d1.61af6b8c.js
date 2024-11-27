"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[44871],{41800:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"\u6570\u636e\u7ed3\u6784/\u6811/\u7ea2\u9ed1\u6811","title":"\u7ea2\u9ed1\u6811(RedBlackTree)","description":"\u81ea\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811\u4e4b\u4e00\uff0c\u4e0e 4 \u9636 B \u6811\u5177\u6709\u7b49\u4ef7\u6027","source":"@site/docs/\u6570\u636e\u7ed3\u6784/\u6811/\u7ea2\u9ed1\u6811.mdx","sourceDirName":"\u6570\u636e\u7ed3\u6784/\u6811","slug":"/\u6570\u636e\u7ed3\u6784/\u6811/\u7ea2\u9ed1\u6811","permalink":"/docs/\u6570\u636e\u7ed3\u6784/\u6811/\u7ea2\u9ed1\u6811","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811(BlanceBinarySearchTree)","permalink":"/docs/\u6570\u636e\u7ed3\u6784/\u6811/\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811"},"next":{"title":"\u94fe\u8868(LinkedList)","permalink":"/docs/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/"}}');var l=t(86070),o=t(31503);const i={},s="\u7ea2\u9ed1\u6811(RedBlackTree)",a={},d=[{value:"\u5fc5\u987b\u6ee1\u8db3\u7684 5 \u4e2a\u6027\u8d28",id:"\u5fc5\u987b\u6ee1\u8db3\u7684-5-\u4e2a\u6027\u8d28",level:2},{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801",level:2},{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801-1",level:2},{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801-2",level:2}];function p(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u7ea2\u9ed1\u6811redblacktree",children:"\u7ea2\u9ed1\u6811(RedBlackTree)"})}),"\n",(0,l.jsx)(e.p,{children:"\u81ea\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811\u4e4b\u4e00\uff0c\u4e0e 4 \u9636 B \u6811\u5177\u6709\u7b49\u4ef7\u6027"}),"\n",(0,l.jsx)(e.h2,{id:"\u5fc5\u987b\u6ee1\u8db3\u7684-5-\u4e2a\u6027\u8d28",children:"\u5fc5\u987b\u6ee1\u8db3\u7684 5 \u4e2a\u6027\u8d28"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u8282\u70b9\u53ea\u80fd\u662f Red \u6216 Black"}),"\n",(0,l.jsx)(e.li,{children:"\u6839\u8282\u70b9\u662f Black"}),"\n",(0,l.jsx)(e.li,{children:"\u53f6\u5b50\u8282\u70b9(\u9050\u60f3\u8282\u70b9)\u662f Black"}),"\n",(0,l.jsx)(e.li,{children:"Red \u8282\u70b9\u7684\u5b50\u8282\u70b9\u90fd\u662f Black"}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Red \u8282\u70b9\u7684\u7236\u8282\u70b9\u90fd\u662f Black"}),"\n",(0,l.jsx)(e.li,{children:"\u6839\u8282\u70b9\u5230\u53f6\u5b50\u8282\u70b9\u7684\u6240\u6709\u8def\u5f84\u4e0a\u4e0d\u80fd\u6709\u4e24\u4e2a\u8fde\u7eed\u7684 Red \u8282\u70b9"}),"\n"]}),"\n",(0,l.jsxs)(e.ol,{start:"5",children:["\n",(0,l.jsx)(e.li,{children:"\u4ece\u4efb\u4e00\u8282\u70b9\u5230\u53f6\u5b50\u8282\u70b9\u7684\u6240\u6709\u8def\u5f84\u90fd\u5305\u542b\u76f8\u540c\u6570\u76ee\u7684 Black \u8282\u70b9"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6838\u5fc3\u4ee3\u7801",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:"import { BlanceBinarySearchTree } from './blanceBinarySearchTree';\nimport { BinaryTreeNode } from './binaryTree';\nimport { IBinarySearchTree } from './binarySearchTree';\nexport enum Color {\n  RED,\n  BLACK,\n}\nconst getColor = (node: RBTreeNode<any> | null) => (node === null ? Color.BLACK : node.color);\nconst isRed = (node: RBTreeNode<any> | null) => getColor(node) === Color.RED;\nconst isBlack = (node: RBTreeNode<any> | null) => getColor(node) === Color.BLACK;\n\nexport interface IRBTree<T> extends IBinarySearchTree<T> {\n  print: () => string;\n  levelOrder: () => T[];\n}\nexport class RBTreeNode<T> extends BinaryTreeNode<T> {\n  private _color = Color.RED;\n  get color() {\n    return this._color;\n  }\n  get sibling() {\n    return super.sibling as RBTreeNode<T>;\n  }\n  /* istanbul ignore next */\n  constructor(\n    public val: T,\n    public parent: RBTreeNode<T> | null = null,\n    public left: RBTreeNode<T> | null = null,\n    public right: RBTreeNode<T> | null = null\n  ) {\n    super(val, parent, left, right);\n  }\n  setRed() {\n    return this.setColor(Color.RED);\n  }\n  setBlack() {\n    return this.setColor(Color.BLACK);\n  }\n  setColor(color: Color) {\n    this._color = color;\n    return this;\n  }\n  toString() {\n    return super.toString() + (isRed(this) ? '(R)' : '');\n  }\n}\nexport class RBTree<T> extends BlanceBinarySearchTree<T> implements IRBTree<T> {\n  protected createNode(\n    val: T,\n    parent: BinaryTreeNode<T> | null = null,\n    left: BinaryTreeNode<T> | null = null,\n    right: BinaryTreeNode<T> | null = null\n  ): BinaryTreeNode<T> {\n    return new RBTreeNode(\n      val,\n      parent as RBTreeNode<T> | null,\n      left as RBTreeNode<T> | null,\n      right as RBTreeNode<T> | null\n    );\n  }\n  protected afterAdd(node: RBTreeNode<T>) {\n    let parent = node.parent;\n    // \u5982\u679c\u7236\u8282\u70b9\u4e0d\u5b58\u5728\uff0c\u5219\u6dfb\u52a0\u7684\u662f\u6839\u8282\u70b9\uff0c\u76f4\u63a5\u67d3\u9ed1\n    if (parent === null) {\n      node.setBlack();\n      return;\n    }\n    // \u5982\u679c\u7236\u8282\u70b9\u662f\u9ed1\u8282\u70b9\uff0c\u5219\u4e0d\u505a\u5904\u7406\n    if (isBlack(parent)) return;\n    const grandParent = parent.parent!.setRed();\n    const uncle = parent.sibling;\n    // \u5982\u679c\u53d4\u7236\u8282\u70b9\u662f\u7ea2\u8272\uff0c\u5219\u8fdb\u884c\u8f6c\u6362\u540e\u4e0a\u6ea2\n    if (isRed(uncle)) {\n      parent.setBlack();\n      uncle.setBlack();\n      this.afterAdd(grandParent);\n      return;\n    }\n    // \u5224\u65ad\u65cb\u8f6c\n    if (parent.isLeftChild) {\n      if (node.isRightChild) {\n        this.rotateLeft(parent);\n        [node, parent] = [parent, node];\n      }\n      this.rotateRight(grandParent);\n    } else {\n      if (node.isLeftChild) {\n        this.rotateRight(parent);\n        [node, parent] = [parent, node];\n      }\n      this.rotateLeft(grandParent);\n    }\n    parent.setBlack();\n    node.setRed();\n  }\n  protected afterRemove(node: RBTreeNode<T>) {\n    // \u5982\u679c\u5220\u9664\u7684\u662f\u7ea2\u8272\u8282\u70b9\uff0c\u5219\u67d3\u9ed1\u540e(\u8003\u8651\u8282\u70b9\u53ef\u80fd\u662f\u88ab\u5220\u9664\u8282\u70b9\u7684\u552f\u4e00\u5b50\u8282\u70b9\u65f6)\u4e0d\u505a\u5904\u7406\n    if (isRed(node)) {\n      node.setBlack();\n      return;\n    }\n    const parent = node.parent;\n    // \u5982\u679c\u5220\u9664\u7684\u65f6\u6839\u8282\u70b9\u5219\u4e0d\u52a8\n    if (parent === null) return;\n    // \u5224\u65ad\u5220\u9664\u7684\u8282\u70b9\u662f\u5426\u65f6\u5de6\u5b50\u8282\u70b9\uff08\u8003\u8651\u53ef\u80fd\u662f\u4e0b\u6ea2\u4ea7\u751f\u7684\u5220\u9664\u548c\u6b63\u5e38\u5220\u9664\uff09\n    const isLeftChild = parent.left === null || node.isLeftChild;\n    let sibling = isLeftChild ? parent.right! : parent.left!;\n    if (isLeftChild) {\n      if (isRed(sibling)) {\n        this.rotateLeft(parent);\n        sibling.setBlack();\n        parent.setRed();\n        sibling = parent.right!;\n      }\n      if (isBlack(sibling.left) && isBlack(sibling.right)) {\n        const blackState = isBlack(parent);\n        sibling.setRed();\n        parent.setBlack();\n        blackState && this.afterRemove(parent);\n      } else {\n        if (isBlack(sibling.right)) {\n          this.rotateRight(sibling);\n          sibling = sibling.parent!;\n        }\n        this.rotateLeft(parent);\n        sibling.setColor(parent.color);\n        parent.setBlack();\n        sibling.right?.setBlack();\n      }\n    } else {\n      // \u5982\u679c\u53d4\u7236\u8282\u70b9\u662f\u7ea2\u8272\uff0c\u5219\u8fdb\u884c\u65cb\u8f6c\u4f7f\u53d4\u7236\u8282\u70b9\u67d3\u9ed1\n      if (isRed(sibling)) {\n        this.rotateRight(parent);\n        sibling.setBlack();\n        parent.setRed();\n        sibling = parent.left!;\n      }\n      // \u5982\u679c\u5de6\u53f3\u5b50\u6811\u90fd\u4e3a\u9ed1\uff0c\u5219\u65e0\u771f\u5b9e\u5b50\u8282\u70b9\uff0c\u5219\u4f7f\u7236\u8282\u70b9\u4e0b\u6ea2\n      if (isBlack(sibling.left) && isBlack(sibling.right)) {\n        const blackState = isBlack(parent);\n        sibling.setRed();\n        parent.setBlack();\n        blackState && this.afterRemove(parent);\n      } else {\n        // \u5982\u679c\u5144\u5f1f\u8282\u70b9\u7684\u5de6\u8282\u70b9\u662f\u9ed1\u8272\uff0c\u5219\u8fdb\u884c\u65cb\u8f6c\n        if (isBlack(sibling.left)) {\n          this.rotateLeft(sibling);\n          sibling = sibling.parent!;\n        }\n        this.rotateRight(parent);\n        sibling.setColor(parent.color);\n        sibling.left?.setBlack();\n        parent.setBlack();\n      }\n    }\n  }\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u6838\u5fc3\u4ee3\u7801-1",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:"/* istanbul ignore file */\nimport { repeat } from 'lodash';\nimport { IRBTree } from './rbTree';\nconst BLACK = false;\nconst RED = true;\ntype Color = boolean;\nconst isRed = (node: RBTreeNode2<any> | null) => node?.isRed ?? false;\nconst isBlack = (node: RBTreeNode2<any> | null) => node?.isBlack ?? true;\nexport class RBTreeNode2<T> {\n  private _color: Color = RED;\n  get color() {\n    return this._color;\n  }\n  get isRed() {\n    return this.color === RED;\n  }\n  get isBlack() {\n    return this.color === BLACK;\n  }\n  get childSize() {\n    return this.left === null && this.right === null\n      ? 0\n      : this.left === null && this.right !== null\n      ? 1\n      : this.left !== null && this.right === null\n      ? 1\n      : 2;\n  }\n  left: RBTreeNode2<T> | null = null;\n  right: RBTreeNode2<T> | null = null;\n  constructor(public val: T, public parent: RBTreeNode2<T> | null = null) {}\n  toRed() {\n    return this.toColor(RED);\n  }\n  toBlack() {\n    return this.toColor(BLACK);\n  }\n  toColor(v: Color) {\n    this._color = v;\n    return this;\n  }\n  toString() {\n    return `${this.val}\u3010${this.isRed ? 'R' : 'B'}\u3011`;\n  }\n}\nexport class RBTree2<T> implements IRBTree<T> {\n  private _root: RBTreeNode2<T> | null = null;\n  get root() {\n    return this._root;\n  }\n  private _size = 0;\n  get size() {\n    return this._size;\n  }\n  get empty() {\n    return this.size === 0;\n  }\n  constructor(private compare: (t1: T, t2: T) => number) {}\n  clear() {\n    this._root = null;\n  }\n  contains(v: T): boolean {\n    return this.findNode(this.root, v)?.val !== null;\n  }\n  private findNode(root: RBTreeNode2<T> | null, v: T): RBTreeNode2<T> | null {\n    if (root === null) return null;\n    if (root.val === v) return root;\n    if (this.compare(root.val, v) > 0) return this.findNode(root.left, v);\n    else return this.findNode(root.right, v);\n  }\n  add(v: T): void {\n    const oldNode = this.findNode(this.root, v);\n    if (oldNode !== null) {\n      oldNode.val = v;\n      return;\n    }\n    if (this.root === null) {\n      const node = new RBTreeNode2(v);\n      this._root = node;\n      this._size++;\n      this.afterAdd(node);\n      return;\n    }\n    let parent = this.root;\n    let pos: 'left' | 'right' = 'left';\n    while (parent) {\n      const compare = this.compare(parent.val, v);\n      if (compare > 0) {\n        if (parent.left === null) break;\n        parent = parent.left;\n      } else {\n        if (parent.right === null) {\n          pos = 'right';\n          break;\n        }\n        parent = parent.right;\n      }\n    }\n    const node = new RBTreeNode2(v, parent);\n    parent[pos] = node;\n    this._size++;\n    this.afterAdd(node);\n  }\n  afterAdd(node: RBTreeNode2<T>): void {\n    let parent = node.parent;\n    if (parent === null) {\n      node.toBlack();\n      return;\n    }\n    if (isBlack(parent)) return;\n    const grand = parent.parent!;\n    const sibling = grand.left === parent ? grand.right! : grand.left!;\n    if (isRed(sibling)) {\n      node.toRed();\n      parent.toBlack();\n      sibling.toBlack();\n      this.afterAdd(grand.toRed());\n      return;\n    }\n    if (grand.left === parent) {\n      if (parent.right === node) {\n        this.rotateL(parent);\n        [parent, node] = [node, parent];\n      }\n      this.rotateR(grand);\n    } else {\n      if (parent.left === node) {\n        this.rotateR(parent);\n        [parent, node] = [node, parent];\n      }\n      this.rotateL(grand);\n    }\n    parent.toBlack();\n    node.toRed();\n    grand.toRed();\n    return;\n  }\n  remove(v: T): void {\n    let node = this.findNode(this.root, v);\n    if (node === null) return;\n    if (this.size === 1) {\n      this._root = null;\n      this._size = 0;\n      return;\n    }\n    if (node.childSize === 2) {\n      const successor = this.successor(node)!;\n      [node.val, successor.val] = [successor.val, node.val];\n      node = successor;\n    }\n    if (node.childSize === 0) {\n      const parent = node.parent!;\n      const pos = parent.left === node ? 'left' : 'right';\n      parent[pos] = null;\n      this._size--;\n      this.afterRemove(node);\n      return;\n    }\n    const child = node.left ?? node.right!;\n    const parent = node.parent!;\n    if (parent === null) {\n      this._root = child;\n      child.parent = null;\n      this._size--;\n      this.afterRemove(node);\n      return;\n    }\n    const pos = parent.left === node ? 'left' : 'right';\n    parent[pos] = child;\n    child.parent = parent;\n    this.afterRemove(child);\n  }\n  afterRemove(node: RBTreeNode2<T>): void {\n    if (node.isRed) {\n      node.toBlack();\n      return;\n    }\n    let parent = node.parent;\n    if (parent === null) return;\n    const leftChild = parent.left === null || parent.left === node;\n    let sibling = leftChild ? parent.right! : parent.left!;\n    if (leftChild) {\n      if (sibling.isRed) {\n        this.rotateL(parent);\n        sibling.toBlack();\n        parent.toRed();\n        sibling = parent.right!;\n      }\n      if (sibling.childSize === 0) {\n        const parentIsBlack = parent.isBlack;\n        sibling.toRed();\n        parent.toBlack();\n        parentIsBlack && this.afterRemove(parent);\n      } else {\n        if (isBlack(sibling.right)) {\n          this.rotateR(sibling);\n          sibling = sibling.parent!;\n        }\n        this.rotateL(parent);\n        sibling.toColor(parent.color);\n        sibling.right?.toBlack();\n        parent.toBlack();\n      }\n    } else {\n      if (sibling.isRed) {\n        this.rotateR(parent);\n        sibling.toBlack();\n        parent.toRed();\n        sibling = parent.left!;\n      }\n      if (isBlack(sibling.left) && isBlack(sibling.right)) {\n        const parentIsBlack = parent.isBlack;\n        sibling.toRed();\n        parent.toBlack();\n        parentIsBlack && this.afterRemove(parent);\n      } else {\n        if (isBlack(sibling.left)) {\n          this.rotateL(sibling);\n          sibling = sibling.parent!;\n        }\n        this.rotateR(parent);\n        sibling.toColor(parent.color);\n        sibling.left?.toBlack();\n        parent.toBlack();\n      }\n    }\n  }\n  private successor(node: RBTreeNode2<T>): RBTreeNode2<T> | null {\n    if (node.right !== null) {\n      let successor = node.right;\n      while (successor.left) successor = successor.left;\n      return successor;\n    }\n    let successor = node;\n    while (successor.parent !== null && successor.parent.right === successor)\n      successor = successor.parent;\n    return successor;\n  }\n  private rotateL(grand: RBTreeNode2<T>) {\n    const root = grand.parent;\n    const parent = grand.right!;\n    if (root === null) this._root = parent;\n    else {\n      const pos = root.left === grand ? 'left' : 'right';\n      root[pos] = parent;\n    }\n    grand.right = parent.left;\n    if (parent.left) parent.left.parent = grand;\n    parent.left = grand;\n    grand.parent = parent;\n    parent.parent = root;\n  }\n  private rotateR(grand: RBTreeNode2<T>) {\n    const root = grand.parent;\n    const parent = grand.left!;\n    if (root === null) this._root = parent;\n    else {\n      const pos = root.left === grand ? 'left' : 'right';\n      root[pos] = parent;\n    }\n    grand.left = parent.right;\n    if (parent.right) parent.right.parent = grand;\n    parent.right = grand;\n    grand.parent = parent;\n    parent.parent = root;\n  }\n  print(): string {\n    return this.root === null ? '' : this._print(this.root);\n  }\n  private _print(node: RBTreeNode2<T>, prefix = ''): string {\n    const left = node.left;\n    const right = node.right;\n    const nodeStr = node.toString();\n    const halfLength = (nodeStr.length + (prefix === '' ? 0 : 3)) >> 1;\n    const blankStr = repeat(' ', halfLength);\n    const lineStr = repeat('\u2500', halfLength);\n    prefix += blankStr;\n    let str = nodeStr + `\\n`;\n    if (right !== null) {\n      str +=\n        prefix +\n        (left === null ? '\u2514' : '\u251c') +\n        lineStr +\n        ' R ' +\n        this._print(right, `${prefix}${left === null ? ' ' : '\u2502'}${blankStr}`);\n    }\n    if (left !== null) {\n      str += `${prefix}\u2514${lineStr}` + ' L ' + this._print(left, `${prefix}${blankStr} `);\n    }\n    return str;\n  }\n  levelOrder(): T[] {\n    const list: T[] = [];\n    if (this.root === null) return list;\n    const queue: RBTreeNode2<T>[] = [this.root];\n    while (queue.length !== 0) {\n      const node = queue.shift()!;\n      list.push(node.val);\n      node.left && queue.push(node.left);\n      node.right && queue.push(node.right);\n    }\n    return list;\n  }\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u6838\u5fc3\u4ee3\u7801-2",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:"/* istanbul ignore file */\nimport { repeat } from 'lodash';\nimport { IRBTree } from './rbTree';\nconst RED = true;\nconst BLACK = false;\ntype Color = boolean;\nconst isRed = (node: RBTreeNode3<any> | null) => node?.color === RED;\nconst isBlack = (node: RBTreeNode3<any> | null) => node === null || node?.color === BLACK;\nconst setColor = (node: RBTreeNode3<any> | null, color: Color) => {\n  if (node) node.color = color;\n};\nconst setRed = (node: RBTreeNode3<any> | null) => setColor(node, RED);\nconst setBlack = (node: RBTreeNode3<any> | null) => setColor(node, BLACK);\nexport class RBTreeNode3<T> {\n  color = RED;\n  left: RBTreeNode3<T> | null = null;\n  right: RBTreeNode3<T> | null = null;\n  constructor(public val: T, public parent: RBTreeNode3<any> | null = null) {}\n  toString() {\n    return this.val + (isRed(this) ? '(R)' : '');\n  }\n}\nexport class RBTree3<T> implements IRBTree<T> {\n  private _size = 0;\n  get size() {\n    return this._size;\n  }\n  get empty() {\n    return this._size === 0;\n  }\n  private root: RBTreeNode3<T> | null = null;\n  constructor(private compare: (k1: T, k2: T) => number) {}\n  clear() {\n    this.root = null;\n    this._size = 0;\n  }\n  contains(key: T) {\n    return this.findNode(key) !== null;\n  }\n  add(key: T) {\n    let node = this.findNode(key);\n    if (this.root === null) {\n      this.root = node = new RBTreeNode3<T>(key);\n    } else {\n      let parent = this.root;\n      let pos = 'left';\n      while (parent !== null) {\n        const compare = this.compare(parent.val, key);\n        if (compare > 0) {\n          if (parent.left === null) break;\n          parent = parent.left;\n        } else {\n          if (parent.right === null) {\n            pos = 'right';\n            break;\n          }\n          parent = parent.right;\n        }\n      }\n      parent[pos] = node = new RBTreeNode3<T>(key, parent);\n    }\n    this._size++;\n    this.afterSet(node);\n  }\n  private afterSet(node: RBTreeNode3<T>) {\n    let parent = node.parent;\n    if (parent === null) {\n      setBlack(node);\n      return;\n    }\n    if (isBlack(parent)) return;\n    const grand = parent.parent!;\n    const sibling = grand.left === parent ? grand.right! : grand.left!;\n    if (isRed(sibling)) {\n      setBlack(parent);\n      setBlack(sibling);\n      setRed(grand);\n      this.afterSet(grand);\n      return;\n    }\n    if (grand.left === parent) {\n      if (parent.right === node) {\n        this.rotateL(parent);\n        [parent, node] = [node, parent];\n      }\n      this.rotateR(grand);\n    } else {\n      if (parent.left === node) {\n        this.rotateR(parent);\n        [parent, node] = [node, parent];\n      }\n      this.rotateL(grand);\n    }\n    setBlack(parent);\n    setRed(node);\n    setRed(grand);\n  }\n  remove(key: T) {\n    let node = this.findNode(key);\n    if (node === null) return;\n    if (node.left !== null && node.right !== null) {\n      const successor = this.successor(node);\n      [node.val, successor.val] = [successor.val, node.val];\n      node = successor;\n    }\n    const parent = node.parent!;\n    this._size--;\n    if (node.left === null && node.right === null) {\n      if (this.root === node) {\n        this.clear();\n        return;\n      }\n      const pos = parent.left === node ? 'left' : 'right';\n      parent[pos] = null;\n      this.afterRemove(node);\n      return;\n    }\n    const childNode = node.left ?? node.right!;\n    if (parent === null) this.root = childNode;\n    else {\n      const pos = parent.left === node ? 'left' : 'right';\n      parent[pos] = childNode;\n    }\n    childNode.parent = parent;\n    this.afterRemove(childNode);\n  }\n  private afterRemove(node: RBTreeNode3<T>) {\n    if (isRed(node)) {\n      setBlack(node);\n      return;\n    }\n    const parent = node.parent;\n    if (parent === null) return;\n    const leftChild = parent.left === null || parent.left === node;\n    let sibling = leftChild ? parent.right! : parent.left!;\n    if (leftChild) {\n      if (isRed(sibling)) {\n        this.rotateL(parent);\n        setBlack(sibling);\n        setRed(parent);\n        sibling = parent.right!;\n      }\n      if (isBlack(sibling.left) && isBlack(sibling.right)) {\n        const parentIsBlack = isBlack(parent);\n        setRed(sibling);\n        setBlack(parent);\n        parentIsBlack && this.afterRemove(parent);\n        return;\n      }\n      if (isBlack(sibling.right)) {\n        this.rotateR(sibling);\n        sibling = sibling.parent!;\n      }\n      this.rotateL(parent);\n      setColor(sibling, parent.color);\n      setBlack(parent);\n      setBlack(sibling.right);\n    } else {\n      if (isRed(sibling)) {\n        this.rotateR(parent);\n        setBlack(sibling);\n        setRed(parent);\n        sibling = parent.left!;\n      }\n      if (isBlack(sibling.left) && isBlack(sibling.right)) {\n        const parentIsBlack = isBlack(parent);\n        setRed(sibling);\n        setBlack(parent);\n        parentIsBlack && this.afterRemove(parent);\n        return;\n      }\n      if (isBlack(sibling.left)) {\n        this.rotateL(sibling);\n        sibling = sibling.parent!;\n      }\n      this.rotateR(parent);\n      setColor(sibling, parent.color);\n      setBlack(parent);\n      setBlack(sibling.left);\n    }\n  }\n  private successor(node: RBTreeNode3<T>) {\n    let successor = node.right!;\n    while (successor.left) successor = successor.left;\n    return successor;\n  }\n  private findNode(key: T, root = this.root): RBTreeNode3<T> | null {\n    if (root === null) return null;\n    const compare = this.compare(root.val, key);\n    if (compare > 0) return this.findNode(key, root.left);\n    if (compare < 0) return this.findNode(key, root.right);\n    return root;\n  }\n  private rotateL(grand: RBTreeNode3<T>) {\n    const root = grand.parent;\n    const parent = grand.right!;\n    if (root === null) this.root = parent;\n    else {\n      const pos = root.left === grand ? 'left' : 'right';\n      root[pos] = parent;\n    }\n    grand.right = parent.left;\n    if (parent.left) parent.left.parent = grand;\n    parent.left = grand;\n    grand.parent = parent;\n    parent.parent = root;\n  }\n  private rotateR(grand: RBTreeNode3<T>) {\n    const root = grand.parent;\n    const parent = grand.left!;\n    if (root === null) this.root = parent;\n    else {\n      const pos = root.left === grand ? 'left' : 'right';\n      root[pos] = parent;\n    }\n    grand.left = parent.right;\n    if (parent.right) parent.right.parent = grand;\n    parent.right = grand;\n    grand.parent = parent;\n    parent.parent = root;\n  }\n  print(): string {\n    return this.root === null ? '' : this._print(this.root);\n  }\n  private _print(node: RBTreeNode3<T>, prefix = ''): string {\n    const left = node.left;\n    const right = node.right;\n    const nodeStr = node.toString();\n    const halfLength = (nodeStr.length + (prefix === '' ? 0 : 3)) >> 1;\n    const blankStr = repeat(' ', halfLength);\n    const lineStr = repeat('\u2500', halfLength);\n    prefix += blankStr;\n    let str = nodeStr + `\\n`;\n    if (right !== null) {\n      str +=\n        prefix +\n        (left === null ? '\u2514' : '\u251c') +\n        lineStr +\n        ' R ' +\n        this._print(right, `${prefix}${left === null ? ' ' : '\u2502'}${blankStr}`);\n    }\n    if (left !== null) {\n      str += `${prefix}\u2514${lineStr}` + ' L ' + this._print(left, `${prefix}${blankStr} `);\n    }\n    return str;\n  }\n  levelOrder(): T[] {\n    const list: T[] = [];\n    if (this.root === null) return list;\n    const queue: RBTreeNode3<T>[] = [this.root];\n    while (queue.length !== 0) {\n      const node = queue.shift()!;\n      list.push(node.val);\n      node.left && queue.push(node.left);\n      node.right && queue.push(node.right);\n    }\n    return list;\n  }\n}\n"})})]})}function c(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(p,{...n})}):p(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>s});var r=t(30758);const l={},o=r.createContext(l);function i(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);