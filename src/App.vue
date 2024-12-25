<script setup>
import Aside from './pages/Aside.vue'
import Nav from './pages/Nav.vue'
import router from './router';
import {useRoute} from 'vue-router'

const route = useRoute();
</script>

<template>
  <Nav v-if="!route.meta.hideNav"></Nav>
  <Aside  v-if="!route.meta.hideAside"> </Aside>
  <router-view></router-view>
  



</template>

<style scoped></style>
