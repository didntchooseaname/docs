import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import starlightImageZoom from 'starlight-image-zoom'
import starlightImageZoom from 'starlight-showcases'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()] [starlightImageZoom()],
			title: 'My Docs',
			defaultLocale: 'root',
     		locales: {
				root: {
					label: 'English',
					lang: 'en', // lang is required for root locales
				},
				fr: {
					label: 'Francais',
				},
			},
			social: {
				github: 'https://github.com/didntchooseaname',
			},
			sidebar: [
			],
		}),
	],
});
