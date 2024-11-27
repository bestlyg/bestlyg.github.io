"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[72449],{16462:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"\u6570\u636e\u7ed3\u6784/javascript/Promise","title":"Promise","description":"\u53c2\u8003\u6587\u6863\u5730\u5740","source":"@site/docs/\u6570\u636e\u7ed3\u6784/javascript/Promise.mdx","sourceDirName":"\u6570\u636e\u7ed3\u6784/javascript","slug":"/\u6570\u636e\u7ed3\u6784/javascript/Promise","permalink":"/docs/\u6570\u636e\u7ed3\u6784/javascript/Promise","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"\u76ee\u5f55\u7d22\u5f15","permalink":"/docs/\u6570\u636e\u7ed3\u6784/"},"next":{"title":"\u5806(Heap)","permalink":"/docs/\u6570\u636e\u7ed3\u6784/\u5806/"}}');var r=s(86070),o=s(31503);const i={},a="Promise",l={},c=[{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"promise",children:"Promise"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u53c2\u8003\u6587\u6863\u5730\u5740",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://es6.ruanyifeng.com/#docs/promise",children:"\u962e\u4e00\u5cf0 ES6"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise",children:"MDN \u6587\u6863"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"ES6 \u589e\u52a0\u7684\u5f02\u6b65\u7f16\u7a0b\u65b9\u5f0f\uff0c\u907f\u514d\u4e86\u56de\u8c03\u5730\u72f1\uff0c\u4e00\u4e2a promise \u6709\u4e09\u4e2a\u72b6\u6001 pending\uff0cfulfilled\uff0crejected\uff0c\u521d\u59cb\u5316\u540e\u4e3a pending \u72b6\u6001\uff0c\u5728\u6784\u9020\u51fd\u6570\u4e2d\u4f1a\u4f20\u5165 resolve,reject \u4e24\u4e2a\u51fd\u6570\uff0c\u8c03\u7528 resolve \u540e\u6539\u53d8\u72b6\u6001\u4e3a fulfilled\uff0c\u8c03\u7528 rejected \u540e\u6539\u53d8\u72b6\u6001\u4e3a rejected\uff0c\u4e00\u65e6\u72b6\u6001\u4ece pending \u8fdb\u884c\u8f6c\u904d\u540e\u4e0d\u4f1a\u518d\u6b21\u8f6c\u904d\u3002\u8c03\u7528 then \u51fd\u6570\uff0c\u8fd4\u56de\u65b0\u7684 promise\uff0c\u4ee5\u6b64\u4ece\u65e0\u9650\u56de\u8c03\u8f6c\u6362\u4e3a\u94fe\u5f0f\u8c03\u7528\uff0cthen \u8fc7\u591a\u65f6\u53c8\u4f1a\u9677\u5165\u94fe\u5f0f\u5730\u72f1\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6838\u5fc3\u4ee3\u7801",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { DEFAULT_OP, catchError, throwValue } from '@/shared';\nimport { resolvePromise } from './resolvePromise';\nimport {\n  ASYNC,\n  PromiseState,\n  BestPromiseFulfilledResult,\n  BestPromiseRejectedResult,\n} from './utils';\n\nexport class BestPromise<T> {\n  /** \u72b6\u6001\u503c */\n  private state: PromiseState = PromiseState.PENDING;\n  /** \u6210\u529f\u56de\u8c03 */\n  private onFulfilled: (() => void)[] = [];\n  /** \u5931\u8d25\u56de\u8c03 */\n  private onRejected: (() => void)[] = [];\n  /** \u7ed3\u675f\u56de\u8c03 */\n  private onFinally: (() => void)[] = [];\n  private value!: T;\n  private reason!: any;\n  constructor(fn: (resolve: (value: T) => void, reject: (reason: any) => void) => void) {\n    this.resolve = this.resolve.bind(this);\n    this.reject = this.reject.bind(this);\n    catchError(() => fn(this.resolve, this.reject), this.reject);\n  }\n  /**\n   * \u8fd4\u56de\u6210\u529f\u72b6\u6001\n   * @param val \u6210\u529f\u503c\n   */\n  static resolve<V>(val: V) {\n    return new BestPromise<V>(resolve => {\n      resolve(val);\n    });\n  }\n  /**\n   * \u8fd4\u56de\u5931\u8d25\u72b6\u6001\n   * @param val \u5931\u8d25\u503c\n   */\n  static reject(val: any) {\n    return new BestPromise<any>((_, reject) => {\n      reject(val);\n    });\n  }\n  /**\n   * \u4efb\u610f\u4e00\u4e2apromise\u72b6\u6001\u53d8\u66f4\uff0c\u8fd4\u56de\u7684promise\u5c31\u4f1a\u72b6\u6001\u53d8\u66f4\n   * @param promises promise\u5217\u8868\n   */\n  static race(promises: BestPromise<any>[]) {\n    return new BestPromise((resolve, reject) => {\n      for (const promise of promises) {\n        promise.then(\n          value => resolve(value),\n          reason => reject(reason)\n        );\n      }\n    });\n  }\n  /**\n   * \u4efb\u610f\u4e00\u4e2apromise\u72b6\u6001\u53d8\u66f4\u4e3afulfilled\uff0c\u8fd4\u56deresolve\uff0c\n   * \u6240\u6709promise\u72b6\u6001\u53d8\u66f4\u4e3arejected\uff0c\u8fd4\u56dereject\u5217\u8868\n   * @param promises promise\u5217\u8868\n   */\n  static any(promises: BestPromise<any>[]) {\n    const len = promises.length;\n    let count = 0;\n    const reasonList: any[] = [];\n    return new BestPromise((resolve, reject) => {\n      const onReject = (reason: any, index: number) => {\n        reasonList[index] = reason;\n        if (++count === len) reject(reasonList);\n      };\n      for (let i = 0; i < len; i++) {\n        const promise = promises[i];\n        promise.then(\n          value => resolve(value),\n          reason => onReject(reason, i)\n        );\n      }\n    });\n  }\n  /**\n   * \u4efb\u610f\u4e00\u4e2apromise\u72b6\u6001\u53d8\u66f4\u4e3arejected\uff0c\u8fd4\u56dereject\n   * \u6240\u6709promise\u72b6\u6001\u53d8\u66f4\u4e3afulfilled\uff0c\u8fd4\u56deresolve\u5217\u8868\n   * @param promises promise\u5217\u8868\n   */\n  static all(promises: BestPromise<any>[]) {\n    const len = promises.length;\n    let count = 0;\n    const value: any[] = [];\n    return new BestPromise((resolve, reject) => {\n      const onResolve = (reason: any, index: number) => {\n        value[index] = reason;\n        if (++count === len) resolve(value);\n      };\n      for (let i = 0; i < len; i++) {\n        const promise = promises[i];\n        promise.then(\n          value => onResolve(value, i),\n          reason => reject(reason)\n        );\n      }\n    });\n  }\n  /**\n   * \u6240\u6709promise\u72b6\u6001\u90fd\u53d8\u66f4\u65f6\u8fd4\u56de\n   * @param promises promise\u5217\u8868\n   */\n  static allSettled(\n    promises: BestPromise<any>[]\n  ): BestPromise<(BestPromiseFulfilledResult<any> | BestPromiseRejectedResult)[]> {\n    const len = promises.length;\n    let count = 0;\n    const statusList: (BestPromiseFulfilledResult<any> | BestPromiseRejectedResult)[] = [];\n    return new BestPromise(resolve => {\n      const on = (\n        status: BestPromiseFulfilledResult<any> | BestPromiseRejectedResult,\n        index: number\n      ) => {\n        statusList[index] = status;\n        if (++count === len) resolve(statusList);\n      };\n      for (let i = 0; i < len; i++) {\n        const promise = promises[i];\n        promise.then(\n          value => on({ status: 'fulfilled', value }, i),\n          reason => on({ status: 'rejected', reason }, i)\n        );\n      }\n    });\n  }\n  /**\n   * \u6210\u529f\u51fd\u6570\n   * @param value \u6210\u529f\u503c\n   */\n  private resolve(value: T): void {\n    if (this.state === PromiseState.PENDING) {\n      this.state = PromiseState.FULFILLED;\n      this.value = value;\n      this.onFulfilled.forEach(fn => fn());\n      this.onFinally.forEach(fn => fn());\n    }\n  }\n  /**\n   * \u5931\u8d25\u51fd\u6570\n   * @param reason \u5931\u8d25\u503c\n   */\n  private reject(reason: any): void {\n    if (this.state === PromiseState.PENDING) {\n      this.state = PromiseState.REJECTED;\n      this.reason = reason;\n      this.onRejected.forEach(fn => fn());\n      this.onFinally.forEach(fn => fn());\n    }\n  }\n  /**\n   * \u94fe\u5f0f\u8c03\u7528\u51fd\u6570\uff0c\u8fd4\u56de\u65b0\u7684promise\n   * @param onFulfilled \u6210\u529f\u65f6\u89e6\u53d1\n   * @param onRejected \u5931\u8d25\u65f6\u89e6\u53d1\n   */\n  then<V>(\n    onFulfilled: (value: T) => V | BestPromise<V>,\n    onRejected: (reason: any) => any = throwValue\n  ): BestPromise<V> {\n    const promise = new BestPromise<V>((resolve, reject) => {\n      // \u7edf\u4e00\u89e6\u53d1\u51fd\u6570\n      const onFn = (val?: V | BestPromise<V>) =>\n        val !== undefined && ASYNC(() => resolvePromise<V>(promise, val, resolve, reject));\n      const onFulfill = () => onFn(catchError(() => onFulfilled(this.value), reject));\n      const onReject = () => onFn(catchError(() => onRejected(this.reason), reject));\n      if (this.state === PromiseState.FULFILLED) {\n        // \u5982\u679c\u5f53\u524d\u72b6\u6001\u5df2\u4e3afulfill\u5219\u76f4\u63a5\u89e6\u53d1\n        onFulfill();\n      } else if (this.state === PromiseState.REJECTED) {\n        // \u5982\u679c\u5f53\u524d\u72b6\u6001\u5df2\u4e3areject\u5219\u76f4\u63a5\u89e6\u53d1\n        onReject();\n      } else {\n        // \u5982\u679c\u5f53\u524d\u72b6\u6001\u8fd8\u672a\u786e\u5b9a\u5219\u6682\u5b58\u51fd\u6570\n        this.onFulfilled.push(onFulfill);\n        this.onRejected.push(onReject);\n      }\n    });\n    return promise;\n  }\n  /**\n   * \u6355\u83b7\u9519\u8bef\uff0c\u53ef\u6355\u83b7error\u9519\u8bef\u6216\u8005reject\n   * @param onReject \u4efb\u610f\u51fd\u6570\n   */\n  catch(onReject: (reason: any) => any) {\n    return this.then(DEFAULT_OP, onReject);\n  }\n  /**\n   * \u5728promise\u6267\u884c\u5b8c\u6bd5\u540e\u6267\u884c\n   * @param fn \u4efb\u610f\u51fd\u6570\n   */\n  finally(fn: () => void): void {\n    this.state === PromiseState.PENDING ? this.onFinally.push(fn) : fn();\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},31503:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(30758);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);