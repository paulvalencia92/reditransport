<template>
  <b-container fluid class="bv-example-row">

    <b-row>


      <b-col md="12">
        <b-button variant="primary" @click="modal_role = true">Crear rol</b-button>
      </b-col>


      <b-col class="col-md-12 mt-2">
        <b-card>
          <b-card-body>
            <b-table striped hover :items="roles" :fields="fields">
              <template v-slot:cell(abilities)="roles">
                <template v-for="ability in roles.item.abilities">
                  <button class="btn btn-link btn-sm mr-1">{{ ability.title }}</button>
                </template>
              </template>

              <template v-slot:cell(acciones)="roles">
                <b-button size="xs" pill variant="primary" @click="editRole(roles.item.id)">Editar
                </b-button>
              </template>
            </b-table>
            <!--============================
                    MODAL  EDIT ROLE
            ==============================-->
            <b-modal size="xxl" hide-footer v-model="active">

              <template v-slot:modal-header>
                <h4 class="not-margin">Editar</h4>
              </template>

              <div class="con-form p-4">


                <b-form-group>
                  <b-form-input v-model="roleEdit.titulo" placeholder="nombre" type="text"/>
                </b-form-group>

                <b-form-group>
                  <b-row>
                    <b-col class="col-md-3"
                           v-for="(habilidad,index) in skills"
                           :key="habilidad.id">
                      <b-form-checkbox
                          v-model="roleEdit.habilidades"
                          :name="`habilidades${habilidad.name}`"
                          :value="habilidad.id"
                      >{{ habilidad.title }}
                      </b-form-checkbox>
                    </b-col>
                  </b-row>
                </b-form-group>
              </div>

              <template>
                <div class="footer-dialog">
                  <b-button variant="primary" size="sm" block @click="_updateRole">Guardar cambios
                  </b-button>

                </div>
              </template>
            </b-modal>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>


    <b-modal v-model="modal_role" title="Registrar Rol" centered size="sm">
      <b-form>

        <CardErrorValidation v-if="errorMessages.length"/>

        <b-form-group label="Nombre del rol">
          <b-form-input autocomplete="off" v-model="role.title"></b-form-input>
        </b-form-group>
      </b-form>


      <template #modal-footer="{ ok, cancel, hide }">
        <b-button variant="secondary" @click="cancel()">
          Cancelar
        </b-button>
        <b-button variant="primary" @click="registerRol()">
          Registrar
        </b-button>
      </template>
    </b-modal>

  </b-container>
</template>

<script>
import {mapActions, mapState, mapMutations} from "vuex";

export default {
  name: "Roles",
  created() {
    if (!this.viewPermissions()) {
      this.$router.push({name: 'not-found'});
    }
    this._getRoles();
  },
  mounted() {
    this.getAbilities();
  },
  data() {
    return {
      fields: [
        {key: "title", label: 'Titulo', sortable: true},
        {key: "abilities", label: 'Habilidades', sortable: true},
        {key: "acciones", label: 'Acciones', sortable: true}
      ],
      role: {
        name: "",
        title: "",
        abilities: []
      },
      active: false,
      roleEdit: {},
      modal_role: false,
    };
  },
  methods: {
    ...mapMutations("roles", ["SET_ROLE"]),
    ...mapActions("roles", ["getRoles", "createRole", "getAbilities", "updateRole"]),
    registerRol() {
      this.createRole(this.role).then(response => {
        window.openNotification('El rol ha sido creado exitosamente');
        this.modal_role = false;
        this.role.title = ''
      });
    },
    _getRoles() {
      this.getRoles();
    },
    editRole(roleId) {
      this.active = true;
      this.SET_ROLE(roleId);

      this.roleEdit = {
        id: this._role.id,
        titulo: this._role.title,
        habilidades: this._role.abilities.map(abi => abi.id)
      };
    },
    _updateRole() {
      this.active = false;
      this.updateRole(this.roleEdit).then(response => {
        if (response == "success") {
          window.openNotification(
              "Se han asignado las habilidades correctamente"
          );
          this._getRoles();
        }
      });
    },
    viewPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('configuracion-roles-habilidades');
    },
  },
  computed: {
    ...mapState(["errorMessages"]),
    ...mapState("roles", ["roles", "_role", "skills"]),
    ...mapState("auth", ["abilities"]),
  },
};
</script>

<style lang="css" scoped>
.row {
  width: 100%;
}

.board-paper {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.form-group {
  margin-bottom: 3rem;
}
</style>
