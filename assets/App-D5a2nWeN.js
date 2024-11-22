import{u as q,r as i,j as e}from"./index-BCXtjTca.js";import{E as Y,c as F,l as c,s as m,T as V,R as _,p as Q,U as J,C as X,a as Z,r as ee}from"./rosterParser-CFhYN2sr.js";import{N as te,A as L,a as P,E as U,b}from"./Navbar-DR222XW4.js";/* empty css            */import{c as se,C as ae,B as w,T as A,a as O}from"./TextField-KQLi8rbr.js";import{A as oe}from"./Autocomplete-cZJex3kD.js";const re=async({units:f,commandPoints:u,roundPoints:p,paintedBonus:o,gameDate:y,customFileName:h,playerName:j,playerFaction:d})=>{const r=new Y,l=20;let n=l;if((j||d)&&d!=null&&d.icon)try{const a=await ne(d.icon);r.addImage(a,"PNG",l,n,30,30),r.setFontSize(20),r.text(`${j} - ${d.name}`,l+35,n+20),n+=40}catch(a){console.error("Error loading faction icon:",a)}r.setFontSize(12),r.text(`Game Date: ${y}`,l,n),n+=10,r.text(`Command Points Unused: ${u}`,l,n),n+=15,f.length>0&&r.autoTable({startY:n,head:[["Unit Name","Points","Kills","Status","Agenda"]],body:f.map(a=>[a.name,a.points,a.kills,a.destroyed?"Destroyed":"Active",a.agenda?`${a.agenda}${a.agendaCompleted?" (Completed)":""}`:"-"]),styles:{fontSize:10,cellPadding:5},headStyles:{fillColor:[66,66,66],textColor:[255,255,255]},alternateRowStyles:{fillColor:[240,240,240]}}),r.addPage(),n=l;const g=[...p.map((a,D)=>[`Round ${D+1}`,a]),["Painted Bonus",o?10:0]];r.autoTable({startY:n,head:[["Round","Points"]],body:g,foot:[["Total Score",F(p,o)]],styles:{fontSize:12,cellPadding:8},headStyles:{fillColor:[66,66,66],textColor:[255,255,255]},alternateRowStyles:{fillColor:[240,240,240]},footStyles:{fillColor:[66,66,66],textColor:[255,255,255],fontStyle:"bold",fontSize:14}});const S=h?`${h}.pdf`:`crusade_report_${new Date().toISOString().split("T")[0]}.pdf`;r.save(S)},ne=f=>new Promise((u,p)=>{const o=new Image;o.crossOrigin="Anonymous",o.onload=()=>u(o),o.onerror=p,o.src=f}),le={"Adepta Sororitas":new URL("/assets/Adepta%20Sororitas-yHiaLakY.png",import.meta.url).href,"Adeptus Astartes":new URL("/assets/Adeptus%20Astartes-DmCHPDqx.png",import.meta.url).href,"Adeptus Custodes":new URL("/assets/Adeptus%20Custodes-BzTTD9oK.png",import.meta.url).href,"Adeptus Mechanicus":new URL("/assets/Adeptus%20Mechanicus-DHnza-51.png",import.meta.url).href,"Astra Militarum":new URL("/assets/Astra%20Militarum-DdHmbm94.png",import.meta.url).href,"Black Templars":new URL("/assets/Black%20Templars-DHgsc1yf.png",import.meta.url).href,"Blood Angels":new URL("/assets/Blood%20Angels-C_0b1uFM.png",import.meta.url).href,"Dark Angels":new URL("/assets/Dark%20Angels-MHg-JEQm.png",import.meta.url).href,"Leagues of Votann":new URL("/assets/Leagues%20of%20Votann-BBs6GOcY.png",import.meta.url).href,"Space Wolves":new URL("/assets/Space%20Wolves-tbM6qvGJ.png",import.meta.url).href},ie={"Alpha Legion":new URL("/assets/Alpha%20Legion-CIge7ZkT.png",import.meta.url).href,"Chaos Daemons":new URL("/assets/Chaos%20Daemons-CApqTT5s.png",import.meta.url).href,"Death Guard":new URL("/assets/Death%20Guard-DvzNWpOY.png",import.meta.url).href,Khorne:new URL("/assets/Khorne-CMAzh2kt.png",import.meta.url).href,Nurgle:new URL("/assets/Nurgle-BEkw7Q7u.png",import.meta.url).href,Slaanesh:new URL("/assets/Slaanesh-Wybfl6eD.png",import.meta.url).href,"Thousand Sons":new URL("/assets/Thousand%20Sons-CvCkbwjS.png",import.meta.url).href,"World Bearers":new URL("/assets/World%20Bearers-DyORQbUc.png",import.meta.url).href,"World Eaters":new URL("/assets/World%20Eaters-CBSKqlo-.png",import.meta.url).href},de={Aeldari:new URL("/assets/Aeldari-MtTb0xIA.png",import.meta.url).href,Drukhari:new URL("/assets/Drukhari-kCUM2K6H.png",import.meta.url).href,"Genestealer Cults":new URL("/assets/Genestealer%20Cults-CynBgc42.png",import.meta.url).href,Necrons:new URL("/assets/Necrons-fTRcgW_S.png",import.meta.url).href,Orks:new URL("/assets/Orks-4XaAq8j4.png",import.meta.url).href,Tau:new URL("/assets/Tau-CKDRBT2o.png",import.meta.url).href,Tyranids:new URL("/assets/Tyranids-Dryw1-5z.png",import.meta.url).href},ce={Imperium:le,Chaos:ie,Xenos:de},me=se({palette:{mode:"dark"}}),Ce=()=>{const f=q(),[u,p]=i.useState(["roster","cp","vp"]),[o,y]=i.useState(c("units")||[]),[h,j]=i.useState(c("commandPoints")||0),[d,r]=i.useState(c("rosterText")||""),[l,n]=i.useState(c("roundPoints")||Array(5).fill(0)),[g,S]=i.useState(c("paintedBonus")||!1),[a,D]=i.useState(c("gameDate")||""),[T,B]=i.useState(c("customFileName")||""),[C,N]=i.useState(c("playerName")||""),[x,M]=i.useState(c("playerFaction")||""),[k,W]=i.useState(!0);i.useEffect(()=>{m("units",o),m("commandPoints",h),m("rosterText",d),m("roundPoints",l),m("paintedBonus",g),m("gameDate",a),m("customFileName",T),m("playerName",C),m("playerFaction",x)},[o,h,d,l,g,a,T,C,x]);const z=(t,s,I)=>{y(v=>v.map(R=>R.id===t?{...R,[s]:I}:R))},G=()=>{re({units:o,commandPoints:h,roundPoints:l,paintedBonus:g,gameDate:a,customFileName:T,playerName:C,playerFaction:x})},H=()=>{f("/",{state:{playerMode:"1"}})},E=()=>{window.confirm("Are you sure you want to reset all data?")&&ee({setUnits:y,setCommandPoints:j,setRosterText:r,setRoundPoints:n,setPaintedBonus:S,setGameDate:D,setCustomFileName:B,setPlayerName:N,setPlayerFaction:M})},$=t=>{N(t.target.value)},K=()=>{const t=[];return Object.entries(ce).forEach(([s,I])=>{Object.entries(I).forEach(([v,R])=>{t.push({category:s,name:v,icon:R})})}),t};return e.jsx(V,{theme:me,children:e.jsxs(ae,{maxWidth:"md",sx:{paddingTop:{xs:"56px",sm:"64px"},paddingBottom:"20px"},children:[e.jsx(te,{onExportPDF:G,onNavigateHome:H,onReset:E,context:"singlePlayer",currentPage:"App"}),e.jsxs(w,{className:"scrollable-container",children:[e.jsxs(L,{expanded:k,onChange:()=>W(!k),children:[e.jsx(P,{expandIcon:e.jsx(U,{}),"aria-controls":"player-info-content",id:"player-info-header",children:e.jsxs(w,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(A,{variant:"h6",children:C||"Player Information"}),x&&e.jsx("img",{src:x.icon,alt:x.name,style:{width:"80px",height:"80px"}})]})}),e.jsx(b,{children:e.jsxs(w,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(O,{label:"Player Name",value:C,onChange:$,fullWidth:!0,sx:{"& .MuiOutlinedInput-root":{color:"white","& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#90caf9"},"&.Mui-focused fieldset":{borderColor:"#90caf9"}},"& .MuiInputLabel-root":{color:"white"}}}),e.jsx(oe,{value:x,onChange:(t,s)=>{M(s)},options:K(),groupBy:t=>t.category,getOptionLabel:t=>(t==null?void 0:t.name)||"",isOptionEqualToValue:(t,s)=>(t==null?void 0:t.name)===(s==null?void 0:s.name),renderOption:(t,s)=>e.jsx(w,{component:"li",...t,children:e.jsxs(w,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx("img",{src:s.icon,alt:s.name,style:{width:"80px",height:"80px"}}),s.name]})}),renderInput:t=>e.jsx(O,{...t,label:"Faction",sx:{"& .MuiOutlinedInput-root":{color:"white","& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#90caf9"},"&.Mui-focused fieldset":{borderColor:"#90caf9"}},"& .MuiInputLabel-root":{color:"white"}}}),sx:{"& .MuiAutocomplete-groupLabel":{color:"#90caf9",fontWeight:"bold"},"& .MuiAutocomplete-paper":{backgroundColor:"#424242"},"& .MuiAutocomplete-option":{color:"white"}}})]})})]}),e.jsxs(L,{expanded:u.includes("roster"),onChange:()=>p(t=>t.includes("roster")?t.filter(s=>s!=="roster"):[...t,"roster"]),children:[e.jsx(P,{expandIcon:e.jsx(U,{}),"aria-controls":"roster-content",id:"roster-header",children:e.jsx(A,{variant:"h6",children:"Roster"})}),e.jsxs(b,{children:[e.jsx(_,{rosterText:d,setRosterText:r,gameDate:a,setGameDate:D,customFileName:T,setCustomFileName:B,parseRoster:()=>y(Q(d)),resetData:E}),e.jsx(J,{units:o,updateUnit:z})]})]}),e.jsxs(L,{expanded:u.includes("cp"),onChange:()=>p(t=>t.includes("cp")?t.filter(s=>s!=="cp"):[...t,"cp"]),children:[e.jsx(P,{expandIcon:e.jsx(U,{}),"aria-controls":"cp-content",id:"cp-header",children:e.jsx(A,{variant:"h6",children:"Command Points"})}),e.jsx(b,{children:e.jsx(X,{commandPoints:h,setCommandPoints:j})})]}),e.jsxs(L,{expanded:u.includes("vp"),onChange:()=>p(t=>t.includes("vp")?t.filter(s=>s!=="vp"):[...t,"vp"]),children:[e.jsx(P,{expandIcon:e.jsx(U,{}),"aria-controls":"vp-content",id:"vp-header",children:e.jsx(A,{variant:"h6",children:"Victory Points"})}),e.jsx(b,{children:e.jsx(Z,{roundPoints:l,setRoundPoints:n,paintedBonus:g,setPaintedBonus:S})})]}),e.jsx(w,{flexGrow:1}),e.jsxs(A,{variant:"h6",align:"center",className:"total-score",gutterBottom:!0,children:["Total Score: ",F(l,g)]})]})]})})};export{Ce as default};
