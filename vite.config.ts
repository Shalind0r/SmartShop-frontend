import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			pages: '/src/pages',
			widgets: '/src/widgets',
			features: '/src/features',
			entities: '/src/entities',
			shared: '/src/shared',
			icons: '/src/shared/static/images/icons',
			images: '/src/shared/static/images',
		},
	},
	plugins: [react(), svgr()],
});
