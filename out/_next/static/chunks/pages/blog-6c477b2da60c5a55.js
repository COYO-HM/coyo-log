(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(4434)}])},4541:function(e,r,t){"use strict";t.d(r,{Is:function(){return c},Rj:function(){return s}});var o=t(5893),l=t(2962),a=t(8014);a.Z.title,a.Z.description,a.Z.siteUrl,a.Z.title,a.Z.description,a.Z.author.name;let c=e=>{let{title:r,description:t,url:c}=e;return(0,o.jsx)(l.PB,{title:"".concat(a.Z.title," | ").concat(r),description:t,canonical:c,openGraph:{url:c,title:r,description:t,images:[{alt:r,url:"/static/images/moblie-profile.png"}]}})},s=e=>{let{title:r,summary:t,date:c,updatedAt:s,url:n,tags:i,images:u=[]}=e,d=new Date(c).toISOString(),x=new Date(s||c).toISOString(),h=u.map(e=>({url:e,alt:r}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.PB,{title:"".concat(a.Z.title," | ").concat(r),description:t,canonical:n,openGraph:{type:"article",article:{publishedTime:d,modifiedTime:x,authors:[a.Z.author.name],tags:i},url:n,title:r,description:t,images:h}}),(0,o.jsx)(l.dX,{authorName:a.Z.author.name,dateModified:x,datePublished:d,description:t,images:u,publisherName:a.Z.author.name,title:r,url:n,publisherLogo:"".concat(a.Z.siteUrl,"/favicons/favicon-32x32.png")})]})}},8161:function(e,r,t){"use strict";var o=t(5893),l=t(9334);let a=e=>{let{tag:r}=e,t=l.Z.BG[r]||"bg-neutral-400";return(0,o.jsxs)("div",{className:"shrink-0 rounded py-0.5 px-1 text-xs text-neutral-100 ".concat(t),children:["#",r]},r)};r.Z=a},4883:function(e,r,t){"use strict";var o=t(5893),l=t(1664),a=t.n(l),c=t(5675),s=t.n(c),n=t(7635),i=t(3930);let u=e=>{let{title:r,date:t,tags:l,thumbnail:c,slug:u}=e,{dateStr:d}=(0,n.Z)(t);return(0,o.jsxs)(a(),{className:"hover:-translate-y-2 hover:duration-300 hover:ease-in-out overflow-hidden shadow-xl rounded-xl bg-neutral-100 grid grid-rows-[2fr_1fr] dark:bg-neutral-900",href:"/".concat(u),children:[(0,o.jsx)("div",{className:"relative",children:!!c&&(0,o.jsx)(s(),{loader:e=>(0,i.Z)(e),src:c,alt:r,className:"object-cover",fill:!0})}),(0,o.jsxs)("div",{className:"w-full p-3",children:[(0,o.jsx)("h1",{className:"text-lg font-bold text-neutral-900 dark:text-neutral-100",children:r}),(0,o.jsx)("p",{className:"text-neutral-400",children:d})]})]})};r.Z=u},9106:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});var o=t(5893),l=t(7294);let a={list:5,card:12},c=(e,r,t)=>{let o=Math.max(1,Math.ceil(e/a[t])),[c,s]=(0,l.useState)(0),[n,i]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let e=r-2;e<0&&(e=0);let t=e+5;t>o&&(t=o),s(e),i(t)},[r,o]),{lastPage:o,startPage:c,endPage:n}};var s=t(1664),n=t.n(s),i=t(1649);let u=e=>{let{currPage:r,startPage:t,endPage:l,path:a,query:c}=e,s=e=>({pathname:a,query:{...c,page:e}});return(0,o.jsxs)("div",{className:"flex text-blue-700 justify-center items-center my-5",children:[(0,o.jsx)(n(),{href:s(r-1),className:"hover:text-blue-900",onClick:e=>t===r&&e.preventDefault(),children:(0,o.jsx)(i.u1R,{})}),(0,o.jsx)("div",{className:"flex gap-3 items-center justify-center mx-2 text-base",children:Array(l-t).fill(0).map((e,l)=>(0,o.jsx)(n(),{href:s(l+t),className:"hover:text-blue-900 flex items-center justify-center ".concat(l+t===r?"h-9 w-9 rounded-full border-blue-700 font-semibold border-4":""),children:l+t+1},l+t))}),(0,o.jsx)(n(),{className:"hover:text-blue-900",href:s(r+1),onClick:e=>l===r+1&&e.preventDefault(),children:(0,o.jsx)(i.hjJ,{})})]})};var d=t(8161);let x=e=>{let{title:r,date:t,tags:l,description:a,slug:c}=e,s=new Date(t);return(0,o.jsxs)(n(),{className:"flex flex-col bg-[rgb(255,255,255,0.6)] dark:bg-[rgba(255,250,250,0.1)] p-4 rounded shadow-xl bg-translate overflow-hidden hover:-translate-y-0.5 hover:duration-300 hover:ease-in-out",href:"/".concat(c),children:[(0,o.jsx)("div",{className:"text-neutral-800 dark:text-neutral-100 font-semibold pb-2",children:r}),(0,o.jsxs)("div",{className:"dark:text-neutral-300 mb-2 w-full max-h-10 break-normal overflow-hidden text-ellipsis flex items-center",children:[(0,o.jsxs)("span",{className:"text-neutral-400 text-xs flex-shrink-0",children:[s.getFullYear(),".",s.getMonth()+1,".",s.getDate()]}),(0,o.jsx)("div",{className:"flex items-center gap-1 flex-shrink flex-grow border-l-2 border-neutral-200 overflow-hidden pl-2 ml-2",children:l.map(e=>(0,o.jsx)(d.Z,{tag:e},e))})]}),!!a&&(0,o.jsx)("div",{className:"text-neutral-600 dark:text-neutral-300 break-normal text-ellipsis text-xs",children:a})]})};var h=t(4883);let v=e=>{let{showType:r,posts:t,currPage:s,path:n,query:i,children:d}=e,{startPage:v,endPage:p}=c(t.length,s,r),b=t.slice(s*a[r],(s+1)*a[r]);return(0,o.jsxs)("main",{className:"flex flex-col gap-5",children:[d,"list"===r&&(0,o.jsx)("article",{className:"flex flex-col flex-nowrap gap-3",children:b.map(e=>{let{frontMatter:r,fields:{slug:t}}=e;return(0,l.createElement)(x,{...r,slug:t,key:t})})}),"card"===r&&(0,o.jsx)("article",{className:"grid grid-cols-3 gap-4",children:b.map(e=>{let{frontMatter:r,fields:{slug:t}}=e;return(0,l.createElement)(h.Z,{...r,slug:t,key:t})})}),(0,o.jsx)(u,{currPage:s,path:n,query:i,startPage:v,endPage:p})]})};var p=v},9334:function(e,r){"use strict";r.Z={BG:{React:"bg-[color:var(--color-react)]",JavaScript:"bg-[color:var(--color-javascript)]",TypeScript:"bg-[color:var(--color-typescript)]",Redux:"bg-[color:var(--color-redux)]",Gatsby:"bg-[color:var(--color-gatsby)]",Jest:"bg-[color:var(--color-jest)]",GithubPage:"bg-[color:var(--color-githubpage)]",CSS:"bg-[color:var(--color-css)]",SCSS:"bg-[color:var(--color-scss)]","Styled-Components":"bg-[color:var(--color-styledcomponents)]",Emotion:"bg-[color:var(--color-emotion)]",HTML:"bg-[color:var(--color-html)]"},BG_HOVER:{React:"hover:bg-[color:var(--color-react)]",JavaScript:"hover:bg-[color:var(--color-javascript)]",TypeScript:"hover:bg-[color:var(--color-typescript)]",Redux:"hover:bg-[color:var(--color-redux)]",Gatsby:"hover:bg-[color:var(--color-gatsby)]",Jest:"hover:bg-[color:var(--color-jest)]",GithubPage:"hover:bg-[color:var(--color-githubpage)]",CSS:"hover:bg-[color:var(--color-css)]",SCSS:"hover:bg-[color:var(--color-scss)]","Styled-Components":"hover:bg-[color:var(--color-styledcomponents)]",Emotion:"hover:bg-[color:var(--color-emotion)]",HTML:"hover:bg-[color:var(--color-html)]"},TEXT:{React:"text-[color:var(--color-react)]",JavaScript:"text-[color:var(--color-javascript)]",TypeScript:"text-[color:var(--color-typescript)]",Redux:"text-[color:var(--color-redux)]",Gatsby:"text-[color:var(--color-gatsby)]",Jest:"text-[color:var(--color-jest)]",GithubPage:"text-[color:var(--color-githubpage)]",CSS:"text-[color:var(--color-css)]",SCSS:"text-[color:var(--color-scss)]","Styled-Components":"text-[color:var(--color-styledcomponents)]",Emotion:"text-[color:var(--color-emotion)]",HTML:"text-[color:var(--color-html)]"},TEXT_HOVER:{React:"hover:text-[color:var(--color-react)]",JavaScript:"hover:text-[color:var(--color-javascript)]",TypeScript:"hover:text-[color:var(--color-typescript)]",Redux:"hover:text-[color:var(--color-redux)]",Gatsby:"hover:text-[color:var(--color-gatsby)]",Jest:"hover:text-[color:var(--color-jest)]",GithubPage:"hover:text-[color:var(--color-githubpage)] dark:hover:text-white",CSS:"hover:text-[color:var(--color-css)]",SCSS:"hover:text-[color:var(--color-scss)]","Styled-Components":"hover:text-[color:var(--color-styledcomponents)]",Emotion:"hover:text-[color:var(--color-emotion)]",HTML:"hover:text-[color:var(--color-html)]"},BORDER:{React:"border-[color:var(--color-react)]",JavaScript:"border-[color:var(--color-javascript)]",TypeScript:"border-[color:var(--color-typescript)]",Redux:"border-[color:var(--color-redux)]",Gatsby:"border-[color:var(--color-gatsby)]",Jest:"border-[color:var(--color-jest)]",GithubPage:"border-[color:var(--color-githubpage)]",CSS:"border-[color:var(--color-css)]",SCSS:"border-[color:var(--color-scss)]","Styled-Components":"border-[color:var(--color-styledcomponents)]",Emotion:"border-[color:var(--color-emotion)]",HTML:"border-[color:var(--color-html)]"}}},4434:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return f},default:function(){return j}});var o=t(5893),l=t(1163),a=t(7294),c=t(9583),s=t(5788),n=t(8014),i=t(4541),u=t(1664),d=t.n(u),x=t(9352);let h=e=>{let[r,t]=(0,a.useState)(e),o=e=>{t(e.target.value)};return[r,o,t]};var v=t(9334);let p=e=>{let{tag:r,isSelectedTag:t,...l}=e;return(0,o.jsxs)("button",{className:"flex gap-2 justify-center items-center py-1 px-3 text-xs text-neutral-800 dark:text-neutral-100 rounded-3xl border overflow-hidden relative ".concat(null==l?void 0:l.className," ").concat(v.Z.BORDER[r]||"border-blue-700"),type:"button",...l,children:[(0,o.jsx)("div",{className:"w-full h-full absolute opacity-10 hover:opacity-20 ".concat(v.Z.BG[r]?v.Z.BG[r]:"bg-blue-700")}),t?(0,o.jsx)(s.ySC,{size:12}):(0,o.jsx)(s.Efn,{size:14}),r]},r)},b=e=>{let{allTags:r,prevSelectedTags:t=[],path:l}=e,[c,n,i]=h(""),[u,v]=(0,a.useState)(t),[b,g]=(0,a.useState)(r);(0,a.useEffect)(()=>{f()},[c]);let m=e=>{v(r=>r.includes(e)?r.filter(r=>r!==e):[...r,e])},f=e=>{e&&e.preventDefault(),g(r.filter(e=>{let{tag:r}=e;return r.toUpperCase().includes(c.toUpperCase())}))};return(0,o.jsxs)("div",{className:"flex flex-col gap-4 border-y-2 border-blue-700 py-3",children:[(0,o.jsxs)("form",{className:"flex gap-1 items-center justify-end",children:[(0,o.jsxs)("label",{className:"flex gap-1 items-center justify-start flex-grow",children:[(0,o.jsx)("input",{value:c,onChange:n,className:"rounded-2xl bg-neutral-500/10 pl-4 py-1 border-none outline-0 text-sm text-neutral-700 dark:text-neutral-200"}),(0,o.jsx)("button",{type:"submit",onClick:f,className:"p-2 bg-white dark:bg-neutral-500/20 rounded-2xl hover:bg-neutral-200 dark:hover:bg-neutral-700 text-inherit hover:text-blue-700",children:(0,o.jsx)(x.Qcu,{})})]}),(0,o.jsxs)("button",{className:"p-2 bg-white dark:bg-neutral-500/20 flex gap-2 items-center text-xs rounded-2xl hover:bg-neutral-200 dark:hover:bg-neutral-700 text-inherit hover:text-blue-700",onClick:()=>v([]),type:"button",children:[(0,o.jsx)(s.Z4w,{size:16}),"초기화"]}),(0,o.jsx)(d(),{href:{pathname:l,query:{page:0,tags:u}},className:"p-2 bg-white dark:bg-neutral-500/20 text-xs rounded-2xl hover:bg-neutral-200 dark:hover:bg-neutral-700 text-inherit hover:text-blue-700",children:"태그 적용하기"})]}),u.length>0&&(0,o.jsxs)("section",{className:"flex items-center gap-1 border-b-2 border-blue-700/25 pb-3",children:[(0,o.jsx)("span",{className:"text-xs pr-1 mr-1 border-r-neutral-400 border-r-2",children:"선택된 태그"}),u.map(e=>(0,o.jsx)(p,{tag:e,onClick:r=>m(e),isSelectedTag:!0},e))]}),b.length>0&&(0,o.jsx)("ul",{className:"flex flex-wrap gap-1.5",children:b.map(e=>{let{tag:r}=e;return(0,o.jsx)(p,{tag:r,isSelectedTag:u.includes(r),onClick:()=>m(r)},r)})})]})};var g=t(9106);let m=e=>{let{allPosts:r,allTags:t}=e,{route:u,query:{page:d,tags:x=[]}}=(0,l.useRouter)(),h="string"==typeof x?[x]:x,v=(0,a.useMemo)(()=>{let e=r;return x.length>0&&(e=r.filter(e=>{let{frontMatter:{tags:r}}=e;for(let e of r){let r=h.includes(e);if(r)return!0}return!1})),e},[r,h]),[p,m]=(0,a.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Is,{title:"Blog",description:n.Z.description,url:n.Z.siteUrl+"blog"}),(0,o.jsxs)(g.Z,{showType:"list",posts:v,currPage:d?parseInt(d):0,path:u,query:{tags:h},children:[(0,o.jsxs)("header",{className:"flex justify-end items-center gap-1 px-1",children:[(0,o.jsx)("h1",{className:"font-bold text-3xl flex-grow",children:"Blog"}),(0,o.jsxs)("span",{className:"text-neutral-500 text-sm",children:["포스트 수: ",v.length]}),(0,o.jsx)("button",{onClick:()=>m(e=>!e),className:"px-2 py-3 rounded-2xl hover:bg-neutral-200 dark:hover:bg-neutral-700 active:bg-neutral-200 dark:active:bg-neutral-700 ".concat(h.length>0?"text-blue-700":""),children:p?(0,o.jsx)(s.ySC,{size:16}):(0,o.jsx)(c.ulB,{size:16})})]}),p&&(0,o.jsx)(b,{allTags:t,prevSelectedTags:h,path:u})]})]})};var f=!0,j=m},7635:function(e,r){"use strict";let t=e=>{let r=new Date(e),t=r.getFullYear(),o=r.getMonth()+1,l=r.getDate();return{year:t,month:o,date:l,dateStr:"".concat(t,".").concat(o,".").concat(l)}};r.Z=t},3930:function(e,r,t){"use strict";function o(e){let{src:r,width:t,quality:o}=e;return"".concat("https://coyo-hm.github.io").concat(r,"?w=").concat(t,"&q=").concat(o||75)}t.d(r,{Z:function(){return o}})}},function(e){e.O(0,[866,937,130,774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);