"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[37553],{53627:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>u,metadata:()=>c,toc:()=>o});var r=s(86070),t=s(31503);const u={},i="228.\u6c47\u603b\u533a\u95f4",c={id:"leetcode/201-300/\u6c47\u603b\u533a\u95f4",title:"228.\u6c47\u603b\u533a\u95f4",description:"\u94fe\u63a5\uff1a228.\u6c47\u603b\u533a\u95f4",source:"@site/docs/leetcode/201-300/228.\u6c47\u603b\u533a\u95f4.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u6c47\u603b\u533a\u95f4",permalink:"/docs/leetcode/201-300/\u6c47\u603b\u533a\u95f4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:228,frontMatter:{},sidebar:"journal",previous:{title:"227.\u57fa\u672c\u8ba1\u7b97\u5668II",permalink:"/docs/leetcode/201-300/\u57fa\u672c\u8ba1\u7b97\u5668II"},next:{title:"229.\u591a\u6570\u5143\u7d20II",permalink:"/docs/leetcode/201-300/\u591a\u6570\u5143\u7d20II"}},l={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function m(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"228\u6c47\u603b\u533a\u95f4",children:"228.\u6c47\u603b\u533a\u95f4"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/summary-ranges",children:"228.\u6c47\u603b\u533a\u95f4"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u65e0\u91cd\u590d\u5143\u7d20\u7684\u6709\u5e8f\u6574\u6570\u6570\u7ec4 nums \u3002\u8fd4\u56de \u6070\u597d\u8986\u76d6\u6570\u7ec4\u4e2d\u6240\u6709\u6570\u5b57 \u7684 \u6700\u5c0f\u6709\u5e8f \u533a\u95f4\u8303\u56f4\u5217\u8868\u3002\u4e5f\u5c31\u662f\u8bf4\uff0cnums \u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u6070\u597d\u88ab\u67d0\u4e2a\u533a\u95f4\u8303\u56f4\u6240\u8986\u76d6\uff0c\u5e76\u4e14\u4e0d\u5b58\u5728\u5c5e\u4e8e\u67d0\u4e2a\u8303\u56f4\u4f46\u4e0d\u5c5e\u4e8e nums \u7684\u6570\u5b57 x \u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-01-10"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.2MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u4e00\u904d\u8fdb\u884c\u8ba1\u7b97\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function summaryRanges(nums: number[]): string[] {\n  const stack: [number, number][] = [];\n  for (const num of nums) {\n    if (stack.length === 0) {\n      stack.push([num, num]);\n    } else {\n      const v = stack[stack.length - 1];\n      if (num === v[1] + 1) {\n        v[1] = num;\n      } else {\n        stack.push([num, num]);\n      }\n    }\n  }\n  return stack.map(([num1, num2]) => (num1 === num2 ? num1 + '' : `${num1}->${num2}`));\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-26"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.65MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    vector<string> summaryRanges(vector<int>& nums) {\n        vector<string> res;\n        if (nums.size() == 0) return res;\n        bool prev = false;\n        pair<int, int> cur;\n        for (auto &num : nums) {\n            if (!prev) {\n                prev = true;\n                cur = make_pair(num, num);\n            } else if (cur.second + 1 == num) {\n                cur.second = num;\n            } else {\n                string item = cur.first == cur.second ? to_string(cur.first) : to_string(cur.first) + "->" + to_string(cur.second);\n                res.push_back(item);\n                cur = make_pair(num, num);\n            }\n        }\n        if (prev) {\n            string item = cur.first == cur.second ? to_string(cur.first) : to_string(cur.first) + "->" + to_string(cur.second);\n            res.push_back(item);\n        }\n        return res;\n    }\n};\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-26"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.72MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'class Solution:\n    def summaryRanges(self, nums: List[int]) -> List[str]:\n        if not len(nums):\n            return []\n        res = []\n        prev = False\n        cur = (0, 0)\n        for num in nums:\n            if not prev:\n                prev = True\n                cur = (num, num)\n            elif cur[1] + 1 == num:\n                cur = (cur[0], num)\n            else:\n                item = str(cur[0]) if cur[0] == cur[1] else str(cur[0]) + "->" + str(cur[1])\n                res.append(item)\n                cur = (num, num)\n        if prev:\n            item = str(cur[0]) if cur[0] == cur[1] else str(\n                cur[0]) + "->" + str(cur[1])\n            res.append(item)\n        return res\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-26"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.13MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'impl Solution {\n    pub fn summary_ranges(nums: Vec<i32>) -> Vec<String> {\n        let mut res = vec![];\n        if !nums.is_empty() {\n            let mut prev = false;\n            let mut cur = (0, 0);\n            for num in nums {\n                if !prev {\n                    prev = true;\n                    cur = (num, num);\n                } else if cur.1 + 1 == num {\n                    cur.1 = num;\n                } else {\n                    let item = if cur.0 == cur.1 {\n                        cur.0.to_string()\n                    } else {\n                        let mut s = String::new();\n                        s.push_str(&cur.0.to_string());\n                        s.push_str("->");\n                        s.push_str(&cur.1.to_string());\n                        s\n                    };\n                    res.push(item);\n                    cur = (num, num);\n                }\n            }\n            if prev {\n                let item = if cur.0 == cur.1 {\n                        cur.0.to_string()\n                } else {\n                    let mut s = String::new();\n                    s.push_str(&cur.0.to_string());\n                    s.push_str("->");\n                    s.push_str(&cur.1.to_string());\n                    s\n                };\n                res.push(item);\n            }\n        }\n        res\n    }\n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(m,{...n})}):m(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>c});var r=s(30758);const t={},u=r.createContext(t);function i(n){const e=r.useContext(u);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),r.createElement(u.Provider,{value:e},n.children)}}}]);