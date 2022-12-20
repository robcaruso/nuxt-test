import { defineConfig } from "vitest/config"
import AutoImport from "unplugin-auto-import/vite"
import VueTypeImports from "vite-plugin-vue-type-imports"
import NuxtVitest from "vite-plugin-nuxt-test";
import vue from "@vitejs/plugin-vue"

export default defineConfig({
    plugins: [
        AutoImport(),
        VueTypeImports(),
        vue(),
        AutoImport({
            imports: ["vue"]
        })

    ],
    test: {
        environment: "jsdom"
    }
});