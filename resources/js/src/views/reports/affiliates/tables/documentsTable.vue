<template>
  <b-table bordered :fields="fields" :items="documents"></b-table>
</template>

<script>
export default {
  name: "documentsTable",
  props: ['documents'],
  data() {
    return {
      fields: [
        {key: 'type', label: 'Tipo de documento'},
        {key: 'expiration_date', label: 'Expiración'},
        {key: 'number', label: 'Numero de documento'},
        {key: 'identity_name', label: 'Entidad'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
