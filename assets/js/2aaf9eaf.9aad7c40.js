"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[11526],{97962:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>r,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(86070),d=t(25710);const a={},c="895.\u6700\u5927\u9891\u7387\u6808",o={id:"leetcode/801-900/\u6700\u5927\u9891\u7387\u6808",title:"895.\u6700\u5927\u9891\u7387\u6808",description:"\u94fe\u63a5\uff1a895.\u6700\u5927\u9891\u7387\u6808",source:"@site/docs/leetcode/801-900/895.\u6700\u5927\u9891\u7387\u6808.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u6700\u5927\u9891\u7387\u6808",permalink:"/web/site/docs/leetcode/801-900/\u6700\u5927\u9891\u7387\u6808",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:895,frontMatter:{},sidebar:"journal",previous:{title:"894.\u6240\u6709\u53ef\u80fd\u7684\u771f\u4e8c\u53c9\u6811",permalink:"/web/site/docs/leetcode/801-900/\u6240\u6709\u53ef\u80fd\u7684\u771f\u4e8c\u53c9\u6811"},next:{title:"896.\u5355\u8c03\u6570\u5217",permalink:"/web/site/docs/leetcode/801-900/\u5355\u8c03\u6570\u5217"}},s={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"895\u6700\u5927\u9891\u7387\u6808",children:"895.\u6700\u5927\u9891\u7387\u6808"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/maximum-frequency-stack",children:"895.\u6700\u5927\u9891\u7387\u6808"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u8bbe\u8ba1\u3001\u54c8\u5e0c\u8868\u3001\u6709\u5e8f\u96c6\u5408",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bbe\u8ba1\u4e00\u4e2a\u7c7b\u4f3c\u5806\u6808\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5c06\u5143\u7d20\u63a8\u5165\u5806\u6808\uff0c\u5e76\u4ece\u5806\u6808\u4e2d\u5f39\u51fa\u51fa\u73b0\u9891\u7387\u6700\u9ad8\u7684\u5143\u7d20\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-30"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a236ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a123MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","heap\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'class Node {\npublic:\n    int val, cnt, idx;\n    stack<int> time;\n    Node(int val, int cnt): val(val), cnt(cnt), idx(0) {}\n    string toString() {\n        stringstream ss;\n        ss << "Node: "\n           << "val = " << val\n           << ", cnt = " << cnt\n           << ", idx = " << idx\n           << ", time = " << (time.empty() ? -1 : time.top())\n           ;\n        return ss.str();\n    }\n};\nclass Heap {\npublic:\n    int time;\n    unordered_map<int, Node*> m;\n    vector<Node*> data;\n    Heap(): time(0) {}\n    void push(int val) {\n        Node *node = nullptr;\n        if (m.count(val)) {\n            node = m[val];\n            node->cnt++;\n            node->time.push(time++);\n            // cout << "push -> " << node->toString() << endl;\n            shiftUp(node->idx);\n        } else {\n            node = m[val] = new Node(val, 1);\n            node->time.push(time++);\n            push(node);\n        }\n        // print();\n    }\n    void push(Node *node) {\n        node->idx = data.size();\n        // cout << "push -> " << node->toString() << endl;\n        data.push_back(node);\n        shiftUp(node->idx);\n    }\n    int pop() {\n        // cout << "pop -> " << data[0]->toString() << endl;\n        int val = data[0]->val;\n        if (data.size() == 1 && data[0]->cnt == 1) data.clear();\n        else {\n            Node *node = data[0], *last = data.back();\n            data.pop_back();\n            last->idx = 0;\n            data[0] = last;\n            // cout << "==" << node->toString() << endl;\n            shiftDown(0);\n            if (node->cnt > 1) {\n                node->time.pop();\n                node->cnt--;\n                push(node);\n            } else {\n                // cout << "in" << endl;\n                m.erase(node->val);\n                delete node;\n                // cout << "inend" << endl;\n            };\n        }\n        // print();\n        return val;\n    }\n    void shiftUp(int idx) {\n        // cout << "shiftup : " << idx << endl;\n        if (idx == 0) return;\n        int p = (idx - 1) / 2;\n        Node *cnode = data[idx], *pnode = data[p];\n        if (cnode->cnt > pnode->cnt || cnode->cnt == pnode->cnt && cnode->time.top() > pnode->time.top()) {\n            swap(cnode->idx, pnode->idx);\n            swap(data[idx], data[p]);\n            shiftUp(p);\n        }\n    }\n    void shiftDown(int idx) {\n        // cout << "shiftdown : " << idx << endl;\n        int child = idx * 2 + 1;\n        if (child >= data.size()) return;\n        if (child + 1 < data.size() &&\n            (data[child]->cnt < data[child + 1]->cnt ||\n             data[child]->cnt == data[child + 1]->cnt && data[child]->time.top() < data[child + 1]->time.top())\n        ) child++;\n        Node *cnode = data[child], *pnode = data[idx];\n        if (pnode->cnt < cnode->cnt || pnode->cnt == cnode->cnt && pnode->time.top() < cnode->time.top()) {\n            swap(cnode->idx, pnode->idx);\n            swap(data[child], data[idx]);\n            shiftDown(child);\n        }\n    }\n    void print() {\n        cout << "=======PRINT========" << endl;\n        for (int i = 0; i < data.size(); i++) {\n            cout << "idx = " << i\n                 << ", child = " << (i * 2 + 1) << ", " << (i * 2 + 2)\n                 << ", " << data[i]->toString()\n                 << endl;\n        }\n    }\n};\nclass FreqStack {\npublic:\n    Heap heap;\n    FreqStack() {}\n    void push(int val) {\n        heap.push(val);\n    }\n    int pop() {\n        return heap.pop();\n    }\n};\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-30"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a188ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a97.7MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8bb0\u5f55\u6240\u6709\u7684\u503c\u7684\u6b21\u6570\uff0c\u5229\u7528 map \u5bf9\u6bcf\u79cd\u6b21\u6570\u538b\u6808\u5904\u7406\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class FreqStack {\npublic:\n    unordered_map<int, stack<int>> mstack;\n    unordered_map<int, int> mfreq;\n    int maxFreq = 0;\n    FreqStack() {}\n    void push(int val) {\n        int freq = ++mfreq[val];\n        mstack[freq].push(val);\n        maxFreq = max(maxFreq, freq);\n    }\n    int pop() {\n        int val = mstack[maxFreq].top();\n        mfreq[val]--;\n        mstack[maxFreq].pop();\n        if (mstack[maxFreq].size() == 0) maxFreq--;\n        return val;\n    }\n};\n"})})]})}function r(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var i=t(30758);const d={},a=i.createContext(d);function c(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:c(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);