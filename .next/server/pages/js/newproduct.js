(()=>{var e={};e.id=66,e.ids=[66,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,s){return s in t?t[s]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,s)):"function"==typeof t&&"default"===s?t:void 0}}})},1981:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>m,default:()=>u,getServerSideProps:()=>g,getStaticPaths:()=>P,getStaticProps:()=>p,reportWebVitals:()=>f,routeModule:()=>S,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>L,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>h});var d=s(7093),r=s(5244),a=s(1323),n=s(2899),i=s.n(n),l=s(6958),o=s.n(l),c=s(7284);let u=(0,a.l)(c,"default"),p=(0,a.l)(c,"getStaticProps"),P=(0,a.l)(c,"getStaticPaths"),g=(0,a.l)(c,"getServerSideProps"),m=(0,a.l)(c,"config"),f=(0,a.l)(c,"reportWebVitals"),h=(0,a.l)(c,"unstable_getStaticProps"),y=(0,a.l)(c,"unstable_getStaticPaths"),b=(0,a.l)(c,"unstable_getStaticParams"),v=(0,a.l)(c,"unstable_getServerProps"),L=(0,a.l)(c,"unstable_getServerSideProps"),S=new d.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/js/newproduct",pathname:"/js/newproduct",bundlePath:"",filename:""},components:{App:o(),Document:i()},userland:c})},6958:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let d=s(167),r=s(997),a=d._(s(6689)),n=s(7201);async function i(e){let{Component:t,ctx:s}=e;return{pageProps:await (0,n.loadGetInitialProps)(t,s)}}class l extends a.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,r.jsx)(e,{...t})}}l.origGetInitialProps=i,l.getInitialProps=i,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7284:()=>{let e=document.getElementById("four-box"),t=document.getElementById("six-box"),s=document.getElementById("burger"),d=document.getElementById("one-box"),r=document.getElementsByClassName("first-order")[0],a=document.getElementsByClassName("second-order")[0],n=document.getElementsByClassName("third-order")[0],i=document.getElementsByClassName("fourth-order")[0],l=e.style.color,o=e.style.color,c=t.style.color,u=s.style.color;function p(p){t.style.color=p!==t?c:"gray",e.style.color=p!==e?l:"gray",s.style.color=p!==s?u:"gray",d.style.color=p!=d?o:"gray",r.classList.remove("hidden"),a.classList.add("hidden"),n.classList.add("hidden"),i.classList.add("hidden")}e.addEventListener("click",()=>{p(e),r.classList.remove("hidden"),a.classList.add("hidden"),n.classList.add("hidden"),i.classList.add("hidden")}),t.addEventListener("click",()=>{p(t),r.classList.add("hidden"),a.classList.remove("hidden"),n.classList.add("hidden"),i.classList.add("hidden")}),s.addEventListener("click",()=>{p(s),r.classList.add("hidden"),a.classList.add("hidden"),n.classList.remove("hidden"),i.classList.add("hidden")}),d.addEventListener("click",()=>{p(s),r.classList.add("hidden"),a.classList.add("hidden"),n.classList.add("hidden"),i.classList.remove("hidden"),i.classList.add("d-flex")})},5244:(e,t)=>{"use strict";var s;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return s}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(s||(s={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),d=t.X(0,[899],()=>s(1981));module.exports=d})();