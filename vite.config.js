import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()], server: {
        port: 3050,
        open: true
    }, build: {
        outDir: 'dist'
    }, css: {
        postcss: './postcss.config.js',
    },
})