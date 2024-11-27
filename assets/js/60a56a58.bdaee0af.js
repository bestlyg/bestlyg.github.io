"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[68699],{40638:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>m,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"\u7b97\u6cd5/\u901a\u7528/\u7d20\u6570\u7b5b","title":"\u7d20\u6570\u7b5b(prime)","description":"\u57c3\u6c0f\u7b5b","source":"@site/docs/\u7b97\u6cd5/\u901a\u7528/\u7d20\u6570\u7b5b.mdx","sourceDirName":"\u7b97\u6cd5/\u901a\u7528","slug":"/\u7b97\u6cd5/\u901a\u7528/\u7d20\u6570\u7b5b","permalink":"/docs/\u7b97\u6cd5/\u901a\u7528/\u7d20\u6570\u7b5b","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"\u6b27\u62c9\u51fd\u6570(Euler)","permalink":"/docs/\u7b97\u6cd5/\u901a\u7528/\u6b27\u62c9\u51fd\u6570"},"next":{"title":"LeetCode","permalink":"/docs/leetcode/"}}');var s=i(86070),t=i(31503);const l="/**\n * \u7ebf\u6027\u7b5b\n * @param max \u6700\u5927\u503c\n * @returns \u7d20\u6570\u6570\u7ec4\n */\nexport function getDualPrime(max: number) {\n    const primes: number[] = new Array(max + 1).fill(0);\n    for (let i = 2; i <= max; i++) {\n        // \u5f53prime\u662f0\u65f6\u4e3a\u7d20\u6570\uff0c\u5728primes[0]\u4e2d\u6807\u8bb0\n        if (primes[i] === 0) primes[++primes[0]] = i;\n        // \u904d\u5386\u6240\u6709\u7d20\u6570\u4e0e\u5f53\u524d\u6570\u7684\u4e58\u79ef\n        for (let j = 1; j <= primes[0] && i * primes[j] <= max; j++) {\n            // \u90fd\u6807\u8bb0\u4e3a\u975e\u7d20\u6570\n            primes[i * primes[j]] = 1;\n            // \u5f53\u524d\u904d\u5386\u5230\u7684\u7d20\u6570\u662fi\u7684\u8d28\u56e0\u5b50\u65f6\u5f39\u51fa\n            if (i % primes[j] === 0) break;\n        }\n    }\n    return primes.slice(1, primes[0] + 1);\n}\n/**\n * \u57c3\u6c0f\u7b5b\n * @param max \u6700\u5927\u503c\n * @returns \u7d20\u6570\u6570\u7ec4\n */\nexport function getEratosthenesPrime(max: number) {\n    const primes: number[] = new Array(max + 1).fill(0);\n    const ans: number[] = [];\n    primes[0] = primes[1] = 1;\n    for (let i = 2; i <= max; i++) {\n        if (primes[i]) continue;\n        ans.push(i);\n        for (let j = 2; i * j <= max; j++) primes[i * j] = 1;\n    }\n    return ans;\n}\n";var a=i(21675);const m={},c="\u7d20\u6570\u7b5b(prime)",p={},o=[{value:"\u57c3\u6c0f\u7b5b",id:"\u57c3\u6c0f\u7b5b",level:2},{value:"\u7ebf\u6027\u7b5b",id:"\u7ebf\u6027\u7b5b",level:2},{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u7d20\u6570\u7b5bprime",children:"\u7d20\u6570\u7b5b(prime)"})}),"\n",(0,s.jsx)(n.h2,{id:"\u57c3\u6c0f\u7b5b",children:"\u57c3\u6c0f\u7b5b"}),"\n",(0,s.jsx)(n.p,{children:"\u57c3\u62c9\u6258\u65af\u7279\u5c3c\u7b5b\u6cd5\uff0c\u7b80\u79f0\u57c3\u6c0f\u7b5b\u6216\u7231\u6c0f\u7b5b\uff0c\u662f\u4e00\u79cd\u7531\u5e0c\u814a\u6570\u5b66\u5bb6\u57c3\u62c9\u6258\u65af\u7279\u5c3c\u6240\u63d0\u51fa\u7684\u4e00\u79cd\u7b80\u5355\u68c0\u5b9a\u7d20\u6570\u7684\u7b97\u6cd5\u3002\u8981\u5f97\u5230\u81ea\u7136\u6570 n \u4ee5\u5185\u7684\u5168\u90e8\u7d20\u6570\uff0c\u5fc5\u987b\u628a\u4e0d\u5927\u4e8e\u6839\u53f7 n \u7684\u6240\u6709\u7d20\u6570\u7684\u500d\u6570\u5254\u9664\uff0c\u5269\u4e0b\u7684\u5c31\u662f\u7d20\u6570\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4ece 2 \u5f00\u59cb\u904d\u5386\u6570\u7ec4\uff0c\u521d\u59cb\u4e3a 0\uff0c\u5f53\u8be5\u4e0b\u6807\u503c\u4e3a 0 \u8bf4\u660e\u662f\u7d20\u6570\uff0c1 \u4e3a\u5408\u6570"}),"\n",(0,s.jsx)(n.li,{children:"\u6bcf\u904d\u5386\u5230\u4e00\u4e2a\u7d20\u6570\u65f6\uff0c\u5f00\u59cb\u5faa\u73af\u904d\u5386 i \u7684\u6240\u6709\u500d\u6570\u90fd\u6807\u8bb0\u4e3a 1"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7ebf\u6027\u7b5b",children:"\u7ebf\u6027\u7b5b"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5229\u7528 0 \u4e0b\u6807\u5f00\u59cb\u5b58\u50a8\u5f53\u524d\u5df2\u5b58\u5728\u7d20\u6570\u4e2a\u6570\uff0c \u4ece 1 \u4e0b\u6807\u5230 primes[0]\u5373\u6240\u6709\u7684\u7d20\u6570"}),"\n",(0,s.jsx)(n.li,{children:"\u904d\u5386\u5230\u4e00\u4e2a\u6570\u65f6\uff0c\u5982\u679c\u662f\u7d20\u6570\uff0c0 \u4e0b\u6807\u52a0\u4e00\uff0c\u4e14\u5728 primes[primes[0]]\u4f4d\u7f6e\u5b58\u5165\u8be5\u7d20\u6570"}),"\n",(0,s.jsx)(n.li,{children:"\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u904d\u5386\u5230\u7684\u6570\uff0c\u8fdb\u884c\u904d\u5386\u5df2\u5b58\u5728\u7d20\u6570\uff0c\u628a\u4e24\u8005\u4e58\u79ef\u6807\u8bb0\u4e3a\u5408\u6570\uff0c\u5f53\u5f53\u524d\u904d\u5386\u5230\u7684\u7d20\u6570\u65f6\u5f53\u524d\u6570\u7684\u7d20\u56e0\u5b50\u65f6\u5f39\u51fa"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6838\u5fc3\u4ee3\u7801",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,s.jsx)(a.A,{language:"tsx",children:l})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);