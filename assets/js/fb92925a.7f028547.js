"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[93641],{8409:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"leetcode/1101-1200/\u4f7f\u6570\u7ec4\u4e25\u683c\u9012\u589e","title":"1187.\u4f7f\u6570\u7ec4\u4e25\u683c\u9012\u589e","description":"\u94fe\u63a5\uff1a1187.\u4f7f\u6570\u7ec4\u4e25\u683c\u9012\u589e","source":"@site/docs/leetcode/1101-1200/1187.\u4f7f\u6570\u7ec4\u4e25\u683c\u9012\u589e.md","sourceDirName":"leetcode/1101-1200","slug":"/leetcode/1101-1200/\u4f7f\u6570\u7ec4\u4e25\u683c\u9012\u589e","permalink":"/docs/leetcode/1101-1200/\u4f7f\u6570\u7ec4\u4e25\u683c\u9012\u589e","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1187,"frontMatter":{},"sidebar":"journal","previous":{"title":"1186.\u5220\u9664\u4e00\u6b21\u5f97\u5230\u5b50\u6570\u7ec4\u6700\u5927\u548c","permalink":"/docs/leetcode/1101-1200/\u5220\u9664\u4e00\u6b21\u5f97\u5230\u5b50\u6570\u7ec4\u6700\u5927\u548c"},"next":{"title":"1189.\u201c\u6c14\u7403\u201d\u7684\u6700\u5927\u6570\u91cf","permalink":"/docs/leetcode/1101-1200/\u201c\u6c14\u7403\u201d\u7684\u6700\u5927\u6570\u91cf"}}');var t=r(86070),s=r(31503);const d={},c="1187.\u4f7f\u6570\u7ec4\u4e25\u683c\u9012\u589e",l={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"1187\u4f7f\u6570\u7ec4\u4e25\u683c\u9012\u589e",children:"1187.\u4f7f\u6570\u7ec4\u4e25\u683c\u9012\u589e"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/make-array-strictly-increasing",children:"1187.\u4f7f\u6570\u7ec4\u4e25\u683c\u9012\u589e"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u52a8\u6001\u89c4\u5212\u3001\u6392\u5e8f",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a\u6574\u6570\u6570\u7ec4\xa0arr1 \u548c arr2\uff0c\u8fd4\u56de\u4f7f\xa0arr1\xa0\u4e25\u683c\u9012\u589e\u6240\u9700\u8981\u7684\u6700\u5c0f\u300c\u64cd\u4f5c\u300d\u6570\uff08\u53ef\u80fd\u4e3a 0\uff09\u3002\u6bcf\u4e00\u6b65\u300c\u64cd\u4f5c\u300d\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5206\u522b\u4ece arr1 \u548c arr2 \u4e2d\u5404\u9009\u51fa\u4e00\u4e2a\u7d22\u5f15\uff0c\u5206\u522b\u4e3a\xa0i \u548c\xa0j\uff0c0 <=\xa0i < arr1.length\xa0\u548c\xa00 <= j < arr2.length\uff0c\u7136\u540e\u8fdb\u884c\u8d4b\u503c\u8fd0\u7b97\xa0arr1[i] = arr2[j]\u3002\u5982\u679c\u65e0\u6cd5\u8ba9\xa0arr1\xa0\u4e25\u683c\u9012\u589e\uff0c\u8bf7\u8fd4\u56de\xa0-1\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-20"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a604ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a71.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\uff0c\u6bcf\u6b21\u8bb0\u5f55\u5f53\u524d\u4e0b\u6807\u548c\u4e0a\u4e00\u4e2a\u503c\uff0c\u5982\u679c\u5f53\u524d\u503c\u66ff\u6362\uff0c\u5e94\u8be5\u6362\u6210\u6700\u5927\u53ef\u6362\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n    public:\n        int makeArrayIncreasing(vector<int>& arr1, vector<int>& arr2) {\n            set<int> s;\n            for (auto &num : arr2) s.insert(num);\n            unordered_map<int, unordered_map<int, int>> m;\n            function<int(int, int)> dfs = [&](int idx, int pre) -> int {\n                if (m[idx].count(pre)) return m[idx][pre];\n                if (idx == - 1) return m[idx][pre] = 0;\n                int res = INT_MAX;\n                if (arr1[idx] < pre) res = dfs(idx - 1, arr1[idx]);\n                auto find = s.lower_bound(pre);\n                if (find != s.begin()) {\n                    int next = dfs(idx - 1, *(--find));\n                    if (next != INT_MAX)\n                    res = min(res, 1 + next);\n                }\n                return m[idx][pre] = res;\n            };\n            int res = dfs(arr1.size() - 1, INT_MAX);\n            return res == INT_MAX ? -1 : res;\n        }\n    };\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-20"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a724ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a131.3MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def makeArrayIncreasing(self, arr1: List[int], arr2: List[int]) -> int:\n        arr2.sort()\n        @cache\n        def dfs(idx: int, pre: int) -> int:\n            if idx == -1:\n                return 0\n            res = inf\n            if arr1[idx] < pre:\n                res = dfs(idx-1, arr1[idx])\n            find = bisect_left(arr2, pre)\n            if find > 0:\n                res = min(res, dfs(idx-1, arr2[find - 1]) + 1)\n            return res\n        res = dfs(len(arr1) - 1, inf)\n        return res if res != inf else -1\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},31503:(n,e,r)=>{r.d(e,{R:()=>d,x:()=>c});var i=r(30758);const t={},s=i.createContext(t);function d(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);