(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1448:function(t,e,a){"use strict";a.r(e);var r=a(0),s=a(94),o={name:"formChangeStatus",props:["id"],data:function(){return{payment:{id:this.id,status:""}}},methods:{submit:function(){this.$emit("save",this.payment)}}},i=a(2),n=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("b-form-group",{attrs:{label:"Tipo de pago"}},[a("b-form-select",{staticClass:"mb-3",model:{value:t.payment.status,callback:function(e){t.$set(t.payment,"status",e)},expression:"payment.status"}},[a("b-form-select-option",{attrs:{value:"No pago"}},[t._v("No pago")]),t._v(" "),a("b-form-select-option",{attrs:{value:"Parcialmente pago"}},[t._v("Parcialmente pago")]),t._v(" "),a("b-form-select-option",{attrs:{value:"Pago completo"}},[t._v("Pago completo")])],1)],1),t._v(" "),a("div",{staticClass:"text-right"},[a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Cambiar estado")])],1)],1)}),[],!1,null,"78a7113a",null).exports;function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){u(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var p={name:"listPurshs",components:{formAddFile:s.a,formChangeStatus:n},created:function(){var t=this;this.getPurshes(this.payload).then((function(e){t.rows=e.total}))},data:function(){return{fields:[{key:"uuid",label:" ID Factura"},{key:"subject",label:"Adeudado por"},{key:"detail",label:"Detalle"},{key:"payment_date",label:"Fecha de pago"},{key:"payment",label:"Tipo de pago"},{key:"status_pay",label:"Estado"},{key:"cost",label:"Total a pagar"},{key:"file",label:"Factura de pago"},{key:"actions",label:"Acciones"},{key:"history",label:"Historial"}],optionsSearch:[{value:"2",text:"ID Factura"},{value:"0",text:"Vehículo"},{value:"1",text:"Usuario"},{value:"3",text:"Detalle"}],search:{type:null,data:null},history:[],currentPursheId:"",status_pay:"No pago",perPage:10,rows:0,currentPage:1,payload:{page:1,status_pay:"No pago"},amountTotal:0,uuid:""}},methods:c(c({},Object(r.b)("purshe",["getPurshes","toggleStatus","saveFilePurshe","searchPurshes","deletePurche"])),{},{showModalDeleteVehicle:function(t){var e=this;this.$bvModal.msgBoxConfirm("una vez ejecutada la acción no podra recuperar la información",{title:"¿Está seguro de eliminar la factura?",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"Eliminar",cancelTitle:"NO",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then((function(a){a&&e.deletePurche(t).then((function(t){openNotification("Factura eliminada corrrectamente","Se ha eliminado la ruta")}))}))},showModalChangeStatus:function(t){this.currentPursheId=t,this.$refs.modal_change_status.show()},changeStatus:function(t){var e=this;this.toggleStatus(t).then((function(t){openNotification(),e.$refs.modal_change_status.hide()}))},showHistory:function(t){this.history=t,this.$refs.modal_history.show()},showModalAddFactura:function(t){this.amountTotal=t.cost,this.currentPursheId=t.id,this.$refs.modal_add_file.show()},save:function(t){var e=this;this.saveFilePurshe(t).then((function(t){openNotification(),e.$refs.modal_add_file.hide()}))}}),computed:c({},Object(r.e)("purshe",["purshes"])),filters:{status:function(t){return t?"Pagado":"Pendiente"},transform:function(t){return t.padStart(4,"0")}},watch:{"payload.status_pay":function(t){var e=this;this.getPurshes(this.payload).then((function(t){e.rows=t.total}))},"payload.page":function(t){var e=this;this.payload.page=t,this.getPurshes(this.payload).then((function(t){e.rows=t.total}))}}},d=Object(i.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:"Listar pagos",folder:"Cartera"}}),t._v(" "),a("b-tabs",{attrs:{"content-class":"mt-3"}},[a("b-tab",{attrs:{title:"No pago",active:""},on:{click:function(e){t.payload.status_pay="No pago"}}}),t._v(" "),a("b-tab",{attrs:{title:"Parcialmente pago"},on:{click:function(e){t.payload.status_pay="Parcialmente pago"}}}),t._v(" "),a("b-tab",{attrs:{title:"Pago completo"},on:{click:function(e){t.payload.status_pay="Pago completo"}}})],1),t._v(" "),a("b-card",{attrs:{title:"Lista de pagos"}},[a("b-row",{staticClass:"mb-4"},[a("b-col",{attrs:{md:"2"}},[a("b-form-select",{attrs:{options:t.optionsSearch},model:{value:t.search.type,callback:function(e){t.$set(t.search,"type",e)},expression:"search.type"}})],1),t._v(" "),a("b-col",{attrs:{md:"3"}},[a("b-form-input",{staticClass:"input",attrs:{id:"payment_date",placeholder:"Escribe el usuario o el número de placa"},model:{value:t.search.data,callback:function(e){t.$set(t.search,"data",e)},expression:"search.data"}})],1),t._v(" "),a("b-col",{attrs:{md:"4"}},[a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.searchPurshes({data:t.search.data,type:t.search.type})}}},[t._v("Buscar")]),t._v(" "),a("b-button",{on:{click:function(e){return t.getPurshes(t.payload)}}},[t._v("Limpiar filtros")])],1)],1),t._v(" "),a("b-table",{attrs:{hover:"",fields:t.fields,items:t.purshes,"per-page":t.perPage,"current-page":t.currentPage},scopedSlots:t._u([{key:"cell(uuid)",fn:function(e){return[t._v("\n        "+t._s(e.item.id)+"\n      ")]}},{key:"cell(subject)",fn:function(e){return[e.item.user?a("span",[t._v("\n          "+t._s(e.item.user.names)+" "+t._s(e.item.user.surnames)+"\n        ")]):t._e(),t._v(" "),e.item.vehicle?a("span",[t._v("\n          "+t._s(e.item.vehicle.car_plate)+"\n        ")]):t._e()]}},{key:"cell(file)",fn:function(e){return[e.item.file?a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-outline-success btn-rounded",attrs:{download:"",href:"/storage/purshes/"+e.item.file,title:"Descargar factura"}},[a("i",{staticClass:"i-Download"})]):t._e()]}},{key:"cell(is_pay)",fn:function(e){return[a("b-button",{attrs:{variant:e.item.is_pay?"success":"danger",size:"sm"}},[t._v("\n          "+t._s(t._f("status")(e.item.is_pay))+"\n        ")])]}},{key:"cell(cost)",fn:function(e){return[t._v("\n          "+t._s(t._f("format_currency")(e.item.cost))+"\n      ")]}},{key:"cell(actions)",fn:function(e){return[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn-rounded",attrs:{disabled:"Pago completo"==e.item.status_pay,variant:"outline-primary",title:"Cambiar estado"},on:{click:function(a){return t.showModalChangeStatus(e.item.id)}}},[a("i",{staticClass:"i-Shuffle-2"})]),t._v(" "),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn-rounded",attrs:{variant:"outline-success",title:"Realizar pago"},on:{click:function(a){return t.showModalAddFactura(e.item)}}},[a("i",{staticClass:"i-Financial"})]),t._v(" "),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn-rounded ml-2",attrs:{variant:"outline-danger",title:"Eliminar pago"},on:{click:function(a){return t.showModalDeleteVehicle(e.item.id)}}},[a("i",{staticClass:"i-Delete-File"})])]}},{key:"cell(history)",fn:function(e){return[e.item.purshe_transaction.length?a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn-rounded",attrs:{variant:"outline-primary",title:"Historial de pagos"},on:{click:function(a){return t.showHistory(e.item.purshe_transaction)}}},[a("i",{staticClass:"i-Receipt"})]):t._e()]}}])}),t._v(" "),a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"my-table"},model:{value:t.payload.page,callback:function(e){t.$set(t.payload,"page",e)},expression:"payload.page"}}),t._v(" "),a("b-modal",{ref:"modal_history",attrs:{centered:"",title:"Historial","hide-footer":"",size:"lg"}},[t.history.length?a("div",t._l(t.history,(function(e){return a("b-list-group",{key:e.id},[a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[a("p",{staticClass:"m-0"},[a("b",[t._v("Tipo: ")]),t._v(t._s(e.payment)+" - "),a("b",[t._v("Pagado:")]),t._v(" "+t._s(e.cost))]),t._v(" "),a("p",{staticClass:"m-0"},[a("b",[t._v("Fecha de pagado :")]),t._v(" "+t._s(t._f("formatDate")(e.created_at)))]),t._v(" "),e.user?a("p",{staticClass:"m-0"},[a("b",[t._v("Pago realizado por:")]),t._v(" "+t._s(e.user.names)+" "+t._s(e.user.surnames))]):t._e(),t._v(" "),e.file?a("a",{staticClass:"btn btn-outline-success",attrs:{download:"",href:"/storage/purshes/"+e.file,variant:"outline-success"}},[t._v("\n              Descargar\n            ")]):t._e()])],1)})),1):t._e()])],1),t._v(" "),a("b-modal",{ref:"modal_add_file",attrs:{centered:"",title:"Factura de pago por $"+t.amountTotal,"hide-footer":""}},[a("form-add-file",{attrs:{total:t.amountTotal,pursheId:t.currentPursheId},on:{save:t.save}})],1),t._v(" "),a("b-modal",{ref:"modal_change_status",attrs:{centered:"",title:"Cambiar estado","hide-footer":""}},[a("form-change-status",{attrs:{id:t.currentPursheId},on:{save:t.changeStatus}})],1)],1)}),[],!1,null,"7bd88717",null);e.default=d.exports},94:function(t,e,a){"use strict";var r=a(15),s=a(0);function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={name:"formAddFile",props:["pursheId","total"],created:function(){this.getUsers()},data:function(){return{file:null,payment:"",cost:0,user_id:""}},components:{ModelSelect:r.ModelSelect},methods:i(i({},Object(s.b)("user",["getUsers"])),{},{submit:function(){var t=buildFormData({id:this.pursheId,file:this.file,payment:this.payment,cost:this.cost,user_id:this.user_id});this.$emit("save",t)}}),computed:i({},Object(s.c)("user",["userOptions"]))},c=a(2),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Anexar factura"}},[a("b-form-file",{attrs:{state:Boolean(t.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1)],1),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Tipo de pago"}},[a("b-form-select",{staticClass:"mb-3",model:{value:t.payment,callback:function(e){t.payment=e},expression:"payment"}},[a("b-form-select-option",{attrs:{value:"abono"}},[t._v("Abono")]),t._v(" "),a("b-form-select-option",{attrs:{value:"pago"}},[t._v("Pago")])],1)],1)],1),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Persona que registra el pago"}},[a("model-select",{attrs:{options:t.userOptions},model:{value:t.user_id,callback:function(e){t.user_id=e},expression:"user_id"}})],1)],1),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Total"}},[a("b-form-input",{staticClass:"mb-2",attrs:{type:"number",label:"Total"},model:{value:t.cost,callback:function(e){t.cost=e},expression:"cost"}})],1),t._v(" "),parseInt(t.cost)>parseInt(t.total)?a("p",{staticClass:"text-danger"},[t._v("El pago total supera el costo")]):t._e()],1),t._v(" "),a("b-col",{staticClass:"text-right mt-4",attrs:{md:"12"}},[a("b-button",{attrs:{type:"submit",variant:"primary",disabled:!t.file||parseInt(t.cost)>parseInt(t.total)}},[t._v("Guardar\n      ")])],1)],1)],1)}),[],!1,null,"249e022a",null);e.a=u.exports}}]);