"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[13893],{81162:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=e(86070),o=e(25710);const r={},l="764.\u6700\u5927\u52a0\u53f7\u6807\u5fd7",s={id:"leetcode/701-800/\u6700\u5927\u52a0\u53f7\u6807\u5fd7",title:"764.\u6700\u5927\u52a0\u53f7\u6807\u5fd7",description:"\u94fe\u63a5\uff1a764.\u6700\u5927\u52a0\u53f7\u6807\u5fd7",source:"@site/docs/leetcode/701-800/764.\u6700\u5927\u52a0\u53f7\u6807\u5fd7.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u6700\u5927\u52a0\u53f7\u6807\u5fd7",permalink:"/docs/leetcode/701-800/\u6700\u5927\u52a0\u53f7\u6807\u5fd7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:764,frontMatter:{},sidebar:"journal",previous:{title:"762.\u4e8c\u8fdb\u5236\u8868\u793a\u4e2d\u8d28\u6570\u4e2a\u8ba1\u7b97\u7f6e\u4f4d",permalink:"/docs/leetcode/701-800/\u4e8c\u8fdb\u5236\u8868\u793a\u4e2d\u8d28\u6570\u4e2a\u8ba1\u7b97\u7f6e\u4f4d"},next:{title:"765.\u60c5\u4fa3\u7275\u624b",permalink:"/docs/leetcode/701-800/\u60c5\u4fa3\u7275\u624b"}},c={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"764\u6700\u5927\u52a0\u53f7\u6807\u5fd7",children:"764.\u6700\u5927\u52a0\u53f7\u6807\u5fd7"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(t.a,{href:"https://leetcode.cn/problems/largest-plus-sign",children:"764.\u6700\u5927\u52a0\u53f7\u6807\u5fd7"}),(0,i.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,i.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de grid \u4e2d\u5305\u542b 1 \u7684\u6700\u5927\u7684 \u8f74\u5bf9\u9f50 \u52a0\u53f7\u6807\u5fd7\u7684\u9636\u6570 \u3002\u5982\u679c\u672a\u627e\u5230\u52a0\u53f7\u6807\u5fd7\uff0c\u5219\u8fd4\u56de 0 \u3002"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-09"}),"\n",(0,i.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1844ms"}),"\n",(0,i.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a235.8MB"}),"\n",(0,i.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u7edf\u8ba1\u6bcf\u4e2a\u70b9\u6700\u4e0a\u4e0b\u5de6\u53f3\u7684 1\u3002"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:'struct Node {\n    int top, bottom, left, right;\n    Node(): top(0), bottom(0), left(0), right(0) {}\n};\nclass Solution {\npublic:\n    unordered_map<int, unordered_map<int, bool>> m;\n    int n;\n    int orderOfLargestPlusSign(int n, vector<vector<int>>& mines) {\n        this->n = n;\n        for (auto &item : mines) m[item[0]][item[1]] = true;\n        int ans = 0;\n        vector<vector<Node>> list(n, vector<Node>(n));\n        for (int i = 0; i < n; i++) load_row(list, i), load_col(list, i);\n        // cout << "n = " << n << endl;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (m[i][j]) continue;\n                // cout << "=====" << endl << "i = " << i << ", j = " << j << endl;\n                Node &node = list[i][j];\n                int left = j - node.left,\n                    right = node.right - j,\n                    top = i - node.top,\n                    bottom = node.bottom - i;\n                ans = max(ans, min(min(left, right), min(top, bottom)) + 1);\n                // cout << "node_top = " << list[i][j].top\n                //      << ", node_bottom = " << list[i][j].bottom\n                //      << ", node_left = " << list[i][j].left\n                //      << ", node_right = " << list[i][j].right\n                //      << endl\n                //      << "top = " << top\n                //      << ", bottom = " << bottom\n                //      << ", left = " << left\n                //      << ", right = " << right\n                //      << endl\n                //      << "ans = " << ans\n                //      << endl;\n            }\n        }\n        return ans;\n    }\n    void load_row(vector<vector<Node>> &list, int row) {\n        int l = 0;\n        for (int i = 0; i < n; i++) {\n            if (!m[row][i]) {\n                list[row][i].left = l;\n            } else {\n                l = i + 1;\n            }\n        }\n        int r = n - 1;\n        for (int i = n - 1; i >= 0; i--) {\n            if (!m[row][i]) {\n                list[row][i].right = r;\n            } else {\n                r = i - 1;\n            }\n        }\n    }\n    void load_col(vector<vector<Node>> &list, int col) {\n        int t = 0;\n        for (int i = 0; i < n; i++) {\n            if (!m[i][col]) {\n                list[i][col].top = t;\n            } else {\n                t = i + 1;\n            }\n        }\n        int b = n - 1;\n        for (int i = n - 1; i >= 0; i--) {\n            if (!m[i][col]) {\n                list[i][col].bottom = b;\n            } else {\n                b = i - 1;\n            }\n        }\n    }\n};\n'})})]})}function p(n={}){const{wrapper:t}={...(0,o.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,t,e)=>{e.d(t,{R:()=>l,x:()=>s});var i=e(30758);const o={},r=i.createContext(o);function l(n){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),i.createElement(r.Provider,{value:t},n.children)}}}]);