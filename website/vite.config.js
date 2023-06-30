import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path'
import svg from '@poppanator/sveltekit-svg'

export default defineConfig({
	plugins: [
		sveltekit(),
		svg()
	],
	resolve: {
		alias: {
			'$components': path.resolve('./src/components'),
			'$theme': path.resolve('./src/theme'),
			'$gfx': path.resolve('./src/gfx'),
			'$assets': path.resolve('./src/assets'),
		}
	}
});
