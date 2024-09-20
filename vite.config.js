import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(
    {
        plugins: [react()], server: {
            port: 3055, open: true, // This will open the browser automatically
        }, build: {
            outDir: './dist',
        }, publicDir: 'public', // This should typically be 'public' at the root
    })