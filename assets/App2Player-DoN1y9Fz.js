import{j as t,u as ie,a as le,r as s}from"./index-BGyHWIo5.js";import{E as ce,l as P,s as h,T as de,R as me,p as xe,U as ge,C as pe,a as ue,c as q,r as Pe}from"./rosterParser-B6epGK4a.js";import{B as p,T as S,a as Q,b as he,c as ye,C as je}from"./TextField-DYwh-saE.js";import{F as Se,C as fe,N as Ce,A as G,a as J,E as M,b as O}from"./Navbar-Dzab1uGK.js";import{l as $e}from"./logo-Biy-NZI7.js";/* empty css            */const Ne=({commandPoints:d,setCommandPoints:m,customHeading:x})=>{const y=()=>m(d+1),c=()=>{d>0&&m(d-1)};return t.jsxs(p,{className:"command-points",sx:{padding:2,textAlign:"center"},children:[t.jsx(S,{variant:"h5",gutterBottom:!0,children:x}),t.jsx(p,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:t.jsxs(p,{sx:{display:"flex",alignItems:"center"},children:[t.jsx(Q,{variant:"outlined",onClick:c,sx:{marginRight:1},children:"-"}),t.jsx(S,{variant:"h6",sx:{marginX:1},children:d}),t.jsx(Q,{variant:"outlined",onClick:y,children:"+"})]})})]})},Fe=({roundPoints:d,setRoundPoints:m,paintedBonus:x,setPaintedBonus:y,customHeading:c})=>{const f=(i,g)=>{const n=[...d];n[i]=g===""?0:Math.max(0,parseInt(g,10)),m(n)};return t.jsxs(p,{id:"rounds-tracking",sx:{padding:2},children:[t.jsxs(S,{variant:"h5",gutterBottom:!0,children:[c," "]}),d.map((i,g)=>t.jsx(p,{sx:{marginBottom:1},children:t.jsx(he,{label:`Round ${g+1} Points`,type:"number",value:i===0?"":i,onChange:n=>f(g,n.target.value),size:"small",variant:"outlined",fullWidth:!0,inputProps:{min:0}})},g)),t.jsx(Se,{control:t.jsx(fe,{checked:x,onChange:i=>y(i.target.checked),color:"primary"}),label:"Painted Bonus"})]})},Z=(d,m)=>{const y=d.reduce((c,f)=>c+f,0)+(m?10:0);return Math.min(y,100)},De=async({units:d,commandPointsPlayer1:m,commandPointsPlayer2:x,roundPointsPlayer1:y,roundPointsPlayer2:c,paintedBonusPlayer1:f,paintedBonusPlayer2:i,gameDate:g,customFileName:n,player1Name:k,player2Name:I,player1FactionLogo:v,player2FactionLogo:R})=>{const a=new ce,C=a.internal.pageSize.height,o=14;let e=30;const w=g?new Date(g).toLocaleDateString("en-UK"):new Date().toLocaleDateString("en-UK"),$=n?`${n} - ${w}`:`Game on ${w}`;a.setFontSize(16),a.text($,o,22),a.setFontSize(12),e+=20;const b=async(r,L,u,N,F)=>{if(e+40>C&&(a.addPage(),e=30),F){const D=new Image;D.src=F,await new Promise((T,E)=>{D.onload=()=>{a.addImage(D,"PNG",o,e-10,30,30),a.text(`${r}'s Data:`,o+40,e),e+=6,a.text(`Command Points Unused: ${L}`,o+40,e),e+=6,a.text(`Score per Round: ${u.join(", ")}`,o+40,e),e+=6,a.text(`Total Score: ${Z(u,N)}`,o+40,e),e+=6,a.text(`Painted Bonus: ${N?"Yes":"No"}`,o+40,e),e+=10,T()},D.onerror=()=>{console.error(`Failed to load image for ${r}`),T()}})}else a.text(`${r}'s Data:`,o,e),e+=6,a.text(`Command Points Unused: ${L}`,o,e),e+=6,a.text(`Score per Round: ${u.join(", ")}`,o,e),e+=6,a.text(`Total Score: ${Z(u,N)}`,o,e),e+=6,a.text(`Painted Bonus: ${N?"Yes":"No"}`,o,e),e+=10};await b(k,m,y,f,v),e+=20,await b(I,x,c,i,R),a.addPage(),e=30,a.setFontSize(16),a.text("Unit Data:",o,e),e+=10,d.forEach(r=>{e+60>C&&(a.addPage(),e=30),a.text(`Unit: ${r.name}`,o,e),e+=6,a.text(`Kills: ${r.kills}`,o,e),e+=6,a.text(`Destroyed: ${r.destroyed?"Yes":"No"}`,o,e),e+=6,a.text(`Category: ${r.category}`,o,e),e+=6,a.text(`Agenda: ${r.agenda||""}`,o,e),e+=6,a.text(`Agenda Completed: ${r.agendaCompleted?"Yes":"No"}`,o,e),e+=6,a.text("----------------------------------------------------",o,e),e+=10});const j=g?new Date(g).toLocaleDateString("en-CA"):new Date().toLocaleDateString("en-CA"),A=n?`${n}_${j}.pdf`:`game_data_${j}.pdf`;a.save(A)},Te=ye({palette:{mode:"dark"}}),Le=()=>{var Y,K,_,X;const d=ie(),m=le(),[x,y]=s.useState(((Y=m.state)==null?void 0:Y.player1Name)||localStorage.getItem("player1Name")||"Player 1"),[c,f]=s.useState(((K=m.state)==null?void 0:K.player1Faction)||JSON.parse(localStorage.getItem("player1Faction"))||{name:"Imperium",logo:""}),[i,g]=s.useState(((_=m.state)==null?void 0:_.player2Name)||localStorage.getItem("player2Name")||"Player 2"),[n,k]=s.useState(((X=m.state)==null?void 0:X.player2Faction)||JSON.parse(localStorage.getItem("player2Faction"))||{name:"Imperium",logo:""}),[I,v]=s.useState(P("units")||[]),[R,a]=s.useState(P("commandPointsPlayer1")||0),[C,o]=s.useState(P("commandPointsPlayer2")||0),[e,w]=s.useState(P("rosterText")||""),[$,b]=s.useState(P("roundPointsPlayer1")||Array(5).fill(0)),[j,A]=s.useState(P("roundPointsPlayer2")||Array(5).fill(0)),[r,L]=s.useState(P("paintedBonusPlayer1")||!1),[u,N]=s.useState(P("paintedBonusPlayer2")||!1),[F,D]=s.useState(P("gameDate")||""),[T,E]=s.useState(P("customFileName")||""),[U,H]=s.useState(["roster","cp","vp"]),[V,ee]=s.useState(!0);s.useEffect(()=>{localStorage.setItem("player1Name",x),localStorage.setItem("player2Name",i),localStorage.setItem("player1Faction",JSON.stringify(c)),localStorage.setItem("player2Faction",JSON.stringify(n)),h("units",I),h("commandPointsPlayer1",R),h("commandPointsPlayer2",C),h("rosterText",e),h("roundPointsPlayer1",$),h("roundPointsPlayer2",j),h("paintedBonusPlayer1",r),h("paintedBonusPlayer2",u),h("gameDate",F),h("customFileName",T)},[x,i,c,n,I,R,C,e,$,j,r,u,F,T]);const te=(l,B,ne)=>{v(re=>re.map(z=>z.id===l?{...z,[B]:ne}:z))},ae=()=>{d("/",{state:{playerMode:"2"}})},W=()=>{Pe({setUnits:v,setCommandPointsPlayer1:a,setCommandPointsPlayer2:o,setRosterText:w,setRoundPointsPlayer1:b,setRoundPointsPlayer2:A,setPaintedBonusPlayer1:L,setPaintedBonusPlayer2:N,setGameDate:D,setCustomFileName:E,setPlayer1Name:y,setPlayer2Name:g,setPlayer1Faction:f,setPlayer2Faction:k})},oe=()=>{De({units:I,commandPointsPlayer1:R,commandPointsPlayer2:C,roundPointsPlayer1:$,roundPointsPlayer2:j,paintedBonusPlayer1:r,paintedBonusPlayer2:u,gameDate:F,customFileName:T,player1Name:x,player2Name:i,player1FactionLogo:c.logo,player2FactionLogo:n.logo})},se=()=>{ee(l=>!l)};return t.jsx(de,{theme:Te,children:t.jsxs(je,{maxWidth:"md",sx:{paddingTop:{xs:"56px",sm:"64px"},paddingBottom:"20px"},children:[t.jsx(Ce,{onExportPDF:oe,onNavigateHome:ae,onReset:W,context:"twoPlayer",onToggleLogo:se,logoVisible:V,currentPage:"App2Player"}),V&&t.jsx(p,{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:3,children:t.jsx("img",{src:$e,alt:"Logo",style:{height:"150px",width:"100%",objectFit:"contain",marginBottom:"20px"}})}),t.jsxs(p,{className:"scrollable-container",children:[t.jsxs(G,{expanded:U.includes("roster"),onChange:()=>H(l=>l.includes("roster")?l.filter(B=>B!=="roster"):[...l,"roster"]),children:[t.jsx(J,{expandIcon:t.jsx(M,{}),"aria-controls":"roster-content",id:"roster-header",children:t.jsx(S,{variant:"h6",children:"Roster"})}),t.jsxs(O,{children:[t.jsx(me,{rosterText:e,setRosterText:w,gameDate:F,setGameDate:D,customFileName:T,setCustomFileName:E,parseRoster:()=>v(xe(e)),resetData:W}),t.jsx(ge,{units:I,updateUnit:te})]})]}),t.jsxs(G,{expanded:U.includes("cp"),onChange:()=>H(l=>l.includes("cp")?l.filter(B=>B!=="cp"):[...l,"cp"]),children:[t.jsx(J,{expandIcon:t.jsx(M,{}),"aria-controls":"cp-content",id:"cp-header",children:t.jsx(S,{variant:"h6",children:"Command Points"})}),t.jsx(O,{children:t.jsxs(p,{display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"center",marginBottom:2,children:[t.jsxs(p,{display:"flex",alignItems:"center",mb:{xs:2,sm:0},children:[c.logo&&t.jsx("img",{src:c.logo,alt:`${c.name} logo`,style:{height:"60px",maxWidth:"100%",objectFit:"contain",marginRight:"10px"}}),t.jsx(pe,{commandPoints:R,setCommandPoints:a,customHeading:`${x} - CP`})]}),t.jsxs(p,{display:"flex",alignItems:"center",children:[t.jsx(Ne,{commandPoints:C,setCommandPoints:o,customHeading:`${i} - CP`}),n.logo&&t.jsx("img",{src:n.logo,alt:`${n.name} logo`,style:{height:"60px",maxWidth:"100%",objectFit:"contain",marginLeft:"10px"}})]})]})})]}),t.jsxs(G,{expanded:U.includes("vp"),onChange:()=>H(l=>l.includes("vp")?l.filter(B=>B!=="vp"):[...l,"vp"]),children:[t.jsx(J,{expandIcon:t.jsx(M,{}),"aria-controls":"vp-content",id:"vp-header",children:t.jsx(S,{variant:"h6",children:"Victory Points"})}),t.jsxs(O,{children:[t.jsx(ue,{roundPoints:$,setRoundPoints:b,paintedBonus:r,setPaintedBonus:L,customHeading:`${x} - VP`}),t.jsx(Fe,{roundPoints:j,setRoundPoints:A,paintedBonus:u,setPaintedBonus:N,customHeading:`${i} - VP`})]})]}),t.jsx(p,{flexGrow:1}),t.jsxs(S,{variant:"h6",align:"center",className:"total-score",gutterBottom:!0,children:["Total Score ",x,": ",q($,r)]}),t.jsxs(S,{variant:"h6",align:"center",className:"total-score",gutterBottom:!0,children:["Total Score ",i,": ",q(j,u)]})]})]})})};export{Le as default};
