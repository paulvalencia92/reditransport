(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1476:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),o=n(0),r=n(49);function c(e,t,n,i,a,o,r){try{var c=e[o](r),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(i,a)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=n(20),b={name:"list-vehicles",metaInfo:{title:"Lista de vehiculos"},components:{formVehicle:r.a},created:function(){this.viewPermissions()||this.$router.push({name:"not-found"}),this.myContracts()},data:function(){return{columns:[{label:"Número",field:"number"},{label:"Departamento",field:"department.name"},{label:"Municipio",field:"municipality.name"},{label:"Fecha inicio",field:"start_date"},{label:"Fecha fin",field:"end_date"},{label:"Contratante",field:"contractor.contractor"},{label:"Objeto",field:"object"},{label:"Ingresos",field:"incomes"},{label:"Detalles",field:"details"},{label:"Vehículo",field:"vehicle.car_plate"},{label:"Adicional",field:"aditional"},{label:"Acciones",field:"actions"}],vehicleInEdition:{},loading:!1}},methods:l(l(l({},Object(o.b)("contracts",["myContracts","updateContract","deleteContract"])),Object(o.d)(["CHANGE_SUBMIT_STATUS"])),{},{showModalEditVehicle:function(e){this.vehicleInEdition=clone(e),this.$refs["modal-edit-vehicle"].show()},showModalDeleteVehicle:function(e){var t=this;this.$bvModal.msgBoxConfirm("una vez ejecutada la acción no podra recuperar la información",{title:"¿Está seguro de eliminar el vehiculo?",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"Eliminar",cancelTitle:"NO",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then((function(n){n&&t.deleteContract(e.id).then((function(e){"vehicle successfully removed"==e&&openNotification("Vehiculo eliminado corrrectamente","Se ha eliminado el Vehiculo")}))}))},save:function(e){var t=this;this.updateContract(e).then((function(e){openNotification(),t.CHANGE_SUBMIT_STATUS(!0),t.$refs["modal-edit-vehicle"].hide()})).catch((function(e){openNotification("Error","No se pudieron guardar los datos","danger"),t.CHANGE_SUBMIT_STATUS(!1)}))},exportData:function(e){var t,n=this;return(t=a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.loading=!0,t.next=3,axios.get("/api/generate/document/fuec/".concat(e),{responseType:"blob"}).then((function(t){u(t.data,e+"-FUEC.pdf"),n.loading=!1}));case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function r(e){c(o,i,a,r,s,"next",e)}function s(e){c(o,i,a,r,s,"throw",e)}r(void 0)}))})()},viewPermissions:function(){return this.abilities.includes("*")||this.abilities.includes("contrato-particular-listar")},adminPermissions:function(){return this.abilities.includes("*")||this.abilities.includes("contrato-particular-administracion")}}),computed:l(l({},Object(o.e)("contracts",["contracts"])),Object(o.e)("auth",["abilities"]))},f=n(2),m=Object(f.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-content"},[n("breadcumb",{attrs:{page:"Lista de contratos",folder:"Contratos"}}),e._v(" "),n("b-card",[n("div",{staticClass:"mb-3 right-text tet-right"},[n("router-link",{staticClass:"btn btn-primary btn-rounded d-none d-sm-block",attrs:{tag:"a",to:{name:"contrato-particular-crear"}}},[n("i",{staticClass:"i-Add-User text-white mr-2"}),e._v("Crear contrato\n        ")])],1),e._v(" "),n("vue-good-table",{attrs:{columns:e.columns,"line-numbers":!1,"search-options":{enabled:!0,placeholder:"Buscar en esta tabla"},"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",rows:e.contracts},scopedSlots:e._u([{key:"table-row",fn:function(t){return["actions"==t.column.field?n("span",[n("a",{staticClass:"clickeable",on:{click:function(n){return e.showModalEditVehicle(t.row)}}},[n("i",{staticClass:"i-Eraser-2 text-25 text-success mr-2"}),e._v("\n                "+e._s(t.row.button)+"\n              ")]),e._v(" "),n("a",{staticClass:"clickeable",on:{click:function(n){return e.showModalDeleteVehicle(t.row)}}},[n("i",{staticClass:"i-Close-Window text-25 text-danger"}),e._v("\n                "+e._s(t.row.button)+"\n              ")])]):"aditional"==t.column.field?n("span",[n("router-link",{attrs:{to:{name:"detalles-contrato",params:{id:t.row.id}},custom:"",custom:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.href,a=t.navigate;return[n("a",{staticClass:"btn open btn-primary btn-sm",attrs:{href:i},on:{click:a}},[e._v("Rutas")])]}}],null,!0)}),e._v(" "),1==t.row.blocked_license?n("div",{staticClass:"text-danger"},[e._v("\n              El conductor no tiene licencia valida\n            ")]):e._e(),e._v(" "),1==t.row.blocked_documents?n("div",{staticClass:"text-danger"},[e._v("\n              El vehículo no tiene documentos al día\n            ")]):e._e(),e._v(" "),1==t.row.blocked_payment?n("div",{staticClass:"text-danger"},[e._v("\n              Tienes cuentas por pagar\n            ")]):e._e(),e._v(" "),0==t.row.blocked_license&&0==t.row.blocked_documents&&0==t.row.blocked_payment?n("div",[1!=e.loading?n("b-button",{attrs:{disabled:t.row.routes.length<1,variant:"secondary",size:"sm"},on:{click:function(n){return e.exportData(t.row.id)}}},[e._v("\n                  Descargar Fuec\n              ")]):n("div",{staticClass:"spinner sm spinner-primary"}),e._v(" "),t.row.routes.length<1?n("div",{staticClass:"text-danger"},[e._v("\n                  Debes agregar al menos una ruta\n                ")]):e._e()],1):e._e()],1):e._e()]}}])})],1),e._v(" "),n("b-modal",{ref:"modal-edit-vehicle",attrs:{size:"lg",title:"Actualizar vehículo","hide-footer":""}},[n("form-vehicle",{attrs:{vehicle:e.vehicleInEdition},on:{save:e.save}})],1)],1)}),[],!1,null,"895aad0c",null);t.default=m.exports},20:function(e,t){e.exports=function(e,t,n,i){var a=new Blob(void 0!==i?[i,e]:[e],{type:n||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(a,t);else{var o=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(a):window.webkitURL.createObjectURL(a),r=document.createElement("a");r.style.display="none",r.href=o,r.setAttribute("download",t),void 0===r.download&&r.setAttribute("target","_blank"),document.body.appendChild(r),r.click(),setTimeout((function(){document.body.removeChild(r),window.URL.revokeObjectURL(o)}),200)}}}}]);