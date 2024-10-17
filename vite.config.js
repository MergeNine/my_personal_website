const tailwindcss = require('tailwindcss');
const path = require('path');
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [
                tailwindcss,
            ],
        },
    },
    server: {
        port: 3055,
        open: true,
    },
    build: {
        outDir: './dist',
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
            },
        },
    },
    root: ".",
});