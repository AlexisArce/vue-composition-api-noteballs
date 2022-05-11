<template>
  <Navbar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/layout/Navbar.vue";
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
