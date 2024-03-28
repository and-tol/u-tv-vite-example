import {defineConfig, mergeConfig} from 'vitest/config';
import viteConfig from './vite.config.mts';

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true,
			environment: 'jsdom',
			include: ['**/?(*.)test.ts?(x)'],
			setupFiles: './src/shared/config/test/setupTests.ts',
			exclude: [
				'node_modules',
				'dist',
				'src/stories',
				'src/stories/**/*.{css,scss,sass,ts,tsx,mdx,svg}',
			],
		},
	})
);
