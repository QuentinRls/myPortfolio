"use strict";(self.webpackChunkmywebsite=self.webpackChunkmywebsite||[]).push([[867],{867:(e,s,n)=>{n.r(s),n.d(s,{default:()=>d});var r=n(791);const t=e=>e<=1080?["rgb(91 75 210 / 40%) 0px 5px, \n  rgb(75 140 210 / 30%) 0px 10px, \n  rgb(75 203 210 / 20%) 0px 15px, \n  rgb(75 203 210 / 10%) 0px 20px, \n  rgb(75 210 186 / 5%) 0px 25px","rgb(91 75 210 / 40%) 0px 5px, \n  rgb(75 140 210 / 30%) 0px 10px, \n  rgb(75 203 210 / 20%) 0px 15px, \n  rgb(75 203 210 / 10%) 0px 20px, \n  rgb(75 210 186 / 5%) 0px 25px","rgb(91 75 210 / 40%) 0px 5px, \n  rgb(75 140 210 / 30%) 0px 10px, \n  rgb(75 203 210 / 20%) 0px 15px, \n  rgb(75 203 210 / 10%) 0px 20px, \n  rgb(75 210 186 / 5%) 0px 25px"]:["rgb(91 75 210 / 40%) -5px 5px, \n  rgb(75 140 210 / 30%) -10px 10px, \n  rgb(75 203 210 / 20%) -15px 15px, \n  rgb(75 203 210 / 10%) -20px 20px, \n  rgb(75 210 186 / 5%) -25px 25px","rgb(91 75 210 / 40%) 0px 5px, \n  rgb(75 140 210 / 30%) 0px 10px, \n  rgb(75 203 210 / 20%) 0px 15px, \n  rgb(75 203 210 / 10%) 0px 20px, \n  rgb(75 210 186 / 5%) 0px 25px","rgb(91 75 210 / 40%) 5px 5px, \n  rgb(75 140 210 / 30%) 10px 10px, \n  rgb(75 203 210 / 20%) 15px 15px, \n  rgb(75 203 210 / 10%) 20px 20px, \n  rgb(75 210 186 / 5%) 25px 25px"];var l=n(184);const i=function(e){let{onClear:s}=e;const[n,t]=(0,r.useState)(""),[i,a]=(0,r.useState)(""),[o,c]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{s&&s((()=>a("")))}),[s]),(0,l.jsxs)("div",{className:"form-container",children:[(0,l.jsx)("h1",{children:"Assistant Juridique par IA"}),(0,l.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),n){c(!0);try{const e=await fetch("http://localhost:3000/legal-query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:n})}),s=await e.json();a(s.answer)}catch(s){console.error("Erreur lors de l'envoi de la requ\xeate :",s),a("Une erreur est survenue. Veuillez r\xe9essayer.")}finally{c(!1)}}else alert("Veuillez entrer une question ou une recherche.")},className:"form",children:[(0,l.jsx)("label",{htmlFor:"questionInput",className:"form-label",children:"Posez votre question :"}),(0,l.jsx)("input",{id:"questionInput",type:"text",placeholder:"Ex : Quelle est la diff\xe9rence entre homicide et meurtre ?",value:n,onChange:e=>t(e.target.value),required:!0}),(0,l.jsx)("button",{type:"submit",className:"analyze-btn",disabled:o,children:o?"Recherche en cours...":"Rechercher"})]}),i&&(0,l.jsxs)("div",{className:"legal-rag-result",children:[(0,l.jsx)("h2",{children:"R\xe9sultat :"}),(e=>{console.log(e);return e.split("\n").map(((e,s)=>{const n=e.split(/(\*\*.*?\*\*|#.*?#)/);return(0,l.jsx)("p",{className:"legal-paragraph",children:n.map(((e,s)=>{if(e.startsWith("**")&&e.endsWith("**")){const n=e.slice(2,-2).trim();return(0,l.jsx)("h2",{className:"legal-title",children:n},s)}if(e.startsWith("#")&&e.endsWith("#")){const n=e.slice(1,-1).trim();return(0,l.jsx)("strong",{className:"legal-bold",children:n},s)}return e}))},s)}))})(i)]})]})};const a=function(e){let{onResult:s,onClear:n}=e;const[t,i]=(0,r.useState)(null),[a,o]=(0,r.useState)(""),[c,d]=(0,r.useState)(!1),[p,x]=(0,r.useState)(null);return(0,l.jsxs)("div",{className:"form-container",children:[(0,l.jsx)("h1",{children:"V\xe9rificateur et \xc9valuateur de CV par IA Gratuit"}),p?(0,l.jsxs)("div",{className:"result-container",children:[(0,l.jsx)("h1",{children:"R\xe9sultat de l'analyse :"}),(0,l.jsx)("div",{children:(e=>{if(!e||!e.analysis)return null;return e.analysis.split("\n").map(((e,s)=>{if(e.startsWith("**")&&e.endsWith("**")){const n=e.slice(2,-2).trim();return(0,l.jsx)("h2",{className:"result-title",children:n},s)}return(0,l.jsx)("p",{className:"result-paragraph",children:e},s)}))})(p)})]}):(0,l.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),!t)return void alert("Veuillez t\xe9l\xe9charger un fichier PDF.");const n=new FormData;n.append("cvFile",t),n.append("jobPosition",a),d(!0);try{const e=await fetch("http://localhost:3000/upload-cv",{method:"POST",body:n}),r=await e.json();x(r),s(r)}catch(r){console.error("Erreur lors de l'envoi du formulaire :",r)}finally{d(!1)}},className:"form",children:[(0,l.jsxs)("div",{className:"upload-box",children:[(0,l.jsxs)("label",{htmlFor:"fileInput",children:[t?t.name:"Cliquez pour t\xe9l\xe9charger ou glissez et d\xe9posez votre CV ici",(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:t?"":"PDF ou DOCX"})]}),(0,l.jsx)("input",{id:"fileInput",type:"file",accept:".pdf,.docx",onChange:e=>{const s=e.target.files[0];s&&i(s)},required:!0})]}),(0,l.jsxs)("div",{className:"job-box",children:[(0,l.jsx)("label",{htmlFor:"jobPosition",className:"form-label",children:"Poste recherch\xe9 (optionnel) :"}),(0,l.jsx)("input",{id:"jobPosition",type:"text",placeholder:"Entrez le poste recherch\xe9 (ex : D\xe9veloppeur Web)",value:a,onChange:e=>o(e.target.value)})]}),(0,l.jsx)("button",{type:"submit",className:"analyze-btn",disabled:c,children:c?"Analyse en cours...":"Analysez Mon CV"})]})]})},o=e=>{let{shadowStyles:s,content:n,onClick:r,isExpanded:t,isHidden:i,onReturn:a}=e;return(0,l.jsxs)("div",{className:"card ".concat(t?"expanded":""," ").concat(i?"hidden":""),style:t?{boxShadow:s,width:"100%",maxWidth:"80vw"}:{boxShadow:s},children:[t&&(0,l.jsx)("button",{className:"goBack-btn",onClick:a,children:"Retour"}),n(t)]})},c=()=>{const[e,s]=(0,r.useState)(window.innerWidth),[n,c]=(0,r.useState)(null),[d,p]=(0,r.useState)(null),x=()=>{s(window.innerWidth)},u=()=>{d&&p(null),c(null)};(0,r.useEffect)((()=>(window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)})),[]);const h=t(e),b=[e=>e?(0,l.jsx)(i,{}):(0,l.jsxs)("div",{className:"card-intro",children:[(0,l.jsx)("h2",{children:"Assistant Juridique"}),(0,l.jsx)("p",{children:"Posez vos questions juridiques et obtenez des r\xe9ponses pr\xe9cises."}),(0,l.jsx)("button",{onClick:()=>c(0),children:"Utiliser"})]}),e=>e?(0,l.jsx)("div",{children:(0,l.jsx)(a,{onResult:e=>p(e),onClear:u})}):(0,l.jsxs)("div",{className:"card-intro",children:[(0,l.jsx)("h2",{children:"Analyseur de CV"}),(0,l.jsx)("p",{children:"Analysez votre CV et obtenez des conseils personnalis\xe9s."}),(0,l.jsx)("button",{onClick:()=>c(1),children:"Utiliser"})]}),e=>e?(0,l.jsx)("div",{children:(0,l.jsx)(a,{onResult:e=>p(e),onClear:u})}):(0,l.jsxs)("div",{className:"card-intro",children:[(0,l.jsx)("h2",{children:"Analyseur de CV"}),(0,l.jsx)("p",{children:"Analysez votre CV et obtenez des conseils personnalis\xe9s."}),(0,l.jsx)("button",{onClick:()=>c(2),children:"Utiliser"})]})];return(0,l.jsx)("div",{className:"cards",children:b.map(((e,s)=>(0,l.jsx)(o,{shadowStyles:h[s],content:e,onClick:()=>c(s),onReturn:u,isExpanded:n===s,isHidden:null!==n&&n!==s},s)))})},d=()=>(0,l.jsxs)("section",{id:"project",className:"libContent",children:[(0,l.jsxs)("h1",{className:"textLib",children:[(0,l.jsx)("span",{style:{color:"aquamarine"},children:"III. "}),"Applications"]}),(0,l.jsx)(c,{})]})}}]);
//# sourceMappingURL=867.be9a02c7.chunk.js.map