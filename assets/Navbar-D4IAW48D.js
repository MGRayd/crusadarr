import{n as Ne,r as u,R as ze,j as o,o as Ue,b as H,h as He,p as Fe,q as Ge,u as Ve,a as Oe}from"./index-B3TWa7dk.js";import{O as Qe,w as Ye,c as G,g as Q,s as A,m as F,k as Y,H as xe,Q as Xe,v as ge,f as E,h as X,R as ke,U as fe,E as ae,u as Ke,n as be,d as _e,j as qe,V as Ze,W as Ae,o as Je,X as et,Y as tt,M as ot,K as Se,Z as rt,r as nt,N as se,_ as st,$ as Ce,a0 as Re,T as v,i as ye,B as ue,I as K,L as at}from"./TextField-BQnlWjKZ.js";function it(e,t,r,n,s){const[a,c]=u.useState(()=>s&&r?r(e).matches:n?n(e).matches:t);return Ye(()=>{if(!r)return;const i=r(e),l=()=>{c(i.matches)};return l(),i.addEventListener("change",l),()=>{i.removeEventListener("change",l)}},[e,r]),a}const lt={...ze},Ie=lt.useSyncExternalStore;function ct(e,t,r,n,s){const a=u.useCallback(()=>t,[t]),c=u.useMemo(()=>{if(s&&r)return()=>r(e).matches;if(n!==null){const{matches:p}=n(e);return()=>p}return a},[a,e,n,s,r]),[i,l]=u.useMemo(()=>{if(r===null)return[a,()=>()=>{}];const p=r(e);return[()=>p.matches,g=>(p.addEventListener("change",g),()=>{p.removeEventListener("change",g)})]},[a,r,e]);return Ie(l,i,c)}function dt(e={}){const{themeId:t}=e;return function(n,s={}){let a=Ne();a&&t&&(a=a[t]||a);const c=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:i=!1,matchMedia:l=c?window.matchMedia:null,ssrMatchMedia:d=null,noSsr:p=!1}=Qe({name:"MuiUseMediaQuery",props:s,theme:a});let g=typeof n=="function"?n(a):n;return g=g.replace(/^@media( ?)/m,""),(Ie!==void 0?ct:it)(g,i,l,d,p)}}function pt(e){return Q("MuiCollapse",e)}G("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const ut=e=>{const{orientation:t,classes:r}=e,n={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return X(n,pt,r)},ft=A("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.orientation],r.state==="entered"&&t.entered,r.state==="exited"&&!r.in&&r.collapsedSize==="0px"&&t.hidden]}})(F(({theme:e})=>({height:0,overflow:"hidden",transition:e.transitions.create("height"),variants:[{props:{orientation:"horizontal"},style:{height:"auto",width:0,transition:e.transitions.create("width")}},{props:{state:"entered"},style:{height:"auto",overflow:"visible"}},{props:{state:"entered",orientation:"horizontal"},style:{width:"auto"}},{props:({ownerState:t})=>t.state==="exited"&&!t.in&&t.collapsedSize==="0px",style:{visibility:"hidden"}}]}))),xt=A("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})({display:"flex",width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),mt=A("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})({width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),he=u.forwardRef(function(t,r){const n=Y({props:t,name:"MuiCollapse"}),{addEndListener:s,children:a,className:c,collapsedSize:i="0px",component:l,easing:d,in:p,onEnter:g,onEntered:C,onEntering:w,onExit:f,onExited:R,onExiting:b,orientation:m="vertical",style:N,timeout:S=Ue.standard,TransitionComponent:P=ke,...z}=n,M={...n,orientation:m,collapsedSize:i},y=ut(M),T=xe(),L=Xe(),j=u.useRef(null),I=u.useRef(),$=typeof i=="number"?`${i}px`:i,D=m==="horizontal",B=D?"width":"height",W=u.useRef(null),U=ge(r,W),V=h=>O=>{if(h){const _=W.current;O===void 0?h(_):h(_,O)}},x=()=>j.current?j.current[D?"clientWidth":"clientHeight"]:0,k=V((h,O)=>{j.current&&D&&(j.current.style.position="absolute"),h.style[B]=$,g&&g(h,O)}),ie=V((h,O)=>{const _=x();j.current&&D&&(j.current.style.position="");const{duration:ee,easing:le}=fe({style:N,timeout:S,easing:d},{mode:"enter"});if(S==="auto"){const ve=T.transitions.getAutoHeightDuration(_);h.style.transitionDuration=`${ve}ms`,I.current=ve}else h.style.transitionDuration=typeof ee=="string"?ee:`${ee}ms`;h.style[B]=`${_}px`,h.style.transitionTimingFunction=le,w&&w(h,O)}),Be=V((h,O)=>{h.style[B]="auto",C&&C(h,O)}),Ee=V(h=>{h.style[B]=`${x()}px`,f&&f(h)}),Pe=V(R),Le=V(h=>{const O=x(),{duration:_,easing:ee}=fe({style:N,timeout:S,easing:d},{mode:"exit"});if(S==="auto"){const le=T.transitions.getAutoHeightDuration(O);h.style.transitionDuration=`${le}ms`,I.current=le}else h.style.transitionDuration=typeof _=="string"?_:`${_}ms`;h.style[B]=$,h.style.transitionTimingFunction=ee,b&&b(h)}),We=h=>{S==="auto"&&L.start(I.current||0,h),s&&s(W.current,h)};return o.jsx(P,{in:p,onEnter:k,onEntered:Be,onEntering:ie,onExit:Ee,onExited:Pe,onExiting:Le,addEndListener:We,nodeRef:W,timeout:S==="auto"?null:S,...z,children:(h,O)=>o.jsx(ft,{as:l,className:E(y.root,c,{entered:y.entered,exited:!p&&$==="0px"&&y.hidden}[h]),style:{[D?"minWidth":"minHeight"]:$,...N},ref:U,...O,ownerState:{...M,state:h},children:o.jsx(xt,{ownerState:{...M,state:h},className:y.wrapper,ref:j,children:o.jsx(mt,{ownerState:{...M,state:h},className:y.wrapperInner,children:a})})})})});he&&(he.muiSupportAuto=!0);const De=u.createContext({});function ht(e){return Q("MuiAccordion",e)}const ce=G("MuiAccordion",["root","heading","rounded","expanded","disabled","gutters","region"]),gt=e=>{const{classes:t,square:r,expanded:n,disabled:s,disableGutters:a}=e;return X({root:["root",!r&&"rounded",n&&"expanded",s&&"disabled",!a&&"gutters"],heading:["heading"],region:["region"]},ht,t)},yt=A(ae,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${ce.region}`]:t.region},t.root,!r.square&&t.rounded,!r.disableGutters&&t.gutters]}})(F(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${ce.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${ce.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),F(({theme:e})=>({variants:[{props:t=>!t.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:t=>!t.disableGutters,style:{[`&.${ce.expanded}`]:{margin:"16px 0"}}}]}))),vt=A("h3",{name:"MuiAccordion",slot:"Heading",overridesResolver:(e,t)=>t.heading})({all:"unset"}),te=u.forwardRef(function(t,r){const n=Y({props:t,name:"MuiAccordion"}),{children:s,className:a,defaultExpanded:c=!1,disabled:i=!1,disableGutters:l=!1,expanded:d,onChange:p,square:g=!1,slots:C={},slotProps:w={},TransitionComponent:f,TransitionProps:R,...b}=n,[m,N]=Ke({controlled:d,default:c,name:"Accordion",state:"expanded"}),S=u.useCallback(U=>{N(!m),p&&p(U,!m)},[m,p,N]),[P,...z]=u.Children.toArray(s),M=u.useMemo(()=>({expanded:m,disabled:i,disableGutters:l,toggle:S}),[m,i,l,S]),y={...n,square:g,disabled:i,disableGutters:l,expanded:m},T=gt(y),L={transition:f,...C},j={transition:R,...w},I={slots:L,slotProps:j},[$,D]=be("heading",{elementType:vt,externalForwardedProps:I,className:T.heading,ownerState:y}),[B,W]=be("transition",{elementType:he,externalForwardedProps:I,ownerState:y});return o.jsxs(yt,{className:E(T.root,a),ref:r,ownerState:y,square:g,...b,children:[o.jsx($,{...D,children:o.jsx(De.Provider,{value:M,children:P})}),o.jsx(B,{in:m,timeout:"auto",...W,children:o.jsx("div",{"aria-labelledby":P.props.id,id:P.props["aria-controls"],role:"region",className:T.region,children:z})})]})});function bt(e){return Q("MuiAccordionDetails",e)}G("MuiAccordionDetails",["root"]);const Ct=e=>{const{classes:t}=e;return X({root:["root"]},bt,t)},Rt=A("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})(F(({theme:e})=>({padding:e.spacing(1,2,2)}))),oe=u.forwardRef(function(t,r){const n=Y({props:t,name:"MuiAccordionDetails"}),{className:s,...a}=n,c=n,i=Ct(c);return o.jsx(Rt,{className:E(i.root,s),ref:r,ownerState:c,...a})});function wt(e){return Q("MuiAccordionSummary",e)}const J=G("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),jt=e=>{const{classes:t,expanded:r,disabled:n,disableGutters:s}=e;return X({root:["root",r&&"expanded",n&&"disabled",!s&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!s&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},wt,t)},kt=A(_e,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})(F(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${J.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${J.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${J.disabled})`]:{cursor:"pointer"},variants:[{props:r=>!r.disableGutters,style:{[`&.${J.expanded}`]:{minHeight:64}}}]}})),At=A("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})(F(({theme:e})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:t=>!t.disableGutters,style:{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${J.expanded}`]:{margin:"20px 0"}}}]}))),St=A("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})(F(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${J.expanded}`]:{transform:"rotate(180deg)"}}))),re=u.forwardRef(function(t,r){const n=Y({props:t,name:"MuiAccordionSummary"}),{children:s,className:a,expandIcon:c,focusVisibleClassName:i,onClick:l,...d}=n,{disabled:p=!1,disableGutters:g,expanded:C,toggle:w}=u.useContext(De),f=m=>{w&&w(m),l&&l(m)},R={...n,expanded:C,disabled:p,disableGutters:g},b=jt(R);return o.jsxs(kt,{focusRipple:!1,disableRipple:!0,disabled:p,component:"div","aria-expanded":C,className:E(b.root,a),focusVisibleClassName:E(b.focusVisible,i),onClick:f,ref:r,ownerState:R,...d,children:[o.jsx(At,{className:b.content,ownerState:R,children:s}),c&&o.jsx(St,{className:b.expandIconWrapper,ownerState:R,children:c})]})});function It(e){return Q("MuiAppBar",e)}G("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const Dt=e=>{const{color:t,position:r,classes:n}=e,s={root:["root",`color${H(t)}`,`position${H(r)}`]};return X(s,It,n)},we=(e,t)=>e?`${e==null?void 0:e.replace(")","")}, ${t})`:t,Mt=A(ae,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`position${H(r.position)}`],t[`color${H(r.color)}`]]}})(F(({theme:e})=>({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":e.vars?e.vars.palette.AppBar.defaultBg:e.palette.grey[100],"--AppBar-color":e.vars?e.vars.palette.text.primary:e.palette.getContrastText(e.palette.grey[100]),...e.applyStyles("dark",{"--AppBar-background":e.vars?e.vars.palette.AppBar.defaultBg:e.palette.grey[900],"--AppBar-color":e.vars?e.vars.palette.text.primary:e.palette.getContrastText(e.palette.grey[900])})}},...Object.entries(e.palette).filter(qe(["contrastText"])).map(([t])=>({props:{color:t},style:{"--AppBar-background":(e.vars??e).palette[t].main,"--AppBar-color":(e.vars??e).palette[t].contrastText}})),{props:t=>t.enableColorOnDark===!0&&!["inherit","transparent"].includes(t.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:t=>t.enableColorOnDark===!1&&!["inherit","transparent"].includes(t.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...e.applyStyles("dark",{backgroundColor:e.vars?we(e.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:e.vars?we(e.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...e.applyStyles("dark",{backgroundImage:"none"})}}]}))),Tt=u.forwardRef(function(t,r){const n=Y({props:t,name:"MuiAppBar"}),{className:s,color:a="primary",enableColorOnDark:c=!1,position:i="fixed",...l}=n,d={...n,color:a,position:i,enableColorOnDark:c},p=Dt(d);return o.jsx(Mt,{square:!0,component:"header",ownerState:d,elevation:4,className:E(p.root,s,i==="fixed"&&"mui-fixed"),ref:r,...l})});function $t(e){return Q("MuiDialog",e)}const me=G("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),Bt=u.createContext({}),Et=A(Ze,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),Pt=e=>{const{classes:t,scroll:r,maxWidth:n,fullWidth:s,fullScreen:a}=e,c={root:["root"],container:["container",`scroll${H(r)}`],paper:["paper",`paperScroll${H(r)}`,`paperWidth${H(String(n))}`,s&&"paperFullWidth",a&&"paperFullScreen"]};return X(c,$t,t)},Lt=A(Ae,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),Wt=A("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.container,t[`scroll${H(r.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),Nt=A(ae,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.paper,t[`scrollPaper${H(r.scroll)}`],t[`paperWidth${H(String(r.maxWidth))}`],r.fullWidth&&t.paperFullWidth,r.fullScreen&&t.paperFullScreen]}})(F(({theme:e})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:t})=>!t.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${me.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(e.breakpoints.values).filter(t=>t!=="xs").map(t=>({props:{maxWidth:t},style:{maxWidth:`${e.breakpoints.values[t]}${e.breakpoints.unit}`,[`&.${me.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:t})=>t.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:t})=>t.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${me.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),zt=u.forwardRef(function(t,r){const n=Y({props:t,name:"MuiDialog"}),s=xe(),a={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":c,"aria-labelledby":i,"aria-modal":l=!0,BackdropComponent:d,BackdropProps:p,children:g,className:C,disableEscapeKeyDown:w=!1,fullScreen:f=!1,fullWidth:R=!1,maxWidth:b="sm",onBackdropClick:m,onClick:N,onClose:S,open:P,PaperComponent:z=ae,PaperProps:M={},scroll:y="paper",TransitionComponent:T=et,transitionDuration:L=a,TransitionProps:j,...I}=n,$={...n,disableEscapeKeyDown:w,fullScreen:f,fullWidth:R,maxWidth:b,scroll:y},D=Pt($),B=u.useRef(),W=k=>{B.current=k.target===k.currentTarget},U=k=>{N&&N(k),B.current&&(B.current=null,m&&m(k),S&&S(k,"backdropClick"))},V=Je(i),x=u.useMemo(()=>({titleId:V}),[V]);return o.jsx(Lt,{className:E(D.root,C),closeAfterTransition:!0,components:{Backdrop:Et},componentsProps:{backdrop:{transitionDuration:L,as:d,...p}},disableEscapeKeyDown:w,onClose:S,open:P,ref:r,onClick:U,ownerState:$,...I,children:o.jsx(T,{appear:!0,in:P,timeout:L,role:"presentation",...j,children:o.jsx(Wt,{className:E(D.container),onMouseDown:W,ownerState:$,children:o.jsx(Nt,{as:z,elevation:24,role:"dialog","aria-describedby":c,"aria-labelledby":V,"aria-modal":l,...M,className:E(D.paper,M.className),ownerState:$,children:o.jsx(Bt.Provider,{value:x,children:g})})})})})});function Ut(e){return Q("MuiDialogContent",e)}G("MuiDialogContent",["root","dividers"]);const Ht=G("MuiDialogTitle",["root"]),Ft=e=>{const{classes:t,dividers:r}=e;return X({root:["root",r&&"dividers"]},Ut,t)},Gt=A("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dividers&&t.dividers]}})(F(({theme:e})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:t})=>t.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:t})=>!t.dividers,style:{[`.${Ht.root} + &`]:{paddingTop:0}}}]}))),Vt=u.forwardRef(function(t,r){const n=Y({props:t,name:"MuiDialogContent"}),{className:s,dividers:a=!1,...c}=n,i={...n,dividers:a},l=Ft(i);return o.jsx(Gt,{className:E(l.root,s),ownerState:i,ref:r,...c})});function Ot(e,t,r){const n=t.getBoundingClientRect(),s=r&&r.getBoundingClientRect(),a=Se(t);let c;if(t.fakeTransform)c=t.fakeTransform;else{const d=a.getComputedStyle(t);c=d.getPropertyValue("-webkit-transform")||d.getPropertyValue("transform")}let i=0,l=0;if(c&&c!=="none"&&typeof c=="string"){const d=c.split("(")[1].split(")")[0].split(",");i=parseInt(d[4],10),l=parseInt(d[5],10)}return e==="left"?s?`translateX(${s.right+i-n.left}px)`:`translateX(${a.innerWidth+i-n.left}px)`:e==="right"?s?`translateX(-${n.right-s.left-i}px)`:`translateX(-${n.left+n.width-i}px)`:e==="up"?s?`translateY(${s.bottom+l-n.top}px)`:`translateY(${a.innerHeight+l-n.top}px)`:s?`translateY(-${n.top-s.top+n.height-l}px)`:`translateY(-${n.top+n.height-l}px)`}function Qt(e){return typeof e=="function"?e():e}function de(e,t,r){const n=Qt(r),s=Ot(e,t,n);s&&(t.style.webkitTransform=s,t.style.transform=s)}const Yt=u.forwardRef(function(t,r){const n=xe(),s={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},a={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:c,appear:i=!0,children:l,container:d,direction:p="down",easing:g=s,in:C,onEnter:w,onEntered:f,onEntering:R,onExit:b,onExited:m,onExiting:N,style:S,timeout:P=a,TransitionComponent:z=ke,...M}=t,y=u.useRef(null),T=ge(tt(l),y,r),L=x=>k=>{x&&(k===void 0?x(y.current):x(y.current,k))},j=L((x,k)=>{de(p,x,d),rt(x),w&&w(x,k)}),I=L((x,k)=>{const ie=fe({timeout:P,style:S,easing:g},{mode:"enter"});x.style.webkitTransition=n.transitions.create("-webkit-transform",{...ie}),x.style.transition=n.transitions.create("transform",{...ie}),x.style.webkitTransform="none",x.style.transform="none",R&&R(x,k)}),$=L(f),D=L(N),B=L(x=>{const k=fe({timeout:P,style:S,easing:g},{mode:"exit"});x.style.webkitTransition=n.transitions.create("-webkit-transform",k),x.style.transition=n.transitions.create("transform",k),de(p,x,d),b&&b(x)}),W=L(x=>{x.style.webkitTransition="",x.style.transition="",m&&m(x)}),U=x=>{c&&c(y.current,x)},V=u.useCallback(()=>{y.current&&de(p,y.current,d)},[p,d]);return u.useEffect(()=>{if(C||p==="down"||p==="right")return;const x=ot(()=>{y.current&&de(p,y.current,d)}),k=Se(y.current);return k.addEventListener("resize",x),()=>{x.clear(),k.removeEventListener("resize",x)}},[p,C,d]),u.useEffect(()=>{C||V()},[C,V]),o.jsx(z,{nodeRef:y,onEnter:j,onEntered:$,onEntering:I,onExit:B,onExited:W,onExiting:D,addEndListener:U,appear:i,in:C,timeout:P,...M,children:(x,k)=>u.cloneElement(l,{ref:T,style:{visibility:x==="exited"&&!C?"hidden":void 0,...S,...l.props.style},...k})})});function Xt(e){return Q("MuiDrawer",e)}G("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Me=(e,t)=>{const{ownerState:r}=e;return[t.root,(r.variant==="permanent"||r.variant==="persistent")&&t.docked,t.modal]},Kt=e=>{const{classes:t,anchor:r,variant:n}=e,s={root:["root"],docked:[(n==="permanent"||n==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${H(r)}`,n!=="temporary"&&`paperAnchorDocked${H(r)}`]};return X(s,Xt,t)},_t=A(Ae,{name:"MuiDrawer",slot:"Root",overridesResolver:Me})(F(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer}))),je=A("div",{shouldForwardProp:nt,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Me})({flex:"0 0 auto"}),qt=A(ae,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.paper,t[`paperAnchor${H(r.anchor)}`],r.variant!=="temporary"&&t[`paperAnchorDocked${H(r.anchor)}`]]}})(F(({theme:e})=>({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0,variants:[{props:{anchor:"left"},style:{left:0}},{props:{anchor:"top"},style:{top:0,left:0,right:0,height:"auto",maxHeight:"100%"}},{props:{anchor:"right"},style:{right:0}},{props:{anchor:"bottom"},style:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"}},{props:({ownerState:t})=>t.anchor==="left"&&t.variant!=="temporary",style:{borderRight:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:t})=>t.anchor==="top"&&t.variant!=="temporary",style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:t})=>t.anchor==="right"&&t.variant!=="temporary",style:{borderLeft:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:t})=>t.anchor==="bottom"&&t.variant!=="temporary",style:{borderTop:`1px solid ${(e.vars||e).palette.divider}`}}]}))),Te={left:"right",right:"left",top:"down",bottom:"up"};function Zt(e){return["left","right"].includes(e)}function Jt({direction:e},t){return e==="rtl"&&Zt(t)?Te[t]:t}const eo=u.forwardRef(function(t,r){const n=Y({props:t,name:"MuiDrawer"}),s=xe(),a=He(),c={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:i="left",BackdropProps:l,children:d,className:p,elevation:g=16,hideBackdrop:C=!1,ModalProps:{BackdropProps:w,...f}={},onClose:R,open:b=!1,PaperProps:m={},SlideProps:N,TransitionComponent:S=Yt,transitionDuration:P=c,variant:z="temporary",...M}=n,y=u.useRef(!1);u.useEffect(()=>{y.current=!0},[]);const T=Jt({direction:a?"rtl":"ltr"},i),j={...n,anchor:i,elevation:g,open:b,variant:z,...M},I=Kt(j),$=o.jsx(qt,{elevation:z==="temporary"?g:0,square:!0,...m,className:E(I.paper,m.className),ownerState:j,children:d});if(z==="permanent")return o.jsx(je,{className:E(I.root,I.docked,p),ownerState:j,ref:r,...M,children:$});const D=o.jsx(S,{in:b,direction:Te[T],timeout:P,appear:y.current,...N,children:$});return z==="persistent"?o.jsx(je,{className:E(I.root,I.docked,p),ownerState:j,ref:r,...M,children:D}):o.jsx(_t,{BackdropProps:{...l,...w,transitionDuration:P},className:E(I.root,I.modal,p),open:b,ownerState:j,onClose:R,hideBackdrop:C,ref:r,...M,...f,children:D})}),to=dt({themeId:Fe});function oo(e){return Q("MuiListItem",e)}G("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);const ro=G("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function no(e){return Q("MuiListItemSecondaryAction",e)}G("MuiListItemSecondaryAction",["root","disableGutters"]);const so=e=>{const{disableGutters:t,classes:r}=e;return X({root:["root",t&&"disableGutters"]},no,r)},ao=A("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:e})=>e.disableGutters,style:{right:0}}]}),$e=u.forwardRef(function(t,r){const n=Y({props:t,name:"MuiListItemSecondaryAction"}),{className:s,...a}=n,c=u.useContext(se),i={...n,disableGutters:c.disableGutters},l=so(i);return o.jsx(ao,{className:E(l.root,s),ownerState:i,ref:r,...a})});$e.muiName="ListItemSecondaryAction";const io=(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.alignItems==="flex-start"&&t.alignItemsFlexStart,r.divider&&t.divider,!r.disableGutters&&t.gutters,!r.disablePadding&&t.padding,r.hasSecondaryAction&&t.secondaryAction]},lo=e=>{const{alignItems:t,classes:r,dense:n,disableGutters:s,disablePadding:a,divider:c,hasSecondaryAction:i}=e;return X({root:["root",n&&"dense",!s&&"gutters",!a&&"padding",c&&"divider",t==="flex-start"&&"alignItemsFlexStart",i&&"secondaryAction"],container:["container"]},oo,r)},co=A("div",{name:"MuiListItem",slot:"Root",overridesResolver:io})(F(({theme:e})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:t})=>!t.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:t})=>!t.disablePadding&&t.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:t})=>!t.disablePadding&&!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>!t.disablePadding&&!!t.secondaryAction,style:{paddingRight:48}},{props:({ownerState:t})=>!!t.secondaryAction,style:{[`& > .${ro.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>t.button,style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:t})=>t.hasSecondaryAction,style:{paddingRight:48}}]}))),po=A("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),q=u.forwardRef(function(t,r){const n=Y({props:t,name:"MuiListItem"}),{alignItems:s="center",children:a,className:c,component:i,components:l={},componentsProps:d={},ContainerComponent:p="li",ContainerProps:{className:g,...C}={},dense:w=!1,disableGutters:f=!1,disablePadding:R=!1,divider:b=!1,secondaryAction:m,slotProps:N={},slots:S={},...P}=n,z=u.useContext(se),M=u.useMemo(()=>({dense:w||z.dense||!1,alignItems:s,disableGutters:f}),[s,z.dense,w,f]),y=u.useRef(null),T=u.Children.toArray(a),L=T.length&&st(T[T.length-1],["ListItemSecondaryAction"]),j={...n,alignItems:s,dense:M.dense,disableGutters:f,disablePadding:R,divider:b,hasSecondaryAction:L},I=lo(j),$=ge(y,r),D=S.root||l.Root||co,B=N.root||d.root||{},W={className:E(I.root,B.className,c),...P};let U=i||"li";return L?(U=!W.component&&!i?"div":U,p==="li"&&(U==="li"?U="div":W.component==="li"&&(W.component="div")),o.jsx(se.Provider,{value:M,children:o.jsxs(po,{as:p,className:E(I.container,g),ref:$,ownerState:j,...C,children:[o.jsx(D,{...B,...!Ce(D)&&{as:U,ownerState:{...j,...B.ownerState}},...W,children:T}),T.pop()]})})):o.jsx(se.Provider,{value:M,children:o.jsxs(D,{...B,as:U,ref:$,...!Ce(D)&&{ownerState:{...j,...B.ownerState}},...W,children:[T,m&&o.jsx($e,{children:m})]})})});function uo(e){return Q("MuiListItemText",e)}const pe=G("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),fo=e=>{const{classes:t,inset:r,primary:n,secondary:s,dense:a}=e;return X({root:["root",r&&"inset",a&&"dense",n&&s&&"multiline"],primary:["primary"],secondary:["secondary"]},uo,t)},xo=A("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${pe.primary}`]:t.primary},{[`& .${pe.secondary}`]:t.secondary},t.root,r.inset&&t.inset,r.primary&&r.secondary&&t.multiline,r.dense&&t.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${Re.root}:where(& .${pe.primary})`]:{display:"block"},[`.${Re.root}:where(& .${pe.secondary})`]:{display:"block"},variants:[{props:({ownerState:e})=>e.primary&&e.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:e})=>e.inset,style:{paddingLeft:56}}]}),Z=u.forwardRef(function(t,r){const n=Y({props:t,name:"MuiListItemText"}),{children:s,className:a,disableTypography:c=!1,inset:i=!1,primary:l,primaryTypographyProps:d,secondary:p,secondaryTypographyProps:g,...C}=n,{dense:w}=u.useContext(se);let f=l??s,R=p;const b={...n,disableTypography:c,inset:i,primary:!!f,secondary:!!R,dense:w},m=fo(b);return f!=null&&f.type!==v&&!c&&(f=o.jsx(v,{variant:w?"body2":"body1",className:m.primary,component:d!=null&&d.variant?void 0:"span",...d,children:f})),R!=null&&R.type!==v&&!c&&(R=o.jsx(v,{variant:"body2",className:m.secondary,color:"textSecondary",...g,children:R})),o.jsxs(xo,{className:E(m.root,a),ownerState:b,ref:r,...C,children:[f,R]})});function mo(e){return Q("MuiToolbar",e)}G("MuiToolbar",["root","gutters","regular","dense"]);const ho=e=>{const{classes:t,disableGutters:r,variant:n}=e;return X({root:["root",!r&&"gutters",n]},mo,t)},go=A("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})(F(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:e.mixins.toolbar}]}))),yo=u.forwardRef(function(t,r){const n=Y({props:t,name:"MuiToolbar"}),{className:s,component:a="div",disableGutters:c=!1,variant:i="regular",...l}=n,d={...n,component:a,disableGutters:c,variant:i},p=ho(d);return o.jsx(go,{as:a,className:E(p.root,s),ref:r,ownerState:d,...l})}),vo=ye(o.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu"),bo=ye(o.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),ne=ye(o.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),Co=({open:e,onClose:t})=>{const[r,n]=Ge.useState(!1),s=a=>(c,i)=>{n(i?a:!1)};return o.jsxs(zt,{open:e,onClose:t,maxWidth:"md",fullWidth:!0,PaperProps:{style:{backgroundColor:"#333333",color:"#ffffff"}},children:[o.jsxs(ue,{sx:{p:2,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[o.jsx(v,{variant:"h6",children:"About"}),o.jsx(K,{"aria-label":"close",onClick:t,sx:{color:"#ffffff"},children:o.jsx(bo,{})})]}),o.jsxs(Vt,{children:[o.jsxs(te,{expanded:r==="panel0",onChange:s("panel0"),children:[o.jsx(re,{expandIcon:o.jsx(ne,{sx:{color:"#ffffff"}}),children:o.jsx(v,{variant:"body1",children:"About Me"})}),o.jsxs(oe,{children:[o.jsx(v,{children:"Hi, I'm Mark! I'm 42 years old and this is my first Web App CRUSADARR."}),o.jsx(v,{sx:{mt:1},children:"I've been a fan of Warhammer 40K for years, and playing Crusade games with friends is a great way to spend some free time. I developed Crusadarr to make it easier for us to track missions, unit progress, and command points during our games."})]})]}),o.jsxs(te,{expanded:r==="panel1",onChange:s("panel1"),children:[o.jsx(re,{expandIcon:o.jsx(ne,{sx:{color:"#ffffff"}}),children:o.jsx(v,{variant:"body1",children:"What is Crusadarr?"})}),o.jsx(oe,{children:o.jsx(v,{children:"Crusadarr is a web application designed to support Warhammer 40K players in managing their Crusade games. It allows players to track essential gameplay elements like unit kills, deaths, and agendas, manage command and round points, view and reference Crusade and House rules, and access PDFs for missions from Leviathan and custom games. It's an all-in-one resource for tracking missions, points, and resources to streamline the tabletop experience."})})]}),o.jsxs(te,{expanded:r==="panel2",onChange:s("panel2"),children:[o.jsx(re,{expandIcon:o.jsx(ne,{sx:{color:"#ffffff"}}),children:o.jsx(v,{variant:"body1",children:"How do I add my roster?"})}),o.jsxs(oe,{children:[o.jsx(v,{component:"div",children:"To add your roster:"}),o.jsxs(v,{component:"div",sx:{pl:2},children:["• Enter your name and select your faction",o.jsx("br",{}),'• Click on "Start Tracking"',o.jsx("br",{}),'• Use the "+" button to add units',o.jsx("br",{}),"• Fill in the unit details",o.jsx("br",{}),"• Save your changes"]})]})]}),o.jsxs(te,{expanded:r==="panel3",onChange:s("panel3"),children:[o.jsx(re,{expandIcon:o.jsx(ne,{sx:{color:"#ffffff"}}),children:o.jsx(v,{variant:"body1",children:"How do I export my game to PDF?"})}),o.jsxs(oe,{children:[o.jsx(v,{component:"div",children:"To export your game to PDF:"}),o.jsxs(v,{component:"div",sx:{pl:2},children:["• Click on Export PDF",o.jsx("br",{}),"• Save the file to your device",o.jsx("br",{})]})]})]}),o.jsxs(te,{expanded:r==="panel4",onChange:s("panel4"),children:[o.jsx(re,{expandIcon:o.jsx(ne,{sx:{color:"#ffffff"}}),children:o.jsx(v,{variant:"body1",children:"App Updates"})}),o.jsxs(oe,{children:[o.jsx(v,{component:"div",sx:{mb:1},children:"Version 1.8a (22/11/2024):"}),o.jsxs(v,{component:"div",sx:{pl:2},children:["• Updated all faction icons to 500x500 resolution reduced file size",o.jsx("br",{}),"• Removed depreicated files and updated code to work with new files",o.jsx("br",{})]})]})]})]})]})},jo=({onExportPDF:e,onNavigateHome:t,context:r,currentPage:n})=>{const[s,a]=u.useState(!1),[c,i]=u.useState(!1),l=Ve(),d=Oe();to("(max-width: 800px)");const p=b=>()=>a(b),g=()=>{var m;const b=((m=d.state)==null?void 0:m.from)||"/";l(b)},C=()=>i(!0),w=()=>i(!1),f={"&:hover":{backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:0},borderRadius:0,transition:"none"},R=()=>o.jsxs(at,{children:[o.jsx(q,{component:"button",onClick:()=>l("/"),sx:{...f},children:o.jsx(Z,{primary:"Home",sx:{color:"#ffffff"}})}),(n==="App"||n==="App2Player")&&e&&o.jsx(q,{component:"button",onClick:e,sx:{...f},children:o.jsx(Z,{primary:"Export PDF",sx:{color:"#ffffff"}})}),(n==="App"||n==="App2Player")&&o.jsxs(o.Fragment,{children:[o.jsx(q,{component:"button",onClick:()=>l("/rules",{state:{from:d.pathname}}),sx:{...f},children:o.jsx(Z,{primary:"Rules",sx:{color:"#ffffff"}})}),o.jsx(q,{component:"button",onClick:()=>l("/houserules",{state:{from:d.pathname}}),sx:{...f},children:o.jsx(Z,{primary:"House Rules",sx:{color:"#ffffff"}})}),o.jsx(q,{component:"button",onClick:()=>l("/missions",{state:{from:d.pathname}}),sx:{...f},children:o.jsx(Z,{primary:"Missions",sx:{color:"#ffffff"}})})]}),(n==="App"||n==="App2Player")&&n!=="DiceRoller"&&o.jsx(q,{component:"button",onClick:()=>l("/dice-roller",{state:{from:d.pathname}}),sx:{...f},children:o.jsx(Z,{primary:"Dice Roller",sx:{color:"#ffffff"}})}),(n==="Rules"||n==="HouseRules"||n==="Missions"||n==="DiceRoller")&&o.jsx(q,{component:"button",onClick:g,sx:{...f},children:o.jsx(Z,{primary:"Return",sx:{color:"#ffffff"}})}),o.jsx(q,{component:"button",onClick:C,sx:{...f},children:o.jsx(Z,{primary:"Info",sx:{color:"#ffffff"}})})]});return o.jsxs(o.Fragment,{children:[o.jsx(Tt,{position:"fixed",sx:{width:"100%",backgroundColor:"#333333",color:"#ffffff",left:0},children:o.jsxs(yo,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 16px",minHeight:{xs:"56px",sm:"64px"},height:"auto"},children:[o.jsxs(ue,{sx:{display:"flex",alignItems:"center"},children:[o.jsx(K,{edge:"start",color:"inherit",onClick:p(!0),sx:{display:{xs:"block",md:"none"},...f},"aria-label":"menu",children:o.jsx(vo,{})}),o.jsx(v,{variant:"h6",sx:{ml:1},children:"CRUSADARR"})]}),o.jsxs(ue,{sx:{display:{xs:"none",md:"flex"},alignItems:"center",flexWrap:"wrap",justifyContent:"flex-end",gap:1},children:[o.jsx(K,{color:"inherit",onClick:()=>l("/"),sx:{mx:1,...f},children:o.jsx(v,{variant:"body1",children:"Home"})}),(n==="App"||n==="App2Player")&&e&&o.jsx(K,{color:"inherit",onClick:e,sx:{mx:1,...f},children:o.jsx(v,{variant:"body1",children:"Export PDF"})}),(n==="App"||n==="App2Player")&&o.jsxs(o.Fragment,{children:[o.jsx(K,{color:"inherit",onClick:()=>l("/rules",{state:{from:d.pathname}}),sx:{mx:1,...f},children:o.jsx(v,{variant:"body1",children:"Rules"})}),o.jsx(K,{color:"inherit",onClick:()=>l("/houserules",{state:{from:d.pathname}}),sx:{mx:1,...f},children:o.jsx(v,{variant:"body1",children:"House Rules"})}),o.jsx(K,{color:"inherit",onClick:()=>l("/missions",{state:{from:d.pathname}}),sx:{mx:1,...f},children:o.jsx(v,{variant:"body1",children:"Missions"})})]}),(n==="App"||n==="App2Player")&&n!=="DiceRoller"&&o.jsx(K,{color:"inherit",onClick:()=>l("/dice-roller",{state:{from:d.pathname}}),sx:{mx:1,...f},children:o.jsx(v,{variant:"body1",children:"Dice Roller"})}),(n==="Rules"||n==="HouseRules"||n==="Missions"||n==="DiceRoller")&&o.jsx(K,{color:"inherit",onClick:g,sx:{mx:1,...f},children:o.jsx(v,{variant:"body1",children:"Return"})}),o.jsx(K,{color:"inherit",onClick:C,sx:{mx:1,...f},children:o.jsx(v,{variant:"body1",children:"Info"})})]})]})}),o.jsx(eo,{anchor:"left",open:s,onClose:p(!1),PaperProps:{sx:{backgroundColor:"#333333",color:"#ffffff"}},children:o.jsx(ue,{role:"presentation",onClick:p(!1),onKeyDown:p(!1),sx:{width:{xs:250,sm:300}},children:R()})}),o.jsx(Co,{open:c,onClose:w})]})};export{te as A,he as C,ne as E,q as L,jo as N,re as a,oe as b,Z as c,pe as l,to as u};
