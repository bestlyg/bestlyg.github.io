"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[2513],{14659:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var s=t(86070),o=t(25710);const r={},u="815.\u516c\u4ea4\u8def\u7ebf",i={id:"leetcode/801-900/\u516c\u4ea4\u8def\u7ebf",title:"815.\u516c\u4ea4\u8def\u7ebf",description:"\u94fe\u63a5\uff1a815.\u516c\u4ea4\u8def\u7ebf",source:"@site/docs/leetcode/801-900/815.\u516c\u4ea4\u8def\u7ebf.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u516c\u4ea4\u8def\u7ebf",permalink:"/docs/leetcode/801-900/\u516c\u4ea4\u8def\u7ebf",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:815,frontMatter:{},sidebar:"journal",previous:{title:"814.\u4e8c\u53c9\u6811\u526a\u679d",permalink:"/docs/leetcode/801-900/\u4e8c\u53c9\u6811\u526a\u679d"},next:{title:"816.\u6a21\u7cca\u5750\u6807",permalink:"/docs/leetcode/801-900/\u6a21\u7cca\u5750\u6807"}},c={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"815\u516c\u4ea4\u8def\u7ebf",children:"815.\u516c\u4ea4\u8def\u7ebf"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/bus-routes",children:"815.\u516c\u4ea4\u8def\u7ebf"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6c42\u51fa \u6700\u5c11\u4e58\u5750\u7684\u516c\u4ea4\u8f66\u6570\u91cf \u3002\u5982\u679c\u4e0d\u53ef\u80fd\u5230\u8fbe\u7ec8\u70b9\u8f66\u7ad9\uff0c\u8fd4\u56de -1 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-06-28"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a268ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a71.6MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\uff0c\u50a8\u5b58\u7ad9\u70b9\u4fe1\u606f\u548c\u516c\u4ea4\u6362\u7ad9\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function numBusesToDestination(routes: number[][], source: number, target: number): number {\n  if (source === target) return 0;\n  const stationMap = new Map<number, Set<number>>();\n  for (let routeIndex = 0, routeLen = routes.length; routeIndex < routeLen; routeIndex++) {\n    const route = routes[routeIndex];\n    for (\n      let stationIndex = 0, stationLen = route.length;\n      stationIndex < stationLen;\n      stationIndex++\n    ) {\n      const station = route[stationIndex];\n      let set = stationMap.get(station);\n      if (!set) stationMap.set(station, (set = new Set()));\n      set.add(routeIndex);\n    }\n  }\n  const busMap = new Map<number, Set<number>>();\n  for (const busList of stationMap.values()) {\n    if (busList.size === 1) continue;\n    for (const bus of busList) {\n      let set = busMap.get(bus);\n      if (!set) busMap.set(bus, (set = new Set()));\n      for (const nextBus of busList) if (nextBus !== bus) set.add(nextBus);\n    }\n  }\n  const FIRST_BUS = stationMap.get(source)!;\n  const LAST_BUS = stationMap.get(target)!;\n  if (!FIRST_BUS || !LAST_BUS || FIRST_BUS.size === 0 || LAST_BUS.size === 0) return -1;\n  for (const bus of FIRST_BUS) if (LAST_BUS.has(bus)) return 1;\n  let ans = Infinity;\n  const stepMap = new Map<number, number>();\n  for (const bus of FIRST_BUS) stepMap.set(bus, 1);\n  const queue: number[] = [...FIRST_BUS];\n  while (queue.length !== 0) {\n    const bus = queue.shift()!;\n    const step = stepMap.get(bus)!;\n    if (LAST_BUS.has(bus)) {\n      ans = Math.min(ans, step);\n      continue;\n    }\n    const nextBusList = busMap.get(bus)!;\n    for (const nextBus of nextBusList ?? []) {\n      if (!stepMap.has(nextBus)) queue.push(nextBus);\n      stepMap.set(nextBus, Math.min(stepMap.get(nextBus) ?? Infinity, step + 1));\n    }\n  }\n  return ans === Infinity ? -1 : ans;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>u,x:()=>i});var s=t(30758);const o={},r=s.createContext(o);function u(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);