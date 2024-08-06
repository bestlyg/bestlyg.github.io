"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[49913],{58573:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var t=i(86070),s=i(25710);const r={},l="1813.\u53e5\u5b50\u76f8\u4f3c\u6027III",c={id:"leetcode/1801-1900/\u53e5\u5b50\u76f8\u4f3c\u6027III",title:"1813.\u53e5\u5b50\u76f8\u4f3c\u6027III",description:"\u94fe\u63a5\uff1a1813.\u53e5\u5b50\u76f8\u4f3c\u6027III",source:"@site/docs/leetcode/1801-1900/1813.\u53e5\u5b50\u76f8\u4f3c\u6027III.md",sourceDirName:"leetcode/1801-1900",slug:"/leetcode/1801-1900/\u53e5\u5b50\u76f8\u4f3c\u6027III",permalink:"/docs/leetcode/1801-1900/\u53e5\u5b50\u76f8\u4f3c\u6027III",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1813,frontMatter:{},sidebar:"journal",previous:{title:"1812.\u5224\u65ad\u56fd\u9645\u8c61\u68cb\u68cb\u76d8\u4e2d\u4e00\u4e2a\u683c\u5b50\u7684\u989c\u8272",permalink:"/docs/leetcode/1801-1900/\u5224\u65ad\u56fd\u9645\u8c61\u68cb\u68cb\u76d8\u4e2d\u4e00\u4e2a\u683c\u5b50\u7684\u989c\u8272"},next:{title:"1814.\u7edf\u8ba1\u4e00\u4e2a\u6570\u7ec4\u4e2d\u597d\u5bf9\u5b50\u7684\u6570\u76ee",permalink:"/docs/leetcode/1801-1900/\u7edf\u8ba1\u4e00\u4e2a\u6570\u7ec4\u4e2d\u597d\u5bf9\u5b50\u7684\u6570\u76ee"}},o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"1813\u53e5\u5b50\u76f8\u4f3c\u6027iii",children:"1813.\u53e5\u5b50\u76f8\u4f3c\u6027III"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/sentence-similarity-iii",children:"1813.\u53e5\u5b50\u76f8\u4f3c\u6027III"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a\u53e5\u5b50\xa0sentence1 \u548c\xa0sentence2\xa0\uff0c\u5982\u679c\xa0sentence1 \u548c\xa0sentence2 \u662f\u76f8\u4f3c\u7684\uff0c\u8bf7\u4f60\u8fd4\u56de\xa0true\xa0\uff0c\u5426\u5219\u8fd4\u56de\xa0false\xa0\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-16"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.4MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool areSentencesSimilar(string sentence1, string sentence2) {\n        vector<string> l1 = split(sentence1), l2 = split(sentence2);\n        return compare(l1, l2, 0, 0, false);\n    }\n    bool compare(vector<string> &l1, vector<string> &l2, int i1, int i2, bool inserted) {\n        if (i1 == l1.size() && i2 == l2.size()) return true;\n        if (i2 == l2.size() || i1 == l1.size()) return !inserted;\n        if (l1[i1] == l2[i2]) return compare(l1, l2, i1 + 1, i2 + 1, inserted);\n        if (inserted) return false;\n        int next = i1;\n        while ((next = indexof(l1, next + 1, l2[i2])) != -1)\n            if (compare(l1, l2, next, i2, true)) return true;\n        next = i2;\n        while ((next = indexof(l2, next + 1, l1[i1])) != -1)\n            if (compare(l1, l2, i1, next, true)) return true;\n        return false;\n    }\n    int indexof(vector<string> &l, int start, string &s) {\n        for (int i = start; i < l.size(); i++)\n            if (l[i] == s) return i;\n        return -1;\n    }\n    vector<string> split(string &s) {\n        vector<string> ans;\n        for (int i = 0; i < s.size(); i++) {\n            if (s[i] == ' ') continue;\n            string cur = \"\";\n            while (i < s.size() && s[i] != ' ') cur += s[i++];\n            ans.push_back(cur);\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-16"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'impl Solution {\n    pub fn are_sentences_similar(sentence1: String, sentence2: String) -> bool {\n        let l1 = sentence1.split(" ").collect::<Vec<&str>>();\n        let l2 = sentence2.split(" ").collect::<Vec<&str>>();\n        Solution::compare(&l1, &l2, 0, 0, false)\n    }\n    fn compare(l1: &Vec<&str>, l2: &Vec<&str>, i1: usize, i2: usize, inserted: bool) -> bool {\n        if i1 == l1.len() && i2 == l2.len() {\n            true\n        } else if i1 == l1.len() || i2 == l2.len() {\n            !inserted\n        } else if l1[i1].cmp(l2[i2]).is_eq() {\n            Solution::compare(l1, l2, i1 + 1, i2 + 1, inserted)\n        } else if inserted {\n            false\n        } else {\n            let mut next = i1;\n            loop {\n                let res = Solution::indexof(l1, next + 1, l2[i2]);\n                if res == -1 {\n                    break;\n                }\n                let res = res as usize;\n                if Solution::compare(l1, l2, res, i2, true) {\n                    return true;\n                }\n                next = res;\n            }\n            let mut next = i2;\n            loop {\n                let res = Solution::indexof(l2, next + 1, l1[i1]);\n                if res == -1 {\n                    break;\n                }\n                let res = res as usize;\n                if Solution::compare(l1, l2, i1, res, true) {\n                    return true;\n                }\n                next = res;\n            }\n            false\n        }\n    }\n    fn indexof(l: &Vec<&str>, start: usize, s: &str) -> i32 {\n        let mut i = start;\n        while i < l.len() {\n            if l[i].cmp(s).is_eq() {\n                return i as i32;\n            }\n            i += 1;\n        }\n        return -1;\n    }\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},25710:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(30758);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);