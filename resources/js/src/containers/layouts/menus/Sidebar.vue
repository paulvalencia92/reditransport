<template>
  <div
      class="side-content-wrap"
      @mouseenter="isMenuOver = true"
      @mouseleave="isMenuOver = false"
      @touchstart="isMenuOver = true"
  >
    <vue-perfect-scrollbar
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
        :class="{ open: getSideBarToggleProperties.isSideNavOpen }"
        ref="myData"
        class="sidebar-left rtl-ps-none ps scroll"
    >
      <div>
        <ul class="navigation-left">
          <!--============================
                      DASHBOARD
        ==============================-->
          <li
              @mouseenter="toggleSubMenu"
              :class="{ active: selectedParentMenu == 'dashboard' }"
              class="nav-item"
              data-item="dashboard"
              :data-submenu="false">
            <router-link tag="a" class="nav-item-hold" to="/dashboard">
              <i class="nav-icon i-Bar-Chart"></i>
              <span class="nav-text">Inicio</span>
            </router-link>
            <div class="triangle"></div>
          </li>

          <!--============================
                      AFILIADOS
          ==============================-->
          <li v-if="abilities.includes('*') || abilities.includes('afiliados-listar')"
              @mouseenter="toggleSubMenu"
              class="nav-item"
              :class="{ active: selectedParentMenu == '/afiliados' }"
              data-item="/afiliados"
              :data-submenu="false"
          >
            <router-link tag="a" class="nav-item-hold" :to="{ name: 'lista-afiliados' }">
              <i class="nav-icon i-Administrator"></i>
              <span class="nav-text">Afiliados</span>
            </router-link>

            <div class="triangle"></div>
          </li>

          <!--============================
                    VEHICULOS
          ==============================-->
          <li
              v-if="abilities.includes('*') || abilities.includes('vehiculos-listar')"
              @mouseenter="toggleSubMenu"
              :class="{ active: selectedParentMenu == 'vehiculos' }"
              class="nav-item"
              data-item="vehiculos"
              :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Car-2"></i>
              <span class="nav-text">Vehiculos</span>
            </a>
            <div class="triangle"></div>
          </li>

          <!--============================
                 CARTERA
          ==============================-->
                   <li
                       @mouseenter="toggleSubMenu"
                       :class="{ active: selectedParentMenu == 'cartera' }"
                       class="nav-item"
                       data-item="cartera"
                       :data-submenu="true">
                     <a class="nav-item-hold" href="#">
                       <i class="nav-icon i-Money-2"></i>
                       <span class="nav-text">Cartera</span>
                     </a>
                     <div class="triangle"></div>
                   </li>
          <!--============================
              Facturacion electronica
          ==============================-->
          <li
              @mouseenter="toggleSubMenu"
              :class="{ active: selectedParentMenu == 'facturacion-electronica' }"
              class="nav-item"
              data-item="facturacion-electronica"
              :data-submenu="true">
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Cash-register-2"></i>
              <span class="nav-text">Facturación electronica</span>
            </a>
            <div class="triangle"></div>
          </li>
          <!--============================
              Nomina
        ==============================-->
          <!--          <li-->
          <!--              @mouseenter="toggleSubMenu"-->
          <!--              :class="{ active: selectedParentMenu == 'nomina' }"-->
          <!--              class="nav-item"-->
          <!--              data-item="nomina"-->
          <!--              :data-submenu="true">-->
          <!--            <a class="nav-item-hold" href="#">-->
          <!--              <i class="nav-icon i-Business-ManWoman"></i>-->
          <!--              <span class="nav-text">Nomina</span>-->
          <!--            </a>-->
          <!--            <div class="triangle"></div>-->
          <!--          </li>-->

          <!--============================
               EXTERNOS
         ==============================-->
          <li
              v-if="abilities.includes('*') || abilities.includes('externos')"
              @mouseenter="toggleSubMenu"
              :class="{ active: selectedParentMenu == 'externos' }"
              class="nav-item"
              data-item="externos"
              :data-submenu="true">
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Business-ManWoman"></i>
              <span class="nav-text">Externos</span>
            </a>
            <div class="triangle"></div>
          </li>

          <!--============================
                    DOCUMENTOS
           ==============================-->

          <li
              v-if="abilities.includes('*') || abilities.includes('fuec')"
              @mouseenter="toggleSubMenu"
              class="nav-item"
              :class="{ active: selectedParentMenu == '/documentos/fuec' }"
              data-item="/documentos/fuec"
              :data-submenu="false"
          >
            <router-link tag="a" class="nav-item-hold" :to="{ name: 'documentos-fuec' }">
              <i class="nav-icon i-File"></i>
              <span class="nav-text">FUEC</span>
            </router-link>

            <div class="triangle"></div>
          </li>


          <!--ONLY-->
          <li
              v-if="abilities.includes('*') || abilities.includes('incidencias')"
              @mouseenter="toggleSubMenu"
              class="nav-item"
              :class="{ active: selectedParentMenu == 'insidencias' }"
              data-item="insidencias"
              :data-submenu="false"
          >
            <router-link tag="a" class="nav-item-hold" :to="{ name: 'lista-incidencia' }">
              <i class="nav-icon i-Arrow-Circle"></i>
              <span class="nav-text">insidencias</span>
            </router-link>

            <div class="triangle"></div>
          </li>
          <!--============================
                 INFORMES
          ==============================-->
          <li v-if="role == 'admin'"
              @mouseenter="toggleSubMenu"
              :class="{ active: selectedParentMenu == 'informes' }"
              class="nav-item"
              data-item="informes"
              :data-submenu="true">
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-File-Excel"></i>
              <span class="nav-text">Informes</span>
            </a>
            <div class="triangle"></div>
          </li>

          <!--============================
            NUBE
          ==============================-->
          <li @mouseenter="toggleSubMenu"
              :class="{ active: selectedParentMenu == 'cloud' }"
              class="nav-item"
              data-item="dashboard"
              :data-submenu="false">
            <router-link tag="a" class="nav-item-hold" to="/nube">
              <i class="nav-icon i-Bar-Chart"></i>
              <span class="nav-text">Nube</span>
            </router-link>
            <div class="triangle"></div>
          </li>
          <!--============================
              SOLICITUDES
          ==============================-->
          <li v-if="role == 'admin'"
              @mouseenter="toggleSubMenu"
              :class="{ active: selectedParentMenu == 'solicitudes' }"
              class="nav-item"
              data-item="dashboard"
              :data-submenu="false">
            <router-link tag="a" class="nav-item-hold" to="/solicitudes">
              <i class="nav-icon i-Bar-Chart"></i>
              <span class="nav-text">Solicitudes</span>
            </router-link>
            <div class="triangle"></div>
          </li>
          <!--============================
                  INVENTARIO
          ==============================-->
          <li
              @mouseenter="toggleSubMenu"
              :class="{ active: selectedParentMenu == 'inventario' }"
              class="nav-item"
              data-item="inventario"
              :data-submenu="true">
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Gears"></i>
              <span class="nav-text">Inventario</span>
            </a>
            <div class="triangle"></div>
          </li>
          <!--============================
                Configuracion
          ==============================-->
          <li
              v-if="abilities.includes('*') || abilities.includes('configuracion')"
              @mouseenter="toggleSubMenu"
              :class="{ active: selectedParentMenu == 'configuracion' }"
              class="nav-item"
              data-item="configuracion"
              :data-submenu="true">
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Gears"></i>
              <span class="nav-text">Configuración</span>
            </a>
            <div class="triangle"></div>
          </li>

        </ul>
      </div>
    </vue-perfect-scrollbar>

    <vue-perfect-scrollbar
        :class="{ open: getSideBarToggleProperties.isSecondarySideNavOpen }"
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
        class="sidebar-left-secondary ps rtl-ps-none">
      <div ref="sidebarChild">
        <!--============================
             CHILDREN AFILIADOS
        ==============================-->
        <ul v-if="role == 'admin'"
            class="childNav d-none"
            data-parent="afiliados"
            :class="{ 'd-block': selectedParentMenu == 'afiliados' }">
          <li class="nav-item">
            <router-link tag="a" class to="/afiliados">
              <i class="nav-icon i-Split-Horizontal-2-Window"></i>
              <span class="item-name">Ver afiliados</span>
            </router-link>
          </li>
          <li class="nav-item" v-if="role == 'admin'">
            <router-link tag="a" class to="/afiliados/crear">
              <i class="nav-icon i-Add-User"></i>
              <span class="item-name">Crear</span>
            </router-link>
          </li>
        </ul>
        <!--============================
            CHILDREN VEHICULOS
        ==============================-->
        <ul
            class="childNav d-none"
            data-parent="vehiculos"
            :class="{ 'd-block': selectedParentMenu == 'vehiculos' }">
          <li class="nav-item" v-if="abilities.includes('*') || abilities.includes('vehiculos-listar')">
            <router-link tag="a" class :to="{name: 'vehiculos'}">
              <i class="nav-icon i-Split-Horizontal-2-Window"></i>
              <span class="item-name">Vehiculos</span>
            </router-link>
          </li>
          <li class="nav-item" v-if="abilities.includes('*') || abilities.includes('vehiculos-vinculacion')">
            <router-link tag="a" class :to="{name: 'vincular'}">
              <i class="nav-icon i-Arrow-Circle"></i>
              <span class="item-name">Vinculación</span>
            </router-link>
          </li>
          <li class="nav-item" v-if="abilities.includes('*') || abilities.includes('vehiculos-documentacion')">
            <router-link tag="a" class :to="{name: 'documentacion'}">
              <i class="nav-icon i-Arrow-Circle"></i>
              <span class="item-name">Documentación</span>
            </router-link>
          </li>
          <li class="nav-item" v-if="abilities.includes('*') || abilities.includes('vehiculos-licencia-transito')">
            <router-link tag="a" class :to="{name: 'licencia-transito'}">
              <i class="nav-icon i-Arrow-Circle"></i>
              <span class="item-name">Licencias de transito</span>
            </router-link>
          </li>
        </ul>
        <!--============================
                CHILDREN INFORMES
        ==============================-->
        <ul
            class="childNav d-none"
            data-parent="vehiculos"
            :class="{ 'd-block': selectedParentMenu == 'informes' }">
          <li class="nav-item">
            <router-link tag="a" class :to="{name: 'informes-vehiculos'}">
              <i class="nav-icon i-Split-Horizontal-2-Window"></i>
              <span class="item-name">Vehiculos</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class :to="{name: 'informes-afiliados'}">
              <i class="nav-icon i-Split-Horizontal-2-Window"></i>
              <span class="item-name">Afiliados</span>
            </router-link>
          </li>
        </ul>

        <!--============================
                CHILDREN EXTERNOS
        ==============================-->
        <ul class="childNav d-none"
            data-parent="externos"
            :class="{ 'd-block': selectedParentMenu == 'externos' }">
          <li
              v-if="abilities.includes('*') || abilities.includes('contratantes-listar')"
              class="nav-item"
          >
            <router-link tag="a" class :to="{name: 'contratantes'}">
              <i class="nav-icon i-Split-Horizontal-2-Window"></i>
              <span class="item-name">Contratantes</span>
            </router-link>
          </li>
          <li
              v-if="abilities.includes('*') || abilities.includes('contratos-listar')"
              class="nav-item">
            <router-link tag="a" class :to="{name: 'contratos'}">
              <i class="nav-icon i-Split-Horizontal-2-Window"></i>
              <span class="item-name">Contratos</span>
            </router-link>
          </li>
          <li
              v-if="abilities.includes('*') || abilities.includes('contrato-particular-listar')"
              class="nav-item">
            <router-link tag="a" class :to="{name: 'contrato-particular-lista'}">
              <i class="nav-icon i-Split-Horizontal-2-Window"></i>
              <span class="item-name">Contrato particular</span>
            </router-link>
          </li>
        </ul>

        <!--============================
                CHILDREN CARTERA
        ==============================-->
               <ul
                    class="childNav d-none"
                    data-parent="cartera"
                    :class="{ 'd-block': selectedParentMenu == 'cartera' }">
                  <li class="nav-item" v-if="role == 'admin'">
                    <router-link tag="a" class :to="{name: 'lista-cartera'}">
                      <i class="nav-icon i-Split-Horizontal-2-Window"></i>
                      <span class="item-name">Listar pagos</span>
                    </router-link>
                  </li>
                  <li class="nav-item" v-if="role == 'admin'">
                    <router-link tag="a" class :to="{name: 'crear-cartera'}">
                      <i class="nav-icon i-Split-Horizontal-2-Window"></i>
                      <span class="item-name">Registrar pago</span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link tag="a" class :to="{name: 'conductor-cartera'}">
                      <i class="nav-icon i-Split-Horizontal-2-Window"></i>
                      <span class="item-name">Mi cartera</span>
                    </router-link>
                  </li>
                </ul>
        <!--============================
            CHILDREN FACTURACION ELECTRONICA
        ==============================-->
        <ul
            class="childNav d-none"
            data-parent="facturacion-electronica"
            :class="{ 'd-block': selectedParentMenu == 'facturacion-electronica' }">
          <li class="nav-item" v-if="role == 'admin'">
            <router-link tag="a" class :to="{name: 'comprobante'}">
              <i class="nav-icon i-Split-Horizontal-2-Window"></i>
              <span class="item-name">Comprobante electronico</span>
            </router-link>
          </li>
          <li class="nav-item" v-if="role == 'admin'">
            <router-link tag="a" class :to="{name: 'notas-credito'}">
              <i class="nav-icon i-Split-Horizontal-2-Window"></i>
              <span class="item-name">Notas credito</span>
            </router-link>
          </li>
          <li class="nav-item" v-if="role == 'admin'">
            <router-link tag="a" class :to="{name: 'notas-debito'}">
              <i class="nav-icon i-Split-Horizontal-2-Window"></i>
              <span class="item-name">Notas debito</span>
            </router-link>
          </li>
        </ul>
        <!--============================
        INVENTARIO
        ==============================-->
        <ul
            class="childNav d-none"
            data-parent="inventario"
            :class="{ 'd-block': selectedParentMenu == 'inventario' }">

          <li class="nav-item">
            <router-link tag="a" class :to="{name: 'recibo-entrega-vehiculos'}">
              <i class="nav-icon i-Gears"></i>
              <span class="item-name">Recibo y entrega de vehiculos</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link tag="a" class :to="{name: 'mantenimiento-vehiculos'}">
              <i class="nav-icon i-Gears"></i>
              <span class="item-name">Mantenimiento vehiculos</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link tag="a" class :to="{name: 'chequeo-operacional'}">
              <i class="nav-icon i-Gears"></i>
              <span class="item-name">Chequeo operacional</span>
            </router-link>
          </li>

        </ul>
        <!--============================
            CHILDREN NOMINA
        ==============================-->
        <!--        <ul-->
        <!--            class="childNav d-none"-->
        <!--            data-parent="nomina"-->
        <!--            :class="{ 'd-block': selectedParentMenu == 'nomina' }">-->
        <!--          <li class="nav-item" v-if="role == 'ADMIN'">-->
        <!--            <router-link tag="a" class :to="{name: 'comprobante'}">-->
        <!--              <i class="nav-icon i-Split-Horizontal-2-Window"></i>-->
        <!--              <span class="item-name">Comprobante electronico</span>-->
        <!--            </router-link>-->
        <!--          </li>-->
        <!--        </ul>-->
        <!--============================
                CONFIGURACION
         ==============================-->
        <ul
            class="childNav d-none"
            data-parent="configuracion"
            :class="{ 'd-block': selectedParentMenu == 'configuracion' }">

          <li
              v-if="abilities.includes('*') || abilities.includes('configuracion-empresa')"
              class="nav-item"
          >
            <router-link tag="a" class :to="{name: 'empresa'}">
              <i class="nav-icon i-Gears"></i>
              <span class="item-name">Empresa</span>
            </router-link>
          </li>

          <li
              v-if="abilities.includes('*') || abilities.includes('configuracion-roles-habilidades')"
              class="nav-item"
          >
            <router-link tag="a" class :to="{name: 'roles-and-abilities'}">
              <i class="nav-icon i-Gears"></i>
              <span class="item-name">Roles y habilidades</span>
            </router-link>
          </li>

        </ul>


      </div>
    </vue-perfect-scrollbar>
    <div
        @click="removeOverlay()"
        class="sidebar-overlay"
        :class="{ open: getSideBarToggleProperties.isSecondarySideNavOpen }"
    ></div>
  </div>
  <!--=============== Left side End ================-->
