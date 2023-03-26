import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue2"
import checker from 'vite-plugin-checker'

export default defineConfig({
    plugins: [
        vue(),
        checker({
            typescript: true,
            vueTsc: true
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js',
            '@':  '/src',
        },
    },
});
