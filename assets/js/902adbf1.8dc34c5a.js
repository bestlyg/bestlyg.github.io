"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[43266],{89291:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(86070),s=t(31503);const i={},c="\u9762\u8bd5\u989816.03.\u4ea4\u70b9",o={id:"leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989816.03.\u4ea4\u70b9",title:"\u9762\u8bd5\u989816.03.\u4ea4\u70b9",description:"\u94fe\u63a5\uff1a\u9762\u8bd5\u989816.03.\u4ea4\u70b9",source:"@site/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989816.03.\u4ea4\u70b9.md",sourceDirName:"leetcode/\u9762\u8bd5\u9898",slug:"/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989816.03.\u4ea4\u70b9",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989816.03.\u4ea4\u70b9",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u9762\u8bd5\u989810.10.\u6570\u5b57\u6d41\u7684\u79e9",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989810.10.\u6570\u5b57\u6d41\u7684\u79e9"},next:{title:"\u9762\u8bd5\u989816.11.\u8df3\u6c34\u677f",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989816.11.\u8df3\u6c34\u677f"}},a={},l=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u9762\u8bd5\u98981603\u4ea4\u70b9",children:"\u9762\u8bd5\u989816.03.\u4ea4\u70b9"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/intersection-lcci",children:"\u9762\u8bd5\u989816.03.\u4ea4\u70b9"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u51e0\u4f55\u3001\u6570\u5b66",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e24\u6761\u7ebf\u6bb5\uff08\u8868\u793a\u4e3a\u8d77\u70b9 start = {X1, Y1}\u548c\u7ec8\u70b9 end = {X2, Y2}\uff09\uff0c\u5982\u679c\u5b83\u4eec\u6709\u4ea4\u70b9\uff0c\u8bf7\u8ba1\u7b97\u5176\u4ea4\u70b9\uff0c\u6ca1\u6709\u4ea4\u70b9\u5219\u8fd4\u56de\u7a7a\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-12"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a33.7MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5148\u5224\u65ad\u4e24\u6761\u7ebf\u662f\u5426\u6709\u4ea4\u70b9\uff0c\u5728\u5224\u65ad\u7ebf\u6bb5\u662f\u5426\u6709\u4ea4\u70b9\uff0c\u96be\u70b9\u5728\u5224\u65ad\u5404\u79cd\u6781\u7aef\u60c5\u51b5\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'/**\n * @param {number[]} start1\n * @param {number[]} end1\n * @param {number[]} start2\n * @param {number[]} end2\n * @return {number[]}\n */\nvar intersection = function (start1, end1, start2, end2) {\n  function include(num, num1, num2) {\n    if (num1 > num2) [num1, num2] = [num2, num1];\n    return num >= num1 && num <= num2;\n  }\n  if (start1[0] > end1[0]) [start1, end1] = [end1, start1];\n  if (start2[0] > end2[0]) [start2, end2] = [end2, start2];\n  // console.log(start1, end1, start2, end2);\n  let intersectionX, intersectionY;\n  const k1 = (end1[1] - start1[1]) / (end1[0] - start1[0]);\n  const k2 = (end2[1] - start2[1]) / (end2[0] - start2[0]);\n  const b1 = start1[1] - k1 * start1[0];\n  const b2 = start2[1] - k2 * start2[0];\n  if (!Number.isFinite(k1) && !Number.isFinite(k2)) {\n    if (start1[0] !== start2[0]) return [];\n    else if (include(start1[1], start2[1], end2[1])) return start1;\n    else if (include(end1[1], start2[1], end2[1])) return end1;\n    else return [];\n  } else if (!Number.isFinite(k1) && Number.isFinite(k2)) {\n    intersectionX = start1[0];\n    intersectionY = k2 * start1[0] + b2;\n  } else if (Number.isFinite(k1) && !Number.isFinite(k2)) {\n    intersectionX = start2[0];\n    intersectionY = k1 * start2[0] + b1;\n  } else {\n    if (k1 === k2) {\n      if (b1 === b2) {\n        if (include(start2[0], start1[0], end1[0])) return start2;\n        if (include(start1[0], start2[0], end2[0])) return start1;\n        else return [];\n      } else if (b1 !== b2) return [];\n    }\n    intersectionX = (b1 - b2) / (k2 - k1);\n    intersectionY = k1 * intersectionX + b1;\n  }\n  // console.log(`line1:y=${k1}x${b1 < 0 ? "" : "+"}${b1}`);\n  // console.log(`line2:y=${k2}x${b2 < 0 ? "" : "+"}${b2}`);\n  // console.log(`intersection:(${intersectionX},${intersectionY})`);\n  if (\n    include(intersectionX, start1[0], end1[0]) &&\n    include(intersectionX, start2[0], end2[0]) &&\n    include(intersectionY, start1[1], end1[1]) &&\n    include(intersectionY, start2[1], end2[1])\n  )\n    return [intersectionX, intersectionY];\n  else return [];\n};\n'})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var r=t(30758);const s={},i=r.createContext(s);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);