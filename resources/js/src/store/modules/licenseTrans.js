import axios from "axios";

export default {
    namespaced: true,
    state: {
        myLicense: [],
        licenses: []
    },
    getters: {},
    mutations: {
        SET_MY_LICENCE(state, data) {
            state.myLicense = data;
        },
        SET_LICENSES(state, licenses) {
            state.licenses = licenses;
        },
        DELETE_LICENCE(state, userId) {
            const index = state.licenses.findIndex(user => user.id == userId);
            state.contracts.splice(index, 1);
        },
    },
    actions: {
        async getLicenses(context, payload) {
            const response = await axios.get(`/api/license-trans`, {params: payload});
            context.commit('SET_LICENSES', response.data.data);
            return Promise.resolve(response.data.total);
        },
        async getMyLicense(context) {
            const response = await axios.get('/api/my-license');
            context.commit('SET_MY_LICENCE', response.data);
            return Promise.resolve('success');
        },
        async createLicense(context, license) {
            try {
                const response = await axios.post('/api/license-trans', license);
                context.commit('SET_MY_LICENCE', response.data);
                return Promise.resolve('success');
            } catch (e) {

            }
        },
        async deleteLicence(context, id) {
            try {
                const response = await axios.delete(`/api/license-trans/delete/${id}`);
                return id
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
    },
};
