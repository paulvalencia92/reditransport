import axios from "axios";

export default {
    namespaced: true,
    state: {
        incidences: [],
    },
    getters: {},
    mutations: {
        ADD_INCIDENCE(state, incidence) {
            state.incidences.push(incidence)
        },
        SET_INCIDENCES(state, incidences) {
            state.incidences = incidences;
        },
        UPDATE_INCIDENCE(state, incidenceUpdated) {
            const index = state.incidences.findIndex(incidence => incidence.id == incidenceUpdated.id);
            state.incidences.splice(index, 1, incidenceUpdated);
        },
        DELETE_INCIDENCE(state, incidenceId) {
            const index = state.incidences.findIndex(incidence => incidence.id == incidenceId);
            state.incidences.splice(index, 1);
        }
    },
    actions: {
        async getInsidences(context) {
            const response = await axios.get('/api/incidences');
            context.commit('SET_INCIDENCES', response.data);
        },
        async createIncidence(context, incidence) {
            try {
                const response = await axios.post('/api/incidences', incidence);
                context.commit('ADD_INCIDENCE', response.data);
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async updateIncidence(context, incidence) {
            try {
                const response = await axios.put(`/api/incidences/${incidence.id}`, incidence);
                context.commit('UPDATE_INCIDENCE', response.data);
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async deleteIncidence(context, incidenceId) {
            await axios.delete(`/api/incidences/${incidenceId}`);
            context.commit('DELETE_INCIDENCE', incidenceId);
        }

    },
};
