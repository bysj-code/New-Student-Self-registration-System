(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/baodaojiezhan/add-or-update"],{2371:function(e,n,a){"use strict";a.r(n);var t=a("c96b"),r=a("e995");for(var i in r)"default"!==i&&function(e){a.d(n,e,(function(){return r[e]}))}(i);a("6118");var u,o=a("f0c5"),c=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"65ba5ee0",null,!1,t["a"],u);n["default"]=c.exports},"434d":function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(a("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,a,t,r,i,u){try{var o=e[i](u),c=o.value}catch(s){return void a(s)}o.done?n(c):Promise.resolve(c).then(t,r)}function u(e){return function(){var n=this,a=arguments;return new Promise((function(t,r){var u=e.apply(n,a);function o(e){i(u,t,r,o,c,"next",e)}function c(e){i(u,t,r,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("d578"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{cross:"",ruleForm:{zhandianmingcheng:"",tupian:"",lianxidianhua:"",zhandiandizhi:"",baodaoliucheng:""},user:{},ro:{zhandianmingcheng:!1,tupian:!1,lianxidianhua:!1,zhandiandizhi:!1,baodaoliucheng:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return u(t.default.mark((function r(){var i,u,o,c;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=e.getStorageSync("nowTable"),r.next=3,a.$api.session(i);case 3:if(u=r.sent,a.user=u.data,a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=13;break}return a.ruleForm.id=n.id,r.next=11,a.$api.info("baodaojiezhan",a.ruleForm.id);case 11:u=r.sent,a.ruleForm=u.data;case 13:if(a.cross=n.cross,!n.cross){r.next=41;break}o=e.getStorageSync("crossObj"),r.t0=t.default.keys(o);case 17:if((r.t1=r.t0()).done){r.next=41;break}if(c=r.t1.value,"zhandianmingcheng"!=c){r.next=23;break}return a.ruleForm.zhandianmingcheng=o[c],a.ro.zhandianmingcheng=!0,r.abrupt("continue",17);case 23:if("tupian"!=c){r.next=27;break}return a.ruleForm.tupian=o[c],a.ro.tupian=!0,r.abrupt("continue",17);case 27:if("lianxidianhua"!=c){r.next=31;break}return a.ruleForm.lianxidianhua=o[c],a.ro.lianxidianhua=!0,r.abrupt("continue",17);case 31:if("zhandiandizhi"!=c){r.next=35;break}return a.ruleForm.zhandiandizhi=o[c],a.ro.zhandiandizhi=!0,r.abrupt("continue",17);case 35:if("baodaoliucheng"!=c){r.next=39;break}return a.ruleForm.baodaoliucheng=o[c],a.ro.baodaoliucheng=!0,r.abrupt("continue",17);case 39:r.next=17;break;case 41:a.styleChange();case 42:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function a(){var r,i,u,o,c,s,d,l,f,h;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.ruleForm.zhandianmingcheng){a.next=3;break}return n.$utils.msg("站点名称不能为空"),a.abrupt("return");case 3:if(!n.ruleForm.lianxidianhua||n.$validate.isMobile(n.ruleForm.lianxidianhua)){a.next=6;break}return n.$utils.msg("联系电话应输入手机格式"),a.abrupt("return");case 6:if(!n.cross){a.next=22;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){a.next=22;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){a.next=18;break}for(d in s)d==o&&(s[d]=c);return l=e.getStorageSync("crossTable"),a.next=16,n.$api.update("".concat(l),s);case 16:a.next=22;break;case 18:r=Number(e.getStorageSync("userid")),i=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 22:if(!i||!r){a.next=44;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=i,f={page:1,limit:10,crossuserid:r,crossrefid:i},a.next=28,n.$api.list("baodaojiezhan",f);case 28:if(h=a.sent,!(h.data.total>=u)){a.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 34:if(!n.ruleForm.id){a.next=39;break}return a.next=37,n.$api.update("baodaojiezhan",n.ruleForm);case 37:a.next=41;break;case 39:return a.next=41,n.$api.add("baodaojiezhan",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:a.next=52;break;case 44:if(!n.ruleForm.id){a.next=49;break}return a.next=47,n.$api.update("baodaojiezhan",n.ruleForm);case 47:a.next=51;break;case 49:return a.next=51,n.$api.add("baodaojiezhan",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(a,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,a("543d")["default"])},6118:function(e,n,a){"use strict";var t=a("dc6e"),r=a.n(t);r.a},c96b:function(e,n,a){"use strict";var t;a.d(n,"b",(function(){return r})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return t}));var r=function(){var e=this,n=e.$createElement;e._self._c},i=[]},dc6e:function(e,n,a){},e995:function(e,n,a){"use strict";a.r(n);var t=a("434d"),r=a.n(t);for(var i in t)"default"!==i&&function(e){a.d(n,e,(function(){return t[e]}))}(i);n["default"]=r.a},f3b9:function(e,n,a){"use strict";(function(e){a("fd65");t(a("66fd"));var n=t(a("2371"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])}},[["f3b9","common/runtime","common/vendor"]]]);