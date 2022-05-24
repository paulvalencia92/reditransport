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
        {key: 'type', label: 'Documento'},
        {key: 'number', label: 'Numero'},
        {key: 'expiration_date', label: 'Fecha de expiración'}
      ]
    }
  }
}
</script>

