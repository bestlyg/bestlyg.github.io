"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[80767],{12429:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var t=s(86070),i=s(31503);const l={},c="1040.\u79fb\u52a8\u77f3\u5b50\u76f4\u5230\u8fde\u7eedII",r={id:"leetcode/1001-1100/\u79fb\u52a8\u77f3\u5b50\u76f4\u5230\u8fde\u7eedII",title:"1040.\u79fb\u52a8\u77f3\u5b50\u76f4\u5230\u8fde\u7eedII",description:"\u94fe\u63a5\uff1a1040.\u79fb\u52a8\u77f3\u5b50\u76f4\u5230\u8fde\u7eedII",source:"@site/docs/leetcode/1001-1100/1040.\u79fb\u52a8\u77f3\u5b50\u76f4\u5230\u8fde\u7eedII.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u79fb\u52a8\u77f3\u5b50\u76f4\u5230\u8fde\u7eedII",permalink:"/docs/leetcode/1001-1100/\u79fb\u52a8\u77f3\u5b50\u76f4\u5230\u8fde\u7eedII",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1040,frontMatter:{},sidebar:"journal",previous:{title:"1039.\u591a\u8fb9\u5f62\u4e09\u89d2\u5256\u5206\u7684\u6700\u4f4e\u5f97\u5206",permalink:"/docs/leetcode/1001-1100/\u591a\u8fb9\u5f62\u4e09\u89d2\u5256\u5206\u7684\u6700\u4f4e\u5f97\u5206"},next:{title:"1041.\u56f0\u4e8e\u73af\u4e2d\u7684\u673a\u5668\u4eba",permalink:"/docs/leetcode/1001-1100/\u56f0\u4e8e\u73af\u4e2d\u7684\u673a\u5668\u4eba"}},o={},m=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"1040\u79fb\u52a8\u77f3\u5b50\u76f4\u5230\u8fde\u7eedii",children:"1040.\u79fb\u52a8\u77f3\u5b50\u76f4\u5230\u8fde\u7eedII"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/moving-stones-until-consecutive-ii",children:"1040.\u79fb\u52a8\u77f3\u5b50\u76f4\u5230\u8fde\u7eedII"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66\u3001\u53cc\u6307\u9488\u3001\u6392\u5e8f",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5728\u4e00\u4e2a\u957f\u5ea6 \u65e0\u9650 \u7684\u6570\u8f74\u4e0a\uff0c\u7b2c i \u9897\u77f3\u5b50\u7684\u4f4d\u7f6e\u4e3a\xa0stones[i]\u3002\u5982\u679c\u4e00\u9897\u77f3\u5b50\u7684\u4f4d\u7f6e\u6700\u5c0f/\u6700\u5927\uff0c\u90a3\u4e48\u8be5\u77f3\u5b50\u88ab\u79f0\u4f5c \u7aef\u70b9\u77f3\u5b50 \u3002\u6bcf\u4e2a\u56de\u5408\uff0c\u4f60\u53ef\u4ee5\u5c06\u4e00\u9897\u7aef\u70b9\u77f3\u5b50\u62ff\u8d77\u5e76\u79fb\u52a8\u5230\u4e00\u4e2a\u672a\u5360\u7528\u7684\u4f4d\u7f6e\uff0c\u4f7f\u5f97\u8be5\u77f3\u5b50\u4e0d\u518d\u662f\u4e00\u9897\u7aef\u70b9\u77f3\u5b50\u3002\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u77f3\u5b50\u50cf\xa0stones = [1,2,5]\xa0\u8fd9\u6837\uff0c\u4f60\u5c06 \u65e0\u6cd5 \u79fb\u52a8\u4f4d\u4e8e\u4f4d\u7f6e 5 \u7684\u7aef\u70b9\u77f3\u5b50\uff0c\u56e0\u4e3a\u65e0\u8bba\u5c06\u5b83\u79fb\u52a8\u5230\u4efb\u4f55\u4f4d\u7f6e\uff08\u4f8b\u5982 0 \u6216 3\uff09\uff0c\u8be5\u77f3\u5b50\u90fd\u4ecd\u7136\u4f1a\u662f\u7aef\u70b9\u77f3\u5b50\u3002\u5f53\u4f60\u65e0\u6cd5\u8fdb\u884c\u4efb\u4f55\u79fb\u52a8\u65f6\uff0c\u5373\uff0c\u8fd9\u4e9b\u77f3\u5b50\u7684\u4f4d\u7f6e\u8fde\u7eed\u65f6\uff0c\u6e38\u620f\u7ed3\u675f\u3002\u8981\u4f7f\u6e38\u620f\u7ed3\u675f\uff0c\u4f60\u53ef\u4ee5\u6267\u884c\u7684\u6700\u5c0f\u548c\u6700\u5927\u79fb\u52a8\u6b21\u6570\u5206\u522b\u662f\u591a\u5c11\uff1f \u4ee5\u957f\u5ea6\u4e3a 2 \u7684\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u7b54\u6848\uff1aanswer = [minimum_moves, maximum_moves] \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-07"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a12.9MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> numMovesStonesII(vector<int>& stones) {\n        int n = stones.size();\n        sort(stones.begin(), stones.end());\n        if (stones[n - 1] - stones[0] + 1 == n) return vector<int>{0, 0};\n        // nmax : [1,2,4,8,9], \u6eda\u52a8\u7684\u9632\u6b62\u628a1\u653e\u5165[2,9]\u6216\u8005\u628a9\u653e\u5165[1,8], \u8ba1\u7b97\u7a7a\u4f4d\u518d\u51cf\u53bb\u5df2\u7ecf\u5b58\u5728\u4f4d\u7f6e\u4e0a\u7684\u6570\u5b57\u4e2a\u6570\n        int nmin = INT_MAX, nmax = max(stones[n - 1] - stones[1] - 1 - (n - 3), stones[n - 2] - stones[0] - 1 - (n - 3));\n        // ec: [l, r]\u4e2d\u7684\u7a7a\u4f4d\n        for (int l = 0, r = 0, ec = 0; r < n; l++) {\n            // \u4fdd\u8bc1\u7a7a\u4f4d\u6570\u91cf>=\u5916\u9762\u7684\u6570\u91cf\n            while (r + 1 < n && n - (r - l + 1) > ec) ec += stones[r + 1] - stones[r] - 1, r++;\n            if (r + 1 == n && n - (r - l + 1) > ec) break;\n            // cnt: [l, r]\u5916\u9762\u8fd8\u5269\u51e0\u4e2a\u6570\u5b57, lc: \u5916\u9762\u7684\u6570\u5b57\u586b\u7a7a\u540e\u8fd8\u5269\u51e0\u4e2a\u7a7a\u4f4d\n            int cnt = n - (r - l + 1), lc = ec - cnt;\n            // eg: [1,10,100]\u5982\u679c\u6240\u6709\u7684\u6570\u5b57\u90fd\u7528\u5b8c\u4e86\u4f46\u8fd8\u5b58\u5728lc, \u90a3\u5c31\u76f4\u63a5\u9010\u4e2a\u653e\u5165lc\n            if (cnt == 0 && lc) nmin = min(nmin, lc);\n            // eg: [1,2,4,8]\u5982\u679clc\u6ca1\u4e86\u8bf4\u660e\u521a\u597d\u653e\u5b8c\n            else if (lc == 0) nmin = min(nmin, cnt);\n            // eg: [1,2,4]\u5982\u679clc\u8fd8\u52691\u4e2a\uff0c\u5269\u4e0b\u76841\u4e2a\u4e0d\u80fd\u76f4\u63a5\u653e\u5165\u7a7a\u4f4d\uff0c\u9700\u8981\u501f\u52a9\u53e6\u4e00\u7aef\u7684\u4e00\u4e2a\u5236\u9020\u53ea\u5269\u751f\n            else if (lc == 1) nmin = min(nmin, cnt + 2);\n            else nmin = min(nmin, cnt + 1);\n            ec -= stones[l + 1] - stones[l] - 1;\n        }\n        return vector<int>{nmin, nmax};\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-07"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def numMovesStonesII(self, stones: List[int]) -> List[int]:\n        n = len(stones)\n        stones.sort()\n        if stones[n - 1] - stones[0] + 1 == n:\n            return [0, 0]\n        nmin, nmax = 0x7fffffff, max(\n            stones[n - 1] - stones[1] - 1 - (n - 3), stones[n - 2] - stones[0] - 1 - (n - 3))\n        l = r = ec = 0\n        while r < n:\n            while r + 1 < n and n - (r - l + 1) > ec:\n                ec += stones[r + 1] - stones[r] - 1\n                r += 1\n            if r + 1 == n and n - (r - l + 1) > ec:\n                break\n            cnt = n - (r - l + 1)\n            lc = ec - cnt\n            if cnt == 0 and lc:\n                nmin = min(nmin, lc)\n            elif lc == 0:\n                nmin = min(nmin, cnt)\n            elif lc == 1:\n                nmin = min(nmin, cnt + 2)\n            else:\n                nmin = min(nmin, cnt + 1)\n            ec -= stones[l + 1] - stones[l] - 1\n            l += 1\n        return [nmin, nmax]\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-07"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.3MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn num_moves_stones_ii(mut stones: Vec<i32>) -> Vec<i32> {\n        use std::cmp::{max, min};\n        let n = stones.len();\n        stones.sort();\n        if stones[n - 1] - stones[0] + 1 == n as i32 {\n            vec![0, 0]\n        } else {\n            let (mut nmin, nmax) = (\n                i32::MAX,\n                max(\n                    stones[n - 1] - stones[1] - 1 - (n as i32 - 3),\n                    stones[n - 2] - stones[0] - 1 - (n as i32 - 3),\n                ),\n            );\n            let (mut l, mut r, mut ec) = (0, 0, 0);\n            while r < n {\n                while r + 1 < n && n - (r - l + 1) > ec {\n                    ec += (stones[r + 1] - stones[r] - 1) as usize;\n                    r += 1;\n                }\n                if r + 1 == n && n - (r - l + 1) > ec {\n                    break;\n                }\n                let cnt = n - (r - l + 1);\n                let lc = ec - cnt;\n                if cnt == 0 && lc > 0 {\n                    nmin = min(nmin, lc as i32);\n                }\n                // eg: [1,2,4,8]\u5982\u679clc\u6ca1\u4e86\u8bf4\u660e\u521a\u597d\u653e\u5b8c\n                else if lc == 0 {\n                    nmin = min(nmin, cnt as i32);\n                }\n                // eg: [1,2,4]\u5982\u679clc\u8fd8\u52691\u4e2a\uff0c\u5269\u4e0b\u76841\u4e2a\u4e0d\u80fd\u76f4\u63a5\u653e\u5165\u7a7a\u4f4d\uff0c\u9700\u8981\u501f\u52a9\u53e6\u4e00\u7aef\u7684\u4e00\u4e2a\u5236\u9020\u53ea\u5269\u751f\n                else if lc == 1 {\n                    nmin = min(nmin, cnt as i32 + 2);\n                } else {\n                    nmin = min(nmin, cnt as i32 + 1);\n                }\n                ec -= (stones[l + 1] - stones[l] - 1) as usize;\n                l += 1;\n            }\n            vec![nmin, nmax]\n        }\n    }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>r});var t=s(30758);const i={},l=t.createContext(i);function c(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);