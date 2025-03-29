import{r as l,j as e,m as t}from"./index-DmI_1vli.js";const m=()=>{const[s,i]=l.useState(!1),[o,r]=l.useState(!1);l.useEffect(()=>{const a=()=>{document.getElementById("home")&&r(window.scrollY>100)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const n=[{title:"Home",href:"#home"},{title:"Events",href:"#events"},{title:"Achievements",href:"#achievements"},{title:"Testimonials",href:"#testimonials"},{title:"Contact",href:"#contact"}];return e.jsx(t.nav,{initial:{y:-100},animate:{y:0},className:`fixed w-full left-0 px-6 z-[100] transition-all duration-300 ${o?"bg-white/50 backdrop-blur-sm shadow-md":"bg-transparent"}`,children:e.jsx("div",{className:"container mx-auto px-6 py-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(t.div,{initial:{opacity:0},animate:{opacity:1},className:"text-2xl font-bold bg-gradient-to-r from-[#4195d1] to-[#406ab4] text-transparent bg-clip-text",children:e.jsx("img",{src:"logo.png",alt:"Global School Academy",className:"h-16 w-fit object-contain"})}),e.jsx("div",{className:"hidden md:flex justify-center flex-1 mx-8",children:e.jsx("div",{className:"flex space-x-8",children:n.map(a=>e.jsx(t.a,{href:a.href,whileHover:{y:-2},className:`text-transparent bg-gradient-to-r from-[#e32020] via-[#f18721] via-[#00833e] to-[#6cb33f] bg-clip-text transition-all duration-300 text-base ${o?"opacity-100":"opacity-0"}`,children:a.title},a.title))})}),e.jsx(t.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"hidden md:block px-6 py-2 bg-gradient-to-r from-[#e32020] via-[#f18721] via-[#00833e] to-[#6cb33f] text-white rounded-lg shadow-md hover:opacity-90 transition-all duration-300 text-base",children:"Admission"}),e.jsx("button",{onClick:()=>i(!s),className:"md:hidden focus:outline-none",children:e.jsxs(t.div,{animate:s?"open":"closed",className:"flex flex-col space-y-1.5",children:[e.jsx(t.span,{variants:{closed:{rotate:0,y:0},open:{rotate:45,y:8}},className:"block w-6 h-0.5 bg-gray-600"}),e.jsx(t.span,{variants:{closed:{opacity:1},open:{opacity:0}},className:"block w-6 h-0.5 bg-gray-600"}),e.jsx(t.span,{variants:{closed:{rotate:0,y:0},open:{rotate:-45,y:-8}},className:"block w-6 h-0.5 bg-gray-600"})]})}),e.jsx(t.div,{initial:!1,animate:{height:s?"auto":0,opacity:s?1:0},className:"absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm overflow-hidden md:hidden",children:e.jsxs("div",{className:"px-6 py-4 space-y-4",children:[n.map(a=>e.jsx(t.a,{href:a.href,whileHover:{x:4},className:"block text-transparent bg-gradient-to-r from-[#e32020] via-[#f18721] via-[#00833e] via-[#6cb33f] via-[#406ab4] to-[#4195d1] bg-clip-text transition-all duration-300 text-sm",onClick:()=>i(!1),children:a.title},a.title)),e.jsx(t.button,{whileHover:{x:4},whileTap:{scale:.95},onClick:()=>i(!1),className:"w-full text-left px-4 py-2 bg-gradient-to-r from-[#e32020] via-[#f18721] via-[#00833e] to-[#6cb33f] text-white rounded-lg shadow-md hover:opacity-90 transition-all duration-300 text-sm",children:"Admission"})]})})]})})})};export{m as default};
