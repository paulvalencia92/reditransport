<template>
  <b-form @submit.prevent="submit">

    <b-col md="12">
      <b-form-group label="Soat" label-for="Soat">
        <b-form-file
            v-model="driver.soat"
            browse-text="Guardar"
            :state="Boolean(driver.soat)"
            placeholder="Elija un archivo o suéltelo aquí ... "
            drop-placeholder="Suelta el archivo aquí ...">
        </b-form-file>
      </b-form-group>
    </b-col>

    <b-col md="12">
      <b-form-group label="Contractual" label-for="contractual">
        <b-form-file
            v-model="driver.contractual"
            browse-text="Guardar"
            :state="Boolean(driver.contractual)"
            placeholder="Elija un archivo o suéltelo aquí ... "
            drop-placeholder="Suelta el archivo aquí ...">
        </b-form-file>
      </b-form-group>
    </b-col>

    <b-col md="12">
      <b-form-group label="Extra Contractual" label-for="extra_contractual">
        <b-form-file
            v-model="driver.extra_contractual"
            browse-text="Guardar"
            :state="Boolean(driver.extra_contractual)"
            placeholder="Elija un archivo o suéltelo aquí ... "
            drop-placeholder="Suelta el archivo aquí ...">
        </b-form-file>
      </b-form-group>
    </b-col>

    <b-col md="12">
      <b-form-group label="Tarjeta Operacion" label-for="tarjeta_operacion">
        <b-form-file
            v-model="driver.tarjeta_operacion"
            browse-text="Guardar"
            :state="Boolean(driver.tarjeta_operacion)"
            placeholder="Elija un archivo o suéltelo aquí ... "
            drop-placeholder="Suelta el archivo aquí ...">
        </b-form-file>
      </b-form-group>
    </b-col>

    <b-col md="12">
      <b-form-group label="Tecnomecanica" label-for="tecnomecanica">
        <b-form-file
            v-model="driver.tecnomecanica"
            browse-text="Guardar"
            :state="Boolean(driver.tecnomecanica)"
            placeholder="Elija un archivo o suéltelo aquí ... "
            drop-placeholder="Suelta el archivo aquí ...">
        </b-form-file>
      </b-form-group>
    </b-col>

  </b-form>
</template>

<script>
export default {
  name: "formDocuments",
  props: {
    driver: {
      required: true,
      type: Object
    }
  },
  methods: {
    submit() {

    }
  }
}
</script>

<style scoped>

</style>
