"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[88315],{19948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var i=t(86070),s=t(31503);const r={},l="2106.\u6458\u6c34\u679c",c={id:"leetcode/2101-2200/\u6458\u6c34\u679c",title:"2106.\u6458\u6c34\u679c",description:"\u94fe\u63a5\uff1a2106.\u6458\u6c34\u679c",source:"@site/docs/leetcode/2101-2200/2106.\u6458\u6c34\u679c.md",sourceDirName:"leetcode/2101-2200",slug:"/leetcode/2101-2200/\u6458\u6c34\u679c",permalink:"/docs/leetcode/2101-2200/\u6458\u6c34\u679c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2106,frontMatter:{},sidebar:"journal",previous:{title:"2105.\u7ed9\u690d\u7269\u6d47\u6c34II",permalink:"/docs/leetcode/2101-2200/\u7ed9\u690d\u7269\u6d47\u6c34II"},next:{title:"2115.\u4ece\u7ed9\u5b9a\u539f\u6750\u6599\u4e2d\u627e\u5230\u6240\u6709\u53ef\u4ee5\u505a\u51fa\u7684\u83dc",permalink:"/docs/leetcode/2101-2200/\u4ece\u7ed9\u5b9a\u539f\u6750\u6599\u4e2d\u627e\u5230\u6240\u6709\u53ef\u4ee5\u505a\u51fa\u7684\u83dc"}},u={},m=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"2106\u6458\u6c34\u679c",children:"2106.\u6458\u6c34\u679c"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-fruits-harvested-after-at-most-k-steps",children:"2106.\u6458\u6c34\u679c"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u524d\u7f00\u548c\u3001\u6ed1\u52a8\u7a97\u53e3",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4f60\u53ef\u4ee5\u6458\u5230\u6c34\u679c\u7684 \u6700\u5927\u603b\u6570 \u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-04"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a388ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a163.4MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6bcf\u5411\u5de6\u8d70\u5230\u4e00\u4e2a\u6c34\u679c\u70b9\uff0c\u5bf9\u53f3\u4fa7\u8fdb\u884c\u4e8c\u5206\u67e5\u627e\u6700\u5927\u80fd\u8d70\u5230\u7684\u6c34\u679c\u70b9\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxTotalFruits(vector<vector<int>>& fruits, int startPos, int k) {\n        int res = 0;\n        vector<vector<int>> l, r;\n        r.push_back(vector<int>{ -1, 0});\n        for (auto &item : fruits) {\n            item[0] -= startPos;\n            if (item[0] < 0) item[0] = -item[0], l.push_back(item);\n            else if (item[0] > 0) r.push_back(item);\n            else res += item[1];\n        }\n        l.push_back(vector<int>{ -1, 0});\n        reverse(l.begin(), l.end());\n        l.push_back(vector<int>{ INT_MAX, 0});\n        r.push_back(vector<int>{ INT_MAX, 0});\n        vector<int> sumL(1, 0), sumR(1, 0);\n        for (auto &item : l) sumL.push_back(sumL.back() + item[1]);\n        for (auto &item : r) sumR.push_back(sumR.back() + item[1]);\n        return res + max(f(l, sumL, r, sumR, k), f(r, sumR, l, sumL, k));\n    }\n    int f(vector<vector<int>> &left, vector<int> &sumL, vector<vector<int>> &right, vector<int> &sumR, int k) {\n        int res = sumR[bs(right, k)];\n        for (int i = 1; i < left.size() && left[i][0] <= k; i++)\n            res = max(res, sumL[i + 1] + sumR[bs(right, k - left[i][0] * 2)]);\n        return res;\n    }\n    int bs(vector<vector<int>> &list, int target) {\n        if (target <= 0) return 0;\n        int l = 0, r = list.size();\n        while (l < r) {\n            int m = (l + r) / 2;\n            if (list[m][0] > target) r = m;\n            else l = m + 1;\n        }\n        return l;\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-04"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a476ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a50.9MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maxTotalFruits(self, fruits: List[List[int]], startPos: int, k: int) -> int:\n        res = 0\n        l, r = [], []\n        r.append([-1, 0])\n        for item in fruits:\n            item[0] -= startPos\n            if item[0] < 0:\n                item[0] = -item[0]\n                l.append(item)\n            elif item[0] > 0:\n                r.append(item)\n            else:\n                res += item[1]\n        l.append([-1, 0])\n        l.reverse()\n        l.append([inf, 0])\n        r.append([inf, 0])\n        sumL, sumR = [0], [0]\n        for item in l:\n            sumL.append(sumL[-1] + item[1])\n        for item in r:\n            sumR.append(sumR[-1] + item[1])\n        def f(left: List[List[int]], sumL: List[int], right: List[List[int]], sumR: List[int], k: int):\n            res = sumR[bs(right, k)]\n            for i in range(1, len(left)):\n                if left[i][0] > k:\n                    break\n                res = max(res, sumL[i + 1] +\n                        sumR[bs(right, k - left[i][0] * 2)])\n            return res\n        def bs(list: List[List[int]], target: int):\n            if target <= 0:\n                return 0\n            l = 0\n            r = len(list)\n            while l < r:\n                m = (l + r) // 2\n                if list[m][0] > target:\n                    r = m\n                else:\n                    l = m + 1\n            return l\n        return res + max(f(l, sumL, r, sumR, k), f(r, sumR, l, sumL, k))\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-04"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.5MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl Solution {\npub fn max_total_fruits(fruits: Vec<Vec<i32>>, start_pos: i32, k: i32) -> i32 {\n    let mut res = 0;\n    let mut l: Vec<Vec<i32>> = vec![];\n    let mut r: Vec<Vec<i32>> = vec![];\n    r.push(vec![-1, 0]);\n    for mut item in fruits {\n        item[0] -= start_pos;\n        if item[0] < 0 {\n            item[0] = -item[0];\n            l.push(item);\n        } else if item[0] > 0 {\n            r.push(item);\n        } else {\n            res += item[1]\n        }\n    }\n    l.push(vec![-1, 0]);\n    l.reverse();\n    l.push(vec![i32::MAX, 0]);\n    r.push(vec![i32::MAX, 0]);\n    let mut suml = vec![0];\n    let mut sumr = vec![0];\n    for item in &l {\n        suml.push(*suml.last().unwrap() + item[1]);\n    }\n    for item in &r {\n        sumr.push(*sumr.last().unwrap() + item[1]);\n    }\n    res + std::cmp::max(f(&l, &suml, &r, &sumr, k), f(&r, &sumr, &l, &suml, k))\n}\n}\nfn f(left: &Vec<Vec<i32>>, suml: &Vec<i32>, right: &Vec<Vec<i32>>, sumr: &Vec<i32>, k: i32) -> i32 {\nlet mut res = sumr[bs(right, k)];\nfor i in 1..left.len() {\n    if left[i][0] > k {\n        break;\n    }\n    res = res.max(suml[i + 1] + sumr[bs(right, k - left[i][0] * 2)]);\n}\nres\n}\nfn bs(list: &Vec<Vec<i32>>, target: i32) -> usize {\nif target <= 0 {\n    0\n} else {\n    let mut l = 0;\n    let mut r = list.len();\n    while l < r {\n        let m = (l + r) / 2;\n        if list[m][0] > target {\n            r = m;\n        } else {\n            l = m + 1;\n        }\n    }\n    l\n}\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(30758);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);