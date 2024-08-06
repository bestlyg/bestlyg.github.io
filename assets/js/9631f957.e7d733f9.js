"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[55273],{31086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=t(86070),s=t(25710);const i={},c="1603.\u8bbe\u8ba1\u505c\u8f66\u7cfb\u7edf",o={id:"leetcode/1601-1700/\u8bbe\u8ba1\u505c\u8f66\u7cfb\u7edf",title:"1603.\u8bbe\u8ba1\u505c\u8f66\u7cfb\u7edf",description:"\u94fe\u63a5\uff1a1603.\u8bbe\u8ba1\u505c\u8f66\u7cfb\u7edf",source:"@site/docs/leetcode/1601-1700/1603.\u8bbe\u8ba1\u505c\u8f66\u7cfb\u7edf.md",sourceDirName:"leetcode/1601-1700",slug:"/leetcode/1601-1700/\u8bbe\u8ba1\u505c\u8f66\u7cfb\u7edf",permalink:"/docs/leetcode/1601-1700/\u8bbe\u8ba1\u505c\u8f66\u7cfb\u7edf",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1603,frontMatter:{},sidebar:"journal",previous:{title:"1601.\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee",permalink:"/docs/leetcode/1601-1700/\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee"},next:{title:"1604.\u8b66\u544a\u4e00\u5c0f\u65f6\u5185\u4f7f\u7528\u76f8\u540c\u5458\u5de5\u5361\u5927\u4e8e\u7b49\u4e8e\u4e09\u6b21\u7684\u4eba",permalink:"/docs/leetcode/1601-1700/\u8b66\u544a\u4e00\u5c0f\u65f6\u5185\u4f7f\u7528\u76f8\u540c\u5458\u5de5\u5361\u5927\u4e8e\u7b49\u4e8e\u4e09\u6b21\u7684\u4eba"}},l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"1603\u8bbe\u8ba1\u505c\u8f66\u7cfb\u7edf",children:"1603.\u8bbe\u8ba1\u505c\u8f66\u7cfb\u7edf"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/design-parking-system",children:"1603.\u8bbe\u8ba1\u505c\u8f66\u7cfb\u7edf"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u8ba1\u6570\u3001\u6a21\u62df",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u7ed9\u4e00\u4e2a\u505c\u8f66\u573a\u8bbe\u8ba1\u4e00\u4e2a\u505c\u8f66\u7cfb\u7edf\u3002\u505c\u8f66\u573a\u603b\u5171\u6709\u4e09\u79cd\u4e0d\u540c\u5927\u5c0f\u7684\u8f66\u4f4d\uff1a\u5927\uff0c\u4e2d\u548c\u5c0f\uff0c\u6bcf\u79cd\u5c3a\u5bf8\u5206\u522b\u6709\u56fa\u5b9a\u6570\u76ee\u7684\u8f66\u4f4d\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-19"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a164ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.3MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u6570\u7ec4\u7ef4\u62a4\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class ParkingSystem {\n  private parkingLot: number[];\n  constructor(big: number, medium: number, small: number) {\n    this.parkingLot = [big, medium, small];\n  }\n  addCar(carType: number): boolean {\n    if (this.parkingLot[carType - 1] > 0) {\n      this.parkingLot[carType - 1]--;\n      return true;\n    } else return false;\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(30758);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);