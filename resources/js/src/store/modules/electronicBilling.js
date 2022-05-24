import axios from "axios";

export default {
    namespaced: true,
    state: {
        resolutions: [],
    },
    getters: {
        typesDocumentIdentification() {
            return [
                {value: '1', text: 'Registro civil'},
                {value: '2', text: 'Tarjeta de identidad'},
                {value: '3', text: 'Cédula de ciudadanía'},
                {value: '4', text: 'Tarjeta de extranjería'},
                {value: '5', text: 'Cédula de extranjería'},
                {value: '6', text: 'NIT'},
                {value: '7', text: 'Pasaporte'},
                {value: '8', text: 'Documento de identificación extranjero'},
                {value: '9', text: 'NIT de otro país'},
                {value: '10', text: 'NUIP *'},
                {value: '11', text: 'PEP'},
            ]
        },
        typeOrganization() {
            return [
                {value: '33', text: 'Nota Débito para facturación electrónica V1 (Decreto 2242)'},
                {value: '32', text: 'Nota Débito sin referencia a facturas'},
                {value: '30', text: 'Nota Débito que referencia una factura electrónica'},
                {value: '23', text: 'Nota Crédito para facturación electrónica V1 (Decreto 2242)'},
                {value: '22', text: 'Nota Crédito sin referencia a facturas'},
                {value: '09', text: 'AIU'},
                {value: '10', text: 'Estandar'},
                {value: '11', text: 'Mandatos bienes'},
                {value: '20', text: 'Nota Crédito que referencia una factura electrónica'},
                {value: '01', text: 'Combustibles'},
                {value: '02', text: 'Emisor es Autorretenedor'},
                {value: '03', text: 'Excluidos y Exentos'},
                {value: '04', text: 'Exportación'},
                {value: '05', text: 'Genérica'},
                {value: '06', text: 'Genérica con pago anticipado'},
                {value: '07', text: 'Genérica con periodo de facturacion'},
                {value: '08', text: 'Consorcio'},
                {value: '12', text: 'Mandatos Servicios'},
                {value: '13', text: 'Cambiario'},
            ]
        },
        typesInvoices() {
            return [
                {value: '1', text: 'Factura de Venta Nacional'},
                {value: '12', text: 'Factura electrónica de Venta - tipo 04'},
            ];
        },
        typesInvoicesResolution() {
            return [
                {value: '1', text: 'Factura de Venta Nacional'},
                {value: '4', text: 'Nota Crédito'},
                {value: '5', text: 'Nota Débito'},
                {value: '6', text: 'ZIP'},
                {value: '9', text: 'Nomina Individual'},
            ];
        },

    },
    mutations: {
        SET_RESOLUTIONS(state, resolutions = []) {
            state.resolutions = resolutions;
        }
    },
    actions: {

        async getInfoCompany() {
            const response = await axios.get('/api/dian/config');
            return Promise.resolve(response.data);
        },

        async registerAsACompany(context, payload) {
            const response = await axios.post('/api/dian/config', payload);
            if (response.data.errors) {
                const errorMessages = Object.values(response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('error');

            }
            return Promise.resolve(response.data);
        },
        async registerSoftware(context, payload) {
            const response = await axios.post('/api/dian/config-software', payload);
            if (response.data.errors) {
                const errorMessages = Object.values(response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('error');

            }
            return Promise.resolve(response.data);
        },
        async registerCertificate(context, payload) {
            const response = await axios.post('/api/dian/config-certificate', payload);
            if (response.data.errors) {
                const errorMessages = Object.values(response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject(response.data.errors);

            }
            return Promise.resolve(response.data);
        },
        async registerResolution(context, payload) {
            const response = await axios.post('/api/dian/config-resolution', payload);
            if (response.data.errors) {
                const errorMessages = Object.values(response.data.errors);
                return Promise.reject(errorMessages);
            }
            return Promise.resolve(response.data);
        },
        async getResolutions(context) {
            const response = await axios.get('/api/dian/resolutions');
            context.commit('SET_RESOLUTIONS', response.data);
        },
        async deleteResolution(context, id) {
            const response = await axios.post('/api/dian/delete-resolution', {id});
            return Promise.resolve(200);
        },


        async getPaymentMethods() {
            const response = await axios.get('/api/dian/payment-methods');
            return Promise.resolve(response.data);
        },
        async getResolution(context, type_document_id) {
            const response = await axios.get('/api/dian/resolution', {params: {type_document_id}});
            if (!response.data.length) {
                context.commit('SET_RESOLUTIONS');
                this.resolutions = [];
                openNotification('Error', 'No hay una resolucion activa para este tipo de factura', 'danger');
                return;
            }
            context.commit('SET_RESOLUTIONS', response.data);
        }

    },
};
