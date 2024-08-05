"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[124],{3187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(86070),i=t(25710);const s={},c="468.\u9a8c\u8bc1IP\u5730\u5740",l={id:"leetcode/401-500/\u9a8c\u8bc1IP\u5730\u5740",title:"468.\u9a8c\u8bc1IP\u5730\u5740",description:"\u94fe\u63a5\uff1a468.\u9a8c\u8bc1IP\u5730\u5740",source:"@site/docs/leetcode/401-500/468.\u9a8c\u8bc1IP\u5730\u5740.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u9a8c\u8bc1IP\u5730\u5740",permalink:"/web/site/docs/leetcode/401-500/\u9a8c\u8bc1IP\u5730\u5740",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:468,frontMatter:{},sidebar:"journal",previous:{title:"467.\u73af\u7ed5\u5b57\u7b26\u4e32\u4e2d\u552f\u4e00\u7684\u5b50\u5b57\u7b26\u4e32",permalink:"/web/site/docs/leetcode/401-500/\u73af\u7ed5\u5b57\u7b26\u4e32\u4e2d\u552f\u4e00\u7684\u5b50\u5b57\u7b26\u4e32"},next:{title:"470.\u7528Rand7()\u5b9e\u73b0Rand10()",permalink:"/web/site/docs/leetcode/401-500/\u7528Rand7()\u5b9e\u73b0Rand10()"}},o={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"468\u9a8c\u8bc1ip\u5730\u5740",children:"468.\u9a8c\u8bc1IP\u5730\u5740"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/validate-ip-address",children:"468.\u9a8c\u8bc1IP\u5730\u5740"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\u6765\u9a8c\u8bc1\u8f93\u5165\u7684\u5b57\u7b26\u4e32\u662f\u5426\u662f\u6709\u6548\u7684 IPv4 \u6216 IPv6 \u5730\u5740\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-07"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.5MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6bcf\u4e00\u4e2a\u7247\u6bb5\u8fdb\u884c\u89e3\u6790\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function checkIpv4(query: string) {\n  const list = query.split('.');\n  if (list.length !== 4) return false;\n  for (const section of list) {\n    if (\n      section === '' ||\n      (section.length > 1 && section[0] === '0') ||\n      /[a-zA-Z]+/.test(section) ||\n      +section >= 256\n    )\n      return false;\n  }\n  return true;\n}\nfunction checkIpv6(query: string) {\n  const list = query.split(':');\n  if (list.length !== 8) return false;\n  for (const section of list) {\n    if (section === '0') continue;\n    if (section === '' || section.length > 4 || /[g-zG-Z]+/.test(section)) return false;\n  }\n  return true;\n}\nfunction validIPAddress(queryIP: string): string {\n  let ipv4 = false;\n  let ipv6 = false;\n  for (const c of queryIP) {\n    if (c === '.') {\n      ipv4 = true;\n      break;\n    } else if (c === ':') {\n      ipv6 = true;\n      break;\n    }\n  }\n  if (ipv4 && checkIpv4(queryIP)) return 'IPv4';\n  if (ipv6 && checkIpv6(queryIP)) return 'IPv6';\n  return 'Neither';\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-29"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a64ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.5MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\uff0c\u68c0\u6d4b\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const ipv4Reg = /^[0-9]+$/;\nfunction _checkIPV4(item: string): boolean {\n  if (!ipv4Reg.test(item)) return false;\n  if (item.length > 1 && item[0] === '0') return false;\n  if (parseInt(item) > 255) return false;\n  return true;\n}\nfunction checkIPV4(str: string): boolean {\n  const items = str.split('.');\n  if (items.length !== 4) return false;\n  return items.every(_checkIPV4);\n}\nconst ipv6Reg = /^[0-9a-fA-F]*$/;\nfunction _checkIPV6(item: string): boolean {\n  if (!ipv6Reg.test(item)) return false;\n  if (item.length > 4 || item.length === 0) return false;\n  return true;\n}\nfunction checkIPV6(str: string): boolean {\n  const items = str.split(':');\n  if (items.length !== 8) return false;\n  return items.every(_checkIPV6);\n}\nfunction validIPAddress(queryIP: string): string {\n  if (checkIPV4(queryIP)) return 'IPv4';\n  if (checkIPV6(queryIP)) return 'IPv6';\n  return 'Neither';\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(30758);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);