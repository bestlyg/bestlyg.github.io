"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[64126],{20450:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"leetcode/LCP/LCP41.\u9ed1\u767d\u7ffb\u8f6c\u68cb","title":"LCP41.\u9ed1\u767d\u7ffb\u8f6c\u68cb","description":"\u94fe\u63a5\uff1aLCP41.\u9ed1\u767d\u7ffb\u8f6c\u68cb","source":"@site/docs/leetcode/LCP/LCP41.\u9ed1\u767d\u7ffb\u8f6c\u68cb.md","sourceDirName":"leetcode/LCP","slug":"/leetcode/LCP/LCP41.\u9ed1\u767d\u7ffb\u8f6c\u68cb","permalink":"/docs/leetcode/LCP/LCP41.\u9ed1\u767d\u7ffb\u8f6c\u68cb","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"LCP40.\u5fc3\u7b97\u6311\u6218","permalink":"/docs/leetcode/LCP/LCP40.\u5fc3\u7b97\u6311\u6218"},"next":{"title":"LCP50.\u5b9d\u77f3\u8865\u7ed9","permalink":"/docs/leetcode/LCP/LCP50.\u5b9d\u77f3\u8865\u7ed9"}}');var r=i(25105),t=i(8556);const o={},d="LCP41.\u9ed1\u767d\u7ffb\u8f6c\u68cb",l={},c=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"lcp41\u9ed1\u767d\u7ffb\u8f6c\u68cb",children:"LCP41.\u9ed1\u767d\u7ffb\u8f6c\u68cb"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/fHi6rV",children:"LCP41.\u9ed1\u767d\u7ffb\u8f6c\u68cb"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u77e9\u9635",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a",'\u5728 n*m \u5927\u5c0f\u7684\u68cb\u76d8\u4e2d\uff0c\u6709\u9ed1\u767d\u4e24\u79cd\u68cb\u5b50\uff0c\u9ed1\u68cb\u8bb0\u4f5c\u5b57\u6bcd "X", \u767d\u68cb\u8bb0\u4f5c\u5b57\u6bcd "O"\uff0c\u7a7a\u4f59\u4f4d\u7f6e\u8bb0\u4f5c "."\u3002\u5f53\u843d\u4e0b\u7684\u68cb\u5b50\u4e0e\u5176\u4ed6\u76f8\u540c\u989c\u8272\u7684\u68cb\u5b50\u5728\u884c\u3001\u5217\u6216\u5bf9\u89d2\u7ebf\u5b8c\u5168\u5305\u56f4\uff08\u4e2d\u95f4\u4e0d\u5b58\u5728\u7a7a\u767d\u4f4d\u7f6e\uff09\u53e6\u4e00\u79cd\u989c\u8272\u7684\u68cb\u5b50\uff0c\u5219\u53ef\u4ee5\u7ffb\u8f6c\u8fd9\u4e9b\u68cb\u5b50\u7684\u989c\u8272\u3002\u82e5\u4e0b\u4e00\u6b65\u53ef\u653e\u7f6e\u4e00\u679a\u9ed1\u68cb\uff0c\u8bf7\u95ee\u9009\u624b\u6700\u591a\u80fd\u7ffb\u8f6c\u591a\u5c11\u679a\u767d\u68cb\u3002']}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-21"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.4MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u66b4\u529b\u679a\u4e3e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"#define X first\n#define Y second\n#define pii pair<int, int>\nclass Solution {\npublic:\n    vector<vector<int>> dirs2 = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}, {1, 1}, {1, -1}, {-1, 1}, {-1, -1}};\n    int flipChess(vector<string>& chessboard) {\n        int n = chessboard.size(), m = chessboard[0].size(), res = 0;\n        function<void(vector<string>&, int, int, int&)> dfs = [&](vector<string>& chessboard, int i, int j, int& sum) {\n            vector<pii> list;\n            for (auto &dir : dirs2) {\n                int ni = i + dir[0], nj = j + dir[1];\n                vector<pii> tmp;\n                while (ni >= 0 && ni < n && nj >= 0 && nj < m && chessboard[ni][nj] == 'O') {\n                    tmp.push_back(make_pair(ni, nj));\n                    ni += dir[0];\n                    nj += dir[1];\n                }\n                if (ni >= 0 && ni < n && nj >= 0 && nj < m && chessboard[ni][nj] == 'X') {\n                    for (auto &item : tmp) list.push_back(item);\n                }\n            }\n            sum += list.size();\n            for (auto &next : list) chessboard[next.X][next.Y] = 'X';\n            for (auto &next : list) dfs(chessboard, next.X, next.Y, sum);\n        };\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < m; j++) {\n                if (chessboard[i][j] == '.') {\n                    auto board = chessboard;\n                    board[i][j] = 'X';\n                    int sum = 0;\n                    dfs(board, i, j, sum);\n                    res = max(res, sum);\n                }\n            }\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-21"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"pub fn str_to_vec(s: &String) -> Vec<char> {\n    s.chars().collect()\n}\npub const dirs2: [[i32; 2]; 8] = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];\nfn dfs(board: &mut Vec<Vec<char>>, sum: &mut i32, i: usize, j: usize) {\n    let mut list = vec![];\n    for dir in dirs2 {\n        let mut ni = i as i32 + dir[0];\n        let mut nj = j as i32 + dir[1];\n        let mut tmp = vec![];\n        while ni >= 0\n            && ni < board.len() as i32\n            && nj >= 0\n            && nj < board[0].len() as i32\n            && board[ni as usize][nj as usize] == 'O'\n        {\n            tmp.push((ni, nj));\n            ni += dir[0];\n            nj += dir[1];\n        }\n        if ni >= 0\n            && ni < board.len() as i32\n            && nj >= 0\n            && nj < board[0].len() as i32\n            && board[ni as usize][nj as usize] == 'X'\n        {\n            for item in tmp {\n                list.push(item);\n            }\n        }\n    }\n    *sum += list.len() as i32;\n    for (i, j) in &list {\n        board[*i as usize][*j as usize] = 'X';\n    }\n    for (i, j) in &list {\n        dfs(board, sum, *i as usize, *j as usize);\n    }\n}\nimpl Solution {\n    pub fn flip_chess(chessboard: Vec<String>) -> i32 {\n        let chessboard = chessboard\n            .into_iter()\n            .map(|item| str_to_vec(&item))\n            .collect::<Vec<Vec<char>>>();\n        let n = chessboard.len();\n        let m = chessboard[0].len();\n        let mut res = 0;\n        for i in 0..n {\n            for j in 0..m {\n                if chessboard[i][j] == '.' {\n                    let mut board = chessboard.clone();\n                    board[i][j] = 'X';\n                    let mut sum = 0;\n                    dfs(&mut board, &mut sum, i, j);\n                    res = res.max(sum);\n                }\n            }\n        }\n        res\n    }\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-21"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"dirs2 = [(0, 1), (0, -1), (1, 0), (-1, 0), (1, 1), (1, -1), (-1, 1), (-1, -1)]\n    class Solution:\n        def flipChess(self, chessboard: List[str]) -> int:\n            n = len(chessboard)\n            m = len(chessboard[0])\n            sum = res = 0\n    \n            def dfs(board:List[List[str]],i:int,j:int):\n                nonlocal sum\n                list = []\n                for dir in dirs2:\n                    ni = i + dir[0]\n                    nj = j + dir[1]\n                    tmp = []\n                    while 0 <= ni < n and 0 <= nj < m and board[ni][nj] == 'O':\n                        tmp.append((ni,nj))\n                        ni += dir[0]\n                        nj += dir[1]\n                    if 0 <= ni < n and 0 <= nj < m and board[ni][nj] == 'X':\n                        for item in tmp:\n                            list.append(item)\n                sum += len(list)\n    \n                for i,j in list: board[i][j] = 'X'\n                for i,j in list: dfs(board,i,j)\n    \n            for i in range(n):\n                for j in range(m):\n                    if chessboard[i][j] == '.':\n                        board = []\n                        for item in chessboard:\n                            board.append(list(item))\n                        board[i][j] = 'X'\n                        sum = 0\n                        dfs(board, i, j)\n                        res = max(res, sum)\n            return res\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},8556:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>d});var s=i(58101);const r={},t=s.createContext(r);function o(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);