import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import starlightImageZoom from 'starlight-image-zoom';
import embeds from 'astro-embed/integration';
import mdx from '@astrojs/mdx';

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
          label: '🇬🇧 English',
          lang: 'en',
        },
        fr: {
          label: '🇫🇷 Français',
          lang: 'fr',
        },
      },
      social: {
        github: 'https://github.com/didntchooseaname',
      },
    }),
    embeds(),
	mdx(),
  ],
});
