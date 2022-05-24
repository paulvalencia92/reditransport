import Vue from "vue";
import App from "./src/App"
import router from "./src/router";
import GullKit from "./src/plugins/gull.kit";
import SelectSearch from './src/plugins/selectSearch'
import store from "./src/store";
import Breadcumb from "./src/components/breadcumb";
import firebase from "firebase/app";
import "firebase/auth";
import {firebaseSettings} from "./src/data/config";
import i18n from "./src/lang/lang";
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import "font-awesome/css/font-awesome.min.css";
import 'vue-search-select/dist/VueSearchSelect.css'
import "./src/helpers"
import "./src/filters"

//defined as global component
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);

Vue.component("breadcumb", Breadcumb);
import InstantSearch from 'vue-instantsearch';
// Vue.use(VueRouter);


Vue.use(InstantSearch);
Vue.use(GullKit);

firebase.initializeApp(firebaseSettings);

Vue.config.productionTip = false;

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoicmVkaXRyYW5zcG9ydCIsImEiOiJja3phbGpnaWQyNTlmMnVueGl1bHkyaDd6In0.KBYsYJKOQSR1NN-bOdNlUA';


// END PLANTILLA
require('./bootstrap');

window.Vue = require('vue');


// Vue.component('example-component', require('./src/ExampleComponent.vue').default);
Vue.component('card-error-validation', require('./src/components/global/CardErrorValidation').default);

const app = new Vue({
    store,
    router,
    i18n,
    render: h => h(App)
}).$mount("#app");

// success,danger
window.openNotification = function (title = 'Información almacenada', text = 'Los datos han sido guardados exitosamente', variant = 'success',   autoHideDelay = 5000) {

    app.$bvToast.toast(text, {
        title: title,
        variant: variant,
        solid: true,
        autoHideDelay,
    });

}
