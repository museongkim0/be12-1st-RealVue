<script setup>
import { ref } from 'vue';
import Stepper from './components/Stepper.vue';
import TableHw from './components/TableHw.vue';
import TableData from './components/TableData.vue';
import UserCard2 from './components/UserCard2.vue';

import { onMounted } from 'vue';
import { useInstructorStore } from '../../stores/useInstructorStore';

const instructorStore = useInstructorStore();

onMounted(async () => {
    await instructorStore.fetchStudent()
    console.log(instructorStore.student_list)
});

const studentCount = ref(5);
</script>

<template>
    <section class="p-6 xl:max-w-6xl xl:mx-auto">
        <div class="flex justify-between items-center mb-6 bg-white rounded-lg p-4 shadow-md">
            <Stepper></Stepper>    
        </div>
        <div class="flex justify-between items-center mb-6 bg-white rounded-lg p-4 shadow-md">
            <TableHw></TableHw>  
        </div>
        <div class="flex justify-between items-center mb-6 bg-white rounded-lg p-4 shadow-md">
            <TableData></TableData>    
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mb-4 bg-white rounded-lg p-2 shadow-md">
            <UserCard2
                v-for="student in instructorStore.student_list"
                :student="student"
            ></UserCard2>
        </div>
    </section>
</template>

<style scoped>

</style>