import{a as j,r as x,j as e,m}from"./index-DmI_1vli.js";import{A as y}from"./index-DtiVSBnU.js";const N={some:0,all:1};function k(a,s,{root:r,margin:o,amount:t="some"}={}){const n=j(a),l=new WeakMap,d=c=>{c.forEach(i=>{const h=l.get(i.target);if(i.isIntersecting!==!!h)if(i.isIntersecting){const f=s(i.target,i);typeof f=="function"?l.set(i.target,f):u.unobserve(i.target)}else typeof h=="function"&&(h(i),l.delete(i.target))})},u=new IntersectionObserver(d,{root:r,rootMargin:o,threshold:typeof t=="number"?t:N[t]});return n.forEach(c=>u.observe(c)),()=>u.disconnect()}function I(a,{root:s,margin:r,amount:o,once:t=!1,initial:n=!1}={}){const[l,d]=x.useState(n);return x.useEffect(()=>{if(!a.current||t&&l)return;const u=()=>(d(!0),t?void 0:()=>d(!1)),c={root:s&&s.current||void 0,margin:r,amount:o};return k(a.current,u,c)},[s,a,r,t,o]),l}const p=[{label:"Students Enrolled",value:2500,suffix:"+",description:"From preschool to high school"},{label:"Faculty Members",value:300,suffix:"+",description:"Experienced educators"},{label:"Student-Teacher Ratio",value:8,suffix:":1",description:"Personalized attention"},{label:"Campus Area",value:16,suffix:" acres",description:"Modern facilities"}],E=()=>{const a=x.useRef(null),s=I(a,{once:!0}),[r,o]=x.useState(p.map(()=>0));return x.useEffect(()=>{s&&p.forEach((t,n)=>{let l=0;const d=t.value,u=2e3,c=1e3/60,i=Math.round(u/c),h=d/i;let f=0;const g=setInterval(()=>{f++;const b=Math.min(l+f*h,d);o(w=>{const v=[...w];return v[n]=Math.floor(b),v}),f===i&&clearInterval(g)},c);return()=>clearInterval(g)})},[s]),e.jsx("div",{className:"bg-gray-50 py-20",children:e.jsx("div",{className:"px-6",children:e.jsx(m.div,{ref:a,initial:{opacity:0},animate:s?{opacity:1}:{opacity:0},transition:{duration:.5},className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",children:p.map((t,n)=>e.jsxs(m.div,{initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:n*.1},className:"text-center",children:[e.jsxs(m.div,{className:"text-5xl font-bold bg-gradient-to-r  from-red-500 via-orange-500 to-green-500 text-transparent bg-clip-text mb-4",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:n*.1+.2},children:[r[n],t.suffix]}),e.jsx("h3",{className:"text-2xl font-semibold text-gray-800 mb-3",children:t.label}),e.jsx("p",{className:"text-gray-600 text-lg",children:t.description})]},t.label))})})})},S=()=>e.jsxs("div",{className:"relative container bg-gradient-to-br from-[#4195d1]/5 via-white to-[#406ab4]/5 mx-auto px-6",children:[e.jsxs(m.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:10},transition:{duration:.6},viewport:{once:!0},className:"py-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start",children:[e.jsx("div",{children:e.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-red-500 via-orange-500 via-green-500 via-blue-500 to-blue-600 text-transparent bg-clip-text",children:"Avenues at a glance"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xl text-gray-600 leading-relaxed mb-8",children:"Avenues offers a holistic approach to education, combining academic excellence, and offers specialized preschool services."}),e.jsxs(m.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 group",children:["Learn more about our history",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})]})]}),e.jsx("div",{className:"col-span-2 mt-12 border-b border-black-300"})]}),e.jsx(E,{})]}),L=()=>{const[a,s]=x.useState(0),r=()=>{s(t=>(t-1+3)%3)},o=()=>{s(t=>(t+1)%3)};return x.useEffect(()=>{const t=setInterval(()=>{s(n=>(n+1)%3)},5e3);return()=>clearInterval(t)},[]),e.jsxs("section",{id:"home",className:"relative min-h-screen bg-gradient-to-br from-[#4195d1]/10 via-white to-[#406ab4]/10 overflow-hidden",children:[e.jsx("div",{className:"container mx-auto relative z-10 w-full h-screen flex items-center",children:e.jsx("div",{className:"text-center w-full h-full flex flex-col justify-center",children:e.jsx(m.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.6},className:"flex-grow flex items-center justify-center w-full h-full",children:e.jsxs("div",{className:"relative w-full h-full overflow-hidden group",children:[e.jsx("button",{onClick:r,className:"absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-[#4195d1]/80 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})}),e.jsx("button",{onClick:o,className:"absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-[#4195d1]/80 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})}),e.jsx(y,{children:[{quote:"Education is not preparation for life; education is life itself.",image:"/stock_pics/pexels-emily-ranquist-493228-1205651.jpg"},{quote:"The beautiful thing about learning is that no one can take it away from you.",image:"/stock_pics/pexels-goumbik-296301.jpg"},{quote:"Knowledge is power. Information is liberating. Education is the premise of progress.",image:"/stock_pics/pexels-rebecca-zaal-252062-764681.jpg"}].map((t,n)=>a===n&&e.jsxs(m.div,{initial:{opacity:0,x:300},animate:{opacity:1,x:0},exit:{opacity:0,x:-300},transition:{duration:.5,ease:"easeInOut"},className:"absolute inset-0",children:[e.jsx("img",{src:t.image,alt:`Educational slide ${n+1}`,className:"w-full h-full object-cover object-center"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t  to-transparent flex items-center justify-center p-8",children:e.jsx("p",{className:"text-4xl md:text-5xl font-medium text-center text-white max-w-4xl mx-auto leading-relaxed",children:t.quote})})]},n))})]})})})}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"}),e.jsx(S,{})]})};export{L as default};
