"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[74717],{61714:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>j});var l=t(86070),i=t(25710);const r={},s="1143.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",c={id:"leetcode/1101-1200/\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",title:"1143.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",description:"\u94fe\u63a5\uff1a1143.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",source:"@site/docs/leetcode/1101-1200/1143.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217.md",sourceDirName:"leetcode/1101-1200",slug:"/leetcode/1101-1200/\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",permalink:"/docs/leetcode/1101-1200/\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1143,frontMatter:{},sidebar:"journal",previous:{title:"1140.\u77f3\u5b50\u6e38\u620fII",permalink:"/docs/leetcode/1101-1200/\u77f3\u5b50\u6e38\u620fII"},next:{title:"1144.\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6",permalink:"/docs/leetcode/1101-1200/\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6"}},p={},j=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - javascript",id:"\u9898\u89e3-2---javascript",level:2},{value:"\u9898\u89e3 3 - javascript",id:"\u9898\u89e3-3---javascript",level:2},{value:"\u9898\u89e3 4 - javascript",id:"\u9898\u89e3-4---javascript",level:2},{value:"\u9898\u89e3 5 - typescript",id:"\u9898\u89e3-5---typescript",level:2},{value:"\u9898\u89e3 6 - typescript",id:"\u9898\u89e3-6---typescript",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"1143\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",children:"1143.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-common-subsequence",children:"1143.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217"}),(0,l.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,l.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,l.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32 text1 \u548c text2\uff0c\u8fd4\u56de\u8fd9\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-11"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a57.5MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\uff0c\u9012\u63a8\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {string} text1\n * @param {string} text2\n * @return {number}\n */\nvar longestCommonSubsequence = function (text1, text2) {\n  const len1 = text1.length;\n  const len2 = text2.length;\n  const dp = [];\n  for (let i = 0; i <= len1; i++) {\n    dp[i] = [];\n    for (let j = 0; j <= len2; j++) if (i === 0 || j === 0) dp[i][j] = 0;\n  }\n  for (let i = 1; i <= len1; i++)\n    for (let j = 1; j <= len2; j++)\n      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;\n      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n  return dp[len1][len2];\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-2---javascript",children:"\u9898\u89e3 2 - javascript"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-11"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a35.1MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6839\u636e\u9898\u89e3 1\uff0c\u5229\u7528\u6eda\u52a8\u6570\u7ec4\u4f18\u5316\u7a7a\u95f4\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {string} text1\n * @param {string} text2\n * @return {number}\n */\nvar longestCommonSubsequence = function (text1, text2) {\n  const len1 = text1.length;\n  const len2 = text2.length;\n  const dp = [];\n  for (let i = 0; i < 2; i++) {\n    dp[i] = [];\n    for (let j = 0; j <= len2; j++) if (i === 0 || j === 0) dp[i][j] = 0;\n  }\n  for (let i = 1; i <= len1; i++) {\n    const compI = i % 2;\n    const preCompI = (i - 1) % 2;\n    for (let j = 1; j <= len2; j++)\n      if (text1[i - 1] === text2[j - 1]) dp[compI][j] = dp[preCompI][j - 1] + 1;\n      else dp[compI][j] = Math.max(dp[preCompI][j], dp[compI][j - 1]);\n  }\n  return dp[len1 % 2][len2];\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-3---javascript",children:"\u9898\u89e3 3 - javascript"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-11"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a64ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a35.6MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6839\u636e\u9898\u89e3 2\uff0c\u5229\u7528&1 \u53d6\u4ee3%2\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {string} text1\n * @param {string} text2\n * @return {number}\n */\nvar longestCommonSubsequence = function (text1, text2) {\n  const len1 = text1.length;\n  const len2 = text2.length;\n  const dp = [];\n  for (let i = 0; i < 2; i++) {\n    dp[i] = [];\n    for (let j = 0; j <= len2; j++) if (i === 0 || j === 0) dp[i][j] = 0;\n  }\n  let compI, preCompI;\n  for (let i = 1; i <= len1; i++) {\n    compI = i & 1;\n    preCompI = (i - 1) & 1;\n    for (let j = 1; j <= len2; j++)\n      if (text1[i - 1] === text2[j - 1]) dp[compI][j] = dp[preCompI][j - 1] + 1;\n      else dp[compI][j] = Math.max(dp[preCompI][j], dp[compI][j - 1]);\n  }\n  return dp[len1 & 1][len2];\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-4---javascript",children:"\u9898\u89e3 4 - javascript"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-12"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a35.1MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6839\u636e\u9898\u89e3 2\uff0c\u5229\u7528\u4e00\u7ef4\u6570\u7ec4\u66ff\u4ee3\u4e8c\u7ef4\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {string} text1\n * @param {string} text2\n * @return {number}\n */\nvar longestCommonSubsequence = function (text1, text2) {\n  const len1 = text1.length;\n  const len2 = text2.length;\n  const dp = new Array(Math.max(len1, len2) + 1).fill(0);\n  let leftTop = 0,\n    replace = 0;\n  for (let i = 1; i <= len1; i++) {\n    for (let j = 1; j <= len2; j++) {\n      replace = text1[i - 1] === text2[j - 1] ? leftTop + 1 : Math.max(dp[j], dp[j - 1]);\n      leftTop = dp[j];\n      dp[j] = replace;\n    }\n    leftTop = dp[0];\n  }\n  return dp[len2];\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-5---typescript",children:"\u9898\u89e3 5 - typescript"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-03"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a136ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a50.7MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:"function longestCommonSubsequence(text1: string, text2: string): number {\n  const len1 = text1.length;\n  const len2 = text2.length;\n  const dp = new Array(len1 + 1).fill(0).map(_ => new Array(len2 + 1).fill(0));\n  for (let i = 0; i < len1; i++) {\n    for (let j = 0; j < len2; j++) {\n      dp[i + 1][j + 1] =\n        text1[i] === text2[j] ? dp[i][j] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);\n    }\n  }\n  return dp[len1][len2];\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-6---typescript",children:"\u9898\u89e3 6 - typescript"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-10"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a51.8MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:"function longestCommonSubsequence(text1: string, text2: string): number {\n  const len1 = text1.length;\n  const len2 = text2.length;\n  const dp = new Array(len1 + 1).fill(0).map(_ => new Array(len2 + 1).fill(0));\n  for (let i = 1; i <= len1; i++) {\n    for (let j = 1; j <= len2; j++) {\n      dp[i][j] = Math.max(\n        dp[i - 1][j],\n        dp[i][j - 1],\n        dp[i - 1][j - 1] + (text1[i - 1] === text2[j - 1] ? 1 : 0)\n      );\n    }\n  }\n  return dp[len1][len2];\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>c});var l=t(30758);const i={},r=l.createContext(i);function s(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);