(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{6647:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project",function(){return r(4978)}])},373:function(e,t,r){"use strict";var n=r(5893),a=r(1664),s=r.n(a),c=r(1649);let i=e=>{let{currPage:t,startPage:r,endPage:a,path:i,selectedTags:l}=e,o=e=>({pathname:i,query:{tags:l,page:e}});return(0,n.jsxs)("div",{className:"flex text-blue-700 justify-center items-center my-5",children:[(0,n.jsx)(s(),{href:o(t-1),className:"hover:text-blue-900",onClick:e=>r===t&&e.preventDefault(),children:(0,n.jsx)(c.u1R,{})}),(0,n.jsx)("div",{className:"flex gap-3 items-center justify-center mx-2 text-base",children:Array(a-r).fill(0).map((e,a)=>(0,n.jsx)(s(),{href:o(a+r),className:"hover:text-blue-900 flex items-center justify-center ".concat(a+r===t?"h-9 w-9 rounded-full border-blue-700 font-semibold border-4":""),children:a+r+1},a+r))}),(0,n.jsx)(s(),{className:"hover:text-blue-900",href:o(t+1),onClick:e=>a===t+1&&e.preventDefault(),children:(0,n.jsx)(c.hjJ,{})})]})};t.Z=i},4541:function(e,t,r){"use strict";r.d(t,{Is:function(){return c},Rj:function(){return i}});var n=r(5893),a=r(2962),s=r(8014);s.Z.title,s.Z.description,s.Z.siteUrl,s.Z.title,s.Z.description,s.Z.author.name;let c=e=>{let{title:t,description:r,url:c}=e;return(0,n.jsx)(a.PB,{title:"".concat(s.Z.title," | ").concat(t),description:r,canonical:c,openGraph:{url:c,title:t,description:r,images:[{alt:t,url:"/static/images/moblie-profile.png"}]}})},i=e=>{let{title:t,summary:r,date:c,updatedAt:i,url:l,tags:o,images:u=[]}=e,d=new Date(c).toISOString(),h=new Date(i||c).toISOString(),f=u.map(e=>({url:e,alt:t}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.PB,{title:"".concat(s.Z.title," | ").concat(t),description:r,canonical:l,openGraph:{type:"article",article:{publishedTime:d,modifiedTime:h,authors:[s.Z.author.name],tags:o},url:l,title:t,description:r,images:f}}),(0,n.jsx)(a.dX,{authorName:s.Z.author.name,dateModified:h,datePublished:d,description:r,images:u,publisherName:s.Z.author.name,title:t,url:l,publisherLogo:"".concat(s.Z.siteUrl,"/favicons/favicon-32x32.png")})]})}},4883:function(e,t,r){"use strict";var n=r(5893),a=r(1664),s=r.n(a),c=r(5675),i=r.n(c),l=r(7635),o=r(3930);let u=e=>{let{title:t,date:r,tags:a,thumbnail:c,slug:u}=e,{dateStr:d}=(0,l.Z)(r);return(0,n.jsxs)(s(),{className:"hover:-translate-y-2 hover:duration-300 hover:ease-in-out overflow-hidden shadow-xl rounded-xl bg-neutral-100 grid grid-rows-[2fr_1fr] dark:bg-neutral-900",href:"/".concat(u),children:[(0,n.jsx)("div",{className:"relative",children:!!c&&(0,n.jsx)(i(),{loader:e=>(0,o.Z)(e),src:c,alt:t,className:"object-cover",fill:!0})}),(0,n.jsxs)("div",{className:"w-full p-3",children:[(0,n.jsx)("h1",{className:"text-lg font-bold text-neutral-900 dark:text-neutral-100",children:t}),(0,n.jsx)("p",{className:"text-neutral-400",children:d})]})]})};t.Z=u},1880:function(e,t,r){"use strict";r.d(t,{JK:function(){return a},b7:function(){return n}});let n=5,a=12},8963:function(e,t,r){"use strict";var n=r(1880),a=r(7294);let s=(e,t)=>{let r=Math.max(1,Math.ceil(e/n.b7)),[s,c]=(0,a.useState)(0),[i,l]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=t-2;e<0&&(e=0);let n=e+5;n>r&&(n=r),c(e),l(n)},[t,r]),{lastPage:r,startPage:s,endPage:i}};t.Z=s},4978:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return p},default:function(){return x}});var n=r(5893),a=r(1163),s=r(4541),c=r(7294),i=r(1880),l=r(8963);let o=e=>{let{title:t}=e;return(0,n.jsx)("h1",{className:"font-bold pb-6 pl-1.5 text-3xl",children:t})};var u=r(4883),d=r(373);let h=e=>{let{categoryId:t,tag:r,posts:a,currPage:s,path:h}=e,{startPage:f,endPage:p}=(0,l.Z)(a.length,s),x=a.slice(s*i.JK,(s+1)*i.JK);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{title:r||t.toUpperCase()}),(0,n.jsx)("article",{className:"grid grid-cols-3 gap-4",children:x.map(e=>{let{frontMatter:t,fields:{slug:r}}=e;return(0,c.createElement)(u.Z,{...t,slug:r,key:r})})}),(0,n.jsx)(d.Z,{currPage:s,path:h,startPage:f,endPage:p})]})};var f=r(8014),p=!0;function x(e){let{posts:t,tags:r}=e,{route:c,query:{page:i}}=(0,a.useRouter)(),l=i?parseInt(i):0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Is,{title:"Project",description:f.Z.description,url:f.Z.siteUrl+"project"}),(0,n.jsx)(h,{categoryId:"project",posts:t,currPage:l,path:c})]})}},7635:function(e,t){"use strict";let r=e=>{let t=new Date(e),r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return{year:r,month:n,date:a,dateStr:"".concat(r,".").concat(n,".").concat(a)}};t.Z=r},3930:function(e,t,r){"use strict";function n(e){let{src:t,width:r,quality:n}=e;return"".concat("https://coyo-hm.github.io").concat(t,"?w=").concat(r,"&q=").concat(n||75)}r.d(t,{Z:function(){return n}})}},function(e){e.O(0,[866,962,675,774,888,179],function(){return e(e.s=6647)}),_N_E=e.O()}]);