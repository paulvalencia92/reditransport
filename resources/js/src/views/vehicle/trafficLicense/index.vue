<template>
  <div class="main-content">
    <breadcumb page="Licencia de transito" :folder="'vehiculos'"/>

    <admin v-if="role == 'admin'"></admin>
    <user v-else-if="role == 'owner'"></user>


    <!--    <b-row>-->
    <!--      <b-col lg="4" md="4" sm="6" v-for="vehicle in vehiclesDocuments" :key="vehicle.id">-->
    <!--        <detail :vehicle="vehicle">-->
    <!--          <template v-slot:btn-form.document></template>-->
    <!--        </detail>-->
    <!--      </b-col>-->
    <!--    </b-row>-->

  </div>
</template>

<script>
import admin from './roles/admin'
import user from './roles/user'
import {mapState} from "vuex";

export default {
  name: "index",
  components: {admin, user},
  computed: {
    ...mapState('auth', ['role']),
  }
}
</script>

<style scoped>

</style>
