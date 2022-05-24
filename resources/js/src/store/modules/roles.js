import axios from 'axios'
import {findIndex} from 'lodash'

export default {
    namespaced: true,
    state: {
        roles: [],
        _role: {},
        skills: [],
        roles_options: JSON.parse(localStorage.getItem("roles_options")) || null,

    },
    getters: {
        rolesWithouthSkills(state) {
            const roles = state.roles.filter(role => {
                return {value: role.name, text: role.title}
            })
            return roles;
        },
        roleOptions(state){
            return state.roles.map(rol => {
                return {value: rol.name, text: rol.title}
            })
        }
    },
    mutations: {
        SET_ROLES(state, roles) {
            state.roles = roles;
            const roles_options = [];

            state.roles.forEach(role => {
                roles_options.push({value: role.name, text: role.title})

            });

            state.roles_options = roles_options;

        },
        SET_ROLE(state, roleId) {
            let role = state.roles.find(role => role.id == roleId);
            state._role = role;
        },
        SET_ABILITIES(state, abilities) {
            state.skills = abilities;
        },
        UPDATE_ROLE(state, roleUpdated) {
            let index = findIndex(state.roles, role => role.id == roleUpdated)
        },
        ATTACH_ROLE(state, role) {
            state.roles.push(role);
        }
    },
    actions: {
        async getRoles(context) {
            try {
                const response = await axios.get('/api/roles');
                const roles = await response.data;
                context.commit('SET_ROLES', roles);
                return Promise.resolve(roles[0]);
            } catch (e) {
                return Promise.reject(e)
            }
        },

        async createRole(context, role) {
            try {
                const response = await axios.post('/api/roles', role);
                const roles = await response.data;
                context.commit('SET_ROLES', roles)
                return Promise.resolve('success');
            } catch (error) {
                if (error.response.status === 422) {
                    const errorMessages = Object.values(error.response.data.errors);
                    context.rootState.errorMessages = errorMessages;
                }
            } finally {

            }
        },
        async getAbilities(context) {
            try {
                const response = await axios.get('/api/abilities');
                const abilities = await response.data;
                context.commit('SET_ABILITIES', abilities);

            } catch (e) {
            }
        },
        async updateRole(context, roleEdit) {
            try {
                const response = await axios.put(`/api/roles/${roleEdit.id}`, roleEdit);
                const role = await response.data;
                return Promise.resolve('success')

            } catch (e) {
                return Promise.reject(e)
            }
        }


    }
}
