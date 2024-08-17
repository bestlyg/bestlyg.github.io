"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[28393],{41939:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var o=i(86070),s=i(25710);const t={},d="592.\u5206\u6570\u52a0\u51cf\u8fd0\u7b97",r={id:"leetcode/501-600/\u5206\u6570\u52a0\u51cf\u8fd0\u7b97",title:"592.\u5206\u6570\u52a0\u51cf\u8fd0\u7b97",description:"\u94fe\u63a5\uff1a592.\u5206\u6570\u52a0\u51cf\u8fd0\u7b97",source:"@site/docs/leetcode/501-600/592.\u5206\u6570\u52a0\u51cf\u8fd0\u7b97.md",sourceDirName:"leetcode/501-600",slug:"/leetcode/501-600/\u5206\u6570\u52a0\u51cf\u8fd0\u7b97",permalink:"/docs/leetcode/501-600/\u5206\u6570\u52a0\u51cf\u8fd0\u7b97",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:592,frontMatter:{},sidebar:"journal",previous:{title:"591.\u6807\u7b7e\u9a8c\u8bc1\u5668",permalink:"/docs/leetcode/501-600/\u6807\u7b7e\u9a8c\u8bc1\u5668"},next:{title:"593.\u6709\u6548\u7684\u6b63\u65b9\u5f62",permalink:"/docs/leetcode/501-600/\u6709\u6548\u7684\u6b63\u65b9\u5f62"}},c={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2}];function f(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"592\u5206\u6570\u52a0\u51cf\u8fd0\u7b97",children:"592.\u5206\u6570\u52a0\u51cf\u8fd0\u7b97"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(e.a,{href:"https://leetcode.cn/problems/fraction-addition-and-subtraction",children:"592.\u5206\u6570\u52a0\u51cf\u8fd0\u7b97"}),(0,o.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,o.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u5b57\u7b26\u4e32\u3001\u6a21\u62df",(0,o.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u8868\u793a\u5206\u6570\u52a0\u51cf\u8fd0\u7b97\u7684\u5b57\u7b26\u4e32 expression \uff0c\u4f60\u9700\u8981\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\u5f62\u5f0f\u7684\u8ba1\u7b97\u7ed3\u679c\u3002 \u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-07-27"}),"\n",(0,o.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,o.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,o.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,o.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u89e3\u6790\u5b57\u7b26\u4e32\u540e\u901a\u5206\u7ea6\u5206\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    typedef pair<int, int> node;\n    string fractionAddition(string expression) {\n        char op = '+';\n        node ans = make_pair(0, 1);\n        for (int i = 0; i < expression.size(); i++) {\n            int end = i;\n            string tmp = \"\";\n            while (end < expression.size() && !is_op(expression, end))\n                tmp += expression[end++];\n            i = end;\n            op_node(ans, to_node(tmp), op);\n            op = expression[i];\n        }\n        return to_string(ans.first) + \"/\" + to_string(ans.second);\n    }\n    bool is_op(string &expression, int idx) {\n        if (idx == 0 || idx == expression.size() - 1) return false;\n        if (expression[idx] != '+' && expression[idx] != '-') return false;\n        if (!isdigit(expression[idx - 1])) return false;\n        return true;\n    }\n    node to_node(string &str) {\n        node ans = make_pair(0, 0);\n        int i = 0, f = 1;\n        if (str[0] == '-') f = -1;\n        if (str[0] == '+' || str[0] == '-') i++;\n        while (str[i] != '/') ans.first = ans.first * 10 + str[i++] - '0';\n        i++;\n        while (i < str.size()) ans.second = ans.second * 10 + str[i++] - '0';\n        ans.first *= f;\n        return ans;\n    }\n    void op_node(node &node1, node node2, char op) {\n        format1(node1, node2);\n        if (op == '+')\n            node1.first += node2.first;\n        else\n            node1.first -= node2.first;\n        format2(node1);\n    }\n    int gcd(int a, int b) {\n        if (b == 0) return a;\n        return gcd(b, a % b);\n    }\n    int lcm(int a, int b) { return a * b / gcd(a, b); }\n    void format1(node &node1, node &node2) {\n        if (node1.second != node2.second) {\n            int num_lcm = lcm(node1.second, node2.second);\n            node1.first *= num_lcm / node1.second;\n            node2.first *= num_lcm / node2.second;\n            node1.second = node2.second = num_lcm;\n        }\n    }\n    void format2(node &node) {\n        int f = 1;\n        if (node.first < 0) {\n            f = -1;\n            node.first *= f;\n        }\n        int num_gcd = gcd(node.first, node.second);\n        if (num_gcd != 1) {\n            node.first /= num_gcd;\n            node.second /= num_gcd;\n        }\n        node.first *= f;\n    }\n};\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-07-27"}),"\n",(0,o.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,o.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2MB"}),"\n",(0,o.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,o.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn fraction_addition(expression: String) -> String {\n        let expression: Vec<char> = expression.chars().collect();\n        let mut op = '+';\n        let mut ans = Node::new(0, 1);\n        let mut i = 0;\n        while i < expression.len() {\n            let mut end = i;\n            let mut tmp = String::new();\n            while end < expression.len() && !Solution::is_op(&expression, end) {\n                tmp.push(expression[end]);\n                end += 1;\n            }\n            i = end;\n            Solution::op_node(&mut ans, Solution::to_node(&tmp), op);\n            if i < expression.len() {\n                op = expression[i];\n            }\n            i += 1;\n        }\n        ans.to_string()\n    }\n    fn is_op(expression: &Vec<char>, idx: usize) -> bool {\n        if idx == 0 || idx == expression.len() - 1 {\n            false\n        } else if expression[idx] != '+' && expression[idx] != '-' {\n            false\n        } else if !expression[idx - 1].is_ascii_digit() {\n            false\n        } else {\n            true\n        }\n    }\n    fn to_node(string: &String) -> Node {\n        let string: Vec<char> = string.chars().collect();\n        let mut node = Node::new(0, 0);\n        let mut i = 0;\n        let mut f = 1;\n        if string[0] == '-' {\n            f = -1;\n        }\n        if string[0] == '+' || string[0] == '-' {\n            i += 1;\n        }\n        while string[i] != '/' {\n            node.first = node.first * 10 + (string[i] as i32 - '0' as i32);\n            i += 1;\n        }\n        i += 1;\n        while i < string.len() {\n            node.second = node.second * 10 + (string[i] as i32 - '0' as i32);\n            i += 1;\n        }\n        node.first *= f;\n        node\n    }\n    fn op_node(node1: &mut Node, node2: Node, op: char) {\n        let mut node2 = node2;\n        Solution::format1(node1, &mut node2);\n        if op == '+' {\n            node1.first += node2.first;\n        } else {\n            node1.first -= node2.first;\n        }\n        Solution::format2(node1);\n    }\n    fn format1(node1: &mut Node, node2: &mut Node) {\n        if node1.second != node2.second {\n            let lcm = Solution::lcm(node1.second, node2.second);\n            node1.first *= lcm / node1.second;\n            node2.first *= lcm / node2.second;\n            node1.second = lcm;\n            node2.second = lcm;\n        }\n    }\n    fn format2(node: &mut Node) {\n        let mut f = 1;\n        if node.first < 0 {\n            f = -1;\n            node.first *= f;\n        }\n        let gcd = Solution::gcd(node.first, node.second);\n        if gcd != 1 {\n            node.first /= gcd;\n            node.second /= gcd;\n        }\n        node.first *= f;\n    }\n    fn gcd(a: i32, b: i32) -> i32 {\n        if b == 0 {\n            a\n        } else {\n            Solution::gcd(b, a % b)\n        }\n    }\n    fn lcm(a: i32, b: i32) -> i32 {\n        a * b / Solution::gcd(a, b)\n    }\n}\n\nstruct Node {\n    first: i32,\n    second: i32,\n}\nimpl Node {\n    fn new(first: i32, second: i32) -> Self {\n        Self { first, second }\n    }\n    fn to_string(&self) -> String {\n        format!(\"{}/{}\", self.first, self.second)\n    }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(f,{...n})}):f(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>r});var o=i(30758);const s={},t=o.createContext(s);function d(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);