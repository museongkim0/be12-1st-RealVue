<script setup>
import Aside from './pages/Aside.vue'
import Nav from './pages/Nav.vue'
import router from './router';
import {useRoute} from 'vue-router'

const route = useRoute();
</script>

<template>
  <div class="layout">
    <!-- Navigation -->
    <Nav v-if="!route.meta.hideNav" class="nav"></Nav>

    <!-- Aside -->
    <Aside v-if="!route.meta.hideAside" class="aside"></Aside>

    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 240px 1fr; 
  grid-template-rows: 60px 1fr; 
  height: 100vh; 
}

.nav {
  grid-column: span 2;
  grid-row: 1; 
  background-color: #f8f9fa;
  height: 60px; 
  z-index: 1000; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

.aside {
  grid-column: 1; 
  grid-row: 2; 
  background-color: #e9ecef;
  overflow-y: auto;
}

.main-content {
  grid-column: 2; 
  grid-row: 2; 
  padding: 20px; 
  overflow-y: auto; 
  background-color: #ffffff; 
  position: relative;
}
</style>
