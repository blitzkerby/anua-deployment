(()=>{var e={};e.id=102,e.ids=[102,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},9018:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>g,default:()=>p,getServerSideProps:()=>f,getStaticPaths:()=>P,getStaticProps:()=>d,reportWebVitals:()=>b,routeModule:()=>x,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>h,unstable_getStaticParams:()=>_,unstable_getStaticPaths:()=>m,unstable_getStaticProps:()=>S});var s=r(7093),n=r(5244),a=r(1323),i=r(2899),l=r.n(i),u=r(6958),o=r.n(u),c=r(694);let p=(0,a.l)(c,"default"),d=(0,a.l)(c,"getStaticProps"),P=(0,a.l)(c,"getStaticPaths"),f=(0,a.l)(c,"getServerSideProps"),g=(0,a.l)(c,"config"),b=(0,a.l)(c,"reportWebVitals"),S=(0,a.l)(c,"unstable_getStaticProps"),m=(0,a.l)(c,"unstable_getStaticPaths"),_=(0,a.l)(c,"unstable_getStaticParams"),v=(0,a.l)(c,"unstable_getServerProps"),h=(0,a.l)(c,"unstable_getServerSideProps"),x=new s.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/js/faqs",pathname:"/js/faqs",bundlePath:"",filename:""},components:{App:o(),Document:l()},userland:c})},6958:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let s=r(167),n=r(997),a=s._(r(6689)),i=r(7201);async function l(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,i.loadGetInitialProps)(t,r)}}class u extends a.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,n.jsx)(e,{...t})}}u.origGetInitialProps=l,u.getInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},694:()=>{var e,t=document.getElementsByClassName("collapsible");for(e=0;e<t.length;e++)t[e].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[899],()=>r(9018));module.exports=s})();