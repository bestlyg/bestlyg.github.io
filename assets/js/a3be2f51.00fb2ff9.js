"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[58278],{531:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var i=t(86070),c=t(25710);const r={},o="2045.\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4",s={id:"leetcode/2001-2100/\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4",title:"2045.\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4",description:"\u94fe\u63a5\uff1a2045.\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4",source:"@site/docs/leetcode/2001-2100/2045.\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4.md",sourceDirName:"leetcode/2001-2100",slug:"/leetcode/2001-2100/\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4",permalink:"/docs/leetcode/2001-2100/\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2045,frontMatter:{},sidebar:"journal",previous:{title:"2044.\u7edf\u8ba1\u6309\u4f4d\u6216\u80fd\u5f97\u5230\u6700\u5927\u503c\u7684\u5b50\u96c6\u6570\u76ee",permalink:"/docs/leetcode/2001-2100/\u7edf\u8ba1\u6309\u4f4d\u6216\u80fd\u5f97\u5230\u6700\u5927\u503c\u7684\u5b50\u96c6\u6570\u76ee"},next:{title:"2047.\u53e5\u5b50\u4e2d\u7684\u6709\u6548\u5355\u8bcd\u6570",permalink:"/docs/leetcode/2001-2100/\u53e5\u5b50\u4e2d\u7684\u6709\u6548\u5355\u8bcd\u6570"}},a={},m=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function l(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"2045\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4",children:"2045.\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/second-minimum-time-to-reach-destination",children:"2045.\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u56fe\u3001\u6700\u77ed\u8def",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60 n\u3001edges\u3001time \u548c change \uff0c\u8fd4\u56de\u4ece\u8282\u70b9 1 \u5230\u8282\u70b9 n \u9700\u8981\u7684 \u7b2c\u4e8c\u77ed\u65f6\u95f4 \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-24"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a400ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a67.8MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u8282\u70b9\u8bb0\u5f55\u5df2\u7ecf\u904d\u5386\u8fc7\u7684\u503c\uff0c\u8fdb\u884c\u526a\u679d\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"class Node {\n  next: Node[] = [];\n  min_time1 = Infinity;\n  min_time2 = Infinity;\n  constructor(public idx: number) {}\n}\nclass Car {\n  constructor(public current: Node, public time = 0) {}\n}\nfunction secondMinimum(n: number, edges: number[][], time: number, change: number): number {\n  const nodes: Record<number, Node> = {};\n  for (let i = 1; i <= n; i++) nodes[i] = new Node(i);\n  for (const [n1, n2] of edges) {\n    const node1 = nodes[n1];\n    const node2 = nodes[n2];\n    node1.next.push(node2);\n    node2.next.push(node1);\n  }\n  nodes[1].min_time1 = 0;\n  const queue: Car[] = [new Car(nodes[1])];\n  const arr: Car[] = [];\n  while (queue.length) {\n    const car = queue.shift()!;\n    const wait_check = Math.floor(car.time / change);\n    const next_time = wait_check % 2 === 0 ? car.time + time : (wait_check + 1) * change + time;\n    for (const next of car.current.next) {\n      if (next_time < next.min_time1) {\n        const ncar = new Car(next, next_time);\n        next.min_time1 = next_time;\n        if (next === nodes[n]) {\n          arr.push(ncar);\n          continue;\n        }\n        queue.push(ncar);\n      } else if (next_time > next.min_time1 && next_time < next.min_time2) {\n        const ncar = new Car(next, next_time);\n        next.min_time2 = next_time;\n        if (next === nodes[n]) {\n          arr.push(ncar);\n          continue;\n        }\n        queue.push(ncar);\n      }\n    }\n  }\n  arr.sort((a, b) => a.time - b.time);\n  const min_car = arr[0];\n  let min21_car: Car | null = null;\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i].time !== min_car.time) {\n      min21_car = arr[i];\n      break;\n    }\n  }\n  const min22 = getNext(min_car);\n  return Math.min(min21_car?.time ?? Infinity, min22);\n  function getNext(car: Car): number {\n    // \u56de\u53bb\n    let wait_check = Math.floor(car.time / change);\n    let next_time = wait_check % 2 === 0 ? car.time + time : (wait_check + 1) * change + time;\n    // \u56de\u6765\n    wait_check = Math.floor(next_time / change);\n    next_time = wait_check % 2 === 0 ? next_time + time : (wait_check + 1) * change + time;\n    return next_time;\n  }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>s});var i=t(30758);const c={},r=i.createContext(c);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);