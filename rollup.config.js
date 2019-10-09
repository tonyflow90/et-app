import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import copy from "rollup-plugin-copy-assets";
import minify from 'rollup-plugin-babel-minify';
import workbox from 'rollup-plugin-workbox';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/et-app.js',
    output: {
        file: 'docs/et-app.js',
        format: 'iife', // immediately-invoked function expression — suitable for <script> tags
        sourcemap: true
    },
    plugins: [
        resolve(), // tells Rollup how to find date-fns in node_modules
        commonjs(), // converts date-fns to ES modules
        copy({
            assets: [
                "src/assets"
            ],
        }),
        workbox({
            /** @type {'generateSW'|'injectManifest'} default 'generateSW' */
            mode: 'generateSW',
            workboxConfig: require('./workbox-config')
        }),
        production && minify({ comments: false }) // minify, but only in production
    ]
};
