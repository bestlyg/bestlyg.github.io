"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[5475],{15490:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var r=l(86070),s=l(25710);const i={},c="2591.\u5c06\u94b1\u5206\u7ed9\u6700\u591a\u7684\u513f\u7ae5",t={id:"leetcode/2501-2600/\u5c06\u94b1\u5206\u7ed9\u6700\u591a\u7684\u513f\u7ae5",title:"2591.\u5c06\u94b1\u5206\u7ed9\u6700\u591a\u7684\u513f\u7ae5",description:"\u94fe\u63a5\uff1a2591.\u5c06\u94b1\u5206\u7ed9\u6700\u591a\u7684\u513f\u7ae5",source:"@site/docs/leetcode/2501-2600/2591.\u5c06\u94b1\u5206\u7ed9\u6700\u591a\u7684\u513f\u7ae5.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u5c06\u94b1\u5206\u7ed9\u6700\u591a\u7684\u513f\u7ae5",permalink:"/web/site/docs/leetcode/2501-2600/\u5c06\u94b1\u5206\u7ed9\u6700\u591a\u7684\u513f\u7ae5",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2591,frontMatter:{},sidebar:"journal",previous:{title:"2589.\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u7684\u6700\u5c11\u65f6\u95f4",permalink:"/web/site/docs/leetcode/2501-2600/\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u7684\u6700\u5c11\u65f6\u95f4"},next:{title:"2594.\u4fee\u8f66\u7684\u6700\u5c11\u65f6\u95f4",permalink:"/web/site/docs/leetcode/2501-2600/\u4fee\u8f66\u7684\u6700\u5c11\u65f6\u95f4"}},u={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"2591\u5c06\u94b1\u5206\u7ed9\u6700\u591a\u7684\u513f\u7ae5",children:"2591.\u5c06\u94b1\u5206\u7ed9\u6700\u591a\u7684\u513f\u7ae5"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/distribute-money-to-maximum-children",children:"2591.\u5c06\u94b1\u5206\u7ed9\u6700\u591a\u7684\u513f\u7ae5"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u5b66",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u6309\u7167\u4e0a\u8ff0\u89c4\u5219\u5206\u914d\u91d1\u94b1\uff0c\u5e76\u8fd4\u56de \u6700\u591a \u6709\u591a\u5c11\u4e2a\u513f\u7ae5\u83b7\u5f97 \u6070\u597d 8 \u7f8e\u5143\u3002\u5982\u679c\u6ca1\u6709\u4efb\u4f55\u5206\u914d\u65b9\u6848\uff0c\u8fd4\u56de -1 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-22"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.05MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3\u8ba1\u7b97\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int distMoney(int money, int children) {\n        if (money < children) return -1;\n        int cnt = money / 8, surplus_money = money % 8, surplus_children = children - cnt;\n        if (cnt == children) return surplus_money == 0 ? children : children - 1;\n        if (cnt > children) return children - 1;\n        if (surplus_money == surplus_children) return cnt;\n        if (surplus_money > surplus_children) return surplus_children == 1 and surplus_money == 4 ? cnt - 1 : cnt;\n        return cnt - ceil(1.0 * (surplus_children - surplus_money) / 7.0);\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-22"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.61MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def distMoney(self, money: int, children: int) -> int:\n        if money < children:\n            return -1\n        cnt = money // 8\n        surplus_money = money % 8\n        surplus_children = children - cnt\n        if cnt == children:\n            if surplus_money == 0:\n                return children\n            return children - 1\n        if cnt > children:\n            return children - 1\n        if surplus_money == surplus_children:\n            return cnt\n        if surplus_money > surplus_children:\n            if surplus_children == 1 and surplus_money == 4:\n                return cnt - 1\n            return cnt\n        return cnt - ceil((surplus_children - surplus_money) / 7)\n\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-22"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.58MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn dist_money(money: i32, children: i32) -> i32 {\n        if money < children {\n            -1\n        } else {\n            let (cnt, surplus_money) = (money / 8, money % 8);\n            let surplus_children = children - cnt;\n            if cnt == children {\n                if surplus_money == 0 {\n                    children\n                } else {\n                    children - 1\n                }\n            } else if cnt > children {\n                children - 1\n            } else if surplus_money == surplus_children {\n                cnt\n            } else if surplus_money > surplus_children {\n                if surplus_children == 1 && surplus_money == 4 {\n                    cnt - 1\n                } else {\n                    cnt\n                }\n            } else {\n                cnt - ((surplus_children - surplus_money) as f64 / 7.0).ceil() as i32\n            }\n        }\n    }\n}\n\n"})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},25710:(n,e,l)=>{l.d(e,{R:()=>c,x:()=>t});var r=l(30758);const s={},i=r.createContext(s);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);