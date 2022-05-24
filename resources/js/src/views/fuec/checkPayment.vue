<template>
    <div>
        <div class="row">
            <div class="col-sm-5 text-center">
                <h2>Tienes pagos pendientes</h2>
                <div style="max-width:300px;margin:auto">
                    <lottie-animation
                    ref="anim"
                    :loop="true"
                    :animationData="require('../../assets/bills.json')"
                    />
                </div>
                <div role="alert" aria-live="polite" aria-atomic="true" class="alert alert-dismissible alert-alert alert-card alert-danger mt-3">
                <button type="button" aria-label="Close" class="close">×</button>
                <strong class="text-capitalize">Recuerda!</strong> Realiza estos pagos para seguir disfrutando de nuestros beneficios
                </div>
            </div>
            <div class="col-sm-7">
                <h3 v-if="purshes_pay[0].length > 0">
                    Cobros aplicados al usuario
                </h3>
                <div class="row" v-if="purshes_pay.length > 0">
                    <div class="col-sm-6 col-md-4 mb-3" v-for="purshe in purshes_pay[0]" :key="purshe.id">
                        <b-card>
                            {{purshe.detail}}: <b>{{purshe.cost | format_currency}}</b>
                            <div>
                                <small>{{ purshe.payment_date }}</small>
                            </div>
                        </b-card>
                    </div>
                </div>

                <h3 v-if="purshes_pay[1].length > 0">
                    Cobros aplicados a vehículos
                </h3>
                <div class="row" v-if="purshes_pay.length > 0">
                    <div class="col-sm-6 col-md-4 mb-3" v-for="purshe in purshes_pay[1]" :key="purshe.id">
                        <b-card>
                            {{purshe.detail}}: <b>{{purshe.cost | format_currency}}</b>
                            <div>
                                <span>{{ purshe.payment_date }}</span>
                            </div>
                        </b-card>
                    </div>
                </div>

                <div class="text-center" v-if="purshes_pay[0].length <= 0 && purshes_pay[1].length <= 0">
                    <h3>
                        Al parecer no cargamos correctamente los contratos
                    </h3>
                    <h6>
                        Esto puede debeser a tu conexión de internet...
                    </h6>
                    <b-btn size="lg" variant="primary" @click="$emit('status', true)">
                        ¡Click aquí para verlos!
                    </b-btn>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LottieAnimation from 'lottie-web-vue'
import { mapActions, mapState } from 'vuex'
export default {
    components: {
        LottieAnimation
    },
    created () {
        this.getPurchesToPay().then(() => {
            if(this.purshes_pay[0].length > 0 || this.purshes_pay[1].length > 0)
            {
                this.$emit('status', false)
            } else {
                this.$emit('status', true)
            }
        })
    },
    methods: {
        ...mapActions('purshe', ['getPurchesToPay']),
    },
    computed: {
        ...mapState('purshe', ['purshes_pay'])
    }
}
</script>