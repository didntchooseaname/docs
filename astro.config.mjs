import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import starlightImageZoom from 'starlight-image-zoom'
//import starlightImageZoom from 'starlight-showcases'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightThemeRapide(),
				starlightImageZoom(),
			  ],
			title: 'Docs',
			tableOfContents: true,
			defaultLocale: 'root',
			sidebar: [
				{ label: 'Home', link: '/' },
				{
				  label: 'opsec',
				  autogenerate: { directory: 'opsec' },
				},
				{
					label: 'pentest',
					autogenerate: { directory: 'pentest' },
				  },
			  ],
     		locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				fr: {
					label: 'Français',
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
