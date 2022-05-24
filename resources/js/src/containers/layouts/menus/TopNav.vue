<template>
  <div class="main-header">
    <div class="logo">
      <img src="/images/logo-sistema.png" alt/>
    </div>

    <div @click="sideBarToggle" class="menu-toggle">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div style="margin: auto"></div>

    <div class="header-part-right">
      <!-- Full screen toggle -->
      <i
          class="i-Full-Screen header-icon d-none d-sm-inline-block"
          @click="handleFullScreen"
      ></i>
      <!-- <i class="i-Full-Screen header-icon d-none d-sm-inline-block" data-fullscreen></i> -->
      <!-- Grid menu Dropdown -->


      <!-- Notificaiton -->
      <div class="dropdown">
        <b-dropdown
            id="dropdown-1"
            text="Dropdown Button"
            class="m-md-2  badge-top-container"
            toggle-class="text-decoration-none"
            no-caret
            variant="link"
        >
          <template slot="button-content">
            <span class="badge badge-primary">0</span>
            <i class="i-Bell text-muted header-icon"></i>
          </template>
          <!-- Notification dropdown -->
          <vue-perfect-scrollbar
              :settings="{ suppressScrollX: true, wheelPropagation: false }"
              :class="{ open: getSideBarToggleProperties.isSideNavOpen }"
              ref="myData"
              class="dropdown-menu-right rtl-ps-none notification-dropdown  ps scroll"
          >
            <!-- <div class="dropdown-menu-right rtl-ps-none notification-dropdown"> -->
            <div class="dropdown-item d-flex">
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <span>Bienvenido</span>
                  <!-- <span class="badge badge-pill badge-primary ml-1 mr-1">new</span> -->
                  <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto">Hoy</span>
                </p>
                <p class="text-small text-muted m-0">
                  Bienvenido a Servipublico
                </p>
              </div>
            </div>


            <!-- </div> -->
          </vue-perfect-scrollbar>
        </b-dropdown>
      </div>
      <!-- Notificaiton End -->

      <!-- User avatar dropdown -->
      <div class="dropdown">
        <b-dropdown
            id="dropdown-1"
            text="Dropdown Button"
            class="m-md-2 user col align-self-end"
            toggle-class="text-decoration-none"
            no-caret
            variant="link"
        >
          <template slot="button-content">
            <img
                :src="'/storage/profilephoto/'+user.photo"
                id="userDropdown"
                alt
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            />
          </template>
          <div class="dropdown-menu-right" aria-labelledby="userDropdown">
            <router-link class="dropdown-item" :to="{name: 'profile'}">
              Mi Perfil
            </router-link>
          </div>
          <div class="dropdown-menu-right" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="#" @click.prevent="logoutUser">Cerrar sesión</a>
          </div>

        </b-dropdown>
      </div>
    </div>
    <search-component
        :isSearchOpen.sync="isSearchOpen"
        @closeSearch="toggleSearch"
    ></search-component>
  </div>

  <!-- header top menu end -->
</template>
<script>
import Util from "@/utils";
import Sidebar from "./Sidebar";
import searchComponent from "../common/search";
import {isMobile} from "mobile-device-detect";
import {mapGetters, mapActions} from "vuex";
import {mixin as clickaway} from "vue-clickaway";
import {mapState} from "vuex";
export default {
  mixins: [clickaway],
  components: {
    Sidebar,
    searchComponent
  },

  data() {
    return {
      isDisplay: true,

      isStyle: true,
      isSearchOpen: false,
      isMouseOnMegaMenu: true,
      isMegaMenuOpen: false
    };
  },
  mounted() {
    // document.addEventListener("click", this.closeMegaMenu);
  },
  computed: {
    ...mapGetters(["getSideBarToggleProperties"]),
    ...mapState('auth', ['user'])
  },

  methods: {
    ...mapActions([
      "changeSecondarySidebarProperties",
      "changeSidebarProperties",
      "changeThemeMode",
      "signOut"
    ]),
    ...mapActions('auth', ['logout']),
    handleFullScreen() {
      Util.toggleFullScreen();
    },
    logoutUser() {
      this.logout().then(response => {
        if (response == 'Logged out successfully') {
          this.$router.push("/auth/login");
        }
      });

    },

    closeMegaMenu() {
      this.isMegaMenuOpen = false;
      // if (!this.isMouseOnMegaMenu) {
      //   this.isMegaMenuOpen = !this.isMegaMenuOpen;
      // }
    },
    toggleMegaMenu() {
      this.isMegaMenuOpen = !this.isMegaMenuOpen;
    },
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },

    sideBarToggle(el) {
      if (
          this.getSideBarToggleProperties.isSideNavOpen &&
          this.getSideBarToggleProperties.isSecondarySideNavOpen &&
          isMobile
      ) {
        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();
      } else if (
          this.getSideBarToggleProperties.isSideNavOpen &&
          this.getSideBarToggleProperties.isSecondarySideNavOpen
      ) {
        this.changeSecondarySidebarProperties();
      } else if (this.getSideBarToggleProperties.isSideNavOpen) {
        this.changeSidebarProperties();
      } else if (
          !this.getSideBarToggleProperties.isSideNavOpen &&
          !this.getSideBarToggleProperties.isSecondarySideNavOpen &&
          !this.getSideBarToggleProperties.isActiveSecondarySideNav
      ) {
        this.changeSidebarProperties();
      } else if (
          !this.getSideBarToggleProperties.isSideNavOpen &&
          !this.getSideBarToggleProperties.isSecondarySideNavOpen
      ) {


        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();

      }
    },
    goToMyProfile() {
      this.$router.push({name: 'my-profile'})
    }
  }
};
</script>



