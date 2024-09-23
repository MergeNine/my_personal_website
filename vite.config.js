// vite.config.js
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgLoader from "vite-svg-loader";

export default defineConfig({
                                plugins: [react(), svgLoader({defaultImport: 'raw'})], server: {
        port: 3055, open: true,
    }, build: {
        outDir: './dist',
    }, publicDir: 'public',
                            })
