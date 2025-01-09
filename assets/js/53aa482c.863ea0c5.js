"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[53460],{7880:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"leetcode/201-300/\u7528\u6808\u5b9e\u73b0\u961f\u5217","title":"232.\u7528\u6808\u5b9e\u73b0\u961f\u5217","description":"\u94fe\u63a5\uff1a232.\u7528\u6808\u5b9e\u73b0\u961f\u5217","source":"@site/docs/leetcode/201-300/232.\u7528\u6808\u5b9e\u73b0\u961f\u5217.md","sourceDirName":"leetcode/201-300","slug":"/leetcode/201-300/\u7528\u6808\u5b9e\u73b0\u961f\u5217","permalink":"/docs/leetcode/201-300/\u7528\u6808\u5b9e\u73b0\u961f\u5217","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":232,"frontMatter":{},"sidebar":"journal","previous":{"title":"230.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7b2cK\u5c0f\u7684\u5143\u7d20","permalink":"/docs/leetcode/201-300/\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7b2cK\u5c0f\u7684\u5143\u7d20"},"next":{"title":"233.\u6570\u5b571\u7684\u4e2a\u6570","permalink":"/docs/leetcode/201-300/\u6570\u5b571\u7684\u4e2a\u6570"}}');var i=t(25105),c=t(8556);const r={},l="232.\u7528\u6808\u5b9e\u73b0\u961f\u5217",a={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - java",id:"\u9898\u89e3-3---java",level:2},{value:"\u9898\u89e3 4 - python",id:"\u9898\u89e3-4---python",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"232\u7528\u6808\u5b9e\u73b0\u961f\u5217",children:"232.\u7528\u6808\u5b9e\u73b0\u961f\u5217"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/implement-queue-using-stacks",children:"232.\u7528\u6808\u5b9e\u73b0\u961f\u5217"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u8bbe\u8ba1\u3001\u961f\u5217",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4f7f\u7528\u6808\u5b9e\u73b0\u961f\u5217\u7684\u4e0b\u5217\u64cd\u4f5c\uff1apush(x) -- \u5c06\u4e00\u4e2a\u5143\u7d20\u653e\u5165\u961f\u5217\u7684\u5c3e\u90e8\u3002pop() -- \u4ece\u961f\u5217\u9996\u90e8\u79fb\u9664\u5143\u7d20\u3002peek() -- \u8fd4\u56de\u961f\u5217\u9996\u90e8\u7684\u5143\u7d20\u3002empty() -- \u8fd4\u56de\u961f\u5217\u662f\u5426\u4e3a\u7a7a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-24"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.7MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","stack\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"typedef struct Stack\n{\n    int size;\n    int len;\n    int *data;\n} Stack;\nStack *createStack(int len)\n{\n    Stack *s = (Stack *)malloc(sizeof(Stack));\n    s->size = 0;\n    s->len = len;\n    s->data = (int *)malloc(sizeof(int) * len);\n    return s;\n}\nvoid push(Stack *s, int val)\n{\n    if (s->size == s->len)\n        return;\n    s->data[s->size++] = val;\n}\nvoid pop(Stack *s)\n{\n    if (s->size == 0)\n        return;\n    s->size--;\n}\nint isEmpty(Stack *s) {\n    return s->size == 0;\n}\nint top(Stack *s)\n{\n    if (s->size == 0) return -1;\n    return s->data[s->size - 1];\n}\nvoid freeStack(Stack *s)\n{\n    free(s->data);\n    free(s);\n}\ntypedef struct {\n    Stack *s1, *s2;\n} MyQueue;\n\nMyQueue* myQueueCreate() {\n    MyQueue *q = (MyQueue *)malloc(sizeof(MyQueue));\n    q->s1 = createStack(100);\n    q->s2 = createStack(100);\n    return q;\n}\nvoid myQueuePush(MyQueue* obj, int x) {\n    push(obj->s1, x);\n}\nvoid check(MyQueue *obj){\n    if (!obj->s2->size) {\n        while(obj->s1->size) {\n            push(obj->s2, top(obj->s1));\n            pop(obj->s1);\n        }\n    }\n}\nint myQueuePop(MyQueue* obj) {\n    check(obj);\n    int val = top(obj->s2);\n    pop(obj->s2);\n    return val;\n}\nint myQueuePeek(MyQueue* obj) {\n    check(obj);\n    return top(obj->s2);\n}\nbool myQueueEmpty(MyQueue* obj) {\n    return obj->s1->size + obj->s2->size == 0;\n}\nvoid myQueueFree(MyQueue* obj) {\n    freeStack(obj->s1);\n    freeStack(obj->s2);\n    free(obj);\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-05"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u4e24\u4e2a\u6808\u7ef4\u62a4\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"class MyQueue {\n  private inStack: number[] = [];\n  private outStack: number[] = [];\n  push(x: number): void {\n    this.inStack.push(x);\n  }\n  pop(): number {\n    if (this.empty()) return -Infinity;\n    if (this.outStack.length > 0) {\n      return this.outStack.pop()!;\n    } else {\n      this.inStackToOutStack();\n      return this.pop();\n    }\n  }\n  peek(): number {\n    if (this.empty()) return -Infinity;\n    if (this.outStack.length === 0) this.inStackToOutStack();\n    return this.outStack[this.outStack.length - 1];\n  }\n  empty(): boolean {\n    return this.outStack.length === 0 && this.inStack.length === 0;\n  }\n  inStackToOutStack(): void {\n    while (this.inStack.length > 0) this.outStack.push(this.inStack.pop()!);\n  }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---java",children:"\u9898\u89e3 3 - java"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-16"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a34.2MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f7f\u7528 java \u81ea\u5e26\u6808\u7ed3\u6784\uff0c\u4f7f\u7528\u4e24\u4e2a\u6808\uff0c\u538b\u6808\u653e\u5165 inStack\uff0c\u51fa\u6808\u65f6\u82e5 outStack \u4e3a\u7a7a\u5219\u5148\u51fa\u6808 inStack \u538b\u5012 outStack\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"class MyQueue {\n\tprivate Stack<Integer> inStack;\n\tprivate Stack<Integer> outStack;\n    public MyQueue() {\n        inStack = new Stack<Integer>();\n\t\toutStack = new Stack<Integer>();\n    }\n\tpublic void push(int x) {\n\t\tinStack.push(x);\n\t}\n\tpublic int pop() {\n\t\tcheckOutStack();\n\t\treturn outStack.pop();\n\t}\n\tpublic int peek() {\n\t\tcheckOutStack();\n\t\treturn outStack.peek();\n\t}\n\tpublic boolean empty() {\n\t\treturn inStack.isEmpty() && outStack.isEmpty();\n\t}\n\tprivate void checkOutStack() {\n\t\tif (outStack.isEmpty()) {\n\t\t\twhile (!inStack.isEmpty()) {\n\t\t\t\toutStack.push(inStack.pop());\n\t\t\t}\n\t\t}\n\t}\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-4---python",children:"\u9898\u89e3 4 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-03-04"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.55MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7528\u4e24\u4e2a\u6808\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class MyQueue:\n    def __init__(self):\n        self.s1 = []\n        self.s2 = []\n    def push(self, x: int) -> None:\n        self.s1.append(x)\n    def pop(self) -> int:\n        self.check()\n        return self.s2.pop()\n    def peek(self) -> int:\n        self.check()\n        return self.s2[-1]\n    def empty(self) -> bool:\n        return not self.s1 and not self.s2\n    def check(self) -> bool:\n        if not self.s2:\n            while self.s1:\n                self.s2.append(self.s1.pop())\n"})})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},8556:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>l});var s=t(58101);const i={},c=s.createContext(i);function r(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);