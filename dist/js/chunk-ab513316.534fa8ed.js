(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab513316"],{"0303":function(e,t,a){},8996:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:e.createCLAClass,attrs:{id:"createCLA"}},[a("v-header"),a("div",{attrs:{id:"section"}},[a("el-col",{attrs:{offset:6,span:12}},[a("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"1rem 0"}},[a("span",[e._v("Edit your CLA")])]),a("div",e._l(e.claTags,(function(t,s){return a("el-tag",{key:t,staticClass:"pointer",attrs:{closable:"","disable-transitions":!1},on:{click:function(t){return e.chooseCla(s)},close:function(a){return e.handleClose(t,s)}}},[e._v(" "+e._s(t)+" ")])})),1),e.addNewFile?a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("el-col",{staticStyle:{"padding-right":"2rem"},attrs:{span:20}},[a("el-input",{staticStyle:{"margin-bottom":"0.5rem"},attrs:{size:"small",placeholder:"please input file name"},model:{value:e.newClaFileName,callback:function(t){e.newClaFileName=t},expression:"newClaFileName"}})],1),a("el-col",{attrs:{span:4,align:"right"}},[a("el-select",{staticStyle:{width:"8rem"},attrs:{size:"small",value:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.languageOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1):a("div",[a("el-button",{staticClass:"pointer",attrs:{size:"mini"},on:{click:function(t){return e.clickAddNewClaFile()}}},[e._v("+ add new file")])],1),a("div",[a("el-input",{staticClass:"textAreaClass",attrs:{rows:"15",readonly:!e.isEdit,type:"textarea"},on:{change:e.claTextChange},model:{value:e.claText,callback:function(t){e.claText=t},expression:"claText"}})],1),a("div",{staticStyle:{"margin-top":"1rem",display:"flex","justify-content":"space-between"}},[a("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{size:"medium",disabled:!e.verifyNotNull(),type:"primary"},on:{click:function(t){return e.uploadCla()}}},[e._v("create CLA ")])],1)])],1),a("v-footer")],1)},n=[],i=(a("99af"),a("4160"),a("c975"),a("a434"),a("b0c0"),a("ac1f"),a("5319"),a("498a"),a("159b"),a("96cf"),a("1da1")),l=a("0418"),o=a("fd2d"),c=a("615a"),r=a("221d"),u={name:"CreateCLA",components:{"v-header":l["a"],"v-footer":o["a"]},data:function(){return{access_token:this.$store.state.access_token,refresh_token:this.$store.state.refresh_token,isAddNewMetaFile:!1,isEditMeta:!1,metaText:"",newMetaFileName:"",metaTags:["test","myMeta","test1","myTest","test2","test3","test4","test5","test6","test7","internationalMetadata","openLooKeng","test8"],newClaFileName:"",addNewFile:!1,isEdit:!1,claTags:[],claOptions:[],metaOptions:[{value:0,text:"{userName:{type:string,require:true},email:{type:string,require:true},}"}],fullscreenLoading:!1,claName:"",value:0,languageOptions:[{value:0,label:"english"},{value:1,label:"chinese"}],claText:"",metaData:"",createCLAClass:{height:""},platform:this.$store.state.platform,user:{userName:this.$store.state.user.userName,userId:this.$store.state.user.userId}}},methods:{clickAddNewClaFile:function(){this.addNewFile=!0,this.claText="",this.isEdit=!0},clickAddNewMetaFile:function(){this.isAddNewMetaFile=!0,this.metaData="",this.isEditMeta=!0},chooseMeta:function(e){console.log("chooseMeta",e),this.metaData=this.metaOptions[0].text,this.isEditMeta=!1,this.isAddNewMetaFile=!1,this.newMetaFileName=""},chooseCla:function(e){console.log("chooseCla",e),this.claText=this.claOptions[e].text,this.isEdit=!1,this.addNewFile=!1,this.newClaFileName=""},handleClose:function(e,t){var a=this,s={id:this.claOptions[t].id};this.$axios({url:"api"+r["a"],method:"delete",params:s,headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(t){console.log(t),a.claTags.splice(a.claTags.indexOf(e),1)})).catch((function(e){console.log(e),a.$message.error("已有绑定关系，无法删除")}))},closeMetaTag:function(e){this.metaTags.splice(this.metaTags.indexOf(e),1)},getCLA:function(){var e=this;console.log("getCLA"),this.$axios({url:"/api"+r["c"],headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(t){console.log(t),t.data.length&&(e.claOptions=[],e.claTags=[],t.data.forEach((function(t,a){e.claTags.push(t.name),e.claOptions.push({value:a,label:t.name,id:t.id,text:t.text,language:t.language})})))})).catch((function(e){console.log(e)}))},claTextChange:function(e){console.log(e)},verifyNotNull:function(){return this.addNewFile?""!==this.newClaFileName.trim()&&""!==this.claText.trim():""!==this.claText.trim()},uploadCla:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.fullscreenLoading=!0,a={name:e.newClaFileName,text:e.claText,language:e.languageOptions[e.value].label,submitter:"".concat(e.platform,"/").concat(e.user.userName)},console.log(a),e.$axios({url:"/api"+r["m"],method:"post",data:a,headers:{"Access-Token":e.access_token,"Refresh-Token":e.refresh_token,User:"".concat(e.platform,"/").concat(e.user.userName)}}).then((function(t){console.log(t),e.fullscreenLoading=!1,e.$message.success("succeed"),setTimeout((function(){e.$router.replace("/home")}),2e3)})).catch((function(t){console.log(t),e.fullscreenLoading=!1,e.$message.error("failed")}));case 4:case"end":return t.stop()}}),t)})))()},setClientHeight:function(){var e=this;this.$nextTick((function(){console.log(c["a"]()),console.log(document.getElementById("createCLA").offsetHeight),c["a"]()>document.getElementById("createCLA").offsetHeight?e.createCLAClass.height=c["a"]()+"px":e.createCLAClass.height=document.getElementById("createCLA").offsetHeight}))},copy:function(){console.log(this.claText),this.init()},init:function(){var e=this.claText.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>").replace(/\s/g," ");console.log(e),this.metaData=e}},created:function(){this.getCLA()},mounted:function(){this.setClientHeight()}};window.onresize=function(){c["a"]()>document.getElementById("createCLA").offsetHeight&&(document.getElementById("createCLA").style.height=c["a"]()+"px")};var d=u,h=(a("d819"),a("2877")),f=Object(h["a"])(d,s,n,!1,null,"69506e1c",null);t["default"]=f.exports},d819:function(e,t,a){"use strict";var s=a("0303"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-ab513316.534fa8ed.js.map