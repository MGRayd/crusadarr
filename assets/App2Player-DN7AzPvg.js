import{j as e,u as ne,a as re,r as l}from"./index-ZsVPCl_g.js";import{F as le,b as ie,E as ce,l as g,s as P,T as de,R as me,p as xe,U as ue,C as pe,a as ge,c as X,r as Pe}from"./rosterParser-Dfv8AVMN.js";import{B as y,T as S,b as q,a as ye,c as he,C as fe}from"./TextField-C-dckdQ4.js";import{N as Se,A as E,a as z,E as U,b as H}from"./Navbar-C3OXiSQW.js";/* empty css            */const je=({commandPoints:s,setCommandPoints:i,customHeading:c})=>{const n=()=>i(s+1),d=()=>{s>0&&i(s-1)};return e.jsxs(y,{className:"command-points",sx:{padding:2,textAlign:"center"},children:[e.jsx(S,{variant:"h5",gutterBottom:!0,children:c}),e.jsx(y,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsxs(y,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(q,{variant:"outlined",onClick:d,sx:{marginRight:1},children:"-"}),e.jsx(S,{variant:"h6",sx:{marginX:1},children:s}),e.jsx(q,{variant:"outlined",onClick:n,children:"+"})]})})]})},Ce=({roundPoints:s,setRoundPoints:i,paintedBonus:c,setPaintedBonus:n,customHeading:d})=>{const f=(r,p)=>{const x=[...s];x[r]=p===""?0:Math.max(0,parseInt(p,10)),i(x)};return e.jsxs(y,{id:"rounds-tracking",sx:{padding:2},children:[e.jsxs(S,{variant:"h5",gutterBottom:!0,children:[d," "]}),s.map((r,p)=>e.jsx(y,{sx:{marginBottom:1},children:e.jsx(ye,{label:`Round ${p+1} Points`,type:"number",value:r===0?"":r,onChange:x=>f(p,x.target.value),size:"small",variant:"outlined",fullWidth:!0,inputProps:{min:0}})},p)),e.jsx(le,{control:e.jsx(ie,{checked:c,onChange:r=>n(r.target.checked),color:"primary"}),label:"Painted Bonus"})]})},Q=(s,i)=>{const n=s.reduce((d,f)=>d+f,0)+(i?10:0);return Math.min(n,100)},Re=async({units:s,commandPointsPlayer1:i,commandPointsPlayer2:c,roundPointsPlayer1:n,roundPointsPlayer2:d,paintedBonusPlayer1:f,paintedBonusPlayer2:r,gameDate:p,customFileName:x,player1Name:b,player2Name:j,player1FactionLogo:T,player2FactionLogo:C})=>{const o=new ce,m=20;let a=m;if(o.setFontSize(20),o.text(`Game Date: ${p}`,m,a),a+=20,b&&T)try{const t=await Z(T);o.addImage(t,"PNG",m,a,30,30),o.text(`${b}`,m+35,a+20),a+=40}catch(t){console.error("Error loading player 1 faction icon:",t)}o.setFontSize(12),o.text(`Command Points Unused: ${i}`,m,a),a+=15;const I=[...n.map((t,h)=>[`Round ${h+1}`,t]),["Painted Bonus",f?10:0]];if(o.autoTable({startY:a,head:[["Round","Points"]],body:I,foot:[["Total Score",Q(n,f)]],styles:{fontSize:12,cellPadding:8},headStyles:{fillColor:[66,66,66],textColor:[255,255,255]},alternateRowStyles:{fillColor:[240,240,240]},footStyles:{fillColor:[66,66,66],textColor:[255,255,255],fontStyle:"bold",fontSize:14}}),o.addPage(),a=m,j&&C)try{const t=await Z(C);o.addImage(t,"PNG",m,a,30,30),o.text(`${j}`,m+35,a+20),a+=40}catch(t){console.error("Error loading player 2 faction icon:",t)}o.setFontSize(12),o.text(`Command Points Unused: ${c}`,m,a),a+=15;const v=[...d.map((t,h)=>[`Round ${h+1}`,t]),["Painted Bonus",r?10:0]];o.autoTable({startY:a,head:[["Round","Points"]],body:v,foot:[["Total Score",Q(d,r)]],styles:{fontSize:12,cellPadding:8},headStyles:{fillColor:[66,66,66],textColor:[255,255,255]},alternateRowStyles:{fillColor:[240,240,240]},footStyles:{fillColor:[66,66,66],textColor:[255,255,255],fontStyle:"bold",fontSize:14}}),s.length>0&&(o.addPage(),a=m,o.autoTable({startY:a,head:[["Unit Name","Points","Kills","Status","Agenda"]],body:s.map(t=>[t.name,t.points,t.kills,t.destroyed?"Destroyed":"Active",t.agenda?`${t.agenda}${t.agendaCompleted?" (Completed)":""}`:"-"]),styles:{fontSize:10,cellPadding:5},headStyles:{fillColor:[66,66,66],textColor:[255,255,255]},alternateRowStyles:{fillColor:[240,240,240]}}));const R=x?`${x}.pdf`:`crusade_report_2player_${new Date().toISOString().split("T")[0]}.pdf`;o.save(R)},Z=s=>new Promise((i,c)=>{const n=new Image;n.crossOrigin="Anonymous",n.onload=()=>i(n),n.onerror=c,n.src=s}),Ne=he({palette:{mode:"dark"}}),ve=()=>{var V,Y,_,K;const s=ne(),i=re(),[c,n]=l.useState(((V=i.state)==null?void 0:V.player1Name)||localStorage.getItem("player1Name")||"Player 1"),[d,f]=l.useState(((Y=i.state)==null?void 0:Y.player1Faction)||JSON.parse(localStorage.getItem("player1Faction"))||{name:"Imperium",logo:""}),[r,p]=l.useState(((_=i.state)==null?void 0:_.player2Name)||localStorage.getItem("player2Name")||"Player 2"),[x,b]=l.useState(((K=i.state)==null?void 0:K.player2Faction)||JSON.parse(localStorage.getItem("player2Faction"))||{name:"Imperium",logo:""}),[j,T]=l.useState(g("units")||[]),[C,o]=l.useState(g("commandPointsPlayer1")||0),[m,a]=l.useState(g("commandPointsPlayer2")||0),[I,v]=l.useState(g("rosterText")||""),[R,t]=l.useState(g("roundPointsPlayer1")||Array(5).fill(0)),[h,O]=l.useState(g("roundPointsPlayer2")||Array(5).fill(0)),[F,G]=l.useState(g("paintedBonusPlayer1")||!1),[B,J]=l.useState(g("paintedBonusPlayer2")||!1),[D,L]=l.useState(g("gameDate")||""),[$,M]=l.useState(g("customFileName")||""),[w,k]=l.useState(["roster","cp","vp"]);l.useEffect(()=>{localStorage.setItem("player1Name",c),localStorage.setItem("player2Name",r),localStorage.setItem("player1Faction",JSON.stringify(d)),localStorage.setItem("player2Faction",JSON.stringify(x)),P("units",j),P("commandPointsPlayer1",C),P("commandPointsPlayer2",m),P("rosterText",I),P("roundPointsPlayer1",R),P("roundPointsPlayer2",h),P("paintedBonusPlayer1",F),P("paintedBonusPlayer2",B),P("gameDate",D),P("customFileName",$)},[c,r,d,x,j,C,m,I,R,h,F,B,D,$]);const ee=(u,N,oe)=>{T(se=>se.map(A=>A.id===u?{...A,[N]:oe}:A))},te=()=>{s("/",{state:{playerMode:"2"}})},W=()=>{Pe({setUnits:T,setCommandPointsPlayer1:o,setCommandPointsPlayer2:a,setRosterText:v,setRoundPointsPlayer1:t,setRoundPointsPlayer2:O,setPaintedBonusPlayer1:G,setPaintedBonusPlayer2:J,setGameDate:L,setCustomFileName:M,setPlayer1Name:n,setPlayer2Name:p,setPlayer1Faction:f,setPlayer2Faction:b})},ae=()=>{Re({units:j,commandPointsPlayer1:C,commandPointsPlayer2:m,roundPointsPlayer1:R,roundPointsPlayer2:h,paintedBonusPlayer1:F,paintedBonusPlayer2:B,gameDate:D,customFileName:$,player1Name:c,player2Name:r,player1FactionLogo:d.logo,player2FactionLogo:x.logo})};return e.jsx(de,{theme:Ne,children:e.jsxs(fe,{maxWidth:"md",sx:{paddingTop:{xs:"56px",sm:"64px"},paddingBottom:"20px"},children:[e.jsx(Se,{onExportPDF:ae,onNavigateHome:te,onReset:W,context:"twoPlayer",currentPage:"App2Player"}),e.jsxs(y,{className:"scrollable-container",children:[e.jsxs(E,{expanded:w.includes("roster"),onChange:()=>k(u=>u.includes("roster")?u.filter(N=>N!=="roster"):[...u,"roster"]),children:[e.jsx(z,{expandIcon:e.jsx(U,{}),"aria-controls":"roster-content",id:"roster-header",children:e.jsx(S,{variant:"h6",children:"Roster"})}),e.jsxs(H,{children:[e.jsx(me,{rosterText:I,setRosterText:v,gameDate:D,setGameDate:L,customFileName:$,setCustomFileName:M,parseRoster:()=>T(xe(I)),resetData:W}),e.jsx(ue,{units:j,updateUnit:ee})]})]}),e.jsxs(E,{expanded:w.includes("cp"),onChange:()=>k(u=>u.includes("cp")?u.filter(N=>N!=="cp"):[...u,"cp"]),children:[e.jsx(z,{expandIcon:e.jsx(U,{}),"aria-controls":"cp-content",id:"cp-header",children:e.jsx(S,{variant:"h6",children:"Command Points"})}),e.jsx(H,{children:e.jsxs(y,{display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"center",marginBottom:2,children:[e.jsxs(y,{display:"flex",alignItems:"center",mb:{xs:2,sm:0},children:[d.logo&&e.jsx("img",{src:d.logo,alt:`${d.name} logo`,style:{height:"60px",maxWidth:"100%",objectFit:"contain",marginRight:"10px"}}),e.jsx(pe,{commandPoints:C,setCommandPoints:o,customHeading:`${c} - CP`})]}),e.jsxs(y,{display:"flex",alignItems:"center",children:[e.jsx(je,{commandPoints:m,setCommandPoints:a,customHeading:`${r} - CP`}),x.logo&&e.jsx("img",{src:x.logo,alt:`${x.name} logo`,style:{height:"60px",maxWidth:"100%",objectFit:"contain",marginLeft:"10px"}})]})]})})]}),e.jsxs(E,{expanded:w.includes("vp"),onChange:()=>k(u=>u.includes("vp")?u.filter(N=>N!=="vp"):[...u,"vp"]),children:[e.jsx(z,{expandIcon:e.jsx(U,{}),"aria-controls":"vp-content",id:"vp-header",children:e.jsx(S,{variant:"h6",children:"Victory Points"})}),e.jsxs(H,{children:[e.jsx(ge,{roundPoints:R,setRoundPoints:t,paintedBonus:F,setPaintedBonus:G,customHeading:`${c} - VP`}),e.jsx(Ce,{roundPoints:h,setRoundPoints:O,paintedBonus:B,setPaintedBonus:J,customHeading:`${r} - VP`})]})]}),e.jsx(y,{flexGrow:1}),e.jsxs(S,{variant:"h6",align:"center",className:"total-score",gutterBottom:!0,children:["Total Score "," ",c,": ",X(R,F)]}),e.jsxs(S,{variant:"h6",align:"center",className:"total-score",gutterBottom:!0,children:["Total Score "," ",r,": ",X(h,B)]})]})]})})};export{ve as default};
