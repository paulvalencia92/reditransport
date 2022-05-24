import axios from "axios";

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        itemsGetters() {
            return [
                {
                    title: 'Llantas (labrado y presion)',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Apriete de pernos',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Amortiguadores y/o Ballestas',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Funcionamiento de Luces',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Goteos o perdidas de aceite combustible o aire',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Puertas y bodegas',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Latoneria y Pintura',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Drenar Trampa de Combustible',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Nivel de aceite del motor',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Estado de Correas y Poleas',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Nivel Liquido Refrigerante',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Nivel Liquido del Hidraulico de la Direccion',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Existensia y ajuste de tapas',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Movimiento y suavidad del volante',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Funcionamiento del freno de estacionamiento',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Retrovisores,limpiabrisas, bocina y conmutacion de luces',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Equipo de Carretera',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Extintor',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Botiquin',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Cinturones de Seguridad',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Nivel de combustible y cantidad que se encuentra en los tanques',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Aseo, confort y comodidad (Sillas, ventanas, pasillos, A/A entre otros) luego de encender el vehiculo.',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Luces de alerta apagadas.',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Pedal del embrague en su recorrido y funcionamiento.',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },
                {
                    title: 'Ruidos extraños y color gases de escape',
                    subitems: [
                        {
                            day: 'L',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'M',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'MI',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'J',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'V',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'S',
                            b: null,
                            m: null,
                        },
                        {
                            day: 'D',
                            b: null,
                            m: null,
                        },
                    ]
                },

            ]
        }
    },
    mutations: {
        SET_ITEMS(state, items) {
            state.items = items;
        }
    },
    actions: {
        async createCheck(context, payload) {
            const response = await axios.post('/api/vehicle-check-operational', payload);
            return Promise.resolve(response.data);
        },
        async updateCheck(context, payload) {
            const response = await axios.put('/api/vehicle-check-operational-update/' + payload.id, payload);
            return Promise.resolve(response.data);
        },
        async getCheckOperDetail(context, id) {
            const response = await axios.post('/api/vehicle-check-operational-detail/' + id);
            return Promise.resolve(response.data);
        },
        async getVehicleCheckOper(context, payload) {
            const response = await axios.get('/api/vehicle-check-operational', {params: payload});
            if (!response.data.data.length) {
                openNotification('No hay informacion', 'No se encontraron datos con los terminos de busqueda escritos', 'warning');
                context.commit('SET_ITEMS', []);
                return
            }
            context.commit('SET_ITEMS', response.data.data);
            return Promise.resolve(response.data.total);
        }

    },
};
