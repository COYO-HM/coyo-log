(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[703],{9417:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/series/[title]",function(){return r(4299)}])},1756:function(e,t,r){"use strict";var l=r(5893),a=r(7294);let o="https://utteranc.es/client.js",n="COYO-HM/COYO-HM.github.io",c=()=>{let e=(0,a.createRef)(),t=(0,a.createRef)();return(0,a.useEffect)(()=>{if(null!==e.current&&null!==t.current){let r=document.createElement("script"),l=document.createElement("script");Object.entries({src:o,repo:n,"issue-term":"pathname",label:"Comment",theme:"github-light",crossorigin:"anonymous",async:"true"}).forEach(e=>{let[t,l]=e;r.setAttribute(t,l)}),Object.entries({src:o,repo:n,"issue-term":"pathname",label:"Comment",theme:"photon-dark",crossorigin:"anonymous",async:"true"}).forEach(e=>{let[t,r]=e;l.setAttribute(t,r)}),e.current.appendChild(r),t.current.appendChild(l)}},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{ref:e,id:"utterances-light"}),(0,l.jsx)("div",{ref:t,id:"utterances-dark"})]})};t.Z=c},3084:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var l={};r.r(l),r.d(l,{MDXContext:function(){return d},MDXProvider:function(){return x},useMDXComponents:function(){return b},withMDXComponents:function(){return s}});var a=r(5893),o=r(5675),n=r.n(o),c=r(7294),i=r(2746);let d=c.createContext({});function s(e){return function(t){let r=b(t.components);return c.createElement(e,{...t,allComponents:r})}}function b(e){let t=c.useContext(d);return c.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let h={};function x({components:e,children:t,disableParentContext:r}){let l=b(e);return r&&(l=e||h),c.createElement(d.Provider,{value:l},t)}function u({compiledSource:e,frontmatter:t,scope:r,components:a={},lazy:o}){let[n,d]=(0,c.useState)(!o||"undefined"==typeof window);(0,c.useEffect)(()=>{if(o){let e=window.requestIdleCallback(()=>{d(!0)});return()=>window.cancelIdleCallback(e)}},[]);let s=(0,c.useMemo)(()=>{let a=Object.assign({opts:{...l,...i.jsxRuntime}},{frontmatter:t},r),o=Object.keys(a),n=Object.values(a),c=Reflect.construct(Function,o.concat(`${e}`));return c.apply(c,n).default},[r,e]);if(!n)return c.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let b=c.createElement(x,{components:a},c.createElement(s,null));return o?c.createElement("div",null,b):b}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});let v=e=>{let{children:t}=e,r="";return null==t||t.map(e=>{var t,l,a;"string"==typeof e?r+=e.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,""):"string"==typeof(null==e?void 0:null===(t=e.props)||void 0===t?void 0:t.children)&&(r+=null==e?void 0:null===(l=e.props)||void 0===l?void 0:null===(a=l.children)||void 0===a?void 0:a.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,""))}),r},f={Image:n(),table:e=>(0,a.jsx)("table",{...e,className:"border-collapse border border-neutral-200",children:null==e?void 0:e.children}),th:e=>(0,a.jsx)("th",{...e,className:"py-2 px-4 border border-neutral-200 text-left",children:null==e?void 0:e.children}),td:e=>(0,a.jsx)("td",{...e,className:"py-2 px-4 border border-neutral-200",children:null==e?void 0:e.children}),blockquote:e=>(0,a.jsx)("blockquote",{...e,className:"border-l-4 pl-3 my-2 border-neutral-600",children:null==e?void 0:e.children}),ul:e=>(0,a.jsx)("ul",{...e,className:"pl-3 my-2 ml-4 list-disc",children:null==e?void 0:e.children}),ol:e=>(0,a.jsx)("ol",{...e,className:"pl-3 my-2 ml-4 list-decimal",children:null==e?void 0:e.children}),code:e=>(0,a.jsx)("code",{className:"",...e,children:null==e?void 0:e.children}),a:e=>(null==e?void 0:e.href)&&"#"===e.href[0]?(0,a.jsx)("a",{href:"".concat(null==e?void 0:e.href),...e,className:"underline",children:null==e?void 0:e.children}):(0,a.jsx)("a",{href:"".concat(null==e?void 0:e.href),...e,target:"_blank",rel:"noreferrer",className:"hover:text-blue-700 underline",children:null==e?void 0:e.children}),h1:e=>(0,a.jsx)("h1",{className:"font-extrabold text-2xl pt-8 pb-2 max-md:text-xl",id:v(e),children:e.children}),h2:e=>(0,a.jsx)("h2",{className:"font-extrabold text-xl pt-8 pb-2 max-md:text-lg",id:v(e),children:e.children}),h3:e=>(0,a.jsx)("h3",{className:"font-extrabold pt-6 pb-2 text-lg max-md:text",id:v(e),children:e.children}),h4:e=>(0,a.jsx)("h4",{className:"font-extrabold pt-6 pb-2 text-lg max-md:text",id:v(e),children:e.children}),h5:e=>(0,a.jsx)("h5",{className:"font-extrabold pt-4 pb-2 text-lg max-md:text",id:v(e),children:e.children}),h6:e=>(0,a.jsx)("h6",{className:"font-extrabold pt-4 pb-2 text-lg max-md:text",id:v(e),children:e.children}),p:e=>(0,a.jsx)("p",{className:"font-normal text py-2",...e,children:e.children}),li:e=>(0,a.jsx)("li",{className:"font-normal text py-1 leading-6",...e,children:e.children})},m=e=>(0,a.jsx)(u,{...e,components:{...f,...e.components||{}}});var g=m},3295:function(e,t,r){"use strict";var l=r(5893),a=r(2962),o=r(8014);let n=e=>{let{title:t,description:r,url:n}=e;return(0,l.jsx)(a.PB,{title:"".concat(o.Z.title," | ").concat(t),description:r,canonical:n,openGraph:{url:n,title:t,description:r,images:[{alt:t,url:"/static/images/moblie-profile.png"}]}})};t.Z=n},4483:function(e,t,r){"use strict";var l=r(5893),a=r(3081);let o=e=>{let{tag:t}=e,r=a.Z[t],o=(null==r?void 0:r.bg)||"bg-neutral-400";return(0,l.jsxs)("div",{className:"shrink-0 rounded py-0.5 px-1 text-xs text-neutral-100 ".concat(o),children:["#",(null==r?void 0:r.label)||t]},t)};t.Z=o},7718:function(e,t,r){"use strict";var l=r(5893),a=r(5808);let o=e=>{let{children:t,...r}=e;return(0,l.jsx)(a.Z,{...r,className:"text-center text-5xl font-bold ".concat(null==r?void 0:r.className),children:t})};t.Z=o},5808:function(e,t,r){"use strict";var l=r(5893);r(7294);let a=e=>{let{children:t,...r}=e;return(0,l.jsx)("div",{...r,className:"italic ".concat(null==r?void 0:r.className),children:t})};t.Z=a},3081:function(e,t){"use strict";t.Z={algorithm:{label:"Algorithm"},programming:{label:"Programming"},network:{label:"Network"},css:{label:"CSS",color:"#1572b6",bg:"bg-[#1572b6]",bg_hover:"hover:bg-[#1572b6] dark:hover:bg-[#1572b6]",text:"text-[#1572b6]",text_hover:"hover:text-[#1572b6] dark:hover:text-[#1572b6]",border:"border-[#1572b6]"},scss:{label:"SCSS",color:"#bf4080",bg:"bg-[#bf4080]",bg_hover:"hover:bg-[#bf4080] dark:hover:bg-[#bf4080]",text:"text-[#bf4080]",text_hover:"hover:text-[#bf4080] dark:hover:text-[#bf4080]",border:"border-[#bf4080]"},emotion:{label:"Emotion",color:"#d26ac2",bg:"bg-[#d26ac2]",bg_hover:"hover:bg-[#d26ac2] dark:hover:bg-[#d26ac2]",text:"text-[#d26ac2]",text_hover:"hover:text-[#d26ac2] dark:hover:text-[#d26ac2]",border:"border-[#d26ac2]"},styled_components:{label:"Styled-Components",color:"#ffa4e8",bg:"bg-[#ffa4e8]",bg_hover:"hover:bg-[#ffa4e8] dark:hover:bg-[#ffa4e8]",text:"text-[#ffa4e8]",text_hover:"hover:text-[#ffa4e8] dark:hover:text-[#ffa4e8]",border:"border-[#ffa4e8]"},gatsby:{label:"Gatsby",color:"#663399",bg:"bg-[#663399]",bg_hover:"hover:bg-[#663399] dark:hover:bg-[#663399]",text:"text-[#663399]",text_hover:"hover:text-[#663399] dark:hover:text-[#663399]",border:"border-[#663399]"},intellij:{label:"IntelliJ"},javascript:{label:"JavaScript",color:"#fac905",bg:"bg-[#fac905]",bg_hover:"hover:bg-[#fac905] dark:hover:bg-[#fac905]",text:"text-[#fac905]",text_hover:"hover:text-[#fac905] dark:hover:text-[#fac905]",border:"border-[#fac905]"},typescript:{label:"TypeScript",color:"#3178c6",bg:"bg-[#3178c6]",bg_hover:"hover:bg-[#3178c6] dark:hover:bg-[#3178c6]",text:"text-[#3178c6]",text_hover:"hover:text-[#3178c6] dark:hover:text-[#3178c6]",border:"border-[#3178c6]"},python3:{label:"Python3"},html:{label:"HTML",color:"#e44f26",bg:"bg-[#e44f26]",bg_hover:"hover:bg-[#e44f26] dark:hover:bg-[#e44f26]",text:"text-[#e44f26]",text_hover:"hover:text-[#e44f26] dark:hover:text-[#e44f26]",border:"border-[#e44f26]"},react:{label:"React",color:"#61dbfb",bg:"bg-[#61dbfb]",bg_hover:"hover:bg-[#61dbfb] dark:hover:bg-[#61dbfb]",text:"text-[#61dbfb]",text_hover:"hover:text-[#61dbfb] dark:hover:text-[#61dbfb]",border:"border-[#61dbfb]"},redux_persist:{label:"Redux-Persist"},redux:{label:"Redux",color:"#764abc",bg:"bg-[#764abc]",bg_hover:"hover:bg-[#764abc] dark:hover:bg-[#764abc]",text:"text-[#764abc",text_hover:"hover:text-[#764abc] dark:hover:text-[#764abc]",border:"border-[#764abc]"},recoil:{label:"Recoil"},axios:{label:"Axios"},lodash:{label:"Lodash"},git:{label:"Git",color:"#000000",bg:"bg-black",bg_hover:"hover:bg-black dark:hover:bg-black",text:"text-black",text_hover:"hover:text-black dark:hover:text-black",border:"border-black"},git_hub:{label:"GitHub",color:"#000000",bg:"bg-black",bg_hover:"hover:bg-black dark:hover:bg-black",text:"text-black",text_hover:"hover:text-black dark:hover:text-black",border:"border-black"},npm:{label:"npm"},yarn:{label:"yarn"},yarn_berry:{label:"yarn berry"},jest:{label:"Jest",color:"#99425b",bg:"bg-[#99425b]",bg_hover:"hover:bg-[#99425b] dark:hover:bg-[#99425b]",text:"text-[#99425b]",text_hover:"hover:text-[#99425b] dark:hover:text-[#99425b]",border:"border-[#99425b]"}}},4299:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return j},default:function(){return N}});var l=r(5893),a=r(1664),o=r.n(a),n=r(5675),c=r.n(n),i=r(2023),d=r(8014),s=r(3084),b=r(1756),h=r(4483),x=r(3295),u=r(7635),v=r(3930),f=r(7718),m=r(5808);let g=e=>{let{children:t,...r}=e;return(0,l.jsx)(m.Z,{...r,className:"text-3xl font-bold ".concat(null==r?void 0:r.className),children:t})},p={initial:{y:0},hover:{y:-3,backgroundColor:"rgba(147, 197, 253, 0.2)",transition:{type:"tween",duration:.3}}},k=e=>{let{seriesInfo:t,mdx:r,key:a}=e,{frontMatter:n,posts:m}=t,{title:k,description:j,thumbnail:N}=n;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x.Z,{title:"".concat(k),description:j,url:"".concat(d.Z.siteUrl,"/series/").concat(a)}),(0,l.jsxs)("main",{className:"flex flex-col mx-auto w-full lg:w-[800px] px-10 pt-5",children:[(0,l.jsxs)("div",{className:"relative h-[200px] z-0",children:[(0,l.jsx)(c(),{loader:e=>(0,v.Z)(e),src:N,alt:k,className:"object-cover h-auto",fill:!0,loading:"lazy"}),(0,l.jsx)("div",{className:"h-full w-full bg-gradient-to-b from-white/0 dark:from-neutral-800/0 via-white/70 dark:via-neutral-800/70 to-white/100 dark:to-neutral-800/100 absolute"})]}),(0,l.jsx)(f.Z,{className:"mb-20 mt-[-25px] z-10",children:k}),(0,l.jsxs)("div",{className:"py-7",children:[(0,l.jsx)(g,{className:"text-blue-700 border-b-2 py-2 border-blue-700 mb-4",children:"INTRODUCTION"}),(0,l.jsx)("div",{className:"",children:(0,l.jsx)(s.Z,{...r})})]}),(0,l.jsxs)("div",{className:"py-7",children:[(0,l.jsx)(g,{className:"text-blue-700 border-b-2 py-2 border-blue-700 mb-4",children:"SERIES POST"}),(0,l.jsx)("section",{className:"flex flex-col gap-3",children:m.map((e,t)=>(0,l.jsx)(o(),{href:"/post/".concat(e.key),children:(0,l.jsxs)(i.E.div,{variants:p,initial:"initial",whileHover:"hover",className:"flex gap-3 bg-white/60 dark:bg-neutral-700/20 rounded shadow-xl overflow-hidden p-5",children:[(null==e?void 0:e.thumbnail)&&(0,l.jsx)("div",{className:"relative w-1/5 min-w-[100px]",children:(0,l.jsx)(c(),{loader:e=>(0,v.Z)(e),src:e.thumbnail,alt:k,className:"object-cover h-auto",fill:!0,loading:"lazy"})}),(0,l.jsxs)("div",{className:"flex flex-col gap-1.5",children:[(0,l.jsxs)("h3",{className:"text-neutral-800 dark:text-neutral-100 text-lg font-semibold",children:[t+1,".\xa0",e.title]}),(0,l.jsxs)("div",{className:"flex flex-wrap text-neutral-600 dark:text-neutral-300 text-xs",children:[(0,u.Z)(e.date).dateStr,(0,l.jsx)("div",{className:"flex flex-shrink flex-wrap items-center gap-1 border-l-2 border-neutral-200 dark:border-neutral-500 pl-2 ml-2",children:null==e?void 0:e.tags.map(e=>(0,l.jsx)(h.Z,{tag:e},e))})]})]})]})},e.key))})]}),(0,l.jsx)("div",{className:"mt-12",children:(0,l.jsx)(b.Z,{})})]})]})};var j=!0,N=k},7635:function(e,t){"use strict";let r=e=>{let t=new Date(e),r=t.getFullYear(),l=t.getMonth()+1,a=t.getDate();return{year:r,month:l,date:a,dateStr:"".concat(r,"/").concat(l,"/").concat(a)}};t.Z=r},3930:function(e,t){"use strict";let r=e=>{let{src:t,width:r,quality:l}=e;return"".concat(t.includes("http")?"":"https://coyo-hm.github.io").concat(t,"?w=").concat(r,"&q=").concat(l||75)};t.Z=r},2746:function(e,t,r){e.exports.jsxRuntime=r(5893)}},function(e){e.O(0,[130,23,774,888,179],function(){return e(e.s=9417)}),_N_E=e.O()}]);