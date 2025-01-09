/*! For license information please see 1736.a99d10de.js.LICENSE.txt */
(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[1736],{29100:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var o=n(75890),r=n(58101);const l={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"};var i=n(17708),a=function(e,t){return r.createElement(i.A,(0,o.A)({},e,{ref:t,icon:l}))};const c=r.forwardRef(a)},1230:(e,t,n)=>{"use strict";n.d(t,{YK:()=>d,jH:()=>a});var o=n(58101),r=n(17911),l=n(83741);const i=100,a=1e3,c={Modal:i,Drawer:i,Popover:i,Popconfirm:i,Tooltip:i,Tour:i,FloatButton:i},s={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};const d=(e,t)=>{const[,n]=(0,r.Ay)(),i=o.useContext(l.A),a=e in c;let d;if(void 0!==t)d=[t,t];else{let o=null!=i?i:0;o+=a?(i?0:n.zIndexPopupBase)+c[e]:s[e],d=[void 0===i?t:o,o]}return d}},83741:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o=n(58101).createContext(void 0)},50378:(e,t,n)=>{"use strict";n.d(t,{A:()=>P});var o=n(58101),r=n(97500),l=n.n(r),i=n(15848),a=n(88905),c=n(50984),s=n(36003),d=n(90758),u=n(63294),p=n(48638),f=n(97166);const m=o.createContext(null);var g=n(45180),b=n(22884),v=n(727),y=n(25245);const h=e=>{const{checkboxCls:t}=e,n=`${t}-wrapper`;return[{[`${t}-group`]:Object.assign(Object.assign({},(0,b.dF)(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[n]:Object.assign(Object.assign({},(0,b.dF)(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${n}`]:{marginInlineStart:0},[`&${n}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[t]:Object.assign(Object.assign({},(0,b.dF)(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${t}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${t}-inner`]:Object.assign({},(0,b.jk)(e))},[`${t}-inner`]:{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${(0,g.zA)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:`${(0,g.zA)(e.lineWidthBold)} solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`\n        ${n}:not(${n}-disabled),\n        ${t}:not(${t}-disabled)\n      `]:{[`&:hover ${t}-inner`]:{borderColor:e.colorPrimary}},[`${n}:not(${n}-disabled)`]:{[`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}-checked:not(${t}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${t}-checked`]:{[`${t}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`\n        ${n}-checked:not(${n}-disabled),\n        ${t}-checked:not(${t}-disabled)\n      `]:{[`&:hover ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[t]:{"&-indeterminate":{[`${t}-inner`]:{backgroundColor:`${e.colorBgContainer} !important`,borderColor:`${e.colorBorder} !important`,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}},[`&:hover ${t}-inner`]:{backgroundColor:`${e.colorBgContainer} !important`,borderColor:`${e.colorPrimary} !important`}}}},{[`${n}-disabled`]:{cursor:"not-allowed"},[`${t}-disabled`]:{[`&, ${t}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${t}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${t}-indeterminate ${t}-inner::after`]:{background:e.colorTextDisabled}}}]};function x(e,t){const n=(0,v.oX)(t,{checkboxCls:`.${e}`,checkboxSize:t.controlInteractiveSize});return[h(n)]}const O=(0,y.OF)("Checkbox",((e,t)=>{let{prefixCls:n}=t;return[x(n,e)]}));var $=n(60780),C=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const w=(e,t)=>{var n;const{prefixCls:r,className:g,rootClassName:b,children:v,indeterminate:y=!1,style:h,onMouseEnter:x,onMouseLeave:w,skipGroup:E=!1,disabled:S}=e,k=C(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:j,direction:A,checkbox:z}=o.useContext(d.QO),I=o.useContext(m),{isFormItemInput:P}=o.useContext(f.$W),N=o.useContext(u.A),M=null!==(n=(null==I?void 0:I.disabled)||S)&&void 0!==n?n:N,R=o.useRef(k.value),B=o.useRef(null),D=(0,a.K4)(t,B);o.useEffect((()=>{null==I||I.registerValue(k.value)}),[]),o.useEffect((()=>{if(!E)return k.value!==R.current&&(null==I||I.cancelValue(R.current),null==I||I.registerValue(k.value),R.current=k.value),()=>null==I?void 0:I.cancelValue(k.value)}),[k.value]),o.useEffect((()=>{var e;(null===(e=B.current)||void 0===e?void 0:e.input)&&(B.current.input.indeterminate=y)}),[y]);const T=j("checkbox",r),H=(0,p.A)(T),[W,L,F]=O(T,H),G=Object.assign({},k);I&&!E&&(G.onChange=function(){k.onChange&&k.onChange.apply(k,arguments),I.toggleOption&&I.toggleOption({label:v,value:k.value})},G.name=I.name,G.checked=I.value.includes(k.value));const V=l()(`${T}-wrapper`,{[`${T}-rtl`]:"rtl"===A,[`${T}-wrapper-checked`]:G.checked,[`${T}-wrapper-disabled`]:M,[`${T}-wrapper-in-form-item`]:P},null==z?void 0:z.className,g,b,F,H,L),K=l()({[`${T}-indeterminate`]:y},s.D,L),[X,q]=(0,$.A)(G.onClick);return W(o.createElement(c.A,{component:"Checkbox",disabled:M},o.createElement("label",{className:V,style:Object.assign(Object.assign({},null==z?void 0:z.style),h),onMouseEnter:x,onMouseLeave:w,onClick:X},o.createElement(i.A,Object.assign({},G,{onClick:q,prefixCls:T,className:K,disabled:M,ref:D})),void 0!==v&&o.createElement("span",null,v))))};const E=o.forwardRef(w);var S=n(32277),k=n(37639),j=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const A=o.forwardRef(((e,t)=>{const{defaultValue:n,children:r,options:i=[],prefixCls:a,className:c,rootClassName:s,style:u,onChange:f}=e,g=j(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:b,direction:v}=o.useContext(d.QO),[y,h]=o.useState(g.value||n||[]),[x,$]=o.useState([]);o.useEffect((()=>{"value"in g&&h(g.value||[])}),[g.value]);const C=o.useMemo((()=>i.map((e=>"string"==typeof e||"number"==typeof e?{label:e,value:e}:e))),[i]),w=b("checkbox",a),A=`${w}-group`,z=(0,p.A)(w),[I,P,N]=O(w,z),M=(0,k.A)(g,["value","disabled"]),R=i.length?C.map((e=>o.createElement(E,{prefixCls:w,key:e.value.toString(),disabled:"disabled"in e?e.disabled:g.disabled,value:e.value,checked:y.includes(e.value),onChange:e.onChange,className:`${A}-item`,style:e.style,title:e.title,id:e.id,required:e.required},e.label))):r,B={toggleOption:e=>{const t=y.indexOf(e.value),n=(0,S.A)(y);-1===t?n.push(e.value):n.splice(t,1),"value"in g||h(n),null==f||f(n.filter((e=>x.includes(e))).sort(((e,t)=>C.findIndex((t=>t.value===e))-C.findIndex((e=>e.value===t)))))},value:y,disabled:g.disabled,name:g.name,registerValue:e=>{$((t=>[].concat((0,S.A)(t),[e])))},cancelValue:e=>{$((t=>t.filter((t=>t!==e))))}},D=l()(A,{[`${A}-rtl`]:"rtl"===v},c,s,N,z,P);return I(o.createElement("div",Object.assign({className:D,style:u},M,{ref:t}),o.createElement(m.Provider,{value:B},R)))})),z=A,I=E;I.Group=z,I.__ANT_CHECKBOX=!0;const P=I},60177:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var o=n(58101),r=n(97500),l=n.n(r),i=n(90758),a=n(45180),c=n(22884),s=n(25245),d=n(727);const u=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:o,lineWidth:r,textPaddingInline:l,orientationMargin:i,verticalMarginInline:s}=e;return{[t]:Object.assign(Object.assign({},(0,c.dF)(e)),{borderBlockStart:`${(0,a.zA)(r)} solid ${o}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:s,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${(0,a.zA)(r)} solid ${o}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${(0,a.zA)(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${(0,a.zA)(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${o}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${(0,a.zA)(r)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:`calc(${i} * 100%)`},"&::after":{width:`calc(100% - ${i} * 100%)`}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:`calc(100% - ${i} * 100%)`},"&::after":{width:`calc(${i} * 100%)`}},[`${t}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:l},"&-dashed":{background:"none",borderColor:o,borderStyle:"dashed",borderWidth:`${(0,a.zA)(r)} 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:o,borderStyle:"dotted",borderWidth:`${(0,a.zA)(r)} 0 0`},[`&-horizontal${t}-with-text${t}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${t}-dotted`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}},p=(0,s.OF)("Divider",(e=>{const t=(0,d.oX)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[u(t)]}),(e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS})),{unitless:{orientationMargin:!0}});var f=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const m=e=>{const{getPrefixCls:t,direction:n,divider:r}=o.useContext(i.QO),{prefixCls:a,type:c="horizontal",orientation:s="center",orientationMargin:d,className:u,rootClassName:m,children:g,dashed:b,variant:v="solid",plain:y,style:h}=e,x=f(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),O=t("divider",a),[$,C,w]=p(O),E=!!g,S="left"===s&&null!=d,k="right"===s&&null!=d,j=l()(O,null==r?void 0:r.className,C,w,`${O}-${c}`,{[`${O}-with-text`]:E,[`${O}-with-text-${s}`]:E,[`${O}-dashed`]:!!b,[`${O}-${v}`]:"solid"!==v,[`${O}-plain`]:!!y,[`${O}-rtl`]:"rtl"===n,[`${O}-no-default-orientation-margin-left`]:S,[`${O}-no-default-orientation-margin-right`]:k},u,m),A=o.useMemo((()=>"number"==typeof d?d:/^\d+$/.test(d)?Number(d):d),[d]),z=Object.assign(Object.assign({},S&&{marginLeft:A}),k&&{marginRight:A});return $(o.createElement("div",Object.assign({className:j,style:Object.assign(Object.assign({},null==r?void 0:r.style),h)},x,{role:"separator"}),g&&"vertical"!==c&&o.createElement("span",{className:`${O}-inner-text`,style:z},g)))}},67168:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var o=n(58101),r=n(97500),l=n.n(r),i=n(96044);function a(e){return["small","middle","large"].includes(e)}function c(e){return!!e&&("number"==typeof e&&!Number.isNaN(e))}var s=n(90758),d=n(17302);const u=o.createContext({latestIndex:0}),p=u.Provider,f=e=>{let{className:t,index:n,children:r,split:l,style:i}=e;const{latestIndex:a}=o.useContext(u);return null==r?null:o.createElement(o.Fragment,null,o.createElement("div",{className:t,style:i},r),n<a&&l&&o.createElement("span",{className:`${t}-split`},l))};var m=n(60491),g=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const b=o.forwardRef(((e,t)=>{var n,r,d;const{getPrefixCls:u,space:b,direction:v}=o.useContext(s.QO),{size:y=(null!==(n=null==b?void 0:b.size)&&void 0!==n?n:"small"),align:h,className:x,rootClassName:O,children:$,direction:C="horizontal",prefixCls:w,split:E,style:S,wrap:k=!1,classNames:j,styles:A}=e,z=g(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[I,P]=Array.isArray(y)?y:[y,y],N=a(P),M=a(I),R=c(P),B=c(I),D=(0,i.A)($,{keepEmpty:!0}),T=void 0===h&&"horizontal"===C?"center":h,H=u("space",w),[W,L,F]=(0,m.A)(H),G=l()(H,null==b?void 0:b.className,L,`${H}-${C}`,{[`${H}-rtl`]:"rtl"===v,[`${H}-align-${T}`]:T,[`${H}-gap-row-${P}`]:N,[`${H}-gap-col-${I}`]:M},x,O,F),V=l()(`${H}-item`,null!==(r=null==j?void 0:j.item)&&void 0!==r?r:null===(d=null==b?void 0:b.classNames)||void 0===d?void 0:d.item);let K=0;const X=D.map(((e,t)=>{var n,r;null!=e&&(K=t);const l=(null==e?void 0:e.key)||`${V}-${t}`;return o.createElement(f,{className:V,key:l,index:t,split:E,style:null!==(n=null==A?void 0:A.item)&&void 0!==n?n:null===(r=null==b?void 0:b.styles)||void 0===r?void 0:r.item},e)})),q=o.useMemo((()=>({latestIndex:K})),[K]);if(0===D.length)return null;const _={};return k&&(_.flexWrap="wrap"),!M&&B&&(_.columnGap=I),!N&&R&&(_.rowGap=P),W(o.createElement("div",Object.assign({ref:t,className:G,style:Object.assign(Object.assign(Object.assign({},_),null==b?void 0:b.style),S)},z),o.createElement(p,{value:q},X)))})),v=b;v.Compact=d.Ay;const y=v},23975:(e,t,n)=>{"use strict";n.d(t,{A:()=>je});var o=n(58101),r=n(75890);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};var i=n(17708),a=function(e,t){return o.createElement(i.A,(0,r.A)({},e,{ref:t,icon:l}))};const c=o.forwardRef(a);var s=n(97500),d=n.n(s),u=n(78994),p=n(96044),f=n(97799),m=n(75783),g=n(37639),b=n(88905),v=n(86960),y=function(e){if((0,v.A)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1};function h(e,t){return Array.isArray(e)||void 0===t?y(e):function(e,t){if(!y(e))return!1;var n=document.createElement("div"),o=n.style[e];return n.style[e]=t,n.style[e]!==o}(e,t)}var x=n(90758),O=n(51896),$=n(75922);const C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};var w=function(e,t){return o.createElement(i.A,(0,r.A)({},e,{ref:t,icon:C}))};const E=o.forwardRef(w);var S=n(52822),k=n(22839),j=n(78188),A=n(22884),z=n(25245),I=n(45543),P=n(45180);const N=e=>{const t={};return[1,2,3,4,5].forEach((n=>{t[`\n      h${n}&,\n      div&-h${n},\n      div&-h${n} > textarea,\n      h${n}\n    `]=((e,t,n,o)=>{const{titleMarginBottom:r,fontWeightStrong:l}=o;return{marginBottom:r,color:n,fontWeight:l,fontSize:e,lineHeight:t}})(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)})),t},M=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},(0,A.Y1)(e)),{userSelect:"text",[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},R=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:I.bK[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),B=e=>{const{componentCls:t,paddingSM:n}=e,o=n;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(o).mul(-1).equal(),marginBottom:`calc(1em - ${(0,P.zA)(o)})`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},D=e=>({[`${e.componentCls}-copy-success`]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),T=e=>{const{componentCls:t,titleMarginTop:n}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},N(e)),{[`\n      & + h1${t},\n      & + h2${t},\n      & + h3${t},\n      & + h4${t},\n      & + h5${t}\n      `]:{marginTop:n},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:n}}}),R(e)),M(e)),{[`\n        ${t}-expand,\n        ${t}-collapse,\n        ${t}-edit,\n        ${t}-copy\n      `]:Object.assign(Object.assign({},(0,A.Y1)(e)),{marginInlineStart:e.marginXXS})}),B(e)),D(e)),{"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-ellipsis-single-line":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),{"&-rtl":{direction:"rtl"}})}},H=(0,z.OF)("Typography",(e=>[T(e)]),(()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}))),W=e=>{const{prefixCls:t,"aria-label":n,className:r,style:l,direction:i,maxLength:a,autoSize:c=!0,value:s,onSave:u,onCancel:p,onEnd:f,component:m,enterIcon:g=o.createElement(E,null)}=e,b=o.useRef(null),v=o.useRef(!1),y=o.useRef(null),[h,x]=o.useState(s);o.useEffect((()=>{x(s)}),[s]),o.useEffect((()=>{var e;if(null===(e=b.current)||void 0===e?void 0:e.resizableTextArea){const{textArea:e}=b.current.resizableTextArea;e.focus();const{length:t}=e.value;e.setSelectionRange(t,t)}}),[]);const O=()=>{u(h.trim())},[$,C,w]=H(t),A=d()(t,`${t}-edit-content`,{[`${t}-rtl`]:"rtl"===i,[`${t}-${m}`]:!!m},r,C,w);return $(o.createElement("div",{className:A,style:l},o.createElement(j.A,{ref:b,maxLength:a,value:h,onChange:e=>{let{target:t}=e;x(t.value.replace(/[\n\r]/g,""))},onKeyDown:e=>{let{keyCode:t}=e;v.current||(y.current=t)},onKeyUp:e=>{let{keyCode:t,ctrlKey:n,altKey:o,metaKey:r,shiftKey:l}=e;y.current!==t||v.current||n||o||r||l||(t===S.A.ENTER?(O(),null==f||f()):t===S.A.ESC&&p())},onCompositionStart:()=>{v.current=!0},onCompositionEnd:()=>{v.current=!1},onBlur:()=>{O()},"aria-label":n,rows:1,autoSize:c}),null!==g?(0,k.Ob)(g,{className:`${t}-edit-content-confirm`}):null))};var L=n(83042),F=n.n(L),G=n(50922);var V=function(e,t,n,o){return new(n||(n=Promise))((function(r,l){function i(e){try{c(o.next(e))}catch(t){l(t)}}function a(e){try{c(o.throw(e))}catch(t){l(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))};const K=e=>{let{copyConfig:t,children:n}=e;const[r,l]=o.useState(!1),[i,a]=o.useState(!1),c=o.useRef(null),s=()=>{c.current&&clearTimeout(c.current)},d={};t.format&&(d.format=t.format),o.useEffect((()=>s),[]);return{copied:r,copyLoading:i,onClick:(0,G.A)((e=>V(void 0,void 0,void 0,(function*(){var o;null==e||e.preventDefault(),null==e||e.stopPropagation(),a(!0);try{const r="function"==typeof t.text?yield t.text():t.text;F()(r||function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&null==e?[]:Array.isArray(e)?e:[e]}(n,!0).join("")||"",d),a(!1),l(!0),s(),c.current=setTimeout((()=>{l(!1)}),3e3),null===(o=t.onCopy)||void 0===o||o.call(t,e)}catch(r){throw a(!1),r}}))))}};function X(e,t){return o.useMemo((()=>{const n=!!e;return[n,Object.assign(Object.assign({},t),n&&"object"==typeof e?e:null)]}),[e])}const q=e=>{const t=(0,o.useRef)(void 0);return(0,o.useEffect)((()=>{t.current=e})),t.current},_=(e,t,n)=>(0,o.useMemo)((()=>!0===e?{title:null!=t?t:n}:(0,o.isValidElement)(e)?{title:e}:"object"==typeof e?Object.assign({title:null!=t?t:n},e):{title:e}),[e,t,n]);var U=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const Q=o.forwardRef(((e,t)=>{const{prefixCls:n,component:r="article",className:l,rootClassName:i,setContentRef:a,children:c,direction:s,style:u}=e,p=U(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:f,direction:m,typography:g}=o.useContext(x.QO),v=null!=s?s:m,y=a?(0,b.K4)(t,a):t,h=f("typography",n);const[O,$,C]=H(h),w=d()(h,null==g?void 0:g.className,{[`${h}-rtl`]:"rtl"===v},l,i,$,C),E=Object.assign(Object.assign({},null==g?void 0:g.style),u);return O(o.createElement(r,Object.assign({className:w,style:E,ref:y},p),c))}));const Y=Q;var J=n(56724);const Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};var ee=function(e,t){return o.createElement(i.A,(0,r.A)({},e,{ref:t,icon:Z}))};const te=o.forwardRef(ee);var ne=n(43673);function oe(e){return!1===e?[!1,!1]:Array.isArray(e)?e:[e]}function re(e,t,n){return!0===e||void 0===e?t:e||n&&t}const le=e=>["string","number"].includes(typeof e),ie=e=>{let{prefixCls:t,copied:n,locale:r,iconOnly:l,tooltips:i,icon:a,tabIndex:c,onCopy:s,loading:u}=e;const p=oe(i),f=oe(a),{copied:m,copy:g}=null!=r?r:{},b=n?m:g,v=re(p[n?1:0],b),y="string"==typeof v?v:b;return o.createElement($.A,{title:v},o.createElement("button",{type:"button",className:d()(`${t}-copy`,{[`${t}-copy-success`]:n,[`${t}-copy-icon-only`]:l}),onClick:s,"aria-label":y,tabIndex:c},n?re(f[1],o.createElement(J.A,null),!0):re(f[0],u?o.createElement(ne.A,null):o.createElement(te,null),!0)))};var ae=n(32277);const ce=o.forwardRef(((e,t)=>{let{style:n,children:r}=e;const l=o.useRef(null);return o.useImperativeHandle(t,(()=>({isExceed:()=>{const e=l.current;return e.scrollHeight>e.clientHeight},getHeight:()=>l.current.clientHeight}))),o.createElement("span",{"aria-hidden":!0,ref:l,style:Object.assign({position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)"},n)},r)}));function se(e,t){let n=0;const o=[];for(let r=0;r<e.length;r+=1){if(n===t)return o;const l=e[r],i=n+(le(l)?String(l).length:1);if(i>t){const e=t-n;return o.push(String(l).slice(0,e)),o}o.push(l),n=i}return e}const de=0,ue=4,pe={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function fe(e){const{enableMeasure:t,width:n,text:r,children:l,rows:i,expanded:a,miscDeps:c,onEllipsis:s}=e,d=o.useMemo((()=>(0,p.A)(r)),[r]),u=o.useMemo((()=>(e=>e.reduce(((e,t)=>e+(le(t)?String(t).length:1)),0))(d)),[r]),m=o.useMemo((()=>l(d,!1)),[r]),[g,b]=o.useState(null),v=o.useRef(null),y=o.useRef(null),h=o.useRef(null),x=o.useRef(null),O=o.useRef(null),[$,C]=o.useState(!1),[w,E]=o.useState(de),[S,k]=o.useState(0),[j,A]=o.useState(null);(0,f.A)((()=>{E(t&&n&&u?1:de)}),[n,r,i,t,d]),(0,f.A)((()=>{var e,t,n,o;if(1===w){E(2);const e=y.current&&getComputedStyle(y.current).whiteSpace;A(e)}else if(2===w){const r=!!(null===(e=h.current)||void 0===e?void 0:e.isExceed());E(r?3:ue),b(r?[0,u]:null),C(r);const l=(null===(t=h.current)||void 0===t?void 0:t.getHeight())||0,a=1===i?0:(null===(n=x.current)||void 0===n?void 0:n.getHeight())||0,c=(null===(o=O.current)||void 0===o?void 0:o.getHeight())||0,d=Math.max(l,a+c);k(d+1),s(r)}}),[w]);const z=g?Math.ceil((g[0]+g[1])/2):0;(0,f.A)((()=>{var e;const[t,n]=g||[0,0];if(t!==n){const o=((null===(e=v.current)||void 0===e?void 0:e.getHeight())||0)>S;let r=z;n-t==1&&(r=o?t:n),b(o?[t,r]:[r,n])}}),[g,z]);const I=o.useMemo((()=>{if(!t)return l(d,!1);if(3!==w||!g||g[0]!==g[1]){const e=l(d,!1);return[ue,de].includes(w)?e:o.createElement("span",{style:Object.assign(Object.assign({},pe),{WebkitLineClamp:i})},e)}return l(a?d:se(d,g[0]),$)}),[a,w,g,d].concat((0,ae.A)(c))),P={width:n,margin:0,padding:0,whiteSpace:"nowrap"===j?"normal":"inherit"};return o.createElement(o.Fragment,null,I,2===w&&o.createElement(o.Fragment,null,o.createElement(ce,{style:Object.assign(Object.assign(Object.assign({},P),pe),{WebkitLineClamp:i}),ref:h},m),o.createElement(ce,{style:Object.assign(Object.assign(Object.assign({},P),pe),{WebkitLineClamp:i-1}),ref:x},m),o.createElement(ce,{style:Object.assign(Object.assign(Object.assign({},P),pe),{WebkitLineClamp:1}),ref:O},l([],!0))),3===w&&g&&g[0]!==g[1]&&o.createElement(ce,{style:Object.assign(Object.assign({},P),{top:400}),ref:v},l(se(d,z),!0)),1===w&&o.createElement("span",{style:{whiteSpace:"inherit"},ref:y}))}const me=e=>{let{enableEllipsis:t,isEllipsis:n,children:r,tooltipProps:l}=e;return(null==l?void 0:l.title)&&t?o.createElement($.A,Object.assign({open:!!n&&void 0},l),r):r};var ge=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const be=o.forwardRef(((e,t)=>{var n;const{prefixCls:r,className:l,style:i,type:a,disabled:s,children:v,ellipsis:y,editable:C,copyable:w,component:E,title:S}=e,k=ge(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:j,direction:A}=o.useContext(x.QO),[z]=(0,O.A)("Text"),I=o.useRef(null),P=o.useRef(null),N=j("typography",r),M=(0,g.A)(k,["mark","code","delete","underline","strong","keyboard","italic"]),[R,B]=X(C),[D,T]=(0,m.A)(!1,{value:B.editing}),{triggerType:H=["icon"]}=B,L=e=>{var t;e&&(null===(t=B.onStart)||void 0===t||t.call(B)),T(e)},F=q(D);(0,f.A)((()=>{var e;!D&&F&&(null===(e=P.current)||void 0===e||e.focus())}),[D]);const G=e=>{null==e||e.preventDefault(),L(!0)},V=e=>{var t;null===(t=B.onChange)||void 0===t||t.call(B,e),L(!1)},U=()=>{var e;null===(e=B.onCancel)||void 0===e||e.call(B),L(!1)},[Q,J]=X(w),{copied:Z,copyLoading:ee,onClick:te}=K({copyConfig:J,children:v}),[ne,oe]=o.useState(!1),[re,ae]=o.useState(!1),[ce,se]=o.useState(!1),[de,ue]=o.useState(!1),[pe,be]=o.useState(!0),[ve,ye]=X(y,{expandable:!1,symbol:e=>e?null==z?void 0:z.collapse:null==z?void 0:z.expand}),[he,xe]=(0,m.A)(ye.defaultExpanded||!1,{value:ye.expanded}),Oe=ve&&(!he||"collapsible"===ye.expandable),{rows:$e=1}=ye,Ce=o.useMemo((()=>Oe&&(void 0!==ye.suffix||ye.onEllipsis||ye.expandable||R||Q)),[Oe,ye,R,Q]);(0,f.A)((()=>{ve&&!Ce&&(oe(h("webkitLineClamp")),ae(h("textOverflow")))}),[Ce,ve]);const[we,Ee]=o.useState(Oe),Se=o.useMemo((()=>!Ce&&(1===$e?re:ne)),[Ce,re,ne]);(0,f.A)((()=>{Ee(Se&&Oe)}),[Se,Oe]);const ke=Oe&&(we?de:ce),je=Oe&&1===$e&&we,Ae=Oe&&$e>1&&we,[ze,Ie]=o.useState(0),Pe=e=>{var t;se(e),ce!==e&&(null===(t=ye.onEllipsis)||void 0===t||t.call(ye,e))};o.useEffect((()=>{const e=I.current;if(ve&&we&&e){const t=function(e){const t=document.createElement("em");e.appendChild(t);const n=e.getBoundingClientRect(),o=t.getBoundingClientRect();return e.removeChild(t),n.left>o.left||o.right>n.right||n.top>o.top||o.bottom>n.bottom}(e);de!==t&&ue(t)}}),[ve,we,v,Ae,pe,ze]),o.useEffect((()=>{const e=I.current;if("undefined"==typeof IntersectionObserver||!e||!we||!Oe)return;const t=new IntersectionObserver((()=>{be(!!e.offsetParent)}));return t.observe(e),()=>{t.disconnect()}}),[we,Oe]);const Ne=_(ye.tooltip,B.text,v),Me=o.useMemo((()=>{if(ve&&!we)return[B.text,v,S,Ne.title].find(le)}),[ve,we,S,Ne.title,ke]);if(D)return o.createElement(W,{value:null!==(n=B.text)&&void 0!==n?n:"string"==typeof v?v:"",onSave:V,onCancel:U,onEnd:B.onEnd,prefixCls:N,className:l,style:i,direction:A,component:E,maxLength:B.maxLength,autoSize:B.autoSize,enterIcon:B.enterIcon});const Re=()=>{const{expandable:e,symbol:t}=ye;return e?o.createElement("button",{type:"button",key:"expand",className:`${N}-${he?"collapse":"expand"}`,onClick:e=>((e,t)=>{var n;xe(t.expanded),null===(n=ye.onExpand)||void 0===n||n.call(ye,e,t)})(e,{expanded:!he}),"aria-label":he?z.collapse:null==z?void 0:z.expand},"function"==typeof t?t(he):t):null},Be=()=>{if(!R)return;const{icon:e,tooltip:t,tabIndex:n}=B,r=(0,p.A)(t)[0]||(null==z?void 0:z.edit),l="string"==typeof r?r:"";return H.includes("icon")?o.createElement($.A,{key:"edit",title:!1===t?"":r},o.createElement("button",{type:"button",ref:P,className:`${N}-edit`,onClick:G,"aria-label":l,tabIndex:n},e||o.createElement(c,{role:"button"}))):null},De=e=>[e&&Re(),Be(),Q?o.createElement(ie,Object.assign({key:"copy"},J,{prefixCls:N,copied:Z,locale:z,onCopy:te,loading:ee,iconOnly:null==v})):null];return o.createElement(u.A,{onResize:e=>{let{offsetWidth:t}=e;Ie(t)},disabled:!Oe},(n=>o.createElement(me,{tooltipProps:Ne,enableEllipsis:Oe,isEllipsis:ke},o.createElement(Y,Object.assign({className:d()({[`${N}-${a}`]:a,[`${N}-disabled`]:s,[`${N}-ellipsis`]:ve,[`${N}-ellipsis-single-line`]:je,[`${N}-ellipsis-multiple-line`]:Ae},l),prefixCls:r,style:Object.assign(Object.assign({},i),{WebkitLineClamp:Ae?$e:void 0}),component:E,ref:(0,b.K4)(n,I,t),direction:A,onClick:H.includes("text")?G:void 0,"aria-label":null==Me?void 0:Me.toString(),title:S},M),o.createElement(fe,{enableMeasure:Oe&&!we,text:v,rows:$e,width:ze,onEllipsis:Pe,expanded:he,miscDeps:[Z,he,ee,R,Q,z]},((t,n)=>function(e,t){let{mark:n,code:r,underline:l,delete:i,strong:a,keyboard:c,italic:s}=e,d=t;function u(e,t){t&&(d=o.createElement(e,{},d))}return u("strong",a),u("u",l),u("del",i),u("code",r),u("mark",n),u("kbd",c),u("i",s),d}(e,o.createElement(o.Fragment,null,t.length>0&&n&&!he&&Me?o.createElement("span",{key:"show-content","aria-hidden":!0},t):t,(e=>[e&&!he&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),ye.suffix,De(e)])(n)))))))))})),ve=be;var ye=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const he=o.forwardRef(((e,t)=>{var{ellipsis:n,rel:r}=e,l=ye(e,["ellipsis","rel"]);const i=Object.assign(Object.assign({},l),{rel:void 0===r&&"_blank"===l.target?"noopener noreferrer":r});return delete i.navigate,o.createElement(ve,Object.assign({},i,{ref:t,ellipsis:!!n,component:"a"}))})),xe=o.forwardRef(((e,t)=>o.createElement(ve,Object.assign({ref:t},e,{component:"div"}))));var Oe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const $e=(e,t)=>{var{ellipsis:n}=e,r=Oe(e,["ellipsis"]);const l=o.useMemo((()=>n&&"object"==typeof n?(0,g.A)(n,["expandable","rows"]):n),[n]);return o.createElement(ve,Object.assign({ref:t},r,{ellipsis:l,component:"span"}))},Ce=o.forwardRef($e);var we=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const Ee=[1,2,3,4,5],Se=o.forwardRef(((e,t)=>{const{level:n=1}=e,r=we(e,["level"]);const l=Ee.includes(n)?`h${n}`:"h1";return o.createElement(ve,Object.assign({ref:t},r,{component:l}))})),ke=Y;ke.Text=Ce,ke.Link=he,ke.Title=Se,ke.Paragraph=xe;const je=ke},83042:(e,t,n)=>{"use strict";var o=n(35664),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,l,i,a,c,s,d=!1;t||(t={}),n=t.debug||!1;try{if(i=o(),a=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var l=r[t.format]||r.default;window.clipboardData.setData(l,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(s),a.selectNodeContents(s),c.addRange(a),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(u){n&&console.error("unable to copy using execCommand: ",u),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(u){n&&console.error("unable to copy using clipboardData: ",u),n&&console.error("falling back to prompt"),l=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(l,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(a):c.removeAllRanges()),s&&document.body.removeChild(s),i()}return d}},35664:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},8556:(e,t,n)=>{"use strict";n.d(t,{R:()=>i,x:()=>a});var o=n(58101);const r={},l=o.createContext(r);function i(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);