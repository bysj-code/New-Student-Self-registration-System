(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discussjunxunfuzhuang/add-or-update"],{"21cc":function(e,n,t){},"2e68":function(e,n,t){"use strict";(function(e){t("fd65");r(t("66fd"));var n=r(t("44e0"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"376a":function(e,n,t){"use strict";t.r(n);var r=t("997d"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a},"44e0":function(e,n,t){"use strict";t.r(n);var r=t("bdf7"),u=t("376a");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t("f99f");var c,s=t("f0c5"),i=Object(s["a"])(u["default"],r["b"],r["c"],!1,null,"0937ecc2",null,!1,r["a"],c);n["default"]=i.exports},"997d":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,u,a,c){try{var s=e[a](c),i=s.value}catch(o){return void t(o)}s.done?n(i):Promise.resolve(i).then(r,u)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var c=e.apply(n,t);function s(e){a(c,r,u,s,i,"next",e)}function i(e){a(c,r,u,s,i,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("d578"))}.bind(null,t)).catch(t.oe)},i={data:function(){return{cross:"",ruleForm:{refid:"",userid:"",nickname:"",content:"",reply:""},user:{},ro:{refid:!1,userid:!1,nickname:!1,content:!1,reply:!1}}},components:{wPicker:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return c(r.default.mark((function u(){var a,c,s,i;return r.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return a=e.getStorageSync("nowTable"),u.next=3,t.$api.session(a);case 3:if(c=u.sent,t.user=c.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){u.next=13;break}return t.ruleForm.id=n.id,u.next=11,t.$api.info("discussjunxunfuzhuang",t.ruleForm.id);case 11:c=u.sent,t.ruleForm=c.data;case 13:if(t.cross=n.cross,!n.cross){u.next=41;break}s=e.getStorageSync("crossObj"),u.t0=r.default.keys(s);case 17:if((u.t1=u.t0()).done){u.next=41;break}if(i=u.t1.value,"refid"!=i){u.next=23;break}return t.ruleForm.refid=s[i],t.ro.refid=!0,u.abrupt("continue",17);case 23:if("userid"!=i){u.next=27;break}return t.ruleForm.userid=s[i],t.ro.userid=!0,u.abrupt("continue",17);case 27:if("nickname"!=i){u.next=31;break}return t.ruleForm.nickname=s[i],t.ro.nickname=!0,u.abrupt("continue",17);case 31:if("content"!=i){u.next=35;break}return t.ruleForm.content=s[i],t.ro.content=!0,u.abrupt("continue",17);case 35:if("reply"!=i){u.next=39;break}return t.ruleForm.reply=s[i],t.ro.reply=!0,u.abrupt("continue",17);case 39:u.next=17;break;case 41:t.styleChange();case 42:case"end":return u.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return c(r.default.mark((function t(){var u,a,c,s,i,o,f,l,d,m,g,p,b,x;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(u="",a=[],u&&(a=u.split(",")),c=0;c<a.length;c++)s=new RegExp(a[c],"g"),n.ruleForm.content.indexOf(a[c])>-1&&(n.ruleForm.content=n.ruleForm.content.replace(s,"**"));if(n.ruleForm.refid){t.next=7;break}return n.$utils.msg("关联表id不能为空"),t.abrupt("return");case 7:if(n.ruleForm.userid){t.next=10;break}return n.$utils.msg("用户id不能为空"),t.abrupt("return");case 10:if(n.ruleForm.content){t.next=13;break}return n.$utils.msg("评论内容不能为空"),t.abrupt("return");case 13:if(!n.cross){t.next=29;break}if(l=e.getStorageSync("statusColumnName"),d=e.getStorageSync("statusColumnValue"),""==l){t.next=29;break}if(m=e.getStorageSync("crossObj"),l.startsWith("[")){t.next=25;break}for(g in m)g==l&&(m[g]=d);return p=e.getStorageSync("crossTable"),t.next=23,n.$api.update("".concat(p),m);case 23:t.next=29;break;case 25:i=Number(e.getStorageSync("userid")),o=m["id"],f=e.getStorageSync("statusColumnName"),f=f.replace(/\[/,"").replace(/\]/,"");case 29:if(!o||!i){t.next=52;break}return n.ruleForm.crossuserid=i,n.ruleForm.crossrefid=o,b={page:1,limit:10,crossuserid:i,crossrefid:o},t.next=35,n.$api.list("discussjunxunfuzhuang",b);case 35:if(x=t.sent,!(x.data.total>=f)){t.next=41;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 41:if(!n.ruleForm.id){t.next=46;break}return t.next=44,n.$api.update("discussjunxunfuzhuang",n.ruleForm);case 44:t.next=48;break;case 46:return t.next=48,n.$api.add("discussjunxunfuzhuang",n.ruleForm);case 48:e.setStorageSync("discussjunxunfuzhuangCleanType",!0),n.$utils.msgBack("提交成功");case 50:t.next=61;break;case 52:if(!n.ruleForm.id){t.next=57;break}return t.next=55,n.$api.update("discussjunxunfuzhuang",n.ruleForm);case 55:t.next=59;break;case 57:return t.next=59,n.$api.add("discussjunxunfuzhuang",n.ruleForm);case 59:e.setStorageSync("discussjunxunfuzhuangCleanType",!0),n.$utils.msgBack("提交成功");case 61:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,u=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,u=u>9?u:"0"+u,"".concat(t,"-").concat(r,"-").concat(u)},toggleTab:function(e){this.$refs[e].show()}}};n.default=i}).call(this,t("543d")["default"])},bdf7:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=[]},f99f:function(e,n,t){"use strict";var r=t("21cc"),u=t.n(r);u.a}},[["2e68","common/runtime","common/vendor"]]]);