(function(){"use strict";var t={1536:function(t,e,n){n.d(e,{j7:function(){return s},_Q:function(){return a},xu:function(){return i}});var o=n(70);o.Z.defaults.baseURL="http://129.211.169.131:5000/",o.Z.defaults.timeout=2e4,o.Z.interceptors.request.use((t=>t),(t=>Promise.reject(t))),o.Z.interceptors.response.use((t=>t),(t=>Promise.reject(t)));var r=o.Z;let i=()=>r({url:"/shop/seller",method:"get"}),s=()=>r({url:"/goods/goods_list",method:"get"}),a=()=>r({url:"/shop/ratings",method:"get"})},8516:function(t,e,n){var o=n(6369),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e("router-view")],1)},i=[],s={},a=s,u=n(1001),c=(0,u.Z)(a,r,i,!1,null,"29960f1f",null),l=c.exports,d=n(2631),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout-box"},[e("div",{staticClass:"layout"},[e("van-overlay",{attrs:{show:t.show},on:{click:function(e){t.show=!1}}},[e("div",{staticClass:"wrapper",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"block"},[e("h1",[t._v(" "+t._s(t.info.name)+" ")]),e("van-rate",{attrs:{size:25,color:"#ffd21e","void-icon":"star","void-color":"#eee"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),e("div",{staticClass:"discount"},[e("van-divider",[t._v("优惠信息")]),t._l(t.info.supports,(function(n,o){return e("div",{key:o},[e("van-tag",{attrs:{type:0==o?t.warning:t.primary}},[t._v(t._s(0==o?"减":"特"))]),t._v(" "+t._s(n)+" ")],1)})),e("div",{staticClass:"notice"},[e("van-divider",[t._v("店家公告")]),e("div",[t._v(" "+t._s(t.info.bulletin)+" ")])],1)],2)],1)])]),e("div",{staticClass:"top",on:{click:function(e){t.show=!0}}},[e("div",{staticClass:"top-avatar",style:{backgroundImage:`url(${t.info.avatar})`}}),e("div",{staticClass:"info"},[e("img",{staticClass:"avatar",attrs:{src:t.info.avatar}}),e("div",{staticClass:"infoBox"},[e("p",{staticStyle:{}},[e("van-tag",{attrs:{type:"danger"}},[t._v("品牌")]),t._v(" "+t._s(t.info.name)+" ")],1),e("p",[t._v(" "+t._s(t.info.description)+" / "+t._s(t.info.deliveryTime)+"分钟送达 ")]),t.info.supports?e("div",[e("van-tag",{attrs:{type:"danger"}},[t._v("减")]),t._l(t.info.supports,(function(n,o){return e("span",{key:o},[t._v(t._s(n)+"  ")])}))],2):t._e()])]),e("van-notice-bar",{attrs:{"left-icon":"volume-o",text:t.info.bulletin}})],1),e("div",{staticClass:"btm"},[e("div",[e("van-tabs",{attrs:{"title-active-color":"gold",color:"gold",swipeable:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("van-tab",{attrs:{title:"商品",to:"/goods"}}),e("van-tab",{attrs:{title:"评价",to:"/ratting"}}),e("van-tab",{attrs:{title:"商家",to:"/shop"}})],1)],1),e("div",{staticClass:"container"},[e("router-view")],1)])],1),e("div",[e("div",{staticClass:"car-bar",on:{click:function(e){t.isShow=!t.isShow}}},[t._m(0),e("div",{staticClass:"car-main"},[e("p",{staticClass:"cartImg",style:{backgroundColor:""+(t.getGoodsNum>0?"#ffc300":"#ccc")}},[e("van-icon",{attrs:{name:"cart",color:"#646464",size:"25px"}}),e("span",{staticClass:"nums"},[t._v(t._s(t.getGoodsNum))])],1),e("div",{staticClass:"price"},[e("p",[t._v("￥"+t._s(t.getGoodsprice))]),e("span",[t._v("另需配送费￥4元 | 支持自取")])])]),e("div",{staticClass:"car-rigth",style:{backgroundColor:""+(t.getGoodsNum>0?"#ffc300":"#ccc")}},[t._v("去结算")])]),e("van-popup",{style:{height:"50%",paddingBottom:"70px"},attrs:{position:"bottom"},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[e("div",{staticClass:"mues"},[e("div",[t._v("购物车")]),e("p",{on:{click:t.handel}},[e("van-icon",{attrs:{name:"delete"}}),t._v(" 清空购物车 ")],1)]),t._l(t.goodsNum,(function(n,o){return e("van-card",{key:o,attrs:{price:n.price,title:n.name,thumb:n.imgUrl},scopedSlots:t._u([{key:"footer",fn:function(){return[e("button",{staticClass:"num",attrs:{type:"button"},on:{click:function(e){return t.add(n.id,-1)}}},[t._v(" - ")]),e("span",[t._v(t._s(n.num))]),e("button",{staticClass:"num",attrs:{type:"button"},on:{click:function(e){return t.add(n.id,1)}}},[t._v(" + ")])]},proxy:!0}],null,!0)})}))],2)],1)])},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact"},[e("img",{attrs:{src:"",alt:""}}),e("p",[t._v("联系商家")])])}],p=n(1536),h={data(){return{warning:"warning",primary:"primary",value:5,active:0,info:{},show:!1,isShow:!1}},created(){switch(this.getShop(),this.$route.path){case"/goods":this.active=0;break;case"/ratting":this.active=1;break;case"/shop":this.active=2;break}},methods:{async getShop(){let t=await(0,p.xu)();this.info=t.data.data,localStorage.setItem("time",JSON.stringify(this.info.deliveryTime))},add(t,e){this.$store.commit("goodsadd",{id:t,val:e})},handel(){this.$dialog.confirm({title:"清空购物车",message:"确认清除购物车吗？"}).then((()=>{this.$store.commit("clare")})).catch((()=>{}))}},computed:{goodsNum(){return this.$store.getters.getGoods},getGoodsNum(){let t=0;for(let e of this.$store.state.list)for(let n of e.foods)n.num>0&&(t+=n.num);return t},getGoodsprice(){let t=0;for(let e of this.$store.state.list)for(let n of e.foods)t+=n.price*n.num;return t.toFixed(2)}}},m=h,g=(0,u.Z)(m,f,v,!1,null,"5b7f768a",null),b=g.exports;o.ZP.use(d.ZP);const y=[{path:"/",component:b,redirect:"/goods",children:[{path:"/goods",component:()=>n.e(645).then(n.bind(n,9645))},{path:"/shop",component:()=>n.e(558).then(n.bind(n,7558))},{path:"/ratting",component:()=>n.e(191).then(n.bind(n,1191))}]},{path:"/details",component:()=>n.e(482).then(n.bind(n,4482))},{path:"*",component:()=>n.e(201).then(n.bind(n,3886))}],_=new d.ZP({routes:y});var C=_,w=(n(541),n(3822));o.ZP.use(w.ZP);var k=new w.ZP.Store({state:{list:[]},getters:{getGoods(t){let e=[];for(let n of t.list)for(let t of n.foods)t.num>0&&e.unshift(t);return e}},mutations:{setList(t,e){t.list=e},goodsadd(t,e){t.list.forEach((t=>{t.foods.forEach((t=>{t.id==e.id&&(t.num+=e.val)}))}))},clare(t){for(let e of t.list)for(let t of e.foods)t.num=0}},actions:{},modules:{}}),Z=n(3710),S=n(9858),x=n(5094),P=n(7330),O=n(2201),j=n(3062),N=n(6940),E=n(4814),T=n(3988),A=n(7004),$=n(2778),G=n(8889),L=n(6811),B=n(5705);n(5110);o.ZP.use(Z.Z).use(S.Z).use(x.Z).use(P.Z).use(O.Z).use(j.Z).use(N.Z).use(E.Z).use(T.Z).use(A.Z).use($.Z).use(G.Z).use(L.Z).use(B.Z),o.ZP.config.productionTip=!1,new o.ZP({router:C,store:k,render:t=>t(l)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var s=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var a=!0,u=0;u<o.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(a=!1,i<s&&(s=i));if(a){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{191:"40912b8a",201:"914325d7",482:"1721ad0a",558:"6611e20e",645:"57c65597"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{191:"fb2bfd76",482:"339bd79b",558:"cbe55333",645:"068b8a53"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="sellapp:";n.l=function(o,r,i,s){if(t[o])t[o].push(r);else{var a,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+i){a=d;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=o),t[o]=[r];var f=function(e,n){a.onerror=a.onload=null,clearTimeout(v);var r=t[o];if(delete t[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t=function(t,e,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var s=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=a,r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=i,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],i=r.getAttribute("data-href");if(i===t||i===e)return r}},o=function(o){return new Promise((function(r,i){var s=n.miniCssF(o),a=n.p+s;if(e(s,a))return r();t(o,a,r,i)}))},r={143:0};n.f.miniCss=function(t,e){var n={191:1,482:1,558:1,645:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var s=n.p+n.u(e),a=new Error,u=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}};n.l(s,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,s=o[0],a=o[1],u=o[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var l=u(n)}for(e&&e(o);c<s.length;c++)i=s[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},o=self["webpackChunksellapp"]=self["webpackChunksellapp"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8516)}));o=n.O(o)})();
//# sourceMappingURL=app.e5d9c70a.js.map