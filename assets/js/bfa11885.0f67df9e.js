"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[38675],{24650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/501-600/\u7816\u5899","title":"554.\u7816\u5899","description":"\u94fe\u63a5\uff1a554.\u7816\u5899","source":"@site/docs/leetcode/501-600/554.\u7816\u5899.md","sourceDirName":"leetcode/501-600","slug":"/leetcode/501-600/\u7816\u5899","permalink":"/docs/leetcode/501-600/\u7816\u5899","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":554,"frontMatter":{},"sidebar":"journal","previous":{"title":"553.\u6700\u4f18\u9664\u6cd5","permalink":"/docs/leetcode/501-600/\u6700\u4f18\u9664\u6cd5"},"next":{"title":"557.\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcdIII","permalink":"/docs/leetcode/501-600/\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcdIII"}}');var s=t(86070),c=t(31503);const o={},l="554.\u7816\u5899",i={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"554\u7816\u5899",children:"554.\u7816\u5899"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/brick-wall",children:"554.\u7816\u5899"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4f60\u9700\u8981\u627e\u51fa\u600e\u6837\u753b\u624d\u80fd\u4f7f\u8fd9\u6761\u7ebf \u7a7f\u8fc7\u7684\u7816\u5757\u6570\u91cf\u6700\u5c11 \uff0c\u5e76\u4e14\u8fd4\u56de \u7a7f\u8fc7\u7684\u7816\u5757\u6570\u91cf \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-02"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a136ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7edf\u8ba1\u6bcf\u4e2a\u8fb9\u754c\u7684\u7a7a\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function leastBricks(wall: number[][]): number {\n  const rowLen = wall.length;\n  const size = wall[0].reduce((total, cur) => total + cur, 0);\n  if (wall.every(row => row.length === 1)) return rowLen;\n  const map: Record<number, number> = {};\n  for (const row of wall) {\n    let sum = -1;\n    for (const col of row) {\n      sum += col;\n      map[sum] = 1 + (map[sum] ?? 0);\n    }\n  }\n  Reflect.deleteProperty(map, size - 1);\n  return rowLen - Math.max(...Object.values(map));\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(30758);const s={},c=r.createContext(s);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);