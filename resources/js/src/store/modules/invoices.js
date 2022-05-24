import axios from "axios";

export default {
    namespaced: true,
    state: {
        invoices: []
    },
    getters: {},
    mutations: {
        SET_INVOICES(state, invoices) {
            state.invoices = invoices;
        },
        UPDATE_INVOICE(state, invoice) {
            const index = state.invoices.findIndex(item => item.id == invoice);
            state.invoices.splice(index, 1, invoice);
        }
    },
    actions: {
        async createInvoice(context, payload) {
            try {
                const response = await axios.post('/api/invoices', payload);
                return Promise.resolve(response.status);
            } catch (e) {
                const errorMessages = Object.values(e.response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject('danger');
            }
        },
        async emitInvoice(context, id) {
            try {
                const response = await axios.put(`/api/dian/emit-invoice/${id}`);
                if (response.data.errors) {
                    const errorMessages = Object.values(response.data.errors);
                    context.rootState.errorMessages = errorMessages;
                    return Promise.reject(response.data.errors);
                }
                context.commit('UPDATE_INVOICE', response.data.invoice);
                return Promise.resolve(response.data.message);
            } catch (e) {
                return Promise.reject(e.message);
            }

        },
        async emitCreditNote(context, id) {
            try {
                const response = await axios.put('/api/dian/credit-notes/' + id);
                context.commit('UPDATE_INVOICE', response.data.invoice);
                return Promise.resolve(response.data.message);
            } catch (e) {
                return Promise.reject(e.message);
            }
        },
        async emitDebitNote(context, id) {
            try {
                const response = await axios.put('/api/dian/debit-notes/' + id);
                if (response.data.errors) {
                    const errorMessages = Object.values(response.data.errors);
                    context.rootState.errorMessages = errorMessages;
                    return Promise.reject(response.data.errors);
                }
                context.commit('UPDATE_INVOICE', response.data.invoice);
                return Promise.resolve(response.data.message);
            } catch (e) {
                return Promise.reject(e.message);
            }
        },
        async getInvoices(context) {
            const response = await axios.get('/api/dian/invoices');
            if (response.data.errors) {
                const errorMessages = Object.values(response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject(response.data.errors);
            }
            context.commit('SET_INVOICES', response.data);
        },
        async getInvoiceByType(context, payload) {
            const response = await axios.post('/api/invoices-by-type', payload);
            if (response.data.errors) {
                const errorMessages = Object.values(response.data.errors);
                context.rootState.errorMessages = errorMessages;
                return Promise.reject(response.data.errors);
            }
            context.commit('SET_INVOICES', response.data);
        },
        async getLatestInvoice(context, type_document_id) {
            const response = await axios.get('/api/lates-invoice', {params: {type_document_id}});
            return Promise.resolve(response.data);
        },
    },
};
