"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[29474],{71524:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>R,contentTitle:()=>k,default:()=>E,frontMatter:()=>y,metadata:()=>A,toc:()=>N});var o=t(86070),s=t(25710),u=t(30758),r=t(71828),i=t(98534),a=t(46034),l=t(61430),c=t(62701),m=t(12896),p=t(50712),d=t(77268),h=t(31183),f=t(47054),v=t(37166),g=t(10390),$=function(n){return n[n.Op=0]="Op",n[n.Num=1]="Num",n}($||{});class _{left=null;right=null;constructor(n){this.value=n,"number"==typeof n&&(this.type=$.Num),"string"==typeof n&&(this.type=$.Op)}toString(){return!this.left&&!this.right||this.type===$.Num?`${this.value}`:`(${this.left.toString()}) ${this.value} (${this.right.toString()})`}compute(){return this.type===$.Num?this.value:(0,v.MQ)(this.left.compute(),this.right.compute(),this.value)}}function C(n,e){if(1===n.length)return[new _(n[0])];const t=[];for(let o=0;o<e.length;o++){const s=C(n.slice(0,o+1),e.slice(0,o)),u=C(n.slice(o+1),e.slice(o+1));for(const n of s)for(const s of u){const u=new _(e[o]);u.left=n,u.right=s,t.push(u)}}return t}const S=(n,e,t)=>{const o=[],s=(0,v.dL)({list:n,same:!1,pickSize:n.length}),u=(0,v.dL)({list:e,same:!0,pickSize:n.length-1});for(const r of s)for(const n of u){const e=C(r,n);for(const n of e)Math.abs(t-n.compute())<=v.p8&&o.push(n.toString())}return o},b=(n,e,t)=>{const o={};return function n(s){s.sort(((n,e)=>n-e));const u=s.join(",");if(o[u])return o[u];if(1===s.length)return Math.abs(t-s[0])<=v.p8?o[u]=[["FIN"]]:o[u]=[];const r=s.length,i=[];for(let t=0;t<r;t++)for(let o=0;o<r;o++)if(t!==o)for(const u of e){const e=(0,v.MQ)(s[t],s[o],u),r=s.filter(((n,e)=>e!==t&&e!==o));r.push(e),i.push(...n(r).filter((n=>n.length)).map((n=>[`${s[t]} ${u} ${s[o]}`,...n])))}return o[u]=i}(n).map((n=>`[${n.join(" -> ")}]`))};function w(){(0,f.A)();const n=(0,u.useRef)({v1:g.I,v2:S,v3:b}),[e,t]=(0,u.useState)(4),s=()=>new Array(e).fill(0).map((n=>(0,v.yT)(1,10))),[$,_]=(0,u.useState)("v2"),[C,w]=(0,u.useState)([]),[x,j]=(0,u.useState)(s()),[y,k]=(0,u.useState)(24),[A,R]=(0,u.useState)([]),N=()=>{j(s()),R([])};return(0,u.useEffect)((()=>{N()}),[e]),(0,o.jsxs)(r.A,{direction:"vertical",style:{width:"100%"},children:[(0,o.jsxs)(r.A,{children:[(0,o.jsx)(i.Ay.Group,{onChange:n=>_(n.target.value),value:$,optionType:"button",disabled:C,children:Object.keys(n.current).map(((n,e)=>(0,o.jsx)(i.Ay.Button,{value:n,disabled:C.some((e=>e===n)),children:n},e)))}),(0,o.jsx)(a.A,{value:e,onChange:n=>t(n)})]}),(0,o.jsx)(r.A,{children:(0,o.jsx)(l.A.Group,{options:Object.keys(n.current).map((n=>({label:n,value:n}))),onChange:n=>w(n),value:C})}),(0,o.jsx)(r.A,{wrap:!0,children:x.map(((n,e)=>(0,o.jsx)(c.A,{span:12,children:(0,o.jsx)(a.A,{value:n,onChange:n=>{const t=[...x];t[e]=n,j(t)}})},e)))}),(0,o.jsx)(m.A,{gutter:16,style:{width:400},children:(0,o.jsx)(c.A,{span:6,children:(0,o.jsx)(a.A,{value:y,onChange:n=>k(n)})})}),(0,o.jsxs)(m.A,{gutter:16,style:{width:400},children:[(0,o.jsx)(c.A,{span:6,children:(0,o.jsx)(p.Ay,{onClick:()=>{const e=n.current[$](x,["+","-","*","/"],y);R(Array.from(new Set(e).values())),console.log("======TIME COMPARATION======");for(const[t,o]of Object.entries(n.current).filter((n=>{let[e]=n;return!C.some((n=>n===e))})))console.time(t),o(x,["+","-","*","/"],y),console.timeEnd(t)},children:"Compute"})}),(0,o.jsx)(c.A,{span:6,children:(0,o.jsx)(p.Ay,{onClick:N,children:"Random"})})]}),(0,o.jsx)(d.A,{style:{width:"100%"},children:A.length?(0,o.jsx)(m.A,{children:A.map(((n,e)=>(0,o.jsx)(c.A,{span:24,children:`${n} = ${y}`},e)))}):(0,o.jsx)(h.A,{})})]})}const x="import React, { useState, useRef, useEffect } from 'react';\nimport { Button, Col, InputNumber, Row, Card, Empty, Space, Radio, Checkbox } from 'antd';\nimport { useUpdate } from 'ahooks';\nimport { random as randomNum, Compute24 } from './utils';\nimport { compute24 as compute24_v1 } from './v1';\nimport { compute24 as compute24_v2 } from './v2';\nimport { compute24 as compute24_v3 } from './v3';\n\nexport function Point24() {\n    const update = useUpdate();\n    const compute24Fns: { current: Record<string, Compute24> } = useRef({\n        v1: compute24_v1,\n        v2: compute24_v2,\n        v3: compute24_v3,\n    });\n    const [numCount, setNumCount] = useState(4);\n    const getRandomNum = () => new Array(numCount).fill(0).map(_ => randomNum(1, 10));\n    const [version, setVersion] = useState('v2');\n    const [disabledVersion, setDisabledVersion] = useState([]);\n    const [nums, setNums] = useState(getRandomNum());\n    const [target, setTarget] = useState(24);\n    const [solutions, setSolutions] = useState<string[]>([]);\n    const compute = () => {\n        const solutions = compute24Fns.current[version](nums, ['+', '-', '*', '/'], target);\n        // console.log('===solutions===');\n        // console.log(solutions);\n        setSolutions(Array.from(new Set(solutions).values()));\n        console.log('======TIME COMPARATION======');\n        for (const [k, fn] of Object.entries(compute24Fns.current).filter(\n            ([k]) => !disabledVersion.some(v => v === k)\n        )) {\n            console.time(k);\n            fn(nums, ['+', '-', '*', '/'], target);\n            console.timeEnd(k);\n        }\n    };\n    const random = () => {\n        setNums(getRandomNum());\n        setSolutions([]);\n    };\n    // useEffect(() => {\n    //   console.log('solutions', solutions);\n    // }, [solutions]);\n    useEffect(() => {\n        random();\n    }, [numCount]);\n    return (\n        <Space direction=\"vertical\" style={{ width: '100%' }}>\n            <Space>\n                <Radio.Group\n                    onChange={e => setVersion(e.target.value)}\n                    value={version}\n                    optionType=\"button\"\n                    disabled={disabledVersion}\n                >\n                    {Object.keys(compute24Fns.current).map((v, i) => (\n                        <Radio.Button\n                            value={v}\n                            key={i}\n                            disabled={disabledVersion.some(dv => dv === v)}\n                        >\n                            {v}\n                        </Radio.Button>\n                    ))}\n                </Radio.Group>\n                <InputNumber value={numCount} onChange={e => setNumCount(e)} />\n            </Space>\n            <Space>\n                <Checkbox.Group\n                    options={Object.keys(compute24Fns.current).map(v => ({ label: v, value: v }))}\n                    onChange={e => setDisabledVersion(e)}\n                    value={disabledVersion}\n                />\n            </Space>\n            <Space wrap>\n                {nums.map((v, index) => (\n                    <Col span={12} key={index}>\n                        <InputNumber\n                            value={v}\n                            onChange={e => {\n                                const newNums = [...nums];\n                                newNums[index] = e;\n                                setNums(newNums);\n                            }}\n                        />\n                    </Col>\n                ))}\n            </Space>\n            <Row gutter={16} style={{ width: 400 }}>\n                <Col span={6}>\n                    <InputNumber value={target} onChange={e => setTarget(e)} />\n                </Col>\n            </Row>\n            <Row gutter={16} style={{ width: 400 }}>\n                <Col span={6}>\n                    <Button onClick={compute}>Compute</Button>\n                </Col>\n                <Col span={6}>\n                    <Button onClick={random}>Random</Button>\n                </Col>\n            </Row>\n            <Card style={{ width: '100%' }}>\n                {solutions.length ? (\n                    <Row>\n                        {solutions.map((v, i) => (\n                            <Col key={i} span={24}>\n                                {`${v} = ${target}`}\n                            </Col>\n                        ))}\n                    </Row>\n                ) : (\n                    <Empty />\n                )}\n            </Card>\n        </Space>\n    );\n}\n";var j=t(32576);const y={},k="24 \u70b9",A={id:"\u5e94\u7528/point24",title:"24 \u70b9",description:"Code",source:"@site/docs/\u5e94\u7528/point24.mdx",sourceDirName:"\u5e94\u7528",slug:"/\u5e94\u7528/point24",permalink:"/docs/\u5e94\u7528/point24",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u8d26\u672c",permalink:"/docs/\u5e94\u7528/ledger"},next:{title:"\u4f53\u91cd\u53d8\u5316",permalink:"/docs/\u5e94\u7528/weights"}},R={},N=[{value:"Code",id:"code",level:2}];function M(n){const e={h1:"h1",h2:"h2",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"24-\u70b9",children:"24 \u70b9"}),"\n",(0,o.jsx)(w,{}),"\n",(0,o.jsx)(e.h2,{id:"code",children:"Code"}),"\n",(0,o.jsx)(j.A,{language:"tsx",children:x})]})}function E(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(M,{...n})}):M(n)}},37166:(n,e,t)=>{function o(n,e){return Math.floor(Math.random()*(e-n+1)+n)}t.d(e,{MQ:()=>r,dL:()=>u,p8:()=>s,yT:()=>o});const s=1e-6;function u(n){let{list:e,same:t,pickSize:o}=n;const s=e.length,u=new Set,r=[];return function n(i){void 0===i&&(i=[]);if(i.length===o)return void r.push(i.slice());for(let o=0;o<s;o++)!t&&u.has(o)||(i.push(e[o]),u.add(o),n(i),u.delete(o),i.pop())}(),r}function r(n,e,t){switch(t){case"+":return n+e;case"-":return n-e;case"*":return n*e;case"/":return n/e;default:throw new Error("an unkown operation")}}},10390:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>compute24});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(37166);const compute24=(nums,ops,target)=>{const res=[],n=nums.length,m=ops.length,numSet=new Set;for(let num1=0;num1<n;num1++){numSet.add(num1);for(let num2=0;num2<n;num2++)if(!numSet.has(num2)){numSet.add(num2);for(let num3=0;num3<n;num3++)if(!numSet.has(num3)){numSet.add(num3);for(let num4=0;num4<n;num4++)if(!numSet.has(num4))for(let op1=0;op1<m;op1++)for(let op2=0;op2<m;op2++)for(let op3=0;op3<m;op3++)for(const temp of getTemplate(nums[num1],nums[num2],nums[num3],nums[num4],ops[op1],ops[op2],ops[op3])){const num=eval(temp);Math.abs(target-num)<=_utils__WEBPACK_IMPORTED_MODULE_0__.p8&&res.push(temp)}numSet.delete(num3)}numSet.delete(num2)}numSet.delete(num1)}return res};function getTemplate(n,e,t,o,s,u,r){return[`${n}${s}${e}${u}${t}${r}${o}`,`(${n}${s}(${e}${u}${t}))${r}${o}`,`((${n}${s}${e})${u}${t})${r}${o}`,`${n}${s}(${e}${u}(${t}${r}${o}))`,`${n}${s}((${e}${u}${t})${r}${o})`,`(${n}${s}${e})${u}(${t}${r}${o})`,`${n}${s}${e}${u}(${t}${r}${o})`,`(${n}${s}${e})${u}${t}${r}${o}`]}}}]);