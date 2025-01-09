"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[4466],{56967:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"leetcode/201-300/\u5355\u8bcd\u641c\u7d22II","title":"212.\u5355\u8bcd\u641c\u7d22II","description":"\u94fe\u63a5\uff1a212.\u5355\u8bcd\u641c\u7d22II","source":"@site/docs/leetcode/201-300/212.\u5355\u8bcd\u641c\u7d22II.md","sourceDirName":"leetcode/201-300","slug":"/leetcode/201-300/\u5355\u8bcd\u641c\u7d22II","permalink":"/docs/leetcode/201-300/\u5355\u8bcd\u641c\u7d22II","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":212,"frontMatter":{},"sidebar":"journal","previous":{"title":"211.\u6dfb\u52a0\u4e0e\u641c\u7d22\u5355\u8bcd-\u6570\u636e\u7ed3\u6784\u8bbe\u8ba1","permalink":"/docs/leetcode/201-300/\u6dfb\u52a0\u4e0e\u641c\u7d22\u5355\u8bcd-\u6570\u636e\u7ed3\u6784\u8bbe\u8ba1"},"next":{"title":"213.\u6253\u5bb6\u52ab\u820dII","permalink":"/docs/leetcode/201-300/\u6253\u5bb6\u52ab\u820dII"}}');var s=t(25105),o=t(8556);const i={},d="212.\u5355\u8bcd\u641c\u7d22II",c={},l=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"212\u5355\u8bcd\u641c\u7d22ii",children:"212.\u5355\u8bcd\u641c\u7d22II"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/word-search-ii",children:"212.\u5355\u8bcd\u641c\u7d22II"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u5178\u6811\u3001\u6570\u7ec4\u3001\u5b57\u7b26\u4e32\u3001\u56de\u6eaf\u3001\u77e9\u9635",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a m x n \u4e8c\u7ef4\u5b57\u7b26\u7f51\u683c board \u548c\u4e00\u4e2a\u5355\u8bcd\uff08\u5b57\u7b26\u4e32\uff09\u5217\u8868 words\uff0c\u627e\u51fa\u6240\u6709\u540c\u65f6\u5728\u4e8c\u7ef4\u7f51\u683c\u548c\u5b57\u5178\u4e2d\u51fa\u73b0\u7684\u5355\u8bcd\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-16"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4092ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5b57\u5178\u6811\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"interface ITrie {\n        size: number;\n        empty: boolean;\n        add: (str: string) => void;\n        remove: (str: string) => void;\n        clear: () => void;\n        contains: (str: string) => boolean;\n        starsWith: (str: string) => boolean;\n      }\n      class TrieNode {\n        end = false;\n        children: Map<string, TrieNode> = new Map();\n        constructor(public val: string) {}\n      }\n      class Trie implements ITrie {\n        private _size = 0;\n        get size() {\n          return this._size;\n        }\n        get empty() {\n          return this._size === 0;\n        }\n        private root = new TrieNode('');\n        clear() {\n          this.root = new TrieNode('');\n          this._size = 0;\n        }\n        add(str: string) {\n          return this._add(str);\n        }\n        private _add(str: string, node = this.root) {\n          if (str.length === 0) {\n            this.root.end = true;\n            this._size++;\n            return;\n          }\n          if (str.length === 1) {\n            let endNode = node.children.get(str);\n            if (!endNode) node.children.set(str, (endNode = new TrieNode(str)));\n            if (!endNode.end) {\n              endNode.end = true;\n              this._size++;\n            }\n            return;\n          }\n          const first = str[0];\n          let nextNode = node.children.get(first);\n          if (!nextNode) node.children.set(first, (nextNode = new TrieNode(first)));\n          const nextStr = str.substr(1);\n          this._add(nextStr, nextNode);\n        }\n        contains(str: string) {\n          const endNode = this.findEndNode(str);\n          return endNode ? endNode.end : false;\n        }\n        remove(str: string) {\n          const endNode = this.findEndNode(str);\n          if (endNode && endNode.end) {\n            endNode.end = false;\n            this._size--;\n          }\n        }\n        starsWith(str: string) {\n          return this.findEndNode(str) !== null;\n        }\n        private findEndNode(str: string, node = this.root): TrieNode | null {\n          if (str.length === 0) return this.root;\n          if (str.length === 1) return node.children.get(str) ?? null;\n          const first = str[0];\n          let nextNode = node.children.get(first);\n          if (!nextNode) return null;\n          const nextStr = str.substr(1);\n          return this.findEndNode(nextStr, nextNode);\n        }\n      }\n      function findWords(board: string[][], words: string[]): string[] {\n        const trie = new Trie();\n        let maxWordLen = 0;\n        words.forEach(word => {\n          trie.add(word);\n          maxWordLen = Math.max(maxWordLen, word.length);\n        });\n        const rowLen = board.length;\n        const colLen = board[0].length;\n        const ans = new Set<string>();\n        const format = (row: number, col: number) => `${row}::${col}`;\n        const set = new Set<string>();\n        const starts: [number, number][] = [];\n        for (let row = 0; row < rowLen; row++) {\n          for (let col = 0; col < colLen; col++) {\n            if (trie.starsWith(board[row][col])) starts.push([row, col]);\n          }\n        }\n        starts.forEach(v => find(...v));\n        return Array.from(ans);\n        function find(row: number, col: number, str: string = ''): void {\n          const formatStr = format(row, col);\n          if (\n            set.has(formatStr) ||\n            str.length > maxWordLen ||\n            ans.size === words.length ||\n            row === -1 ||\n            row === rowLen ||\n            col === -1 ||\n            col === colLen\n          )\n            return;\n          str += board[row][col];\n          if (trie.contains(str)) ans.add(str);\n          set.add(formatStr);\n          find(row, col - 1, str);\n          find(row, col + 1, str);\n          find(row - 1, col, str);\n          find(row + 1, col, str);\n          set.delete(formatStr);\n        }\n      }\n"})})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8556:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>d});var r=t(58101);const s={},o=r.createContext(s);function i(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);