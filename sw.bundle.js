if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const c=e=>a(e,r),l={module:{uri:r},exports:d,require:c};i[r]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(s(...e),d)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"557d0a6315ba0ab3a9c4f14d617ed62a"},{url:"848.bundle.js",revision:"c94010d5270e30e991ad952b3a98bb59"},{url:"app.webmanifest",revision:"f330fd21e2394b4c0a4e33be0469f22e"},{url:"app~309f7e27.bundle.js",revision:"2a9c34ea8e3b6dd5a4b94ee80cd129df"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~7bd12dde.bundle.js",revision:"2336fb06331bb8aa3ede2d571998e948"},{url:"app~7bd12dde.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"7440295efc5e720cb12f20da717be7ed"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"63a774c5fe76a96a9e3fc2a604a20624"},{url:"app~e4317507.bundle.js",revision:"82d4c494fd5b9ad539296820be62ff1f"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"bd6b63650298f334a08b.jpg",revision:null},{url:"c269844a07ee9f926957.jpg",revision:null},{url:"favicon.png",revision:"157744f9e5668d9729cd2a3a79bc1011"},{url:"icons/icon_x128.png",revision:"27c6f658748d81d82c8204a27503ae70"},{url:"icons/icon_x192.png",revision:"e2593f5e186838467c837d83865ffd8f"},{url:"icons/icon_x384.png",revision:"3b821d15cfb443df6e892a5eb08091eb"},{url:"icons/icon_x434.png",revision:"c8c647079703cb94d8dacec8a0aab502"},{url:"icons/icon_x48.png",revision:"f4bef0845b83e69438fa2eeb4d32666b"},{url:"icons/icon_x72.png",revision:"32f7332830576d04fed2272486f12c1e"},{url:"icons/icon_x96.png",revision:"e9b1dbed53beea8fba18f75a6b701842"},{url:"index.html",revision:"4c4cb7aaf8d89e8b5fd6e1c368c973ee"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restaurants-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/large/")),new e.StaleWhileRevalidate({cacheName:"restaurants-image-api-large",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/small/")),new e.StaleWhileRevalidate({cacheName:"restaurants-image-api-small",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/detail/")),new e.StaleWhileRevalidate({cacheName:"restaurants-detail-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://fonts.googleapis.com/css2?family=Merienda:wght@400;800;900&display=swap")),new e.StaleWhileRevalidate({cacheName:"font-family-merienda",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
