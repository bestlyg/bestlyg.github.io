"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[23918],{54666:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"leetcode/601-700/\u5927\u793c\u5305","title":"638.\u5927\u793c\u5305","description":"\u94fe\u63a5\uff1a638.\u5927\u793c\u5305","source":"@site/docs/leetcode/601-700/638.\u5927\u793c\u5305.md","sourceDirName":"leetcode/601-700","slug":"/leetcode/601-700/\u5927\u793c\u5305","permalink":"/docs/leetcode/601-700/\u5927\u793c\u5305","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":638,"frontMatter":{},"sidebar":"journal","previous":{"title":"637.\u4e8c\u53c9\u6811\u7684\u5c42\u5e73\u5747\u503c","permalink":"/docs/leetcode/601-700/\u4e8c\u53c9\u6811\u7684\u5c42\u5e73\u5747\u503c"},"next":{"title":"639.\u89e3\u7801\u65b9\u6cd5II","permalink":"/docs/leetcode/601-700/\u89e3\u7801\u65b9\u6cd5II"}}');var t=i(86070),r=i(31503);const d={},c="638.\u5927\u793c\u5305",l={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - undefined",id:"\u9898\u89e3-2---undefined",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"638\u5927\u793c\u5305",children:"638.\u5927\u793c\u5305"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/shopping-offers",children:"638.\u5927\u793c\u5305"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u8bb0\u5fc6\u5316\u641c\u7d22\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u56de\u6eaf\u3001\u72b6\u6001\u538b\u7f29",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de \u786e\u5207 \u6ee1\u8db3\u8d2d\u7269\u6e05\u5355\u6240\u9700\u82b1\u8d39\u7684\u6700\u4f4e\u4ef7\u683c\uff0c\u4f60\u53ef\u4ee5\u5145\u5206\u5229\u7528\u5927\u793c\u5305\u7684\u4f18\u60e0\u6d3b\u52a8\u3002\u4f60\u4e0d\u80fd\u8d2d\u4e70\u8d85\u51fa\u8d2d\u7269\u6e05\u5355\u6307\u5b9a\u6570\u91cf\u7684\u7269\u54c1\uff0c\u5373\u4f7f\u90a3\u6837\u4f1a\u964d\u4f4e\u6574\u4f53\u4ef7\u683c\u3002\u4efb\u610f\u5927\u793c\u5305\u53ef\u65e0\u9650\u6b21\u8d2d\u4e70\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-24"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.8MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function shoppingOffers(price: number[], special: number[][], needs: number[]): number {\n  const n = price.length;\n  special = special\n    .filter(item => {\n      let sum = 0;\n      for (let i = 0; i < n; i++) sum += item[i] * price[i];\n      return sum > item[n];\n    })\n    .sort((a, b) => a[n] - b[n]);\n  let ans = Infinity;\n  dfs(needs);\n  return ans;\n  function dfs(needs: number[], cost = 0) {\n    if (needs.every(v => v === 0)) {\n      ans = Math.min(cost, ans);\n      return;\n    }\n    const list = special.filter((item: number[]) =>\n      item.every((v, i) => (i === n ? true : v <= needs[i]))\n    );\n    if (list.length === 0) {\n      dfs(\n        [0],\n        needs.reduce((total, v, i) => price[i] * v + total, cost)\n      );\n    } else {\n      list.forEach(item => {\n        dfs(\n          needs.map((v, i) => v - item[i]),\n          item[n] + cost\n        );\n      });\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---undefined",children:"\u9898\u89e3 2 - undefined"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-11-03"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a67ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.94MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1aundefined"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8bb0\u5fc6\u5316\u641c\u7d22\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-undefined",children:"def to_list(num: int, n: int) -> List[int]:\n    res = []\n    for i in range(n):\n        res.append(num % 100)\n        num //= 100\n    res.reverse()\n    return res\ndef to_num(needs: List[int]) -> int:\n    res = 0\n    for need in needs:\n        res = res * 100 + need\n    return res\nclass Solution:\n    def shoppingOffers(self, price: List[int], special: List[List[int]], needs: List[int]) -> int:\n        n = len(price)\n        @cache\n        def dfs(idx: int, need: int) -> int:\n            needs = to_list(need, n)\n            if idx == len(special): return sum(price[i] * needs[i] for i in range(n))\n            res = inf\n            for cnt in range(0x7fffffff):\n                next_needs = [v for v in needs]\n                f = True\n                for i in range(n):\n                    if special[idx][i] * cnt > next_needs[i]:\n                        f = False\n                        break\n                    next_needs[i] -= special[idx][i] * cnt\n                if not f: break\n                res = min(res, dfs(idx + 1, to_num(next_needs)) + special[idx][-1] * cnt)\n            return res\n        return dfs(0, to_num(needs))\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},31503:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var s=i(30758);const t={},r=s.createContext(t);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);