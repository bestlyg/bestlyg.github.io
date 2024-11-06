"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[99303],{14391:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>o,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var s=i(86070),l=i(31503);const c={},r="88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",t={id:"leetcode/1-100/\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",title:"88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",description:"\u94fe\u63a5\uff1a88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",source:"@site/docs/leetcode/1-100/88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",permalink:"/docs/leetcode/1-100/\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:88,frontMatter:{},sidebar:"journal",previous:{title:"86.\u5206\u9694\u94fe\u8868",permalink:"/docs/leetcode/1-100/\u5206\u9694\u94fe\u8868"},next:{title:"89.\u683c\u96f7\u7f16\u7801",permalink:"/docs/leetcode/1-100/\u683c\u96f7\u7f16\u7801"}},u={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - c",id:"\u9898\u89e3-2---c",level:2},{value:"\u9898\u89e3 3 - c",id:"\u9898\u89e3-3---c",level:2},{value:"\u9898\u89e3 4 - cpp",id:"\u9898\u89e3-4---cpp",level:2},{value:"\u9898\u89e3 5 - cpp",id:"\u9898\u89e3-5---cpp",level:2},{value:"\u9898\u89e3 6 - python",id:"\u9898\u89e3-6---python",level:2},{value:"\u9898\u89e3 7 - rust",id:"\u9898\u89e3-7---rust",level:2}];function m(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"88\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",children:"88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/merge-sorted-array",children:"88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u6392\u5e8f",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a\u6709\u5e8f\u6574\u6570\u6570\u7ec4 nums1 \u548c nums2\uff0c\u8bf7\u4f60\u5c06 nums2 \u5408\u5e76\u5230 nums1 \u4e2d\uff0c\u4f7f nums1 \u6210\u4e3a\u4e00\u4e2a\u6709\u5e8f\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-05"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4ece\u540e\u5f80\u524d\u904d\u5386\uff0c\u8282\u7701\u7a7a\u95f4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function merge(nums1: number[], m: number, nums2: number[], n: number): void {\n  if (m === 0) {\n    nums1.length = 0;\n    nums1.push(...nums2);\n  } else if (n === 0) {\n  } else {\n    let lPos = m - 1;\n    let rPos = n - 1;\n    let curPos = m + n - 1;\n    while (curPos >= 0) {\n      const num1 = nums1[lPos];\n      const num2 = nums2[rPos];\n      let curNum = num1;\n      if (lPos < 0) {\n        rPos--;\n        curNum = num2;\n      } else if (rPos < 0) {\n        lPos--;\n      } else if (num1 >= num2) {\n        lPos--;\n      } else {\n        rPos--;\n        curNum = num2;\n      }\n      nums1[curPos--] = curNum;\n    }\n  }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---c",children:"\u9898\u89e3 2 - c"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-30"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4ece\u540e\u5f80\u524d\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n){\n    int i = m + n - 1, i1 = m - 1, i2 = n - 1;\n    while (i >= 0 && i1 >= 0 && i2 >= 0) {\n        if (nums1[i1] >= nums2[i2]) nums1[i--] = nums1[i1--];\n        else nums1[i--] = nums2[i2--];\n    }\n    if (i1 < 0 && i2 >= 0) while(i >= 0) nums1[i--] = nums2[i2--];\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---c",children:"\u9898\u89e3 3 - c"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-30"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"int comp(const void *a, const void *b) {\n    return *(int *)a - *(int *)b;\n}\nbool containsDuplicate(int* nums, int numsSize){\n    qsort(nums, numsSize, sizeof(int), comp);\n    int f = 0;\n    for (int i = 1; i < numsSize; i++) {\n        if (nums[i - 1] == nums[i]) {\n            f = 1;\n            break;\n        }\n    }\n    return f;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-4---cpp",children:"\u9898\u89e3 4 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-21"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4ece\u540e\u5f80\u524d\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        int idx = m + n - 1, idx1 = m - 1, idx2 = n - 1;\n        while (idx1 >= 0 || idx2 >= 0) {\n            if (idx1 >= 0 && (idx2 < 0 || nums1[idx1] >= nums2[idx2])) {\n                nums1[idx--] = nums1[idx1--];\n            } else {\n                nums1[idx--] = nums2[idx2--];\n            }\n        }\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-5---cpp",children:"\u9898\u89e3 5 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-13"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.77MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        for (int idx = nums1.size() - 1, i1 = m - 1, i2 = n - 1; idx >= 0; idx--) {\n            if (i2 < 0 || i1 >= 0 && nums1[i1] > nums2[i2]) {\n                nums1[idx] = nums1[i1--];\n            } else {\n                nums1[idx] = nums2[i2--];\n            }\n        }\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-6---python",children:"\u9898\u89e3 6 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-13"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.68MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        i1 = m-1\n        i2 = n-1\n        for idx in range(len(nums1) - 1, -1, -1):\n            if i2 < 0 or i1 >= 0 and nums1[i1] > nums2[i2]:\n                nums1[idx] = nums1[i1]\n                i1 -= 1\n            else:\n                nums1[idx] = nums2[i2]\n                i2 -= 1\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-7---rust",children:"\u9898\u89e3 7 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-13"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.09MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {\n        let m = m as usize;\n        let n = n as usize;\n        let mut i1 = m - 1;\n        let mut i2 = n - 1;\n        for idx in (0..nums1.len()).rev() {\n            if i2 >= n || i1 < m && nums1[i1] > nums2[i2] {\n                nums1[idx] = nums1[i1];\n                i1 -= 1;\n            } else {\n                nums1[idx] = nums2[i2];\n                i2 -= 1;\n            }\n        }\n    }\n}\n"})})]})}function o(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(m,{...n})}):m(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>t});var s=i(30758);const l={},c=s.createContext(l);function r(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);