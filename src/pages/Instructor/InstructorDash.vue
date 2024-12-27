<script setup>
import { ref } from 'vue';
import Stepper from './components/Stepper.vue';
import TableHw from './components/TableHw.vue';
import UserCard2 from './components/UserCard2.vue';

const studentCount = ref(5);
</script>

<template>
    <div class="xl:pl-60 pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-sate-100">
        <section class="p-6 xl:max-w-6xl xl:mx-auto">
            <div class="flex justify-between items-center mb-6 bg-white rounded-lg p-4 shadow-md">
                <Stepper></Stepper>    
            </div>
            <TableHw></TableHw>
            <div class="flex flex-wrap justify-center">
                <div v-for="n in studentCount" :key="n" class="p-2">
                    <UserCard2 class="m-4"></UserCard2>
                </div>
            </div>
            <TableHw></TableHw>    
        </section>
    </div>
</template>

<style scoped>

</style>