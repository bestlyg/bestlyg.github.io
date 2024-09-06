"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[28742],{38319:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var i=s(86070),t=s(25710);const l={},c="2399.\u68c0\u67e5\u76f8\u540c\u5b57\u6bcd\u95f4\u7684\u8ddd\u79bb",r={id:"leetcode/2301-2400/\u68c0\u67e5\u76f8\u540c\u5b57\u6bcd\u95f4\u7684\u8ddd\u79bb",title:"2399.\u68c0\u67e5\u76f8\u540c\u5b57\u6bcd\u95f4\u7684\u8ddd\u79bb",description:"\u94fe\u63a5\uff1a2399.\u68c0\u67e5\u76f8\u540c\u5b57\u6bcd\u95f4\u7684\u8ddd\u79bb",source:"@site/docs/leetcode/2301-2400/2399.\u68c0\u67e5\u76f8\u540c\u5b57\u6bcd\u95f4\u7684\u8ddd\u79bb.md",sourceDirName:"leetcode/2301-2400",slug:"/leetcode/2301-2400/\u68c0\u67e5\u76f8\u540c\u5b57\u6bcd\u95f4\u7684\u8ddd\u79bb",permalink:"/docs/leetcode/2301-2400/\u68c0\u67e5\u76f8\u540c\u5b57\u6bcd\u95f4\u7684\u8ddd\u79bb",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2399,frontMatter:{},sidebar:"journal",previous:{title:"2397.\u88ab\u5217\u8986\u76d6\u7684\u6700\u591a\u884c\u6570",permalink:"/docs/leetcode/2301-2400/\u88ab\u5217\u8986\u76d6\u7684\u6700\u591a\u884c\u6570"},next:{title:"2404.\u51fa\u73b0\u6700\u9891\u7e41\u7684\u5076\u6570\u5143\u7d20",permalink:"/docs/leetcode/2401-2500/\u51fa\u73b0\u6700\u9891\u7e41\u7684\u5076\u6570\u5143\u7d20"}},d={},a=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"2399\u68c0\u67e5\u76f8\u540c\u5b57\u6bcd\u95f4\u7684\u8ddd\u79bb",children:"2399.\u68c0\u67e5\u76f8\u540c\u5b57\u6bcd\u95f4\u7684\u8ddd\u79bb"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/check-distances-between-same-letters",children:"2399.\u68c0\u67e5\u76f8\u540c\u5b57\u6bcd\u95f4\u7684\u8ddd\u79bb"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5982\u679c s \u662f\u4e00\u4e2a \u5300\u6574 \u5b57\u7b26\u4e32\uff0c\u8fd4\u56de true \uff1b\u5426\u5219\uff0c\u8fd4\u56de false \u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-04"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.4MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"var checkDistances = function (s, distance) {\n        const cache = {};\n        for (let i = 0; i < s.length; i++) {\n          const prev = cache[s[i]];\n          if (prev !== undefined) {\n            const d = distance[s.codePointAt(i) - 'a'.codePointAt(0)];\n            if (d !== i - prev - 1) return false;\n          } else {\n            cache[s[i]] = i;\n          }\n        }\n        return true;\n      };\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-09"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a12.8MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool checkDistances(string s, vector<int>& distance) {\n        vector<int> list(26, -1);\n        for (int i = 0; i < s.size(); i++) {\n            if (list[s[i] - 'a'] == -1) list[s[i] - 'a'] = i;\n            else if (i - list[s[i] - 'a'] - 1 != distance[s[i] - 'a']) return false;\n        }\n        return true;\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-09"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.8MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def checkDistances(self, s: str, distance: List[int]) -> bool:\n        l = [-1] * 26\n        for i in range(len(s)):\n            idx = ord(s[i]) - ord('a')\n            if list[idx] == -1:\n                list[idx] = i\n            elif i - list[idx] - 1 != distance[idx]:\n                return False\n        return True\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-09"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn check_distances(s: String, distance: Vec<i32>) -> bool {\n        let s: Vec<usize> = s.chars().map(|v| v as usize).collect();\n        let mut list = vec![-1i32; 26];\n        for i in 0..s.len() {\n            let idx = s[i] - 'a' as usize;\n            if list[idx] == -1 {\n                list[idx] = i as i32;\n            } else if i as i32 - list[idx] - 1 != distance[idx] {\n                return false;\n            }\n        }\n        true\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var i=s(30758);const t={},l=i.createContext(t);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);