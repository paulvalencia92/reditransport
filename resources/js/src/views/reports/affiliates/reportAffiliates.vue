<template>
  <div class="main-content">
    <breadcumb page="Reporte de afiliados" folder="reportes"/>
    <search-form-affiliate></search-form-affiliate>
    <search-list-affiliate></search-list-affiliate>
  </div>
</template>

<script>
import searchFormAffiliate from "./searchFormAffiliate";
import searchListAffiliate from "./searchListAffiliate";

export default {
  name: "reportAffiliates",
  metaInfo: {
    title: "Reporte de afiliados"
  },
  components: {searchFormAffiliate, searchListAffiliate}
}
</script>

<style scoped>

</style>
