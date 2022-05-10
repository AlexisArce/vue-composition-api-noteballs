<template>
  <RouterLink to="/">Notes</RouterLink>
  <RouterLink to="/stats">Stats</RouterLink>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
