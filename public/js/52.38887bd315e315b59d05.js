(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1474:function(t,e,r){"use strict";r.r(e);var n=r(49),i=r(0);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a={name:"create-contract",components:{formContrato:n.a},created:function(){this.adminPermissions()||this.$router.push({name:"not-found"}),this.CLEAR_ERRORS(),this.CHANGE_SUBMIT_STATUS(!1),this.getVehiclesDocuments()},data:function(){return{vehicle:{number:"",department_id:"",municipality_id:"",start_date:"",end_date:"",contractor_id:"",object:"",incomes:"",details:"",user_id:"",user_second_id:"",user_third_id:"",user_four_id:"",vehicle_id:""}}},methods:c(c(c({},Object(i.b)("contracts",["createContract"])),Object(i.d)(["CHANGE_SUBMIT_STATUS","CLEAR_ERRORS"])),{},{save:function(t){var e=this;this.createContract(t).then((function(t){openNotification(),e.$router.push({name:"contratos"})})).catch((function(t){e.CHANGE_SUBMIT_STATUS(!1),openNotification("Error","No se pudieron guardar los datos","danger")}))},adminPermissions:function(){return this.abilities.includes("*")||this.abilities.includes("contratos-administracion")}}),computed:c({},Object(i.e)(["submitStatus"]))},u=r(2),d=Object(u.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-content"},[e("b-row",[e("b-col",{attrs:{md:"8","offset-md":"2"}},[e("b-overlay",{attrs:{show:this.submitStatus,rounded:"sm"}},[e("b-card",{attrs:{title:"Registrar contrato"}},[e("form-contrato",{attrs:{vehicle:this.vehicle},on:{save:this.save}})],1)],1)],1)],1)],1)}),[],!1,null,"935315c0",null);e.default=d.exports}}]);