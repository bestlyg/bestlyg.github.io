"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[21103],{69255:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=t(86070),s=t(25710);const r={},l="2582.\u9012\u6795\u5934",c={id:"leetcode/2501-2600/\u9012\u6795\u5934",title:"2582.\u9012\u6795\u5934",description:"\u94fe\u63a5\uff1a2582.\u9012\u6795\u5934",source:"@site/docs/leetcode/2501-2600/2582.\u9012\u6795\u5934.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u9012\u6795\u5934",permalink:"/docs/leetcode/2501-2600/\u9012\u6795\u5934",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2582,frontMatter:{},sidebar:"journal",previous:{title:"2581.\u7edf\u8ba1\u53ef\u80fd\u7684\u6811\u6839\u6570\u76ee",permalink:"/docs/leetcode/2501-2600/\u7edf\u8ba1\u53ef\u80fd\u7684\u6811\u6839\u6570\u76ee"},next:{title:"2583.\u4e8c\u53c9\u6811\u4e2d\u7684\u7b2cK\u5927\u5c42\u548c",permalink:"/docs/leetcode/2501-2600/\u4e8c\u53c9\u6811\u4e2d\u7684\u7b2cK\u5927\u5c42\u548c"}},a={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"2582\u9012\u6795\u5934",children:"2582.\u9012\u6795\u5934"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/pass-the-pillow",children:"2582.\u9012\u6795\u5934"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u6a21\u62df",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fc7\u6ee4\u540e\u8fd4\u56de\u9910\u9986\u7684 id\uff0c\u6309\u7167 rating \u4ece\u9ad8\u5230\u4f4e\u6392\u5e8f\u3002\u5982\u679c rating \u76f8\u540c\uff0c\u90a3\u4e48\u6309 id \u4ece\u9ad8\u5230\u4f4e\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-27"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a26.94MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> filterRestaurants(vector<vector<int>>& restaurants, int veganFriendly, int maxPrice, int maxDistance) {\n        vector<pair<int, int>> list;\n        for (auto &item : restaurants) {\n            if (item[3] <= maxPrice && item[4] <= maxDistance and (!veganFriendly || item[2])) {\n                list.push_back(make_pair(item[0], item[1]));\n            }\n        }\n        sort(list.begin(), list.end(), [&](auto &a, auto &b) {\n            return a.second != b.second ? a.second < b.second : a.first < b.first;\n        });\n        reverse(list.begin(), list.end());\n        vector<int> res;\n        for (auto &item : list) res.push_back(item.first);\n        return res;\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-27"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a64ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a23.1MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def filterRestaurants(self, restaurants: List[List[int]], veganFriendly: int, maxPrice: int, maxDistance: int) -> List[int]:\n        restaurants = [item for item in restaurants if item[3] <=\n                        maxPrice and item[4] <= maxDistance and (not veganFriendly or item[2])]\n        restaurants.sort(key=lambda item: (item[1], item[0]), reverse=True)\n        return [item[0] for item in restaurants]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-27"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a3.11MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn filter_restaurants(\n        restaurants: Vec<Vec<i32>>,\n        vegan_friendly: i32,\n        max_price: i32,\n        max_distance: i32,\n    ) -> Vec<i32> {\n        let mut restaurants: Vec<Vec<i32>> = restaurants\n            .into_iter()\n            .filter(|item| {\n                item[3] <= max_price\n                    && item[4] <= max_distance\n                    && (vegan_friendly == 0 || item[2] == 1)\n            })\n            .collect();\n        restaurants.sort_by(|item1, item2| {\n            if item1[1] != item2[1] {\n                item2[1].cmp(&item1[1])\n            } else {\n                item2[0].cmp(&item1[0])\n            }\n        });\n        restaurants.into_iter().map(|item| item[0]).collect()\n    }\n}\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(30758);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);