<template>
  <b-form @submit.prevent="submit">

    <b-form-group label="Tipo de pago">
      <b-form-select v-model="payment.status" class="mb-3">
        <b-form-select-option value="No pago">No pago</b-form-select-option>
        <b-form-select-option value="Parcialmente pago">Parcialmente pago</b-form-select-option>
        <b-form-select-option value="Pago completo">Pago completo</b-form-select-option>
      </b-form-select>
    </b-form-group>

    <div class="text-right">
      <b-button type="submit" variant="primary">Cambiar estado</b-button>
    </div>


  </b-form>
</template>

<script>
export default {
  name: "formChangeStatus",
  props: ['id'],
  data() {
    return {
      payment: {
        id: this.id,
        status: ''
      }
    }
  },
  methods: {
    submit() {
      this.$emit('save', this.payment)
    }
  }
}
</script>

<style scoped>

</style>
