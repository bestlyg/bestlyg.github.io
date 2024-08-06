"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[54551],{71453:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=t(86070),s=t(25710);const i={},c="1600.\u738b\u4f4d\u7ee7\u627f\u987a\u5e8f",l={id:"leetcode/1501-1600/\u738b\u4f4d\u7ee7\u627f\u987a\u5e8f",title:"1600.\u738b\u4f4d\u7ee7\u627f\u987a\u5e8f",description:"\u94fe\u63a5\uff1a1600.\u738b\u4f4d\u7ee7\u627f\u987a\u5e8f",source:"@site/docs/leetcode/1501-1600/1600.\u738b\u4f4d\u7ee7\u627f\u987a\u5e8f.md",sourceDirName:"leetcode/1501-1600",slug:"/leetcode/1501-1600/\u738b\u4f4d\u7ee7\u627f\u987a\u5e8f",permalink:"/docs/leetcode/1501-1600/\u738b\u4f4d\u7ee7\u627f\u987a\u5e8f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1600,frontMatter:{},sidebar:"journal",previous:{title:"1599.\u7ecf\u8425\u6469\u5929\u8f6e\u7684\u6700\u5927\u5229\u6da6",permalink:"/docs/leetcode/1501-1600/\u7ecf\u8425\u6469\u5929\u8f6e\u7684\u6700\u5927\u5229\u6da6"},next:{title:"1601.\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee",permalink:"/docs/leetcode/1601-1700/\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee"}},d={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"1600\u738b\u4f4d\u7ee7\u627f\u987a\u5e8f",children:"1600.\u738b\u4f4d\u7ee7\u627f\u987a\u5e8f"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/throne-inheritance",children:"1600.\u738b\u4f4d\u7ee7\u627f\u987a\u5e8f"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u8bbe\u8ba1\u3001\u54c8\u5e0c\u8868",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4e00\u4e2a\u738b\u56fd\u91cc\u4f4f\u7740\u56fd\u738b\u3001\u4ed6\u7684\u5b69\u5b50\u4eec\u3001\u4ed6\u7684\u5b59\u5b50\u4eec\u7b49\u7b49\u3002\u901a\u8fc7\u4ee5\u4e0a\u7684\u51fd\u6570\uff0c\u6211\u4eec\u603b\u662f\u80fd\u5f97\u5230\u4e00\u4e2a\u552f\u4e00\u7684\u7ee7\u627f\u987a\u5e8f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-06-20"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a188ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u5e8f\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class Person {\n  children: Person[] = [];\n  dead = false;\n  constructor(public name: string) {}\n}\nclass ThroneInheritance {\n  king = new Person('');\n  nameMap = new Map<string, Person>();\n  constructor(kingName: string) {\n    this.king.name = kingName;\n    this.nameMap.set(kingName, this.king);\n  }\n  birth(parentName: string, childName: string): void {\n    const parent = this.nameMap.get(parentName)!;\n    const child = new Person(childName);\n    this.nameMap.set(childName, child);\n    parent.children.push(child);\n  }\n  death(name: string): void {\n    this.nameMap.get(name)!.dead = true;\n  }\n  getInheritanceOrder(): string[] {\n    return this._getInheritanceOrder(this.king)\n      .filter(v => !v.dead)\n      .map(v => v.name);\n  }\n  private _getInheritanceOrder(person: Person): Person[] {\n    const ans: Person[] = [person];\n    person.children.forEach(child => {\n      ans.push(...this._getInheritanceOrder(child));\n    });\n    return ans;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-04-07"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a333ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a68.36MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u5e8f\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class ThroneInheritance:\n    def __init__(self, kingName: str):\n        self.kingName = kingName\n        self.children = defaultdict(list)\n        self.dead = set()\n    def birth(self, parentName: str, childName: str) -> None:\n        self.children[parentName].append(childName)\n    def death(self, name: str) -> None:\n        self.dead.add(name)\n    def successor(self, x: str, curOrder: List[str]) -> List[str]:\n        if x not in self.dead: curOrder.append(x)\n        for child in self.children[x]:\n            self.successor(child, curOrder)\n        return curOrder\n    def getInheritanceOrder(self) -> List[str]:\n        return self.successor(self.kingName, [])\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(30758);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);