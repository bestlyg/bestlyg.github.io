"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[85012],{83001:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(86070),t=i(25710);const r={},l="2589.\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u7684\u6700\u5c11\u65f6\u95f4",a={id:"leetcode/2501-2600/\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u7684\u6700\u5c11\u65f6\u95f4",title:"2589.\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u7684\u6700\u5c11\u65f6\u95f4",description:"\u94fe\u63a5\uff1a2589.\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u7684\u6700\u5c11\u65f6\u95f4",source:"@site/docs/leetcode/2501-2600/2589.\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u7684\u6700\u5c11\u65f6\u95f4.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u7684\u6700\u5c11\u65f6\u95f4",permalink:"/docs/leetcode/2501-2600/\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u7684\u6700\u5c11\u65f6\u95f4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2589,frontMatter:{},sidebar:"journal",previous:{title:"2588.\u7edf\u8ba1\u7f8e\u4e3d\u5b50\u6570\u7ec4\u6570\u76ee",permalink:"/docs/leetcode/2501-2600/\u7edf\u8ba1\u7f8e\u4e3d\u5b50\u6570\u7ec4\u6570\u76ee"},next:{title:"2591.\u5c06\u94b1\u5206\u7ed9\u6700\u591a\u7684\u513f\u7ae5",permalink:"/docs/leetcode/2501-2600/\u5c06\u94b1\u5206\u7ed9\u6700\u591a\u7684\u513f\u7ae5"}},o={},c=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2},{value:"\u9898\u89e3 4 - python",id:"\u9898\u89e3-4---python",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2589\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u7684\u6700\u5c11\u65f6\u95f4",children:"2589.\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u7684\u6700\u5c11\u65f6\u95f4"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-time-to-complete-all-tasks",children:"2589.\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u7684\u6700\u5c11\u65f6\u95f4"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6392\u5e8f",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4f60\u6709\u4e00\u53f0\u7535\u8111\uff0c\u5b83\u53ef\u4ee5 \u540c\u65f6\xa0\u8fd0\u884c\u65e0\u6570\u4e2a\u4efb\u52a1\u3002\u7ed9\u4f60\u4e00\u4e2a\u4e8c\u7ef4\u6574\u6570\u6570\u7ec4\xa0tasks\xa0\uff0c\u5176\u4e2d\xa0tasks[i] = [starti, endi, durationi]\xa0\u8868\u793a\u7b2c\xa0i\xa0\u4e2a\u4efb\u52a1\u9700\u8981\u5728 \u95ed\u533a\u95f4\xa0\u65f6\u95f4\u6bb5\xa0[starti, endi]\xa0\u5185\u8fd0\u884c\xa0durationi\xa0\u4e2a\u6574\u6570\u65f6\u95f4\u70b9\uff08\u4f46\u4e0d\u9700\u8981\u8fde\u7eed\uff09\u3002\u5f53\u7535\u8111\u9700\u8981\u8fd0\u884c\u4efb\u52a1\u65f6\uff0c\u4f60\u53ef\u4ee5\u6253\u5f00\u7535\u8111\uff0c\u5982\u679c\u7a7a\u95f2\u65f6\uff0c\u4f60\u53ef\u4ee5\u5c06\u7535\u8111\u5173\u95ed\u3002\u8bf7\u4f60\u8fd4\u56de\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u7684\u60c5\u51b5\u4e0b\uff0c\u7535\u8111\u6700\u5c11\u9700\u8981\u8fd0\u884c\u591a\u5c11\u79d2\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-12"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a152ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6309\u7ec8\u6b62\u65f6\u95f4\u6392\u5e8f\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u4efb\u52a1\u5148\u5728\u65f6\u95f4\u6bb5\u4e2d\u627e\u5df2\u7ecf\u5728\u8fd0\u884c\u7684\u65f6\u95f4\u6bb5\uff0c\u5982\u679c\u5df2\u7ecf\u8fd0\u884c\u7684\u65f6\u95f4\u6bb5\u5df2\u7ecf\u8d85\u8fc7\u4efb\u52a1\u6240\u9700\u8981\u7684\u65f6\u95f4\u90a3\u4e0d\u9700\u8981\u589e\u52a0\u65f6\u95f4\u70b9\uff0c\u5982\u679c\u4e0d\u6ee1\u8db3\uff0c\u5c3d\u53ef\u80fd\u4ece\u540e\u5f80\u524d\u5f00\u542f\u65f6\u95f4\u6bb5\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findMinimumTime(vector<vector<int>>& tasks) {\n        sort(tasks.begin(), tasks.end(), [&](auto &a, auto &b){\n            return a[1] < b[1];\n        });\n        int res = 0, time[2005] = {0};\n        for (auto &task : tasks) {\n            for (int i = task[0]; i <= task[1]; i++)\n                if (time[i]) task[2]--;\n            if (task[2] <= 0) continue;\n            for (int i = task[1]; i >= task[0] && task[2]; i--)\n                if (!time[i]) time[i] = 1, res++, task[2]--;\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-12"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1072ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def findMinimumTime(self, tasks: List[List[int]]) -> int:\n        tasks.sort(key=lambda item: item[1])\n        res = 0\n        time = [False]*2005\n        for task in tasks:\n            for i in range(task[0], task[1]+1):\n                if time[i]:\n                    task[2] -= 1\n            if task[2] <= 0:\n                continue\n            for i in range(task[1], task[0]-1, -1):\n                if not time[i]:\n                    time[i] = True\n                    res += 1\n                    task[2] -= 1\n                if not task[2]:\n                    break\n        return res\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-12"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn find_minimum_time(tasks: Vec<Vec<i32>>) -> i32 {\n        let mut tasks = tasks;\n        tasks.sort_by(|a, b| a[1].cmp(&b[1]));\n        let mut res = 0;\n        let mut time = [false; 2005];\n        for mut task in tasks {\n            for i in task[0]..=task[1] {\n                let i = i as usize;\n                if time[i] {\n                    task[2] -= 1;\n                }\n            }\n            if task[2] > 0 {\n                for i in (task[0]..=task[1]).rev() {\n                    let i = i as usize;\n                    if !time[i] {\n                        time[i] = true;\n                        res += 1;\n                        task[2] -= 1;\n                    }\n                    if task[2] == 0 {\n                        break;\n                    }\n                }\n            }\n        }\n        res\n    }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-4---python",children:"\u9898\u89e3 4 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-05-15"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a529ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.4MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u4efb\u52a1\u5148\u67e5\u770b\u5f53\u524d\u5df2\u7ecf\u5360\u7528\u7684\u65f6\u95f4\u70b9\uff0c\u5269\u4e0b\u7684\u4ece\u540e\u5f80\u524d\u5f00\u59cb\u5360\u7528\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def findMinimumTime(self, tasks: List[List[int]]) -> int:\n        tasks.sort(key = lambda v: v[1])\n        arr = [False] * 2001\n        res = 0\n        for s, e, d in tasks:\n            for t in range(s, e + 1):\n                if arr[t]:\n                    d -= 1\n            if d <= 0: continue\n            for t in range(e, s - 1, -1):\n                if d <= 0: break\n                if not arr[t]:\n                    arr[t] = True\n                    d -= 1\n                    res += 1\n        return res\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>a});var s=i(30758);const t={},r=s.createContext(t);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);