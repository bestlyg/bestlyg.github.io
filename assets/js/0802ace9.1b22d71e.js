"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[54467],{27275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"leetcode/2401-2500/\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570","title":"2409.\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570","description":"\u94fe\u63a5\uff1a2409.\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570","source":"@site/docs/leetcode/2401-2500/2409.\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570.md","sourceDirName":"leetcode/2401-2500","slug":"/leetcode/2401-2500/\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570","permalink":"/docs/leetcode/2401-2500/\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2409,"frontMatter":{},"sidebar":"journal","previous":{"title":"2404.\u51fa\u73b0\u6700\u9891\u7e41\u7684\u5076\u6570\u5143\u7d20","permalink":"/docs/leetcode/2401-2500/\u51fa\u73b0\u6700\u9891\u7e41\u7684\u5076\u6570\u5143\u7d20"},"next":{"title":"2413.\u6700\u5c0f\u5076\u500d\u6570","permalink":"/docs/leetcode/2401-2500/\u6700\u5c0f\u5076\u500d\u6570"}}');var r=t(25105),i=t(8556);const a={},l="2409.\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570",c={},o=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"2409\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570",children:"2409.\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/count-days-spent-together",children:"2409.\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de Alice\u548c Bob \u540c\u65f6\u5728\u7f57\u9a6c\u7684\u5929\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-17"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n    def comp(time: str) -> Tuple[int, int]:\n        return (\n            (ord(time[0]) - ord('0')) * 10 + (ord(time[1]) - ord('0')),\n            (ord(time[3]) - ord('0')) * 10 + (ord(time[4]) - ord('0')),\n        )\n    class Solution:\n        def countDaysTogether(self, arriveAlice: str, leaveAlice: str, arriveBob: str, leaveBob: str) -> int:\n            aS, aL, bS, bL = comp(arriveAlice), comp(\n                leaveAlice), comp(arriveBob), comp(leaveBob)\n            if aS[0] > bS[0] or aS[0] == bS[0] and aS[1] > bS[1]:\n                temp = aS\n                aS = bS\n                bS = temp\n                temp = aL\n                aL = bL\n                bL = temp\n            if aL[0] < bS[0] or aL[0] == bS[0] and aL[1] < bS[1]:\n                return 0\n            start = bS\n            end = bL if bL[0] < aL[0] or bL[0] == aL[0] and bL[1] < aL[1] else aL\n            if start[0] == end[0]:\n                return end[1] - start[1] + 1\n            res = days[start[0]] - start[1] + 1 + end[1]\n            for i in range(start[0] + 1, end[0]):\n                res += days[i]\n            return res\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-17"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7edf\u8ba1\u533a\u95f4\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#define X first\n#define Y second\nclass Solution {\npublic:\n    typedef pair<int, int> pii;\n    int days[13] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};\n    int countDaysTogether(string arriveAlice, string leaveAlice, string arriveBob, string leaveBob) {\n        pii as = comp(arriveAlice), al = comp(leaveAlice), bs = comp(arriveBob), bl = comp(leaveBob);\n        if (as.X > bs.X || as.X == bs.X && as.Y > bs.Y) swap(as, bs), swap(al, bl);\n        if (al.X < bs.X || al.X == bs.X && al.Y < bs.Y) return 0;\n        pii start = bs, end = bl.X < al.X || bl.X == al.X && bl.Y < al.Y ? bl : al;\n        if (start.X == end.X) return end.Y - start.Y + 1;\n        int res = days[start.X] - start.Y + 1 + end.Y;\n        for (int i = start.X + 1; i < end.X; i++) res += days[i];\n        return res;\n    }\n    pii comp(string &time) {\n        return make_pair((time[0] - '0') * 10 + (time[1] - '0'), (time[3] - '0') * 10 + (time[4] - '0'));\n    }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-17"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"fn str_to_vec(s: &String) -> Vec<char> {\n    s.chars().collect()\n}\nimpl Solution {\n    pub fn count_days_together(\n        arrive_alice: String,\n        leave_alice: String,\n        arrive_bob: String,\n        leave_bob: String,\n    ) -> i32 {\n        use std::mem::swap;\n        let days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\n        let comp = |time: Vec<char>| -> (i32, i32) {\n            (\n                (time[0] as i32 - '0' as i32) * 10 + time[1] as i32 - '0' as i32,\n                (time[3] as i32 - '0' as i32) * 10 + time[4] as i32 - '0' as i32,\n            )\n        };\n        let (mut a_s, mut a_l, mut b_s, mut b_l) = (\n            comp(str_to_vec(&arrive_alice)),\n            comp(str_to_vec(&leave_alice)),\n            comp(str_to_vec(&arrive_bob)),\n            comp(str_to_vec(&leave_bob)),\n        );\n        if a_s.0 > b_s.0 || a_s.0 == b_s.0 && a_s.1 > b_s.1 {\n            swap(&mut a_s, &mut b_s);\n            swap(&mut a_l, &mut b_l);\n        }\n        if a_l.0 < b_s.0 || a_l.0 == b_s.0 && a_l.1 < b_s.1 {\n            0\n        } else {\n            let start = b_s;\n            let end = if b_l.0 < a_l.0 || b_l.0 == a_l.0 && b_l.1 < a_l.1 {\n                b_l\n            } else {\n                a_l\n            };\n            if start.0 == end.0 {\n                end.1 - start.1 + 1\n            } else {\n                let mut res = days[start.0 as usize] - start.1 + 1 + end.1;\n                for i in start.0 + 1..end.0 {\n                    res += days[i as usize];\n                }\n                res\n            }\n        }\n    }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(58101);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);