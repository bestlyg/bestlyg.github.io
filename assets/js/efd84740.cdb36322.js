"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[70053],{53958:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>f,frontMatter:()=>t,metadata:()=>c,toc:()=>p});var l=s(86070),i=s(25710);const t={},a="1172.\u9910\u76d8\u6808",c={id:"leetcode/1101-1200/\u9910\u76d8\u6808",title:"1172.\u9910\u76d8\u6808",description:"\u94fe\u63a5\uff1a1172.\u9910\u76d8\u6808",source:"@site/docs/leetcode/1101-1200/1172.\u9910\u76d8\u6808.md",sourceDirName:"leetcode/1101-1200",slug:"/leetcode/1101-1200/\u9910\u76d8\u6808",permalink:"/docs/leetcode/1101-1200/\u9910\u76d8\u6808",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1172,frontMatter:{},sidebar:"journal",previous:{title:"1171.\u4ece\u94fe\u8868\u4e2d\u5220\u53bb\u603b\u548c\u503c\u4e3a\u96f6\u7684\u8fde\u7eed\u8282\u70b9",permalink:"/docs/leetcode/1101-1200/\u4ece\u94fe\u8868\u4e2d\u5220\u53bb\u603b\u548c\u503c\u4e3a\u96f6\u7684\u8fde\u7eed\u8282\u70b9"},next:{title:"1175.\u8d28\u6570\u6392\u5217",permalink:"/docs/leetcode/1101-1200/\u8d28\u6570\u6392\u5217"}},r={},p=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"1172\u9910\u76d8\u6808",children:"1172.\u9910\u76d8\u6808"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(e.a,{href:"https://leetcode.cn/problems/dinner-plate-stacks",children:"1172.\u9910\u76d8\u6808"}),(0,l.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,l.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u8bbe\u8ba1\u3001\u54c8\u5e0c\u8868\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,l.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6211\u4eec\u628a\u65e0\u9650\u6570\u91cf \u221e \u7684\u6808\u6392\u6210\u4e00\u884c\uff0c\u6309\u4ece\u5de6\u5230\u53f3\u7684\u6b21\u5e8f\u4ece 0 \u5f00\u59cb\u7f16\u53f7\u3002\u6bcf\u4e2a\u6808\u7684\u7684\u6700\u5927\u5bb9\u91cf\xa0capacity \u90fd\u76f8\u540c\u3002\u5b9e\u73b0\u4e00\u4e2a\u53eb\u300c\u9910\u76d8\u300d\u7684\u7c7b\xa0DinnerPlates\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-28"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a448ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a205.7MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u6808\uff0c\u7528\u4f18\u5148\u961f\u5217\u548c\u54c8\u5e0c\u8868\u5b58\u50a8\u4ece\u5de6\u5f80\u53f3\u7a7a\u7740\u7684\u5143\u7d20\uff0c\u672b\u5c3e\u4e3a\u7a7a\u65f6\u5220\u9664\u672b\u5c3e\u7684\u6808\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class DinnerPlates {\npublic:\n    int capacity;\n    vector<vector<int>> ss;\n    unordered_set<int> used;\n    priority_queue<int, vector<int>, greater<int>> q;\n\n    DinnerPlates(int capacity): capacity(capacity) {}\n\n    int load_stack() {\n        ss.push_back(vector<int>());\n        return ss.size() - 1;\n    }\n\n    void clear_last() {\n        while (ss.size() && ss.back().size() == 0) ss.pop_back();\n    }\n    \n    void push(int val) {\n        while (q.size() && q.top() >= ss.size()) q.pop();\n        if (q.empty()) {\n            int idx = ss.size() - 1;\n            if (ss.empty() || ss[idx].size() == capacity) idx = load_stack();\n            ss[idx].push_back(val);\n        } else {\n            int idx = q.top();\n            ss[idx].push_back(val);\n            if (ss[idx].size() == capacity) q.pop(), used.erase(idx);\n        }\n    }\n    \n    int pop() {\n        clear_last();\n        if (ss.empty()) return -1;\n        int back = ss.back().back();\n        ss.back().pop_back();\n        return back;\n    }\n    \n    int popAtStack(int index) {\n        if (index >= ss.size() || ss[index].size() == 0) return -1;\n        int back = ss[index].back();\n        ss[index].pop_back();\n        clear_last();\n        if (index < ss.size() && !used.count(index)) q.push(index), used.insert(index);\n        return back;\n    }\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-28"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a384ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a205.6MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u6808\uff0c\u7528\u4f18\u5148\u961f\u5217\u548c\u54c8\u5e0c\u8868\u5b58\u50a8\u4ece\u5de6\u5f80\u53f3\u7a7a\u7740\u7684\u5143\u7d20\uff0c\u7528last\u8bb0\u5f55\u672b\u5c3e\u5143\u7d20\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class DinnerPlates {\npublic:\n    int capacity, last;\n    vector<vector<int>> ss;\n    unordered_set<int> used;\n    priority_queue<int, vector<int>, greater<int>> q;\n\n    DinnerPlates(int capacity): capacity(capacity), last(0) {\n        ss.push_back(vector<int>());\n    }\n\n    int get_last() {\n        if (ss[last].size() == capacity) last++;\n        if (last == ss.size()) ss.push_back(vector<int>());\n        return last;\n    }\n    \n    void push(int val) {\n        while (q.size() && q.top() > last) q.pop();\n        if (q.empty()) {\n            ss[get_last()].push_back(val);\n        } else {\n            int idx = q.top();\n            ss[idx].push_back(val);\n            if (ss[idx].size() == capacity) q.pop(), used.erase(idx);\n        }\n    }\n    \n    int pop() {\n        while (last > 0 && ss[last].size() == 0) last--;\n        if (last == 0 && ss[last].size() == 0) return -1;\n        int back = ss[last].back();\n        ss[last].pop_back();\n        return back;\n    }\n    \n    int popAtStack(int index) {\n        if (index > last || ss[index].size() == 0) return -1;\n        int back = ss[index].back();\n        ss[index].pop_back();\n        if (!used.count(index)) q.push(index), used.insert(index);\n        return back;\n    }\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-28"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a632ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a100.7MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"from heapq import *\nclass DinnerPlates:\n\n    def __init__(self, capacity: int):\n        self.capacity = capacity\n        self.last = 0\n        self.ss = [[]]\n        self.used = set()\n        self.q = []\n\n    def get_last(self):\n        if len(self.ss[self.last]) == self.capacity:\n            self.last += 1\n        if self.last == len(self.ss):\n            self.ss.append([])\n        return self.last\n\n    def push(self, val: int) -> None:\n        while len(self.q) and self.q[0] > self.last:\n            heappop(self.q)\n        if len(self.q) == 0:\n            self.ss[self.get_last()].append(val)\n        else:\n            idx = self.q[0]\n            self.ss[idx].append(val)\n            if len(self.ss[idx]) == self.capacity:\n                heappop(self.q)\n                self.used.remove(idx)\n\n    def pop(self) -> int:\n        while self.last > 0 and len(self.ss[self.last]) == 0:\n            self.last -= 1\n        if self.last == 0 and len(self.ss[self.last]) == 0:\n            return -1\n        back = self.ss[self.last][-1]\n        self.ss[self.last].pop()\n        return back\n\n    def popAtStack(self, index: int) -> int:\n        if index > self.last or len(self.ss[index]) == 0:\n            return -1\n        back = self.ss[index][-1]\n        self.ss[index].pop()\n        if index not in self.used:\n            heappush(self.q, index)\n            self.used.add(index)\n        return back\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-28"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a116ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a76.6MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-rust",children:"use std::cmp::Ordering;\n\n#[derive(PartialEq)]\nstruct RevUnsize(usize);\nimpl Eq for RevUnsize {}\n\nimpl PartialOrd for RevUnsize {\n    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {\n        other.0.partial_cmp(&self.0)\n    }\n}\nimpl Ord for RevUnsize {\n    fn cmp(&self, other: &RevUnsize) -> Ordering {\n        other.0.partial_cmp(&self.0).unwrap()\n    }\n}\n\nstruct DinnerPlates {\n    capacity: usize,\n    last: usize,\n    ss: Vec<Vec<i32>>,\n    used: std::collections::HashSet<usize>,\n    q: std::collections::BinaryHeap<RevUnsize>,\n}\n\nimpl DinnerPlates {\n    fn new(capacity: i32) -> Self {\n        Self {\n            capacity: capacity as usize,\n            last: 0,\n            ss: vec![vec![]],\n            used: Default::default(),\n            q: Default::default(),\n        }\n    }\n\n    fn format_last(&mut self) {\n        if self.ss[self.last].len() == self.capacity {\n            self.last += 1;\n        }\n        if self.last == self.ss.len() {\n            self.ss.push(vec![]);\n        }\n    }\n\n    fn push(&mut self, val: i32) {\n        while !self.q.is_empty() && (*self.q.peek().unwrap()).0 > self.last {\n            self.q.pop();\n        }\n        if self.q.is_empty() {\n            self.format_last();\n            self.ss[self.last].push(val);\n        } else {\n            let idx = (*self.q.peek().unwrap()).0;\n            self.ss[idx].push(val);\n            if self.ss[idx].len() == self.capacity {\n                self.q.pop();\n                self.used.remove(&idx);\n            }\n        }\n    }\n\n    fn pop(&mut self) -> i32 {\n        while self.last > 0 && self.ss[self.last].len() == 0 {\n            self.last -= 1;\n        }\n        if self.last == 0 && self.ss[self.last].len() == 0 {\n            -1\n        } else {\n            self.ss[self.last].pop().unwrap()\n        }\n    }\n\n    fn pop_at_stack(&mut self, index: i32) -> i32 {\n        let index = index as usize;\n        if index > self.last || self.ss[index].len() == 0 {\n            -1\n        } else {\n            let back = self.ss[index].pop().unwrap();\n            if !self.used.contains(&index) {\n                self.q.push(RevUnsize(index));\n                self.used.insert(index);\n            }\n            back\n        }\n    }\n}\n"})})]})}function f(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>c});var l=s(30758);const i={},t=l.createContext(i);function a(n){const e=l.useContext(t);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);