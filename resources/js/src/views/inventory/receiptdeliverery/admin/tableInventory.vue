<template>
  <table class="table table-bordered table-hover table-sm  mt-4">
    <template v-for="item in items">
      <thead class="bg-light text-white">
      <tr v-if="item.title == 'DESCRIPCIÓN' || item.title == 'HERRAMIENTAS'">
        <td>{{ item.title }}</td>
        <td>Q</td>
        <td>B</td>
        <td>M</td>
      </tr>
      <tr v-else>
        <td>{{ item.title }}</td>
        <td></td>
        <td>Si</td>
        <td>No</td>
      </tr>

      </thead>
      <tbody>
      <tr v-for="subitem in item.subitems">

        <template v-if="subitem.hasOwnProperty('q')">
          <td>{{ subitem.name }}</td>
          <td>{{ subitem.q }}</td>
          <td>{{ subitem.b }}</td>
          <td>{{ subitem.m }}</td>
        </template>
        <template v-else>
          <td>{{ subitem.name }}</td>
          <td></td>
          <td>{{ subitem.si }}</td>
          <td>{{ subitem.no }}</td>
        </template>

      </tr>
      </tbody>
    </template>
  </table>
</template>

<script>
export default {
  name: "tableInventory",
  props: ['items']
}
</script>

<style scoped>

</style>
