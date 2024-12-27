import { defineStore } from "pinia";
import axios from "axios";

export const useInstructorStore = defineStore('instructor', {
    state: () => ({
        hw_list: []
    }),
    actions: {
        async fetchHw() {
            const response = await axios.get(
                'https://run.mocky.io/v3/ddd5c56e-a28f-406d-846c-7679d09bbc79');
            this.hw_list = response.data.assignments;
        }
    }
});