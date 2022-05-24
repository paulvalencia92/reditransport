import Vuex from "vuex";
import Vue from "vue";
import largeSidebar from "./modules/largeSidebar";
import compactSidebar from "./modules/compactSidebar";
import chat from "./modules/chat";
import config from "./modules/config";
import authData from "./modules/authData";
import invoice from "./modules/invoice";
import cart from "./modules/cart";
import verticalSidebar from "./modules/verticalSidebar";
import scrumboard from "./modules/scrumboard";
import auth from "./modules/auth"
import user from './modules/user'
import vehicle from './modules/vehicle'
import cities from './modules/cities'
import vehicleDocument from './modules/vehicleDocument'
import report from './modules/report'
import purshe from './modules/purshe'
import insidence from "./modules/insidence";
import contractors from "./modules/contractors";
import contracts from "./modules/contracts";
import contractRoutes from "./modules/contractRoutes";
import licenseTrans from "./modules/licenseTrans";
import map from './modules/map';
import electronicBilling from "./modules/electronicBilling";
import invoices from './modules/invoices';
import roles from './modules/roles'
import vehiclereceiptdelivery from "./modules/vehiclereceiptdelivery";
import vehicleManteinance from "./modules/vehicleManteinance";
import checkOperational from "./modules/checkOperational";
import fuec from "./modules/fuec";

import cloud from './modules/cloud'
import VuexPersistence from "vuex-persist";
import axios from "axios";
import router from "../router";

const vuexLocal = new VuexPersistence({
    store: window.localStorage,
    // modules: ['auth', 'user', 'vehicle', 'cities'],
    key: 'vuex',
    reducer(val) {
        if (val.auth.access_token === null) {
            return {}
        }
        return val
    }
});

// Load Vuex
Vue.use(Vuex);

// Create store
let store;
export default store = new Vuex.Store({
    state: {
        errorMessages: [],
        submitStatus: false
    },
    mutations: {
        CLEAR_ERRORS(state) {
            state.errorMessages = [];
        },
        CHANGE_SUBMIT_STATUS(state, status) {
            state.submitStatus = status;
        }
    },
    modules: {
        largeSidebar,
        compactSidebar,
        chat,
        config,
        authData,
        invoice,
        cart,
        verticalSidebar,
        scrumboard,
        auth,
        user,
        vehicle,
        cities,
        vehicleDocument,
        report,
        purshe,
        insidence,
        contractors,
        contracts,
        contractRoutes,
        licenseTrans,
        cloud,
        map,
        electronicBilling,
        invoices,
        roles,
        vehiclereceiptdelivery,
        vehicleManteinance,
        checkOperational,
        fuec
    },
    plugins: [vuexLocal.plugin]
});

axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.auth.access_token

axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    if (error.response.status === 401 && error.response.data.message == 'Unauthenticated.') {
        store.commit('auth/CLEAR_USER_DATA');
        router.push({name: 'login'})
    }
    return Promise.reject(error)
})
