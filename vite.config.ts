import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vite.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/main.ts"),
            formats: ["es", "cjs"],
            name: "cyrus-ui",
            // the proper extensions will be added
            fileName: "cyrus-ui",
            cssFileName: "style",
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["react", "react/jsx-runtime"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM"
                },
            },
        },
        minify: "esbuild"
    },
    plugins: [react(), dts({tsconfigPath: "./tsconfig.app.json"}), cssInjectedByJsPlugin()],
});