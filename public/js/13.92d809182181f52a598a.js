(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{14:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(489))&&n.__esModule?n:{default:n};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=a;t.len=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!a(e)||t.test(e)}))}},1453:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(96);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f={name:"formFile",created:function(){this.CHANGE_SUBMIT_STATUS(!1)},data:function(){return{file:null}},validations:{file:{required:r(3).required}},methods:a(a({},Object(n.d)(["CHANGE_SUBMIT_STATUS"])),{},{submit:function(){this.$v.$touch(),this.$v.$invalid?openNotification("Error","Por favor complete el formulario correctamente.","danger"):(this.CHANGE_SUBMIT_STATUS("PENDING"),this.$emit("saveFile",this.file))}}),computed:a({},Object(n.e)(["errorMessages","submitStatus"]))},l=r(2),c=Object(l.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("b-form-group",{attrs:{label:"Archivo"}},[r("b-form-file",{attrs:{state:Boolean(e.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1),e._v(" "),r("div",{staticClass:"text-right mt-4"},[r("b-button",{attrs:{type:"submit",variant:"primary",disabled:"PENDING"===e.submitStatus}},[e._v("Guardar")])],1),e._v(" "),"PENDING"===e.submitStatus?e._m(0):e._e()],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,"707b9c25",null).exports,d=r(46),s=r.n(d);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v={name:"showFolder",components:{formFolder:o.a,formFile:c},props:["id"],created:function(){this.show(this.id)},data:function(){return{folder:{name:""}}},methods:b(b(b({},Object(n.b)("cloud",["createFolder","addFile","deleteFolder","updateFolder"])),Object(n.b)("cloud",["show"])),{},{showModalFormFolfer:function(){this.folder=s()(this.folder,(function(){return""})),this.$refs["form-create-folder"].show()},showModalEditFolfer:function(e){this.folder=clone(e),this.$refs["form-create-folder"].show()},showModalFormFile:function(){this.$refs["form-create-file"].show()},save:function(e){var t=this;e.id?this.updateFolder(e).then((function(e){t.show(t.id),t.$refs["form-create-folder"].hide(),openNotification()})):(e.folder_id=this.id,this.createFolder(e).then((function(e){t.show(t.id),t.$refs["form-create-folder"].hide(),openNotification()})))},saveFile:function(e){var t=this,r=new FormData;r.append("id",this.id),r.append("file",e),this.addFile(r).then((function(e){t.show(t.id),t.$refs["form-create-file"].hide(),openNotification()}))},changeFolder:function(e){this.$router.push({params:{id:e}}),this.show(e)},goToBack:function(){this.$router.back()},showModalDeleteFolder:function(e){var t=this;this.$bvModal.msgBoxConfirm("una vez ejecutada la acción no podra recuperar la información",{title:"¿Está seguro de eliminar la carpeta?",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"Eliminar",cancelTitle:"NO",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then((function(r){r&&t.deleteFolder(e).then((function(e){"deleted"==e&&(t.show(t.id),openNotification("Carpeta eliminada corrrectamente","Se ha eliminado la carpeta"))}))}))}}),computed:b(b({},Object(n.e)("cloud",["currentFolder"])),Object(n.e)("auth",["role"])),filters:{extension:function(e){var t=e.split("."),r=t[t.length-1];return r}},watch:{id:function(e){this.show(e)}}},h=Object(l.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-content"},[n("breadcumb",{attrs:{page:"Nube",folder:e.currentFolder.name}}),e._v(" "),n("div",{staticClass:"text-right"},[n("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:"Acciones",variant:"primary"}},[n("b-dropdown-item",{on:{click:e.showModalFormFolfer}},[e._v("Crear carpeta")]),e._v(" "),n("b-dropdown-item",{on:{click:e.showModalFormFile}},[e._v("Añadir archivo")])],1),e._v(" "),n("b-button",{attrs:{variant:"primary"},on:{click:e.goToBack}},[e._v("Volver")])],1),e._v(" "),n("b-row",[e._l(e.currentFolder.folders,(function(t){return n("b-col",{key:t.id,attrs:{md:"2"},on:{dblclick:function(r){return e.changeFolder(t.id)}}},[n("div",{staticClass:"text-center clickable"},[n("img",{attrs:{width:"100",src:r(183),alt:"folder"}}),e._v(" "),n("p",{staticClass:"text-muted lead m-0"},[e._v(e._s(t.name))]),e._v(" "),"ADMIN"==e.role?n("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:"Acciones",variant:"link"}},[n("b-dropdown-item",{on:{click:function(r){return e.showModalEditFolfer(t)}}},[e._v("Editar")]),e._v(" "),n("b-dropdown-item",{on:{click:function(r){return e.showModalDeleteFolder(t.id)}}},[e._v("Eliminar")]),e._v(" "),n("b-dropdown-item",{on:{click:function(e){}}},[e._v("Asignar permisos")])],1):e._e()],1)])})),e._v(" "),e._l(e.currentFolder.files,(function(t){return n("b-col",{key:t.id,staticClass:"text-center clickable",attrs:{md:"2"}},[n("a",{attrs:{href:"/storage/folders/folder-"+e.id+"/"+t.url,download:""}},[n("img",{attrs:{width:"100",src:r(527),alt:"folder"}}),e._v(" "),n("p",{staticClass:"text-muted lead"},[e._v(e._s(e._f("extension")(t.url)))])])])}))],2),e._v(" "),n("b-modal",{ref:"form-create-folder",attrs:{title:"Carpeta","hide-footer":""}},[n("form-folder",{attrs:{folder:e.folder},on:{save:e.save}})],1),e._v(" "),n("b-modal",{ref:"form-create-file",attrs:{title:"Guardar archivos","hide-footer":""}},[n("form-file",{on:{saveFile:e.saveFile}})],1)],1)}),[],!1,null,"eae0957a",null);t.default=h.exports},183:function(e,t){e.exports="/images/folder.png?ead0fdbd70e4dcd7775de84cf12c2f28"},3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return j.default}}),t.helpers=void 0;var n=x(r(488)),o=x(r(491)),i=x(r(492)),a=x(r(493)),u=x(r(494)),f=x(r(495)),l=x(r(496)),c=x(r(497)),d=x(r(498)),s=x(r(499)),p=x(r(500)),b=x(r(501)),m=x(r(502)),v=x(r(503)),h=x(r(504)),y=x(r(505)),O=x(r(506)),_=x(r(507)),g=x(r(508)),P=x(r(509)),j=x(r(510)),w=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(14));function x(e){return e&&e.__esModule?e:{default:e}}t.helpers=w},488:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(14).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},489:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(490).withParams:r(182).withParams;t.default=n}).call(this,r(70))},490:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(21))},491:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(14).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},492:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(14).regex)("numeric",/^[0-9]*$/);t.default=n},493:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},494:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(14).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},495:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)}));t.default=o;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},496:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},497:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},498:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},499:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},500:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},501:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},502:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},503:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(14).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},504:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},505:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},506:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},507:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(14);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},509:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(14).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},510:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(14).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},527:function(e,t){e.exports="/images/document.svg?6517178948281f040bcfdd106bd253e9"},96:function(e,t,r){"use strict";var n=r(3),o=r(0);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f={name:"formFolder",created:function(){this.CHANGE_SUBMIT_STATUS(!1)},props:["folder"],validations:{folder:{name:{required:n.required}}},methods:a(a({},Object(o.d)(["CHANGE_SUBMIT_STATUS"])),{},{submit:function(){this.$v.$touch(),this.$v.$invalid?openNotification("Error","Por favor complete el formulario correctamente.","danger"):(this.CHANGE_SUBMIT_STATUS("PENDING"),this.$emit("save",this.folder))}}),computed:a({},Object(o.e)(["errorMessages","submitStatus"]))},l=r(2),c=Object(l.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("b-form-group",{attrs:{label:"Nombre de la carpeta"}},[r("b-form-input",{staticClass:"mb-2",attrs:{label:"Nombres"},model:{value:e.$v.folder.name.$model,callback:function(t){e.$set(e.$v.folder.name,"$model","string"==typeof t?t.trim():t)},expression:"$v.folder.name.$model"}})],1),e._v(" "),r("div",{staticClass:"text-right"},[r("b-button",{attrs:{type:"submit",variant:"primary",disabled:"PENDING"===e.submitStatus}},[e._v("Guardar")])],1),e._v(" "),"PENDING"===e.submitStatus?e._m(0):e._e()],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,"2da94b1c",null);t.a=c.exports}}]);