(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(237)}])},4541:function(e,t,r){"use strict";r.d(t,{Is:function(){return l},Rj:function(){return i}});var a=r(5893),n=r(2962),s=r(8014);s.Z.title,s.Z.description,s.Z.siteUrl,s.Z.title,s.Z.description,s.Z.author.name;let l=e=>{let{title:t,description:r,url:l}=e;return(0,a.jsx)(n.PB,{title:"".concat(s.Z.title," | ").concat(t),description:r,canonical:l,openGraph:{url:l,title:t,description:r,images:[{alt:t,url:"/thumbnail.png"}]}})},i=e=>{let{title:t,summary:r,date:l,updatedAt:i,url:o,tags:c,images:d=[]}=e,u=new Date(l).toISOString(),h=new Date(i||l).toISOString(),x=d.map(e=>({url:e,alt:t}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.PB,{title:"".concat(s.Z.title," | ").concat(t),description:r,canonical:o,openGraph:{type:"article",article:{publishedTime:u,modifiedTime:h,authors:[s.Z.author.name],tags:c},url:o,title:t,description:r,images:x}}),(0,a.jsx)(n.dX,{authorName:s.Z.author.name,dateModified:h,datePublished:u,description:r,images:d,publisherName:s.Z.author.name,title:t,url:o,publisherLogo:"".concat(s.Z.siteUrl,"/favicons/favicon-32x32.png")})]})}},237:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return g},default:function(){return b}});var a=r(5893),n=r(1664),s=r.n(n),l=r(5675),i=r.n(l),o=r(7294),c=r(9583),d=r(3750),u=r(8014),h=r(7635);let x=e=>{let{title:t,date:r,tags:n,description:s}=e,{dateStr:l}=(0,h.Z)(r);return(0,a.jsxs)("div",{className:"shadow-xl rounded-xl h-48 p-3 bg-white hover:-translate-y-2 hover:duration-300 hover:ease-in-out dark:bg-neutral-800",children:[(0,a.jsx)("h1",{className:"text-base w-full max-h-12 min-h-12 h-12 overflow-hidden text-ellipsis",children:t}),(0,a.jsx)("div",{className:"text-xs text-neutral-400 text-right mt-2",children:l}),(0,a.jsx)("div",{className:"flex overflow-hidden my-2",children:n.slice(0,2).map(e=>(0,a.jsxs)("div",{className:"shrink-0 text-xs rounded p-1 mr-2 text-neutral-100 bg-neutral-400 dark:bg-neutral-600",children:["#",e]},e))}),(0,a.jsx)("div",{className:"text-[12px] text-neutral-600 max-w-full block text-ellipsis overflow-hidden break-words h-[54px] dark:text-neutral-300",children:s})]})};var p=r(4541),m=r(1739),f=r(3930),g=!0;function b(e){let{posts:t,tags:r}=e,{setTags:n}=(0,m.Z)();return(0,o.useEffect)(()=>{n(r)},[n,r]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.Is,{title:"Home",description:u.Z.description,url:u.Z.siteUrl}),(0,a.jsxs)("div",{id:"profile",className:"grid gap-2 grid-rows-4 grid-cols-[240px_1fr] px-6 max-md:grid-cols-1 max-md:auto-rows-auto",children:[(0,a.jsx)(i(),{loader:e=>(0,f.Z)(e),src:"/static/images/profile.png",alt:"profileImage",className:"row-span-4 col-span-1 place-self-center mb-5",width:150,height:150}),(0,a.jsxs)("h1",{className:"text-2xl font-semibold break-keep",children:["안녕하세요, Frontend 개발자 ",u.Z.author.name," 입니다."]}),(0,a.jsxs)("p",{className:"row-span-2 break-keep",children:["React와 TypeScript를 주로 사용하여 개발하고 있습니다.",(0,a.jsx)("br",{})," 블로그를 통해 공부 기록을 남기고 있습니다."]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("a",{href:"https://github.com/COYO-HM",target:"_blank",rel:"noreferrer",className:"mr-3 hover:text-blue-700",children:(0,a.jsx)(c.hJX,{size:24})}),(0,a.jsx)("a",{href:"mailto:bsydwp@gmail.com",className:"hover:text-blue-700",children:(0,a.jsx)(c.SRX,{size:24})})]})]}),(0,a.jsxs)("div",{className:"flex flex-nowrap text-blue-700 border-y-2 border-blue-700 py-2 text-base my-4",children:[(0,a.jsx)("span",{className:"font-bold mr-4",children:"#tags"}),(0,a.jsx)("div",{id:"tags",className:"flex flex-nowrap overflow-auto",children:r.map(e=>{let{tag:t}=e;return(0,a.jsx)(s(),{href:"/blog/tags/".concat(t),className:"whitespace-nowrap mr-2 hover:font-bold hover:text-blue-900 dark:hover:text-blue-500 hover:-translate-y-0.5 hover:duration-300 hover:ease-in-out",children:t},t)})})]}),(0,a.jsxs)("div",{id:"recent_post",className:"shadow-2xl rounded-2xl overflow-hidden",children:[(0,a.jsxs)(s(),{href:"/blog?page=0",className:"text-2xl text-blue-700 p-6 pb-0 flex justify-between bg-neutral-50 hover:text-blue-900 dark:bg-neutral-700",children:[(0,a.jsx)("span",{children:"Recent Post"}),(0,a.jsx)(d.lzl,{})]}),(0,a.jsx)("div",{id:"tags",className:"grid gap-5 grid-flow-col auto-cols-[200px] px-4 py-6 bg-neutral-50 overflow-x-auto dark:bg-neutral-700",children:t.map(e=>{let{frontMatter:t,fields:{slug:r}}=e;return(0,a.jsx)(s(),{href:"/".concat(r),children:(0,a.jsx)(x,{...t})},r)})})]})]})}},7635:function(e,t){"use strict";let r=e=>{let t=new Date(e),r=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();return{year:r,month:a,date:n,dateStr:"".concat(r,".").concat(a,".").concat(n)}};t.Z=r},3930:function(e,t,r){"use strict";function a(e){let{src:t,width:r,quality:a}=e;return"".concat("https://coyo-hm.github.io").concat(t,"?w=").concat(r,"&q=").concat(a||75)}r.d(t,{Z:function(){return a}})}},function(e){e.O(0,[962,675,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);