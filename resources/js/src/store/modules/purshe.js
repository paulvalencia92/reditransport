import axios from "axios";

export default {
    namespaced: true,
    state: {
        purshes: [],
        purshes_pay: []
    },
    getters: {},
    mutations: {
        ADD_PURSHE(state, purshe) {
            state.purshes.push(purshe);
        },
        SET_PURSHES(state, purshes) {
            state.purshes = purshes;
        },
        SET_PURSHES_PAY(state, purshes) {
            state.purshes_pay = purshes;
        },
        DELETE_PURSHE(state, userId) {
            const index = state.purshes.findIndex(user => user.id == userId);
            state.purshes.splice(index, 1);
        },
    },
    actions: {
        async getPurshes(context, data) {
            const response = await axios.get('/api/purshes', {params: data});
            context.commit('SET_PURSHES', response.data.data);
            return Promise.resolve(response.data);
        },
        async searchPurshes(context, data) {
            const response = await axios.get('/api/purshes-search', {params: data});
            context.commit('SET_PURSHES', response.data);
            return Promise.resolve(response.data);
        },
        async getMyPurshes(context, data) {
            const response = await axios.get('/api/my-purshes', {params: {status_pay: data}});
            context.commit('SET_PURSHES', response.data);
        },
        async createPurshe(context, purshe) {
            try {
                const response = await axios.post('/api/purshes', purshe);
                context.commit('ADD_PURSHE', response.data);
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async saveFilePurshe({dispatch}, payload) {
            payload.append('_method', 'PATCH')
            const response = await axios.post(`/api/my-purshes-file/${payload.get('id')}`, payload);
            payload = {page: 1, status_pay: 'No pago'};
            dispatch('getPurshes', payload);
            // dispatch('getMyPurshes');
        },

        async toggleStatus({dispatch}, data) {
            const response = await axios.patch(`/api/purshes/${data.id}/toggleStatus`, data);
            let payload = {page: 1, status_pay: 'No pago'};
            dispatch('getPurshes', payload);
        },
        async deletePurche(context, id) {
            try {
                const response = await axios.delete(`/api/purshes/${id}/delete`);
                context.commit('DELETE_PURSHE', id)
                return id
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async getPurchesToPay(context) {
            const response = await axios.get('/api/purshes-status');
            context.commit('SET_PURSHES_PAY', response.data);
            return Promise.resolve(response.data);
        },
    },
};
