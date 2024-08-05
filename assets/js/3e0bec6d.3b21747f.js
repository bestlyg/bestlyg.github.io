"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[52039],{61906:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(86070),r=t(25710);const s={},c="63.\u4e0d\u540c\u8def\u5f84II",l={id:"leetcode/1-100/\u4e0d\u540c\u8def\u5f84II",title:"63.\u4e0d\u540c\u8def\u5f84II",description:"\u94fe\u63a5\uff1a63.\u4e0d\u540c\u8def\u5f84II",source:"@site/docs/leetcode/1-100/63.\u4e0d\u540c\u8def\u5f84II.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u4e0d\u540c\u8def\u5f84II",permalink:"/web/site/docs/leetcode/1-100/\u4e0d\u540c\u8def\u5f84II",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:63,frontMatter:{},sidebar:"journal",previous:{title:"62.\u4e0d\u540c\u8def\u5f84",permalink:"/web/site/docs/leetcode/1-100/\u4e0d\u540c\u8def\u5f84"},next:{title:"64.\u6700\u5c0f\u8def\u5f84\u548c",permalink:"/web/site/docs/leetcode/1-100/\u6700\u5c0f\u8def\u5f84\u548c"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"63\u4e0d\u540c\u8def\u5f84ii",children:"63.\u4e0d\u540c\u8def\u5f84II"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/unique-paths-ii",children:"63.\u4e0d\u540c\u8def\u5f84II"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u77e9\u9635",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4e00\u4e2a\u673a\u5668\u4eba\u4f4d\u4e8e\u4e00\u4e2a m x n \u7f51\u683c\u7684\u5de6\u4e0a\u89d2 \uff08\u8d77\u59cb\u70b9\u5728\u4e0b\u56fe\u4e2d\u6807\u8bb0\u4e3a\u201cStart\u201d \uff09\u3002\u673a\u5668\u4eba\u6bcf\u6b21\u53ea\u80fd\u5411\u4e0b\u6216\u8005\u5411\u53f3\u79fb\u52a8\u4e00\u6b65\u3002\u673a\u5668\u4eba\u8bd5\u56fe\u8fbe\u5230\u7f51\u683c\u7684\u53f3\u4e0b\u89d2\uff08\u5728\u4e0b\u56fe\u4e2d\u6807\u8bb0\u4e3a\u201cFinish\u201d\uff09\u3002\u73b0\u5728\u8003\u8651\u7f51\u683c\u4e2d\u6709\u969c\u788d\u7269\u3002\u90a3\u4e48\u4ece\u5de6\u4e0a\u89d2\u5230\u53f3\u4e0b\u89d2\u5c06\u4f1a\u6709\u591a\u5c11\u6761\u4e0d\u540c\u7684\u8def\u5f84\uff1f"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-07-06"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][j] = dp[i+1][j] + dp[i][j+1]\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function uniquePathsWithObstacles(obstacleGrid: number[][]): number {\n  const n = obstacleGrid.length;\n  if (n === 0) return 0;\n  const m = obstacleGrid[0].length;\n  if (m === 0) return 0;\n  else if (obstacleGrid[0][0] === 1) return 0;\n  else if (n === 1) {\n    for (const num of obstacleGrid[0]) if (num === 1) return 0;\n    return 1;\n  } else if (m === 1) {\n    for (let i = 0; i < n; i++) if (obstacleGrid[i][0] === 1) return 0;\n    return 1;\n  } else if (obstacleGrid[n - 1][m - 1] === 1) return 0;\n  else {\n    const dp = new Array(n).fill(0).map(_ => new Array(m).fill(0));\n    dp[n - 1][m - 2] = obstacleGrid[n - 1][m - 2] ^ 1;\n    dp[n - 2][m - 1] = obstacleGrid[n - 2][m - 1] ^ 1;\n    for (let i = n - 1; i >= 0; i--) {\n      for (let j = m - 1; j >= 0; j--) {\n        if (obstacleGrid[i][j] === 1 || dp[i][j] === 1) continue;\n        dp[i][j] = (j + 1 < m ? dp[i][j + 1] : 0) + (i + 1 < n ? (dp[i][j] += dp[i + 1][j]) : 0);\n      }\n    }\n    return dp[0][0];\n  }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var i=t(30758);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);