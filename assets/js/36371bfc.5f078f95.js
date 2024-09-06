"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[79058],{75408:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(86070),s=t(25710);const a={},c="1224.\u6700\u5927\u76f8\u7b49\u9891\u7387",i={id:"leetcode/1201-1300/\u6700\u5927\u76f8\u7b49\u9891\u7387",title:"1224.\u6700\u5927\u76f8\u7b49\u9891\u7387",description:"\u94fe\u63a5\uff1a1224.\u6700\u5927\u76f8\u7b49\u9891\u7387",source:"@site/docs/leetcode/1201-1300/1224.\u6700\u5927\u76f8\u7b49\u9891\u7387.md",sourceDirName:"leetcode/1201-1300",slug:"/leetcode/1201-1300/\u6700\u5927\u76f8\u7b49\u9891\u7387",permalink:"/docs/leetcode/1201-1300/\u6700\u5927\u76f8\u7b49\u9891\u7387",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1224,frontMatter:{},sidebar:"journal",previous:{title:"1223.\u63b7\u9ab0\u5b50\u6a21\u62df",permalink:"/docs/leetcode/1201-1300/\u63b7\u9ab0\u5b50\u6a21\u62df"},next:{title:"1232.\u7f00\u70b9\u6210\u7ebf",permalink:"/docs/leetcode/1201-1300/\u7f00\u70b9\u6210\u7ebf"}},o={},l=[{value:"\u9898\u89e3 1 - rust",id:"\u9898\u89e3-1---rust",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1224\u6700\u5927\u76f8\u7b49\u9891\u7387",children:"1224.\u6700\u5927\u76f8\u7b49\u9891\u7387"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-equal-frequency",children:"1224.\u6700\u5927\u76f8\u7b49\u9891\u7387"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6b63\u6574\u6570\u6570\u7ec4 nums\uff0c\u8bf7\u4f60\u5e2e\u5fd9\u4ece\u8be5\u6570\u7ec4\u4e2d\u627e\u51fa\u80fd\u6ee1\u8db3\u4e0b\u9762\u8981\u6c42\u7684 \u6700\u957f \u524d\u7f00\uff0c\u5e76\u8fd4\u56de\u8be5\u524d\u7f00\u7684\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---rust",children:"\u9898\u89e3 1 - rust"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-08-18"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a3.4MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53ea\u6709\u4e09\u79cd\u60c5\u51b5\u53ef\u4ee5\u6210\u7acb\uff0c1.\u6700\u5927\u9891\u7387\u53ea\u6709\u4e00\uff0c2.\u6240\u6709\u6570\u53ea\u6709\u6700\u5927\u9891\u7387\u548c\u7b2c\u4e8c\u5927\u9891\u7387\u4e14\u6700\u5927\u9891\u7387\u53ea\u6709\u4e00\u79cd\u6570\uff0c3.\u6240\u6709\u6570\u9664\u4e86\u4e00\u4e2a\u90fd\u662f\u6700\u5927\u9891\u7387\uff0c\u5269\u4e0b\u7684\u4e00\u4e2a\u6570\u9891\u7387\u662f 1\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn max_equal_freq(nums: Vec<i32>) -> i32 {\n        use std::collections::HashMap;\n        let (mut freq_map, mut cnt_map) =\n            (HashMap::<usize, usize>::new(), HashMap::<i32, usize>::new());\n        let mut ans = 0;\n        let mut max_freq = 0;\n        for i in 0..nums.len() {\n            let num = nums[i];\n            let cnt = cnt_map.get(&num).unwrap_or(&0);\n            let prev_freq = freq_map.get_mut(cnt);\n            if prev_freq.is_some() {\n                *prev_freq.unwrap() -= 1;\n            }\n            let cnt = *cnt + 1;\n            cnt_map.insert(num, cnt);\n            freq_map.insert(cnt, freq_map.get(&cnt).unwrap_or(&0) + 1);\n            max_freq = max_freq.max(cnt);\n            if max_freq == 1\n                || freq_map.get(&max_freq).unwrap_or(&0) * max_freq\n                    + freq_map.get(&(max_freq - 1)).unwrap_or(&0) * (max_freq - 1)\n                    == i + 1\n                    && *freq_map.get(&max_freq).unwrap_or(&0) == 1\n                || freq_map.get(&max_freq).unwrap_or(&0) * max_freq == i\n                    && *freq_map.get(&1).unwrap_or(&0) == 1\n            {\n                ans = i + 1;\n            }\n        }\n        ans as i32\n    }\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(30758);const s={},a=r.createContext(s);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);