import axios from "axios";

export default {
    namespaced: true,
    state: {
        contractors: [],
    },
    getters: {
        contractorOptions(state) {
            return state.contractors.map(vehicle => {
                return {text: vehicle.contractor + ' | ' + vehicle.nit, value: vehicle.id}
            })
        }
    },
    mutations: {
        SET_CONTRACTORS(state, users) {
            state.contractors = users;
        },
        ADD_CONTRACTOR(state, user) {
            state.contractors.push(user);
        },
        UPDATE_CONTRACTOR(state, userUpdated) {
            const index = state.contractors.findIndex(user => user.id == userUpdated.id);
            state.contractors.splice(index, 1, userUpdated);
        },
        DELETE_CONTRACTOR(state, userId) {
            const index = state.contractors.findIndex(user => user.id == userId);
            state.contractors.splice(index, 1);
        },
    },
    actions: {
        async getContractors(context, payload) {
            const response = await axios.get('/api/contractors', {params: payload});
            context.commit('SET_CONTRACTORS', response.data.data);
            return Promise.resolve(response.data.total);
        },
        async createContractor(context, driver) {
            try {
                const response = await axios.post('/api/contractors', driver);
                context.commit('ADD_CONTRACTOR', response.data);
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }

        },
        async updateContractor(context, driver) {
            try {
                const response = await axios.put(`/api/contractors/${driver.id}/update`, driver);
                context.commit('UPDATE_CONTRACTOR', response.data);
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },

        async deleteContractor(context, userId) {
            try {
                const response = await axios.delete(`/api/contractors/${userId}/delete`);
                context.commit('DELETE_CONTRACTOR', userId);
                return Promise.resolve(response.data);
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        }
    },
};
