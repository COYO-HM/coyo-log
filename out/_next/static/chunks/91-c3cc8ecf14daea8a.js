(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{3084:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var l={};r.r(l),r.d(l,{MDXContext:function(){return d},MDXProvider:function(){return u},useMDXComponents:function(){return s},withMDXComponents:function(){return i}});var o=r(5893),a=r(5675),n=r.n(a),c=r(7294),b=r(2746);let d=c.createContext({});function i(e){return function(t){let r=s(t.components);return c.createElement(e,{...t,allComponents:r})}}function s(e){let t=c.useContext(d);return c.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let h={};function u({components:e,children:t,disableParentContext:r}){let l=s(e);return r&&(l=e||h),c.createElement(d.Provider,{value:l},t)}function x({compiledSource:e,frontmatter:t,scope:r,components:o={},lazy:a}){let[n,d]=(0,c.useState)(!a||"undefined"==typeof window);(0,c.useEffect)(()=>{if(a){let e=window.requestIdleCallback(()=>{d(!0)});return()=>window.cancelIdleCallback(e)}},[]);let i=(0,c.useMemo)(()=>{let o=Object.assign({opts:{...l,...b.jsxRuntime}},{frontmatter:t},r),a=Object.keys(o),n=Object.values(o),c=Reflect.construct(Function,a.concat(`${e}`));return c.apply(c,n).default},[r,e]);if(!n)return c.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let s=c.createElement(u,{components:o},c.createElement(i,null));return a?c.createElement("div",null,s):s}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});let v=e=>{let{children:t}=e,r="";return null==t||t.map(e=>{var t,l,o;"string"==typeof e?r+=e.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,""):"string"==typeof(null==e?void 0:null===(t=e.props)||void 0===t?void 0:t.children)&&(r+=null==e?void 0:null===(l=e.props)||void 0===l?void 0:null===(o=l.children)||void 0===o?void 0:o.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,""))}),r},f={Image:n(),table:e=>(0,o.jsx)("table",{...e,className:"border-collapse border border-neutral-200",children:null==e?void 0:e.children}),th:e=>(0,o.jsx)("th",{...e,className:"py-2 px-4 border border-neutral-200 text-left",children:null==e?void 0:e.children}),td:e=>(0,o.jsx)("td",{...e,className:"py-2 px-4 border border-neutral-200",children:null==e?void 0:e.children}),blockquote:e=>(0,o.jsx)("blockquote",{...e,className:"border-l-4 pl-3 my-2 border-neutral-600",children:null==e?void 0:e.children}),ul:e=>(0,o.jsx)("ul",{...e,className:"pl-3 my-2 ml-4 list-disc",children:null==e?void 0:e.children}),ol:e=>(0,o.jsx)("ol",{...e,className:"pl-3 my-2 ml-4 list-decimal",children:null==e?void 0:e.children}),code:e=>(0,o.jsx)("code",{className:"",...e,children:null==e?void 0:e.children}),a:e=>(null==e?void 0:e.href)&&"#"===e.href[0]?(0,o.jsx)("a",{href:"".concat(null==e?void 0:e.href),...e,className:"underline",children:null==e?void 0:e.children}):(0,o.jsx)("a",{href:"".concat(null==e?void 0:e.href),...e,target:"_blank",rel:"noreferrer",className:"hover:text-blue-700 underline",children:null==e?void 0:e.children}),h1:e=>(0,o.jsx)("h1",{className:"font-extrabold text-2xl pt-8 pb-2 max-md:text-xl",id:v(e),children:e.children}),h2:e=>(0,o.jsx)("h2",{className:"font-extrabold text-xl pt-8 pb-2 max-md:text-lg",id:v(e),children:e.children}),h3:e=>(0,o.jsx)("h3",{className:"font-extrabold pt-6 pb-2 text-lg max-md:text",id:v(e),children:e.children}),h4:e=>(0,o.jsx)("h4",{className:"font-extrabold pt-6 pb-2 text-lg max-md:text",id:v(e),children:e.children}),h5:e=>(0,o.jsx)("h5",{className:"font-extrabold pt-4 pb-2 text-lg max-md:text",id:v(e),children:e.children}),h6:e=>(0,o.jsx)("h6",{className:"font-extrabold pt-4 pb-2 text-lg max-md:text",id:v(e),children:e.children}),p:e=>(0,o.jsx)("p",{className:"font-normal text py-2",...e,children:e.children}),li:e=>(0,o.jsx)("li",{className:"font-normal text py-1 leading-6",...e,children:e.children})},g=e=>(0,o.jsx)(x,{...e,components:{...f,...e.components||{}}});var m=g},9601:function(e,t,r){"use strict";var l=r(5893),o=r(7294),a=r(1254);let n=()=>{let e=(0,o.useRef)(null),{isDarkTheme:t}=(0,a.Z)(),r=t?"dark":"light";return(0,o.useEffect)(()=>{if(!e.current||e.current.hasChildNodes())return;let t=document.createElement("script");t.src="https://giscus.app/client.js",t.async=!0,t.crossOrigin="anonymous",t.setAttribute("data-repo","COYO-HM/COYO-HM.github.io"),t.setAttribute("data-repo-id","R_kgDOIIIpYw"),t.setAttribute("data-category","Comments"),t.setAttribute("data-category-id","DIC_kwDOIIIpY84CcT6q"),t.setAttribute("data-mapping","pathname"),t.setAttribute("data-strict","0"),t.setAttribute("data-reactions-enabled","1"),t.setAttribute("data-emit-metadata","0"),t.setAttribute("data-input-position","bottom"),t.setAttribute("data-theme",r),t.setAttribute("data-lang","ko"),e.current.appendChild(t)},[r]),(0,o.useEffect)(()=>{var e;let t=document.querySelector("iframe.giscus-frame");null==t||null===(e=t.contentWindow)||void 0===e||e.postMessage({giscus:{setConfig:{theme:r}}},"https://giscus.app")},[r]),(0,l.jsx)("div",{className:"py-5",children:(0,l.jsx)("section",{ref:e})})};t.Z=n},7718:function(e,t,r){"use strict";var l=r(5893),o=r(5808);let a=e=>{let{children:t,...r}=e;return(0,l.jsx)(o.Z,{...r,className:"text-center text-5xl font-bold ".concat(null==r?void 0:r.className),children:t})};t.Z=a},5808:function(e,t,r){"use strict";var l=r(5893);r(7294);let o=e=>{let{children:t,...r}=e;return(0,l.jsx)("div",{...r,className:"italic ".concat(null==r?void 0:r.className),children:t})};t.Z=o},3081:function(e,t){"use strict";t.Z={algorithm:{label:"Algorithm"},programming:{label:"Programming"},network:{label:"Network"},css:{label:"CSS",color:"#1572b6",bg:"bg-[#1572b6]",bg_hover:"hover:bg-[#1572b6] dark:hover:bg-[#1572b6]",text:"text-[#1572b6]",text_hover:"hover:text-[#1572b6] dark:hover:text-[#1572b6]",border:"border-[#1572b6]"},scss:{label:"SCSS",color:"#bf4080",bg:"bg-[#bf4080]",bg_hover:"hover:bg-[#bf4080] dark:hover:bg-[#bf4080]",text:"text-[#bf4080]",text_hover:"hover:text-[#bf4080] dark:hover:text-[#bf4080]",border:"border-[#bf4080]"},emotion:{label:"Emotion",color:"#d26ac2",bg:"bg-[#d26ac2]",bg_hover:"hover:bg-[#d26ac2] dark:hover:bg-[#d26ac2]",text:"text-[#d26ac2]",text_hover:"hover:text-[#d26ac2] dark:hover:text-[#d26ac2]",border:"border-[#d26ac2]"},styled_components:{label:"Styled-Components",color:"#ffa4e8",bg:"bg-[#ffa4e8]",bg_hover:"hover:bg-[#ffa4e8] dark:hover:bg-[#ffa4e8]",text:"text-[#ffa4e8]",text_hover:"hover:text-[#ffa4e8] dark:hover:text-[#ffa4e8]",border:"border-[#ffa4e8]"},gatsby:{label:"Gatsby",color:"#663399",bg:"bg-[#663399]",bg_hover:"hover:bg-[#663399] dark:hover:bg-[#663399]",text:"text-[#663399]",text_hover:"hover:text-[#663399] dark:hover:text-[#663399]",border:"border-[#663399]"},intellij:{label:"IntelliJ"},javascript:{label:"JavaScript",color:"#fac905",bg:"bg-[#fac905]",bg_hover:"hover:bg-[#fac905] dark:hover:bg-[#fac905]",text:"text-[#fac905]",text_hover:"hover:text-[#fac905] dark:hover:text-[#fac905]",border:"border-[#fac905]"},typescript:{label:"TypeScript",color:"#3178c6",bg:"bg-[#3178c6]",bg_hover:"hover:bg-[#3178c6] dark:hover:bg-[#3178c6]",text:"text-[#3178c6]",text_hover:"hover:text-[#3178c6] dark:hover:text-[#3178c6]",border:"border-[#3178c6]"},python3:{label:"Python3"},html:{label:"HTML",color:"#e44f26",bg:"bg-[#e44f26]",bg_hover:"hover:bg-[#e44f26] dark:hover:bg-[#e44f26]",text:"text-[#e44f26]",text_hover:"hover:text-[#e44f26] dark:hover:text-[#e44f26]",border:"border-[#e44f26]"},react:{label:"React",color:"#61dbfb",bg:"bg-[#61dbfb]",bg_hover:"hover:bg-[#61dbfb] dark:hover:bg-[#61dbfb]",text:"text-[#61dbfb]",text_hover:"hover:text-[#61dbfb] dark:hover:text-[#61dbfb]",border:"border-[#61dbfb]"},redux_persist:{label:"Redux-Persist"},redux:{label:"Redux",color:"#764abc",bg:"bg-[#764abc]",bg_hover:"hover:bg-[#764abc] dark:hover:bg-[#764abc]",text:"text-[#764abc",text_hover:"hover:text-[#764abc] dark:hover:text-[#764abc]",border:"border-[#764abc]"},recoil:{label:"Recoil"},axios:{label:"Axios"},lodash:{label:"Lodash"},git:{label:"Git",color:"#000000",bg:"bg-black",bg_hover:"hover:bg-black dark:hover:bg-black",text:"text-black",text_hover:"hover:text-black dark:hover:text-black",border:"border-black"},git_hub:{label:"GitHub",color:"#000000",bg:"bg-black",bg_hover:"hover:bg-black dark:hover:bg-white",text:"text-black dark:text-white",text_hover:"hover:text-black dark:hover:text-white",border:"border-black"},npm:{label:"npm"},yarn:{label:"yarn"},yarn_berry:{label:"yarn berry"},jest:{label:"Jest",color:"#99425b",bg:"bg-[#99425b]",bg_hover:"hover:bg-[#99425b] dark:hover:bg-[#99425b]",text:"text-[#99425b]",text_hover:"hover:text-[#99425b] dark:hover:text-[#99425b]",border:"border-[#99425b]"}}},7635:function(e,t){"use strict";let r=e=>{let t=new Date(e),r=t.getFullYear(),l=t.getMonth()+1,o=t.getDate();return{year:r,month:l,date:o,dateStr:"".concat(r,"/").concat(l,"/").concat(o)}};t.Z=r},2746:function(e,t,r){e.exports.jsxRuntime=r(5893)}}]);