import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import starlightImageZoom from 'starlight-image-zoom'

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
			social: {
				github: 'https://github.com/didntchooseaname',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
