import{d as x,s as m,u as h,c as u,r as o,j as t,m as c}from"./index-DmI_1vli.js";function f(e){e.values.forEach(a=>a.stop())}function d(e,a){[...a].reverse().forEach(n=>{const s=e.getVariant(n);s&&m(e,s),e.variantChildren&&e.variantChildren.forEach(i=>{d(i,a)})})}function v(e,a){if(Array.isArray(a))return d(e,a);if(typeof a=="string")return d(e,[a]);m(e,a)}function g(){const e=new Set,a={subscribe(r){return e.add(r),()=>void e.delete(r)},start(r,n){const s=[];return e.forEach(i=>{s.push(x(i,r,{transitionOverride:n}))}),Promise.all(s)},set(r){return e.forEach(n=>{v(n,r)})},stop(){e.forEach(r=>{f(r)})},mount(){return()=>{a.stop()}}};return a}function p(){const e=h(g);return u(e.mount,[]),e}const y=p,l=[{id:1,name:"Sarah Johnson",role:"Parent",content:"The school has provided an excellent learning environment for my child. The teachers are dedicated and the facilities are top-notch.",avatar:'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%234195d1"/><text x="50" y="50" font-family="Arial" font-size="40" fill="white" text-anchor="middle" dy=".3em">SJ</text></svg>'},{id:2,name:"Michael Chen",role:"Student",content:"I love the interactive learning approach and the various extracurricular activities. It has helped me develop both academically and personally.",avatar:'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%23406ab4"/><text x="50" y="50" font-family="Arial" font-size="40" fill="white" text-anchor="middle" dy=".3em">MC</text></svg>'},{id:3,name:"Emily Davis",role:"Teacher",content:"The school provides excellent resources and support for teachers. We can focus on delivering quality education to our students.",avatar:'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%234195d1"/><text x="50" y="50" font-family="Arial" font-size="40" fill="white" text-anchor="middle" dy=".3em">ED</text></svg>'}],w=({testimonial:e})=>t.jsxs(c.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:"bg-white p-6 rounded-xl shadow-lg",children:[t.jsxs("div",{className:"flex items-center mb-4",children:[t.jsx("img",{src:e.avatar,alt:e.name,className:"w-12 h-12 rounded-full mr-4"}),t.jsxs("div",{children:[t.jsx("h4",{className:"text-lg font-semibold text-gray-900",children:e.name}),t.jsx("p",{className:"text-sm text-gray-500",children:e.role})]})]}),t.jsx("p",{className:"text-gray-600 italic",children:e.content})]}),j=()=>{const[e,a]=o.useState(0),r=y();return o.useEffect(()=>{const n=setInterval(()=>{a(s=>(s+1)%l.length)},5e3);return()=>clearInterval(n)},[]),o.useEffect(()=>{r.start({opacity:[0,1],x:[50,0],transition:{duration:.5}})},[e,r]),t.jsx("section",{id:"testimonials",className:"py-20 relative bg-gradient-to-br from-[#4195d1]/10 via-white to-[#406ab4]/10",children:t.jsxs("div",{className:"px-6 relative z-10",children:[t.jsxs(c.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},className:"text-center mb-12",children:[t.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-red-500 via-orange-500 via-green-500 via-blue-500 to-blue-600 text-transparent bg-clip-text text-gray-900 mb-4",children:"What People Say"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Hear from our community of students, parents, and teachers."})]}),t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsx(c.div,{animate:r,className:"grid grid-cols-1 gap-8",children:t.jsx(w,{testimonial:l[e]})},e),t.jsx("div",{className:"flex justify-center mt-8 space-x-2",children:l.map((n,s)=>t.jsx("button",{onClick:()=>a(s),className:`w-3 h-3 rounded-full transition-all duration-300 ${s===e?"bg-gradient-to-r from-red-500 via-orange-500 via-green-500 via-blue-500 to-blue-600":"bg-gray-300"}`},s))})]})]})})};export{j as default};
