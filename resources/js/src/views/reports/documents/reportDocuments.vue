<template>
  <div class="main-content">
    <breadcumb page="Reporte de documentos" folder="reportes"/>
    <search-form-documents></search-form-documents>
    <search-list-documents></search-list-documents>
  </div>
</template>

<script>
import searchFormDocuments from "./searchFormDocuments";
import searchListDocuments from "./searchListDocuments";

export default {
  name: "reportDocuments",
  components: {searchFormDocuments, searchListDocuments},
  metaInfo: {
    title: "Reporte de afiliados"
  },
}
</script>

<style scoped>

</style>
