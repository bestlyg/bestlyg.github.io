"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[95667],{67322:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var r=t(86070),s=t(31503);const c={},i="55.\u8df3\u8dc3\u6e38\u620f",o={id:"leetcode/1-100/\u8df3\u8dc3\u6e38\u620f",title:"55.\u8df3\u8dc3\u6e38\u620f",description:"\u94fe\u63a5\uff1a55.\u8df3\u8dc3\u6e38\u620f",source:"@site/docs/leetcode/1-100/55.\u8df3\u8dc3\u6e38\u620f.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u8df3\u8dc3\u6e38\u620f",permalink:"/docs/leetcode/1-100/\u8df3\u8dc3\u6e38\u620f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:55,frontMatter:{},sidebar:"journal",previous:{title:"54.\u87ba\u65cb\u77e9\u9635",permalink:"/docs/leetcode/1-100/\u87ba\u65cb\u77e9\u9635"},next:{title:"56.\u5408\u5e76\u533a\u95f4",permalink:"/docs/leetcode/1-100/\u5408\u5e76\u533a\u95f4"}},l={},a=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"55\u8df3\u8dc3\u6e38\u620f",children:"55.\u8df3\u8dc3\u6e38\u620f"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/jump-game",children:"55.\u8df3\u8dc3\u6e38\u620f"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\u6570\u7ec4\uff0c\u4f60\u6700\u521d\u4f4d\u4e8e\u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-17"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a35.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6570\u7ec4\uff0c\u5224\u65ad\u6bcf\u6b21\u8df3\u8dc3\u540e\u7684\u6700\u5927\u4e0b\u6807\u5e76\u4e8e\u5f53\u524d\u904d\u5386\u4e0b\u6807\u8fdb\u884c\u6bd4\u8f83\uff0c\u5982\u679c\u4e00\u4e2a\u4f4d\u7f6e\u80fd\u591f\u5230\u8fbe\uff0c\u90a3\u4e48\u8fd9\u4e2a\u4f4d\u7f6e\u5de6\u4fa7\u6240\u6709\u4f4d\u7f6e\u90fd\u80fd\u5230\u8fbe\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar canJump = function (nums) {\n  let k = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > k) return false;\n    k = Math.max(k, i + nums[i]);\n  }\n  return true;\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(30758);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);