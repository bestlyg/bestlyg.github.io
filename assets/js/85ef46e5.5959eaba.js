"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[10331],{56139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=t(86070),r=t(31503);const s={},l="11.\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",c={id:"leetcode/1-100/\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",title:"11.\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",description:"\u94fe\u63a5\uff1a11.\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",source:"@site/docs/leetcode/1-100/11.\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",permalink:"/docs/leetcode/1-100/\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"journal",previous:{title:"10.\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d",permalink:"/docs/leetcode/1-100/\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d"},next:{title:"12.\u6574\u6570\u8f6c\u7f57\u9a6c\u6570\u5b57",permalink:"/docs/leetcode/1-100/\u6574\u6570\u8f6c\u7f57\u9a6c\u6570\u5b57"}},a={},o=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"11\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",children:"11.\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/container-with-most-water",children:"11.\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u53cc\u6307\u9488",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60 n \u4e2a\u975e\u8d1f\u6574\u6570 a1\uff0ca2\uff0c...\uff0can\uff0c\u6bcf\u4e2a\u6570\u4ee3\u8868\u5750\u6807\u4e2d\u7684\u4e00\u4e2a\u70b9 \xa0(i,\xa0ai) \u3002\u5728\u5750\u6807\u5185\u753b n \u6761\u5782\u76f4\u7ebf\uff0c\u5782\u76f4\u7ebf i\xa0 \u7684\u4e24\u4e2a\u7aef\u70b9\u5206\u522b\u4e3a \xa0(i,\xa0ai) \u548c (i, 0)\u3002\u627e\u51fa\u5176\u4e2d\u7684\u4e24\u6761\u7ebf\uff0c\u4f7f\u5f97\u5b83\u4eec\u4e0e \xa0x\xa0 \u8f74\u5171\u540c\u6784\u6210\u7684\u5bb9\u5668\u53ef\u4ee5\u5bb9\u7eb3\u6700\u591a\u7684\u6c34\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-12"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a956ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a35.8MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u91cd\u5faa\u73af\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {number[]} height\n * @return {number}\n */\nvar maxArea = function (height) {\n  let res;\n  for (let i = 0; i < height.length; i++) {\n    for (let j = height.length - 1; j > i; j--) {\n      const area = (j - i) * Math.min(height[i], height[j]);\n      // console.log(`i=${i},j=${j},area=${area}`);\n      if (res === undefined || res < area) res = area;\n    }\n  }\n  return res;\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-07"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a47.2MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\uff0c\u5411\u5185\u79fb\u52a8\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function maxArea(height: number[]): number {\n  let left = 0;\n  let right = height.length - 1;\n  let ans = 0;\n  while (left < right) {\n    const rightH = height[right];\n    const leftH = height[left];\n    ans = Math.max(ans, Math.min(rightH, leftH) * (right - left));\n    if (rightH > leftH) left++;\n    else right--;\n  }\n  return ans;\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(30758);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);