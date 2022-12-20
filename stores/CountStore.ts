import { defineStore } from "pinia"

export const useCountStore = defineStore("CountStore", () => {
    const count = ref(0);
    function plusCount() {
        count.value++
    }
    function minusCount() {
        count.value--
    }
    return { count, plusCount, minusCount }
});



