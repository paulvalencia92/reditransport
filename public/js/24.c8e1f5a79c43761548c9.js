(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{14:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return i.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,i=(n=r(489))&&n.__esModule?n:{default:n};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===u(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=a;t.len=function(e){return Array.isArray(e)?e.length:"object"===u(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,i.default)({type:e},(function(e){return!a(e)||t.test(e)}))}},1462:function(e,t,r){"use strict";r.r(t);var n=r(1),i=r.n(n),u=r(0),a=r(3),o=r(4),l=r.n(o);function c(e,t,r,n,i,u,a){try{var o=e[u](a),l=o.value}catch(e){return void r(e)}o.done?t(l):Promise.resolve(l).then(n,i)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var u=e.apply(t,r);function a(e){c(u,n,i,a,o,"next",e)}function o(e){c(u,n,i,a,o,"throw",e)}a(void 0)}))}}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b={name:"create",created:function(){this.getUserWithOutLicense(),this.CLEAR_ERRORS(),this.CHANGE_SUBMIT_STATUS(!1)},components:{ModelSelect:r(15).ModelSelect},data:function(){return{licence:{file:null,expiration_date:"",user_id:null,type:null},users:[],loading:!1,types:[{value:"B1",text:"B1"},{value:"B2",text:"B2"},{value:"B3",text:"B3"},{value:"C1",text:"C1"},{value:"C2",text:"C2"},{value:"C3",text:"C3"}]}},validations:{licence:{expiration_date:{required:a.required},file:{required:a.required},user_id:{required:a.required},type:{required:a.required}}},methods:d(d({},Object(u.d)(["CLEAR_ERRORS","CHANGE_SUBMIT_STATUS"])),{},{submit:function(){var e=this;if(this.loading=!0,this.$v.$invalid)return openNotification("Error","Por favor complete el formulario correctamente.","danger"),void(this.loading=!1);this.saveLicense().then((function(t){201==t&&(openNotification(),e.loading=!1,e.$router.push({name:"licencia-transito"}))}))},getUserWithOutLicense:function(){var e=this;return f(i.a.mark((function t(){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("/api/users-license");case 2:(r=t.sent).data.length||openNotification("No hay conductores disponibles para registrar licencia","Si desea actualizar la licencia debe realizarlo en la tabla y elegir el conductor al cual le desea actualizar la licencia","warning",1e4),r.data.forEach((function(t){e.users.push({text:t.full_name,value:t.id})}));case 5:case"end":return t.stop()}}),t)})))()},saveLicense:function(){var e=this;return f(i.a.mark((function t(){var r,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=buildFormData(e.licence),t.next=3,l.a.post("/api/license-trans-admin",r);case 3:return n=t.sent,t.abrupt("return",Promise.resolve(n.status));case 5:case"end":return t.stop()}}),t)})))()}}),computed:d({},Object(u.e)(["errorMessages","submitStatus"]))},v=r(2),y=Object(v.a)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-content"},[r("breadcumb",{attrs:{page:"Vehiculos",folder:"Asignar licencia"}}),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-5 offset-md-3"},[r("b-card",[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[e.errorMessages.length?r("card-error-validation"):e._e(),e._v(" "),r("b-form-group",{attrs:{label:"Elegir conductor","label-for":"type"}},[r("model-select",{attrs:{options:e.users},model:{value:e.licence.user_id,callback:function(t){e.$set(e.licence,"user_id",t)},expression:"licence.user_id"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"Agregar documento","label-for":"type"}},[r("b-form-file",{attrs:{"browse-text":"Guardar",state:Boolean(e.licence.file),placeholder:"Elija un archivo o suéltelo aquí ... ","drop-placeholder":"Suelta el archivo aquí ..."},model:{value:e.licence.file,callback:function(t){e.$set(e.licence,"file",t)},expression:"licence.file"}})],1),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("b-form-group",{attrs:{label:"Fecha Vencimiento","label-for":"expiration_date"}},[r("b-form-input",{staticClass:"input",attrs:{id:"expiration_date",type:"date"},model:{value:e.licence.expiration_date,callback:function(t){e.$set(e.licence,"expiration_date",t)},expression:"licence.expiration_date"}})],1)],1),e._v(" "),r("div",{staticClass:"col-6"},[r("b-form-group",{attrs:{label:"Elige tipo de licencia","label-for":"type"}},[r("model-select",{attrs:{options:e.types},model:{value:e.licence.type,callback:function(t){e.$set(e.licence,"type",t)},expression:"licence.type"}})],1)],1)]),e._v(" "),r("b-col",{staticClass:"text-right",attrs:{md:"12"}},[r("router-link",{staticClass:"btn btn-outline-info mr-2",attrs:{to:{name:"licencia-transito"},disabled:e.loading}},[e._v("Volver")]),e._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary",disabled:e.loading}},[e._v("Guardar")]),e._v(" "),1==e.loading?r("div",{staticClass:"spinner sm spinner-primary"}):e._e()],1)],1)],1)],1)])],1)}),[],!1,null,"18dc7242",null);t.default=y.exports},3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return x.default}}),t.helpers=void 0;var n=w(r(488)),i=w(r(491)),u=w(r(492)),a=w(r(493)),o=w(r(494)),l=w(r(495)),c=w(r(496)),f=w(r(497)),s=w(r(498)),d=w(r(499)),p=w(r(500)),b=w(r(501)),v=w(r(502)),y=w(r(503)),m=w(r(504)),g=w(r(505)),h=w(r(506)),_=w(r(507)),P=w(r(508)),O=w(r(509)),x=w(r(510)),j=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(14));function w(e){return e&&e.__esModule?e:{default:e}}t.helpers=j},488:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(14).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},489:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(490).withParams:r(182).withParams;t.default=n}).call(this,r(70))},490:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},i=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=i}).call(this,r(21))},491:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(14).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},492:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(14).regex)("numeric",/^[0-9]*$/);t.default=n},493:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},494:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(14).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},495:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14),i=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(u)}));t.default=i;var u=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},496:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(i)}))};var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},497:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},498:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},499:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14),i=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=i},500:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},501:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},502:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},503:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(14).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},504:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},505:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},506:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},507:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},509:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(14).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},510:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(14).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n}}]);