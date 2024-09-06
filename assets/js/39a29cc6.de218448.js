"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[52005],{87830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var l=t(86070),i=t(25710);const s={},r="225.\u7528\u961f\u5217\u5b9e\u73b0\u6808",o={id:"leetcode/201-300/\u7528\u961f\u5217\u5b9e\u73b0\u6808",title:"225.\u7528\u961f\u5217\u5b9e\u73b0\u6808",description:"\u94fe\u63a5\uff1a225.\u7528\u961f\u5217\u5b9e\u73b0\u6808",source:"@site/docs/leetcode/201-300/225.\u7528\u961f\u5217\u5b9e\u73b0\u6808.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u7528\u961f\u5217\u5b9e\u73b0\u6808",permalink:"/docs/leetcode/201-300/\u7528\u961f\u5217\u5b9e\u73b0\u6808",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:225,frontMatter:{},sidebar:"journal",previous:{title:"224.\u57fa\u672c\u8ba1\u7b97\u5668",permalink:"/docs/leetcode/201-300/\u57fa\u672c\u8ba1\u7b97\u5668"},next:{title:"226.\u7ffb\u8f6c\u4e8c\u53c9\u6811",permalink:"/docs/leetcode/201-300/\u7ffb\u8f6c\u4e8c\u53c9\u6811"}},d={},u=[{value:"\u9898\u89e3 1 - java",id:"\u9898\u89e3-1---java",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"225\u7528\u961f\u5217\u5b9e\u73b0\u6808",children:"225.\u7528\u961f\u5217\u5b9e\u73b0\u6808"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/implement-stack-using-queues",children:"225.\u7528\u961f\u5217\u5b9e\u73b0\u6808"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u8bbe\u8ba1\u3001\u961f\u5217",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4f7f\u7528\u961f\u5217\u5b9e\u73b0\u6808\u7684\u4e0b\u5217\u64cd\u4f5c\uff1apush(x) -- \u5143\u7d20 x \u5165\u6808\uff0cpop() -- \u79fb\u9664\u6808\u9876\u5143\u7d20\uff0ctop() -- \u83b7\u53d6\u6808\u9876\u5143\u7d20\uff0cempty() -- \u8fd4\u56de\u6808\u662f\u5426\u4e3a\u7a7a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---java",children:"\u9898\u89e3 1 - java"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-16"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.8MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f7f\u7528\u53cc\u7aef\u961f\u5217\u6784\u5efa\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"class MyStack {\n    private Deque<Integer> deue;\n    public MyStack() {\n        deue=new LinkedList<Integer>();\n    }\n    public void push(int x) {\n        deue.offerLast(x);\n    }\n    public int pop() {\n    \treturn deue.pollLast();\n    }\n    public int top() {\n        return deue.getLast();\n    }\n    public boolean empty() {\n        return deue.isEmpty();\n    }\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-24"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.7MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","queue\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'// #define DEBUG\n#ifdef DEBUG\n#define log(frm, args...)    \\\n    {                        \\\n        printf(frm, ##args); \\\n    }\n#else\n#define log(frm, args...)\n#endif\n\ntypedef struct Node{\n    int val;\n    struct Node *prev, *next;\n} Node;\nNode *createNode(int val){\n    Node *node = (Node *)malloc(sizeof(Node));\n    node->val = val;\n    node->prev = NULL;\n    node->next = NULL;\n    return node;\n}\ntypedef struct {\n    int size;\n    Node *head, *tail;\n} Queue;\nQueue *ceateQueue(){\n    Queue *q = (Queue *)malloc(sizeof(Queue));\n    q->size = 0;\n    q->tail = q->head = NULL;\n    return q;\n}\nvoid enQueue(Queue *q, int val){\n    Node *node = createNode(val);\n    if (q->size == 0) {\n        q->head = q->tail = node;\n    } else {\n        node->prev = q->tail;\n        q->tail->next = node;\n        q->tail = node;\n    }\n    q->size++;\n    log("enQueue %d success, head = %d, tail = %d\\n", val, q->head->val, q->tail->val);\n}\nint isQueueEmpty(Queue *q) {\n    return q->size == 0;\n}\nint queueTop(Queue *q){\n    if (isQueueEmpty(q)) return -1;\n    return q->head->val;\n}\nint deQueue(Queue *q) {\n    if (isQueueEmpty(q)) return -1;\n    if (q->size == 1) {\n        Node *node = q->head;\n        int val = node->val;\n        q->tail = q->head = NULL;\n        free(node);\n        q->size = 0;\n        return val;\n    }\n    Node *node = q->head;\n    node->next->prev = NULL;\n    int val = node->val;\n    q->head = node->next;\n    free(node);\n    q->size--;\n    return val;\n}\nvoid freeQueue(Queue *q){\n    while(q->size) deQueue(q);\n    free(q);\n}\n\ntypedef struct {\n    int size;\n    Queue *q1, *q2;\n} MyStack;\n\nMyStack* myStackCreate() {\n    MyStack *s = (MyStack *)malloc(sizeof(MyStack));\n    s->q1 = ceateQueue();\n    s->q2 = ceateQueue();\n    return s;\n}\n\nvoid myStackPush(MyStack* obj, int x) {\n    log("push %d\\n", x);\n    enQueue(obj->q1, x);\n    log("push %d successfully\\n", x);\n}\n\nint myStackPop(MyStack* obj) {\n    while(obj->q1->size > 1) enQueue(obj->q2, deQueue(obj->q1));\n    int val = deQueue(obj->q1);\n    while(obj->q2->size) enQueue(obj->q1, deQueue(obj->q2));\n    return val;\n}\n\nint myStackTop(MyStack* obj) {\n    return obj->q1->tail->val;\n}\n\nbool myStackEmpty(MyStack* obj) {\n    return obj->q1->size == 0;\n}\n\nvoid myStackFree(MyStack* obj) {\n    freeQueue(obj->q1);\n    freeQueue(obj->q2);\n    free(obj);\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-03-03"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.42MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6bcf\u6b21\u5faa\u73afn-1\u6b21\u4f7f\u961f\u5c3e\u5728\u5934\u90e8\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"class MyStack:\n    def __init__(self):\n        self.q = deque()\n    def push(self, x: int) -> None:\n        self.q.append(x)\n        for _ in range(len(self.q) - 1):\n            self.q.append(self.q.popleft())\n    def pop(self) -> int:\n        return self.q.popleft()\n    def top(self) -> int:\n        return self.q[0]\n    def empty(self) -> bool:\n        return not self.q\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var l=t(30758);const i={},s=l.createContext(i);function r(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);