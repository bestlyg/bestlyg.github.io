"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[18625],{35997:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=t(86070),i=t(25710);const s={},l="221.\u6700\u5927\u6b63\u65b9\u5f62",c={id:"leetcode/201-300/\u6700\u5927\u6b63\u65b9\u5f62",title:"221.\u6700\u5927\u6b63\u65b9\u5f62",description:"\u94fe\u63a5\uff1a221.\u6700\u5927\u6b63\u65b9\u5f62",source:"@site/docs/leetcode/201-300/221.\u6700\u5927\u6b63\u65b9\u5f62.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u6700\u5927\u6b63\u65b9\u5f62",permalink:"/docs/leetcode/201-300/\u6700\u5927\u6b63\u65b9\u5f62",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:221,frontMatter:{},sidebar:"journal",previous:{title:"220.\u5b58\u5728\u91cd\u590d\u5143\u7d20III",permalink:"/docs/leetcode/201-300/\u5b58\u5728\u91cd\u590d\u5143\u7d20III"},next:{title:"222.\u5b8c\u5168\u4e8c\u53c9\u6811\u7684\u8282\u70b9\u4e2a\u6570",permalink:"/docs/leetcode/201-300/\u5b8c\u5168\u4e8c\u53c9\u6811\u7684\u8282\u70b9\u4e2a\u6570"}},a={},o=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"221\u6700\u5927\u6b63\u65b9\u5f62",children:"221.\u6700\u5927\u6b63\u65b9\u5f62"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/maximal-square",children:"221.\u6700\u5927\u6b63\u65b9\u5f62"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u77e9\u9635",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5728\u4e00\u4e2a\u7531 0 \u548c 1 \u7ec4\u6210\u7684\u4e8c\u7ef4\u77e9\u9635\u5185\uff0c\u627e\u5230\u53ea\u5305\u542b 1 \u7684\u6700\u5927\u6b63\u65b9\u5f62\uff0c\u5e76\u8fd4\u56de\u5176\u9762\u79ef\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-08"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a440ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a74.3MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5148\u628a\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u540e\u7f00\u8868\u8fbe\u5f0f\uff0c\u7136\u540e\u518d\u5229\u7528\u6808\u8ba1\u7b97\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {character[][]} matrix\n * @return {number}\n */\nvar maximalSquare = function (matrix) {\n  function isAllOne(i, j) {\n    let b = false;\n    try {\n      b = matrix[i + 1][j + 1] === '1' && matrix[i][j + 1] === '1' && matrix[i + 1][j] === '1';\n    } catch (error) {}\n    return b;\n  }\n  let max = 0;\n  for (let i = 0; i < matrix.length; i++) {\n    for (let j = 0; j < matrix[i].length; j++) {\n      if (matrix[i][j] === '0') continue;\n      let width = 1;\n      let size = 1;\n      let temp = [];\n      const queue = [[i, j]];\n      while (queue.length !== 0) {\n        const [nextI, nextJ] = queue.shift();\n        if (!isAllOne(nextI, nextJ)) break;\n        temp.push([nextI, nextJ + 1], [nextI + 1, nextJ], [nextI + 1, nextJ + 1]);\n        if (--size === 0) {\n          queue.push(...temp);\n          size = temp.length;\n          temp.length = 0;\n          width++;\n        }\n      }\n      max = Math.max(max, width);\n    }\n  }\n  return max ** 2;\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var r=t(30758);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);