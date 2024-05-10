(()=>{var t={};t.id=187,t.ids=[187,660],t.modules={1323:(t,e)=>{"use strict";Object.defineProperty(e,"l",{enumerable:!0,get:function(){return function t(e,i){return i in e?e[i]:"then"in e&&"function"==typeof e.then?e.then(e=>t(e,i)):"function"==typeof e&&"default"===i?e:void 0}}})},4359:(t,e,i)=>{"use strict";i.r(e),i.d(e,{config:()=>g,default:()=>d,getServerSideProps:()=>h,getStaticPaths:()=>f,getStaticProps:()=>p,reportWebVitals:()=>v,routeModule:()=>y,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>m});var l=i(7093),r=i(5244),s=i(1323),a=i(2899),o=i.n(a),n=i(6958),c=i.n(n),u=i(99);let d=(0,s.l)(u,"default"),p=(0,s.l)(u,"getStaticProps"),f=(0,s.l)(u,"getStaticPaths"),h=(0,s.l)(u,"getServerSideProps"),g=(0,s.l)(u,"config"),v=(0,s.l)(u,"reportWebVitals"),m=(0,s.l)(u,"unstable_getStaticProps"),P=(0,s.l)(u,"unstable_getStaticPaths"),b=(0,s.l)(u,"unstable_getStaticParams"),w=(0,s.l)(u,"unstable_getServerProps"),S=(0,s.l)(u,"unstable_getServerSideProps"),y=new l.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/js/footer-injection",pathname:"/js/footer-injection",bundlePath:"",filename:""},components:{App:c(),Document:o()},userland:u})},6958:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n}});let l=i(167),r=i(997),s=l._(i(6689)),a=i(7201);async function o(t){let{Component:e,ctx:i}=t;return{pageProps:await (0,a.loadGetInitialProps)(e,i)}}class n extends s.default.Component{render(){let{Component:t,pageProps:e}=this.props;return(0,r.jsx)(t,{...e})}}n.origGetInitialProps=o,n.getInitialProps=o,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},99:()=>{document.getElementById("footer").innerHTML=`
<hr>
<div class="inner-footer mx-5">
                <div class="inner-block">
                    <div class="inner-stack-1">
                        <ul class="list-style">
                            <li>
                                <h4 style="margin: 0;"><strong>STAY TUNED</strong></h4>
                            </li>
                            <li id="footer-uper-email">
                                Sign up to receive exclusive offers.
                            </li>
                        </ul>
                        <input class="footer-input" type="email" placeholder="E-mail">
                        <button id="footer-button" type="button" class="footer-btn-bg-fadeout">SUBSCRIBE</button>
                    </div>
                    <div class="inner-stack">
                        <ul class="list-style">
                            <li>
                                COMPANY
                            </li>
                            <li>
                                <a href="./membership.html">About Us</a>
                            </li>
                            <li>
                                <a href="#"> Contact Us</a>
                            </li>
                        </ul>
                    </div>
            
                    <div class="inner-stack">
                        <ul class="list-style">
                            <li>
                                SHOP
                            </li>
                            <li>
                                <a href="./collection.html"> All</a>
                            </li>
                            <li>
                                <a href="./newproduct.html">By Category</a>
            
                            </li>
                            <li>
                                <a href="./newproduct.html">By Skin Concern</a>
                            </li>
                            <li>
                                <a href="./newproduct.html">By Ingredients</a>
            
                            </li>
                        </ul>
                    </div>
                    <div class="inner-stack">
                        <ul class="list-style">
                            <li>
                                CUSTOMER CARE
                            </li>
                            <li>
                                <a href="faqs.html">FAQ</a>
                            </li>
                            <li>
                                <a href="shipping-policy.html">Shipping Policy</a>
            
                            </li>
                            <li>
                                <a href="return-policy.html">Return Policy</a>
            
                            </li>
                            <li>
                                <a href="privacy-policy.html">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="terms-of-policy.html"> Terms of Service</a>
            
                            </li>
                        </ul>
                    </div>
                    <div class="inner-stack">
                        <img src="./img/footer/anua-footer-logo.webp" alt="" width="50px" height="50px">
                    </div>
            
                </div>
            
                <div class="icon-footer">
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fanua_usa">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x"
                            viewBox="0 0 16 16">
                            <path
                                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                    </a>
            
                    <a href="https://www.instagram.com/anua.skincare_usa/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@anua_official.store">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok"
                            viewBox="0 0 16 16">
                            <path
                                d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                        </svg>
                    </a>
                </div>
            
                <div class="sub-footer">
                    @2024 - Anua US Powered by Shopify
                </div>
                </div class="fix">
                <div class="fix-logo">
                  <button type="button">
                      <div class="white-logo">
                          <img src="./img/footer/anua-black-logo.png" alt="" width="20" height="20">
                      </div>
                  </button>
                </div>
              </div>
`},5244:(t,e)=>{"use strict";var i;Object.defineProperty(e,"x",{enumerable:!0,get:function(){return i}}),function(t){t.PAGES="PAGES",t.PAGES_API="PAGES_API",t.APP_PAGE="APP_PAGE",t.APP_ROUTE="APP_ROUTE"}(i||(i={}))},2785:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:t=>{"use strict";t.exports=require("react")},997:t=>{"use strict";t.exports=require("react/jsx-runtime")},1017:t=>{"use strict";t.exports=require("path")}};var e=require("../../webpack-runtime.js");e.C(t);var i=t=>e(e.s=t),l=e.X(0,[899],()=>i(4359));module.exports=l})();