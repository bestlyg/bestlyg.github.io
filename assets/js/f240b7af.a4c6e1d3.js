"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[8291],{92860:(n,l,t)=>{t.r(l),t.d(l,{assets:()=>h,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>e,toc:()=>m});const e=JSON.parse('{"id":"\u7b97\u6cd5/\u6392\u5e8f/\u5feb\u901f\u6392\u5e8f","title":"\u5feb\u901f\u6392\u5e8f(QuickSort)","description":"\u65b9\u5f0f","source":"@site/docs/\u7b97\u6cd5/\u6392\u5e8f/\u5feb\u901f\u6392\u5e8f.mdx","sourceDirName":"\u7b97\u6cd5/\u6392\u5e8f","slug":"/\u7b97\u6cd5/\u6392\u5e8f/\u5feb\u901f\u6392\u5e8f","permalink":"/docs/\u7b97\u6cd5/\u6392\u5e8f/\u5feb\u901f\u6392\u5e8f","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"\u5f52\u5e76\u6392\u5e8f(MergeSort)","permalink":"/docs/\u7b97\u6cd5/\u6392\u5e8f/\u5f52\u5e76\u6392\u5e8f"},"next":{"title":"\u5e38\u89c1\u51fd\u6570\u624b\u5199","permalink":"/docs/\u7b97\u6cd5/\u901a\u7528/\u5e38\u89c1"}}');var r=t(25105),i=t(8556);const s="import { Comparator } from '@/shared';\n\n/**\n * \u8bfb\u53d6\u7b2c\u4e00\u4e2a\u503c\u5f53\u4e2d\u95f4\u503c\n */\nexport const quickSort1 = <T extends any = any>(\n    compare: Comparator<T>,\n    list: T[],\n    left = 0,\n    right = list.length - 1,\n) => {\n    if (left > right) return;\n    const base = list[left];\n    let l = left;\n    let r = right;\n    while (l <= r) {\n        while (l <= r && compare(list[r], base) >= 0) r--;\n        if (l <= r) [list[l++], list[r]] = [list[r], list[l]];\n        while (l <= r && compare(list[l], base) <= 0) l++;\n        if (l <= r) [list[l], list[r--]] = [list[r], list[l]];\n    }\n    list[l] = base;\n    quickSort1(compare, list, left, l - 1);\n    quickSort1(compare, list, l + 1, right);\n};\n/**\n * \u5355\u8fb9\u9012\u5f52\n */\nexport const quickSort2 = <T extends any = any>(\n    compare: Comparator<T>,\n    list: T[],\n    left = 0,\n    right = list.length - 1,\n) => {\n    if (left > right) return;\n    while (left <= right) {\n        const base = list[left];\n        let l = left;\n        let r = right;\n        while (l <= r) {\n            while (l <= r && compare(list[r], base) >= 0) r--;\n            if (l <= r) [list[l++], list[r]] = [list[r], list[l]];\n            while (l <= r && compare(list[l], base) <= 0) l++;\n            if (l <= r) [list[l], list[r--]] = [list[r], list[l]];\n        }\n        list[l] = base;\n        quickSort2(compare, list, l + 1, right);\n        right = l - 1;\n    }\n};\nconst getMid = <T extends any = any>(compare: Comparator<T>, num1: T, num2: T, num3: T) => {\n    if (compare(num1, num2) > 0) [num1, num2] = [num2, num1];\n    if (compare(num1, num3) > 0) [num1, num3] = [num3, num1];\n    if (compare(num2, num3) > 0) [num2, num3] = [num3, num2];\n    return num2;\n};\n/**\n * \u53d6\u4e2d\u95f4\u503c\u8fdb\u884c\u9012\u5f52\n */\nexport const quickSort3 = <T extends any = any>(\n    compare: Comparator<T>,\n    list: T[],\n    left = 0,\n    right = list.length - 1,\n) => {\n    while (left <= right) {\n        const base = getMid(compare, list[left], list[right], list[(right + left) >> 1]);\n        let l = left;\n        let r = right;\n        do {\n            while (compare(list[l], base) < 0) l++;\n            while (compare(list[r], base) > 0) r--;\n            if (l <= r) [list[l++], list[r--]] = [list[r], list[l]];\n        } while (l <= r);\n        quickSort3(compare, list, l, right);\n        right = r;\n    }\n};\n";var o=t(729);const a={},c="\u5feb\u901f\u6392\u5e8f(QuickSort)",h={},m=[{value:"\u65b9\u5f0f",id:"\u65b9\u5f0f",level:2},{value:"\u4f18\u5316\u65b9\u5f0f",id:"\u4f18\u5316\u65b9\u5f0f",level:2},{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801",level:2}];function u(n){const l={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.header,{children:(0,r.jsx)(l.h1,{id:"\u5feb\u901f\u6392\u5e8fquicksort",children:"\u5feb\u901f\u6392\u5e8f(QuickSort)"})}),"\n",(0,r.jsx)(l.h2,{id:"\u65b9\u5f0f",children:"\u65b9\u5f0f"}),"\n",(0,r.jsxs)(l.ol,{children:["\n",(0,r.jsx)(l.li,{children:"\u627e\u57fa\u51c6\u503c"}),"\n",(0,r.jsx)(l.li,{children:"\u628a\u6570\u7ec4\u5bf9\u57fa\u51c6\u503c\u8fdb\u884c\u6bd4\u8f83\u540e\u8fdb\u884c\u6392\u5217"}),"\n",(0,r.jsx)(l.li,{children:"\u91cd\u590d\u6b65\u9aa4"}),"\n"]}),"\n",(0,r.jsx)(l.h2,{id:"\u4f18\u5316\u65b9\u5f0f",children:"\u4f18\u5316\u65b9\u5f0f"}),"\n",(0,r.jsxs)(l.ol,{children:["\n",(0,r.jsx)(l.li,{children:"\u5355\u8fb9\u9012\u5f52\u6cd5"}),"\n",(0,r.jsx)(l.li,{children:"\u65e0\u76d1\u7763 partition \u65b9\u6cd5"}),"\n",(0,r.jsx)(l.li,{children:"\u4e09\u70b9\u53d6\u4e2d\u6cd5"}),"\n",(0,r.jsx)(l.li,{children:"\u5c0f\u6570\u636e\u89c4\u6a21\uff0c\u505c\u6b62\u5feb\u6392\u8fc7\u7a0b"}),"\n",(0,r.jsx)(l.li,{children:"\u4f7f\u7528\u63d2\u5165\u6392\u5e8f\u8fdb\u884c\u6536\u5c3e"}),"\n"]}),"\n",(0,r.jsx)(l.h2,{id:"\u6838\u5fc3\u4ee3\u7801",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,r.jsx)(o.A,{language:"tsx",children:s})]})}function d(n={}){const{wrapper:l}={...(0,i.R)(),...n.components};return l?(0,r.jsx)(l,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}}}]);