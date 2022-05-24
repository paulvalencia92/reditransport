import axios from "axios";

export default {
    namespaced: true,
    state: {
        contracts: [],
        contract: null
    },
    getters: {},
    mutations: {
        SET_CONTRACTS(state, users) {
            state.contracts = users;
        },
        SET_CONTRACT(state, users) {
            state.contract = users;
        },
        ADD_CONTRACT(state, user) {
            state.contracts.push(user);
        },
        UPDATE_CONTRACT(state, userUpdated) {
            const index = state.contracts.findIndex(user => user.id == userUpdated.id);
            state.contracts.splice(index, 1, userUpdated);
        },
        DELETE_CONTRACT(state, userId) {
            const index = state.contracts.findIndex(user => user.id == userId);
            state.contracts.splice(index, 1);
        },
    },
    actions: {
        async getContracts(context, payload) {
            const response = await axios.get('/api/contracts', {params: payload});
            context.commit('SET_CONTRACTS', response.data.data);
            console.log(response.data)
            return Promise.resolve(response.data.total);
        },
        async myContracts(context) {
            const response = await axios.get('/api/my-contracts');
            console.log(response.data)
            context.commit('SET_CONTRACTS', response.data);
        },
        async getContractsByUser(context, id) {
            const response = await axios.get(`/api/contracts/user/${id}`);
            context.commit('SET_CONTRACTS', response.data);
        },
        async checkDocuments(context, id) {
            const response = await axios.get(`/api/contracts/check-document/${id}`);
            return response.data;
        },
        async createContract(context, driver) {
            try {
                const response = await axios.post('/api/contracts', driver);
                context.commit('ADD_CONTRACT', response.data);
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async updateContract(context, driver) {
            try {
                const response = await axios.put(`/api/contracts/${driver.id}/update`, driver);
                context.commit('UPDATE_CONTRACT', response.data);
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },

        async deleteContract(context, userId) {
            try {
                const response = await axios.delete(`/api/contracts/${userId}/delete`);
                context.commit('DELETE_CONTRACT', userId);
                return Promise.resolve(response.data);
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async getContract(context, userId) {
            const response = await axios.get(`/api/contract/${userId}/show`);
            context.commit('SET_CONTRACT', response.data);
        },
        async createContractsWithContracts(context, payload) {
            const response = await axios.post(`/api/contracts-contractors`, payload);
        }
    },
};
