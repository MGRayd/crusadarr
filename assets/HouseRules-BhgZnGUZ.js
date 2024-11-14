import{r as p,j as t,u as G}from"./index-CHdTnJjA.js";import{N as X,A as Y,a as Z,E as q,b as V}from"./Navbar-BwRRSv7r.js";import{d as Q}from"./D6-Icon-DY7K7Irs.js";import{l as v,m,t as C,y as N,w as T,z as R,r as w,x as h,$ as ee,A as M,a0 as oe,C as te,B as k,T as E,a as se,b as ae,M as re}from"./TextField-BAVDd_q9.js";const L=p.createContext();function ne(e){return m("MuiTable",e)}v("MuiTable",["root","stickyHeader"]);const le=e=>{const{classes:o,stickyHeader:s}=e;return w({root:["root",s&&"stickyHeader"]},ne,o)},ie=C("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.stickyHeader&&o.stickyHeader]}})(N(({theme:e})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:o})=>o.stickyHeader,style:{borderCollapse:"separate"}}]}))),B="table",ce=p.forwardRef(function(o,s){const n=T({props:o,name:"MuiTable"}),{className:c,component:a=B,padding:i="normal",size:l="medium",stickyHeader:f=!1,...y}=n,u={...n,component:a,padding:i,size:l,stickyHeader:f},r=le(u),d=p.useMemo(()=>({padding:i,size:l,stickyHeader:f}),[i,l,f]);return t.jsx(L.Provider,{value:d,children:t.jsx(ie,{as:a,role:a===B?null:"table",ref:s,className:R(r.root,c),ownerState:u,...y})})}),S=p.createContext();function de(e){return m("MuiTableBody",e)}v("MuiTableBody",["root"]);const pe=e=>{const{classes:o}=e;return w({root:["root"]},de,o)},fe=C("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"table-row-group"}),ue={variant:"body"},P="tbody",ge=p.forwardRef(function(o,s){const n=T({props:o,name:"MuiTableBody"}),{className:c,component:a=P,...i}=n,l={...n,component:a},f=pe(l);return t.jsx(S.Provider,{value:ue,children:t.jsx(fe,{className:R(f.root,c),as:a,ref:s,role:a===P?null:"rowgroup",ownerState:l,...i})})});function ye(e){return m("MuiTableCell",e)}const be=v("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),xe=e=>{const{classes:o,variant:s,align:n,padding:c,size:a,stickyHeader:i}=e,l={root:["root",s,i&&"stickyHeader",n!=="inherit"&&`align${h(n)}`,c!=="normal"&&`padding${h(c)}`,`size${h(a)}`]};return w(l,ye,o)},he=C("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,o[s.variant],o[`size${h(s.size)}`],s.padding!=="normal"&&o[`padding${h(s.padding)}`],s.align!=="inherit"&&o[`align${h(s.align)}`],s.stickyHeader&&o.stickyHeader]}})(N(({theme:e})=>({...e.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?ee(M(e.palette.divider,1),.88):oe(M(e.palette.divider,1),.68)}`,textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(e.vars||e).palette.text.primary}},{props:{variant:"footer"},style:{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)}},{props:{size:"small"},style:{padding:"6px 16px",[`&.${be.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}}},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:({ownerState:o})=>o.stickyHeader,style:{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}}]}))),x=p.forwardRef(function(o,s){const n=T({props:o,name:"MuiTableCell"}),{align:c="inherit",className:a,component:i,padding:l,scope:f,size:y,sortDirection:u,variant:r,...d}=n,g=p.useContext(L),b=p.useContext(S),A=b&&b.variant==="head";let j;i?j=i:j=A?"th":"td";let H=f;j==="td"?H=void 0:!H&&A&&(H="col");const I=r||b&&b.variant,z={...n,align:c,component:j,padding:l||(g&&g.padding?g.padding:"normal"),size:y||(g&&g.size?g.size:"medium"),sortDirection:u,stickyHeader:I==="head"&&g&&g.stickyHeader,variant:I},W=xe(z);let D=null;return u&&(D=u==="asc"?"ascending":"descending"),t.jsx(he,{as:j,ref:s,className:R(W.root,a),"aria-sort":D,scope:H,ownerState:z,...d})});function ve(e){return m("MuiTableContainer",e)}v("MuiTableContainer",["root"]);const me=e=>{const{classes:o}=e;return w({root:["root"]},ve,o)},Ce=C("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,o)=>o.root})({width:"100%",overflowX:"auto"}),Te=p.forwardRef(function(o,s){const n=T({props:o,name:"MuiTableContainer"}),{className:c,component:a="div",...i}=n,l={...n,component:a},f=me(l);return t.jsx(Ce,{ref:s,as:a,className:R(f.root,c),ownerState:l,...i})});function Re(e){return m("MuiTableHead",e)}v("MuiTableHead",["root"]);const we=e=>{const{classes:o}=e;return w({root:["root"]},Re,o)},je=C("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"table-header-group"}),ke={variant:"head"},U="thead",He=p.forwardRef(function(o,s){const n=T({props:o,name:"MuiTableHead"}),{className:c,component:a=U,...i}=n,l={...n,component:a},f=we(l);return t.jsx(S.Provider,{value:ke,children:t.jsx(je,{as:a,className:R(f.root,c),ref:s,role:a===U?null:"rowgroup",ownerState:l,...i})})});function Me(e){return m("MuiTableRow",e)}const O=v("MuiTableRow",["root","selected","hover","head","footer"]),Se=e=>{const{classes:o,selected:s,hover:n,head:c,footer:a}=e;return w({root:["root",s&&"selected",n&&"hover",c&&"head",a&&"footer"]},Me,o)},$e=C("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.head&&o.head,s.footer&&o.footer]}})(N(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${O.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${O.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:M(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:M(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),J="tr",_=p.forwardRef(function(o,s){const n=T({props:o,name:"MuiTableRow"}),{className:c,component:a=J,hover:i=!1,selected:l=!1,...f}=n,y=p.useContext(S),u={...n,component:a,hover:i,selected:l,head:y&&y.variant==="head",footer:y&&y.variant==="footer"},r=Se(u);return t.jsx($e,{as:a,ref:s,className:R(r.root,c),role:a===J?null:"row",ownerState:u,...f})}),Ne="1FcWUZRyqEWs-y8rTywrl036-MD4Jdz9hJ-7IKeNySqI",K="AIzaSyBNb0_gNZn-N_VHXelkO4TjFlSQXhGD2p0",Ae="Rules!A2:D";console.log("API_KEY",K);async function F(){try{return(await(await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${Ne}/values/${Ae}?key=${K}`)).json()).values||[]}catch(e){return console.error("Error fetching data from Google Sheets:",e),[]}}const Ie="/assets/D3-Icon-ZKJR6FcL.png",$="houseRulesCache",ze=24*60*60*1e3,Ue=()=>{const[e,o]=p.useState([]),[s,n]=p.useState(""),[c,a]=p.useState(!1),i=G();p.useEffect(()=>{(async()=>{const d=JSON.parse(localStorage.getItem($)),g=new Date().getTime();if(d&&g-d.timestamp<ze)o(d.rules);else{const b=await F();o(b),localStorage.setItem($,JSON.stringify({rules:b,timestamp:g}))}})()},[]);const l=async()=>{const r=await F();o(r),localStorage.setItem($,JSON.stringify({rules:r,timestamp:new Date().getTime()}))},f=r=>(d,g)=>{a(g?r:!1)},y=e.filter(r=>r[1].toLowerCase().includes(s.toLowerCase())),u={};return y.forEach(r=>{const d=r[0];u[d]||(u[d]=[]),u[d].push(r)}),t.jsxs(t.Fragment,{children:[t.jsx(X,{onExportPDF:null,onNavigateHome:()=>i("/"),context:"houseRules",currentPage:"HouseRules",onToggleLogo:()=>{},logoVisible:!0}),t.jsxs(te,{sx:{paddingTop:{xs:"56px",sm:"64px"},paddingBottom:"20px"},children:[t.jsx(k,{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:2,children:t.jsx(E,{variant:"h4",gutterBottom:!0,children:"House Rules"})}),t.jsx(k,{marginTop:4}),t.jsx(k,{display:"flex",justifyContent:"flex-end",marginBottom:2,children:t.jsx(se,{variant:"contained",color:"primary",onClick:l,children:"Refresh Data"})}),t.jsx(k,{marginBottom:2,children:t.jsx(ae,{fullWidth:!0,label:"Search Rules",variant:"outlined",value:s,onChange:r=>n(r.target.value),placeholder:"Search for rules...",InputLabelProps:{style:{color:"#ffffff"}},InputProps:{style:{color:"#ffffff",backgroundColor:"#424242",borderRadius:"8px"}},sx:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#ffffff"},"&:hover fieldset":{borderColor:"#90caf9"},"&.Mui-focused fieldset":{borderColor:"#90caf9"}}}})}),t.jsx(k,{marginTop:4}),Object.keys(u).map(r=>t.jsxs(Y,{expanded:c===r,onChange:f(r),sx:{backgroundColor:"#424242",color:"#ffffff",marginBottom:"8px"},children:[t.jsx(Z,{expandIcon:t.jsx(q,{sx:{color:"#ffffff"}}),"aria-controls":`${r}-content`,id:`${r}-header`,sx:{backgroundColor:"#333333",color:"#ffffff"},children:t.jsx(E,{variant:"h5",children:r})}),t.jsx(V,{children:t.jsx(Te,{component:re,sx:{backgroundColor:"#424242",color:"#ffffff"},children:t.jsxs(ce,{children:[t.jsx(He,{children:t.jsxs(_,{children:[t.jsx(x,{style:{backgroundColor:"#333333",color:"#ffffff"},children:"Rule Name"}),t.jsx(x,{style:{backgroundColor:"#333333",color:"#ffffff"},children:"Rule Description"}),t.jsx(x,{style:{backgroundColor:"#333333",color:"#ffffff"}})]})}),t.jsx(ge,{children:u[r].map((d,g)=>t.jsxs(_,{children:[t.jsx(x,{style:{color:"#ffffff"},children:d[1]}),t.jsx(x,{style:{color:"#ffffff"},children:d[2]}),t.jsx(x,{align:"center",style:{color:"#ffffff"},children:d[3]==="D3"?t.jsx("img",{src:Ie,alt:"D3 dice icon",style:{width:"36px"}}):d[3]==="D6"?t.jsx("img",{src:Q,alt:"D6 dice icon",style:{width:"36px"}}):null})]},g))})]})})})]},r))]})]})};export{Ue as default};
