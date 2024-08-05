"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[31465],{39111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=t(86070),i=t(25710);const s={},o="879.\u76c8\u5229\u8ba1\u5212",l={id:"leetcode/801-900/\u76c8\u5229\u8ba1\u5212",title:"879.\u76c8\u5229\u8ba1\u5212",description:"\u94fe\u63a5\uff1a879.\u76c8\u5229\u8ba1\u5212",source:"@site/docs/leetcode/801-900/879.\u76c8\u5229\u8ba1\u5212.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u76c8\u5229\u8ba1\u5212",permalink:"/web/site/docs/leetcode/801-900/\u76c8\u5229\u8ba1\u5212",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:879,frontMatter:{},sidebar:"journal",previous:{title:"878.\u7b2cN\u4e2a\u795e\u5947\u6570\u5b57",permalink:"/web/site/docs/leetcode/801-900/\u7b2cN\u4e2a\u795e\u5947\u6570\u5b57"},next:{title:"881.\u6551\u751f\u8247",permalink:"/web/site/docs/leetcode/801-900/\u6551\u751f\u8247"}},c={},p=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"879\u76c8\u5229\u8ba1\u5212",children:"879.\u76c8\u5229\u8ba1\u5212"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/profitable-schemes",children:"879.\u76c8\u5229\u8ba1\u5212"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u96c6\u56e2\u91cc\u6709 n \u540d\u5458\u5de5\uff0c\u4ed6\u4eec\u53ef\u4ee5\u5b8c\u6210\u5404\u79cd\u5404\u6837\u7684\u5de5\u4f5c\u521b\u9020\u5229\u6da6\u3002\u6709\u591a\u5c11\u79cd\u8ba1\u5212\u53ef\u4ee5\u9009\u62e9\uff1f\u56e0\u4e3a\u7b54\u6848\u5f88\u5927\uff0c\u6240\u4ee5 \u8fd4\u56de\u7ed3\u679c\u6a21 10^9 + 7 \u7684\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-06-09"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a320ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a76.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","[\u53c2\u8003\u94fe\u63a5](https://leetcode-cn.com/problems/profitable-schemes/solution/ying-li-ji-hua-by-leetcode-solution-3t8o/)\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function profitableSchemes(\n  n: number,\n  minProfit: number,\n  group: number[],\n  profit: number[]\n): number {\n  const MOD = 1e9 + 7;\n  const len = group.length;\n  const dp = new Array(len + 1)\n    .fill(0)\n    .map(_ => new Array(n + 1).fill(0).map(_ => new Array(minProfit + 1).fill(0)));\n  dp[0][0][0] = 1;\n  for (let i = 1; i <= len; i++) {\n    const member = group[i - 1];\n    const earn = profit[i - 1];\n    for (let j = 0; j <= n; j++) {\n      for (let k = 0; k <= minProfit; k++) {\n        if (j < member) {\n          dp[i][j][k] = dp[i - 1][j][k];\n        } else {\n          dp[i][j][k] = (dp[i - 1][j][k] + dp[i - 1][j - member][Math.max(0, k - earn)]) % MOD;\n        }\n      }\n    }\n  }\n  let ans = 0;\n  for (let i = 0; i <= n; i++) ans = (ans + dp[len][i][minProfit]) % MOD;\n  return ans;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(30758);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);