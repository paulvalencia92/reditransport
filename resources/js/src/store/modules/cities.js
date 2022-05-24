import axios from "axios";

export default {
    namespaced: true,
    state: {
        departments: [],
        municipalities: []
    },
    getters: {},
    mutations: {
        SET_DEPARTMENTS(state, departments) {
            state.departments = departments
        },
        SET_MUNICIPALITIES(state, municipalities) {
            state.municipalities = municipalities
        }
    },
    actions: {
        async getDepartments({commit}) {
            const response = await axios.get('/api/departments');
            commit('SET_DEPARTMENTS', response.data)
        },
        async getMunicipalitiesForDepartment({commit}, departmentId) {
            const response = await axios.get('/api/municipalities', {params: {departmentId: departmentId}});
            commit('SET_MUNICIPALITIES', response.data)
        },

    },
};
