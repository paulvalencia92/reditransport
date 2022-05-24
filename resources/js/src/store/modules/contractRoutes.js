import axios from "axios";

export default {
    namespaced: true,
    state: {
        routes: [],
    },
    getters: {
        getRoutesCoords (state) {
            const places = []
            state.routes.map(place => {
                places.push({name: place.from, coord: JSON.parse(place.center_from)})
                places.push({name: place.from, coord: JSON.parse(place.center_to)})
            })
            return places
        }
    },
    mutations: {
        SET_ROUTES(state, users) {
            state.routes = users;
        },
        ADD_ROUTE(state, user) {
            state.routes.push(user);
        },
        UPDATE_ROUTE(state, userUpdated) {
            const index = state.routes.findIndex(user => user.id == userUpdated.id);
            state.routes.splice(index, 1, userUpdated);
        },
        DELETE_ROUTE(state, userId) {
            const index = state.routes.findIndex(user => user.id == userId);
            state.routes.splice(index, 1);
        },
        CLEAN_ROUTES(state) {
            state.routes = null
        }
    },
    actions: {
        async cleanRoute (context) {
            context.commit('CLEAN_ROUTES')
            return 'success'
        },
        async getRoutes(context, driver) {
            const response = await axios.get(`/api/contract-routes/${driver}`);
            context.commit('SET_ROUTES', response.data);
        },
        async createRoute(context, driver) {
            try {
                const response = await axios.post('/api/contract-routes', driver);
                context.commit('ADD_ROUTE', response.data);
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }

        },
        async updateRoute(context, driver) {
            try {
                const response = await axios.put(`/api/contract-routes/${driver.id}/update`, driver);
                context.commit('UPDATE_ROUTE', response.data);
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },

        async deleteRoute(context, userId) {
            try {
                const response = await axios.delete(`/api/contract-routes/${userId}/delete`);
                context.commit('DELETE_ROUTE', userId);
                return Promise.resolve(response.data);
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        }
    },
};
