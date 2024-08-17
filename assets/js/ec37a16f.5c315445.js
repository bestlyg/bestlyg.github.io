"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[79071],{60718:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>l,contentTitle:()=>u,default:()=>r,frontMatter:()=>c,metadata:()=>s,toc:()=>o});var m=e(86070),t=e(25710);const c={},u="1093.\u5927\u6837\u672c\u7edf\u8ba1",s={id:"leetcode/1001-1100/\u5927\u6837\u672c\u7edf\u8ba1",title:"1093.\u5927\u6837\u672c\u7edf\u8ba1",description:"\u94fe\u63a5\uff1a1093.\u5927\u6837\u672c\u7edf\u8ba1",source:"@site/docs/leetcode/1001-1100/1093.\u5927\u6837\u672c\u7edf\u8ba1.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u5927\u6837\u672c\u7edf\u8ba1",permalink:"/docs/leetcode/1001-1100/\u5927\u6837\u672c\u7edf\u8ba1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1093,frontMatter:{},sidebar:"journal",previous:{title:"1092.\u6700\u77ed\u516c\u5171\u8d85\u5e8f\u5217",permalink:"/docs/leetcode/1001-1100/\u6700\u77ed\u516c\u5171\u8d85\u5e8f\u5217"},next:{title:"1094.\u62fc\u8f66",permalink:"/docs/leetcode/1001-1100/\u62fc\u8f66"}},l={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.h1,{id:"1093\u5927\u6837\u672c\u7edf\u8ba1",children:"1093.\u5927\u6837\u672c\u7edf\u8ba1"}),"\n",(0,m.jsxs)(i.blockquote,{children:["\n",(0,m.jsxs)(i.p,{children:["\u94fe\u63a5\uff1a",(0,m.jsx)(i.a,{href:"https://leetcode.cn/problems/statistics-from-a-large-sample",children:"1093.\u5927\u6837\u672c\u7edf\u8ba1"}),(0,m.jsx)(i.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,m.jsx)(i.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66\u3001\u6982\u7387\u4e0e\u7edf\u8ba1",(0,m.jsx)(i.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4ee5\u6d6e\u70b9\u6570\u6570\u7ec4\u7684\u5f62\u5f0f\u8fd4\u56de\u6837\u672c\u7684\u7edf\u8ba1\u4fe1\u606f [minimum, maximum, mean, median, mode] \u3002"]}),"\n"]}),"\n",(0,m.jsx)(i.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,m.jsxs)(i.ul,{children:["\n",(0,m.jsx)(i.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-27"}),"\n",(0,m.jsx)(i.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,m.jsx)(i.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8MB"}),"\n",(0,m.jsx)(i.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,m.jsxs)(i.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,m.jsx)(i.pre,{children:(0,m.jsx)(i.code,{className:"language-cpp",children:"class Solution {\npublic:\n    typedef long long ll;\n    vector<double> sampleStats(vector<int>& count) {\n        ll n = count.size(), sum = 0, minimum = n - 1, maximum = 0, cnt = 0, mode = 0, mode_cnt = 0;\n        for (ll i = 0; i < n; i++) {\n            sum += count[i] * i;\n            cnt += count[i];\n            if (count[i]) {\n                minimum = min(minimum, i);\n                maximum = max(maximum, i);\n            }\n            if (count[i] > mode_cnt) {\n                mode = i;\n                mode_cnt = count[i];\n            }\n        }\n        double mean = 1.0 * sum / cnt, num1 = -1, num2 = -1;\n        ll imid1 = cnt / 2, imid2 = (cnt - 1) / 2;\n        for (ll i = 0; i < n && (num1 == -1 || num2 == -1); i++) {\n            ll c = count[i];\n            if (num1 == -1 && imid1 - c < 0) num1 = i;\n            if (num2 == -1 && imid2 - c < 0) num2 = i;\n            imid1 -= c;\n            imid2 -= c;\n        }\n        return vector<double>{ (double)minimum, (double)maximum, mean, (num1 + num2) / 2, (double)mode};\n    }\n};\n"})}),"\n",(0,m.jsx)(i.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,m.jsxs)(i.ul,{children:["\n",(0,m.jsx)(i.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-27"}),"\n",(0,m.jsx)(i.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,m.jsx)(i.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.1MB"}),"\n",(0,m.jsx)(i.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,m.jsxs)(i.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,m.jsx)(i.pre,{children:(0,m.jsx)(i.code,{className:"language-python",children:"class Solution:\n    def sampleStats(self, count: List[int]) -> List[float]:\n        n = len(count)\n        minimum = n - 1\n        maximum = sum = cnt = mode = mode_cnt = 0\n        for i in range(n):\n            sum += count[i] * i\n            cnt += count[i]\n            if count[i]:\n                minimum = min(minimum, i)\n                maximum = max(maximum, i)\n            if count[i] > mode_cnt:\n                mode = i\n                mode_cnt = count[i]\n        mean = sum / cnt\n        num1 = num2 = -1\n        imid1 = cnt // 2\n        imid2 = (cnt - 1) // 2\n        icur = 0\n        for i in range(n):\n            c = count[i]\n            if num1 == -1 and imid1 - c < 0:\n                num1 = i\n            if num2 == -1 and imid2 - c < 0:\n                num2 = i\n            imid1 -= c\n            imid2 -= c\n        return [minimum, maximum, mean, (num1+num2)/2, mode]\n\n"})}),"\n",(0,m.jsx)(i.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,m.jsxs)(i.ul,{children:["\n",(0,m.jsx)(i.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-27"}),"\n",(0,m.jsx)(i.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,m.jsx)(i.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2MB"}),"\n",(0,m.jsx)(i.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,m.jsxs)(i.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,m.jsx)(i.pre,{children:(0,m.jsx)(i.code,{className:"language-rust",children:"impl Solution {\n    pub fn sample_stats(count: Vec<i32>) -> Vec<f64> {\n        use std::cmp::{max, min};\n        let (n, mut sum, mut minimum, mut maximum, mut cnt, mut mode, mut mode_cnt) =\n            (count.len(), 0usize, 0usize, 0usize, 0usize, 0usize, 0usize);\n        minimum = n - 1;\n        for i in 0..n {\n            let c = count[i] as usize;\n            sum += c * i;\n            cnt += c;\n            if c != 0 {\n                minimum = min(minimum, i);\n                maximum = max(maximum, i);\n            }\n            if c > mode_cnt {\n                mode = i;\n                mode_cnt = c;\n            }\n        }\n        let mean = (sum as f64) / (cnt as f64);\n        let (mut num1, mut num2) = (-1f64, -1f64);\n        let (mut imid1, mut imid2) = ((cnt as f64) / 2.0, ((cnt - 1) as f64) / 2.0);\n        for i in 0..n {\n            let c = count[i] as f64;\n            if num1 == -1.0 && imid1 - c < 0.0 {\n                num1 = i as f64;\n            }\n            if num2 == -1.0 && imid2 - c < 0.0 {\n                num2 = i as f64;\n            }\n            imid1 -= c;\n            imid2 -= c;\n        }\n        return vec![\n            minimum as f64,\n            maximum as f64,\n            mean,\n            (num1 + num2) / 2.0,\n            mode as f64,\n        ];\n    }\n}\n"})})]})}function r(n={}){const{wrapper:i}={...(0,t.R)(),...n.components};return i?(0,m.jsx)(i,{...n,children:(0,m.jsx)(d,{...n})}):d(n)}},25710:(n,i,e)=>{e.d(i,{R:()=>u,x:()=>s});var m=e(30758);const t={},c=m.createContext(t);function u(n){const i=m.useContext(c);return m.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function s(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:u(n.components),m.createElement(c.Provider,{value:i},n.children)}}}]);