(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1977)}])},8014:function(e,t){"use strict";t.Z={language:"ko",profileImage:"/images/logo.png",email:"bsydwp@gmail.com",title:"COYO-LOG:D ",description:"주니어 개발자의 개발 일지",siteUrl:"https://coyo-hm.github.io/",copyright:"\xa9 2021 - 2024 COYO All rights reserved.",author:{name:"coyo-hm"},generateRobotsTxt:!0}},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,l=r(n(7294)),o=n(1003),c=n(7795),i=n(4465),s=n(2692),u=n(8245),f=n(9246),d=n(227),h=n(3468);let m=new Set;function p(e,t,n,r){if(o.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+a;if(m.has(l))return;m.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function g(e){return"string"==typeof e?e:c.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let n,r;let{href:c,as:m,children:v,prefetch:y,passHref:b,replace:x,shallow:w,scroll:j,locale:C,onClick:_,onMouseEnter:k,onTouchStart:E,legacyBehavior:M=!1}=e,O=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,M&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let S=!1!==y,z=l.default.useContext(s.RouterContext),L=l.default.useContext(u.AppRouterContext),N=null!=z?z:L,T=!z,{href:$,as:P}=l.default.useMemo(()=>{if(!z){let e=g(c);return{href:e,as:m?g(m):e}}let[e,t]=o.resolveHref(z,c,!0);return{href:e,as:m?o.resolveHref(z,m):t||e}},[z,c,m]),R=l.default.useRef($),I=l.default.useRef(P);M&&(r=l.default.Children.only(n));let A=M?r&&"object"==typeof r&&r.ref:t,[B,H,D]=f.useIntersection({rootMargin:"200px"}),K=l.default.useCallback(e=>{(I.current!==P||R.current!==$)&&(D(),I.current=P,R.current=$),B(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[P,A,$,D,B]);l.default.useEffect(()=>{N&&H&&S&&p(N,$,P,{locale:C})},[P,$,H,C,S,null==z?void 0:z.locale,N]);let F={ref:K,onClick(e){M||"function"!=typeof _||_(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,n,r,a,c,i,s,u,f){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!o.isLocalURL(n)))return;e.preventDefault();let m=()=>{"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:c,locale:s,scroll:i}):t[a?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};u?l.default.startTransition(m):m()}(e,N,$,P,x,w,j,C,T,S)},onMouseEnter(e){M||"function"!=typeof k||k(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),N&&(S||!T)&&p(N,$,P,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){M||"function"!=typeof E||E(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),N&&(S||!T)&&p(N,$,P,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!M||b||"a"===r.type&&!("href"in r.props)){let e=void 0!==C?C:null==z?void 0:z.locale,t=(null==z?void 0:z.isLocaleDomain)&&d.getDomainLocale(P,e,null==z?void 0:z.locales,null==z?void 0:z.domainLocales);F.href=t||h.addBasePath(i.addLocale(P,e,null==z?void 0:z.defaultLocale))}return M?l.default.cloneElement(r,F):l.default.createElement("a",Object.assign({},O,F),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,s=i||!l,[u,f]=r.useState(!1),d=r.useRef(null),h=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(l){if(s||u)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:a,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=c.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=o.get(r)))return t;let a=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:a},c.push(n),o.set(n,t),t}(n);return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),o.delete(r);let e=c.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&c.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=a.requestIdleCallback(()=>f(!0));return()=>a.cancelIdleCallback(e)}},[s,n,t,u,d.current]);let m=r.useCallback(()=>{f(!1)},[]);return[h,u,m]};var r=n(7294),a=n(4686);let l="function"==typeof IntersectionObserver,o=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2985:function(e,t,n){"use strict";n.d(t,{R:function(){return a},s:function(){return r}});let r=["post","series"],a={post:{id:"post",link:"/post/page/0/all",label:"BLOG"},series:{id:"series",link:"/series/page/0",label:"SERIES"}}},1977:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r,a=n(5893);n(7097),n(5032),n(8737),n(1489),n(9382),n(7599),n(8346),n(639);var l=n(1163),o=n(4298),c=n.n(o),i=n(9008),s=n.n(i),u=n(7294);let f="G-EP9WH2T6FN",d=e=>{window.gtag("config",f,{page_path:e})};var h=n(9583),m=n(8014);function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e){return u.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:800,height:800,fill:"currentColor",viewBox:"-32 0 512 512"},e),r||(r=u.createElement("path",{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4"})))};let v=()=>(0,a.jsxs)("footer",{className:"flex flex-col items-center pb-7 text-neutral-700 dark:text-neutral-500",children:[(0,a.jsxs)("div",{className:"flex justify-center mb-2 gap-4",children:[(0,a.jsx)("a",{href:"https://github.com/coyo-hm",target:"_blank",rel:"noreferrer",className:"hover:text-blue-700",children:(0,a.jsx)(h.hJX,{size:24})}),(0,a.jsx)("a",{href:"mailto:bsydwp@gmail.com",className:"hover:text-blue-700",children:(0,a.jsx)(h.SRX,{size:24})}),(0,a.jsx)("a",{href:"https://bouts.vercel.app/",target:"_blank",rel:"noreferrer",className:"hover:text-blue-700",children:(0,a.jsx)(g,{height:24,width:"auto"})})]}),(0,a.jsx)("div",{className:"col-span-2 font-extralight",children:m.Z.copyright})]});var y=n(1664),b=n.n(y),x=n(1571),w=n(3750),j=n(2985);let C=()=>{let{route:e}=(0,l.useRouter)(),{theme:t,setTheme:n}=(0,x.F)(),r=(0,u.useMemo)(()=>"/"===e,[e]);return(0,a.jsxs)("header",{className:"flex justify-end items-center pb-1 pt-5 relative h-12",children:[!r&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b(),{href:"/",className:"text-lg italic font-extrabold mr-5 mt-1",children:m.Z.title}),(0,a.jsx)("nav",{className:"flex grow gap-3 max-md:gap-2",children:j.s.map(t=>(0,a.jsx)(b(),{href:j.R[t].link,className:"hover:text-blue-700 font-light border-b italic ".concat(e.includes(j.R[t].id)?"border-b-blue-700":"border-b-transparent"),children:j.R[t].label},j.R[t].id))})]}),(0,a.jsx)("div",{className:"grid gap-2 place-items-center",children:(0,a.jsx)("button",{id:"btn-theme",className:"rounded-full bg-transparent text-yellow-500 dark:text-blue-100 transition-none",onClick:()=>n("dark"===t?"light":"dark"),"aria-label":"theme",type:"button",children:"dark"===t?(0,a.jsx)(w.gLD,{size:20}):(0,a.jsx)(w.aQ_,{size:20})})})]})},_=e=>(0,a.jsx)("div",{className:"bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 mx-auto h-screen w-full overflow-auto",children:(0,a.jsxs)("div",{className:"bg-transparent flex flex-col justify-center px-8 lg:w-[950px] m-auto min-h-screen",children:[(0,a.jsx)(C,{}),(0,a.jsx)("main",{className:"w-full flex flex-col grow shrink",children:e.children}),(0,a.jsx)(v,{})]})}),k=e=>{let{children:t}=e,[n,r]=(0,u.useState)(!1);return((0,u.useEffect)(()=>{r(!0)},[]),n)?(0,a.jsx)(x.f,{storageKey:"theme",attribute:"class",enableSystem:!0,children:t}):null},E=e=>{let{Component:t,pageProps:n}=e,r=(0,l.useRouter)();return(0,u.useEffect)(()=>{let e=e=>{d(e)};return r.events.on("routeChangeComplete",e),()=>{r.events.off("routeChangeComplete",e)}},[r.events]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s(),{children:(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n\n              gtag('config', '".concat(f,"', {\n                page_path: window.location.pathname,\n              });\n            ")}})}),(0,a.jsx)(c(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=".concat(f)})]}),(0,a.jsx)(k,{children:(0,a.jsx)(_,{children:(0,a.jsx)(t,{...n})})})]})};var M=E},1489:function(){},8737:function(){},7097:function(){},5032:function(){},639:function(){},7599:function(){},8346:function(){},9382:function(){},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)},4298:function(e,t,n){e.exports=n(3573)},3750:function(e,t,n){"use strict";n.d(t,{aQ_:function(){return o},gLD:function(){return a},lzl:function(){return l}});var r=n(8357);function a(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"}},{tag:"path",attr:{d:"M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"}}]})(e)}function l(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"}}]})(e)}function o(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"}}]})(e)}},9583:function(e,t,n){"use strict";n.d(t,{RiI:function(){return l},SRX:function(){return c},hJX:function(){return a},s$2:function(){return o}});var r=n(8357);function a(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function l(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}}]})(e)}function o(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"}}]})(e)}function c(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return i}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function i(e){return function(t){return r.createElement(s,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,o({key:n},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var n,a=e.attr,l=e.size,i=e.title,s=c(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==l?r.createElement(l.Consumer,null,function(e){return t(e)}):t(a)}},1571:function(e,t,n){"use strict";n.d(t,{F:function(){return s},f:function(){return u}});var r=n(7294),a=["light","dark"],l="(prefers-color-scheme: dark)",o="undefined"==typeof window,c=r.createContext(void 0),i={setTheme:e=>{},themes:[]},s=()=>{var e;return null!=(e=r.useContext(c))?e:i},u=e=>r.useContext(c)?e.children:r.createElement(d,{...e}),f=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:o=!0,storageKey:i="theme",themes:s=f,defaultTheme:u=n?"system":"light",attribute:d="data-theme",value:v,children:y,nonce:b})=>{let[x,w]=r.useState(()=>m(i,u)),[j,C]=r.useState(()=>m(i)),_=v?Object.values(v):s,k=r.useCallback(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=g());let l=v?v[r]:r,c=t?p():null,i=document.documentElement;if("class"===d?(i.classList.remove(..._),l&&i.classList.add(l)):l?i.setAttribute(d,l):i.removeAttribute(d),o){let e=a.includes(u)?u:null,t=a.includes(r)?r:e;i.style.colorScheme=t}null==c||c()},[]),E=r.useCallback(e=>{let t="function"==typeof e?e(e):e;w(t);try{localStorage.setItem(i,t)}catch(e){}},[e]),M=r.useCallback(t=>{C(g(t)),"system"===x&&n&&!e&&k("system")},[x,e]);r.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(M),M(e),()=>e.removeListener(M)},[M]),r.useEffect(()=>{let e=e=>{e.key===i&&E(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),r.useEffect(()=>{k(null!=e?e:x)},[e,x]);let O=r.useMemo(()=>({theme:x,setTheme:E,forcedTheme:e,resolvedTheme:"system"===x?j:x,themes:n?[...s,"system"]:s,systemTheme:n?j:void 0}),[x,E,e,j,n,s]);return r.createElement(c.Provider,{value:O},r.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:o,storageKey:i,themes:s,defaultTheme:u,attribute:d,value:v,children:y,attrs:_,nonce:b}),y)},h=r.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:o,enableColorScheme:c,defaultTheme:i,value:s,attrs:u,nonce:f})=>{let d="system"===i,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,m=c?(a.includes(i)?i:null)?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{let l=s?s[e]:e,o=t?e+"|| ''":`'${l}'`,i="";return c&&r&&!t&&a.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?t||l?i+=`c.add(${o})`:i+="null":l&&(i+=`d[s](n,${o})`),i},g=e?`!function(){${h}${p(e)}}()`:o?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}${d?"":"else{"+p(i,!1,!1)+"}"}${m}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}else{${p(i,!1,!1)};}${m}}catch(t){}}();`;return r.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:g}})}),m=(e,t)=>{let n;if(!o){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},g=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);