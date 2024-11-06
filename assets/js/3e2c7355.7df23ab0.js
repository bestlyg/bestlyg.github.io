"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[71430],{72652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=t(86070),s=t(31503);const c={},o="566.\u91cd\u5851\u77e9\u9635",i={id:"leetcode/501-600/\u91cd\u5851\u77e9\u9635",title:"566.\u91cd\u5851\u77e9\u9635",description:"\u94fe\u63a5\uff1a566.\u91cd\u5851\u77e9\u9635",source:"@site/docs/leetcode/501-600/566.\u91cd\u5851\u77e9\u9635.md",sourceDirName:"leetcode/501-600",slug:"/leetcode/501-600/\u91cd\u5851\u77e9\u9635",permalink:"/docs/leetcode/501-600/\u91cd\u5851\u77e9\u9635",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:566,frontMatter:{},sidebar:"journal",previous:{title:"565.\u6570\u7ec4\u5d4c\u5957",permalink:"/docs/leetcode/501-600/\u6570\u7ec4\u5d4c\u5957"},next:{title:"567.\u5b57\u7b26\u4e32\u7684\u6392\u5217",permalink:"/docs/leetcode/501-600/\u5b57\u7b26\u4e32\u7684\u6392\u5217"}},l={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"566\u91cd\u5851\u77e9\u9635",children:"566.\u91cd\u5851\u77e9\u9635"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/reshape-the-matrix",children:"566.\u91cd\u5851\u77e9\u9635"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u77e9\u9635\u3001\u6a21\u62df",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u51fa\u4e00\u4e2a\u7531\u4e8c\u7ef4\u6570\u7ec4\u8868\u793a\u7684\u77e9\u9635\uff0c\u4ee5\u53ca\u4e24\u4e2a\u6b63\u6574\u6570 r \u548c c\uff0c\u5206\u522b\u8868\u793a\u60f3\u8981\u7684\u91cd\u6784\u7684\u77e9\u9635\u7684\u884c\u6570\u548c\u5217\u6570\u3002\u91cd\u6784\u540e\u7684\u77e9\u9635\u9700\u8981\u5c06\u539f\u59cb\u77e9\u9635\u7684\u6240\u6709\u5143\u7d20\u4ee5\u76f8\u540c\u7684\u884c\u904d\u5386\u987a\u5e8f\u586b\u5145\u3002\u5982\u679c\u5177\u6709\u7ed9\u5b9a\u53c2\u6570\u7684 reshape \u64cd\u4f5c\u662f\u53ef\u884c\u4e14\u5408\u7406\u7684\uff0c\u5219\u8f93\u51fa\u65b0\u7684\u91cd\u5851\u77e9\u9635\uff1b\u5426\u5219\uff0c\u8f93\u51fa\u539f\u59cb\u77e9\u9635\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-17"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.4MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5148\u8ba1\u7b97\u603b\u6570\uff0c\u7b26\u5408\u540e\u76f4\u63a5\u62fc\u63a5\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function matrixReshape(nums: number[][], r: number, c: number): number[][] {\n  const sum = nums.length * nums[0].length;\n  if (sum !== r * c) return nums;\n  const arr = nums.reduce((totalArr, arr) => {\n    totalArr.push(...arr);\n    return totalArr;\n  }, [] as number[]);\n  const ans: number[][] = [];\n  for (let i = 0; i < r; i++) {\n    const temp: number[] = [];\n    for (let j = 0; j < c; j++) {\n      temp.push(arr[i * c + j]);\n    }\n    ans.push(temp);\n  }\n  return ans;\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(30758);const s={},c=r.createContext(s);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);