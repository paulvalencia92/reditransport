<template>
    <div>
        <b-card no-body class="mt-3 pl-4 pt-4 pb-2">
          <div class="row" >
            <div class="col-sm-5">
              <div>
                <b>Desde</b>
              </div>
              {{route.from}}
            </div>
            <div class="col-sm-5">
              <div>
                <b>Hasta</b>
              </div>
              {{route.to}}
            </div>
            <div class="col-sm-2 ">
              <b-btn variant="danger" @click="showModalDeleteVehicle(route)">
                Eliminar
              </b-btn>
            </div>
            <div class="col-sm-12 mt-2">
              <div>
                <b>Detalles</b>
              </div>
              {{route.details}}
            </div>
          </div>
        </b-card>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: ['route'],
    methods: {
        ...mapActions('contractRoutes', ['deleteRoute']),
        showModalDeleteVehicle(vehicleId) {
        this.$bvModal
            .msgBoxConfirm("una vez ejecutada la acción no podra recuperar la información", {
                title: `¿Está seguro de eliminar la ruta?`,
                size: "sm",
                buttonSize: "sm",
                okVariant: "danger",
                okTitle: "Eliminar",
                cancelTitle: "NO",
                footerClass: "p-2",
                hideHeaderClose: false,
                centered: true
            })
            .then(value => {
                if (value){
                this.deleteRoute(vehicleId.id).then(response => {
                    if (response == 'route successfully removed') {
                    openNotification('Ruta eliminada corrrectamente', 'Se ha eliminado la ruta');
                    }
                });
                }
            })
        },
    }
}
</script>