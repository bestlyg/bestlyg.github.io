"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[35959],{86104:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>m,contentTitle:()=>u,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=s(86070),t=s(25710);const r={},u="18.\u56db\u6570\u4e4b\u548c",l={id:"leetcode/1-100/\u56db\u6570\u4e4b\u548c",title:"18.\u56db\u6570\u4e4b\u548c",description:"\u94fe\u63a5\uff1a18.\u56db\u6570\u4e4b\u548c",source:"@site/docs/leetcode/1-100/18.\u56db\u6570\u4e4b\u548c.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u56db\u6570\u4e4b\u548c",permalink:"/docs/leetcode/1-100/\u56db\u6570\u4e4b\u548c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{},sidebar:"journal",previous:{title:"17.\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408",permalink:"/docs/leetcode/1-100/\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408"},next:{title:"19.\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2cN\u4e2a\u7ed3\u70b9",permalink:"/docs/leetcode/1-100/\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2cN\u4e2a\u7ed3\u70b9"}},m={},c=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"18\u56db\u6570\u4e4b\u548c",children:"18.\u56db\u6570\u4e4b\u548c"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/4sum",children:"18.\u56db\u6570\u4e4b\u548c"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u6392\u5e8f",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u7531 n \u4e2a\u6574\u6570\u7ec4\u6210\u7684\u6570\u7ec4\xa0nums \uff0c\u548c\u4e00\u4e2a\u76ee\u6807\u503c target \u3002\u8bf7\u4f60\u627e\u51fa\u5e76\u8fd4\u56de\u6ee1\u8db3\u4e0b\u8ff0\u5168\u90e8\u6761\u4ef6\u4e14\u4e0d\u91cd\u590d\u7684\u56db\u5143\u7ec4\xa0[nums[a], nums[b], nums[c], nums[d]]\xa0\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-05"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.7MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"/**\n* @param {number[]} nums\n* @param {number} target\n* @return {number[][]}\n*/\nvar fourSum = function(nums, target) {\n    const quadruplets = [];\n    if (nums.length < 4) {\n        return quadruplets;\n    }\n    nums.sort((x, y) => x - y);\n    const length = nums.length;\n    for (let i = 0; i < length - 3; i++) {\n        if (i > 0 && nums[i] === nums[i - 1]) {\n            continue;\n        }\n        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {\n            break;\n        }\n        if (nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] < target) {\n            continue;\n        }\n        for (let j = i + 1; j < length - 2; j++) {\n            if (j > i + 1 && nums[j] === nums[j - 1]) {\n                continue;\n            }\n            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {\n                break;\n            }\n            if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target) {\n                continue;\n            }\n            let left = j + 1, right = length - 1;\n            while (left < right) {\n                const sum = nums[i] + nums[j] + nums[left] + nums[right];\n                if (sum === target) {\n                    quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);\n                    while (left < right && nums[left] === nums[left + 1]) {\n                        left++;\n                    }\n                    left++;\n                    while (left < right && nums[right] === nums[right - 1]) {\n                        right--;\n                    }\n                    right--;\n                } else if (sum < target) {\n                    left++;\n                } else {\n                    right--;\n                }\n            }\n        }\n    }\n    return quadruplets;\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-15"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a12.8MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<vector<int>> fourSum(vector<int>& nums, int target) {\n        int n = nums.size();\n        vector<vector<int>> res;\n        sort(nums.begin(), nums.end());\n        for (int i = 0; i + 3 < n && (nums[i] <= target || nums[i] < 0); i++) {\n            if (i > 0 && nums[i] == nums[i - 1]) continue;\n            for (int j = i + 1; j + 2 < n && (nums[i] + nums[j] <= target || nums[j] < 0); j++) {\n                if (j > i + 1 && nums[j] == nums[j - 1]) continue;\n                long long num = nums[i] + nums[j];\n                int l = j + 1, r = n - 1;\n                while (l < r) {\n                    if (num + nums[l] + nums[r] > target) r--;\n                    else if (num + nums[l] + nums[r] < target)  l++;\n                    else {\n                        res.push_back({ nums[i], nums[j], nums[l], nums[r] });\n                        while (l + 1 < r && nums[l + 1] == nums[l]) l++;\n                        while (r - 1 > l && nums[r - 1] == nums[r]) r--;\n                        l++;\n                        r--;\n                    }\n                }\n            }\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-15"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a500ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:\n        n = len(nums)\n        res = []\n        nums.sort()\n        i = 0\n        while i + 3 < n and (nums[i] <= target or nums[i] < 0):\n            if i > 0 and nums[i] == nums[i - 1]:\n                i += 1\n                continue\n            j = i + 1\n            while j + 2 < n and (nums[i] + nums[j] <= target or nums[j] < 0):\n                if j > i + 1 and nums[j] == nums[j-1]:\n                    j += 1\n                    continue\n                num = nums[i] + nums[j]\n                l = j + 1\n                r = n-1\n                while l < r:\n                    if num + nums[l] + nums[r] > target:\n                        r -= 1\n                    elif num + nums[l] + nums[r] < target:\n                        l += 1\n                    else:\n                        res.append([nums[i], nums[j], nums[l], nums[r]])\n                        while l + 1 < r and nums[l + 1] == nums[l]:\n                            l += 1\n                        while r - 1 > l and nums[r - 1] == nums[r]:\n                            r -= 1\n                        l += 1\n                        r -= 1\n                j += 1\n            i += 1\n        return res\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-15"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn four_sum(mut nums: Vec<i32>, target: i32) -> Vec<Vec<i32>> {\n        let n = nums.len();\n        let mut res = vec![];\n        nums.sort();\n        let mut i = 0;\n        while i + 3 < n && (nums[i] <= target || nums[i] < 0) {\n            if i > 0 && nums[i] == nums[i - 1] {\n                i += 1;\n                continue;\n            }\n            let mut j = i + 1;\n            while j + 2 < n && (nums[i] + nums[j] <= target || nums[j] < 0) {\n                if j > i + 1 && nums[j] == nums[j - 1] {\n                    j += 1;\n                    continue;\n                }\n                let num = (nums[i] + nums[j]) as i64;\n                let mut l = j + 1;\n                let mut r = n - 1;\n                while l < r {\n                    let num = num + nums[l] as i64 + nums[r] as i64;\n                    let target = target as i64;\n                    if num > target {\n                        r -= 1;\n                    } else if num < target {\n                        l += 1;\n                    } else {\n                        res.push(vec![nums[i], nums[j], nums[l], nums[r]]);\n                        while l + 1 < r && nums[l + 1] == nums[l] {\n                            l += 1;\n                        }\n                        while r - 1 > l && nums[r - 1] == nums[r] {\n                            r -= 1;\n                        }\n                        l += 1;\n                        r -= 1;\n                    }\n                }\n                j += 1;\n            }\n            i += 1;\n        }\n        res\n    }\n}\n"})})]})}function o(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>u,x:()=>l});var i=s(30758);const t={},r=i.createContext(t);function u(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:u(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);