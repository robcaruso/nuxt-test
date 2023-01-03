import path from "path";
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import PrimeVueResolvers from "unplugin-vue-components/resolvers";
//import NuxtVitest from "vite-plugin-nuxt-test";


import VueTypeImports from "vite-plugin-vue-type-imports";

export default defineConfig({
    plugins: [
        vue(),
        VueTypeImports(),
        //NuxtVitest(),
        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],

            // global imports to register
            imports: [
                // presets
                "vue",
                "vue-router",
                "pinia",
                "vitest",
                // custom
                {
                    "@vueuse/core": [
                        // named imports
                        "useMouse", // import { useMouse } from '@vueuse/core',
                        // alias
                        ["useFetch", "useMyFetch"], // import { useFetch as useMyFetch } from '@vueuse/core',
                    ],
                    "[package-name]": [
                        "[import-names]",
                        // alias
                        ["[from]", "[alias]"],
                    ],
                },
            ],
            // Enable auto import by filename for default module exports under directories
            defaultExportByFilename: true,

            // Auto import for module exports under directories
            // by default it only scan one level of modules under the directory
            dirs: [
                // './hooks',
                // './composables' // only root modules
                "./composables/**", // all nested modules
                "./stores",
                // ...
            ],

            // Filepath to generate corresponding .d.ts file.
            // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
            // Set `false` to disable.
            dts: "./auto-imports.d.ts",

            // Auto import inside Vue template
            // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
            vueTemplate: true,

            // Custom resolvers, compatible with `unplugin-vue-components`
            // see https://github.com/antfu/unplugin-auto-import/pull/23/
            resolvers: [
                PrimeVueResolvers.PrimeVueResolver({ importStyle: true, importIcons: true }),
                /* ... */
            ],
        }),

        Components({
            extensions: ['vue', 'md', 'svg'],
            directoryAsNamespace: true,
            dts: true,
            globalNamespaces: ['global'],
            include: [/\.vue$/, /\.md$/],
            dirs: ["./components"],

            resolvers: [PrimeVueResolvers.PrimeVueResolver({ importStyle: true, importIcons: true })],
        }),
    ],
    test: {
        coverage: {
            reporter: ["text", "json", "html"],
        },
        environment: "happy-dom",
        exclude: ["**/tests-examples/**", "**/node_modules/**"],
        //setupFiles: ["./.nuxt/imports.d.ts"],
        deps: {
            inline: true,
        },
        globals: false,
        setupFiles: ["./test/setupTests.ts"]
    },
    resolve: {
        alias: {
            "~~": path.resolve(__dirname, "./"),
            "@": path.resolve(__dirname, "./"),
            "#app": path.resolve(__dirname, "./node_modules/nuxt/dist/app/index.mjs"),
            "#imports": path.resolve(__dirname, "./node_modules/nuxt/dist/pages/runtime/composables.mjs"),
        },
    },
    root: ".",
});
