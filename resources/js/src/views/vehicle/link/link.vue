<template>
  <div class="main-content">
    <breadcumb :page="'Vinculación'" :folder="'vehiculos'"/>

    <b-card class="mb-5">
      <b-row>
        <b-col md="8">
          <b-form-input v-model="search.name" placeholder="Busca un vehiculo por placa"/>
        </b-col>
        <b-col md="4">
          <b-button :disabled="search.name.length <= 5" variant="primary" @click="searcByCarPlate()">Buscar</b-button>
          <b-button variant="outline-danger" @click="reset()">Resetear</b-button>
        </b-col>
      </b-row>

    </b-card>


    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
    ></b-pagination>


    <b-row>
      <b-col lg="4" md="4" sm="6" v-for="vehicle in vehicles" :key="vehicle.id">
        <b-card class="card-icon text-center mb-30">
          <p class="text-primary text-24 mb-2">{{ vehicle.car_plate }}</p>
          <b-button v-if="vehicle.users.length"
                    @click="showModalUsers(vehicle)"
                    variant="link"
                    size="sm">
            Ver usuarios ({{ vehicle.users_count }})
          </b-button>
          <p class="text-muted line-height-1 mt-2">{{ vehicle.auto_type }}</p>
          <i class="i-Add-User clickeable" @click="showModalLinkUser(vehicle)"></i>
        </b-card>
      </b-col>
    </b-row>

    <!--============================
          MODAL VINCULAR USUARIO
    ==============================-->
    <b-modal centered ref="modal-form-link" id="modal-form-link" hide-footer>
      <template v-slot:modal-title>
        Asingar conductor al vehiculo con placa <b>{{ currentVehicle.car_plate }}</b>
      </template>
      <form-link :idVehicle="currentVehicle.id" @save="save"/>
    </b-modal>


    <!--============================
        MODAL VER USUARIOS
    ==============================-->
    <b-modal centered ref="modal-users" id="modal-users" title="Desvincular conductores" hide-footer>
      <table-users-linked :users="currentUsers" :idVehicle="currentVehicle.id"/>
    </b-modal>

  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import formLink from "./formLink";
import tableUsersLinked from "./tableUsersLinked";

export default {
  name: "linkVehicle",
  components: {formLink, tableUsersLinked},
  created() {
    if (!this.viewPermissions()) {
      this.$router.push({name: 'not-found'});
    }
    this.getVehicles(this.search).then(total => {
      this.rows = total;
    });
  },
  data() {
    return {
      currentVehicle: {id: null, car_plate: ''},
      currentUsers: [],
      search: {
        page: 1,
        name: ""
      },
      currentPage: 1,
      perPage: 15,
      rows: 0,


    }
  },
  methods: {
    ...mapActions('vehicle', ['getVehicles', 'getVehiclesByPlate']),
    viewPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('vehiculos-vinculacion');
    },
    showModalLinkUser(vehicle) {
      this.currentVehicle = vehicle;
      this.$refs['modal-form-link'].show();
    },
    save() {
      openNotification()
      this.getVehicles();
      this.$refs['modal-form-link'].hide();
    },
    showModalUsers(vehicle) {
      this.currentUsers = vehicle.users;
      this.currentVehicle = vehicle;
      this.$refs['modal-users'].show();
    },
    searcByCarPlate() {
      this.getVehicles(this.search);
    },
    reset() {
      this.search.name = "";
      this.getVehicles(this.search);
    }
  },
  computed: {
    ...mapState('vehicle', ['vehicles']),
    ...mapState('auth', ['abilities']),


  },
  watch: {
    currentPage: function (val) {
      this.search.page = val;
      this.getVehicles(this.search);
    }
    // search: function (value) {
    //   if(value == null || value == '')
    //   {
    //     this.getVehicles()
    //   }else {
    //     this.getVehiclesByPlate(value)
    //   }
    // }
  }
}
</script>

<style scoped>
</style>
