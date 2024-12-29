<script setup>
import Aside from './pages/Aside.vue'
import Nav from './pages/Nav.vue'
import router from './router';
import {useRoute} from 'vue-router'
import StudentAside from './pages/StudentAside.vue';

const route = useRoute();
</script>

<template>
  <!-- Navigation -->
  <Nav v-if="!route.meta.hideNav" class="nav"></Nav>
  
  <!-- Aside -->
  <component 
    :is="route.meta?.asideComponent || Aside"
    v-if="!route.meta?.hideAside"
  ></component>  <div class="layout">


    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>
 
