"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[97116],{69511:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var t=s(86070),i=s(25710);const r={},l="1039.\u591a\u8fb9\u5f62\u4e09\u89d2\u5256\u5206\u7684\u6700\u4f4e\u5f97\u5206",a={id:"leetcode/1001-1100/\u591a\u8fb9\u5f62\u4e09\u89d2\u5256\u5206\u7684\u6700\u4f4e\u5f97\u5206",title:"1039.\u591a\u8fb9\u5f62\u4e09\u89d2\u5256\u5206\u7684\u6700\u4f4e\u5f97\u5206",description:"\u94fe\u63a5\uff1a1039.\u591a\u8fb9\u5f62\u4e09\u89d2\u5256\u5206\u7684\u6700\u4f4e\u5f97\u5206",source:"@site/docs/leetcode/1001-1100/1039.\u591a\u8fb9\u5f62\u4e09\u89d2\u5256\u5206\u7684\u6700\u4f4e\u5f97\u5206.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u591a\u8fb9\u5f62\u4e09\u89d2\u5256\u5206\u7684\u6700\u4f4e\u5f97\u5206",permalink:"/web/site/docs/leetcode/1001-1100/\u591a\u8fb9\u5f62\u4e09\u89d2\u5256\u5206\u7684\u6700\u4f4e\u5f97\u5206",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1039,frontMatter:{},sidebar:"journal",previous:{title:"1038.\u4ece\u4e8c\u53c9\u641c\u7d22\u6811\u5230\u66f4\u5927\u548c\u6811",permalink:"/web/site/docs/leetcode/1001-1100/\u4ece\u4e8c\u53c9\u641c\u7d22\u6811\u5230\u66f4\u5927\u548c\u6811"},next:{title:"1040.\u79fb\u52a8\u77f3\u5b50\u76f4\u5230\u8fde\u7eedII",permalink:"/web/site/docs/leetcode/1001-1100/\u79fb\u52a8\u77f3\u5b50\u76f4\u5230\u8fde\u7eedII"}},d={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function c(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"1039\u591a\u8fb9\u5f62\u4e09\u89d2\u5256\u5206\u7684\u6700\u4f4e\u5f97\u5206",children:"1039.\u591a\u8fb9\u5f62\u4e09\u89d2\u5256\u5206\u7684\u6700\u4f4e\u5f97\u5206"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-score-triangulation-of-polygon",children:"1039.\u591a\u8fb9\u5f62\u4e09\u89d2\u5256\u5206\u7684\u6700\u4f4e\u5f97\u5206"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5047\u8bbe\u5c06\u591a\u8fb9\u5f62 \u5256\u5206\xa0\u4e3a n - 2\xa0\u4e2a\u4e09\u89d2\u5f62\u3002\u5bf9\u4e8e\u6bcf\u4e2a\u4e09\u89d2\u5f62\uff0c\u8be5\u4e09\u89d2\u5f62\u7684\u503c\u662f\u9876\u70b9\u6807\u8bb0\u7684\u4e58\u79ef\uff0c\u4e09\u89d2\u5256\u5206\u7684\u5206\u6570\u662f\u8fdb\u884c\u4e09\u89d2\u5256\u5206\u540e\u6240\u6709 n - 2\xa0\u4e2a\u4e09\u89d2\u5f62\u7684\u503c\u4e4b\u548c\u3002\u8fd4\u56de \u591a\u8fb9\u5f62\u8fdb\u884c\u4e09\u89d2\u5256\u5206\u540e\u53ef\u4ee5\u5f97\u5230\u7684\u6700\u4f4e\u5206 \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-02"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a56ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.4MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][j]\u8868\u793a\u4ece\u7b2ci\u4e2a\u70b9\u5230\u7b2cj\u4e2a\u70b9\u80fd\u7ec4\u6210\u7684\u4e09\u89d2\u5f62\u6700\u5c0f\u503c\uff0c\u6bcf\u6b21\u4ece\u4e2d\u9009\u4e00\u4e2a\u70b9\uff0c\u628a\u8fd9\u4e00\u6bb5\u5206\u6210\u4e09\u90e8\u5206\u8fdb\u884c\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minScoreTriangulation(vector<int>& values) {\n        unordered_map<int, unordered_map<int, int>> m;\n        int n = values.size();\n        function<int(int, int)> dfs = [&](int start, int end) {\n            if (start + 2 > end) return 0;\n            else if (start + 2 == end) return values[start] * values[start + 1] * values[end];\n            else if (m.count(start) && m[start].count(end)) return m[start][end];\n            else {\n                int s = INT_MAX;\n                for (int i = start + 1; i < end; i++) {\n                    s = min(s, values[start] * values[end] * values[i] + dfs(start, i) + dfs(i, end));\n                }\n                return m[start][end] = s;\n            }\n        };\n        return dfs(0, n - 1);\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-02"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a128ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.5MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n      def minScoreTriangulation(self, values: List[int]) -> int:\n          n = len(values)\n  \n          @cache\n          def dfs(start: int, end: int):\n              if start + 2 > end:\n                  return 0\n              elif start + 2 == end:\n                  return values[start] * values[start + 1] * values[end]\n              else:\n                  s = 0x7fffffff\n                  for i in range(start + 1, end):\n                      s = min(s, values[start] * values[end] * values[i] + dfs(start, i) + dfs(i, end))\n                  return s\n          return dfs(0, n-1)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-02"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn min_score_triangulation(values: Vec<i32>) -> i32 {\n        use std::collections::HashMap;\n        let mut m: HashMap<usize, HashMap<usize, i32>> = HashMap::new();\n        let n = values.len();\n        fn dfs(\n            m: &mut HashMap<usize, HashMap<usize, i32>>,\n            values: &Vec<i32>,\n            n: usize,\n            start: usize,\n            end: usize,\n        ) -> i32 {\n            if start + 2 > end {\n                0\n            } else if start + 2 == end {\n                values[start] * values[start + 1] * values[end]\n            } else if m.contains_key(&start) && m.get(&start).unwrap().contains_key(&end) {\n                *m.get(&start).unwrap().get(&end).unwrap()\n            } else {\n                let mut s = i32::MAX;\n                for i in start + 1..end {\n                    s = s.min(\n                        values[start] * values[end] * values[i]\n                            + dfs(m, values, n, start, i)\n                            + dfs(m, values, n, i, end),\n                    )\n                }\n                m.entry(start).or_insert(HashMap::new()).insert(end, s);\n                s\n            }\n        }\n        dfs(&mut m, &values, n, 0, n - 1)\n    }\n}\n"})})]})}function o(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>a});var t=s(30758);const i={},r=t.createContext(i);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);