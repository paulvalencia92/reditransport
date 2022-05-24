<template>
  <b-form @submit.prevent="submit">
    <b-form-group label="ElEGIR CONDUCTOR" label-for="user_id">
      <model-select v-model="userVehicle.user_id"
          :options="users"
                                placeholder="Digita el nombre del conductor">
         </model-select>
    </b-form-group>

    <hr>

    <div class="text-right">
      <b-button @click="$bvModal.hide('modal-form-link')" variant="outline-primary" size="sm">Cancelar</b-button>
      <b-button @click="submit" variant="primary" size="sm">Asignar</b-button>
    </div>


  </b-form>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import axios from 'axios';
import { ModelSelect } from 'vue-search-select'

export default {
  name: "formLink",
  props: ['idVehicle'],
  components: {
    ModelSelect
  },
  created() {
    this.CLEAR_ERRORS();
    this.CHANGE_SUBMIT_STATUS(false);
    this.getUsersDoesntHaveVehicle(this.idVehicle);
  },
  data() {
    return {
      userVehicle: {
        user_id: null,
        vehicle_id: this.idVehicle
      }
    }
  },
  methods: {
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    ...mapActions('user', ['getUsersDoesntHaveVehicle']),
    async submit() {
      const response = await axios.post('/api/users/doesnthave-vehicles', this.userVehicle);
      this.$emit('save', 'success')
    },

  },
  computed: {
    ...mapState('user', ['users'])
  }
}
</script>

<style scoped>

</style>
