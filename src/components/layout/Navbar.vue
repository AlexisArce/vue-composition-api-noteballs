<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

        <a
          role="button"
          @click.prevent="showMobileNav = !showMobileNav"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
      >
        <div class="navbar-end">
          <RouterLink
            class="navbar-item"
            active-class="is-active"
            to="/"
            @click="hideMobileNav"
          >
            Notes</RouterLink
          >
          <RouterLink
            class="navbar-item"
            active-class="is-active"
            to="/stats"
            @click="hideMobileNav"
            >Stats</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@/components/layout/Navbar.vue";

const showMobileNav = ref(false);

const hideMobileNav = () => {
  const navbarMenu = document.getElementsByClassName("navbar-menu")[0];
  /*
  if (showMobileNav.value) {
    navbarMenu.style.display = "none";
    showMobileNav.value = false;
  } else {
    navbarMenu.style.display = "block";
    showMobileNav.value = true;
  }
  */
};
</script>

<style>
@media screen and (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
