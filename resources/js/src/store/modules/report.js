import axios from "axios";

export default {
    namespaced: true,
    state: {
        vehicles: [],
        affiliates: [],
        documents: [],
        request: {}
    },
    getters: {},
    mutations: {
        SET_REPORT_VEHICLES(state, data) {
            state.vehicles = data;
        },
        SET_FILTERED_USERS(state, data) {
            state.affiliates = data;
        },
        SET_FILTERED_DOCUMENTS(state, data) {
            state.documents = data;
        },
        ADD_REQUEST(state, request) {
            state.request = request;
        },
        CLEAR_DATA(state, model) {
            state[model] = [];
        }
    },
    actions: {
        async getReportVehicles(context, payload) {
            const response = await axios.get('/api/reports-vehicles', {params: payload});
            if (response.data.length) {
                openNotification('Busqueda realizada', `Se encontraron ${response.data.length} registros`, 'success')
            } else {
                openNotification('Busqueda realizada', 'No se encontraron registros', 'danger')
            }
            context.commit('SET_REPORT_VEHICLES', response.data);
        },
        async getReportAffiliates(context, payload) {
            const response = await axios.get('/api/reports-affiliates', {params: payload});
            if (response.data.length) {
                openNotification('Busqueda realizada', `Se encontraron ${response.data.length} registros`, 'success')
            } else {
                openNotification('Busqueda realizada', 'No se encontraron registros', 'danger')
            }
            context.commit('SET_FILTERED_USERS', response.data);
        },
        async getReportDocuments(context, payload) {
            const response = await axios.get('/api/reports-documents', {params: payload});
            if (response.data.length) {
                openNotification('Busqueda realizada', `Se encontraron ${response.data.length} registros`, 'success')
            } else {
                openNotification('Busqueda realizada', 'No se encontraron registros', 'danger')
            }
            context.commit('SET_FILTERED_DOCUMENTS', response.data);
        }

    },
};
