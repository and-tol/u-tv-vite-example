/// <reference types="vitest" />
/// <reference types="vite/client" />
import {defineConfig} from 'vite';
import {TanStackRouterVite} from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import ViteStylelint from 'vite-plugin-stylelint';
import linaria from '@wyw-in-js/vite';
import removeConsole from 'vite-plugin-remove-console';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		linaria({
			evaluate: true,
			displayName: process.env.NODE_ENV !== 'production',
			variableNameConfig: 'var',
			classNameSlug: (hash, title) => `${title}_${hash}`,
		}),
		tsconfigPaths(),
		react(),
		// {plugins: [["@swc/plugin-styled-components",{}]]}
		svgr({include: ['**/*.svg']}),
		ViteStylelint({
			lintDirtyOnly: true,
			exclude: [
				'dist',
				'node_modules',
				'src/stories',
				'src/**/*.stories.*',
				'./src/stories/**/*.{css,scss,sass,ts,tsx,mdx,svg}',
				'src/stories/button.css',
			],
		}),
		removeConsole(),
		TanStackRouterVite(),
	],
	server: {
		port: 3001,
	},
	mode: 'fast-refresh',
	test: {
		// globals: true,
		// environment: 'jsdom',
		// include: ['**/?(*.)test.ts?(x)'],
		// setupFiles: './src/shared/config/test/setupTests.ts',
		// exclude: [
		// 	'node_modules',
		// 	'dist',
		// 	'src/stories',
		// 	'src/stories/**/*.{css,scss,sass,ts,tsx,mdx,svg}',
		// ],
	},
	build: {
		minify: 'terser', // Or another minifier if needed
		target: 'es6', // Or a higher target if needed
		rollupOptions: {
			// ... rollup options if needed
			output: {
				// Adjust output options if needed
			},
			// 		external: ['app/styles/index.scss'],
		},
	},
});
