(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(9469)}])},4541:function(e,t,r){"use strict";r.d(t,{Is:function(){return s},Rj:function(){return i}});var l=r(5893),a=r(2962),n=r(8014);n.Z.title,n.Z.description,n.Z.siteUrl,n.Z.title,n.Z.description,n.Z.author.name;let s=e=>{let{title:t,description:r,url:s}=e;return(0,l.jsx)(a.PB,{title:"".concat(t," – ").concat(n.Z.title),description:r,canonical:s,openGraph:{url:s,title:t,description:r,images:[{alt:t,url:"/thumbnail.png"}]}})},i=e=>{let{title:t,summary:r,date:s,updatedAt:i,url:c,tags:o,images:u=[]}=e,d=new Date(s).toISOString(),h=new Date(i||s).toISOString(),x=u.map(e=>({url:e,alt:t}));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.PB,{title:"".concat(t," – ").concat(n.Z.title),description:r,canonical:c,openGraph:{type:"article",article:{publishedTime:d,modifiedTime:h,authors:[n.Z.author.name],tags:o},url:c,title:t,description:r,images:x}}),(0,l.jsx)(a.dX,{authorName:n.Z.author.name,dateModified:h,datePublished:d,description:r,images:u,publisherName:n.Z.author.name,title:t,url:c,publisherLogo:"".concat(n.Z.siteUrl,"/favicons/favicon-32x32.png")})]})}},1485:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var l=r(5893),a=r(7294),n=r(1664),s=r.n(n);let i=e=>{let{title:t,date:r,tags:a,description:n,slug:i}=e,c=new Date(r);return(0,l.jsxs)(s(),{className:"flex flex-col rounded p-4 shadow-xl hover:bg-neutral-100 hover:-translate-y-0.5 hover:duration-300 hover:ease-in-out",href:"/".concat(i),children:[(0,l.jsx)("div",{className:"font-bold",children:t}),(0,l.jsxs)("div",{className:"text-xs text-neutral-400 text-right",children:[c.getFullYear(),".",c.getMonth()+1,".",c.getDate()]}),(0,l.jsx)("div",{className:"flex overflow-hidden my-2",children:a.map(e=>(0,l.jsxs)("div",{className:"shrink-0 text-xs rounded bg-neutral-400 p-1 mr-2 text-neutral-100",children:["#",e]},e))}),(0,l.jsx)("div",{className:"text-xs text-neutral-600 w-full max-h-8 break-normal overflow-hidden text-ellipsis",children:n})]})};var c=r(1649);let o=e=>{let{currPage:t,startPage:r,endPage:a,path:n}=e,i=e=>"".concat(n,"?page=").concat(e);return(0,l.jsxs)("div",{className:"flex text-blue-700 justify-center items-center my-2.5",children:[(0,l.jsx)(s(),{href:i(Math.max(r,t-1)),className:"hover:text-blue-900",children:(0,l.jsx)(c.u1R,{})}),(0,l.jsx)("div",{className:"grid grid-flow-col grid-cols-[repeat(auto-fill, auto)] gap-3 mx-2 text-base place-items-center text-center",children:Array(a-r).fill(0).map((e,a)=>(0,l.jsx)(s(),{href:i(a+r),className:"hover:text-blue-900 ".concat(a+r===t?"h-8 w-8 border-4 rounded-full border-blue-700 text-center leading-6 font-semibold":""),children:a+r+1},a+r))}),(0,l.jsx)(s(),{className:"hover:text-blue-900",href:i(Math.min(a,t+1)),children:(0,l.jsx)(c.hjJ,{})})]})},u=(e,t)=>{let r=Math.max(1,Math.ceil(e/10)),[l,n]=(0,a.useState)(0),[s,i]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=t-2;e<0&&(e=0);let l=e+5;l>r&&(l=r),n(e),i(l)},[t,r]),{lastPage:r,startPage:l,endPage:s}},d=e=>{let{title:t,posts:r,currPage:n,path:s}=e,{startPage:c,endPage:d}=u(r.length,n),h=r.slice(10*n,(n+1)*10);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:"font-bold py-3 pl-1 text-2xl",children:t}),(0,l.jsx)("article",{className:"flex flex-col flex-nowrap gap-3",children:h.map(e=>{let{frontMatter:t,fields:{slug:r}}=e;return(0,a.createElement)(i,{...t,slug:r,key:r})})}),(0,l.jsx)(o,{currPage:n,path:s,startPage:c,endPage:d})]})};var h=d},9469:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return d}});var l=r(5893),a=r(1163),n=r(7294),s=r(1739),i=r(1485),c=r(4541),o=r(8014);let u=e=>{let{posts:t,tags:r}=e,{route:u,query:{page:d}}=(0,a.useRouter)(),h=d?parseInt(d):0,{setTags:x}=(0,s.Z)();return(0,n.useEffect)(()=>{x(r)},[r]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Is,{title:o.Z.title+": Blog",description:o.Z.description,url:o.Z.siteUrl+"blog"}),(0,l.jsx)(i.Z,{title:"BLOG",posts:t,currPage:h,path:u})]})};var d=!0;t.default=u}},function(e){e.O(0,[866,962,774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);