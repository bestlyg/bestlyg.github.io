"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[49414],{41752:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>t,toc:()=>x});const t=JSON.parse('{"id":"leetcode/1401-1500/\u5706\u548c\u77e9\u5f62\u662f\u5426\u6709\u91cd\u53e0","title":"1401.\u5706\u548c\u77e9\u5f62\u662f\u5426\u6709\u91cd\u53e0","description":"\u94fe\u63a5\uff1a1401.\u5706\u548c\u77e9\u5f62\u662f\u5426\u6709\u91cd\u53e0","source":"@site/docs/leetcode/1401-1500/1401.\u5706\u548c\u77e9\u5f62\u662f\u5426\u6709\u91cd\u53e0.md","sourceDirName":"leetcode/1401-1500","slug":"/leetcode/1401-1500/\u5706\u548c\u77e9\u5f62\u662f\u5426\u6709\u91cd\u53e0","permalink":"/docs/leetcode/1401-1500/\u5706\u548c\u77e9\u5f62\u662f\u5426\u6709\u91cd\u53e0","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1401,"frontMatter":{},"sidebar":"journal","previous":{"title":"1388.3n\u5757\u62ab\u8428","permalink":"/docs/leetcode/1301-1400/1388.3n\u5757\u62ab\u8428"},"next":{"title":"1402.\u505a\u83dc\u987a\u5e8f","permalink":"/docs/leetcode/1401-1500/\u505a\u83dc\u987a\u5e8f"}}');var i=r(86070),l=r(31503);const s={},c="1401.\u5706\u548c\u77e9\u5f62\u662f\u5426\u6709\u91cd\u53e0",d={},x=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"1401\u5706\u548c\u77e9\u5f62\u662f\u5426\u6709\u91cd\u53e0",children:"1401.\u5706\u548c\u77e9\u5f62\u662f\u5426\u6709\u91cd\u53e0"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/circle-and-rectangle-overlapping",children:"1401.\u5706\u548c\u77e9\u5f62\u662f\u5426\u6709\u91cd\u53e0"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u51e0\u4f55\u3001\u6570\u5b66",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4ee5 (radius, xCenter, yCenter) \u8868\u793a\u7684\u5706\u548c\u4e00\u4e2a\u4e0e\u5750\u6807\u8f74\u5e73\u884c\u7684\u77e9\u5f62 (x1, y1, x2, y2) \uff0c\u5176\u4e2d (x1, y1) \u662f\u77e9\u5f62\u5de6\u4e0b\u89d2\u7684\u5750\u6807\uff0c\u800c (x2, y2) \u662f\u53f3\u4e0a\u89d2\u7684\u5750\u6807\u3002\u5982\u679c\u5706\u548c\u77e9\u5f62\u6709\u91cd\u53e0\u7684\u90e8\u5206\uff0c\u8bf7\u4f60\u8fd4\u56de true \uff0c\u5426\u5219\u8fd4\u56de false\xa0\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u8bf7\u4f60\u68c0\u6d4b\u662f\u5426 \u5b58\u5728 \u70b9 (xi, yi) \uff0c\u5b83\u65e2\u5728\u5706\u4e0a\u4e5f\u5728\u77e9\u5f62\u4e0a\uff08\u4e24\u8005\u90fd\u5305\u62ec\u70b9\u843d\u5728\u8fb9\u754c\u4e0a\u7684\u60c5\u51b5\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-25"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.7MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u4e8e\u5706\u5728\u77e9\u5f62\u7684\u56db\u8fb9\u548c\u5728\u56db\u4e2a\u8fdc\u90ca\u533a\u90fd\u8fdb\u884c\u68c0\u6d4b\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool checkOverlap(int radius, int xCenter, int yCenter, int x1, int y1, int x2, int y2) {\n        double xCenter2 = 1.0 * (x2 + x1) / 2, yCenter2 = 1.0 * (y2 + y1) / 2, d2 = yCenter2 - y1, d1 = xCenter2 - x1;\n        auto check = [&](double x1, double y1, double x2, double y2, double d) { return fabs(x1 - x2) * fabs(x1 - x2) + fabs(y1 - y2) * fabs(y1 - y2) <= d * d; };\n        return xCenter2 - d1 <= xCenter && xCenter <= xCenter2 + d1 && yCenter2 - d2 <= yCenter && yCenter <= yCenter2 + d2 ||\n               xCenter2 - d1 <= xCenter && xCenter <= xCenter2 + d1 && yCenter2 <= yCenter && yCenter <= yCenter2 + d2 + radius ||\n               xCenter2 - d1 <= xCenter && xCenter <= xCenter2 + d1 && yCenter2 - d2 - radius <= yCenter && yCenter <= yCenter2 ||\n               yCenter2 - d2 <= yCenter && yCenter <= yCenter2 + d2 && xCenter2 <= xCenter && xCenter <= xCenter2 + d1 + radius ||\n               yCenter2 - d2 <= yCenter && yCenter <= yCenter2 + d2 && xCenter2 - d1 - radius <= xCenter && xCenter <= xCenter2 ||\n               check(xCenter, yCenter, x1, y1, radius) ||\n               check(xCenter, yCenter, x1, y2, radius) ||\n               check(xCenter, yCenter, x2, y1, radius) ||\n               check(xCenter, yCenter, x2, y2, radius)\n               ;\n               \n    }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-25"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.6MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8ba1\u7b97\u4e24\u4e2a\u5f62\u72b6\u7684\u6700\u8fd1\u8ddd\u79bb\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool checkOverlap(int radius, int xCenter, int yCenter, int x1, int y1, int x2, int y2) {\n        int x = clamp(xCenter, x1, x2) - xCenter, y = clamp(yCenter, y1, y2) - yCenter;\n        return pow(x, 2) + pow(y, 2) <= pow(radius, 2);\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-25"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def checkOverlap(self, radius: int, xCenter: int, yCenter: int, x1: int, y1: int, x2: int, y2: int) -> bool:\n        x = max(min(xCenter, x2), x1) - xCenter\n        y = max(min(yCenter, y2), y1) - yCenter\n        return pow(x, 2) + pow(y, 2) <= pow(radius, 2)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-25"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.9MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn check_overlap(\n        radius: i32,\n        x_center: i32,\n        y_center: i32,\n        x1: i32,\n        y1: i32,\n        x2: i32,\n        y2: i32,\n    ) -> bool {\n        let x = x_center.clamp(x1, x2) - x_center;\n        let y = y_center.clamp(y1, y2) - y_center;\n        x.pow(2) + y.pow(2) <= radius.pow(2)\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},31503:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var t=r(30758);const i={},l=t.createContext(i);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);