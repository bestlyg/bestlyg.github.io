"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[629],{96919:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/501-600/\u76f8\u5bf9\u540d\u6b21","title":"506.\u76f8\u5bf9\u540d\u6b21","description":"\u94fe\u63a5\uff1a506.\u76f8\u5bf9\u540d\u6b21","source":"@site/docs/leetcode/501-600/506.\u76f8\u5bf9\u540d\u6b21.md","sourceDirName":"leetcode/501-600","slug":"/leetcode/501-600/\u76f8\u5bf9\u540d\u6b21","permalink":"/docs/leetcode/501-600/\u76f8\u5bf9\u540d\u6b21","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":506,"frontMatter":{},"sidebar":"journal","previous":{"title":"504.\u4e03\u8fdb\u5236\u6570","permalink":"/docs/leetcode/501-600/\u4e03\u8fdb\u5236\u6570"},"next":{"title":"507.\u5b8c\u7f8e\u6570","permalink":"/docs/leetcode/501-600/\u5b8c\u7f8e\u6570"}}');var r=i(86070),t=i(31503);const c={},l="506.\u76f8\u5bf9\u540d\u6b21",o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - c",id:"\u9898\u89e3-2---c",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"506\u76f8\u5bf9\u540d\u6b21",children:"506.\u76f8\u5bf9\u540d\u6b21"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/relative-ranks",children:"506.\u76f8\u5bf9\u540d\u6b21"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6392\u5e8f\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4f7f\u7528\u957f\u5ea6\u4e3a n \u7684\u6570\u7ec4 answer \u8fd4\u56de\u83b7\u5956\uff0c\u5176\u4e2d answer[i] \u662f\u7b2c i \u4f4d\u8fd0\u52a8\u5458\u7684\u83b7\u5956\u60c5\u51b5\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-02"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function findRelativeRanks(score: number[]): string[] {\n  const n = score.length;\n  const idxs = new Array(n)\n    .fill(0)\n    .map((_, i) => i)\n    .sort((a, b) => score[b] - score[a]);\n  const ans: string[] = [];\n  for (let i = 0; i < n; i++) {\n    const str =\n      i === 0 ? 'Gold Medal' : i === 1 ? 'Silver Medal' : i === 2 ? 'Bronze Medal' : `${i + 1}`;\n    ans[idxs[i]] = str;\n  }\n  return ans;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---c",children:"\u9898\u89e3 2 - c"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-02"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'int *g_score;\nint comp(const void *a, const void *b) {\n    return g_score[*(int *)b] - g_score[*(int *)a];\n}\nchar ** findRelativeRanks(int* score, int scoreSize, int* returnSize){\n    g_score = score;\n    *returnSize = scoreSize;\n    int *idxs = (int *)malloc(sizeof(int) * scoreSize);\n    for (int i = 0; i < scoreSize; i++) idxs[i] = i;\n    qsort(idxs, scoreSize, sizeof(int), comp);\n    char **ans = (char **)malloc(sizeof(char *) * scoreSize);\n    for (int i = 0; i < scoreSize; i++) {\n        if (i == 0) ans[idxs[i]] = "Gold Medal";\n        else if (i == 1) ans[idxs[i]] = "Silver Medal";\n        else if (i == 2) ans[idxs[i]] = "Bronze Medal";\n        else {\n            ans[idxs[i]] = (char *)malloc(10);\n            sprintf(ans[idxs[i]], "%d", i + 1);\n        }\n    }\n    return ans;\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>l});var s=i(30758);const r={},t=s.createContext(r);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);