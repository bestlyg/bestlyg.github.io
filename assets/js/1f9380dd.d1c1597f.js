"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[27438],{57299:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var i=t(86070),r=t(25710);const d={},s="\u5355\u94fe\u8868(SingleLinkedList)",l={id:"\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u5355\u94fe\u8868",title:"\u5355\u94fe\u8868(SingleLinkedList)",description:"\u6838\u5fc3\u4ee3\u7801",source:"@site/docs/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u5355\u94fe\u8868.mdx",sourceDirName:"\u6570\u636e\u7ed3\u6784/\u94fe\u8868",slug:"/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u5355\u94fe\u8868",permalink:"/docs/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u5355\u94fe\u8868",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u94fe\u8868(LinkedList)",permalink:"/docs/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/"},next:{title:"\u961f\u5217(Queue)",permalink:"/docs/\u6570\u636e\u7ed3\u6784/\u961f\u5217/"}},a={},o=[{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801",level:2}];function m(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u5355\u94fe\u8868singlelinkedlist",children:"\u5355\u94fe\u8868(SingleLinkedList)"})}),"\n",(0,i.jsx)(e.h2,{id:"\u6838\u5fc3\u4ee3\u7801",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"import {\n  throwError,\n  ErrorEnum,\n  ERROR_SUBSCRIPT_OUT_OF_BOUNDS,\n  ANY_OBJ,\n  ELEMENT_NOT_FOUNT,\n} from '@/shared';\n/**\n * \u5217\u8868\u63a5\u53e3\n */\nexport interface ISingleLinkedList<T> {\n  /**\n   * \u5f53\u524d\u94fe\u8868\u542b\u6709\u7684\u8282\u70b9\u6570\n   */\n  size: number;\n  /**\n   * \u5728index\u4f4d\u7f6e\u63d2\u5165\u5143\u7d20\n   * @param {T} element \u63d2\u5165\u5143\u7d20\u503c\n   * @param {number} index \u63d2\u5165\u7684\u4f4d\u7f6e\u4e0b\u6807\uff0c\u82e5\u4e0d\u4f20\u5219\u9ed8\u8ba4\u4e3a\u6700\u540e\u4e00\u4f4d\u5143\u7d20\n   */\n  add(element: T, index?: number): void;\n  /**\n   * \u83b7index\u4f4d\u7f6e\u7684\u5143\u7d20\n   * @param {number} index \u5143\u7d20\u7684\u4e0b\u6807\n   */\n  get(index: number): T;\n  /**\n   * \u8bbe\u7f6eindex\u4f4d\u7f6e\u7684\u5143\u7d20\uff0c\u8fd4\u56de\u539f\u4f4d\u7f6e\u5143\u7d20\n   * @param {number} index \u5143\u7d20\u7684\u4e0b\u6807\n   * @param {T} element \u66f4\u6539\u7684\u503c\n   */\n  set(index: number, element: T): T;\n  /**\n   * \u5220\u9664\u5143\u7d20\uff0c\n   * \u5f53\u4f20\u5165\u5143\u7d20\u4e0b\u6807\u8fd4\u56de\u5220\u9664\u7684\u8282\u70b9\u503c\uff0c\n   * \u5220\u9664\u6210\u529f\u8fd4\u56de\u503c\n   * @param {number} element \u4f20\u5165\u5143\u7d20\u7684\u4e0b\u6807\n   */\n  delete(index: number): T;\n  /**\n   * \u83b7\u53d6\u5143\u7d20\u7684index\uff0c\n   * \u5143\u7d20\u7684\u4e0b\u6807\uff0c\n   * \u82e5\u4e0d\u5b58\u5728\u8fd4\u56de-1\n   * @param {T} element \u5143\u7d20\u7684\u503c\n   */\n  find(element: T): number;\n}\nexport class SingleLinkedListNode<T> {\n  constructor(public val: T, public next: SingleLinkedListNode<T> | null = null) {}\n}\nexport class SingleLinkedList<T> implements ISingleLinkedList<T> {\n  private dummyHead = new SingleLinkedListNode(ANY_OBJ);\n  private _size: number = 0;\n  get size() {\n    return this._size;\n  }\n  add(element: T, index: number = this.size): void {\n    this.checkAddRange(index) || throwError(ERROR_SUBSCRIPT_OUT_OF_BOUNDS, ErrorEnum.range);\n    let p = this.dummyHead;\n    while (index--) p = p.next!;\n    const newNode = new SingleLinkedListNode(element, p.next);\n    p.next = newNode;\n    this._size++;\n  }\n  set(index: number, element: T): T {\n    this.checkRange(index) || throwError(ERROR_SUBSCRIPT_OUT_OF_BOUNDS, ErrorEnum.range);\n    let p = this.dummyHead;\n    while (index--) p = p.next!;\n    const val = p.next!.val;\n    p.next!.val = element;\n    return val;\n  }\n  delete(index: number): T {\n    this.checkRange(index) || throwError(ERROR_SUBSCRIPT_OUT_OF_BOUNDS, ErrorEnum.range);\n    let p = this.dummyHead;\n    while (index--) p = p.next!;\n    const val = p.next!.val;\n    p.next = p.next!.next;\n    this._size--;\n    return val;\n  }\n  get(index: number): T {\n    this.checkRange(index) || throwError(ERROR_SUBSCRIPT_OUT_OF_BOUNDS, ErrorEnum.range);\n    let p = this.dummyHead;\n    while (index--) p = p.next!;\n    return p.next!.val;\n  }\n  find(element: T): number {\n    let p = this.dummyHead;\n    let index = 0;\n    while (p.next !== null && p.next.val !== element) {\n      p = p.next!;\n      index++;\n    }\n    return p.next ? index : ELEMENT_NOT_FOUNT;\n  }\n  private checkAddRange(index: number): boolean {\n    return this.checkRange(index) || index === this.size;\n  }\n  private checkRange(index: number): boolean {\n    return index >= 0 && index < this._size;\n  }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>l});var i=t(30758);const r={},d=i.createContext(r);function s(n){const e=i.useContext(d);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);