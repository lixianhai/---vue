webpackJsonp([8],{"/h0e":function(t,e){},E6Wv:function(t,e){},HjGy:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},r,!1,function(t){n("O7oV")},null,null).exports,s=n("/ocq"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-wrap"},[e("ul",[e("li",[e("router-link",{staticClass:"logo",attrs:{to:{path:"/"}}})],1),this._v(" "),e("li"),this._v(" "),e("li",[e("router-link",{staticClass:"search",attrs:{to:{path:"/"}}})],1)])])},staticRenderFns:[]};var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"app-main"},[e("transition",[e("keep-alive",[e("router-view")],1)],1)],1)},staticRenderFns:[]},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mt-navbar",{staticClass:"nav-wrap",model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"1"}},[n("router-link",{attrs:{to:{path:"/"}}},[t._v("新歌")])],1),t._v(" "),n("mt-tab-item",{attrs:{id:"2"}},[n("router-link",{attrs:{to:{path:"/rank"}}},[t._v("排行")])],1),t._v(" "),n("mt-tab-item",{attrs:{id:"3"}},[n("router-link",{attrs:{to:{path:"/plist"}}},[t._v("歌单")])],1),t._v(" "),n("mt-tab-item",{attrs:{id:"4"}},[n("router-link",{attrs:{to:{path:"/singer"}}},[t._v("歌手")])],1)],1)},staticRenderFns:[]};var u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"aaaa"},[this._v("\n    plisttitle\n")])},staticRenderFns:[]};var p={components:{Header:n("VU/8")({data:function(){return{}}},l,!1,function(t){n("HjGy")},"data-v-dc2c1202",null).exports,appMain:n("VU/8")(null,o,!1,null,null,null).exports,navBar:n("VU/8")({data:function(){return{selected:"1"}}},c,!1,function(t){n("E6Wv")},"data-v-045ee727",null).exports,plistTitle:n("VU/8")(null,u,!1,function(t){n("Ror6")},"data-v-2a3b56f2",null).exports},watch:{$route:function(t,e){console.log(t.meta.singerTitle||t.meta.plistTitle)}},computed:{isNavBar:function(){return!this.$route.meta.plistTitle&&!this.$route.meta.singerTitle},isPlistTitle:function(){return!(!this.$route.meta.plistTitle||this.$route.meta.singerTitle)}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{overflow:"hidden"}},[e("div",{staticClass:"fixed-header"},[e("Header"),this._v(" "),this.isNavBar?e("navBar"):this._e(),this._v(" "),this.isPlistTitle?e("plistTitle"):this._e()],1),this._v(" "),e("div",{staticClass:"mainApp"},[e("appMain")],1)])},staticRenderFns:[]};var h=n("VU/8")(p,d,!1,function(t){n("/h0e")},"data-v-9f049f66",null).exports;i.default.use(s.a);var f=new s.a({routes:[{path:"/",component:h,redirect:"/",children:[{path:"/",component:function(){return n.e(6).then(n.bind(null,"cBc3"))}}]},{path:"/rank",component:h,redirect:"/rank/list",children:[{path:"list",component:function(){return n.e(3).then(n.bind(null,"X4po"))}},{path:"info",component:function(){return n.e(2).then(n.bind(null,"wcHh"))},meta:{plistTitle:!0}}]},{path:"/plist",component:h,redirect:"/plist/index",children:[{path:"index",component:function(){return n.e(5).then(n.bind(null,"u7Ak"))}},{path:"list",component:function(){return n.e(4).then(n.bind(null,"zElC"))},meta:{plistTitle:!0}}]},{path:"/singer",component:h,redirect:"/singer/index",children:[{path:"index",component:function(){return n.e(1).then(n.bind(null,"k8wy"))}},{path:"list",component:function(){return n.e(0).then(n.bind(null,"97Bd"))},meta:{singerTitle:!0}}]}]}),v=n("Au9i"),m=n.n(v);n("d8/S"),n("dYz3"),n("sVYa");i.default.use(m.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:f,components:{App:a},template:"<App/>"})},O7oV:function(t,e){},Ror6:function(t,e){},"d8/S":function(t,e){},dYz3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fa893699b7c16371e4bc.js.map