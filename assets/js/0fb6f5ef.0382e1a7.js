"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[88635],{53773:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var i=r(86070),t=r(25710);const p={},s="2532.\u8fc7\u6865\u7684\u65f6\u95f4",o={id:"leetcode/2501-2600/\u8fc7\u6865\u7684\u65f6\u95f4",title:"2532.\u8fc7\u6865\u7684\u65f6\u95f4",description:"\u94fe\u63a5\uff1a2532.\u8fc7\u6865\u7684\u65f6\u95f4",source:"@site/docs/leetcode/2501-2600/2532.\u8fc7\u6865\u7684\u65f6\u95f4.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u8fc7\u6865\u7684\u65f6\u95f4",permalink:"/web/site/docs/leetcode/2501-2600/\u8fc7\u6865\u7684\u65f6\u95f4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2532,frontMatter:{},sidebar:"journal",previous:{title:"2531.\u4f7f\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u5b57\u7b26\u7684\u6570\u76ee\u76f8\u7b49",permalink:"/web/site/docs/leetcode/2501-2600/\u4f7f\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u5b57\u7b26\u7684\u6570\u76ee\u76f8\u7b49"},next:{title:"2535.\u6570\u7ec4\u5143\u7d20\u548c\u4e0e\u6570\u5b57\u548c\u7684\u7edd\u5bf9\u5dee",permalink:"/web/site/docs/leetcode/2501-2600/\u6570\u7ec4\u5143\u7d20\u548c\u4e0e\u6570\u5b57\u548c\u7684\u7edd\u5bf9\u5dee"}},a={},l=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2}];function c(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"2532\u8fc7\u6865\u7684\u65f6\u95f4",children:"2532.\u8fc7\u6865\u7684\u65f6\u95f4"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/time-to-cross-a-bridge",children:"2532.\u8fc7\u6865\u7684\u65f6\u95f4"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6a21\u62df\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6240\u6709 n \u4e2a\u76d2\u5b50\u90fd\u9700\u8981\u653e\u5165\u65b0\u4ed3\u5e93\uff0c\u8bf7\u4f60\u8fd4\u56de\u6700\u540e\u4e00\u4e2a\u642c\u8fd0\u7bb1\u5b50\u7684\u5de5\u4eba \u5230\u8fbe\u6cb3\u5de6\u5cb8 \u7684\u65f6\u95f4\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-08"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a276ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a53MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"class Heap<T = number> {\n  public arr: T[] = [];\n  get isEmpty() {\n    return this.size === 0;\n  }\n  get size() {\n    return this.arr.length;\n  }\n  get top() {\n    return this.arr[0];\n  }\n  constructor(public compare: (t1: T, t2: T) => number) {}\n  add(num: T): void {\n    this.arr.push(num);\n    this.shiftUp(this.size - 1);\n  }\n  remove(): T {\n    const num = this.arr.shift()!;\n    if (this.size) {\n      this.arr.unshift(this.arr.pop()!);\n      this.shiftDown(0);\n    }\n    return num;\n  }\n  private shiftUp(index: number): void {\n    if (index === 0) return;\n    const parentIndex = (index - 1) >> 1;\n    if (this.compare(this.arr[index], this.arr[parentIndex]) > 0) {\n      [this.arr[index], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[index]];\n      this.shiftUp(parentIndex);\n    }\n  }\n  private shiftDown(index: number): void {\n    let childrenIndex = index * 2 + 1;\n    if (childrenIndex > this.size - 1) return;\n    if (\n      childrenIndex + 1 <= this.size - 1 &&\n      this.compare(this.arr[childrenIndex + 1], this.arr[childrenIndex]) > 0\n    ) {\n      childrenIndex++;\n    }\n    if (this.compare(this.arr[childrenIndex], this.arr[index]) > 0) {\n      [this.arr[childrenIndex], this.arr[index]] = [this.arr[index], this.arr[childrenIndex]];\n      this.shiftDown(childrenIndex);\n    }\n  }\n  *[Symbol.iterator](): IterableIterator<T> {\n    for (const t of this.arr) {\n      yield t;\n    }\n  }\n}\nclass TWorker {\n  constructor(\n    public i: number,\n    public l2r: number,\n    public pickOld: number,\n    public r2l: number,\n    public putNew: number,\n    public wait: number = 0\n  ) {}\n  cost() {\n    return this.l2r + this.r2l;\n  }\n  cmp(worker: TWorker) {\n    return this.cost() !== worker.cost() ? this.cost() - worker.cost() : this.i - worker.i;\n  }\n  cmpWait(worker: TWorker) {\n    return worker.wait - this.wait;\n  }\n  toString() {\n    return `Worker${this.i}: l2r=${this.l2r}, r2l=${this.r2l}, pickOld=${this.pickOld}, putNew=${\n      this.putNew\n    }, cost=${this.cost()}, wait = ${this.wait}`;\n  }\n}\nfunction findCrossingTime(n: number, k: number, time: number[][]): number {\n  const workers = new Array(k)\n    .fill(0)\n    .map((_, i) => new TWorker(i, ...(time[i] as [number, number, number, number])));\n  console.log('========');\n  console.log(workers.map(v => v.toString()).join('\n'));\n  console.log('========');\n  const lHeap = new Heap<TWorker>((w1, w2) => w1.cmp(w2));\n  const rHeap = new Heap<TWorker>((w1, w2) => w1.cmp(w2));\n  const pickHeap = new Heap<TWorker>((t1, t2) => t1.cmpWait(t2));\n  const putHeap = new Heap<TWorker>((t1, t2) => t1.cmpWait(t2));\n  const printHeap = (record: Record<string, Heap<TWorker>>) =>\n    Object.entries(record).forEach(([k, v]) =>\n      console.log(`=> ${k}(${v.size}):\n${v.arr.map(v => v.toString()).join('\n')}`)\n    );\n  for (const worker of workers) lHeap.add(worker);\n  let ans = 0;\n  while (n) {\n    console.log('=====loop====');\n    console.log(`ans = ${ans}, n = ${n}`);\n    printHeap({ lHeap, rHeap, pickHeap, putHeap });\n    while (pickHeap.size && pickHeap.top.wait <= ans) rHeap.add(pickHeap.remove());\n    while (putHeap.size && putHeap.top.wait <= ans) lHeap.add(putHeap.remove());\n    if (lHeap.isEmpty && rHeap.isEmpty) {\n      const pick = pickHeap.top?.wait ?? Infinity;\n      const put = putHeap.top?.wait ?? Infinity;\n      if (pick < put) ans = pickHeap.top.wait;\n      else ans = putHeap.top.wait;\n      while (pickHeap.size && pickHeap.top[0] <= ans) rHeap.add(pickHeap.remove()), n--;\n      while (putHeap.size && putHeap.top[0] <= ans) lHeap.add(putHeap.remove());\n    }\n    if (rHeap.size) {\n      ans += rHeap.top.r2l;\n      const worker = rHeap.remove();\n      worker.wait = ans + worker.putNew;\n      putHeap.add(worker);\n    } else if (lHeap.size && n) {\n      ans += lHeap.top.l2r;\n      const worker = lHeap.remove();\n      worker.wait = ans + worker.pickOld;\n      pickHeap.add(worker);\n      n--;\n    }\n  }\n  while (rHeap.size || pickHeap.size) {\n    console.log('=====after====');\n    console.log(`ans = ${ans}, n = ${n}`);\n    printHeap({ lHeap, rHeap, pickHeap, putHeap });\n    if (rHeap.size) ans += rHeap.remove().r2l;\n    while (pickHeap.size && pickHeap.top.wait <= ans) rHeap.add(pickHeap.remove());\n    if (rHeap.isEmpty && pickHeap.size) ans = pickHeap.top.wait;\n  }\n  return ans;\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-08"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a3.6MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:'use std::{cmp::Ordering, collections::BinaryHeap};\n#[derive(Eq, Ord, PartialEq)]\nstruct Worker {\n    i: i32,\n    l2r: i32,\n    pick_old: i32,\n    r2l: i32,\n    put_new: i32,\n    wait: i32,\n    mode: bool,\n}\n\nimpl Worker {\n    fn new(i: i32, l2r: i32, pick_old: i32, r2l: i32, put_new: i32) -> Self {\n        Worker {\n            i,\n            l2r,\n            pick_old,\n            r2l,\n            put_new,\n            wait: 0,\n            mode: true,\n        }\n    }\n    fn cost(&self) -> i32 {\n        self.l2r + self.r2l\n    }\n    fn cmp(&self, worker: &Worker) -> Ordering {\n        if self.mode {\n            self.cmp_bridge(worker)\n        } else {\n            self.cmp_wait(worker)\n        }\n    }\n    fn cmp_bridge(&self, worker: &Worker) -> Ordering {\n        if self.cost() != worker.cost() {\n            self.cost().cmp(&worker.cost())\n        } else {\n            self.i.cmp(&worker.i)\n        }\n    }\n    fn cmp_wait(&self, worker: &Worker) -> Ordering {\n        worker.wait.cmp(&self.wait)\n    }\n    fn set_mode(&mut self, mode: bool) {\n        self.mode = mode;\n    }\n    fn set_bridge_mode(&mut self) {\n        self.set_mode(true)\n    }\n    fn set_wait_mode(&mut self) {\n        self.set_mode(false)\n    }\n}\n\nimpl ToString for Worker {\n    fn to_string(&self) -> String {\n        return format!(\n            "Worker{}: l2r = {}, r2l = {}, pickOld = {}, putNew = {}, cost = {}, wait = {}",\n            self.i,\n            self.l2r,\n            self.r2l,\n            self.pick_old,\n            self.put_new,\n            self.cost(),\n            self.wait\n        );\n    }\n}\n\nimpl PartialOrd for Worker {\n    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {\n        Some(self.cmp(other))\n    }\n}\n\nfn printHeap(name: &\'static str, heap: &BinaryHeap<Worker>) {\n    println!("=> {name}({})", heap.len());\n    for item in heap.iter() {\n        println!("{}", item.to_string());\n    }\n}\nimpl Solution {\n    pub fn find_crossing_time(n: i32, k: i32, time: Vec<Vec<i32>>) -> i32 {\n        let mut n = n;\n        let mut workers = Vec::new();\n        for i in 0..time.len() {\n            workers.push(Worker::new(\n                i as i32, time[i][0], time[i][1], time[i][2], time[i][3],\n            ));\n        }\n        let mut left_heap = BinaryHeap::<Worker>::new();\n        let mut right_heap = BinaryHeap::<Worker>::new();\n        let mut pick_heap = BinaryHeap::<Worker>::new();\n        let mut put_heap = BinaryHeap::<Worker>::new();\n        for worker in workers {\n            left_heap.push(worker);\n        }\n        let mut ans = 0;\n        while n > 0 {\n            // println!("====loop====");\n            // println!("ans = {ans}, n = {n}");\n            // printHeap("left_heap", &left_heap);\n            // printHeap("right_heap", &right_heap);\n            // printHeap("pick_heap", &pick_heap);\n            // printHeap("put_heap", &put_heap);\n            while !pick_heap.is_empty() && pick_heap.peek().unwrap().wait <= ans {\n                let mut worker = pick_heap.pop().unwrap();\n                worker.set_bridge_mode();\n                right_heap.push(worker);\n            }\n            while !put_heap.is_empty() && put_heap.peek().unwrap().wait <= ans {\n                let mut worker = put_heap.pop().unwrap();\n                worker.set_bridge_mode();\n                left_heap.push(worker);\n            }\n            if left_heap.is_empty() && right_heap.is_empty() {\n                let pick = match pick_heap.peek() {\n                    Some(worker) => worker.wait,\n                    None => i32::MAX,\n                };\n                let put = match put_heap.peek() {\n                    Some(worker) => worker.wait,\n                    None => i32::MAX,\n                };\n                ans = pick.min(put);\n            }\n            if !right_heap.is_empty() {\n                let mut worker = right_heap.pop().unwrap();\n                ans += worker.r2l;\n                worker.wait = ans + worker.put_new;\n                worker.set_wait_mode();\n                put_heap.push(worker);\n            } else if !left_heap.is_empty() && n > 0 {\n                let mut worker = left_heap.pop().unwrap();\n                ans += worker.l2r;\n                worker.wait = ans + worker.pick_old;\n                worker.set_wait_mode();\n                pick_heap.push(worker);\n                n -= 1;\n            }\n        }\n        while !right_heap.is_empty() || !pick_heap.is_empty() {\n            // println!("====after====");\n            // println!("ans = {ans}, n = {n}");\n            // printHeap("left_heap", &left_heap);\n            // printHeap("right_heap", &right_heap);\n            // printHeap("pick_heap", &pick_heap);\n            // printHeap("put_heap", &put_heap);\n            if !right_heap.is_empty() {\n                ans += right_heap.pop().unwrap().r2l;\n            }\n            while !pick_heap.is_empty() && pick_heap.peek().unwrap().wait <= ans {\n                let mut worker = pick_heap.pop().unwrap();\n                worker.set_bridge_mode();\n                right_heap.push(worker);\n            }\n            if right_heap.is_empty() && !pick_heap.is_empty() {\n                ans = pick_heap.peek().unwrap().wait;\n            }\n        }\n        ans\n    }\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-07"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a188ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a20.5MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'#define X first\n#define Y second\nclass Solution {\npublic:\n    typedef pair<int, int> pii;\n    int findCrossingTime(int n, int k, vector<vector<int>>& time) {\n        auto cmp = [&](int i1, int i2) {\n            int v1 = time[i1][0] + time[i1][2], v2 = time[i2][0] + time[i2][2];\n            return v1 < v2 || v1 == v2 && i1 < i2;\n        };\n        priority_queue<int, vector<int>, decltype(cmp)> ql(cmp), qr(cmp);\n        for (int i = 0; i < k; i++) ql.push(i);\n\n        auto cmpp = [&](pii i1, pii i2) {\n            return i2.X < i1.X;\n        };\n        priority_queue<pii, vector<pii>, decltype(cmpp)> qpl(cmpp), qpr(cmpp);\n\n        int res = 0;\n        while (qr.size() || qpr.size() || n > 0) {\n            // cout << "===> Loop: " \n            //      << "n = " << n\n            //      << ", res = " << res\n            //      << ", qpl = " << (qpl.size() ? (long long)qpl.top().X * 100 + qpl.top().Y : -1)\n            //      << ", ql = " << (ql.size() ? ql.top() : -1)\n            //      << ", qr = " << (qr.size() ? qr.top() : -1)\n            //      << ", qpr = " << (qpr.size() ? (long long)qpr.top().X * 100 + qpr.top().Y : -1)\n            //      << endl;\n\n            if ((ql.empty() && qr.empty()) || qr.empty() && qpr.size() && n == 0) {\n                res = max(\n                    res,\n                    min(\n                        qpl.size() ? qpl.top().X : INT_MAX,\n                        qpr.size() ? qpr.top().X : INT_MAX\n                    )\n                );\n            }\n\n            while (qpl.size() && qpl.top().X <= res) {\n                auto cur = qpl.top();\n                qpl.pop();\n                ql.push(cur.Y);\n            }\n            while (qpr.size() && qpr.top().X <= res) {\n                auto cur = qpr.top();\n                qpr.pop();\n                qr.push(cur.Y);\n            }\n\n            if (qr.size()) {\n                auto cur = qr.top();\n                qr.pop();\n                res += time[cur][2];\n                qpl.push(make_pair(res + time[cur][3], cur));\n            } else if (ql.size() && n > 0) {\n                n -= 1;\n                auto cur = ql.top();\n                ql.pop();\n                res += time[cur][0];\n                qpr.push(make_pair(res + time[cur][1], cur));\n            }\n        }\n\n        return res;\n    }\n};\n'})})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>o});var i=r(30758);const t={},p=i.createContext(t);function s(n){const e=i.useContext(p);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(p.Provider,{value:e},n.children)}}}]);