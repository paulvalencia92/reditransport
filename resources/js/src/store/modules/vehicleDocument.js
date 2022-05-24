import axios from "axios";

export default {
    namespaced: true,
    state: {
        vehiclesDocuments: [],
    },
    getters: {
        types() {
            return [
                {value: 'PREVENTIVA', text: 'PREVENTIVA'},
                {value: 'SOAT', text: 'SOAT'},
                {value: 'CONTRACTUAL', text: 'CONTRACTUAL'},
                {value: 'EXTRA-CONTRACTUAL', text: 'EXTRA-CONTRACTUAL'},
                {value: 'TARJETA OPERACIONES', text: 'TARJETA OPERACIONES'},
                {value: 'TECNOMECANICA', text: 'TECNOMECANICA'},
                {value: 'BOTIQUIN', text: 'BOTIQUIN'},
                {value: 'EXTINTOR', text: 'EXTINTOR'},
                {value: 'PREOPERACIONAL', text: 'PREOPERACIONAL'}
            ]
        }
    },
    mutations: {
        SET_VEHICLES_DOCUMENTS(state, vehicleDocuments) {
            state.vehiclesDocuments = vehicleDocuments;
        },
        ADD_DOCUMENT(state, document) {
            const vehicle = state.vehiclesDocuments.find(vehicle => vehicle.id == document.vehicle_id);
            vehicle.documentations.push(document);
        },
        UPDATE_DOCUMENT(state, documentUpdated) {
            const vehicle = state.vehiclesDocuments.find(vehicle => vehicle.id == documentUpdated.vehicle_id);
            const index = vehicle.documentations.findIndex(document => document.id == documentUpdated.id);
            vehicle.documentations.splice(index, 1, documentUpdated);

        }
    },
    actions: {
        async getVehiclesDocuments(context, payload) {
            const response = await axios.get('/api/vehicle-document', {params: payload});
            context.commit('SET_VEHICLES_DOCUMENTS', response.data.data);
            return Promise.resolve(response.data.total);
        },
        async getVehiclesDocumentsByPlate(context, data) {
            const response = await axios.get(`/api/vehicle-document/byPlate/${data}`);
            context.commit('SET_VEHICLES_DOCUMENTS', response.data);
        },
        async saveVehicleDocument(context, document) {
            try {
                const response = await axios.post('/api/vehicle-document', document);
                context.commit('ADD_DOCUMENT', response.data)
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async updateVehicleDocument(context, document) {
            try {
                document.append('_method', 'PUT')
                const response = await axios.post(`/api/vehicle-document/${document.get('id')}`, document);
                context.commit('UPDATE_DOCUMENT', response.data)
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        }

    },
};
