<template>
  <div class="map-container">
    <div class="row mb-2">
      <div class="col-6">
        <b>Distancia Aprox: {{infoGetter.distance}} Kms</b>
      </div>
      <div class="col-6 text-right">
        <b>Duración Aprox: {{ convertHours(infoGetter.duration) }} Hrs</b>
      </div>
    </div>
      <div ref="mapContainer" class="map-data" />
  </div>
</template>

<script>
import Mapboxgl from 'mapbox-gl';
import { mapGetters, mapState } from 'vuex';
export default {
  props: ['showRoute', 'updateRoute'],
  data() {
    return {
      currentLocation: [-74.08083, 4.59889],
      map: null
    };
  },
  created() {
    /* this.setRoute(true) */
  },
  methods: {
    initMap (ref) {
      this.map = new Mapboxgl.Map({
        container: ref, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: this.currentLocation, // starting position [lng, lat]
        zoom: 6 // starting zoom
      });

      this.getRoutesCoords.forEach(element => {

        const myLocationPopup = new Mapboxgl.Popup()
            .setLngLat( element.coord )
            .setHTML(`
              <h6>${ element.name } </h6>
            `)

          const myLocationMarker = new Mapboxgl.Marker()
            .setLngLat( element.coord )
            .setPopup(myLocationPopup)
            .addTo(this.map)
      });

      setTimeout(() => {  this.setRoute(true) }, 2500);
    },
    onMyLocation () {
      this.map.flyTo({
        center: this.currentLocation,
        zoom: 12
      })
    },
    async setRoute (bool) {

      if (bool == true) {

        let bounds = new Mapboxgl.LngLatBounds(
          [this.getRoutesCoords[0].coord[0], this.getRoutesCoords[0].coord[1]],
          [this.getRoutesCoords[0].coord[0], this.getRoutesCoords[0].coord[1]]
        );

        for (let step of this.route) {
          const newCoord = [step[0], step[1]]
          bounds.extend( newCoord )
        }

        this.map.fitBounds( bounds, {
          padding: 100
        });

        const sourceData = {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: this.route
                }
              }
            ]
          }
        };

        this.map.addSource('RouteString', sourceData);

        this.map.addLayer({
          id: 'RouteString',
          type: 'line',
          source: 'RouteString',
          layout: {
            'line-cap': 'round',
            'line-join': 'round'
          },
          paint: {
            'line-color': 'black',
            'line-width': 3
          }
        })

      }else {
      }
    },
    convertHours (totalMinutes) {
      totalMinutes = totalMinutes > 60 ? totalMinutes - 60 : totalMinutes - 20
      var hours = Math.floor(totalMinutes / 60);
      var minutes = totalMinutes % 60;

      return hours + ':' + minutes
    }
  },
  mounted() {
    this.initMap(this.$refs.mapContainer);
  },
  computed: {
    ...mapState('map', ['arriveLocation', 'route']),
    ...mapGetters('map', ['infoGetter']),
    ...mapGetters('contractRoutes', ['getRoutesCoords'])
  }
};
</script>
<style>
  .map-data{
    width: 100%;
    height: 400px;
    border-radius: 10px;
  }
</style>
