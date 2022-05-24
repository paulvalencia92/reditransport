<template>
  <b-alert show variant="danger">
    <h4 class="alert-heading">Se encontraron los siguientes errores</h4>
    <p v-for="(error,index) in errorMessages" :key="index">
      <i class="iconsminds-close"/> {{ error.join() }}
    </p>
  </b-alert>
</template>
<script>
import {mapState} from "vuex";

export default {
  name: "CardErrorValidation",
  computed: {
    ...mapState(['errorMessages']),

  },
}
</script>

<style scoped>

</style>
