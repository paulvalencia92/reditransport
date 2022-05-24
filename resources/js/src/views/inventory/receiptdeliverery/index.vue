<template>
  <div>
    <adminlist v-if="role == 'admin'"></adminlist>
    <driver-list v-else-if="role == 'conductor'"></driver-list>
<!--    <driver-list></driver-list>-->
  </div>
</template>

<script>

import adminlist from './admin/list'
import driverList from './driver/list'

import {mapState} from "vuex";

export default {
  name: "indexReceipt",
  components: {
    adminlist,
    driverList,

  },
  computed: {
    ...mapState('auth', ['role'])
  }
}
</script>

<style scoped>

</style>
