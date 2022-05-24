import axios from "axios";

export default {
    namespaced: true,
    state: {
        maintenances: []
    },
    getters: {},
    mutations: {
        SET_ITEMS(state, items) {
            state.maintenances = items;
        }
    },
    actions: {
        async registerManteninace(context, payload) {
            const response = await axios.post('/api/vehicle-maintenances', payload);
        },
        async getVehicleManteninace(context, payload) {
            const response = await axios.get('/api/vehicle-maintenances', {params: payload});
            if (!response.data.data.length) {
                openNotification('No hay informacion', 'No se encontraron datos con los terminos de busqueda escritos', 'warning')
            }
            context.commit('SET_ITEMS', response.data.data);
            return Promise.resolve(response.data.total);
        }

    },
};
