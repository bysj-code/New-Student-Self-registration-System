(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zaixianzixun/add-or-update"],{"5f50":function(e,n,t){"use strict";var r=t("d185"),a=t.n(r);a.a},"9c7a":function(e,n,t){"use strict";(function(e){t("fd65");r(t("66fd"));var n=r(t("9e71"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"9e71":function(e,n,t){"use strict";t.r(n);var r=t("ab1c"),a=t("b5c4");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("5f50");var u,o=t("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"477e3988",null,!1,r["a"],u);n["default"]=c.exports},ab1c:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"d578"))}},a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},b5c4:function(e,n,t){"use strict";t.r(n);var r=t("b69c"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},b69c:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,u){try{var o=e[i](u),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function o(e){i(u,r,a,o,c,"next",e)}function c(e){i(u,r,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("d578"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{cross:"",ruleForm:{zhanghao:"",xingming:"",tupian:"",zixunneirong:"",zixunshijian:"",xuehao:"",xueshengxingming:""},user:{},ro:{zhanghao:!1,xingming:!1,tupian:!1,zixunneirong:!1,zixunshijian:!1,xuehao:!1,xueshengxingming:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return u(r.default.mark((function a(){var i,u,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.ruleForm.zixunshijian=t.$utils.getCurDateTime(),i=e.getStorageSync("nowTable"),a.next=4,t.$api.session(i);case 4:if(u=a.sent,t.user=u.data,t.ruleForm.xuehao=t.user.xuehao,t.ro.xuehao=!0,t.ruleForm.xueshengxingming=t.user.xueshengxingming,t.ro.xueshengxingming=!0,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=18;break}return t.ruleForm.id=n.id,a.next=16,t.$api.info("zaixianzixun",t.ruleForm.id);case 16:u=a.sent,t.ruleForm=u.data;case 18:if(t.cross=n.cross,!n.cross){a.next=54;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 22:if((a.t1=a.t0()).done){a.next=54;break}if(c=a.t1.value,"zhanghao"!=c){a.next=28;break}return t.ruleForm.zhanghao=o[c],t.ro.zhanghao=!0,a.abrupt("continue",22);case 28:if("xingming"!=c){a.next=32;break}return t.ruleForm.xingming=o[c],t.ro.xingming=!0,a.abrupt("continue",22);case 32:if("tupian"!=c){a.next=36;break}return t.ruleForm.tupian=o[c],t.ro.tupian=!0,a.abrupt("continue",22);case 36:if("zixunneirong"!=c){a.next=40;break}return t.ruleForm.zixunneirong=o[c],t.ro.zixunneirong=!0,a.abrupt("continue",22);case 40:if("zixunshijian"!=c){a.next=44;break}return t.ruleForm.zixunshijian=o[c],t.ro.zixunshijian=!0,a.abrupt("continue",22);case 44:if("xuehao"!=c){a.next=48;break}return t.ruleForm.xuehao=o[c],t.ro.xuehao=!0,a.abrupt("continue",22);case 48:if("xueshengxingming"!=c){a.next=52;break}return t.ruleForm.xueshengxingming=o[c],t.ro.xueshengxingming=!0,a.abrupt("continue",22);case 52:a.next=22;break;case 54:t.styleChange();case 55:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},zixunshijianConfirm:function(e){console.log(e),this.ruleForm.zixunshijian=e.result,this.$forceUpdate()},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function t(){var a,i,u,o,c,s,l,f,x,g;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.cross){t.next=16;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){t.next=16;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){t.next=12;break}for(l in s)l==o&&(s[l]=c);return f=e.getStorageSync("crossTable"),t.next=10,n.$api.update("".concat(f),s);case 10:t.next=16;break;case 12:a=Number(e.getStorageSync("userid")),i=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!a){t.next=38;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=i,x={page:1,limit:10,crossuserid:a,crossrefid:i},t.next=22,n.$api.list("zaixianzixun",x);case 22:if(g=t.sent,!(g.data.total>=u)){t.next=28;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 28:if(!n.ruleForm.id){t.next=33;break}return t.next=31,n.$api.update("zaixianzixun",n.ruleForm);case 31:t.next=35;break;case 33:return t.next=35,n.$api.add("zaixianzixun",n.ruleForm);case 35:n.$utils.msgBack("提交成功");case 36:t.next=46;break;case 38:if(!n.ruleForm.id){t.next=43;break}return t.next=41,n.$api.update("zaixianzixun",n.ruleForm);case 41:t.next=45;break;case 43:return t.next=45,n.$api.add("zaixianzixun",n.ruleForm);case 45:n.$utils.msgBack("提交成功");case 46:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},d185:function(e,n,t){}},[["9c7a","common/runtime","common/vendor"]]]);