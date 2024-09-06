"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[9351],{93751:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>o,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=t(86070),i=t(25710);const a={},s="1095.\u5c71\u8109\u6570\u7ec4\u4e2d\u67e5\u627e\u76ee\u6807\u503c",u={id:"leetcode/1001-1100/\u5c71\u8109\u6570\u7ec4\u4e2d\u67e5\u627e\u76ee\u6807\u503c",title:"1095.\u5c71\u8109\u6570\u7ec4\u4e2d\u67e5\u627e\u76ee\u6807\u503c",description:"\u94fe\u63a5\uff1a1095.\u5c71\u8109\u6570\u7ec4\u4e2d\u67e5\u627e\u76ee\u6807\u503c",source:"@site/docs/leetcode/1001-1100/1095.\u5c71\u8109\u6570\u7ec4\u4e2d\u67e5\u627e\u76ee\u6807\u503c.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u5c71\u8109\u6570\u7ec4\u4e2d\u67e5\u627e\u76ee\u6807\u503c",permalink:"/docs/leetcode/1001-1100/\u5c71\u8109\u6570\u7ec4\u4e2d\u67e5\u627e\u76ee\u6807\u503c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1095,frontMatter:{},sidebar:"journal",previous:{title:"1094.\u62fc\u8f66",permalink:"/docs/leetcode/1001-1100/\u62fc\u8f66"},next:{title:"1096.\u82b1\u62ec\u53f7\u5c55\u5f00II",permalink:"/docs/leetcode/1001-1100/\u82b1\u62ec\u53f7\u5c55\u5f00II"}},l={},c=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1095\u5c71\u8109\u6570\u7ec4\u4e2d\u67e5\u627e\u76ee\u6807\u503c",children:"1095.\u5c71\u8109\u6570\u7ec4\u4e2d\u67e5\u627e\u76ee\u6807\u503c"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/find-in-mountain-array",children:"1095.\u5c71\u8109\u6570\u7ec4\u4e2d\u67e5\u627e\u76ee\u6807\u503c"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u4ea4\u4e92",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a \u5c71\u8109\u6570\u7ec4 mountainArr\uff0c\u8bf7\u4f60\u8fd4\u56de\u80fd\u591f\u4f7f\u5f97 mountainArr.get(index) \u7b49\u4e8e target \u6700\u5c0f \u7684\u4e0b\u6807 index \u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-29"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a64ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a34.3MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u67e5\u627e\u51cf\u5c11\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"/**\n * // This is the MountainArray's API interface.\n * // You should not implement it, or speculate about its implementation\n * function MountainArray() {\n *     @param {number} index\n *     @return {number}\n *     this.get = function(index) {\n *         ...\n *     };\n *\n *     @return {number}\n *     this.length = function() {\n *         ...\n *     };\n * };\n */\n\n/**\n * @param {number} target\n * @param {MountainArray} mountainArr\n * @return {number}\n */\nvar findInMountainArray = function (target, mountainArr) {\n  const data = new Map();\n  // \u9012\u5f52\u641c\u7d22\uff0c\u521d\u59cb\u5316\u4e3a\u9996\u4f4d\u4e0b\u6807\n  return search(0, mountainArr.length() - 1);\n  function search(left, right) {\n    // \u5982\u679c \u957f\u5ea6\u4e3a\u8d1f\u5219\u4e0d\u5b58\u5728\n    if (left > right) return -1;\n    // \u5982\u679c\u4e0b\u6807\u76f8\u7b49\u5219\u76f4\u63a5\u5224\u65ad\u8be5\u503c\u662f\u5426\u4e3a\u76ee\u6807\n    else if (left === right) return getNum(left) === target ? left : -1;\n    const leftNum = getNum(left),\n      rightNum = getNum(right);\n    if (target < leftNum && target < rightNum) return -1;\n    const mid = (right + left) >> 1;\n    const midNum = getNum(mid);\n    // \u5982\u679c\u5de6\u53f3\u503c\u76f4\u63a5\u4e3a\u76ee\u6807\u503c\u5219\u8fd4\u56de\n    if (target === leftNum) return left;\n    if (target === rightNum) return right;\n    // \u5982\u679c\u4e2d\u95f4\u503c\u4e3a\u76ee\u6807\u503c\u5219\u518d\u6b21\u5224\u65ad\u5de6\u4e0b\u6807\u5230\u4e2d\u95f4\u503c\u662f\u5426\u5b58\u5728\u66f4\u5c0f\u503c\n    if (target === midNum) {\n      if (midNum > leftNum) {\n        let index = search(left, mid - 1);\n        return index === -1 ? mid : index;\n      }\n      return mid;\n    }\n    if (target < leftNum) {\n      // \u5982\u679c\u76ee\u6807\u503c\u5c0f\u4e8e\u5de6\u503c\u5219\u5224\u65ad\u53ef\u80fd\u51fa\u73b0\u7684\u4e00\u8fb9\u5761\u5ea6\n      if (target < midNum) return search(mid + 1, right);\n      else return search(left, mid - 1);\n    } else if (target < rightNum) {\n      // \u5982\u679c\u76ee\u6807\u503c\u5c0f\u4e8e\u53f3\u503c\u5219\u5224\u65ad\u53ef\u80fd\u51fa\u73b0\u7684\u4e00\u8fb9\u5761\u5ea6\n      if (target < midNum) return search(left, mid - 1);\n      else return search(mid + 1, right);\n    } else {\n      // \u5982\u679c\u76ee\u6807\u503c\u5927\u4e8e\u4e2d\u503c\u5219\u5224\u65ad\u5de6\u53f3\u503c\u7684\u5927\u5c0f\u8fdb\u884c\u5212\u5206\u533a\u57df\n      if (target > midNum) {\n        if (leftNum < rightNum) return search(mid + 1, right);\n        else if (leftNum > rightNum) return search(left, mid - 1);\n      }\n      // \u5426\u5219\u5206\u6bb5\u5224\u65ad\n      let index = search(left, mid - 1);\n      if (index === -1) index = search(mid + 1, right);\n      return index;\n    }\n  }\n  // \u83b7\u53d6\u503c\uff0c\u50a8\u5b58\u5728\u672c\u5730data\u4e2d\u51cf\u5c11\u83b7\u53d6\u6b21\u6570\n  function getNum(index) {\n    let res = data.get(index);\n    if (res === undefined) {\n      res = mountainArr.get(index);\n      data.set(index, res);\n    }\n    return res;\n  }\n};\n"})})]})}function o(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>u});var r=t(30758);const i={},a=r.createContext(i);function s(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);