</template>

<script>
import Topnav from "./TopNav";
import {isMobile} from "mobile-device-detect";

import {mapGetters, mapActions, mapState} from "vuex";

export default {
  components: {
    Topnav
  },
  data() {
    return {
      isDisplay: true,
      isMenuOver: false,
      isStyle: true,
      selectedParentMenu: "",
      isMobile
    };
  },
  mounted() {
    this.toggleSelectedParentMenu();
    window.addEventListener("resize", this.handleWindowResize);
    document.addEventListener("click", this.returnSelectedParentMenu);
    this.handleWindowResize();
  },

  beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedParentMenu);
    window.removeEventListener("resize", this.handleWindowResize);
  },
  computed: {
    ...mapGetters(["getSideBarToggleProperties"]),
    ...mapState('auth', ["role", "abilities"])
  },

  methods: {
    ...mapActions([
      "changeSecondarySidebarProperties",
      "changeSecondarySidebarPropertiesViaMenuItem",
      "changeSecondarySidebarPropertiesViaOverlay",
      "changeSidebarProperties"
    ]),

    handleWindowResize() {

      if (window.innerWidth <= 1200) {
        if (this.getSideBarToggleProperties.isSideNavOpen) {
          this.changeSidebarProperties();
        }
        if (this.getSideBarToggleProperties.isSecondarySideNavOpen) {
          this.changeSecondarySidebarProperties();
        }
      } else {
        if (!this.getSideBarToggleProperties.isSideNavOpen) {
          this.changeSidebarProperties();
        }
      }
    },
    toggleSelectedParentMenu() {
      const urlArray = this.$route.path.split("/")
      let currentParentUrl = urlArray > 2 ? urlArray.filter(x => x !== "")[1] : currentParentUrl = urlArray.filter(x => x !== "")[0];
      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "dashboards";
      }
    },
    toggleSubMenu(e) {
      let hasSubmenu = e.target.dataset.submenu;
      let parent = e.target.dataset.item;
      if (hasSubmenu) {
        this.selectedParentMenu = parent;
        this.changeSecondarySidebarPropertiesViaMenuItem(true);
      } else {
        this.selectedParentMenu = parent;
        this.changeSecondarySidebarPropertiesViaMenuItem(false);
      }
    },

    removeOverlay() {
      this.changeSecondarySidebarPropertiesViaOverlay();
      if (window.innerWidth <= 1200) {
        this.changeSidebarProperties();
      }
      this.toggleSelectedParentMenu();
    },
    returnSelectedParentMenu() {
      if (!this.isMenuOver) {
        this.toggleSelectedParentMenu();
      }
    },

    toggleSidebarDropdwon(event) {
      let dropdownMenus = this.$el.querySelectorAll(".dropdown-sidemenu.open");

      event.currentTarget.classList.toggle("open");

      dropdownMenus.forEach(dropdown => {
        dropdown.classList.remove("open");
      });
    }
  }
};
</script>

<style lang="" scoped></style>
