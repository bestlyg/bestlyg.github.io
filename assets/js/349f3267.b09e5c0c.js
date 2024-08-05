"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[40541],{57127:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(86070),r=i(25710);const s={},l="2258.\u9003\u79bb\u706b\u707e",o={id:"leetcode/2201-2300/\u9003\u79bb\u706b\u707e",title:"2258.\u9003\u79bb\u706b\u707e",description:"\u94fe\u63a5\uff1a2258.\u9003\u79bb\u706b\u707e",source:"@site/docs/leetcode/2201-2300/2258.\u9003\u79bb\u706b\u707e.md",sourceDirName:"leetcode/2201-2300",slug:"/leetcode/2201-2300/\u9003\u79bb\u706b\u707e",permalink:"/web/site/docs/leetcode/2201-2300/\u9003\u79bb\u706b\u707e",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2258,frontMatter:{},sidebar:"journal",previous:{title:"2251.\u82b1\u671f\u5185\u82b1\u7684\u6570\u76ee",permalink:"/web/site/docs/leetcode/2201-2300/\u82b1\u671f\u5185\u82b1\u7684\u6570\u76ee"},next:{title:"2276.\u7edf\u8ba1\u533a\u95f4\u4e2d\u7684\u6574\u6570\u6570\u76ee",permalink:"/web/site/docs/leetcode/2201-2300/\u7edf\u8ba1\u533a\u95f4\u4e2d\u7684\u6574\u6570\u6570\u76ee"}},d={},c=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"2258\u9003\u79bb\u706b\u707e",children:"2258.\u9003\u79bb\u706b\u707e"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/escape-the-spreading-fire",children:"2258.\u9003\u79bb\u706b\u707e"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u77e9\u9635",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4f60\u5728\u521d\u59cb\u4f4d\u7f6e\u53ef\u4ee5\u505c\u7559\u7684 \u6700\u591a \u5206\u949f\u6570\uff0c\u4e14\u505c\u7559\u5b8c\u8fd9\u6bb5\u65f6\u95f4\u540e\u4f60\u8fd8\u80fd\u5b89\u5168\u5230\u8fbe\u5b89\u5168\u5c4b\u3002\u5982\u679c\u65e0\u6cd5\u5b9e\u73b0\uff0c\u8bf7\u4f60\u8fd4\u56de -1 \u3002\u5982\u679c\u4e0d\u7ba1\u4f60\u5728\u521d\u59cb\u4f4d\u7f6e\u505c\u7559\u591a\u4e45\uff0c\u4f60 \u603b\u662f \u80fd\u5230\u8fbe\u5b89\u5168\u5c4b\uff0c\u8bf7\u4f60\u8fd4\u56de 109 \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-11-09"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a840ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.25MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs\u8bb0\u5f55\u706b\u8513\u5ef6\u7684\u65f6\u95f4\u70b9\uff0c\u901a\u8fc7\u4e8c\u5206\u83b7\u53d6\u6700\u5927\u53ef\u80fd\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]\n\nclass Solution:\n    def maximumMinutes(self, grid: List[List[int]]) -> int:\n        n = len(grid)\n        m = len(grid[0])\n        times = [[inf] * m for _ in range(n)]\n        checks = [[False] * m for _ in range(n)]\n        q = deque()\n        for i in range(n):\n            for j in range(m):\n                if grid[i][j] == 1:\n                    q.append((i, j))\n                    times[i][j] = 0\n        \n        size = len(q)\n        time = 1\n        while q:\n            i, j = q.popleft()\n            for dir in dirs:\n                nexti = i + dir[0]\n                nextj = j + dir[1]\n                if 0 <= nexti < n and 0 <= nextj < m and grid[nexti][nextj] != 2 and times[nexti][nextj] == inf:\n                    q.append((nexti, nextj))\n                    times[nexti][nextj] = time\n            size -= 1\n            if size == 0:\n                size = len(q)\n                time += 1\n\n        def check(time: int) -> bool:\n            for i in range(n):\n                for j in range(m):\n                    checks[i][j] = False\n            q.clear()\n            time += 1\n            q.append((0, 0))\n            size = 1\n            while q:\n                i, j = q.popleft()\n                for dir in dirs:\n                    nexti = i + dir[0]\n                    nextj = j + dir[1]\n                    if 0 <= nexti < n and 0 <= nextj < m and grid[nexti][nextj] == 0:\n                        if nexti == n - 1 and nextj == m - 1 and times[nexti][nextj] >= time:\n                            return True\n                        if times[nexti][nextj] > time and (not checks[nexti][nextj]):\n                            checks[nexti][nextj] = True\n                            q.append((nexti, nextj))\n                size -= 1\n                if size == 0:\n                    size = len(q)\n                    time += 1\n            return False\n\n        l = -1\n        r = 10 ** 9\n        while l < r:\n            mid = (l + r + 1) // 2\n            if check(mid): l = mid\n            else: r = mid - 1\n\n        return l\n"})})]})}function x(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>o});var t=i(30758);const r={},s=t.createContext(r);function l(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);