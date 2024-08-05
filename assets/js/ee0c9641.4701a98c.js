"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[28634],{72398:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var i=t(86070),o=t(25710);const r="/**\n * \u5e76\u67e5\u96c6\u8282\u70b9\n */\nexport class UnionFindSetNode<T> {\n    /** \u6240\u5f15\u7528\u5f97\u8282\u70b9\u6570 */\n    size = 1;\n    /** \u7236\u8282\u70b9 */\n    parent: UnionFindSetNode<T> = this;\n    constructor(public val: T) {}\n}\nexport class UnionFindSet<T> {\n    private _size = 0;\n    /** \u5305\u542b\u7684\u96c6\u5408\u6570 */\n    get size() {\n        return this._size;\n    }\n    /** \u96c6\u5408\u50a8\u5b58 */\n    map = new Map<T, UnionFindSetNode<T>>();\n    /** \u6dfb\u52a0\u65b0\u8282\u70b9 */\n    add(val: T) {\n        if (this.map.has(val)) return;\n        this.map.set(val, new UnionFindSetNode(val));\n        this._size++;\n    }\n    /** \u6bd4\u8f83\u4e24\u4e2a\u8282\u70b9\u662f\u5426\u5c5e\u4e8e\u540c\u4e00\u8282\u70b9 */\n    same(val1: T, val2: T) {\n        const root1 = this.find(val1);\n        const root2 = this.find(val2);\n        return root1 && root2 ? root1 === root2 : false;\n    }\n    /** \u67e5\u627e\u8282\u70b9\u7684\u6839\u8282\u70b9 */\n    find(val: T): T | null {\n        return this.findRoot(val)?.val ?? null;\n    }\n    /** \u5408\u5e76\u4e24\u4e2a\u8282\u70b9 */\n    union(val1: T, val2: T) {\n        let root1: UnionFindSetNode<T> = this.findRoot(val1)!;\n        let root2: UnionFindSetNode<T> = this.findRoot(val2)!;\n        if (!root1 || !root2 || root1 === root2) return;\n        this._size--;\n        if (root1.size < root2.size) [root1, root2] = [root2, root1];\n        root2.parent = root1;\n        root1.size += root2.size;\n        root2.size = 1;\n    }\n    private findRoot(val: T): UnionFindSetNode<T> | null {\n        let node: UnionFindSetNode<T> = this.map.get(val)!;\n        if (!node) return null;\n        while (node.parent !== node) {\n            node.parent = node.parent.parent;\n            node = node.parent;\n        }\n        return node;\n    }\n}\n";var s=t(32576);const l={},d="\u5e76\u67e5\u96c6(UnionFindSet)",a={id:"\u6570\u636e\u7ed3\u6784/\u5e76\u67e5\u96c6/\u5e76\u67e5\u96c6",title:"\u5e76\u67e5\u96c6(UnionFindSet)",description:"\u4e5f\u53eb\u505a\u4e0d\u76f8\u4ea4\u96c6\u5408(Disjoint Set)",source:"@site/docs/\u6570\u636e\u7ed3\u6784/\u5e76\u67e5\u96c6/\u5e76\u67e5\u96c6.mdx",sourceDirName:"\u6570\u636e\u7ed3\u6784/\u5e76\u67e5\u96c6",slug:"/\u6570\u636e\u7ed3\u6784/\u5e76\u67e5\u96c6/",permalink:"/web/site/docs/\u6570\u636e\u7ed3\u6784/\u5e76\u67e5\u96c6/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u4e8c\u53c9\u5806(BinaryHeap)",permalink:"/web/site/docs/\u6570\u636e\u7ed3\u6784/\u5806/\u4e8c\u53c9\u5806"},next:{title:"\u6620\u5c04(Map)",permalink:"/web/site/docs/\u6570\u636e\u7ed3\u6784/\u6620\u5c04/"}},c={},u=[{value:"\u4e24\u4e2a\u6838\u5fc3\u64cd\u4f5c",id:"\u4e24\u4e2a\u6838\u5fc3\u64cd\u4f5c",level:2},{value:"\u4e24\u79cd\u5e38\u89c1\u901f\u5f55",id:"\u4e24\u79cd\u5e38\u89c1\u901f\u5f55",level:2},{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801",level:2}];function h(n){const e={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u5e76\u67e5\u96c6unionfindset",children:"\u5e76\u67e5\u96c6(UnionFindSet)"}),"\n",(0,i.jsx)(e.p,{children:"\u4e5f\u53eb\u505a\u4e0d\u76f8\u4ea4\u96c6\u5408(Disjoint Set)"}),"\n",(0,i.jsx)(e.h2,{id:"\u4e24\u4e2a\u6838\u5fc3\u64cd\u4f5c",children:"\u4e24\u4e2a\u6838\u5fc3\u64cd\u4f5c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u67e5\u627e(Find):\u67e5\u627e\u5143\u7d20\u6240\u5728\u7684\u96c6\u5408(\u6307\u5e7f\u4e49\u7684\u6570\u636e\u96c6\u5408)"}),"\n",(0,i.jsx)(e.li,{children:"\u5408\u5e76(Union):\u5c06\u4e24\u4e2a\u5143\u7d20\u6240\u5728\u7684\u96c6\u5408\u5408\u5e76\u4e3a\u4e00\u4e2a\u96c6\u5408"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4e24\u79cd\u5e38\u89c1\u901f\u5f55",children:"\u4e24\u79cd\u5e38\u89c1\u901f\u5f55"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Quick Find\n\u67e5\u627e(Find) \u65f6\u95f4\u590d\u6742\u5ea6",":O","(1)\n\u5408\u5e76(Union) \u65f6\u95f4\u590d\u6742\u5ea6",":O","(n)"]}),"\n",(0,i.jsxs)(e.li,{children:["Quick Union\n\u67e5\u627e(Find) \u65f6\u95f4\u590d\u6742\u5ea6",":O","(logn)\n\u5408\u5e76(Union) \u65f6\u95f4\u590d\u6742\u5ea6",":O","(logn)"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6838\u5fc3\u4ee3\u7801",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,i.jsx)(s.A,{language:"tsx",children:r})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}}}]);