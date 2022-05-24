import axios from "axios";

export default {
    namespaced: true,
    state: {
        users: [],
    },
    getters: {
        userOptions(state) {
            return state.users.map(user => {
                return {text: user.full_name, value: user.id}
            })
        },
        customerOptions(state) {
            return state.users.map(item => {
                return {text: item.name, value: item.user_id}
            })
        }
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        ADD_USER(state, user) {
            state.users.push(user);
        },
        UPDATE_USER(state, userUpdated) {
            const index = state.users.findIndex(user => user.id == userUpdated.id);
            state.users.splice(index, 1, userUpdated);
        },
        DELETE_USER(state, userId) {
            const index = state.users.findIndex(user => user.id == userId);
            state.users.splice(index, 1);
        },
    },
    actions: {
        async getUsers(context, payload) {
            const response = await axios.get('/api/users', {params: payload});
            context.commit('SET_USERS', response.data.data);
            return Promise.resolve(response.data.total);
        },
        async getCustomers(context) {
            const response = await axios.get('/api/customers');
            if (!response.data.length) {
                openNotification(
                    'No se puede generar una factura',
                    'Primero debes registrar un cliente, desde el perfil del usuario en la pestaña facturación',
                    'warning',
                    10000);
                return;
            }
            context.commit('SET_USERS', response.data);
        },
        async getUsersDoesntHaveVehicle(context, vehicle_id) {
            const response = await axios.get('/api/users/doesnthave-vehicles', {params: {vehicle_id}});
            context.commit('SET_USERS', response.data);
        },
        async getUsersVehicle(context, id) {
            const response = await axios.get(`/api/users/byVehicle/${id}`);
            context.commit('SET_USERS', response.data);
        },
        async createUser(context, driver) {
            try {
                const response = await axios.post('/api/users', driver);
                context.commit('ADD_USER', response.data);
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async createCustomer(context, customer) {
            try {
                const response = await axios.post('/api/customers', customer);
                return Promise.resolve(response.data);
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async updateUser(context, driver) {
            try {
                const response = await axios.put(`/api/users/${driver.id}`, driver);
                context.commit('UPDATE_USER', response.data);
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async updatePhoto(context, driver) {
            try {
                const response = await axios.post('/api/users/update-photo', driver);
                return response.data;
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async deleteUser(context, userId) {
            try {
                const response = await axios.delete(`/api/users/${userId}`);
                context.commit('DELETE_USER', userId);
                return Promise.resolve(response.data);
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async changePassword(state, payload) {
            const response = await axios.patch(`/api/users/${payload.userId}/change-password`, {password: payload.password});
            return Promise.resolve('success');
        },

        async changeMyPassword(context, payload) {
            try {
                const response = await axios.post(`/api/users-change-password`, payload);
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }

        }


    },
};
