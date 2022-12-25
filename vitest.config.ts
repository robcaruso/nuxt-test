
import path from "path";
import { defineConfig } from "vitest/config"
import AutoImport from "unplugin-auto-import/vite"
import PrimeVueResolvers from "unplugin-vue-components/resolvers";
import VueTypeImports from "vite-plugin-vue-type-imports"
import Components from "unplugin-vue-components/vite";

import NuxtVitest from "vite-plugin-nuxt-test";
import Vue from "@vitejs/plugin-vue"

export default defineConfig({
    plugins: [
        VueTypeImports(),
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
        AutoImport({
            imports: ["vue", {
                '#app': [
                    // named imports
                    'useFetch', // import { useMouse } from '@vueuse/core',
                    // alias
                ],
            }],
        }),
        Components({

            resolvers: [PrimeVueResolvers.PrimeVueResolver({ importStyle: true, importIcons: true }),]
        })
    ],

    test: {
        environment: "jsdom",
        globals: true,
    },
    resolve: {
        alias: {
            "~~": path.resolve(__dirname, "./"),
            "@@": path.resolve(__dirname, "./"),
            "~": path.resolve(__dirname, "./"),
            "@": path.resolve(__dirname, "./"),
            "#app": path.resolve(__dirname, "./node_modules/nuxt/dist/app/index.mjs"),
            "#imports": path.resolve(__dirname, "./node_modules/nuxt/dist/pages/runtime/composables.mjs"),
            "#head": path.resolve(__dirname, "./node_modules/nuxt/dist/head/runtime/index.d.ts"),
            //"#build": path.resolve(__dirname, ""),

        },
    },
});