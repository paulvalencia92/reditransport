import Vue from "vue";
import store from "./store/index"
import Router from "vue-router";
import NProgress from "nprogress";
import authenticate from "./auth/authenticate";

const routerView = {template: '<router-view/>'}

Vue.use(Router);

const routes = [
    {
        path: "/",
        component: () => import("./views/pages/app"), //webpackChunkName app
        // beforeEnter: authenticate,
        redirect: "/dashboard",
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {auth: true},
                component: () => import("./views/dashboard"),
            },
            {
                path: "/afiliados",
                component: () => import("./views/affiliates"),
                children: [
                    {
                        path: "",
                        name: "lista-afiliados",
                        meta: {auth: true},
                        component: () => import("./views/affiliates/list")
                    },
                    {
                        path: "crear",
                        name: "nuevo-afiliado",
                        meta: {auth: true},
                        component: () => import("./views/affiliates/create")
                    },
                    {
                        path: ":id/detalle",
                        name: "detalle-afiliado",
                        meta: {auth: true},
                        component: () => import("./views/affiliates/show"),
                        props: true
                    }
                ]
            },
            {
                path: '/perfil',
                name: 'profile',
                meta: {auth: true},
                component: () => import("./views/profile/myProfile"),
            },
            {
                path: "/vehiculos",
                component: () => import("./views/vehicle"),
                children: [
                    {
                        path: "lista",
                        name: "vehiculos",
                        meta: {auth: true},
                        component: () => import("./views/vehicle/list")
                    },
                    {
                        path: "crear",
                        name: "nuevo-vehiculo",
                        meta: {auth: true},
                        component: () => import("./views/vehicle/create")
                    },
                    {
                        path: "vincular",
                        name: "vincular",
                        meta: {auth: true},
                        component: () => import("./views/vehicle/link/link")
                    },
                    {
                        path: "documentacion",
                        name: "documentacion",
                        meta: {auth: true},
                        component: () => import("./views/vehicle/documents/index")
                    },
                    {
                        path: ":id/detalle",
                        name: "detalle-vehiculo",
                        meta: {auth: true},
                        component: () => import("./views/vehicle/show"),
                        props: true
                    },
                    {
                        path: "licencia-transito",
                        name: "licencia-transito",
                        meta: {auth: true},
                        component: () => import("./views/vehicle/trafficLicense/index")
                    },
                    {
                        path: "crear-licencia-transito",
                        name: "crear-licencia-transito",
                        meta: {auth: true},
                        component: () => import("./views/vehicle/trafficLicense/create")
                    }
                ]
            },
            {
                path: "/informes",
                component: () => import("./views/reports"),
                children: [
                    {
                        path: "vehiculos",
                        name: "informes-vehiculos",
                        meta: {auth: true},
                        component: () => import("./views/reports/vehicles/reportVehicles")
                    },
                    {
                        path: "afiliados",
                        name: "informes-afiliados",
                        meta: {auth: true},
                        component: () => import("./views/reports/affiliates/reportAffiliates")
                    },
                    {
                        path: "documentos",
                        name: "informes-documentos",
                        meta: {auth: true},
                        component: () => import("./views/reports/documents/reportDocuments")
                    },
                ]
            },
            {
                path: "/documentos",
                component: () => import("./views/fuec"),
                children: [
                    {
                        path: "fuec",
                        name: "documentos-fuec",
                        meta: {auth: true},
                        component: () => import("./views/fuec/index.vue")
                    },
                    {
                        path: "paz-salvo",
                        name: "documentos-paz-salvo",
                        meta: {auth: true},
                        component: () => import("./views/fuec/index.vue")
                    }
                ]
            },
            {
                path: "/cartera",
                component: () => import("./views/purshe"),
                children: [
                    {
                        path: "lista",
                        name: "lista-cartera",
                        meta: {auth: true},
                        component: () => import("./views/purshe/list")
                    },
                    {
                        path: "crear",
                        name: "crear-cartera",
                        meta: {auth: true},
                        component: () => import("./views/purshe/create")
                    },
                    {
                        path: "conductor",
                        name: "conductor-cartera",
                        meta: {auth: true},
                        component: () => import("./views/purshe/driver")
                    },
                ]
            },
            {
                path: "/facturacion-electronica",
                component: () => import("./views/facturacionElectronica/index.vue"),
                children: [
                    {
                        path: "comprobante",
                        name: "comprobante",
                        meta: {auth: true},
                        component: () => import("./views/facturacionElectronica/comprobantElectronico"),
                    },
                    {
                        path: "comprobante/registrar",
                        name: "comprobante-registrar",
                        meta: {auth: true},
                        component: () => import("./views/facturacionElectronica/comprobantElectronico/CreateInvoice"),
                    },
                    {
                        path: "notas-credito",
                        name: "notas-credito",
                        meta: {auth: true},
                        component: () => import("./views/facturacionElectronica/notasCredito"),
                    },
                    {
                        path: "notas-credito/registrar",
                        name: "notas-credito-registrar",
                        meta: {auth: true},
                        component: () => import("./views/facturacionElectronica/notasCredito/CreateCreditNote"),
                    },
                    {
                        path: "notas-debito",
                        name: "notas-debito",
                        meta: {auth: true},
                        component: () => import("./views/facturacionElectronica/notasdebito"),
                    },
                    {
                        path: "notas-debito/registrar",
                        name: "notas-debito-registrar",
                        meta: {auth: true},
                        component: () => import("./views/facturacionElectronica/notasdebito/CreateDebitNote"),
                    },
                ]
            },
            // {
            //     path: "/nomina",
            //     component: () => import("./views/nomina/index.vue"),
            //     children: [
            // {
            //     path: "empresa",
            //     name: "empresa",
            //     meta: {auth: true},
            //     component: () => import("./views/nomina/configuration/main")
            //         // }
            //     ]
            // },
            {
                path: "/configuracion",
                component: () => import("./views/configuration/index.vue"),
                children: [
                    {
                        path: "empresa",
                        name: "empresa",
                        meta: {auth: true},
                        component: () => import("./views/configuration/company/main")
                    },
                    {
                        path: "roles-habilidades",
                        name: "roles-and-abilities",
                        meta: {auth: true},
                        component: () => import("./views/configuration/rolesAbilities/index")
                    }
                ]
            },


            {
                path: "/contratantes",
                component: () => import("./views/contractors"),
                children: [
                    {
                        path: "lista",
                        name: "contratantes",
                        meta: {auth: true},
                        component: () => import("./views/contractors/list")
                    },
                    {
                        path: "crear",
                        name: "nuevo-contratante",
                        meta: {auth: true},
                        component: () => import("./views/contractors/create")
                    }
                ]
            },
            {
                path: "/contratos",
                component: () => import("./views/contracts"),
                children: [
                    {
                        path: "lista",
                        name: "contratos",
                        meta: {auth: true},
                        component: () => import("./views/contracts/list")
                    },
                    {
                        path: "crear",
                        name: "nuevo-contrato",
                        meta: {auth: true},
                        component: () => import("./views/contracts/create")
                    },
                    {
                        path: "detalles-contrato/:id",
                        name: "detalles-contrato",
                        meta: {auth: true},
                        props: true,
                        component: () => import("./views/contracts/routes/index"),
                    },
                ]
            },
            {
                path: "/contrato-particular",
                component: () => import("./views/contract_particular/index"),
                children: [
                    {
                        path: "lista",
                        name: "contrato-particular-lista",
                        meta: {auth: true},
                        component: () => import("./views/contract_particular/list")
                    },
                    {
                        path: "crear",
                        name: "contrato-particular-crear",
                        meta: {auth: true},
                        component: () => import("./views/contract_particular/create")
                    },
                ]
            },
            {
                path: "/incidencias",
                component: () => import("./views/incidence"),
                children: [
                    {
                        path: "lista",
                        name: "lista-incidencia",
                        meta: {auth: true},
                        component: () => import("./views/incidence/list")
                    },
                ]
            },
            {
                path: "/nube",
                name: "nube",
                meta: {auth: true},
                component: () => import("./views/cloud"),
            },
            {
                path: "/solicitudes",
                name: "solicitudes",
                meta: {auth: true},
                component: () => import("./views/preregistro/list"),
            },
            {
                path: "/nube/:id",
                name: "folder-detail",
                meta: {auth: true},
                component: () => import("./views/cloud/show"),
                props: true
            },
            {
                path: "/inventario",
                component: () => import("./views/inventory"),
                children: [
                    {
                        path: "recibo-entrega-vehiculos",
                        name: "recibo-entrega-vehiculos",
                        meta: {auth: true},
                        component: () => import("./views/inventory/receiptdeliverery")
                    },
                    {
                        path: "registrar-inventario-vehiculos",
                        name: "registrar-inventario-vehiculos",
                        meta: {auth: true},
                        component: () => import("./views/inventory/receiptdeliverery/driver/formReceipt")
                    },
                    {
                        path: "mantenimiento-vehiculos",
                        name: "mantenimiento-vehiculos",
                        meta: {auth: true},
                        component: () => import("./views/inventory/maintenance/index")
                    },
                    {
                        path: "registrar-mantenimiento-vehiculos",
                        name: "registrar-mantenimiento-vehiculos",
                        meta: {auth: true},
                        component: () => import("./views/inventory/maintenance/form")
                    },
                    {
                        path: "chequeo-operacional",
                        name: "chequeo-operacional",
                        meta: {auth: true},
                        component: () => import("./views/inventory/checkOper/index")
                    },
                    {
                        path: "crear-chequeo-operacional",
                        name: "crear-chequeo-operacional",
                        meta: {auth: true},
                        component: () => import("./views/inventory/checkOper/formRegister")
                    },
                    {
                        path: "editar-chequeo-operacional/:id",
                        name: "editar-chequeo-operacional",
                        meta: {auth: true},
                        component: () => import("./views/inventory/checkOper/formEdit"),
                        props: true
                    },
                ]
            },
            {
                path: "/only",
                name: 'only',
                meta: {auth: true},
                component: () => import("./views/only"),
            },

        ]
    },
    {
        path: "/auth",
        component: () => import("./views/auth/index"),
        children: [
            {
                path: "login",
                name: 'login',
                component: () => import("./views/auth/signIn"),
                meta: {auth: false},
            },
            {
                path: "recover-password",
                component: () => import("./views/auth/recoverPassword"),
                name: 'recover-password',
                meta: {auth: false},
            },
            {
                path: "/password/reset",
                component: () => import("./views/auth/form_reset_password"),
                name: 'forgot_password',
                meta: {auth: false},
            },
            {
                path: "/preregistro",
                component: () => import("./views/preregistro/index"),
                name: 'preregistro',
                meta: {auth: false},
            }
        ]
    },


    {
        path: "*",
        component: () => import("./views/pages/notFound"),
        meta: {auth: true},
        name: 'not-found'
    }
];

