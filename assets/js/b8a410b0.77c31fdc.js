"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[61059],{8479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var s=t(86070),c=t(25710);const l={},o="460.LFU\u7f13\u5b58",i={id:"leetcode/401-500/LFU\u7f13\u5b58",title:"460.LFU\u7f13\u5b58",description:"\u94fe\u63a5\uff1a460.LFU\u7f13\u5b58",source:"@site/docs/leetcode/401-500/460.LFU\u7f13\u5b58.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/LFU\u7f13\u5b58",permalink:"/docs/leetcode/401-500/LFU\u7f13\u5b58",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:460,frontMatter:{},sidebar:"journal",previous:{title:"459.\u91cd\u590d\u7684\u5b50\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/401-500/\u91cd\u590d\u7684\u5b50\u5b57\u7b26\u4e32"},next:{title:"461.\u6c49\u660e\u8ddd\u79bb",permalink:"/docs/leetcode/401-500/\u6c49\u660e\u8ddd\u79bb"}},d={},a=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function r(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"460lfu\u7f13\u5b58",children:"460.LFU\u7f13\u5b58"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/lfu-cache",children:"460.LFU\u7f13\u5b58"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u54c8\u5e0c\u8868\u3001\u94fe\u8868\u3001\u53cc\u5411\u94fe\u8868",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u4e3a \u6700\u4e0d\u7ecf\u5e38\u4f7f\u7528\uff08LFU\uff09\u7f13\u5b58\u7b97\u6cd5\u8bbe\u8ba1\u5e76\u5b9e\u73b0\u6570\u636e\u7ed3\u6784\u3002\u5b83\u5e94\u8be5\u652f\u6301\u4ee5\u4e0b\u64cd\u4f5c\uff1aget \u548c put\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-09"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1136ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a78.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f7f\u7528 Node \u50a8\u5b58\u6b21\u6570\u548c\u503c\uff0c\u8fdb\u884c\u5224\u65ad\uff0c\u96be\u70b9\u6ca1\u6709\u5c31\u662f\u7ec6\u8282\u9700\u8981\u8003\u8651\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"class Node {\n  count = 0;\n  value;\n  constructor(value) {\n    this.value = value;\n  }\n}\nclass LFUCache {\n  _capacity;\n  _cache = new Map();\n  newest = [];\n  constructor(capacity) {\n    this._capacity = capacity;\n  }\n  get(key) {\n    // console.log('====GET-' + key);\n    // console.log(this._cache);\n    if (this._capacity === 0 || !this._cache.has(key)) return -1;\n    const node = this._cache.get(key);\n    node.count++;\n    this.setNewest(key);\n    return node.value;\n  }\n  setNewest(key) {\n    if (this.newest[this.newest.length - 1] === key) return;\n    this.newest = this.newest.filter(v => v !== key);\n    this.newest.push(key);\n  }\n  getMinKey() {\n    const arr = [];\n    let minValue = Number.MAX_VALUE;\n    for (let [_, node] of this._cache) {\n      if (node.count < minValue) {\n        minValue = node.count;\n      }\n    }\n    for (let [key, node] of this._cache) {\n      if (node.count === minValue) arr.push(key);\n    }\n    return arr;\n  }\n  put(key, value) {\n    // console.log('====PUT-' + key + '-' + value);\n    // console.log(key, value);\n    if (this._capacity === 0) return;\n    if (this._cache.has(key)) {\n      const node = this._cache.get(key);\n      node.value = value;\n      node.count++;\n      this.setNewest(key);\n      return;\n    }\n    const node = new Node(value);\n    if (this._cache.size < this._capacity) {\n      this._cache.set(key, node);\n      this.setNewest(key);\n      return;\n    }\n    const mins = this.getMinKey();\n    if (mins.length === 1) {\n      this._cache.delete(mins[0]);\n      this._cache.set(key, node);\n      this.setNewest(key);\n      return;\n    }\n    // console.log('mins:' + mins);\n    // console.log('newest:' + this.newest);\n    for (let item of this.newest) {\n      if (mins.includes(item)) {\n        this._cache.delete(item);\n        this._cache.set(key, node);\n        this.setNewest(key);\n        return;\n      }\n    }\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-25"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a720ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a77.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u94fe\u8868\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class NodeBase:\n    def __init__(self, prev, next):\n        self.prev = prev\n        self.next = next\n\n    def append(self, prev):\n        next = prev.next\n        prev.next, next.prev, self.prev, self.next = self, self, prev, next\n        return self\n\n    def remove(self):\n        if self.prev:\n            self.prev.next, self.next.prev, self.next, self.prev = self.next, self.prev, None, None\n\nclass ListBase:\n    def __init__(self, cstr):\n        self.cstr = cstr\n        self.head = cstr()\n        self.tail = cstr()\n        self.head.next = self.tail\n        self.tail.prev = self.head\n    \n    def is_empty(self):\n        return self.head.next == self.tail\n\n\nclass Node(NodeBase):\n    def __init__(self, key=0, val=0, cnt=0, cntNode=None, prev=None, next=None):\n        self.key = key\n        self.val = val\n        self.cnt = cnt\n        self.cntNode = cntNode\n        NodeBase.__init__(self, prev, next)\n\n\nclass CntNode(NodeBase, ListBase):\n    def __init__(self, cnt = 0, prev=None, next=None):\n        self.cnt = cnt\n        ListBase.__init__(self, Node)\n        NodeBase.__init__(self, prev, next)\n\nclass LFUCache(ListBase):\n\n    def __init__(self, capacity: int):\n        self.cntCache = {}\n        self.cache = {}\n        self.capacity = capacity\n        self.size = 0\n        ListBase.__init__(self, CntNode)\n\n    def get_next_cntnode(self, node):\n        if node.next.cnt == node.cnt + 1:\n            return node.next\n        next = CntNode(node.cnt + 1)\n        next.append(node)\n        self.cntCache[next.cnt] = next\n        return next\n\n    def check_cntnode_empty(self, node):\n        if node.is_empty():\n            node.remove()\n            del self.cntCache[node.cnt]\n    \n    def upgrade_node(self, key: int, update):\n        node = self.cache[key]\n        update(node)\n        node.cnt += 1\n        nextCntNode = self.get_next_cntnode(node.cntNode)\n        node.remove()\n        if node.cntNode != self.head: self.check_cntnode_empty(node.cntNode)\n        node.append(nextCntNode.head)\n        node.cntNode = nextCntNode\n\n    def get(self, key: int) -> int:\n        if key not in self.cache:\n            return -1\n        self.upgrade_node(key, lambda node: node)\n        return self.cache[key].val\n\n    def put(self, key: int, value: int) -> None:\n        if key not in self.cache:\n            self.cache[key] = Node(key, value, 0, self.head)\n            self.size += 1\n            if self.size > self.capacity:\n                self.size -= 1\n                firstCntNode = self.head.next\n                removeNode = firstCntNode.tail.prev\n                removeNode.remove()\n                del self.cache[removeNode.key]\n                self.check_cntnode_empty(firstCntNode)\n            if self.head.next.cnt != 1:\n                self.cntCache[1] = CntNode(1).append(self.head)\n        def update(node): node.val = value\n        self.upgrade_node(key, update)\n"})})]})}function f(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(30758);const c={},l=s.createContext(c);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);