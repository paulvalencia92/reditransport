<template>
  <b-table :items="items" :fields="fields" striped hover responsive>
    <template v-slot:cell(actions)="data">
      <b-button @click="deleteService(data.item)" size="xs" variant="primary">
        Eliminar
      </b-button>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "TableServices",
  props: ['items'],
  data() {
    return {
      fields: [
        {key: 'name', label: 'Descripción'},
        {key: 'taxable_amount', label: 'Precio'},
        {key: 'tax_amount', label: 'Impuesto'},
        {key: 'total', label: 'Total'},
        {key: 'actions', label: 'Acciones'},
      ]
    }
  },
  methods: {
    deleteService(service) {
      const index = this.items.findIndex(item => item.id == service.id);
      this.items.splice(index, 1);
      this.$emit('recalculated')
    }
  }
}
</script>

<style scoped>

</style>
