"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[58963],{23210:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>t,metadata:()=>o,toc:()=>p});var i=s(86070),r=s(25710);const t={},l="1096.\u82b1\u62ec\u53f7\u5c55\u5f00II",o={id:"leetcode/1001-1100/\u82b1\u62ec\u53f7\u5c55\u5f00II",title:"1096.\u82b1\u62ec\u53f7\u5c55\u5f00II",description:"\u94fe\u63a5\uff1a1096.\u82b1\u62ec\u53f7\u5c55\u5f00II",source:"@site/docs/leetcode/1001-1100/1096.\u82b1\u62ec\u53f7\u5c55\u5f00II.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u82b1\u62ec\u53f7\u5c55\u5f00II",permalink:"/docs/leetcode/1001-1100/\u82b1\u62ec\u53f7\u5c55\u5f00II",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1096,frontMatter:{},sidebar:"journal",previous:{title:"1095.\u5c71\u8109\u6570\u7ec4\u4e2d\u67e5\u627e\u76ee\u6807\u503c",permalink:"/docs/leetcode/1001-1100/\u5c71\u8109\u6570\u7ec4\u4e2d\u67e5\u627e\u76ee\u6807\u503c"},next:{title:"1103.\u5206\u7cd6\u679cII",permalink:"/docs/leetcode/1101-1200/\u5206\u7cd6\u679cII"}},c={},p=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"1096\u82b1\u62ec\u53f7\u5c55\u5f00ii",children:"1096.\u82b1\u62ec\u53f7\u5c55\u5f00II"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/brace-expansion-ii",children:"1096.\u82b1\u62ec\u53f7\u5c55\u5f00II"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5b57\u7b26\u4e32\u3001\u56de\u6eaf",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u51fa\u8868\u793a\u57fa\u4e8e\u7ed9\u5b9a\u8bed\u6cd5\u89c4\u5219\u7684\u8868\u8fbe\u5f0f expression\uff0c\u8fd4\u56de\u5b83\u6240\u8868\u793a\u7684\u6240\u6709\u5b57\u7b26\u4e32\u7ec4\u6210\u7684\u6709\u5e8f\u5217\u8868\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-07"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a10.9MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<string> braceExpansionII(string expression) {\n        if (checkSingal(expression)) expression = expression.substr(1, expression.size() - 2);\n        set<string> s;\n        vector<string> items = split(expression);\n        if (items.size() > 1) {\n            for (auto &item : items) {\n                for (auto &res : braceExpansionII(item)) {\n                    s.insert(res);\n                }\n            }\n        } else {\n            string item = items[0];\n            vector<vector<string>> res = analysis(item);\n            dfs(s, res, 0, \"\");\n        }\n        return vector<string>(s.begin(), s.end());\n    }\n    bool checkSingal(string &expression) {\n        if (expression[0] != '{' || expression[expression.size() - 1] != '}') return false;\n        int level = 0, i = 0;\n        for (; i < expression.size(); i++) {\n            if (expression[i] == '{') level++;\n            else if (expression[i] == '}') level--;\n            if (i != expression.size() - 1 && level == 0) return false;\n        }\n        return true;\n    }\n    vector<string> split(string &expression) {\n        vector<string> items;\n        int level = 0, prev = 0, i = 0;\n        for (; i < expression.size(); i++) {\n            if (expression[i] == '{') level++;\n            else if (expression[i] == '}') level--;\n            else if (expression[i] == ',' && level == 0) {\n                items.push_back(expression.substr(prev, i - prev));\n                prev = i + 1;\n            }\n        }\n        items.push_back(expression.substr(prev, i - prev));\n        return items;\n    }\n    vector<vector<string>> analysis(string &item) {\n        vector<vector<string>> res;\n        for (int i = 0; i < item.size(); i++) {\n            if (item[i] != '{') {\n                string s = \"\";\n                s += item[i];\n                vector<string> v;\n                v.push_back(s);\n                res.push_back(v);\n            } else {\n                int prev = i, level = 0;\n                do {\n                    if (item[i] == '{') level++;\n                    else if (item[i] == '}') level--;\n                    if (level != 0) i++;\n                } while (level != 0);\n                res.push_back(braceExpansionII(item.substr(prev, i - prev + 1)));\n            }\n        }\n        return res;\n    }\n    void dfs(set<string> &s, vector<vector<string>> &res, int start, string cur) {\n        if (start == res.size()) {\n            s.insert(cur);\n        } else {\n            for (int i = 0; i < res[start].size(); i++) {\n                dfs(s, res, start + 1, cur + res[start][i]);\n            }\n        }\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-07"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a60ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.7MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from sortedcontainers import SortedSet\nclass Solution:\n\n    def checkSingal(self, expression: str):\n        if expression[0] != '{' or expression[-1] != '}':\n            return False\n        level, i = 0, 0\n        while i < len(expression):\n            if expression[i] == '{':\n                level += 1\n            elif expression[i] == '}':\n                level -= 1\n            if i != len(expression) - 1 and level == 0:\n                return False\n            i += 1\n        return True\n\n    def split(self, expression: str):\n        items = []\n        level = prev = i = 0\n        while i < len(expression):\n            if expression[i] == '{':\n                level += 1\n            elif expression[i] == '}':\n                level -= 1\n            elif expression[i] == ',' and level == 0:\n                items.append(expression[prev:i])\n                prev = i + 1\n            i += 1\n        items.append(expression[prev:])\n        return items\n\n    def analysis(self, item: str):\n        res = []\n        i = 0\n        while i < len(item):\n            if item[i] != '{':\n                res.append([str(item[i])])\n            else:\n                prev, level = i, 0\n                while True:\n                    if item[i] == '{':\n                        level += 1\n                    elif item[i] == '}':\n                        level -= 1\n                    if level == 0:\n                        break\n                    else:\n                        i += 1\n                res.append(self.braceExpansionII(item[prev:i+1]))\n            i += 1\n        return res\n\n    def dfs(self, s: SortedSet, res: List[List[str]], start: int, cur: str):\n        if start == len(res):\n            s.add(cur)\n        else:\n            for i in range(len(res[start])):\n                self.dfs(s, res, start+1, cur+res[start][i])\n\n    def braceExpansionII(self, expression: str) -> List[str]:\n        s = SortedSet()\n        if self.checkSingal(expression):\n            expression = expression[1:-1]\n        items = self.split(expression)\n        if len(items) > 1:\n            for item in items:\n                for res in self.braceExpansionII(item):\n                    s.add(res)\n        else:\n            item = items[0]\n            res = self.analysis(item)\n            self.dfs(s, res, 0, '')\n        return list(s)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-07"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.3MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"use std::collections::BTreeSet;\nimpl Solution {\n    fn check_signal(expression: &Vec<char>) -> bool {\n        if *expression.first().unwrap() != '{' || *expression.last().unwrap() != '}' {\n            false\n        } else {\n            let mut level = 0;\n            for i in 0..expression.len() {\n                if expression[i] == '{' {\n                    level += 1\n                } else if expression[i] == '}' {\n                    level -= 1\n                }\n                if i != expression.len() - 1 && level == 0 {\n                    return false;\n                }\n            }\n            true\n        }\n    }\n    fn split(expression: &Vec<char>) -> Vec<Vec<char>> {\n        let mut items: Vec<Vec<char>> = vec![];\n        let mut level = 0;\n        let mut prev = 0;\n        let mut i = 0;\n        while i < expression.len() {\n            if expression[i] == '{' {\n                level += 1;\n            } else if expression[i] == '}' {\n                level -= 1;\n            } else if expression[i] == ',' && level == 0 {\n                items.push(\n                    expression[prev..i]\n                        .iter()\n                        .map(|v| *v)\n                        .collect::<Vec<char>>(),\n                );\n                prev = i + 1;\n            }\n            i += 1;\n        }\n        items.push(expression[prev..].iter().map(|v| *v).collect::<Vec<char>>());\n        items\n    }\n    fn analysis(item: &Vec<char>) -> Vec<Vec<Vec<char>>> {\n        let mut res = vec![];\n        let mut i = 0;\n        while i < item.len() {\n            if item[i] != '{' {\n                res.push(vec![vec![item[i]]])\n            } else {\n                let prev = i;\n                let mut level = 0;\n                loop {\n                    if item[i] == '{' {\n                        level += 1;\n                    } else if item[i] == '}' {\n                        level -= 1;\n                    }\n                    if level == 0 {\n                        break;\n                    } else {\n                        i += 1;\n                    }\n                }\n                res.push(Solution::_brace_expansion_ii(\n                    item[prev..i + 1].iter().map(|v| *v).collect::<Vec<char>>(),\n                ))\n            }\n            i += 1;\n        }\n        res\n    }\n    fn dfs(s: &mut BTreeSet<Vec<char>>, res: &Vec<Vec<Vec<char>>>, start: usize, cur: Vec<char>) {\n        if start == res.len() {\n            s.insert(cur);\n        } else {\n            for item in res[start].iter() {\n                let mut next = cur.clone();\n                let mut other = item.clone();\n                next.append(&mut other);\n                Solution::dfs(s, res, start + 1, next);\n            }\n        }\n    }\n    pub fn brace_expansion_ii(expression: String) -> Vec<String> {\n        let expression = expression.chars().collect::<Vec<char>>();\n        Solution::_brace_expansion_ii(expression)\n            .into_iter()\n            .map(|v| {\n                String::from_utf8(v.into_iter().map(|v| v as u8).collect::<Vec<u8>>()).unwrap()\n            })\n            .collect()\n    }\n    fn _brace_expansion_ii(expression: Vec<char>) -> Vec<Vec<char>> {\n        let mut expression = expression;\n        if Solution::check_signal(&expression) {\n            expression.remove(expression.len() - 1);\n            expression.remove(0);\n        }\n        let mut s = BTreeSet::<Vec<char>>::new();\n        let items = Solution::split(&expression);\n        if items.len() > 1 {\n            for item in items {\n                for res in Solution::_brace_expansion_ii(item) {\n                    s.insert(res);\n                }\n            }\n        } else {\n            let res = Solution::analysis(&items[0]);\n            Solution::dfs(&mut s, &res, 0, vec![]);\n        }\n        s.into_iter().collect::<Vec<Vec<char>>>()\n    }\n}\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var i=s(30758);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);