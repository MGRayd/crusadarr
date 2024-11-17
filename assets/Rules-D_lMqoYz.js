import{r as b,j as t,u as Q}from"./index-DH0l20Jh.js";import{N as ee,A as T,a as I,E as $,b as W}from"./Navbar-nZMVraiG.js";import{m as te,l as se,t as ie,w as ae,U as re,V as ne,z as oe,W as A,X as B,r as ce,B as h,T as f,C as de,S as le,Y as ue,a as pe,b as he}from"./TextField-BBUVB6Du.js";import{d as V,a as z,b as H,c as Y,e as K,f as Z,M as P}from"./d6-DWc1k9x3.js";import{d as F}from"./D6-Icon-DY7K7Irs.js";/* empty css            */const O=b.createContext();function fe(e){return te("MuiGrid",e)}const me=[0,1,2,3,4,5,6,7,8,9,10],ge=["column-reverse","column","row-reverse","row"],xe=["nowrap","wrap-reverse","wrap"],S=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],k=se("MuiGrid",["root","container","item","zeroMinWidth",...me.map(e=>`spacing-xs-${e}`),...ge.map(e=>`direction-xs-${e}`),...xe.map(e=>`wrap-xs-${e}`),...S.map(e=>`grid-xs-${e}`),...S.map(e=>`grid-sm-${e}`),...S.map(e=>`grid-md-${e}`),...S.map(e=>`grid-lg-${e}`),...S.map(e=>`grid-xl-${e}`)]);function we({theme:e,ownerState:s}){let r;return e.breakpoints.keys.reduce((i,a)=>{let n={};if(s[a]&&(r=s[a]),!r)return i;if(r===!0)n={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(r==="auto")n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=A({values:s.columns,breakpoints:e.breakpoints.values}),l=typeof c=="object"?c[a]:c;if(l==null)return i;const u=`${Math.round(r/l*1e8)/1e6}%`;let d={};if(s.container&&s.item&&s.columnSpacing!==0){const p=e.spacing(s.columnSpacing);if(p!=="0px"){const m=`calc(${u} + ${p})`;d={flexBasis:m,maxWidth:m}}}n={flexBasis:u,flexGrow:0,maxWidth:u,...d}}return e.breakpoints.values[a]===0?Object.assign(i,n):i[e.breakpoints.up(a)]=n,i},{})}function be({theme:e,ownerState:s}){const r=A({values:s.direction,breakpoints:e.breakpoints.values});return B({theme:e},r,i=>{const a={flexDirection:i};return i.startsWith("column")&&(a[`& > .${k.item}`]={maxWidth:"none"}),a})}function _({breakpoints:e,values:s}){let r="";Object.keys(s).forEach(a=>{r===""&&s[a]!==0&&(r=a)});const i=Object.keys(e).sort((a,n)=>e[a]-e[n]);return i.slice(0,i.indexOf(r))}function ye({theme:e,ownerState:s}){const{container:r,rowSpacing:i}=s;let a={};if(r&&i!==0){const n=A({values:i,breakpoints:e.breakpoints.values});let c;typeof n=="object"&&(c=_({breakpoints:e.breakpoints.values,values:n})),a=B({theme:e},n,(l,u)=>{const d=e.spacing(l);return d!=="0px"?{marginTop:`-${d}`,[`& > .${k.item}`]:{paddingTop:d}}:c!=null&&c.includes(u)?{}:{marginTop:0,[`& > .${k.item}`]:{paddingTop:0}}})}return a}function ve({theme:e,ownerState:s}){const{container:r,columnSpacing:i}=s;let a={};if(r&&i!==0){const n=A({values:i,breakpoints:e.breakpoints.values});let c;typeof n=="object"&&(c=_({breakpoints:e.breakpoints.values,values:n})),a=B({theme:e},n,(l,u)=>{const d=e.spacing(l);if(d!=="0px"){const p=`-${d}`;return{width:`calc(100% + ${d})`,marginLeft:p,[`& > .${k.item}`]:{paddingLeft:d}}}return c!=null&&c.includes(u)?{}:{width:"100%",marginLeft:0,[`& > .${k.item}`]:{paddingLeft:0}}})}return a}function je(e,s,r={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[r[`spacing-xs-${String(e)}`]];const i=[];return s.forEach(a=>{const n=e[a];Number(n)>0&&i.push(r[`spacing-${a}-${String(n)}`])}),i}const Ce=ie("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e,{container:i,direction:a,item:n,spacing:c,wrap:l,zeroMinWidth:u,breakpoints:d}=r;let p=[];i&&(p=je(c,d,s));const m=[];return d.forEach(g=>{const y=r[g];y&&m.push(s[`grid-${g}-${String(y)}`])}),[s.root,i&&s.container,n&&s.item,u&&s.zeroMinWidth,...p,a!=="row"&&s[`direction-xs-${String(a)}`],l!=="wrap"&&s[`wrap-xs-${String(l)}`],...m]}})(({ownerState:e})=>({boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...e.item&&{margin:0},...e.zeroMinWidth&&{minWidth:0},...e.wrap!=="wrap"&&{flexWrap:e.wrap}}),be,ye,ve,we);function Se(e,s){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const r=[];return s.forEach(i=>{const a=e[i];if(Number(a)>0){const n=`spacing-${i}-${String(a)}`;r.push(n)}}),r}const ke=e=>{const{classes:s,container:r,direction:i,item:a,spacing:n,wrap:c,zeroMinWidth:l,breakpoints:u}=e;let d=[];r&&(d=Se(n,u));const p=[];u.forEach(g=>{const y=e[g];y&&p.push(`grid-${g}-${String(y)}`)});const m={root:["root",r&&"container",a&&"item",l&&"zeroMinWidth",...d,i!=="row"&&`direction-xs-${String(i)}`,c!=="wrap"&&`wrap-xs-${String(c)}`,...p]};return ce(m,fe,s)},E=b.forwardRef(function(s,r){const i=ae({props:s,name:"MuiGrid"}),{breakpoints:a}=re(),n=ne(i),{className:c,columns:l,columnSpacing:u,component:d="div",container:p=!1,direction:m="row",item:g=!1,rowSpacing:y,spacing:v=0,wrap:j="wrap",zeroMinWidth:C=!1,...o}=n,x=y||v,w=u||v,M=b.useContext(O),G=p?l||12:M,N={},D={...o};a.keys.forEach(R=>{o[R]!=null&&(N[R]=o[R],delete D[R])});const L={...n,columns:G,container:p,direction:m,item:g,rowSpacing:x,columnSpacing:w,wrap:j,zeroMinWidth:C,spacing:v,...N,breakpoints:a.keys},J=ke(L);return t.jsx(O.Provider,{value:G,children:t.jsx(Ce,{ownerState:L,className:oe(J.root,c),as:d,ref:r,...D})})}),Re=()=>t.jsxs(h,{marginTop:2,children:[t.jsx(f,{variant:"h5",gutterBottom:!0,children:"Crusade Forces"}),t.jsx(f,{variant:"body1",children:"A Crusade force is one that allows you to track the development of your units from the greenest of recruits to the most hard-bitten veterans over the course of many battles. The more you play with a Crusade force, the more its units will gain experience, abilities, acquire long-lost artefacts, and gain scars."}),t.jsx(f,{variant:"body1",marginTop:2,children:"Crusade forces are designed to be used as part of a campaign where you grow your favourite collection from a fledgling force into a powerful army feared across the galaxy, earning new Battle Honours with every victory (or defeat)."}),t.jsx(f,{variant:"body1",marginTop:2,children:"To play with a Crusade force, you will first need to create an Order of Battle."})]}),q=[{title:"FINELY BALANCED",description:`Perfectly weighted for the weapon’s owner, this weapon feels to be an extension of their own limbs. 
    Improve this weapon’s Ballistic Skill or Weapon Skill characteristic by 1.`,icon:V},{title:"BRUTAL",description:`Enhanced with hyper-dense metalloids or empowered by advanced energies, this weapon can be wielded with meteoric force. 
    Add 1 to this weapon’s Strength characteristic.`,icon:z},{title:"ARMOUR PIERCING",description:`Honed to a razor-edged sharpness or invested with crackling energy fields, this weapon can crack the heaviest enemy battle plate. 
    Improve this weapon’s Armour Penetration characteristic by 1.`,icon:H},{title:"MASTER-WORKED",description:`Forged by master-smiths and hand-worked over generations by skilled artificers, this weapon’s deadly killing power matches its martial elegance. 
    Add 1 to this weapon’s Damage characteristic.`,icon:Y},{title:"HEIRLOOM",description:`Handed to worthy scions or claimed by ruthless victors, the greatest weapons are valued for their quality. 
    Add 1 to this weapon’s Attacks characteristic.`,icon:K},{title:"PRECISE",description:`Whether fitted with superior scopes or crafted by master duellists, this weapon has been modified with the sole purpose of executing enemy heroes and commanders. 
    Each time a Critical Wound is scored for an attack made with this weapon, that attack has the [PRECISION] ability.`,icon:Z}],Ee=()=>t.jsx(h,{marginTop:2,children:t.jsx(E,{container:!0,spacing:2,children:q.map((e,s)=>t.jsx(E,{item:!0,xs:12,sm:6,md:4,children:t.jsxs(h,{display:"flex",alignItems:"flex-start",marginBottom:2,children:[t.jsx("img",{src:e.icon,alt:`${e.title} icon`,style:{width:"40px",height:"40px",marginRight:"10px"}}),t.jsxs(h,{children:[t.jsx(f,{variant:"body1",fontWeight:"bold",children:e.title}),t.jsx(f,{variant:"body2",children:e.description})]})]})},s))})}),X=[{title:"CRIPPLING DAMAGE",description:`Reduced to walking wounded, plagued by engine faults or hobbled by lacerations, the impaired still limp stoically into battle.
    This unit cannot Advance and you must subtract 1" from the Move characteristic of models in this unit.`,icon:V},{title:"BATTLE-WEARY",description:`Sapped of energy and impetus, fighting formations that endure extended tours can be psychologically crippled by constant attack.
    Each time this unit takes a Battle-shock, Leadership, Desperate Escape or Out of Action test, subtract 1 from that test.`,icon:z},{title:"FATIGUED",description:`These fighters have suffered heavily in war, indecision and disorganisation hampering their ability at effective battlefield cohesion.
    Subtract 1 from the Objective Control characteristic of models in this unit and this unit never receives a Charge bonus.`,icon:H},{title:"DISGRACED",description:`Having committed some gross failure in battle, these warriors are excluded from high strategies and tasked with unheroic actions.
    You cannot use any Stratagems to affect this unit and this unit cannot be Marked for Greatness.`,icon:Y},{title:"MARK OF SHAME",description:`Humiliated, cursed or haunted by terrible injury, these fighters are shunned or avoided and few will acknowledge them even in war.
    This unit cannot form an Attached unit, it is unaffected by the Aura abilities of friendly units, and it cannot be Marked for Greatness.`,icon:K},{title:"DEEP SCARS",description:`Battle damage and grievous injuries can linger and fester, worsening until they severely hamper a unit’s constitution.
    Each time a Critical Hit is scored against this unit, that attack automatically wounds this unit.`,icon:Z}],Ae=()=>t.jsx(h,{marginTop:2,children:t.jsx(E,{container:!0,spacing:2,children:X.map((e,s)=>t.jsx(E,{item:!0,xs:12,sm:6,md:4,children:t.jsxs(h,{display:"flex",alignItems:"flex-start",marginBottom:2,children:[t.jsx("img",{src:e.icon,alt:`${e.title} icon`,style:{width:"40px",height:"40px",marginRight:"10px"}}),t.jsxs(h,{children:[t.jsx(f,{variant:"body1",fontWeight:"bold",children:e.title}),t.jsx(f,{variant:"body2",children:e.description})]})]})},s))})}),U={Imperium:{"Adepta Sororitas":"https://wahapedia.ru/wh40k10ed/factions/adepta-sororitas/#Crusade-Rules","Adeptus Astartes":"https://wahapedia.ru/wh40k10ed/factions/space-marines/#Crusade-Rules","Adeptus Custodes":"https://wahapedia.ru/wh40k10ed/factions/adeptus-custodes/#Crusade-Rules","Adeptus Mechanicus":"https://wahapedia.ru/wh40k10ed/factions/adeptus-mechanicus/#Crusade-Rules","Agents of the Imperium":"https://wahapedia.ru/wh40k10ed/factions/imperial-agents/#Crusade-Rules"},Chaos:{"Chaos Space Marines":"https://wahapedia.ru/wh40k10ed/factions/chaos-space-marines/#Crusade-Rules"},Xenos:{"Genestealer Cult":"https://wahapedia.ru/wh40k10ed/factions/genestealer-cults/#Crusade-Rules",Necrons:"https://wahapedia.ru/wh40k10ed/factions/necrons/#Crusade-Rules",Orks:"https://wahapedia.ru/wh40k10ed/factions/orks/#Crusade-Rules","Tau Empire":"https://wahapedia.ru/wh40k10ed/factions/t-au-empire/#Crusade-Rules",Tyranids:"https://wahapedia.ru/wh40k10ed/factions/tyranids/#Crusade-Rules"}},Ge=()=>{const e=Q(),[s,r]=b.useState(""),[i,a]=b.useState(!1),[n,c]=b.useState(""),[l,u]=b.useState([]),d=b.useRef(null),p=b.useRef([]),m=o=>{r(o.target.value.toLowerCase())},g=o=>(x,w)=>{a(w?o:!1)},y=o=>{const x=o.target.value;c(x);const w=U[x]||{};u(Object.entries(w))};b.useEffect(()=>{const o=x=>{d.current&&!d.current.contains(x.target)&&!p.current.some(w=>w&&w.contains(x.target))&&(c(""),u([]))};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[]);const v={forces:s===""||"crusade forces".includes(s),battleScars:s===""||"battle scars".includes(s)||X.some(o=>o.title.toLowerCase().includes(s)||o.description.toLowerCase().includes(s)),weaponMods:s===""||"weapon modifications".includes(s)||q.some(o=>o.title.toLowerCase().includes(s)||o.description.toLowerCase().includes(s))},j={backgroundColor:"#424242",color:"#ffffff",borderRadius:"8px",marginBottom:"8px"},C={backgroundColor:"#333333",color:"#ffffff",borderRadius:"8px"};return t.jsxs(de,{sx:{paddingTop:{xs:"56px",sm:"64px"},paddingBottom:"20px"},children:[t.jsx(ee,{onNavigateHome:()=>e("/"),currentPage:"Rules",onExportPDF:null,context:"rules",onToggleLogo:()=>{},logoVisible:!0}),t.jsx(h,{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4,children:t.jsx(f,{variant:"h4",gutterBottom:!0,children:"CRUSADE RULES"})}),t.jsxs(h,{marginTop:2,children:[t.jsx(f,{variant:"body1",children:"Crusade Rules 17/09/2024"}),t.jsxs(f,{variant:"body2",children:["Faction Rules with thanks to"," ",t.jsx("a",{href:"https://wahapedia.ru/",target:"_blank",rel:"noopener noreferrer",style:{color:"#90caf9",textDecoration:"none"},children:"Wahapedia"})]})]}),t.jsx(h,{marginTop:2,ref:d,children:t.jsx(le,{variant:"outlined",style:{minWidth:120},children:t.jsxs(ue,{value:n,onChange:y,displayEmpty:!0,style:{backgroundColor:"#fff",color:"#000"},renderValue:o=>o||"Factions",children:[t.jsx(P,{value:"",disabled:!0,children:t.jsx("em",{children:"Factions"})}),Object.keys(U).map(o=>t.jsx(P,{value:o,children:o},o))]})})}),t.jsx(h,{marginTop:2,children:Array.isArray(l)&&l.map(([o,x],w)=>t.jsx(pe,{ref:M=>p.current[w]=M,variant:"contained",color:"primary",onClick:()=>window.open(x,"_blank"),style:{marginRight:"8px",marginBottom:"8px"},children:o},o))}),t.jsx(h,{marginTop:2,children:t.jsx(he,{fullWidth:!0,label:"Search Rules",variant:"outlined",value:s,onChange:m,placeholder:"Search for Weapon Modifications, Battle Scars, etc.",InputLabelProps:{style:{color:"#ffffff"}},inputProps:{style:{color:"#ffffff",backgroundColor:"#424242",borderRadius:"8px"}},sx:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#ffffff"},"&:hover fieldset":{borderColor:"#90caf9"},"&.Mui-focused fieldset":{borderColor:"#90caf9"}}}})}),t.jsx(h,{marginTop:4}),v.forces&&t.jsxs(T,{expanded:i==="forces",onChange:g("forces"),sx:j,children:[t.jsx(I,{expandIcon:t.jsx($,{sx:{color:"#ffffff"}}),"aria-controls":"forces-content",id:"forces-header",sx:C,children:t.jsx(f,{variant:"h5",children:"Crusade Forces"})}),t.jsx(W,{children:t.jsx(Re,{})})]}),v.weaponMods&&t.jsxs(T,{expanded:i==="weaponMods",onChange:g("weaponMods"),sx:j,children:[t.jsxs(I,{expandIcon:t.jsx($,{sx:{color:"#ffffff"}}),"aria-controls":"weapon-mods-content",id:"weapon-mods-header",sx:C,children:[t.jsx(f,{variant:"h5",children:"Weapon Modifications"}),t.jsx(h,{display:"flex",alignItems:"center",children:t.jsx("img",{src:F,alt:"D6 Icon",style:{width:"32px",height:"32px",marginRight:"8px"}})})]}),t.jsx(W,{children:t.jsx(Ee,{})})]}),v.battleScars&&t.jsxs(T,{expanded:i==="battleScars",onChange:g("battleScars"),sx:j,children:[t.jsxs(I,{expandIcon:t.jsx($,{sx:{color:"#ffffff"}}),"aria-controls":"battle-scars-content",id:"battle-scars-header",sx:C,children:[t.jsx(f,{variant:"h5",children:"Battle Scars"}),t.jsx(h,{display:"flex",alignItems:"center",children:t.jsx("img",{src:F,alt:"D6 Icon",style:{width:"32px",height:"32px",marginRight:"8px"}})})]}),t.jsx(W,{children:t.jsx(Ae,{})})]})]})};export{Ge as default};