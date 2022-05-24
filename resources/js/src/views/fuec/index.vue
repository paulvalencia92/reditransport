<template>
    <div>
        <admin v-if="role == 'admin'" />
        <user v-else/>
    </div>
</template>
<script>
import admin from './admin.vue'
import user from './other.vue'
import {mapState} from "vuex";
export default {
    components: { admin, user },
    data () {
        return {

        }
    },
    computed: {
        ...mapState('auth', ["role"])
    }
}
</script>
