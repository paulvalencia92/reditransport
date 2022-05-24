<template>
    <div>
        <b-card title="Rutas de desplazamiento">
          <div class="row">
            <div class="col-sm-10 row">
              <div class="col-sm-5">
                <b-form-group label="Ubicación de partida" label-for="number">
                  <b-form-input
                      debounce="500"
                      class="mb-2"
                      id="number"
                      v-model="routeForm.from">
                  </b-form-input>
                  <ul class="place-items" v-if="places && showFromList == true">
                      <li v-for="place in places.features" :key="place.id" @click="addtoRouteFrom(place.center, place.text_es)">
                        {{place.text_es}} | {{place.place_name_es}}
                      </li>
                  </ul>
                </b-form-group>
              </div>
              <div class="col-sm-2 pt-3">
                <b-button class="mt-1" variant="primary" rounded>
                  Hasta
                </b-button>
              </div>
              <div class="col-sm-5">
                <b-form-group label="Ubicación de llegada" label-for="number">
                  <b-form-input
                      class="mb-2"
                      id="number"
                      v-model="routeForm.to">
                  </b-form-input>
                  <ul class="place-items" v-if="places && showToList == true">
                      <li v-for="place in places.features" :key="place.id" @click="addtoRouteTo(place.center, place.text_es)">
                        {{place.text_es}} | {{place.place_name_es}}
                      </li>
                  </ul>
                </b-form-group>
              </div>
              <div class="col-sm-12" v-if="routeForm.from != null && routeForm.to != null">
                <b-form-group label="Detalles de la ruta" label-for="number">
                  <b-form-input
                      class="mb-2"
                      id="number"
                      v-model="routeForm.details">
                  </b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="col-sm-2 pt-5">
              <b-btn variant="primary" size="lg" @click="save">
                <i class=""></i> Agregar ruta
              </b-btn>
            </div>
          </div>
        </b-card>
    </div>
</template>
<script>
import {mapActions, mapGetters, mapState} from "vuex";
import {minLength, maxLength, required, numeric, between} from "vuelidate/lib/validators";
import { ModelSelect } from 'vue-search-select'
export default {
    props: ['contractId'],
    components: {
        ModelSelect
    },
    created () {
        this.setPlacesNull()
        this.searchRouteOrganicer()
    },
    data () {
    return {
      routeForm: {
        contract_id: this.contractId,
        from: null,
        centerFrom: null,
        to: null,
        centerTo: null,
        details: null
      },
      showFromList: false,
      showToList: false
    }
  },
  validations: {
    routeForm: {
      from: {
        required,
      },
      to: {
        required,
      },
      details: {
        required,
      }
    },
  },
  methods: {
    ...mapActions('contractRoutes', ['createRoute']),
    ...mapActions('map', ['getPlaces', 'setPlacesNull', 'addTravelPoint', 'searchRoute']),
    addtoRouteFrom(center, place)
    {
        this.routeForm.centerFrom = center
        this.routeForm.from = place
        this.setPlacesNull()
        this.showFromList = false
    },
    addtoRouteTo(center, place)
    {
        this.routeForm.centerTo = center
        this.setPlacesNull()
        this.routeForm.to = place
        this.showToList = false
    },
    save() {
      this.createRoute(this.routeForm).then(response => {
            openNotification();
            this.routeForm.centerFrom = null
            this.routeForm.centerTo = null
            this.routeForm.from = null
            this.routeForm.to = null
            this.routeForm.details = null
            this.searchRouteOrganicer()
            this.$emit('changeRoute')

          }).catch(respose => {
            openNotification('Error', 'No se pudieron guardar los datos', 'danger')
      })
    },
    searchRouteOrganicer () {
        let arrayCoords = []
        this.routes.map(place => {
          arrayCoords.push(place.center_from.replace('[','').replace(']', ';'))
          arrayCoords.push(place.center_to.replace('[','').replace(']', ';'))
        })
        this.searchRoute(JSON.stringify(arrayCoords).replace('[','').replace(']','').replace(/","/g,'').replace(/"/g,'').slice(0, -1))
    }
  },
  watch: {
    'routeForm.from': function () {
      if( this.routeForm.from == null ){
        this.setPlacesNull()
      }else {
        this.showFromList = true
        this.getPlaces(this.routeForm.from)
      }
    },
    'routeForm.to': function () {
      if( this.routeForm.to == null ){
        this.setPlacesNull()
      }else {
        this.showToList = true
        this.getPlaces(this.routeForm.to)
      }
    }
  },
  computed: {
    ...mapState('contractRoutes', ['routes']),
    ...mapState('map', ['places']),
    ...mapGetters('map', ['getRoutesCoords'])
  }
}
</script>
<style>
    .place-items{
        list-style: none;
        padding-inline-start: 0px !important;
    }
    .place-items li{
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #bdbdbd;
    }
    .place-items li:hover{
        background-color: rgba(0, 0, 0, 0.2);
        transition: .3s all;
        cursor: pointer;
    }
</style>
