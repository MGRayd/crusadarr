import{u as H,r as i,j as e}from"./index-ZsVPCl_g.js";import{E as Y,c as O,l as c,s as m,T as J,R as X,p as Z,U as Q,C as _,a as q,r as ee}from"./rosterParser-Dfv8AVMN.js";import{N as te,A as T,a as P,E as U,b}from"./Navbar-C3OXiSQW.js";/* empty css            */import{c as se,C as ae,B as j,T as A,a as F}from"./TextField-C-dckdQ4.js";import{A as oe}from"./Autocomplete-DhpFMNV4.js";const re=async({units:f,commandPoints:u,roundPoints:p,paintedBonus:o,gameDate:R,customFileName:h,playerName:C,playerFaction:d})=>{const r=new Y,l=20;let n=l;if((C||d)&&d!=null&&d.icon)try{const a=await ne(d.icon);r.addImage(a,"PNG",l,n,30,30),r.setFontSize(20),r.text(`${C} - ${d.name}`,l+35,n+20),n+=40}catch(a){console.error("Error loading faction icon:",a)}r.setFontSize(12),r.text(`Game Date: ${R}`,l,n),n+=10,r.text(`Command Points Unused: ${u}`,l,n),n+=15,f.length>0&&r.autoTable({startY:n,head:[["Unit Name","Points","Kills","Status","Agenda"]],body:f.map(a=>[a.name,a.points,a.kills,a.destroyed?"Destroyed":"Active",a.agenda?`${a.agenda}${a.agendaCompleted?" (Completed)":""}`:"-"]),styles:{fontSize:10,cellPadding:5},headStyles:{fillColor:[66,66,66],textColor:[255,255,255]},alternateRowStyles:{fillColor:[240,240,240]}}),r.addPage(),n=l;const x=[...p.map((a,D)=>[`Round ${D+1}`,a]),["Painted Bonus",o?10:0]];r.autoTable({startY:n,head:[["Round","Points"]],body:x,foot:[["Total Score",O(p,o)]],styles:{fontSize:12,cellPadding:8},headStyles:{fillColor:[66,66,66],textColor:[255,255,255]},alternateRowStyles:{fillColor:[240,240,240]},footStyles:{fillColor:[66,66,66],textColor:[255,255,255],fontStyle:"bold",fontSize:14}});const S=h?`${h}.pdf`:`crusade_report_${new Date().toISOString().split("T")[0]}.pdf`;r.save(S)},ne=f=>new Promise((u,p)=>{const o=new Image;o.crossOrigin="Anonymous",o.onload=()=>u(o),o.onerror=p,o.src=f}),le={"Adepta Sororitas":new URL("/assets/Adepta%20Sororitas-DbARundJ.png",import.meta.url).href,"Adeptus Astartes":new URL("/assets/Adeptus%20Astartes-ByxXKWaT.png",import.meta.url).href,"Adeptus Custodes":new URL("/assets/Adeptus%20Custodes-DwhGV3W7.png",import.meta.url).href,"Adeptus Mechanicus":new URL("/assets/Adeptus%20Mechanicus-ZT2tJnKT.png",import.meta.url).href,"Astra Militarum":new URL("/assets/Astra%20Militarum-Cm6yDmm8.png",import.meta.url).href,"Black Templars":new URL("/assets/Black%20Templars-BqeX-oKn.png",import.meta.url).href,"Blood Angels":new URL("/assets/Blood%20Angels-Thv6VWZY.png",import.meta.url).href,"Dark Angels":new URL("/assets/Dark%20Angels-BPVAn0jy.png",import.meta.url).href,"Leagues of Votann":new URL("/assets/Leagues%20of%20Votann-B9BRcQt4.png",import.meta.url).href,"Space Wolves":new URL("/assets/Space%20Wolves-yvOHL0rg.png",import.meta.url).href},ie={"Alpha Legion":new URL("/assets/Alpha%20Legion-Dfj8t4r4.png",import.meta.url).href,"Chaos Daemons":new URL("/assets/Chaos%20Daemons-Dw4QSGYZ.png",import.meta.url).href,"Death Guard":new URL("/assets/Death%20Guard-D8KK68Rc.png",import.meta.url).href,Khorne:new URL("/assets/Khorne-CYlgl0Mo.png",import.meta.url).href,Nurgle:new URL("/assets/Nurgle-BoJGtIA6.png",import.meta.url).href,Slaanesh:new URL("/assets/Slaanesh-CVww3zLR.png",import.meta.url).href,"Thousand Sons":new URL("/assets/Thousand%20Sons-_Nx5U5cX.png",import.meta.url).href,"World Bearers":new URL("/assets/World%20Bearers-KS1FrLoz.png",import.meta.url).href,"World Eaters":new URL("/assets/World%20Eaters-C6emTi4G.png",import.meta.url).href},de={Aeldari:new URL("/assets/Aeldari-CzHWfarH.png",import.meta.url).href,Drukhari:new URL("/assets/Drukhari-Dc7l7D88.png",import.meta.url).href,"Genestealer Cults":new URL("/assets/Genestealer%20Cults-B8rw2H0n.png",import.meta.url).href,Necrons:new URL("/assets/Necrons-DJHTR9gZ.png",import.meta.url).href,Orks:new URL("/assets/Orks-Mw7noQTU.png",import.meta.url).href,Tau:new URL("/assets/Tau-DAKVBcjD.png",import.meta.url).href,Tyranids:new URL("/assets/Tyranids-DNnnzee7.png",import.meta.url).href},ce={Imperium:le,Chaos:ie,Xenos:de},me=se({palette:{mode:"dark"}}),we=()=>{const f=H(),[u,p]=i.useState(["roster","cp","vp"]),[o,R]=i.useState(c("units")||[]),[h,C]=i.useState(c("commandPoints")||0),[d,r]=i.useState(c("rosterText")||""),[l,n]=i.useState(c("roundPoints")||Array(5).fill(0)),[x,S]=i.useState(c("paintedBonus")||!1),[a,D]=i.useState(c("gameDate")||""),[L,I]=i.useState(c("customFileName")||""),[w,v]=i.useState(c("playerName")||""),[g,E]=i.useState(c("playerFaction")||""),[M,W]=i.useState(!0);i.useEffect(()=>{m("units",o),m("commandPoints",h),m("rosterText",d),m("roundPoints",l),m("paintedBonus",x),m("gameDate",a),m("customFileName",L),m("playerName",w),m("playerFaction",g)},[o,h,d,l,x,a,L,w,g]);const G=(t,s,B)=>{R(N=>N.map(y=>y.id===t?{...y,[s]:B}:y))},K=()=>{re({units:o,commandPoints:h,roundPoints:l,paintedBonus:x,gameDate:a,customFileName:L,playerName:w,playerFaction:g})},z=()=>{f("/",{state:{playerMode:"1"}})},k=()=>{ee({setUnits:R,setCommandPoints:C,setRosterText:r,setRoundPoints:n,setPaintedBonus:S,setGameDate:D,setCustomFileName:I,setPlayerName:v,setPlayerFaction:E})},V=t=>{v(t.target.value)},$=()=>{const t=[];return Object.entries(ce).forEach(([s,B])=>{Object.entries(B).forEach(([N,y])=>{t.push({category:s,name:N,icon:y})})}),t};return e.jsx(J,{theme:me,children:e.jsxs(ae,{maxWidth:"md",sx:{paddingTop:{xs:"56px",sm:"64px"},paddingBottom:"20px"},children:[e.jsx(te,{onExportPDF:K,onNavigateHome:z,onReset:k,context:"singlePlayer",currentPage:"App"}),e.jsxs(j,{className:"scrollable-container",children:[e.jsxs(T,{expanded:M,onChange:()=>W(!M),children:[e.jsx(P,{expandIcon:e.jsx(U,{}),"aria-controls":"player-info-content",id:"player-info-header",children:e.jsxs(j,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(A,{variant:"h6",children:w||"Player Information"}),g&&e.jsx("img",{src:g.icon,alt:g.name,style:{width:"80px",height:"80px"}})]})}),e.jsx(b,{children:e.jsxs(j,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(F,{label:"Player Name",value:w,onChange:V,fullWidth:!0,sx:{"& .MuiOutlinedInput-root":{color:"white","& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#90caf9"},"&.Mui-focused fieldset":{borderColor:"#90caf9"}},"& .MuiInputLabel-root":{color:"white"}}}),e.jsx(oe,{value:g,onChange:(t,s)=>{E(s)},options:$(),groupBy:t=>t.category,getOptionLabel:t=>(t==null?void 0:t.name)||"",isOptionEqualToValue:(t,s)=>(t==null?void 0:t.name)===(s==null?void 0:s.name),renderOption:(t,s)=>e.jsx(j,{component:"li",...t,children:e.jsxs(j,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx("img",{src:s.icon,alt:s.name,style:{width:"80px",height:"80px"}}),s.name]})}),renderInput:t=>e.jsx(F,{...t,label:"Faction",sx:{"& .MuiOutlinedInput-root":{color:"white","& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#90caf9"},"&.Mui-focused fieldset":{borderColor:"#90caf9"}},"& .MuiInputLabel-root":{color:"white"}}}),sx:{"& .MuiAutocomplete-groupLabel":{color:"#90caf9",fontWeight:"bold"},"& .MuiAutocomplete-paper":{backgroundColor:"#424242"},"& .MuiAutocomplete-option":{color:"white"}}})]})})]}),e.jsxs(T,{expanded:u.includes("roster"),onChange:()=>p(t=>t.includes("roster")?t.filter(s=>s!=="roster"):[...t,"roster"]),children:[e.jsx(P,{expandIcon:e.jsx(U,{}),"aria-controls":"roster-content",id:"roster-header",children:e.jsx(A,{variant:"h6",children:"Roster"})}),e.jsxs(b,{children:[e.jsx(X,{rosterText:d,setRosterText:r,gameDate:a,setGameDate:D,customFileName:L,setCustomFileName:I,parseRoster:()=>R(Z(d)),resetData:k}),e.jsx(Q,{units:o,updateUnit:G})]})]}),e.jsxs(T,{expanded:u.includes("cp"),onChange:()=>p(t=>t.includes("cp")?t.filter(s=>s!=="cp"):[...t,"cp"]),children:[e.jsx(P,{expandIcon:e.jsx(U,{}),"aria-controls":"cp-content",id:"cp-header",children:e.jsx(A,{variant:"h6",children:"Command Points"})}),e.jsx(b,{children:e.jsx(_,{commandPoints:h,setCommandPoints:C})})]}),e.jsxs(T,{expanded:u.includes("vp"),onChange:()=>p(t=>t.includes("vp")?t.filter(s=>s!=="vp"):[...t,"vp"]),children:[e.jsx(P,{expandIcon:e.jsx(U,{}),"aria-controls":"vp-content",id:"vp-header",children:e.jsx(A,{variant:"h6",children:"Victory Points"})}),e.jsx(b,{children:e.jsx(q,{roundPoints:l,setRoundPoints:n,paintedBonus:x,setPaintedBonus:S})})]}),e.jsx(j,{flexGrow:1}),e.jsxs(A,{variant:"h6",align:"center",className:"total-score",gutterBottom:!0,children:["Total Score: ",O(l,x)]})]})]})})};export{we as default};
