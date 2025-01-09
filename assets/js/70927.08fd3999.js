"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[70927],{1444:(e,t,n)=>{n.d(t,{A:()=>s});const s=(0,n(58101).createContext)({})},77181:(e,t,n)=>{n.d(t,{A:()=>u});var s=n(58101),r=n(97500),i=n.n(r),a=n(90758),l=n(1444),o=n(49837),c=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n};function d(e){return"number"==typeof e?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const g=["xs","sm","md","lg","xl","xxl"];const u=s.forwardRef(((e,t)=>{const{getPrefixCls:n,direction:r}=s.useContext(a.QO),{gutter:u,wrap:m}=s.useContext(l.A),{prefixCls:$,span:p,order:f,offset:b,push:h,pull:x,className:C,children:y,flex:O,style:j}=e,v=c(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),w=n("col",$),[k,E,N]=(0,o.xV)(w),M={};let S={};g.forEach((t=>{let n={};const s=e[t];"number"==typeof s?n.span=s:"object"==typeof s&&(n=s||{}),delete v[t],S=Object.assign(Object.assign({},S),{[`${w}-${t}-${n.span}`]:void 0!==n.span,[`${w}-${t}-order-${n.order}`]:n.order||0===n.order,[`${w}-${t}-offset-${n.offset}`]:n.offset||0===n.offset,[`${w}-${t}-push-${n.push}`]:n.push||0===n.push,[`${w}-${t}-pull-${n.pull}`]:n.pull||0===n.pull,[`${w}-rtl`]:"rtl"===r}),n.flex&&(S[`${w}-${t}-flex`]=!0,M[`--${w}-${t}-flex`]=d(n.flex))}));const A=i()(w,{[`${w}-${p}`]:void 0!==p,[`${w}-order-${f}`]:f,[`${w}-offset-${b}`]:b,[`${w}-push-${h}`]:h,[`${w}-pull-${x}`]:x},C,S,E,N),H={};if(u&&u[0]>0){const e=u[0]/2;H.paddingLeft=e,H.paddingRight=e}return O&&(H.flex=d(O),!1!==m||H.minWidth||(H.minWidth=0)),k(s.createElement("div",Object.assign({},v,{style:Object.assign(Object.assign(Object.assign({},H),j),M),className:A,ref:t}),y))}))},84815:(e,t,n)=>{n.d(t,{A:()=>$});var s=n(58101),r=n(97500),i=n.n(r),a=n(17911);const l=["xxl","xl","lg","md","sm","xs"];function o(){const[,e]=(0,a.Ay)(),t=(e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}))((e=>{const t=e,n=[].concat(l).reverse();return n.forEach(((e,s)=>{const r=e.toUpperCase(),i=`screen${r}Min`,a=`screen${r}`;if(!(t[i]<=t[a]))throw new Error(`${i}<=${a} fails : !(${t[i]}<=${t[a]})`);if(s<n.length-1){const e=`screen${r}Max`;if(!(t[a]<=t[e]))throw new Error(`${a}<=${e} fails : !(${t[a]}<=${t[e]})`);const i=`screen${n[s+1].toUpperCase()}Min`;if(!(t[e]<=t[i]))throw new Error(`${e}<=${i} fails : !(${t[e]}<=${t[i]})`)}})),e})(e));return s.useMemo((()=>{const e=new Map;let n=-1,s={};return{matchHandlers:{},dispatch:t=>(s=t,e.forEach((e=>e(s))),e.size>=1),subscribe(t){return e.size||this.register(),n+=1,e.set(n,t),t(s),n},unsubscribe(t){e.delete(t),e.size||this.unregister()},unregister(){Object.keys(t).forEach((e=>{const n=t[e],s=this.matchHandlers[n];null==s||s.mql.removeListener(null==s?void 0:s.listener)})),e.clear()},register(){Object.keys(t).forEach((e=>{const n=t[e],r=t=>{let{matches:n}=t;this.dispatch(Object.assign(Object.assign({},s),{[e]:n}))},i=window.matchMedia(n);i.addListener(r),this.matchHandlers[n]={mql:i,listener:r},r(i)}))},responsiveMap:t}}),[e])}var c=n(90758),d=n(1444),g=n(49837),u=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n};function m(e,t){const[n,r]=s.useState("string"==typeof e?e:"");return s.useEffect((()=>{(()=>{if("string"==typeof e&&r(e),"object"==typeof e)for(let n=0;n<l.length;n++){const s=l[n];if(!t[s])continue;const i=e[s];if(void 0!==i)return void r(i)}})()}),[JSON.stringify(e),t]),n}const $=s.forwardRef(((e,t)=>{const{prefixCls:n,justify:r,align:a,className:$,style:p,children:f,gutter:b=0,wrap:h}=e,x=u(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:C,direction:y}=s.useContext(c.QO),[O,j]=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[v,w]=s.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),k=m(a,v),E=m(r,v),N=s.useRef(b),M=o();s.useEffect((()=>{const e=M.subscribe((e=>{w(e);const t=N.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&j(e)}));return()=>M.unsubscribe(e)}),[]);const S=C("row",n),[A,H,I]=(0,g.L3)(S),R=(()=>{const e=[void 0,void 0];return(Array.isArray(b)?b:[b,void 0]).forEach(((t,n)=>{if("object"==typeof t)for(let s=0;s<l.length;s++){const r=l[s];if(O[r]&&void 0!==t[r]){e[n]=t[r];break}}else e[n]=t})),e})(),q=i()(S,{[`${S}-no-wrap`]:!1===h,[`${S}-${E}`]:E,[`${S}-${k}`]:k,[`${S}-rtl`]:"rtl"===y},$,H,I),L={},z=null!=R[0]&&R[0]>0?R[0]/-2:void 0;z&&(L.marginLeft=z,L.marginRight=z);const[P,F]=R;L.rowGap=F;const B=s.useMemo((()=>({gutter:[P,F],wrap:h})),[P,F,h]);return A(s.createElement(d.A.Provider,{value:B},s.createElement("div",Object.assign({},x,{className:q,style:Object.assign(Object.assign({},L),p),ref:t}),f)))}))},49837:(e,t,n)=>{n.d(t,{L3:()=>o,xV:()=>c});var s=n(45180),r=n(25245),i=n(727);const a=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},l=(e,t)=>((e,t)=>{const{prefixCls:n,componentCls:s,gridColumns:r}=e,i={};for(let a=r;a>=0;a--)0===a?(i[`${s}${t}-${a}`]={display:"none"},i[`${s}-push-${a}`]={insetInlineStart:"auto"},i[`${s}-pull-${a}`]={insetInlineEnd:"auto"},i[`${s}${t}-push-${a}`]={insetInlineStart:"auto"},i[`${s}${t}-pull-${a}`]={insetInlineEnd:"auto"},i[`${s}${t}-offset-${a}`]={marginInlineStart:0},i[`${s}${t}-order-${a}`]={order:0}):(i[`${s}${t}-${a}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${a/r*100}%`,maxWidth:a/r*100+"%"}],i[`${s}${t}-push-${a}`]={insetInlineStart:a/r*100+"%"},i[`${s}${t}-pull-${a}`]={insetInlineEnd:a/r*100+"%"},i[`${s}${t}-offset-${a}`]={marginInlineStart:a/r*100+"%"},i[`${s}${t}-order-${a}`]={order:a});return i[`${s}${t}-flex`]={flex:`var(--${n}${t}-flex)`},i})(e,t),o=(0,r.OF)("Grid",(e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}}),(()=>({}))),c=(0,r.OF)("Grid",(e=>{const t=(0,i.oX)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[a(t),l(t,""),l(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${(0,s.zA)(t)})`]:Object.assign({},l(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}),(()=>({})))},61889:(e,t,n)=>{n.d(t,{A:()=>z});var s=n(58101),r=n(97500),i=n.n(r),a=n(90758),l=n(37639);const o=e=>{const{prefixCls:t,className:n,style:r,size:a,shape:l}=e,o=i()({[`${t}-lg`]:"large"===a,[`${t}-sm`]:"small"===a}),c=i()({[`${t}-circle`]:"circle"===l,[`${t}-square`]:"square"===l,[`${t}-round`]:"round"===l}),d=s.useMemo((()=>"number"==typeof a?{width:a,height:a,lineHeight:`${a}px`}:{}),[a]);return s.createElement("span",{className:i()(t,o,c,n),style:Object.assign(Object.assign({},d),r)})};var c=n(45180),d=n(25245),g=n(727);const u=new c.Mo("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),m=e=>({height:e,lineHeight:(0,c.zA)(e)}),$=e=>Object.assign({width:e},m(e)),p=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:u,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),f=(e,t)=>Object.assign({width:t(e).mul(5).equal(),minWidth:t(e).mul(5).equal()},m(e)),b=e=>{const{skeletonAvatarCls:t,gradientFromColor:n,controlHeight:s,controlHeightLG:r,controlHeightSM:i}=e;return{[t]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},$(s)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},$(r)),[`${t}${t}-sm`]:Object.assign({},$(i))}},h=e=>{const{controlHeight:t,borderRadiusSM:n,skeletonInputCls:s,controlHeightLG:r,controlHeightSM:i,gradientFromColor:a,calc:l}=e;return{[s]:Object.assign({display:"inline-block",verticalAlign:"top",background:a,borderRadius:n},f(t,l)),[`${s}-lg`]:Object.assign({},f(r,l)),[`${s}-sm`]:Object.assign({},f(i,l))}},x=e=>Object.assign({width:e},m(e)),C=e=>{const{skeletonImageCls:t,imageSizeBase:n,gradientFromColor:s,borderRadiusSM:r,calc:i}=e;return{[t]:Object.assign(Object.assign({display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"middle",background:s,borderRadius:r},x(i(n).mul(2).equal())),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},x(n)),{maxWidth:i(n).mul(4).equal(),maxHeight:i(n).mul(4).equal()}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},y=(e,t,n)=>{const{skeletonButtonCls:s}=e;return{[`${n}${s}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${n}${s}-round`]:{borderRadius:t}}},O=(e,t)=>Object.assign({width:t(e).mul(2).equal(),minWidth:t(e).mul(2).equal()},m(e)),j=e=>{const{borderRadiusSM:t,skeletonButtonCls:n,controlHeight:s,controlHeightLG:r,controlHeightSM:i,gradientFromColor:a,calc:l}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[n]:Object.assign({display:"inline-block",verticalAlign:"top",background:a,borderRadius:t,width:l(s).mul(2).equal(),minWidth:l(s).mul(2).equal()},O(s,l))},y(e,s,n)),{[`${n}-lg`]:Object.assign({},O(r,l))}),y(e,r,`${n}-lg`)),{[`${n}-sm`]:Object.assign({},O(i,l))}),y(e,i,`${n}-sm`))},v=e=>{const{componentCls:t,skeletonAvatarCls:n,skeletonTitleCls:s,skeletonParagraphCls:r,skeletonButtonCls:i,skeletonInputCls:a,skeletonImageCls:l,controlHeight:o,controlHeightLG:c,controlHeightSM:d,gradientFromColor:g,padding:u,marginSM:m,borderRadius:f,titleHeight:x,blockRadius:y,paragraphLiHeight:O,controlHeightXS:v,paragraphMarginTop:w}=e;return{[t]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:u,verticalAlign:"top",[n]:Object.assign({display:"inline-block",verticalAlign:"top",background:g},$(o)),[`${n}-circle`]:{borderRadius:"50%"},[`${n}-lg`]:Object.assign({},$(c)),[`${n}-sm`]:Object.assign({},$(d))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[s]:{width:"100%",height:x,background:g,borderRadius:y,[`+ ${r}`]:{marginBlockStart:d}},[r]:{padding:0,"> li":{width:"100%",height:O,listStyle:"none",background:g,borderRadius:y,"+ li":{marginBlockStart:v}}},[`${r}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${s}, ${r} > li`]:{borderRadius:f}}},[`${t}-with-avatar ${t}-content`]:{[s]:{marginBlockStart:m,[`+ ${r}`]:{marginBlockStart:w}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},j(e)),b(e)),h(e)),C(e)),[`${t}${t}-block`]:{width:"100%",[i]:{width:"100%"},[a]:{width:"100%"}},[`${t}${t}-active`]:{[`\n        ${s},\n        ${r} > li,\n        ${n},\n        ${i},\n        ${a},\n        ${l}\n      `]:Object.assign({},p(e))}}},w=(0,d.OF)("Skeleton",(e=>{const{componentCls:t,calc:n}=e,s=(0,g.oX)(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:n(e.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[v(s)]}),(e=>{const{colorFillContent:t,colorFill:n}=e;return{color:t,colorGradientEnd:n,gradientFromColor:t,gradientToColor:n,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}}),{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),k=e=>{const{prefixCls:t,className:n,rootClassName:r,active:c,shape:d="circle",size:g="default"}=e,{getPrefixCls:u}=s.useContext(a.QO),m=u("skeleton",t),[$,p,f]=w(m),b=(0,l.A)(e,["prefixCls","className"]),h=i()(m,`${m}-element`,{[`${m}-active`]:c},n,r,p,f);return $(s.createElement("div",{className:h},s.createElement(o,Object.assign({prefixCls:`${m}-avatar`,shape:d,size:g},b))))},E=e=>{const{prefixCls:t,className:n,rootClassName:r,active:c,block:d=!1,size:g="default"}=e,{getPrefixCls:u}=s.useContext(a.QO),m=u("skeleton",t),[$,p,f]=w(m),b=(0,l.A)(e,["prefixCls"]),h=i()(m,`${m}-element`,{[`${m}-active`]:c,[`${m}-block`]:d},n,r,p,f);return $(s.createElement("div",{className:h},s.createElement(o,Object.assign({prefixCls:`${m}-button`,size:g},b))))},N=e=>{const{prefixCls:t,className:n,rootClassName:r,style:l,active:o}=e,{getPrefixCls:c}=s.useContext(a.QO),d=c("skeleton",t),[g,u,m]=w(d),$=i()(d,`${d}-element`,{[`${d}-active`]:o},n,r,u,m);return g(s.createElement("div",{className:$},s.createElement("div",{className:i()(`${d}-image`,n),style:l},s.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${d}-image-svg`},s.createElement("title",null,"Image placeholder"),s.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:`${d}-image-path`})))))},M=e=>{const{prefixCls:t,className:n,rootClassName:r,active:c,block:d,size:g="default"}=e,{getPrefixCls:u}=s.useContext(a.QO),m=u("skeleton",t),[$,p,f]=w(m),b=(0,l.A)(e,["prefixCls"]),h=i()(m,`${m}-element`,{[`${m}-active`]:c,[`${m}-block`]:d},n,r,p,f);return $(s.createElement("div",{className:h},s.createElement(o,Object.assign({prefixCls:`${m}-input`,size:g},b))))},S=e=>{const{prefixCls:t,className:n,rootClassName:r,style:l,active:o,children:c}=e,{getPrefixCls:d}=s.useContext(a.QO),g=d("skeleton",t),[u,m,$]=w(g),p=i()(g,`${g}-element`,{[`${g}-active`]:o},m,n,r,$);return u(s.createElement("div",{className:p},s.createElement("div",{className:i()(`${g}-image`,n),style:l},c)))};var A=n(32277);const H=(e,t)=>{const{width:n,rows:s=2}=t;return Array.isArray(n)?n[e]:s-1===e?n:void 0},I=e=>{const{prefixCls:t,className:n,style:r,rows:a}=e,l=(0,A.A)(new Array(a)).map(((t,n)=>s.createElement("li",{key:n,style:{width:H(n,e)}})));return s.createElement("ul",{className:i()(t,n),style:r},l)},R=e=>{let{prefixCls:t,className:n,width:r,style:a}=e;return s.createElement("h3",{className:i()(t,n),style:Object.assign({width:r},a)})};function q(e){return e&&"object"==typeof e?e:{}}const L=e=>{const{prefixCls:t,loading:n,className:r,rootClassName:l,style:c,children:d,avatar:g=!1,title:u=!0,paragraph:m=!0,active:$,round:p}=e,{getPrefixCls:f,direction:b,skeleton:h}=s.useContext(a.QO),x=f("skeleton",t),[C,y,O]=w(x);if(n||!("loading"in e)){const e=!!g,t=!!u,n=!!m;let a,d;if(e){const e=Object.assign(Object.assign({prefixCls:`${x}-avatar`},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(t,n)),q(g));a=s.createElement("div",{className:`${x}-header`},s.createElement(o,Object.assign({},e)))}if(t||n){let r,i;if(t){const t=Object.assign(Object.assign({prefixCls:`${x}-title`},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(e,n)),q(u));r=s.createElement(R,Object.assign({},t))}if(n){const n=Object.assign(Object.assign({prefixCls:`${x}-paragraph`},function(e,t){const n={};return e&&t||(n.width="61%"),n.rows=!e&&t?3:2,n}(e,t)),q(m));i=s.createElement(I,Object.assign({},n))}d=s.createElement("div",{className:`${x}-content`},r,i)}const f=i()(x,{[`${x}-with-avatar`]:e,[`${x}-active`]:$,[`${x}-rtl`]:"rtl"===b,[`${x}-round`]:p},null==h?void 0:h.className,r,l,y,O);return C(s.createElement("div",{className:f,style:Object.assign(Object.assign({},null==h?void 0:h.style),c)},a,d))}return null!=d?d:null};L.Button=E,L.Avatar=k,L.Input=M,L.Image=N,L.Node=S;const z=L}}]);