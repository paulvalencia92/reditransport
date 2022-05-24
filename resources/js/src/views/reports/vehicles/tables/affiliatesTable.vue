<template>
  <b-table bordered :fields="fields" :items="affiliates"></b-table>
</template>

<script>
export default {
  name: "affiliatesTable",
  props: ['affiliates'],
  data() {
    return {
      fields: [
        {key: 'full_name', label: 'Nombre'},
        {key: 'phone_number', label: 'Telefono'},
        {key: 'email', label: 'Correo'}
      ]
    }
  }
}
</script>

