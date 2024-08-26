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
      tableOfContents: true,
      defaultLocale: 'root',
      
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
