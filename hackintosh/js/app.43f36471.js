(function(t){function a(a){for(var e,n,r=a[0],l=a[1],o=a[2],h=0,v=[];h<r.length;h++)n=r[h],c[n]&&v.push(c[n][0]),c[n]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);p&&p(a);while(v.length)v.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var t,a=0;a<i.length;a++){for(var s=i[a],e=!0,r=1;r<s.length;r++){var l=s[r];0!==c[l]&&(e=!1)}e&&(i.splice(a--,1),t=n(n.s=s[0]))}return t}var e={},c={app:0},i=[];function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,a,s){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)n.d(s,e,function(a){return t[a]}.bind(null,e));return s},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/hackintosh/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var o=0;o<r.length;o++)a(r[o]);var p=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"00e5":function(t,a,s){t.exports=s.p+"img/freelogo.35069cd1.png"},"1ee6":function(t,a,s){t.exports=s.p+"img/download.67c71770.svg"},"1fc2":function(t,a,s){},"353d":function(t,a,s){"use strict";var e=s("1fc2"),c=s.n(e);c.a},"48ec":function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);s("cadf"),s("551c"),s("097d");var e=s("2b0e"),c=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"sidebar"},[t._m(0),s("div",{staticClass:"sidebar-wapper"},[t._l(t.sidebar,function(a,e){return[s("router-link",{key:e,staticClass:"menu",attrs:{to:a.link,title:a.name}},[s("div",{staticClass:"menu-cursor",domProps:{innerHTML:t._s(a.icon)}}),s("span",[t._v(t._s(a.name))])])]})],2)]),s("router-view",{attrs:{pageData:t.pageData}})],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"logo",attrs:{href:"https://zhih.me",title:"zhih.me"}},[s("img",{attrs:{alt:"logo",src:"//pic.zhih.me/blog/favicon.png"}})])}],n=s("f075"),r={name:"App",data:function(){return{sidebar:n,pageData:[]}},mounted:function(){var t=this,a="/hackintosh/all.json";this.axios.get(a).then(function(a){t.pageData=a.data})}},l=r,o=(s("353d"),s("2877")),p=Object(o["a"])(l,c,i,!1,null,null,null);p.options.__file="App.vue";var h=p.exports,v=s("8c4f"),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-wrapper"},[t._m(0),t._l(t.pageData.Laptop,function(a,c,i){return e("div",{key:i,staticClass:"brand"},[e("div",{staticClass:"brand-name"},[t._v(t._s(c)),e("span",[t._v(t._s(a.length))])]),e("div",{staticClass:"wrapper"},t._l(a,function(a,c){return e("div",{key:c,staticClass:"card shadow"},[e("div",{staticClass:"model"},[t._v(t._s(a.Device))]),e("div",{staticClass:"details"},[e("li",[t._v("CPU："+t._s(a.CPU))]),e("li",[t._v("声卡："+t._s(a.Audio))]),e("li",[t._v("OS：  "+t._s(a.OS))])]),e("div",{staticClass:"card-bottom"},[e("div",{staticClass:"author"},[e("span",[t._v(t._s(a.Author.substr(0,1).toUpperCase()))]),t._v("\n            "+t._s(a.Author)+"\n          ")]),e("a",{staticClass:"get-btn",attrs:{href:a.Link,target:"_blank",title:"get efi"}},[e("img",{attrs:{src:s("1ee6"),alt:"download"}})])])])}))])}),e("Adsense",{attrs:{"root-class":"adswrapper shadow","data-ad-client":"ca-pub-3966799612529953","data-ad-slot":"1519069849"}})],2)},d=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("div",{staticClass:"title"},[t._v("Hackintosh Laptop EFI")]),s("a",{staticClass:"submit",attrs:{href:"https://github.com/xzhih/hackintosh-list"}},[t._v("Submit")])])}],m={name:"Laptop",props:["pageData"]},_=m,f=(s("839c"),Object(o["a"])(_,u,d,!1,null,null,null));f.options.__file="Laptop.vue";var g=f.exports,w=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page-wrapper app-page"},[t._m(0),s("div",{staticClass:"wrapper app-wrapper"},t._l(t.pageData.Freeapp,function(a,e){return s("a",{key:e,staticClass:"app shadow",attrs:{target:"_blank",title:a.description,href:a.link}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.icon,expression:"app.icon"}],staticClass:"app-icon",attrs:{alt:a.name}}),s("div",{staticClass:"app-name"},[t._v(t._s(a.name))]),s("p",{staticClass:"app-des"},[t._v(t._s(a.description))])])})),s("Adsense",{attrs:{"root-class":"adswrapper shadow","data-ad-client":"ca-pub-3966799612529953","data-ad-slot":"1519069849"}})],1)},b=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"t-center"},[e("div",{staticClass:"app-logo"},[e("img",{attrs:{src:s("00e5"),alt:"app"}})]),e("span",{staticClass:"app-title"},[t._v("\n\t\t\t\tmacOS "),e("span",{staticStyle:{color:"#05b65b"}},[t._v("免费")]),t._v("优质 APP\n\t\t\t")])])}],C={name:"Freeapp",props:["pageData"]},k=C,x=(s("efc4"),Object(o["a"])(k,w,b,!1,null,null,null));x.options.__file="Freeapp.vue";var z=x.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-wrapper"},[t._m(0),e("div",{staticClass:"wrapper"},t._l(t.pageData.Desktop,function(a,c,i){return e("div",{key:i,staticClass:"card shadow"},[e("div",{staticClass:"model"},[t._v(t._s(a.Motherboard))]),e("div",{staticClass:"details"},[e("li",[t._v("CPU："+t._s(a.CPU))]),e("li",[t._v("GPU："+t._s(a.Graphics))]),e("li",[t._v("声卡："+t._s(a.Audio))]),e("li",[t._v("网卡："+t._s(a.Network))]),e("li",[t._v("OS：  "+t._s(a.OS))])]),e("div",{staticClass:"card-bottom"},[e("div",{staticClass:"author"},[e("span",[t._v(t._s(a.Author.substr(0,1).toUpperCase()))]),t._v("\n            "+t._s(a.Author)+"\n          ")]),e("a",{staticClass:"get-btn",attrs:{href:a.Link,target:"_blank",title:"get efi"}},[e("img",{attrs:{src:s("1ee6"),alt:"download"}})])])])})),e("Adsense",{attrs:{"root-class":"adswrapper shadow","data-ad-client":"ca-pub-3966799612529953","data-ad-slot":"1519069849"}})],1)},S=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("div",{staticClass:"title"},[t._v("Hackintosh Desktop EFI")]),s("a",{staticClass:"submit",attrs:{href:"https://github.com/xzhih/hackintosh-list"}},[t._v("Submit")])])}],y={name:"Desktop",props:["pageData"]},D=y,A=Object(o["a"])(D,O,S,!1,null,null,null);A.options.__file="Desktop.vue";var j=A.exports,E=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page-wrapper"},[t._m(0),s("div",{staticClass:"wrapper os-wrapper"},t._l(t.pageData.OSimages,function(a,e){return s("a",{key:e,staticClass:"os-card shadow",attrs:{target:"_blank",title:a.OS,href:a.Link}},[s("div",{staticClass:"os-icon"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"10.13"===a.OS.substr(0,5)?"https://pic.zhih.me/hackintosh/OS-images/10.13.png":"https://pic.zhih.me/hackintosh/OS-images/10.14.png",expression:"(os.OS.substr(0, 5) === '10.13') \n\t\t\t\t\t? 'https://pic.zhih.me/hackintosh/OS-images/10.13.png' \n\t\t\t\t\t: 'https://pic.zhih.me/hackintosh/OS-images/10.14.png'"}],attrs:{alt:"os.OS"}})]),s("div",{staticClass:"os-detail"},[s("div",{staticClass:"os-name"},[t._v(t._s(a.OS))]),s("li",[t._v(t._s(a.Version))]),s("li",[t._v(t._s(a.Author))])])])})),s("Adsense",{attrs:{"root-class":"adswrapper shadow","data-ad-client":"ca-pub-3966799612529953","data-ad-slot":"1519069849"}})],1)},$=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("div",{staticClass:"title"},[t._v("macOS")]),s("a",{staticClass:"submit",attrs:{href:"https://github.com/xzhih/hackintosh-list"}},[t._v("Submit")])])}],P={name:"OSimages",props:["pageData"]},L=P,T=Object(o["a"])(L,E,$,!1,null,null,null);T.options.__file="OS-images.vue";var N=T.exports,F=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page-wrapper"},[t._m(0),s("Adsense",{attrs:{"root-class":"adswrapper shadow","data-ad-client":"ca-pub-3966799612529953","data-ad-slot":"1519069849"}}),s("div",{staticClass:"wrapper t-center"},t._l(t.pageData.Theme,function(a,e){return s("a",{key:e,staticClass:"theme-card shadow",attrs:{target:"_blank",title:a.Name,href:a.Link}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.Screenshot,expression:"theme.Screenshot"}],attrs:{alt:a.Name}}),s("span",[t._v(t._s(a.Name))])])}))],1)},U=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("div",{staticClass:"title"},[t._v("Clover Themes")]),s("a",{staticClass:"submit",attrs:{href:"https://github.com/xzhih/hackintosh-list"}},[t._v("Submit")])])}],B={name:"Themes",props:["pageData"]},K=B,M=Object(o["a"])(K,F,U,!1,null,null,null);M.options.__file="Themes.vue";var H=M.exports,I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-wrapper"},[t._m(0),e("div",{staticClass:"kext-wrapper"},[e("table",{staticClass:"kext-table shadow"},[t._l(t.pageData.Kext,function(a,c){return[e("div",{key:c,staticClass:"kext-sort"},[t._v(t._s(c))]),t._l(a,function(a){return e("tr",{key:a.Name},[e("td",[t._v(t._s(a.Name))]),e("td",{staticClass:"kext-des"},[t._v(t._s(a.Description))]),e("td",{staticClass:"get-kext"},[e("a",{attrs:{href:a.Link,target:"_blank",title:"get kext"}},[e("img",{attrs:{src:s("1ee6"),alt:"download"}})])])])})]})],2)]),e("Adsense",{attrs:{"root-class":"adswrapper shadow","data-ad-client":"ca-pub-3966799612529953","data-ad-slot":"1519069849"}})],1)},G=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("div",{staticClass:"title"},[t._v("Kext")]),s("a",{staticClass:"submit",attrs:{href:"https://github.com/xzhih/hackintosh-list"}},[t._v("Submit")])])}],J={name:"Kext",props:["pageData"]},V=J,q=Object(o["a"])(V,I,G,!1,null,null,null);q.options.__file="Kext.vue";var Q=q.exports,R=s("0284"),W=s.n(R);e["a"].use(v["a"]);var X=new v["a"]({base:"/hackintosh/",routes:[{path:"/",name:"Laptop",component:g},{path:"/desktop",name:"Desktop",component:j},{path:"/freeapp",name:"Freeapp",component:z},{path:"/OS-images",name:"OSimages",component:N},{path:"/themes",name:"Themes",component:H},{path:"/kext",name:"Kext",component:Q}]});e["a"].use(W.a,{id:"UA-115909876-1",router:X});var Y=X,Z=s("bc3a"),tt=s.n(Z),at=s("a7fe"),st=s.n(at),et=s("283e"),ct=s.n(et),it=s("d78e"),nt=s.n(it);e["a"].config.productionTip=!1,e["a"].use(st.a,tt.a),e["a"].use(ct.a),e["a"].use(s("395c")),e["a"].use(nt.a.Adsense),e["a"].use(nt.a.InFeedAdsense),new e["a"]({router:Y,render:function(t){return t(h)}}).$mount("#app")},"839c":function(t,a,s){"use strict";var e=s("bf91"),c=s.n(e);c.a},bf91:function(t,a,s){},efc4:function(t,a,s){"use strict";var e=s("48ec"),c=s.n(e);c.a},f075:function(t){t.exports=[{name:"Laptop",icon:"<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'><path d='m126.58688 179.01056h.4096 770.64192c17.87904 0 32.27648 14.39232 32.27648 32.2816v.4096 509.71648c0 17.46432-14.39744 31.872-32.27648 31.872h-.63488-770.41664c-17.88928 0-32.27648-14.40256-32.27648-31.872v-.81408-509.312c0-17.8944 14.38208-32.2816 32.27648-32.2816zm-93.568 665.97888c-17.664 0-31.86176-13.97248-31.86176-31.86688 0-17.47968 14.19264-31.89248 31.86176-31.89248h958.16704c17.87904 0 31.65696 14.40768 31.65696 31.89248 0 17.88928-13.7728 31.86688-31.65696 31.86688zm832.7424-602.24h-707.10784v446.17728h707.10272v-446.17728z'/></svg>",link:"/"},{name:"Desktop",icon:"<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'><path d='m931.9 138.2h-839.8c-13.1 0-28.6 15.6-28.6 28.6l.8 559.5c0 13 15.5 28.6 28.6 28.6h363.1l-16.6 77c-5.6 25.6-29.2 42.5-54.7 40.9-.4 0-.8.1-1.3.1-3.6 0-6.5 2.9-6.5 6.5 0 2.8 1.9 5.2 4.5 6 .3.1.5.2.8.3v.1h259.7v-.1c.3 0 .5-.1.8-.3 2.6-.8 4.6-3.2 4.6-6 0-3.6-2.9-6.5-6.5-6.5-.5 0-.8 0-1.3-.1-25.5 1.6-49.1-15.3-54.7-40.9l-16.7-77h363.8c13.1 0 28.6-15.6 28.6-28.6v-559.4c0-13.1-15.5-28.7-28.6-28.7zm-402.2 576.2c-.6 1.1-1.1 2.2-1.7 3.1-.6 1-1.2 1.8-1.8 2.5s-1.1 1.2-1.4 1.6c-.7.5-1.3 1-2 1.4s-1.3.5-2.1.5c-.5 0-1-.1-1.7-.3s-1.3-.4-2-.6-1.4-.4-2.1-.7c-.7-.2-1.3-.3-1.9-.3s-1.3.1-2 .3-1.5.4-2.2.7c-.7.2-1.4.4-2 .7-.6.2-1.2.3-1.6.3-.6 0-1.1-.1-1.6-.3s-1.1-.5-1.7-1-1.2-1.1-1.8-1.9c-.7-.8-1.4-1.7-2.2-2.9-.7-1.1-1.4-2.3-2-3.5-.6-1.3-1.1-2.6-1.6-4-.4-1.4-.8-2.7-1-4.2-.2-1.4-.4-2.7-.4-4.1 0-2 .3-3.9.9-5.7.6-1.7 1.5-3.3 2.5-4.5 1.1-1.3 2.3-2.3 3.7-3s2.9-1 4.6-1c1.2 0 2.7.4 4.3 1 1.6.7 2.8 1.1 3.4 1.1.2 0 .6-.1 1.2-.3s1.5-.5 2.6-.9 1.9-.6 2.6-.8c.7-.1 1.3-.2 2-.2 1.9 0 3.6.4 5.2 1.3s3 2 3.9 3.5c-1.8 1.1-3.1 2.3-3.9 3.8s-1.2 3.3-1.2 5.2c0 2.1.5 4 1.7 5.8 1.1 1.7 2.7 3.1 4.6 3.9-.3 1.1-.8 2.3-1.3 3.5zm-17.8-28.5c0-1.2.3-2.3.8-3.5s1.2-2.3 2.1-3.2c.8-.9 1.8-1.7 3-2.3 1.1-.6 2.3-.9 3.6-1 .1.2.1.3.1.5v.5c0 1.2-.3 2.4-.8 3.6s-1.1 2.3-2 3.3c-.8 1-1.8 1.8-2.8 2.3-1 .6-2.1.9-3.2.9-.4 0-.7-.1-.7-.3-.1-.2-.1-.5-.1-.8zm411.2-43.1h-822.2v-467.2h822.3v467.2z'/></svg>",link:"/desktop"},{name:"Themes",icon:"<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'><path d='m511.6 112.5c-291.8 0-399.7 255-399.7 398s103.8 400.6 391.3 400.6c0 0 71.4 1.3 71.4-63.2 0-64.4-32.1-43.8-32.1-90.1 0-46.4 32.1-67 47.5-67s117 7.7 173.6-14.3c56.5-21.7 147.7-91.3 147.7-209.8 0-104.3-107.9-354.2-399.7-354.2zm-243.7 399.4c-18.4 0-36.1-7.3-49.2-20.4-13-13.1-20.3-30.8-20.3-49.2-.7-25.3 12.3-48.9 34.1-61.8s48.8-12.9 70.6 0 34.8 36.5 34.1 61.8c.2 38.3-30.9 69.5-69.3 69.6zm130.9-172.2c-18.4 0-36.1-7.3-49.1-20.4-13-13-20.3-30.7-20.3-49.2 0-38.3 31.1-69.4 69.4-69.4s69.4 31.1 69.4 69.4c.1 38.5-31 69.6-69.4 69.6zm222.6 0c-38.3 0-69.4-31.1-69.4-69.6-.7-25.3 12.3-48.9 34.1-61.8a69.7 69.7 0 0 1 70.6 0c21.8 12.9 34.8 36.5 34.1 61.8.1 38.5-31 69.6-69.4 69.6zm132.2 172.2c-38.3 0-69.4-31.1-69.4-69.6-.7-25.3 12.3-48.9 34.1-61.8s48.8-12.9 70.6 0 34.8 36.5 34.1 61.8c.1 18.4-7.2 36.1-20.2 49.2-13.1 13-30.7 20.4-49.2 20.4zm0 0'/></svg>",link:"/themes"},{name:"Kext",icon:"<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'><path d='m864 144h-304c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16v-304c0-8.8-7.2-16-16-16zm0 400h-304c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16v-304c0-8.8-7.2-16-16-16zm-400-400h-304c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16v-304c0-8.8-7.2-16-16-16zm0 400h-304c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16v-304c0-8.8-7.2-16-16-16z'/></svg>",link:"/kext"},{name:"FreeApp",icon:"<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'><path d='m510.381 32c-264.202 0-478.381 214.179-478.381 478.381s214.179 478.381 478.381 478.381c264.204 0 478.381-214.179 478.381-478.381s-214.178-478.381-478.381-478.381zm-349.195 528.028c-9.154 0-16.625-7.209-16.625-16.085v-96.515c0-8.842 7.471-16.073 16.625-16.073h175.439l-76.384 128.673zm108.349 181.54-55.993 36.875c-7.53 4.987-12.86 1.823-11.816-6.962l7.471-63.096c1.042-8.782 8.372-12.379 16.301-7.981l43.33 24.063c7.914 4.416 8.238 12.149.707 17.101zm13.443-35.558-43.33-24.066c-7.922-4.413-10.716-14.278-6.103-21.947l200.638-338.097c4.551-7.685 14.815-10.381 22.729-5.926l43.33 24.015c7.925 4.449 10.654 14.323 6.109 21.981l-200.641 338.125c-4.548 7.673-14.815 10.299-22.732 5.915zm152.708-145.982 76.378-128.673h43.98l62.029 128.673zm248.772 38.4c-17.348-8.411-103.738-201.322-125.873-251.656-22.155-50.332-89.063-184.314-67.423-194.729 15.401-7.482 70.668 98.023 112.104 161.355 41.377 63.34 127.902 226.657 138.547 245.257 10.595 18.643-10.193 34.187-21.749 38.833-11.569 4.659-18.272 9.292-35.606.939zm56.769 88.672-26.106-39.911c-5.397-8.29-2.594-18.539 6.16-22.923l24.881-12.382c8.774-4.333 19.754-.83 24.42 7.859l20.596 38.324c4.683 8.676 1.492 19.805-6.956 24.696l-17.793 10.294c-8.445 4.971-19.806 2.272-25.203-5.957zm96.065 104.681c-5.453-16.904-47.09-18.029-65.732-43.496-18.705-25.373-3.248-38.451 3.247-44.483 75.612-41.212 62.484 87.98 62.484 87.98zm22.287-231.753h-87.819c-.968-4.956-2.541-9.925-5.192-14.571-2.288-3.965-8.065-14.633-16.116-29.53-11.622-21.479-28.317-52.211-46.186-84.572h155.305c9.154 0 16.622 7.232 16.622 16.079v96.509h.008c-.001 8.875-7.469 16.085-16.623 16.085z'/></svg>",link:"/freeapp"},{name:"macOS",icon:"<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'><path d='m557.1 361.3v-7.4l-22.9 1.6c-6.5.4-11.4 1.8-14.7 4.1-3.3 2.4-4.9 5.6-4.9 9.8 0 4.1 1.6 7.3 4.9 9.7 3.2 2.4 7.6 3.6 13 3.6 3.5 0 6.7-.5 9.7-1.6s5.6-2.5 7.8-4.4 3.9-4.1 5.2-6.7c1.3-2.7 1.9-5.6 1.9-8.7zm-45.1-297.1c-249.9 0-447.8 197.9-447.8 447.8s197.9 447.8 447.8 447.8 447.8-197.9 447.8-447.8-197.9-447.8-447.8-447.8zm86.9 265.4c2.1-5.9 5.1-11 9-15.3 3.9-4.2 8.5-7.5 13.9-9.8s11.5-3.4 18.2-3.4c6 0 11.5.9 16.3 2.7 4.9 1.8 9 4.2 12.5 7.3 3.5 3 6.2 6.6 8.3 10.6 2 4.1 3.2 8.4 3.6 12.9h-18c-.5-2.5-1.3-4.8-2.4-6.9-1.2-2.1-2.7-4-4.6-5.6s-4.2-2.8-6.7-3.7c-2.6-.9-5.5-1.3-8.7-1.3-3.8 0-7.3.8-10.4 2.3s-5.8 3.7-8 6.5-3.9 6.2-5.1 10.3c-1.2 4-1.8 8.5-1.8 13.4 0 5.1.6 9.7 1.8 13.7s2.9 7.4 5.2 10.2c2.2 2.8 4.9 4.9 8.1 6.4 3.1 1.5 6.6 2.2 10.3 2.2 6.2 0 11.2-1.4 15-4.3 3.9-2.9 6.4-7.1 7.6-12.7h18c-.5 4.9-1.9 9.4-4.1 13.5s-5.1 7.5-8.5 10.4c-3.5 2.9-7.6 5.1-12.4 6.6-4.7 1.6-10 2.4-15.6 2.4-6.7 0-12.8-1.1-18.3-3.3-5.4-2.2-10.1-5.4-14-9.6s-6.9-9.2-9-15.2-3.2-12.7-3.2-20.2c-.1-7.5.9-14.1 3-20.1zm-255.8-27.2h18v16h.3c1.1-2.7 2.5-5.1 4.3-7.1 1.8-2.1 3.8-3.9 6.1-5.4s4.9-2.6 7.6-3.4c2.8-.8 5.7-1.2 8.8-1.2 6.6 0 12.2 1.6 16.7 4.7 4.6 3.2 7.8 7.7 9.7 13.6h.5c1.2-2.8 2.8-5.4 4.8-7.6s4.2-4.2 6.8-5.8c2.5-1.6 5.4-2.8 8.4-3.6s6.2-1.3 9.6-1.3c4.6 0 8.8.7 12.6 2.2s7 3.6 9.7 6.3 4.8 6 6.2 9.8 2.2 8.1 2.2 12.8v64.3h-18.8v-59.7c0-6.2-1.6-11-4.8-14.4s-7.7-5.1-13.6-5.1c-2.9 0-5.5.5-8 1.5-2.4 1-4.5 2.4-6.2 4.3-1.7 1.8-3.1 4-4.1 6.6-1 2.5-1.5 5.3-1.5 8.4v58.6h-18.4v-61.4c0-2.7-.4-5.2-1.3-7.4-.8-2.2-2-4.1-3.6-5.7s-3.5-2.8-5.7-3.6-4.7-1.3-7.5-1.3c-2.9 0-5.6.5-8.1 1.6s-4.6 2.6-6.3 4.5c-1.8 1.9-3.2 4.2-4.1 6.8s-2.5 5.4-2.5 8.5v57.9h-17.8zm40.9 451.9c-82.6 0-134.3-57.4-134.3-148.9s51.7-149.1 134.3-149.1 134.1 57.6 134.1 149.1-51.6 148.9-134.1 148.9zm152.8-357.7c-3 .8-6.2 1.2-9.3 1.2-4.7 0-9-.7-12.9-2s-7.3-3.2-10.1-5.7c-2.8-2.4-5-5.4-6.6-8.8-1.6-3.5-2.4-7.3-2.4-11.5 0-8.3 3.1-14.8 9.3-19.4 6.2-4.7 15.1-7.4 26.8-8.1l25.5-1.5v-7.3c0-5.4-1.7-9.6-5.2-12.4s-8.3-4.3-14.7-4.3c-2.5 0-4.9.3-7.1.9s-4.1 1.6-5.8 2.7c-1.7 1.2-3.1 2.6-4.2 4.3-1.1 1.6-1.9 3.5-2.3 5.5h-17.7c.1-4.2 1.1-8 3.1-11.6s4.6-6.6 7.9-9.2 7.3-4.6 11.8-6.1c4.5-1.4 9.5-2.2 14.8-2.2 5.7 0 10.9.7 15.6 2.2s8.7 3.5 12 6.2 5.8 5.9 7.6 9.7 2.7 8.1 2.7 12.7v64.8h-18v-15.7h-.5c-1.3 2.5-3 4.9-5.1 6.9-2.1 2.1-4.4 3.8-6.9 5.3-2.4 1.5-5.2 2.6-8.3 3.4zm118.8 357.7c-63 0-105.8-33-108.7-84.8h41c3.2 29.6 31.8 49.2 71 49.2 37.6 0 64.6-19.6 64.6-46.4 0-23.2-16.4-37.2-54.4-46.8l-37-9.2c-53.2-13.2-77.4-37.4-77.4-77.2 0-49 42.8-83 103.7-83 59.6 0 101.1 34.2 102.7 83.4h-40.6c-2.8-29.6-27-47.8-63-47.8-35.8 0-60.6 18.4-60.6 45 0 21 15.6 33.4 53.6 43l31.2 7.8c59.4 14.4 83.8 37.8 83.8 79.8 0 53.6-42.3 87-109.9 87zm-271.6-261.3c-56.6 0-91.9 43.4-91.9 112.3 0 68.8 35.4 112.1 91.9 112.1 56.4 0 91.9-43.4 91.9-112.1 0-68.9-35.6-112.3-91.9-112.3z'/></svg>",link:"/OS-images"}]}});
//# sourceMappingURL=app.43f36471.js.map