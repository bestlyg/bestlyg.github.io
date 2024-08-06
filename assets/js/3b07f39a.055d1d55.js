"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[90516],{82630:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=s(86070),t=s(25710);const i={},l="831.\u9690\u85cf\u4e2a\u4eba\u4fe1\u606f",o={id:"leetcode/801-900/\u9690\u85cf\u4e2a\u4eba\u4fe1\u606f",title:"831.\u9690\u85cf\u4e2a\u4eba\u4fe1\u606f",description:"\u94fe\u63a5\uff1a831.\u9690\u85cf\u4e2a\u4eba\u4fe1\u606f",source:"@site/docs/leetcode/801-900/831.\u9690\u85cf\u4e2a\u4eba\u4fe1\u606f.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u9690\u85cf\u4e2a\u4eba\u4fe1\u606f",permalink:"/docs/leetcode/801-900/\u9690\u85cf\u4e2a\u4eba\u4fe1\u606f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:831,frontMatter:{},sidebar:"journal",previous:{title:"830.\u8f83\u5927\u5206\u7ec4\u7684\u4f4d\u7f6e",permalink:"/docs/leetcode/801-900/\u8f83\u5927\u5206\u7ec4\u7684\u4f4d\u7f6e"},next:{title:"832.\u7ffb\u8f6c\u56fe\u50cf",permalink:"/docs/leetcode/801-900/\u7ffb\u8f6c\u56fe\u50cf"}},c={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"831\u9690\u85cf\u4e2a\u4eba\u4fe1\u606f",children:"831.\u9690\u85cf\u4e2a\u4eba\u4fe1\u606f"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/masking-personal-information",children:"831.\u9690\u85cf\u4e2a\u4eba\u4fe1\u606f"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u6761\u4e2a\u4eba\u4fe1\u606f\u5b57\u7b26\u4e32 s \uff0c\u53ef\u80fd\u8868\u793a\u4e00\u4e2a \u90ae\u7bb1\u5730\u5740 \uff0c\u4e5f\u53ef\u80fd\u8868\u793a\u4e00\u4e32 \u7535\u8bdd\u53f7\u7801 \u3002\u8fd4\u56de\u6309\u5982\u4e0b\u89c4\u5219 \u9690\u85cf \u4e2a\u4eba\u4fe1\u606f\u540e\u7684\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-01"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    string maskPII(string s) {\n        if (isEmail(s)) return formatEmail(s);\n        return formatPhone(s);\n    }\n    bool isEmail(string &s) {\n        return s.find(\'@\') != string::npos;\n    }\n    string formatEmail(string &s) {\n        string res = "";\n        res += tolower(s[0]);\n        res += "*****";\n        int i = 0;\n        while (s[i + 1] != \'@\') i++;\n        while (i < s.size()) res += tolower(s[i++]);\n        return res;\n    }\n    string formatPhone(string &s) {\n        string formats = "", res = "";\n        for (auto &c : s) \n            if (isdigit(c)) formats += c;\n        switch(formats.size() - 10) {\n            case 1: res += "+*-"; break;\n            case 2: res += "+**-"; break;\n            case 3: res += "+***-"; break;\n        }\n        res += "***-***-" + formats.substr(formats.size() - 4, 4);\n        return res;\n    }\n};\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-01"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'class Solution:\n    def maskPII(self, s: str) -> str:\n        def isEmail(s: str):\n            return s.find(\'@\') != -1\n\n        def formatEmail(s: str):\n            res = ""\n            res += s[0].lower() + \'*****\'\n            i = 0\n            while s[i+1] != \'@\':\n                i += 1\n            while i < len(s):\n                res += s[i].lower()\n                i += 1\n            return res\n\n        def formatPhone(s: str):\n            formats, res = "", ""\n            for c in s:\n                if c.isdigit():\n                    formats += c\n            pre = len(formats) - 10\n            if pre == 1:\n                res += "+*-"\n            elif pre == 2:\n                res += "+**-"\n            elif pre == 3:\n                res += "+***-"\n            res += "***-***-" + formats[-4:]\n            return res\n\n        return formatEmail(s) if isEmail(s) else formatPhone(s)\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-01"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.3MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'impl Solution {\n    pub fn mask_pii(s: String) -> String {\n        let s = s.chars().collect::<Vec<char>>();\n        fn format_email(s: &Vec<char>) -> String {\n            let mut res = String::new();\n            res.push_str(&s[0].to_lowercase().to_string());\n            res.push_str("*****");\n            let mut i = 0;\n            while s[i + 1] != \'@\' {\n                i += 1;\n            }\n            while i < s.len() {\n                res.push_str(&s[i].to_lowercase().to_string());\n                i += 1;\n            }\n            res\n        }\n\n        fn format_phone(s: &Vec<char>) -> String {\n            let mut formats = vec![];\n            for c in s {\n                if c.is_numeric() {\n                    formats.push(*c);\n                }\n            }\n            let mut res = String::new();\n            match formats.len() - 10 {\n                1 => res.push_str("+*-"),\n                2 => res.push_str("+**-"),\n                3 => res.push_str("+***-"),\n                _ => {}\n            }\n            res.push_str("***-***-");\n            res.push_str(\n                &String::from_utf8(\n                    formats[formats.len() - 4..]\n                        .iter()\n                        .map(|v| *v as u8)\n                        .collect::<Vec<u8>>(),\n                )\n                .unwrap(),\n            );\n            res\n        }\n        if s.contains(&\'@\') {\n            format_email(&s)\n        } else {\n            format_phone(&s)\n        }\n    }\n}\n'})})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>o});var r=s(30758);const t={},i=r.createContext(t);function l(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);