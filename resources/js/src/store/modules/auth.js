import axios from "axios";

export default {
    namespaced: true,
    state: {
        access_token: null,
        user: null,
        abilities: [],
        role: null,
    },
    getters: {},
    mutations: {
        SET_USER_DATA(state, data) {
            state.access_token = data.access_token;
            state.user = data.user;
            state.role = data.role;
            state.abilities = data.abilities;
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.access_token;
        },
        CLEAR_USER_DATA(state, data) {
            state.access_token = null;
            state.user = null;
            state.role = null;
        },
        UPDATE_USER(state, userUpdated) {
            state.user = userUpdated;
        } ,
        UPDATE_ABILITIES(state, abilities) {
            state.abilities = abilities;
        }
    },
    actions: {
        async login(context, userData) {
            const data = {
                email: userData.email,
                password: userData.password
            }
            try {
                const response = await axios.post('/api/login', data);
                context.commit('SET_USER_DATA', response.data);
                return Promise.resolve("success");
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return errorMessages;
            }
        },
        async logout(context) {
            const response = await axios.post('/api/logout');
            context.commit('CLEAR_USER_DATA');
            return Promise.resolve(response.data);
        },
        async recoverPassword(context, email) {
            try {
                const response = await axios.post('/api/recover-password', {email})
                return Promise.resolve(response.data);
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async getMyAbilities(context, email) {
            try {
                const response = await axios.get('/api/my-abilities');
                context.commit('UPDATE_ABILITIES', response.data);
                return Promise.resolve(response.data);
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async passwordReset(context, payload) {
            try {
                const response = await axios.post('/api/password/reset', payload)
                return Promise.resolve(response.data);
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        }

    },
};
