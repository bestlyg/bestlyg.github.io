"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[17005],{60375:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var t=s(86070),i=s(25710);const l={},r="1792.\u6700\u5927\u5e73\u5747\u901a\u8fc7\u7387",o={id:"leetcode/1701-1800/\u6700\u5927\u5e73\u5747\u901a\u8fc7\u7387",title:"1792.\u6700\u5927\u5e73\u5747\u901a\u8fc7\u7387",description:"\u94fe\u63a5\uff1a1792.\u6700\u5927\u5e73\u5747\u901a\u8fc7\u7387",source:"@site/docs/leetcode/1701-1800/1792.\u6700\u5927\u5e73\u5747\u901a\u8fc7\u7387.md",sourceDirName:"leetcode/1701-1800",slug:"/leetcode/1701-1800/\u6700\u5927\u5e73\u5747\u901a\u8fc7\u7387",permalink:"/web/site/docs/leetcode/1701-1800/\u6700\u5927\u5e73\u5747\u901a\u8fc7\u7387",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1792,frontMatter:{},sidebar:"journal",previous:{title:"1791.\u627e\u51fa\u661f\u578b\u56fe\u7684\u4e2d\u5fc3\u8282\u70b9",permalink:"/web/site/docs/leetcode/1701-1800/\u627e\u51fa\u661f\u578b\u56fe\u7684\u4e2d\u5fc3\u8282\u70b9"},next:{title:"1793.\u597d\u5b50\u6570\u7ec4\u7684\u6700\u5927\u5206\u6570",permalink:"/web/site/docs/leetcode/1701-1800/\u597d\u5b50\u6570\u7ec4\u7684\u6700\u5927\u5206\u6570"}},c={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"1792\u6700\u5927\u5e73\u5747\u901a\u8fc7\u7387",children:"1792.\u6700\u5927\u5e73\u5747\u901a\u8fc7\u7387"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-average-pass-ratio",children:"1792.\u6700\u5927\u5e73\u5747\u901a\u8fc7\u7387"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u5728\u5b89\u6392\u8fd9 extraStudents \u4e2a\u5b66\u751f\u53bb\u5bf9\u5e94\u73ed\u7ea7\u540e\u7684 \u6700\u5927 \u5e73\u5747\u901a\u8fc7\u7387\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-19"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a844ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a85.8MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5806\uff0c\u6309\u589e\u957f\u5e45\u5ea6\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n    public:\n        typedef pair<int, int> node;\n        double maxAverageRatio(vector<vector<int>>& classes, int extraStudents) {\n            double ans = 0.0;\n            auto cmp = [&](node x, node y) -> bool {\n                double v1 = 1.0 * (x.first + 1) / (x.second + 1) - 1.0 * x.first / x.second,\n                       v2 = 1.0 * (y.first + 1) / (y.second + 1) - 1.0 * y.first / y.second;\n                return v1 < v2;\n            };\n            priority_queue<node, vector<node>, decltype(cmp)> q(cmp);\n            for (auto &item : classes) q.push(make_pair(item[0], item[1]));\n            while (extraStudents--) {\n                node item = q.top(); q.pop();\n                item.first += 1;\n                item.second += 1;\n                q.push(item);\n            }\n            while (q.size()) {\n                node item = q.top(); q.pop();\n                ans += 1.0 * item.first / item.second;\n            }\n            return ans / classes.size();\n        }\n    };\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-19"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8748ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a48.4MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Node:\n    def __init__(self, x: int, y: int):\n        self.x = x\n        self.y = y\n\n    def __lt__(self, o: 'Node') -> bool:\n        v1 = (self.x + 1) / (self.y + 1) - self.x / self.y\n        v2 = (o.x + 1) / (o.y + 1) - o.x / o.y\n        return v1 > v2\n\nclass Solution:\n    def maxAverageRatio(self, classes: List[List[int]], extraStudents: int) -> float:\n        heap = [Node(item[0], item[1]) for item in classes]\n        heapify(heap)\n        for _ in range(extraStudents):\n            heapreplace(heap, Node(heap[0].x + 1, heap[0].y + 1))\n        return sum(item.x / item.y for item in heap) / len(classes)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-19"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a424ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a10MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#[derive(Clone, PartialEq, Eq, Ord)]\nstruct Node {\n    x: i32,\n    y: i32,\n}\nimpl Node {\n    fn new(x: i32, y: i32) -> Self {\n        Node { x, y }\n    }\n    fn inc_val(&self) -> f64 {\n        ((self.x + 1) as f64) / ((self.y + 1) as f64) - (self.x as f64) / (self.y as f64)\n    }\n    fn val(&self) -> f64 {\n        (self.x as f64) / (self.y as f64)\n    }\n}\nimpl PartialOrd for Node {\n    fn partial_cmp(&self, o: &Self) -> Option<std::cmp::Ordering> {\n        self.inc_val().partial_cmp(&o.inc_val())\n    }\n}\nimpl Solution {\n    pub fn max_average_ratio(classes: Vec<Vec<i32>>, extra_students: i32) -> f64 {\n        use std::collections::BinaryHeap;\n        let mut heap = BinaryHeap::<Node>::new();\n        for item in classes.iter() {\n            heap.push(Node::new(item[0], item[1]));\n        }\n        for _ in 0..extra_students {\n            let mut node = heap.pop().unwrap();\n            node.x += 1;\n            node.y += 1;\n            heap.push(node);\n        }\n        let mut res: f64 = 0.0;\n        while let Some(node) = heap.pop() {\n            res += node.val();\n        }\n        res / classes.len() as f64\n    }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(30758);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);