(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e73b48a"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(r(t))}},"38d1":function(t,e,n){},"42de":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-select",{attrs:{placeholder:"请选择",size:t.Size,value:t.value},on:{change:t.checked},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.Options,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)},o=[],i={name:"Select",props:["Options","Value","Size"],computed:{},data:function(){return{value:this.Value}},methods:{checked:function(t){console.log(t),this.$emit("change",t)}}},a=i,c=n("2877"),u=Object(c["a"])(a,r,o,!1,null,"6d22c5a0",null);e["a"]=u.exports},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,i=n("1dde"),a=n("ae40"),c=i("filter"),u=a("filter");r({target:"Array",proto:!0,forced:!c||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"615a":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return window.innerHeight}},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),i=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),a=n("c430"),c=n("83ab"),u=n("4930"),s=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),p=n("861d"),g=n("825a"),h=n("7b0b"),b=n("fc6a"),v=n("c04e"),m=n("5c6c"),y=n("7c73"),w=n("df75"),O=n("241c"),j=n("057f"),S=n("7418"),P=n("06cf"),_=n("9bf2"),k=n("d1e7"),E=n("9112"),x=n("6eeb"),D=n("5692"),I=n("f772"),$=n("d012"),z=n("90e3"),B=n("b622"),N=n("e538"),F=n("746f"),H=n("d44e"),C=n("69f3"),A=n("b727").forEach,T=I("hidden"),G="Symbol",J="prototype",L=B("toPrimitive"),M=C.set,R=C.getterFor(G),V=Object[J],W=o.Symbol,Q=i("JSON","stringify"),U=P.f,Y=_.f,q=j.f,K=k.f,X=D("symbols"),Z=D("op-symbols"),tt=D("string-to-symbol-registry"),et=D("symbol-to-string-registry"),nt=D("wks"),rt=o.QObject,ot=!rt||!rt[J]||!rt[J].findChild,it=c&&f((function(){return 7!=y(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=U(V,e);r&&delete V[e],Y(t,e,n),r&&t!==V&&Y(V,e,r)}:Y,at=function(t,e){var n=X[t]=y(W[J]);return M(n,{type:G,tag:t,description:e}),c||(n.description=e),n},ct=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ut=function(t,e,n){t===V&&ut(Z,e,n),g(t);var r=v(e,!0);return g(n),l(X,r)?(n.enumerable?(l(t,T)&&t[T][r]&&(t[T][r]=!1),n=y(n,{enumerable:m(0,!1)})):(l(t,T)||Y(t,T,m(1,{})),t[T][r]=!0),it(t,r,n)):Y(t,r,n)},st=function(t,e){g(t);var n=b(e),r=w(n).concat(gt(n));return A(r,(function(e){c&&!lt.call(n,e)||ut(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):st(y(t),e)},lt=function(t){var e=v(t,!0),n=K.call(this,e);return!(this===V&&l(X,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(X,e)||l(this,T)&&this[T][e])||n)},dt=function(t,e){var n=b(t),r=v(e,!0);if(n!==V||!l(X,r)||l(Z,r)){var o=U(n,r);return!o||!l(X,r)||l(n,T)&&n[T][r]||(o.enumerable=!0),o}},pt=function(t){var e=q(b(t)),n=[];return A(e,(function(t){l(X,t)||l($,t)||n.push(t)})),n},gt=function(t){var e=t===V,n=q(e?Z:b(t)),r=[];return A(n,(function(t){!l(X,t)||e&&!l(V,t)||r.push(X[t])})),r};if(u||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=z(t),n=function(t){this===V&&n.call(Z,t),l(this,T)&&l(this[T],e)&&(this[T][e]=!1),it(this,e,m(1,t))};return c&&ot&&it(V,e,{configurable:!0,set:n}),at(e,t)},x(W[J],"toString",(function(){return R(this).tag})),x(W,"withoutSetter",(function(t){return at(z(t),t)})),k.f=lt,_.f=ut,P.f=dt,O.f=j.f=pt,S.f=gt,N.f=function(t){return at(B(t),t)},c&&(Y(W[J],"description",{configurable:!0,get:function(){return R(this).description}}),a||x(V,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:W}),A(w(nt),(function(t){F(t)})),r({target:G,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=W(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!c},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:pt,getOwnPropertySymbols:gt}),r({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(h(t))}}),Q){var ht=!u||f((function(){var t=W();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));r({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),o[1]=e,Q.apply(null,o)}})}W[J][L]||E(W[J],L,W[J].valueOf),H(W,G),$[T]=!0},acb6:function(t,e,n){"use strict";var r=n("38d1"),o=n.n(r);o.a},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},b13e:function(t,e,n){t.exports=n.p+"img/background.2b4773a2.jpg"},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),i=n("df75"),a=n("d039"),c=a((function(){i(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(t){return i(o(t))}})},cf05:function(t,e,n){t.exports=n.p+"img/logo.3a1a754d.png"},d504:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{style:t.loginStyle,attrs:{id:"login"}}),n("div",{style:t.transparentDiv,attrs:{id:"transparentDiv"}},[t._m(0),n("div",{attrs:{id:"login_section"}},[n("div",{attrs:{id:"title"}},[n("svg-icon",{staticClass:"logText",attrs:{"icon-class":"CLA_SYSTEM_WHITE"}})],1),n("div",[t._v("Easily handle Contributor License Agreements (CLAs)")]),n("router-view")],1)])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"header"}},[r("div",[r("img",{attrs:{src:n("cf05"),alt:""}})])])}],i=n("5530"),a=n("221d"),c=n("615a"),u=n("42de"),s=n("2f62");window.onresize=function(){console.log(c["a"]()),c["a"]()>document.getElementById("transparentDiv").offsetHeight&&(document.getElementById("login").style.height=c["a"]()+"px",document.getElementById("transparentDiv").style.height=c["a"]()+"px")};var f={name:"Login",components:{Select:u["a"]},data:function(){var t=function(t,e,n){""===e&&n(new Error("please input account number")),n()},e=function(t,e,n){""===e&&n(new Error("please input password")),n()};return{rules:{userName:[{validator:t,trigger:"blur"}],pwd:[{validator:e,trigger:"blur"}]},ruleForm:{userName:"",pwd:""},platform:"",loginUrl:"",value:"0",options:[{value:"0",label:"通过Gitee账号登陆"},{value:"1",label:"通过Github账号登陆"}],loginStyle:{position:"fixed",top:0,left:0,zIndex:-1,height:"",width:"100%",backgroundImage:"url(".concat(n("b13e"),")"),backgroundRepeat:"no-repeat",backgroundSize:"100% auto"},transparentDiv:{background:"rgba(0, 0, 0, .5)",height:""}}},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["setPlatformAct"])),{},{loginByGitee:function(){window.location.href="https://gitee.com/oauth/authorize?client_id=2632e89d3dfb17ce941d2d2b45efc6f235afb4941ddb67578adda83aa33ab6a2&redirect_uri=http://139.159.224.207:60031/api/v1/login?platform=gitee&response_type=code&scope=user_info%20groups%20emails"},loginByGithub:function(){window.location.href="https://github.com/login/oauth/authorize?client_id=d86f4915398dad23bffc&redirect_uri=http://localhost:8080/home&scope=user%20repo%20admin:org"},findPwd:function(){this.$router.push("/findPwd")},login:function(t,e){var n=this;this.$router.push("/rootManager");var r={userName:t,pwd:e};this.$axios({url:"/api"+a["B"],method:"post",data:r}).then((function(t){console.log(t),"root"===t.data.role?n.$router.push("/rootManager"):n.$router.push("/signedRepo")})).catch((function(t){console.log(t)}))},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;e.login(e.ruleForm.userName,e.ruleForm.pwd)}))},resetForm:function(t){console.log("reset"),this.$refs[t].resetFields()},setClientHeight:function(){var t=this;this.$nextTick((function(){console.log(c["a"](),document.getElementById("transparentDiv").offsetHeight),c["a"]()>document.getElementById("transparentDiv").offsetHeight?(t.loginStyle.height=c["a"]()+"px")&&(t.transparentDiv.height=c["a"]()+"px"):t.loginStyle.height=document.getElementById("transparentDiv").offsetHeight+"px"}))},change:function(t){console.log(t),this.value=t},loginIn:function(){switch(console.log(this.value),console.log("loginIn"),this.value){case"0":this.platform="gitee";break;case"1":this.platform="github";break}switch(this.setPlatformAct(this.platform),this.value){case"0":console.log("case0"),window.location.href="https://gitee.com/oauth/authorize?client_id=2632e89d3dfb17ce941d2d2b45efc6f235afb4941ddb67578adda83aa33ab6a2&redirect_uri=http://139.159.224.207:60031/api/v1/login?platform=gitee&response_type=code&scope=user_info%20groups%20emails";break;case"1":console.log("case1"),window.location.href="https://github.com/login/oauth/authorize?client_id=d86f4915398dad23bffc&redirect_uri=http://localhost:8080/home&scope=user,user:email";break;default:console.log("default")}}}),created:function(){},mounted:function(){this.setClientHeight()}},l=f,d=(n("acb6"),n("2877")),p=Object(d["a"])(l,r,o,!1,null,"6fdb544c",null);e["default"]=p.exports},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),i=n("56ef"),a=n("fc6a"),c=n("06cf"),u=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),o=c.f,s=i(r),f={},l=0;while(s.length>l)n=o(r,e=s[l++]),void 0!==n&&u(f,e,n);return f}})},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("fc6a"),a=n("06cf").f,c=n("83ab"),u=o((function(){a(1)})),s=!c||u;r({target:"Object",stat:!0,forced:s,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r}}]);
//# sourceMappingURL=chunk-5e73b48a.1a16efc3.js.map