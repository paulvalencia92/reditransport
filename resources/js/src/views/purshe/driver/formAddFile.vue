<template>
  <b-form @submit.prevent="submit">
    <b-row>


      <b-col md="12">
        <b-form-group label="Anexar factura">
          <b-form-file
              v-model="file"
              :state="Boolean(file)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here...">
          </b-form-file>
        </b-form-group>
      </b-col>

      <b-col md="12">
        <b-form-group label="Tipo de pago">
          <b-form-select v-model="payment" class="mb-3">
            <b-form-select-option value="abono">Abono</b-form-select-option>
            <b-form-select-option value="pago">Pago</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>

      <b-col md="12">
        <b-form-group label="Persona que registra el pago">
          <model-select
            v-model="user_id"
            :options="userOptions"
          />
        </b-form-group>
      </b-col>

      <b-col md="12">
        <b-form-group label="Total">
          <b-form-input
              class="mb-2"
              type="number"
              label="Total"
              v-model="cost">
          </b-form-input>
        </b-form-group>
        <p v-if="parseInt(cost) > parseInt(total)" class="text-danger">El pago total supera el costo</p>
      </b-col>

      <b-col md="12" class="text-right mt-4">
        <b-button type="submit" variant="primary" :disabled="!file || parseInt(cost) > parseInt(total)">Guardar
        </b-button>
      </b-col>

    </b-row>
  </b-form>
</template>

<script>

import { ModelSelect } from 'vue-search-select'
import {mapActions, mapGetters} from "vuex";

export default {
  name: "formAddFile",
  props: ['pursheId', 'total'],
  created() {
    this.getUsers()
  },
  data() {
    return {
      file: null,
      payment: '',
      cost: 0,
      user_id: ''

    }
  },
  components: {
    ModelSelect
  },
  methods: {
    ...mapActions('user', ['getUsers']),
    submit() {
      const formData = buildFormData({
        id: this.pursheId,
        file: this.file,
        payment: this.payment,
        cost: this.cost,
        user_id: this.user_id
      });
      this.$emit('save', formData);
    },
  },
  computed: {
    ...mapGetters('user', ['userOptions'])
  }
}
</script>

<style scoped>

</style>