const router = new Router({
    mode: "history",
    linkActiveClass: "open",
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0};
    }
});

router.beforeEach((to, from, next) => {

    if (store.state.auth.access_token) {
        store.dispatch('auth/getMyAbilities');
    }

    // If this isn't an initial page load.
    if (to.path) {
        // Start the route progress bar.
        NProgress.start();
        NProgress.set(0.1);
    }

    const publicPages = ['/auth/login', '/only', '/password/reset']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = store.state.auth.user

    if (to.meta.auth) {
        if (authRequired && loggedIn === null) {
            return next('/auth/login')
        }
    } else {
        if (loggedIn) {
            return next('/dashboard')
        } else {
            next()
        }
    }
    next()

});

router.afterEach(() => {
    // Remove initial loading
    const gullPreLoading = document.getElementById("loading_wrap");
    if (gullPreLoading) {
        gullPreLoading.style.display = "none";
    }
    // Complete the animation of the route progress bar.
    setTimeout(() => NProgress.done(), 500);
    // NProgress.done();
    // if (isMobile) {
    if (window.innerWidth <= 1200) {
        store.dispatch("changeSidebarProperties");
        if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
            store.dispatch("changeSecondarySidebarProperties");
        }

        if (store.getters.getCompactSideBarToggleProperties.isSideNavOpen) {
            store.dispatch("changeCompactSidebarProperties");
        }
    } else {
        if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
            store.dispatch("changeSecondarySidebarProperties");
        }

        // store.state.sidebarToggleProperties.isSecondarySideNavOpen = false;
    }
});

export default router;
