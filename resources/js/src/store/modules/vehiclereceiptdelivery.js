import axios from "axios";

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        items() {
            return [
                {
                    title: 'DESCRIPCIÓN',
                    subitems: [
                        {
                            name: 'Estribo izquierdo',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Antena',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Barra antivuelco',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Boceles',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Bomper delantero',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Bomper trasero',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Brazo limpiabrisas',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Cocuyo derecho',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Cocuyo izquierdo',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Copas',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Emblemas',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Encendedor',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Espejo retrovisor derecho',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Espejo retrovisor izquierdo',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Estado general latonería y pintura',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Estribo derecho',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Exploradoras',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Forros',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Guarda fangos lado derecho',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Guarda fangos lado izquierdo',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Lava vidrios',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Luces corrientes',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Luces de parqueo',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Luces delanteras',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Luces direccionales',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Luz de freno',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Luz de techo',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Llanta de repuesto',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Llantas',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Manijas exteriores',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Nivel de aceite',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Nivel de agua',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'CHIP',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Panoramico delantero',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Panoramico trasero',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Parasoles',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Pasta luces delanteras',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Pasta luces traseras',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Persianas',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Pito',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Plumillas limpiavidrios',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Puertas lado izquierdo y Derecho',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Radio musical y parlantes',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Rines y Rueda libre',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Stop derecho',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Stop izquierdo',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Tapetes',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Tapicería',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Vidrio/lat/del/derecho',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Vidrio/lat/del/izquierdo',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Vidrio/lat/tra/derecho',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Vidrio/lat/tra/izquierdo',
                            q: '',
                            b: '',
                            m: '',
                        },
                    ]
                },
                {
                    title: 'HERRAMIENTAS',
                    subitems: [
                        {
                            name: 'Alicate',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Cables de ignición',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Destornillador de estrella grande',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Destornillador de pala grande',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Extintor',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Gato y palanca',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Juego de llaves milimetricas',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Linterna ',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Llave  o copa de pernos',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Llave expansiva',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Manguera de aire',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Tacos',
                            q: '',
                            b: '',
                            m: '',
                        },
                        {
                            name: 'Triangulos',
                            q: '',
                            b: '',
                            m: '',
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
        async createVehicleReceiptDelivery(context, payload) {
            const response = axios.post('/api/vehicle-receipt-deliveries', payload);
        },
        async getVehiclesReceiptDeliveries(context, payload) {
            const response = await axios.get('/api/vehicle-receipt-deliveries', {params: payload});
            console.log(response.data.data)
            if (!response.data.data.length) {
                openNotification('No hay informacion', 'No se encontraron datos con los terminos de busqueda escritos', 'warning')
            }
            context.commit('SET_ITEMS', response.data.data);
            return Promise.resolve(response.data.total);
        }

    },
};
