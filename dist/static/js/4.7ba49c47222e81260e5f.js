webpackJsonp([4],{YnBc:function(t,e){},k8wy:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("eOoE");var a={data:function(){return{singerListData:[]}},created:function(){this.getSingList()},methods:{getSingList:function(){var t,e=this;(t={specialid:125032},Object(s.a)({url:"singer/class&json=true",methods:"get",data:t})).then(function(t){console.log("歌手list",t),e.singerListData=t.list})}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"content-wrap"},t._l(t.singerListData,function(e){return s("li",{key:e.classid,staticClass:"singer-list-wra"},[s("router-link",{attrs:{to:{path:""}}},[s("img",{attrs:{src:n("WCpZ")}}),t._v("\n            "+t._s(e.classname)+"\n        ")])],1)}),0)},staticRenderFns:[]};var r=n("VU/8")(a,i,!1,function(t){n("YnBc")},"data-v-7f0731e9",null);e.default=r.exports}});
//# sourceMappingURL=4.7ba49c47222e81260e5f.js.map