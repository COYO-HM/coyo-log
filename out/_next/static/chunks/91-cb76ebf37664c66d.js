(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{3454:function(e,t,r){"use strict";var o,n;e.exports=(null==(o=r.g.process)?void 0:o.env)&&"object"==typeof(null==(n=r.g.process)?void 0:n.env)?r.g.process:r(7663)},3084:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var o={};r.r(o),r.d(o,{MDXContext:function(){return d},MDXProvider:function(){return h},useMDXComponents:function(){return s},withMDXComponents:function(){return b}});var n=r(5893),l=r(5675),a=r.n(l),c=r(7294),i=r(2746);let d=c.createContext({});function b(e){return function(t){let r=s(t.components);return c.createElement(e,{...t,allComponents:r})}}function s(e){let t=c.useContext(d);return c.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let u={};function h({components:e,children:t,disableParentContext:r}){let o=s(e);return r&&(o=e||u),c.createElement(d.Provider,{value:o},t)}function f({compiledSource:e,frontmatter:t,scope:r,components:n={},lazy:l}){let[a,d]=(0,c.useState)(!l||"undefined"==typeof window);(0,c.useEffect)(()=>{if(l){let e=window.requestIdleCallback(()=>{d(!0)});return()=>window.cancelIdleCallback(e)}},[]);let b=(0,c.useMemo)(()=>{let n=Object.assign({opts:{...o,...i.jsxRuntime}},{frontmatter:t},r),l=Object.keys(n),a=Object.values(n),c=Reflect.construct(Function,l.concat(`${e}`));return c.apply(c,a).default},[r,e]);if(!a)return c.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let s=c.createElement(h,{components:n},c.createElement(b,null));return l?c.createElement("div",null,s):s}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});let x=e=>{let{children:t}=e,r="";return null==t||t.map(e=>{var t,o,n;"string"==typeof e?r+=e.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,""):"string"==typeof(null==e?void 0:null===(t=e.props)||void 0===t?void 0:t.children)&&(r+=null==e?void 0:null===(o=e.props)||void 0===o?void 0:null===(n=o.children)||void 0===n?void 0:n.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,""))}),r},v={Image:a(),table:e=>(0,n.jsx)("table",{...e,className:"border-collapse border border-neutral-200",children:null==e?void 0:e.children}),th:e=>(0,n.jsx)("th",{...e,className:"py-2 px-4 border border-neutral-200 text-left",children:null==e?void 0:e.children}),td:e=>(0,n.jsx)("td",{...e,className:"py-2 px-4 border border-neutral-200",children:null==e?void 0:e.children}),blockquote:e=>(0,n.jsx)("blockquote",{...e,className:"border-l-4 pl-3 my-2 border-neutral-600",children:null==e?void 0:e.children}),ul:e=>(0,n.jsx)("ul",{...e,className:"pl-3 my-2 ml-4 list-disc",children:null==e?void 0:e.children}),ol:e=>(0,n.jsx)("ol",{...e,className:"pl-3 my-2 ml-4 list-decimal",children:null==e?void 0:e.children}),code:e=>(0,n.jsx)("code",{className:"",...e,children:null==e?void 0:e.children}),a:e=>(null==e?void 0:e.href)&&"#"===e.href[0]?(0,n.jsx)("a",{href:"".concat(null==e?void 0:e.href),...e,className:"underline",children:null==e?void 0:e.children}):(0,n.jsx)("a",{href:"".concat(null==e?void 0:e.href),...e,target:"_blank",rel:"noreferrer",className:"hover:text-blue-700 underline",children:null==e?void 0:e.children}),h1:e=>(0,n.jsx)("h1",{className:"font-extrabold text-2xl pt-8 pb-2 max-md:text-xl",id:x(e),children:e.children}),h2:e=>(0,n.jsx)("h2",{className:"font-extrabold text-xl pt-8 pb-2 max-md:text-lg",id:x(e),children:e.children}),h3:e=>(0,n.jsx)("h3",{className:"font-extrabold pt-6 pb-2 text-lg max-md:text",id:x(e),children:e.children}),h4:e=>(0,n.jsx)("h4",{className:"font-extrabold pt-6 pb-2 text-lg max-md:text",id:x(e),children:e.children}),h5:e=>(0,n.jsx)("h5",{className:"font-extrabold pt-4 pb-2 text-lg max-md:text",id:x(e),children:e.children}),h6:e=>(0,n.jsx)("h6",{className:"font-extrabold pt-4 pb-2 text-lg max-md:text",id:x(e),children:e.children}),p:e=>(0,n.jsx)("p",{className:"font-normal text py-2",...e,children:e.children}),li:e=>(0,n.jsx)("li",{className:"font-normal text py-1 leading-6",...e,children:e.children})},g=e=>(0,n.jsx)(f,{...e,components:{...v,...e.components||{}}});var m=g},9601:function(e,t,r){"use strict";var o=r(5893),n=r(7294),l=r(1254);r(3454);let a=()=>{let e=(0,n.useRef)(null),{isDarkTheme:t}=(0,l.Z)(),r=t?"dark":"light";return(0,n.useEffect)(()=>{if(!e.current||e.current.hasChildNodes())return;let t=document.createElement("script");t.src="https://giscus.app/client.js",t.async=!0,t.crossOrigin="anonymous",t.setAttribute("data-repo","COYO-HM/COYO-HM.github.io"),t.setAttribute("data-repo-id","R_kgDOIIIpYw"),t.setAttribute("data-category","Comments"),t.setAttribute("data-category-id","DIC_kwDOIIIpY84CcT6q"),t.setAttribute("data-mapping","pathname"),t.setAttribute("data-strict","0"),t.setAttribute("data-reactions-enabled","1"),t.setAttribute("data-emit-metadata","0"),t.setAttribute("data-input-position","bottom"),t.setAttribute("data-theme",r),t.setAttribute("data-lang","ko"),e.current.appendChild(t)},[r]),(0,n.useEffect)(()=>{var e;let t=document.querySelector("iframe.giscus-frame");null==t||null===(e=t.contentWindow)||void 0===e||e.postMessage({giscus:{setConfig:{theme:r}}},"https://giscus.app")},[r]),(0,o.jsx)("div",{className:"py-5",children:(0,o.jsx)("section",{ref:e})})};t.Z=a},7718:function(e,t,r){"use strict";var o=r(5893),n=r(5808);let l=e=>{let{children:t,...r}=e;return(0,o.jsx)(n.Z,{...r,className:"text-center text-5xl font-bold ".concat(null==r?void 0:r.className),children:t})};t.Z=l},5808:function(e,t,r){"use strict";var o=r(5893);r(7294);let n=e=>{let{children:t,...r}=e;return(0,o.jsx)("div",{...r,className:"italic ".concat(null==r?void 0:r.className),children:t})};t.Z=n},3081:function(e,t){"use strict";t.Z={algorithm:{label:"Algorithm"},programming:{label:"Programming"},network:{label:"Network"},css:{label:"CSS",color:"#1572b6",bg:"bg-[#1572b6]",bg_hover:"hover:bg-[#1572b6] dark:hover:bg-[#1572b6]",text:"text-[#1572b6]",text_hover:"hover:text-[#1572b6] dark:hover:text-[#1572b6]",border:"border-[#1572b6]"},scss:{label:"SCSS",color:"#bf4080",bg:"bg-[#bf4080]",bg_hover:"hover:bg-[#bf4080] dark:hover:bg-[#bf4080]",text:"text-[#bf4080]",text_hover:"hover:text-[#bf4080] dark:hover:text-[#bf4080]",border:"border-[#bf4080]"},emotion:{label:"Emotion",color:"#d26ac2",bg:"bg-[#d26ac2]",bg_hover:"hover:bg-[#d26ac2] dark:hover:bg-[#d26ac2]",text:"text-[#d26ac2]",text_hover:"hover:text-[#d26ac2] dark:hover:text-[#d26ac2]",border:"border-[#d26ac2]"},styled_components:{label:"Styled-Components",color:"#ffa4e8",bg:"bg-[#ffa4e8]",bg_hover:"hover:bg-[#ffa4e8] dark:hover:bg-[#ffa4e8]",text:"text-[#ffa4e8]",text_hover:"hover:text-[#ffa4e8] dark:hover:text-[#ffa4e8]",border:"border-[#ffa4e8]"},gatsby:{label:"Gatsby",color:"#663399",bg:"bg-[#663399]",bg_hover:"hover:bg-[#663399] dark:hover:bg-[#663399]",text:"text-[#663399]",text_hover:"hover:text-[#663399] dark:hover:text-[#663399]",border:"border-[#663399]"},intellij:{label:"IntelliJ"},javascript:{label:"JavaScript",color:"#fac905",bg:"bg-[#fac905]",bg_hover:"hover:bg-[#fac905] dark:hover:bg-[#fac905]",text:"text-[#fac905]",text_hover:"hover:text-[#fac905] dark:hover:text-[#fac905]",border:"border-[#fac905]"},typescript:{label:"TypeScript",color:"#3178c6",bg:"bg-[#3178c6]",bg_hover:"hover:bg-[#3178c6] dark:hover:bg-[#3178c6]",text:"text-[#3178c6]",text_hover:"hover:text-[#3178c6] dark:hover:text-[#3178c6]",border:"border-[#3178c6]"},python3:{label:"Python3"},html:{label:"HTML",color:"#e44f26",bg:"bg-[#e44f26]",bg_hover:"hover:bg-[#e44f26] dark:hover:bg-[#e44f26]",text:"text-[#e44f26]",text_hover:"hover:text-[#e44f26] dark:hover:text-[#e44f26]",border:"border-[#e44f26]"},react:{label:"React",color:"#61dbfb",bg:"bg-[#61dbfb]",bg_hover:"hover:bg-[#61dbfb] dark:hover:bg-[#61dbfb]",text:"text-[#61dbfb]",text_hover:"hover:text-[#61dbfb] dark:hover:text-[#61dbfb]",border:"border-[#61dbfb]"},redux_persist:{label:"Redux-Persist"},redux:{label:"Redux",color:"#764abc",bg:"bg-[#764abc]",bg_hover:"hover:bg-[#764abc] dark:hover:bg-[#764abc]",text:"text-[#764abc",text_hover:"hover:text-[#764abc] dark:hover:text-[#764abc]",border:"border-[#764abc]"},recoil:{label:"Recoil"},axios:{label:"Axios"},lodash:{label:"Lodash"},git:{label:"Git",color:"#000000",bg:"bg-black",bg_hover:"hover:bg-black dark:hover:bg-black",text:"text-black",text_hover:"hover:text-black dark:hover:text-black",border:"border-black"},git_hub:{label:"GitHub",color:"#000000",bg:"bg-black",bg_hover:"hover:bg-black dark:hover:bg-white",text:"text-black dark:text-white",text_hover:"hover:text-black dark:hover:text-white",border:"border-black"},npm:{label:"npm"},yarn:{label:"yarn"},yarn_berry:{label:"yarn berry"},jest:{label:"Jest",color:"#99425b",bg:"bg-[#99425b]",bg_hover:"hover:bg-[#99425b] dark:hover:bg-[#99425b]",text:"text-[#99425b]",text_hover:"hover:text-[#99425b] dark:hover:text-[#99425b]",border:"border-[#99425b]"}}},7635:function(e,t){"use strict";let r=e=>{let t=new Date(e),r=t.getFullYear(),o=t.getMonth()+1,n=t.getDate();return{year:r,month:o,date:n,dateStr:"".concat(r,"/").concat(o,"/").concat(n)}};t.Z=r},7663:function(e){!function(){var t={229:function(e){var t,r,o,n=e.exports={};function l(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===l||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:l}catch(e){t=l}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var i=[],d=!1,b=-1;function s(){d&&o&&(d=!1,o.length?i=o.concat(i):b=-1,i.length&&u())}function u(){if(!d){var e=c(s);d=!0;for(var t=i.length;t;){for(o=i,i=[];++b<t;)o&&o[b].run();b=-1,t=i.length}o=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];i.push(new h(e,t)),1!==i.length||d||c(u)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=f,n.addListener=f,n.once=f,n.off=f,n.removeListener=f,n.removeAllListeners=f,n.emit=f,n.prependListener=f,n.prependOnceListener=f,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}},a=!0;try{t[e](l,l.exports,o),a=!1}finally{a&&delete r[e]}return l.exports}o.ab="//";var n=o(229);e.exports=n}()},2746:function(e,t,r){e.exports.jsxRuntime=r(5893)}}]);