import axios from "axios";

export default {
    namespaced: true,
    state: {
        currentLocation: [-75.264442, 2.940727],
        arriveLocation: null,
        route: null,
        info: {
            duration: null,
            distance: null
        },
        steps: null,
        travelPoints: [],
        places: null
    },
    getters: {
        infoGetter (state) {
            var information = { distance: null, duration: null}

            const kms = state.info.distance / 1000;
            information.distance = Math.round( kms * 100 );
            information.distance /= 100;

            information.duration = Math.floor( state.info.duration / 60 );

            return information;
        }
    },
    mutations: {
        SET_CURRENT_LOCATION(state, coords) {
            state.currentLocation = coords;
        },
        SET_ARRIVE_LOCATION(state, coords) {
            state.arriveLocation = coords;
        },
        SET_ROUTE_INFO(state, route) {
            state.route = route.routes[0].geometry.coordinates
            state.steps = route.routes[0].legs[0].steps
            state.info.duration = route.routes[0].duration
            state.info.distance = route.routes[0].distance
        },
        SET_PLACES(state, plans) {
            state.places = plans;
        },
        SET_TRAVEL_POINTS(state, point) {
            state.travelPoints.push(point)
        }
    },
    actions: {
        async setCurrentLocation(context, data) {
            context.commit('SET_CURRENT_LOCATION', data);
        },
        async setArriveLocation(context, data) {
            context.commit('SET_ARRIVE_LOCATION', data);
        },
        async searchRoute(context, data) {
            const response = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${data}?alternatives=false&geometries=geojson&language=es&overview=full&steps=true&access_token=pk.eyJ1IjoicmVkaXRyYW5zcG9ydCIsImEiOiJja3phbGpnaWQyNTlmMnVueGl1bHkyaDd6In0.KBYsYJKOQSR1NN-bOdNlUA`);
            context.commit('SET_ROUTE_INFO', response.data);
        },
        async getPlaces(context, data) {
            const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${data}.json?country=co&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1IjoicmVkaXRyYW5zcG9ydCIsImEiOiJja3phbGpnaWQyNTlmMnVueGl1bHkyaDd6In0.KBYsYJKOQSR1NN-bOdNlUA`);
            context.commit('SET_PLACES', response.data);
        },
        async setPlacesNull(context) {
            context.commit('SET_PLACES', null);
        },
        async addTravelPoint(context, data) {
            context.commit('SET_TRAVEL_POINTS', data)
        }
    },
};
