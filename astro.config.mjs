import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import starlightImageZoom from 'starlight-image-zoom';
import embeds from 'astro-embed/integration';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    starlight({
      customCss: [
        './src/styles/custom.css',
      ],
      plugins: [
        starlightThemeRapide(),
        starlightImageZoom(),
      ],
      title: 'docs.contactit.fr',
      logo: {
        src: './src/assets/contactit.webp',
      },
      defaultLocale: 'root',
      sidebar: [
        {
          label: 'Certifications',
          translations: {
            'fr': 'Certifications',
          },
          collapsed: true,
          autogenerate: { directory: 'certifications' },
        },
        {
          label: 'Offensive',
          translations: {
            'fr': 'Offensif',
          },
          autogenerate: { directory: 'offensive' },
        },
        {
          label: 'Defensive',
          translations: {
            'fr': 'Defensif',
          },
          collapsed: true,
          autogenerate: { directory: 'defensive' },
        },
        {
          label: 'Opsec',
          translations: {
            'fr': 'Opsec',
          },
          collapsed: true,
          autogenerate: { directory: 'opsec' },
        },
        {
          label: 'Misc',
          translations: {
            'fr': 'Autre',
          },
          collapsed: true,
          autogenerate: { directory: 'misc' },
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
        linkedin: 'https://www.linkedin.com/in/didntchooseaname',
      },
    }),
    embeds(),
    mdx(),
  ],
});
