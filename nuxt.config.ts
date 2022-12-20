// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [["@pinia/nuxt", { autoImports: ["defineStore", ["defineStore", "definePiniaStore"], "acceptHMRUpdate"] }]],
    css: [
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css'
    ],
    build: {
        transpile: ['primevue']
    },
    test: true
})
