(function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-43bf4437":"43a96aa0","chunk-5bf59160":"eca2ee45"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-43bf4437":1,"chunk-5bf59160":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-43bf4437":"7cc08672","chunk-5bf59160":"e1077a28"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"09d3":function(t,e,n){},"35e1":function(t,e,n){"use strict";n("fb2e")},"530f":function(t,e,n){"use strict";n("9318")},6022:function(t,e,n){},"632d":function(t,e,n){},6571:function(t,e,n){"use strict";n("632d")},"714b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v(" default header ")]}))],2),n("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v(" default body ")]}))],2),n("div",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t._v(" default footer "),n("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[t._v(" OK ")])]}))],2)])])])])},a=[],o=n("2b0e"),i=o["a"].extend({}),s=i,u=(n("ad01"),n("2877")),c=Object(u["a"])(s,r,a,!1,null,"44b6d69c",null);e["a"]=c.exports},"85ec":function(t,e,n){},9198:function(t,e,n){"use strict";n("6022")},9318:function(t,e,n){},ad01:function(t,e,n){"use strict";n("09d3")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("div",{staticClass:"view-container"},[n("router-view")],1),t.loading?n("div",{staticClass:"spinner-wrapper"},[n("RingLoader",{attrs:{loading:t.loading,color:t.color}})],1):t._e()],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[t._v("Vrello")])],1),t.isAuth?n("a",{staticClass:"auth-btn",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.logout.apply(null,arguments)}}},[t._v("Logout")]):n("router-link",{staticClass:"auth-btn",attrs:{to:"/login"}},[t._v("Login")])],1)])},s=[],u=r["a"].extend({computed:{navColor:function(){return this.$store.state.navColor},bodyColor:function(){return this.$store.state.bodyColor},isAuth:function(){return this.$store.getters.isAuth}},watch:{bodyColor:function(){return this.updateTheme()}},methods:{logout:function(){this.$store.commit("LOGOUT"),this.$store.commit("SET_THEME"),this.$router.push("/login")},updateTheme:function(){var t=document.querySelector(".nav-bar"),e=document.querySelector("body");t.style.backgroundColor=this.navColor,e.style.backgroundColor=this.bodyColor}},mounted:function(){this.updateTheme()}}),c=u,l=(n("9198"),n("2877")),d=Object(l["a"])(c,i,s,!1,null,"d651bfd2",null),p=d.exports,f=n("c0e3"),m=new r["a"],h=r["a"].extend({name:"App",components:{NavBar:p,RingLoader:f["a"]},data:function(){return{loading:!1,color:"#0079BF"}},methods:{startSpinner:function(){this.loading=!0},stopSpinner:function(){this.loading=!1}},created:function(){m.$on("spinner:start",this.startSpinner),m.$on("spinner:stop",this.stopSpinner)},beforeDestroy:function(){m.$off("spinner:start"),m.$off("spinner:stop")}}),b=h,v=(n("034f"),Object(l["a"])(b,a,o,!1,null,null,null)),g=v.exports,_=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),E=n("2f62"),O={token:"",boards:[],board:{},card:{},navColor:"#026aa7",bodyColor:"#ffffff"},w={isAuth:function(t){return!!t.token}},C=n("bc3a"),y=n.n(C),T="https://vue-trello-server.herokuapp.com",x=function(t,e,n){return y()({method:t,url:T+e,data:n}).then((function(t){return t.data})).catch((function(t){throw t.response}))},R=function(t){y.a.defaults.headers.common["Authorization"]=t?"Bearer ".concat(t):""},A={login:function(t){return x("post","/login",t)}},k={fetch:function(t){return x("get",t?"/boards/".concat(t):"/boards")},create:function(t){return x("post","/boards",t)},update:function(t){var e=t.bid,n=t.data;return x("put","/boards/".concat(e),n)},delete:function(t){return x("delete","/boards/".concat(t))}},$={create:function(t){return x("post","/lists",t)},update:function(t){var e=t.lid,n=t.data;return x("put","/lists/".concat(e),n)},delete:function(t){return x("delete","/lists/".concat(t))}},j={fetch:function(t){return x("get","/cards/".concat(t))},create:function(t){return x("post","/cards",t)},update:function(t){var e=t.cid,n=t.data;return x("put","/cards/".concat(e),n)},delete:function(t){return x("delete","/cards/".concat(t))}},S={LOGIN:function(t,e){e&&(t.token=e,localStorage.setItem("token",e),R(e))},LOGOUT:function(t){t.token="",localStorage.removeItem("token"),R("")},SET_BOARDS:function(t,e){t.boards=e},SET_BOARD:function(t,e){t.board=e},SET_CARD:function(t,e){t.card=e},SET_THEME:function(t,e){t.navColor=e?"rgba(0, 0, 0, .15)":"#026aa7",t.bodyColor=e||"#ffffff"}},D=n("1da1"),B=(n("96cf"),{LOGIN:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,m.$emit("spinner:start"),n.next=4,A.login(e);case 4:return a=n.sent,r("LOGIN",a.accessToken),m.$emit("spinner:stop"),n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))()},FETCH_BOARDS:function(t){return Object(D["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,m.$emit("spinner:start"),e.next=4,k.fetch();case 4:return r=e.sent,n("SET_BOARDS",r.list),m.$emit("spinner:stop"),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))()},FETCH_BOARD:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,m.$emit("spinner:start"),n.next=4,k.fetch(e);case 4:return a=n.sent,r("SET_BOARD",a.item),m.$emit("spinner:stop"),n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))()},CREATE_BOARD:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.dispatch,m.$emit("spinner:start"),n.next=4,k.create(e);case 4:return a=n.sent,n.next=7,r("FETCH_BOARDS");case 7:return m.$emit("spinner:stop"),n.abrupt("return",a);case 9:case"end":return n.stop()}}),n)})))()},UPDATE_BOARD:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,a=t.dispatch,o=e.bid,i=e.data,m.$emit("spinner:start"),n.next=5,k.update({bid:o,data:i});case 5:return s=n.sent,n.next=8,a("FETCH_BOARD",r.board.id);case 8:return m.$emit("spinner:stop"),n.abrupt("return",s);case 10:case"end":return n.stop()}}),n)})))()},DELETE_BOARD:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.dispatch,m.$emit("spinner:start"),n.next=4,k.delete(e);case 4:return a=n.sent,n.next=7,r("FETCH_BOARDS");case 7:return m.$emit("spinner:stop"),n.abrupt("return",a);case 9:case"end":return n.stop()}}),n)})))()},CREATE_LIST:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,a=t.dispatch,m.$emit("spinner:start"),n.next=4,$.create(e);case 4:return o=n.sent,n.next=7,a("FETCH_BOARD",r.board.id);case 7:return m.$emit("spinner:stop"),n.abrupt("return",o);case 9:case"end":return n.stop()}}),n)})))()},UPDATE_LIST:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,a=t.dispatch,o=e.lid,i=e.data,m.$emit("spinner:start"),n.next=5,$.update({lid:o,data:i});case 5:return s=n.sent,n.next=8,a("FETCH_BOARD",r.board.id);case 8:return m.$emit("spinner:stop"),n.abrupt("return",s);case 10:case"end":return n.stop()}}),n)})))()},DELETE_LIST:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,a=t.dispatch,m.$emit("spinner:start"),n.next=4,$.delete(e);case 4:return o=n.sent,n.next=7,a("FETCH_BOARD",r.board.id);case 7:return m.$emit("spinner:stop"),n.abrupt("return",o);case 9:case"end":return n.stop()}}),n)})))()},FETCH_CARD:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,m.$emit("spinner:start"),n.next=4,j.fetch(e);case 4:return a=n.sent,r("SET_CARD",a.item),m.$emit("spinner:stop"),n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))()},CREATE_CARD:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,a=t.dispatch,m.$emit("spinner:start"),n.next=4,j.create(e);case 4:return o=n.sent,n.next=7,a("FETCH_BOARD",r.board.id);case 7:return m.$emit("spinner:stop"),n.abrupt("return",o);case 9:case"end":return n.stop()}}),n)})))()},UPDATE_CARD:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,a=t.dispatch,o=e.cid,i=e.data,m.$emit("spinner:start"),n.next=5,j.update({cid:o,data:i});case 5:return s=n.sent,n.next=8,a("FETCH_BOARD",r.board.id);case 8:return m.$emit("spinner:stop"),n.abrupt("return",s);case 10:case"end":return n.stop()}}),n)})))()},DELETE_CARD:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,a=t.dispatch,m.$emit("spinner:start"),n.next=4,j.delete(e);case 4:return o=n.sent,n.next=7,a("FETCH_BOARD",r.board.id);case 7:return m.$emit("spinner:stop"),n.abrupt("return",o);case 9:case"end":return n.stop()}}),n)})))()}});r["a"].use(E["a"]);var P=new E["a"].Store({state:O,getters:w,mutations:S,actions:B}),L=localStorage,H=L.token;P.commit("LOGIN",H);var F=P,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"board-list"},[t._l(t.boards,(function(e){return n("li",{key:e.id,staticClass:"board-item"},[n("router-link",{style:"background-color: "+e.bgColor,attrs:{to:"/b/"+e.id}},[t._v(t._s(e.title))])],1)})),n("li",{staticClass:"board-item add-board"},[n("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.onAddBoard.apply(null,arguments)}}},[t._v("Add Board...")])])],2)]),t.isAddBoard?n("AddBoard",{on:{"@close":function(e){t.isAddBoard=!1}}}):t._e()],1)},I=[],M=n("5530"),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",[n("div",{staticClass:"modal-header",attrs:{slot:"header"},slot:"header"},[n("p",[t._v("Add board...")]),n("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.close.apply(null,arguments)}}},[t._v("×")])]),n("div",{staticClass:"modal-body",attrs:{slot:"body"},slot:"body"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputTitle,expression:"inputTitle"}],ref:"inputTitle",attrs:{type:"text",placeholder:"Board title"},domProps:{value:t.inputTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit.apply(null,arguments)},input:function(e){e.target.composing||(t.inputTitle=e.target.value)}}})]),n("div",{staticClass:"modal-footer",attrs:{slot:"footer"},slot:"footer"},[n("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._v("Add")])])])},U=[],q=(n("498a"),n("714b")),J=r["a"].extend({components:{Modal:q["a"]},data:function(){return{inputTitle:""}},methods:Object(M["a"])(Object(M["a"])({},Object(E["b"])(["CREATE_BOARD"])),{},{close:function(){this.$emit("@close")},onSubmit:function(){var t=this,e=this.inputTitle.trim();""!==e&&this.CREATE_BOARD({title:e}).then((function(e){return t.$router.push("/b/".concat(e.item.id))}))}}),mounted:function(){var t=this.$refs.inputTitle;t.focus()}}),K=J,V=(n("530f"),Object(l["a"])(K,G,U,!1,null,"5b34b530",null)),z=V.exports,Q=r["a"].extend({components:{AddBoard:z},data:function(){return{isAddBoard:!1}},computed:Object(M["a"])({},Object(E["d"])(["boards"])),methods:Object(M["a"])(Object(M["a"])(Object(M["a"])({},Object(E["c"])(["SET_THEME"])),Object(E["b"])(["FETCH_BOARDS"])),{},{onAddBoard:function(){this.isAddBoard=!0}}),created:function(){this.FETCH_BOARDS(),this.SET_THEME()}}),W=Q,X=(n("6571"),Object(l["a"])(W,N,I,!1,null,"465c4ddc",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("404 | Page Not Found")])},tt=[],et=r["a"].extend({}),nt=et,rt=Object(l["a"])(nt,Z,tt,!1,null,null,null),at=rt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-page"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"title"},[t._v("Log in to Vrello")]),n("form",{staticClass:"login-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("div",{staticClass:"input-wrapper"},[n("label",{attrs:{for:""}},[t._v("E-mail")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputEmail,expression:"inputEmail"}],attrs:{type:"text",placeholder:"test@test.com"},domProps:{value:t.inputEmail},on:{input:function(e){e.target.composing||(t.inputEmail=e.target.value)}}})]),n("div",{staticClass:"input-wrapper"},[n("label",{attrs:{for:""}},[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputPassword,expression:"inputPassword"}],attrs:{type:"password",placeholder:"123123",autocomplete:"off"},domProps:{value:t.inputPassword},on:{input:function(e){e.target.composing||(t.inputPassword=e.target.value)}}})]),n("p",{staticClass:"error-msg"},[t._v(t._s(t.error))]),n("button",{staticClass:"submit-btn",attrs:{type:"submit"}},[t._v("Login")])])])])},it=[],st=r["a"].extend({data:function(){return{inputEmail:"",inputPassword:"",rPath:"",error:""}},methods:Object(M["a"])(Object(M["a"])({},Object(E["b"])(["LOGIN"])),{},{onSubmit:function(){var t=this;this.LOGIN({email:this.inputEmail,password:this.inputPassword}).then((function(){return t.$router.push(t.rPath)})).catch((function(e){t.error=e.data.error,m.$emit("spinner:stop")}))}}),created:function(){var t=this.$route.query.rPath;this.rPath=t||"/"}}),ut=st,ct=(n("35e1"),Object(l["a"])(ut,ot,it,!1,null,"414de37d",null)),lt=ct.exports;r["a"].use(_["a"]);var dt=function(t,e,n){var r="/login?rPath=".concat(encodeURIComponent(t.path));F.getters.isAuth?n():n(r)},pt=[{path:"/",beforeEnter:dt,component:Y},{path:"/login",component:lt},{path:"/b/:bid",beforeEnter:dt,component:function(){return n.e("chunk-5bf59160").then(n.bind(null,"5d6d"))},children:[{path:"c/:cid",component:function(){return n.e("chunk-43bf4437").then(n.bind(null,"7cd5"))}}]},{path:"*",component:at}],ft=new _["a"]({mode:"history",routes:pt}),mt=ft;r["a"].config.productionTip=!1,new r["a"]({router:mt,store:F,render:function(t){return t(g)}}).$mount("#app")},fb2e:function(t,e,n){}});
//# sourceMappingURL=app.b36a8e40.js.map