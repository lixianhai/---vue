webpackJsonp([3],{UNq1:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDQjI2OTUyMDFBMzNFNDExQTVCQ0JCNzczQ0RBQkFGRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGM0FGQ0M4MzA1QzkxMUU1OTYzM0M2M0I5QzUzMjRCRSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGM0FGQ0M4MjA1QzkxMUU1OTYzM0M2M0I5QzUzMjRCRSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDU5MzcwZGYtMWE4My1mNzQ3LWI0ZWMtMWJmMGQzOGM5ZjQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNCMjY5NTIwMUEzM0U0MTFBNUJDQkI3NzNDREFCQUZGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Vj2n1AAAAYNJREFUeNrslj1Lw0AYgNsaChWloFYcOnWrUBWcRRBdFIQODn6u4uQiCM6ugjjp5iZacRKXdBF/gKjgVp2lCopiBxV9Dt7CEZLTi7Y45OAhb+7ryb1N7xJ3XTcWogzDEdzCBNzZDE7EwpUl6IBBmLIdHFbaFhA3VPqrEkkjaST9M2kcFmEduizm7IUNGA/q4BgGL8C2xJMwBE/fCAtwBmlYhj64tllpxjOZ2uCThv5ZOBGhKi3QbZveHTjX7kdgVybzlrQIs1rdHpzapvcZxqAMA1I3DY+efknJQkGr24d5+LSVqvIAox6xOtZetT4r0K7dH8AsfJje3jxsQdEgViu+0OpatVgXlmAmQFgUTz7Ol0OFIAc16JRr0IulPjP6A9pLkn4/YUoeXl1vEiKsN2QMqa7Kii992g4NK6w/cErinO2OVJXf+MpH+P7TSZwQu1hV/j6bUJEd681mAifk9nkPc9Ep8y+ljs8pkWmAp8ckPW5WemtNzu6Lkq6qoFlCWPsSYADX30RQXaffAwAAAABJRU5ErkJggg=="},cBc3:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("eOoE");var s={props:{songInfo:{type:Object,default:function(){}}},mounted:function(){},methods:{}},o={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"goplay-wrap"},[i("router-link",{staticClass:"ft-left",attrs:{to:{path:"/play/info"}}},[i("div",{staticClass:"img-wrap"},[i("img",{attrs:{src:t.songInfo.imgUrl.split("{size}")[0]+"400"+t.songInfo.imgUrl.split("{size}")[1]}})]),t._v(" "),i("div",{staticClass:"center-info"},[i("p",[t._v(t._s(t.songInfo.singerName))]),t._v(" "),i("p",[t._v(t._s(t.songInfo.songName))])])]),t._v(" "),i("div",{staticClass:"ft-right"},[i("svg-icon",{ref:"loading",attrs:{"icon-class":"loading"}}),t._v(" "),i("svg-icon",{attrs:{"icon-class":"nextSong_1"}}),t._v(" "),i("svg-icon",{attrs:{"icon-class":"download"}})],1)],1)},staticRenderFns:[]};var a=i("VU/8")(s,o,!1,function(t){i("xU+l")},"data-v-14bbca79",null).exports,c=i("mtWM"),g=i.n(c),l={components:{goPlay:a},data:function(){return{songData:[],songInfo:{}}},computed:{isGoPlay:function(){return this.$store.state.isGoPlay}},created:function(){this.getNewSongList(),console.log(123),g.a.get("/api/?json=true").then(function(t){console.log(t)})},methods:{getNewSongList:function(){var t,n=this;Object(e.a)({url:"?json=true",methods:"get",data:t}).then(function(t){n.songData=t.data,console.log(t)})},getSongInfo:function(t){var n,i=this,s={cmd:"playInfo",hash:t.hash};(n=s,Object(e.a)({url:"app/i/getSongInfo.php",methods:"get",params:n})).then(function(t){i.songInfo=t,i.$store.dispatch("setGoPlay",!0),i.$store.dispatch("setSongInfo",t)})}}},r={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("div",{staticClass:"swipe-wrap"},[i("mt-swipe",{attrs:{auto:4e3}},[i("mt-swipe-item",[i("img",{attrs:{src:"http://m.kugou.com/v3/static/images/index/banner.jpg"}})]),t._v(" "),i("mt-swipe-item",[i("img",{attrs:{src:"http://imge.kugou.com/mobilebanner/20190731/20190731234643631589.jpg"}})]),t._v(" "),i("mt-swipe-item",[i("img",{attrs:{src:"http://imge.kugou.com/mobilebanner/20190731/20190731234809940554.jpg"}})]),t._v(" "),i("mt-swipe-item",[i("img",{attrs:{src:"http://imge.kugou.com/mobilebanner/20190424/20190424173959270418.jpg"}})]),t._v(" "),i("mt-swipe-item",[i("img",{attrs:{src:"http://imge.kugou.com/mobilebanner/20190731/20190731234904119937.jpg"}})])],1),t._v(" "),i("ul",{staticClass:"song-list-wrap"},t._l(t.songData,function(n){return i("li",{key:n.album_id,on:{click:function(i){return t.getSongInfo(n)}}},[i("div",{staticClass:"singerName"},[i("span",[t._v(t._s(n.filename))])]),t._v(" "),t._m(0,!0)])}),0)],1),t._v(" "),t.isGoPlay?i("goPlay",{attrs:{songInfo:t.songInfo}}):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"icon"},[n("img",{attrs:{src:i("UNq1")}})])}]};var m=i("VU/8")(l,r,!1,function(t){i("dU2U")},"data-v-03c2fd1e",null);n.default=m.exports},dU2U:function(t,n){},"xU+l":function(t,n){}});
//# sourceMappingURL=3.a42455f24f1283f0b5ab.js.map