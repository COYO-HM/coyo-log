(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{6913:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[...slugs]",function(){return l(1431)}])},1431:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSG:function(){return y},default:function(){return _}});var r=l(5893),s=l(2962),a=l(8014);let n=e=>{let{title:t,description:l,date:n,updatedAt:i,url:c,tags:o,images:d=[]}=e,x=new Date(n).toISOString(),u=new Date(i||n).toISOString(),m=d.map(e=>({url:e,alt:t}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.PB,{title:"".concat(a.Z.title," | ").concat(t),description:l,canonical:c,openGraph:{type:"article",article:{publishedTime:x,modifiedTime:u,authors:[a.Z.author.name],tags:o},url:c,title:t,description:l,images:m}}),(0,r.jsx)(s.dX,{authorName:a.Z.author.name,dateModified:u,datePublished:x,description:l,images:d,publisherName:a.Z.author.name,title:t,url:c,publisherLogo:"".concat(a.Z.siteUrl,"/favicons/favicon-32x32.png")})]})};var i=l(7635),c=l(7718),o=l(2985);let d=e=>{let{title:t,date:l}=e,{dateStr:s}=(0,i.Z)(l);return(0,r.jsxs)("header",{className:"pt-28 pb-14 text-5xl font-semibold text-center",children:[(0,r.jsx)("h1",{className:"text-lg w-fit font-normal italic bg-transparent border-b-2 border-black dark:border-white mb-2 mx-auto",children:o.R.post.label}),(0,r.jsx)(c.Z,{className:"break-keep max-md:text-xl leading-snug",children:t}),(0,r.jsx)("p",{className:"text-sm text-neutral-500 mt-10",children:s})]})};var x=l(3084),u=l(1664),m=l.n(u),h=l(3081);let p=e=>{let{tags:t,slug:l}=e;return(0,r.jsxs)("div",{className:"pt-4 flex flex-row items-center flex-wrap",children:[(0,r.jsx)("h1",{className:"text-lg mr-3 mb-2 italic font-semibold",children:"#tags"}),t.map(e=>{let t=h.Z[e],l=(null==t?void 0:t.bg_hover)||"hover:bg-blue-700 dark:hover:bg-blue-700";return(0,r.jsxs)(m(),{className:"mr-2 mb-2 h-6 p-1 w-fit break-keep text-xs rounded bg-neutral-100 dark:bg-neutral-700 hover:text-white ".concat(l),href:"/post/page/0/".concat(e),children:["#",(null==t?void 0:t.label)||e]},e)})]})};var b=l(7294),f=l(9583);let g=e=>{let t=e.split("\n").filter(e=>e.includes("# "));return t.filter(e=>"#"===e[0]).map(e=>{var t;let l=(null===(t=e.match(/#/g))||void 0===t?void 0:t.length)||0,r=e.split("# ")[1].replace(/`|\*/g,"").trim();return{id:r.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/g,""),title:r,count:l}})},j=e=>{let{content:t}=e,l=g(t),s=(0,b.useRef)({}),[a,n]=(0,b.useState)("");(0,b.useEffect)(()=>{s.current={};let e=e=>{s.current=e.reduce((e,t)=>(e[t.target.id]=t,e),s.current);let t=[];Object.keys(s.current).forEach(e=>{let l=s.current[e];l.isIntersecting&&t.push(l)}),(null==t?void 0:t.length)>0&&n(t[0].target.id)},t=new IntersectionObserver(e,{rootMargin:"-50px 0px 0px 0px"});return l.forEach(e=>{let{id:l}=e,r=document.getElementById(l);r&&t.observe(r)}),()=>t.disconnect()},[l]);let i=()=>{window.scroll({top:0,behavior:"smooth"})},c=()=>{document.body.scrollTop=document.body.scrollHeight,window.scroll(0,document.body.scrollHeight)};return(0,r.jsxs)("div",{className:"w-52 shrink-0 h-full top-0 py-[50px] sticky flex flex-col flex-nowrap justify-center items-center max-md:static max-md:h-fit max-md:w-full",children:[(0,r.jsx)("button",{onClick:i,className:"hover:text-blue-700 max-md:hidden",children:(0,r.jsx)(f.s$2,{size:32})}),(0,r.jsx)("div",{id:"toc",className:"w-full flex flex-col border-l-2 border-l-blue-100 dark:border-l-blue-900 my-4 rounded-none max-md:border-0 max-md:p-4 max-md:bg-neutral-200 max-md:rounded-xl dark:bg-neutral-700",children:l.map(e=>{let{title:t,count:l,id:s}=e;return(0,r.jsx)(m(),{href:"#".concat(s),className:"hover:text-blue-700 box-decoration-slice py-1.5 pr-1 text-xs ".concat(a===s?"bg-blue-100 dark:bg-blue-900":""," header-").concat(l),children:t},t)})}),(0,r.jsx)("button",{onClick:c,children:(0,r.jsx)(f.RiI,{size:32,className:"hover:text-blue-700 max-md:hidden"})})]})};var v=l(5808);let w=e=>{let{selectedPostKey:t,seriesInfo:l}=e;return(0,r.jsxs)("div",{className:"bg-blue-500/20 p-5 rounded-lg\n    ",children:[(0,r.jsxs)(v.Z,{className:"text-lg font-bold flex justify-between flex-wrap align-bottom",children:[null==l?void 0:l.title,(0,r.jsx)(m(),{className:"italic font-light text-sm hover:text-yellow-600",href:"/series/".concat(l.key),children:"같은 시리즈 다른 글 보기\xa0>"})]}),(0,r.jsx)("ul",{className:"flex flex-col gap-1.5 italic pt-3",children:l.posts.map(e=>e.key===t?(0,r.jsx)("h3",{className:"text-blue-500 cursor-default",children:e.title},e.key):(0,r.jsx)(m(),{href:"/post/".concat(e.key),className:"hover:text-blue-700",children:e.title},e.key))})]})};var N=l(9601);let k=e=>{let{post:{fields:{slug:t},frontMatter:l,body:s,path:i},allSeriesInfo:c,mdx:o}=e,{key:u,series:m,title:h,tags:b,date:f,description:g,thumbnail:v}=l;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{title:"".concat(h),description:g,date:f,url:a.Z.siteUrl+"Post/"+t,tags:b,images:v?[v]:[]}),(0,r.jsxs)("article",{className:"flex flex-col",id:"post",children:[(0,r.jsx)(d,{...l}),(0,r.jsxs)("div",{className:"relative border-y border-y-blue-700 flex flex-row flex-nowrap max-md:flex-col-reverse",children:[(0,r.jsxs)("div",{className:"grow shrink pr-10 pt-5 min-w-0 max-md:p-0 max-md:pb-4",children:[(0,r.jsx)("div",{className:"flex flex-col gap-3",children:c.map(e=>(0,r.jsx)(w,{selectedPostKey:t,seriesInfo:e},e.key))}),(0,r.jsx)(x.Z,{...o}),(0,r.jsx)(p,{tags:b,slug:t})]}),(0,r.jsx)(j,{content:s})]}),(0,r.jsx)(N.Z,{})]})]})};var y=!0,_=k}},function(e){e.O(0,[130,91,774,888,179],function(){return e(e.s=6913)}),_N_E=e.O()}]);