"use strict";(self.webpackChunkmywebsite=self.webpackChunkmywebsite||[]).push([[616],{616:(e,s,r)=>{r.r(s),r.d(s,{default:()=>d});var t=r(791);const n=e=>e<=1080?["rgb(91 75 210 / 40%) 0px 5px, \n  rgb(75 140 210 / 30%) 0px 10px, \n  rgb(75 203 210 / 20%) 0px 15px, \n  rgb(75 203 210 / 10%) 0px 20px, \n  rgb(75 210 186 / 5%) 0px 25px","rgb(91 75 210 / 40%) 0px 5px, \n  rgb(75 140 210 / 30%) 0px 10px, \n  rgb(75 203 210 / 20%) 0px 15px, \n  rgb(75 203 210 / 10%) 0px 20px, \n  rgb(75 210 186 / 5%) 0px 25px","rgb(91 75 210 / 40%) 0px 5px, \n  rgb(75 140 210 / 30%) 0px 10px, \n  rgb(75 203 210 / 20%) 0px 15px, \n  rgb(75 203 210 / 10%) 0px 20px, \n  rgb(75 210 186 / 5%) 0px 25px"]:["rgb(91 75 210 / 40%) -5px 5px, \n  rgb(75 140 210 / 30%) -10px 10px, \n  rgb(75 203 210 / 20%) -15px 15px, \n  rgb(75 203 210 / 10%) -20px 20px, \n  rgb(75 210 186 / 5%) -25px 25px","rgb(91 75 210 / 40%) 0px 5px, \n  rgb(75 140 210 / 30%) 0px 10px, \n  rgb(75 203 210 / 20%) 0px 15px, \n  rgb(75 203 210 / 10%) 0px 20px, \n  rgb(75 210 186 / 5%) 0px 25px","rgb(91 75 210 / 40%) 5px 5px, \n  rgb(75 140 210 / 30%) 10px 10px, \n  rgb(75 203 210 / 20%) 15px 15px, \n  rgb(75 203 210 / 10%) 20px 20px, \n  rgb(75 210 186 / 5%) 25px 25px"];var l=r(184);const i=function(e){let{onClear:s}=e;const[r,n]=(0,t.useState)(""),[i,a]=(0,t.useState)(""),[o,c]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{s&&s((()=>a("")))}),[s]),(0,l.jsxs)("div",{className:"form-container",children:[(0,l.jsx)("h1",{children:"Assistant Juridique par IA"}),(0,l.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),r){c(!0);try{const e=await fetch("https://mywebsiteserver-s92a.onrender.com/test-query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:r})}),s=await e.json();a(s.answer)}catch(s){console.error("Erreur lors de l'envoi de la requ\xeate :",s),a("Une erreur est survenue. Veuillez r\xe9essayer.")}finally{c(!1)}}else alert("Veuillez entrer une question ou une recherche.")},className:"form",children:[(0,l.jsx)("label",{htmlFor:"questionInput",className:"form-label",children:"Posez votre question :"}),(0,l.jsx)("input",{id:"questionInput",type:"text",placeholder:"Ex : Quelle est la diff\xe9rence entre homicide et meurtre ?",value:r,onChange:e=>n(e.target.value),required:!0}),(0,l.jsx)("button",{type:"submit",className:"analyze-btn",disabled:o,children:o?"Recherche en cours...":"Rechercher"})]}),i&&(0,l.jsxs)("div",{className:"legal-rag-result",children:[(0,l.jsx)("h2",{children:"R\xe9sultat :"}),(e=>{console.log(e);return e.split("\n").map(((e,s)=>{const r=e.split(/(\*\*.*?\*\*|#.*?#)/);return(0,l.jsx)("p",{className:"legal-paragraph",children:r.map(((e,s)=>{if(e.startsWith("**")&&e.endsWith("**")){const r=e.slice(2,-2).trim();return(0,l.jsx)("h2",{className:"legal-title",children:r},s)}if(e.startsWith("#")&&e.endsWith("#")){const r=e.slice(1,-1).trim();return(0,l.jsx)("strong",{className:"legal-bold",children:r},s)}return e}))},s)}))})(i)]})]})};const a=function(e){let{onClear:s}=e;const[r,n]=(0,t.useState)(""),[i,a]=(0,t.useState)(""),[o,c]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{s&&s((()=>a("")))}),[s]),(0,l.jsxs)("div",{className:"form-container",children:[(0,l.jsx)("h1",{children:"Assistant Juridique par IA"}),(0,l.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),r){c(!0);try{const e=await fetch("https://mywebsiteserver-s92a.onrender.com/legal-query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:r})}),s=await e.json();a(s.answer)}catch(s){console.error("Erreur lors de l'envoi de la requ\xeate :",s),a("Une erreur est survenue. Veuillez r\xe9essayer.")}finally{c(!1)}}else alert("Veuillez entrer une question ou une recherche.")},className:"form",children:[(0,l.jsx)("label",{htmlFor:"questionInput",className:"form-label",children:"Posez votre question :"}),(0,l.jsx)("input",{id:"questionInput",type:"text",placeholder:"Ex : Quelle est la diff\xe9rence entre homicide et meurtre ?",value:r,onChange:e=>n(e.target.value),required:!0}),(0,l.jsx)("button",{type:"submit",className:"analyze-btn",disabled:o,children:o?"Recherche en cours...":"Rechercher"})]}),i&&(0,l.jsxs)("div",{className:"legal-rag-result",children:[(0,l.jsx)("h2",{children:"R\xe9sultat :"}),(e=>{console.log(e);return e.split("\n").map(((e,s)=>{const r=e.split(/(\*\*.*?\*\*|#.*?#)/);return(0,l.jsx)("p",{className:"legal-paragraph",children:r.map(((e,s)=>{if(e.startsWith("**")&&e.endsWith("**")){const r=e.slice(2,-2).trim();return(0,l.jsx)("h2",{className:"legal-title",children:r},s)}if(e.startsWith("#")&&e.endsWith("#")){const r=e.slice(1,-1).trim();return(0,l.jsx)("strong",{className:"legal-bold",children:r},s)}return e}))},s)}))})(i)]})]})};const o=function(e){let{onResult:s,onClear:r}=e;const[n,i]=(0,t.useState)(null),[a,o]=(0,t.useState)(""),[c,u]=(0,t.useState)(!1),[d,p]=(0,t.useState)(null);return(0,l.jsxs)("div",{className:"form-container",children:[(0,l.jsx)("h1",{children:"V\xe9rificateur et \xc9valuateur de CV par IA Gratuit"}),d?(0,l.jsxs)("div",{className:"result-container",children:[(0,l.jsx)("h1",{children:"R\xe9sultat de l'analyse :"}),(0,l.jsx)("div",{children:(e=>{if(!e||!e.analysis)return null;return e.analysis.split("\n").map(((e,s)=>{if(e.startsWith("**")&&e.endsWith("**")){const r=e.slice(2,-2).trim();return(0,l.jsx)("h2",{className:"result-title",children:r},s)}return(0,l.jsx)("p",{className:"result-paragraph",children:e},s)}))})(d)})]}):(0,l.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),!n)return void alert("Veuillez t\xe9l\xe9charger un fichier PDF.");const r=new FormData;r.append("cvFile",n),r.append("jobPosition",a),u(!0);try{const e=await fetch("https://mywebsiteserver-s92a.onrender.com/upload-cv",{method:"POST",body:r}),t=await e.json();p(t),s(t)}catch(t){console.error("Erreur lors de l'envoi du formulaire :",t)}finally{u(!1)}},className:"form",children:[(0,l.jsxs)("div",{className:"upload-box",children:[(0,l.jsxs)("label",{htmlFor:"fileInput",children:[n?n.name:"Cliquez pour t\xe9l\xe9charger ou glissez et d\xe9posez votre CV ici",(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:n?"":"PDF ou DOCX"})]}),(0,l.jsx)("input",{id:"fileInput",type:"file",accept:".pdf,.docx",onChange:e=>{const s=e.target.files[0];s&&i(s)},required:!0})]}),(0,l.jsxs)("div",{className:"job-box",children:[(0,l.jsx)("label",{htmlFor:"jobPosition",className:"form-label",children:"Poste recherch\xe9 (optionnel) :"}),(0,l.jsx)("input",{id:"jobPosition",type:"text",placeholder:"Entrez le poste recherch\xe9 (ex : D\xe9veloppeur Web)",value:a,onChange:e=>o(e.target.value)})]}),(0,l.jsx)("button",{type:"submit",className:"analyze-btn",disabled:c,children:c?"Analyse en cours...":"Analysez Mon CV"})]})]})},c=e=>{let{shadowStyles:s,content:r,onClick:t,isExpanded:n,isHidden:i,onReturn:a}=e;return(0,l.jsxs)("div",{className:"card ".concat(n?"expanded":""," ").concat(i?"hidden":""),style:n?{boxShadow:s,width:"100%",maxWidth:"80vw"}:{boxShadow:s},children:[n&&(0,l.jsx)("button",{className:"goBack-btn",onClick:a,children:"Retour"}),r(n)]})},u=()=>{const[e,s]=(0,t.useState)(window.innerWidth),[r,u]=(0,t.useState)(null),[d,p]=(0,t.useState)(null),x=()=>{s(window.innerWidth)},h=()=>{d&&p(null),u(null)};(0,t.useEffect)((()=>(window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)})),[]);const m=n(e),b=[e=>e?(0,l.jsx)(i,{}):(0,l.jsxs)("div",{className:"card-intro",children:[(0,l.jsx)("h2",{children:"Assistant Juridique"}),(0,l.jsx)("p",{children:"Posez vos questions juridiques et obtenez des r\xe9ponses pr\xe9cises."}),(0,l.jsx)("button",{onClick:()=>u(0),children:"Utiliser"})]}),e=>e?(0,l.jsx)(a,{}):(0,l.jsxs)("div",{className:"card-intro",children:[(0,l.jsx)("h2",{children:"Cr\xe9ateur de prompt"}),(0,l.jsx)("p",{children:"Cette application vous permet de g\xe9n\xe9rer un prompt via une id\xe9e"}),(0,l.jsx)("button",{onClick:()=>u(1),children:"Utiliser"})]}),e=>e?(0,l.jsx)(o,{onResult:e=>p(e),onClear:h}):(0,l.jsxs)("div",{className:"card-intro",children:[(0,l.jsx)("h2",{children:"Analyseur de CV"}),(0,l.jsx)("p",{children:"Analysez votre CV et obtenez des conseils personnalis\xe9s."}),(0,l.jsx)("button",{onClick:()=>u(2),children:"Utiliser"})]})];return(0,l.jsx)("div",{className:"cards",children:b.map(((e,s)=>(0,l.jsx)(c,{shadowStyles:m[s],content:e,onClick:()=>u(s),onReturn:h,isExpanded:r===s,isHidden:null!==r&&r!==s},s)))})},d=()=>(0,l.jsxs)("section",{id:"project",className:"libContent",children:[(0,l.jsxs)("h1",{className:"textLib",children:[(0,l.jsx)("span",{style:{color:"aquamarine"},children:"III. "}),"Applications"]}),(0,l.jsx)(u,{})]})}}]);
//# sourceMappingURL=616.72504937.chunk.js.map