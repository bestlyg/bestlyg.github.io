"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[39233],{40836:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>m});var i=t(86070),s=t(25710);const r={},o="2457.\u7f8e\u4e3d\u6574\u6570\u7684\u6700\u5c0f\u589e\u91cf",a={id:"leetcode/2401-2500/\u7f8e\u4e3d\u6574\u6570\u7684\u6700\u5c0f\u589e\u91cf",title:"2457.\u7f8e\u4e3d\u6574\u6570\u7684\u6700\u5c0f\u589e\u91cf",description:"\u94fe\u63a5\uff1a2457.\u7f8e\u4e3d\u6574\u6570\u7684\u6700\u5c0f\u589e\u91cf",source:"@site/docs/leetcode/2401-2500/2457.\u7f8e\u4e3d\u6574\u6570\u7684\u6700\u5c0f\u589e\u91cf.md",sourceDirName:"leetcode/2401-2500",slug:"/leetcode/2401-2500/\u7f8e\u4e3d\u6574\u6570\u7684\u6700\u5c0f\u589e\u91cf",permalink:"/docs/leetcode/2401-2500/\u7f8e\u4e3d\u6574\u6570\u7684\u6700\u5c0f\u589e\u91cf",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2457,frontMatter:{},sidebar:"journal",previous:{title:"2456.\u6700\u6d41\u884c\u7684\u89c6\u9891\u521b\u4f5c\u8005",permalink:"/docs/leetcode/2401-2500/\u6700\u6d41\u884c\u7684\u89c6\u9891\u521b\u4f5c\u8005"},next:{title:"2458.\u79fb\u9664\u5b50\u6811\u540e\u7684\u4e8c\u53c9\u6811\u9ad8\u5ea6",permalink:"/docs/leetcode/2401-2500/\u79fb\u9664\u5b50\u6811\u540e\u7684\u4e8c\u53c9\u6811\u9ad8\u5ea6"}},c={},m=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function l(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"2457\u7f8e\u4e3d\u6574\u6570\u7684\u6700\u5c0f\u589e\u91cf",children:"2457.\u7f8e\u4e3d\u6574\u6570\u7684\u6700\u5c0f\u589e\u91cf"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-addition-to-make-integer-beautiful",children:"2457.\u7f8e\u4e3d\u6574\u6570\u7684\u6700\u5c0f\u589e\u91cf"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u5b66",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4e00\u4e2a\u4e8c\u7ef4\u5b57\u7b26\u4e32\u6570\u7ec4 answer \uff0c\u5176\u4e2d answer[i] = [creatori, idi] \u8868\u793a creatori \u7684\u6d41\u884c\u5ea6 \u6700\u9ad8 \u4e14\u5176\u6700\u6d41\u884c\u7684\u89c6\u9891 id \u662f idi \uff0c\u53ef\u4ee5\u6309\u4efb\u4f55\u987a\u5e8f\u8fd4\u56de\u8be5\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-30"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a724ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a240.8MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u66b4\u529b\u679a\u4e3e\uff0c\u901a\u8fc7 map \u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'struct MyData {\n    long long sum;\n    int nmax;\n    string name, smax;\n    map<string, int> m;\n    MyData() {};\n    MyData(string name): name(name), sum(0), nmax(0), smax(""){}\n    void setMap(string id, int view) {\n        if (nmax < view || nmax == view && (smax == "" || smax > id)) {\n            nmax = view;\n            smax = id;\n        }\n        sum += view;\n        m[id] = view;\n    }\n};\nclass Solution {\npublic:\n    vector<vector<string>> mostPopularCreator(vector<string>& creators, vector<string>& ids, vector<int>& views) {\n        int n = creators.size();\n        map<string, MyData> m;\n        vector<vector<string>> ans;\n        for (int i = 0; i < n; i++) {\n            if (!m.count(creators[i])) m[creators[i]] = MyData(creators[i]);\n            m[creators[i]].setMap(ids[i], views[i]);\n        }\n        int maxsum = m.begin()->second.sum;\n        for (auto &item : m) {\n            if (item.second.sum > maxsum) ans.clear(), maxsum = item.second.sum;\n            if (item.second.sum < maxsum) continue;\n            vector<string> data(2);\n            data[0] = item.first;\n            data[1] = item.second.smax;\n            ans.push_back(move(data));\n        }\n        return ans;\n    }\n};\n'})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>a});var i=t(30758);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);