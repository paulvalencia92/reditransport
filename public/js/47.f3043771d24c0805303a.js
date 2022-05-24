(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1457:function(e,t,i){"use strict";i.r(t);var a=i(0);function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var o={name:"list",metaInfo:{title:"Lista de conductores"},components:{formAffiliate:i(98).a},created:function(){var e=this;this.permissions()||this.$router.push({name:"not-found"}),this.getUsers(this.search).then((function(t){e.totalRows=t}))},data:function(){return{columns:[{label:"Nombres",field:"names"},{label:"Fecha de nacimiento",field:"date_of_birth"},{label:"Genero",field:"sex"},{label:"Dirección residencial",field:"residence_address"},{label:"Telefono",field:"phone_number"},{label:"Correo electronico",field:"email"},{label:"Rol",field:"role"},{label:"Acciones",field:"actions"}],avatar:"@/assets/images/faces/1.jpg",affiliateInEdition:{},totalRows:0,search:{page:1,name:""},searchTerm:""}},methods:n(n(n({},Object(a.b)("user",["getUsers","updateUser","deleteUser"])),Object(a.d)(["CHANGE_SUBMIT_STATUS"])),{},{permissions:function(){return this.abilities.includes("*")||this.abilities.includes("afiliados-listar")},administrationPermissions:function(){return this.abilities.includes("*")||this.abilities.includes("afiliados-administracion")},showModalEditAfiliate:function(e){this.affiliateInEdition=window.clone(e),this.$refs["modal-edit-conductor"].show()},save:function(e){var t=this;this.updateUser(e).then((function(e){openNotification(),t.CHANGE_SUBMIT_STATUS("OK"),t.$refs["modal-edit-conductor"].hide()})).catch((function(e){openNotification("Error","No se pudieron guardar los datos","danger"),t.CHANGE_SUBMIT_STATUS("ERROR")}))},showModalDeleteUser:function(e){var t=this;this.$bvModal.msgBoxConfirm("una vez ejecutada la acción no podra recuperar la información",{title:"¿Está seguro de eliminar el usuario ".concat(e.names," ").concat(e.surnames,"?"),size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"Eliminar",cancelTitle:"NO",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then((function(i){t.deleteUser(e.id).then((function(e){"user successfully removed"==e&&openNotification("Usuario eliminado corrrectamente","Se ha eliminado el usuario")}))}))},showDetail:function(e){this.$router.push({name:"detalle-afiliado",params:{id:e}})},onPageChange:function(e){this.search.page=e.currentPage,this.getUsers(this.search)},onSearch:function(e){this.search.name=e.searchTerm}}),computed:n(n({},Object(a.e)("user",["users"])),Object(a.e)("auth",["abilities"])),watch:{"search.name":function(){var e=this;this.getUsers(this.search).then((function(t){e.totalRows=t}))}}},c=i(2),l=Object(c.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:"Lista de afiliados",folder:"afiliados"}}),e._v(" "),a("b-card",[a("vue-good-table",{attrs:{rows:e.users,columns:e.columns,"line-numbers":!1,"total-rows":e.totalRows,"search-options":{enabled:!0,trigger:"enter",placeholder:"Search this table"},"pagination-options":{enabled:!0,perPage:15,mode:"records",nextLabel:">",prevLabel:"<"},styleClass:"tableOne vgt-table"},on:{"on-page-change":e.onPageChange,"on-search":e.onSearch},scopedSlots:e._u([{key:"table-row",fn:function(t){return["actions"==t.column.field?a("div",[e.administrationPermissions()?[a("a",{staticClass:"clickeable",on:{click:function(i){return e.showModalEditAfiliate(t.row)}}},[a("i",{staticClass:"i-Eraser-2 text-25 text-success mr-2"}),e._v("\n              "+e._s(t.row.button)+"\n            ")]),e._v(" "),a("a",{staticClass:"clickeable",on:{click:function(i){return e.showModalDeleteUser(t.row)}}},[a("i",{staticClass:"i-Close-Window text-25 text-danger"}),e._v("\n              "+e._s(t.row.button)+"\n            ")])]:e._e(),e._v(" "),a("a",{staticClass:"clickeable",on:{click:function(i){return i.preventDefault(),e.showDetail(t.row.id)}}},[a("i",{staticClass:"i-Find-User text-25 text-primary"})])],2):"names"==t.column.field?a("div",[a("a",{attrs:{href:""}},[a("div",{staticClass:"ul-widget-app__profile-pic"},[a("img",{staticClass:"profile-picture avatar-sm mb-2 rounded-circle img-fluid",attrs:{src:""+i(200),alt:""}}),e._v("\n              "+e._s(t.row.names)+" "+e._s(t.row.surnames)+"\n            ")])])]):e._e()]}}])},[a("div",{staticClass:"mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[e.administrationPermissions()?a("router-link",{staticClass:"btn btn-primary btn-rounded d-none d-sm-block",attrs:{tag:"a",to:"/afiliados/crear"}},[a("i",{staticClass:"i-Add-User text-white mr-2"}),e._v("Crear conductor\n        ")]):e._e()],1)])],1),e._v(" "),a("b-modal",{ref:"modal-edit-conductor",attrs:{centered:"",title:"Actualizar conductor","hide-footer":""}},[a("form-affiliate",{attrs:{driverDraft:e.affiliateInEdition},on:{save:e.save}})],1)],1)}),[],!1,null,"377026b6",null);t.default=l.exports}}]);