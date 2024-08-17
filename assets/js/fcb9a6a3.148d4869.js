"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[88948],{5364:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var t=i(86070),s=i(25710);const l={},c="219.\u5b58\u5728\u91cd\u590d\u5143\u7d20II",r={id:"leetcode/201-300/\u5b58\u5728\u91cd\u590d\u5143\u7d20II",title:"219.\u5b58\u5728\u91cd\u590d\u5143\u7d20II",description:"\u94fe\u63a5\uff1a219.\u5b58\u5728\u91cd\u590d\u5143\u7d20II",source:"@site/docs/leetcode/201-300/219.\u5b58\u5728\u91cd\u590d\u5143\u7d20II.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u5b58\u5728\u91cd\u590d\u5143\u7d20II",permalink:"/docs/leetcode/201-300/\u5b58\u5728\u91cd\u590d\u5143\u7d20II",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:219,frontMatter:{},sidebar:"journal",previous:{title:"218.\u5929\u9645\u7ebf\u95ee\u9898",permalink:"/docs/leetcode/201-300/\u5929\u9645\u7ebf\u95ee\u9898"},next:{title:"220.\u5b58\u5728\u91cd\u590d\u5143\u7d20III",permalink:"/docs/leetcode/201-300/\u5b58\u5728\u91cd\u590d\u5143\u7d20III"}},o={},a=[{value:"\u9898\u89e3 1 - c",id:"\u9898\u89e3-1---c",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"219\u5b58\u5728\u91cd\u590d\u5143\u7d20ii",children:"219.\u5b58\u5728\u91cd\u590d\u5143\u7d20II"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/contains-duplicate-ii",children:"219.\u5b58\u5728\u91cd\u590d\u5143\u7d20II"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6ed1\u52a8\u7a97\u53e3",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4\u548c\u4e00\u4e2a\u6574\u6570 \xa0k\uff0c\u5224\u65ad\u6570\u7ec4\u4e2d\u662f\u5426\u5b58\u5728\u4e24\u4e2a\u4e0d\u540c\u7684\u7d22\u5f15 \xa0i\xa0 \u548c \xa0j\uff0c\u4f7f\u5f97 \xa0nums [i] = nums [j]\uff0c\u5e76\u4e14 i \u548c j\xa0 \u7684\u5dee\u7684 \u7edd\u5bf9\u503c \u81f3\u591a\u4e3a k\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---c",children:"\u9898\u89e3 1 - c"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-30"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a140ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.4MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u8868\u5b58\u50a8\u503c\u548c\u4e0b\u6807\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"typedef struct hashTable{\n    int key;\n    int idx;\n    UT_hash_handle hh;\n} hashTable;\nbool containsNearbyDuplicate(int* nums, int numsSize, int k){\n    hashTable* map = NULL;\n    for (int i = 0; i < numsSize; i++) {\n        hashTable* temp = NULL;\n        HASH_FIND_INT(map, &nums[i], temp);\n        if (temp) {\n            if (i - temp->idx <= k) return 1;\n            else temp->idx = i;\n        } else {\n            temp = (hashTable*)malloc(sizeof(hashTable));\n            temp->key = nums[i];\n            temp->idx = i;\n            HASH_ADD_INT(map, key, temp);\n        }\n    }\n    return 0;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-19"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a188ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a75.3MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    bool containsNearbyDuplicate(vector<int>& nums, int k) {\n        unordered_map<int, int> m;\n        for (int i = 0; i < nums.size(); i++) {\n            if (m.count(nums[i]) && i - m[nums[i]] <= k) return 1;\n            m[nums[i]] = i;\n        }\n        return 0;\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>r});var t=i(30758);const s={},l=t.createContext(s);function c(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);