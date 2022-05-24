import axios from "axios";

export default {
    namespaced: true,
    state: {
        vehicles: [],
    },
    getters: {
        settledCities() {
            return [
                {value: 'Acacias', text: 'Acacias'},
                {value: 'Aguachica', text: 'Aguachica'},
                {value: 'Barranquilla', text: 'Barranquilla'},
                {value: 'Bogota', text: 'Bogota'},
                {value: 'Bucaramanga', text: 'Bucaramanga'},
                {value: 'Cali', text: 'Cali'},
                {value: 'Cartagena', text: 'Cartagena'},
                {value: 'Cucuta', text: 'Cucuta'},
                {value: 'El Reten (Mag)', text: 'El Reten (Mag)'},
                {value: 'Fundación', text: 'Fundación'},
                {value: 'Generico', text: 'Generico'},
                {value: 'Ibague', text: 'Ibague'},
                {value: 'Medellin', text: 'Medellin'},
                {value: 'Rioacha', text: 'Rioacha'},
                {value: 'Santa Marta', text: 'Santa Marta'},
                {value: 'Valledupar', text: 'Valledupar'},
                {value: 'Villavicencio', text: 'Villavicencio'},
            ];
        },
        cylinders() {
            let cylinders = [];
            for (let i = 1000; i <= 6000; i += 100) {
                cylinders.push({value: i, text: i})
            }
            return cylinders;
        },
        vehicleOptions(state) {
            return state.vehicles.map(vehicle => {
                return {text: vehicle.car_plate, value: vehicle.id}
            })
        }
    },
    mutations: {
        ADD_VEHICLE(state, vehicle) {
            state.vehicles.push(vehicle);
        },
        SET_VEHICLES(state, vehicles) {
            state.vehicles = vehicles;
        },
        UPDATE_VEHICLE(state, vehicleUpdated) {
            const index = state.vehicles.findIndex(vehicle => vehicle.id == vehicleUpdated.id);
            state.vehicles.splice(index, 1, vehicleUpdated);
        },
        DELETE_VEHICLE(state, vehicleId) {
            const index = state.vehicles.findIndex(vehicle => vehicle.id == vehicleId);
            state.vehicles.splice(index, 1);
        },
    },
    actions: {
        async createVehicle(context, vehicle) {
            try {
                const response = await axios.post('/api/vehicles', vehicle);
                context.commit('ADD_VEHICLE', response.data);
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async getVehicles(context, payload) {
            const response = await axios.get('/api/vehicles', {params: payload});
            console.log(response.data)
            if (!response.data.data.length) {
                openNotification('No hay informacion', 'No se encontraron datos con los terminos de busqueda escritos', 'warning')
            }
            context.commit('SET_VEHICLES', response.data.data);
            return Promise.resolve(response.data.total);
        },
        async getVehiclesByPlate(context, data) {
            const response = await axios.get(`/api/vehicles/byPlate/${data}`);
            if (!response.data.length) {
                openNotification('No hay informacion', 'No se encontraron datos con los terminos de busqueda escritos', 'warning')
            }
            context.commit('SET_VEHICLES', response.data);
            return Promise.resolve(response.data[0]);
        },
        async getMyVehicles(context) {
            const response = await axios.get('/api/my-vehicles');
            context.commit('SET_VEHICLES', response.data);
        },
        async getVehiclesByCustomer(context, id) {
            const response = await axios.get('/api/vehicles-by-customer/' + id);
            context.commit('SET_VEHICLES', response.data);
        },
        async updateVehicle(context, vehicle) {
            try {
                const response = await axios.put(`/api/vehicles/${vehicle.id}`, vehicle);
                context.commit('UPDATE_VEHICLE', response.data);
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },

        async deleteVehicle(context, vehicleId) {
            try {
                const response = await axios.delete(`/api/vehicles/${vehicleId}`);
                context.commit('DELETE_VEHICLE', vehicleId);
                return Promise.resolve(response.data);
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async unlink(context, vehicleId) {
            try {
                const response = await axios.patch(`/api/vehicles/${vehicleId}/unlink`);
                context.commit('UPDATE_VEHICLE', response.data);
                return Promise.resolve('success');
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        }

    },
};
