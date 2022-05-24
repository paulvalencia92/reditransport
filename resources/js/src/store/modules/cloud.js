import axios from "axios";

export default {
    namespaced: true,
    state: {
        folders: [],
        currentFolder: {},
        users: [],
        foldersId: []
    },
    getters: {},
    mutations: {
        SET_FOLDERS(state, folders) {
            state.folders = folders;
        },
        ADD_FOLDER(state, data) {
            state.folders.push(data);
        },
        SET_CURRENT_FOLDER(state, folder) {
            state.currentFolder = folder;
        },
        UPDATE_FOLDER(state, folderUpated) {
            const index = state.folders.findIndex(folder => folder.id == folderUpated.id);
            state.folders.splice(index, 1, folderUpated);
        },
        DELETE_FOLDER(state, folderId) {
            const index = state.folders.findIndex(folder => folder.id == folderId);
            state.folders.splice(index, 1);
        },
        ADD_USERS(state, users) {
            state.users = users;
        },
        SET_FOLDERS_ID(state, ids) {
            state.foldersId = ids;
        }
    },
    actions: {
        async getFolders(context) {
            const response = await axios.get('/api/folders');
            context.commit('SET_FOLDERS', response.data);
        },
        async createFolder(context, data) {
            const response = await axios.post('/api/folders', data);
            context.commit('ADD_FOLDER', response.data);
            return Promise.resolve('success');
        },
        async updateFolder(context, data) {
            const response = await axios.put(`/api/folders/${data.id}`, data);
            context.commit('UPDATE_FOLDER', response.data);
            return Promise.resolve('success');
        },
        async deleteFolder(context, folderId) {
            const response = await axios.delete(`/api/folders/${folderId}`);
            context.commit('DELETE_FOLDER', folderId);
            return Promise.resolve(response.data);
        },
        async addFile(context, data) {
            const response = await axios.post('/api/files', data);
            return Promise.resolve('success');
        },
        async show(context, folderId) {
            const response = await axios.post(`/api/folders/${folderId}`);
            context.commit('SET_CURRENT_FOLDER', response.data);
        },
        async getUsersWithoutPermits(context, folderId) {
            const response = await axios.get(`/api/permits/${folderId}/users-without`);
            context.commit('ADD_USERS', response.data);
        },
        async getUsersWithPermits(context, folderId) {
            const response = await axios.get(`/api/permits/${folderId}/users-with`);
            context.commit('ADD_USERS', response.data);
        },
        async assignPermits(context, payload) {
            const response = await axios.post(`/api/permits`, payload);
            return Promise.resolve(response.status);
        },
        async removePermission(context, payload) {
            const response = await axios.post(`/api/permits-delete`, payload);
            return Promise.resolve(response.data);
        },
        async getMiFolders(context) {
            const response = await axios.get(`/api/my-folders`);
            context.commit('SET_FOLDERS_ID', response.data);
            return Promise.resolve(response.data);
        }

    },
};
