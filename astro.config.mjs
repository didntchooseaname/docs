import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import starlightImageZoom from 'starlight-image-zoom';
import embeds from 'astro-embed/integration';
import mdx from '@astrojs/mdx';
import astroD2 from 'astro-d2';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://docs.contactit.fr',
  integrations: [
    starlight({
      credits: false,
      lastUpdated: true,
      favicon: './public/contactit.svg',
      customCss: ['./src/styles/custom.css'],
      plugins: [starlightThemeRapide(), starlightImageZoom()],
      title: 'docs.contactit.fr',
      components: {
        Head: "./src/components/starlight/Head.astro",
      },
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: '/og.png'
          }
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:description',
            content: 'Infosec, Opsec and technical documentations'
          }
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:image',
            content: '/og.png'
          }
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:description',
            content: 'Infosec, Opsec and technical documentations'
          }
        }
      ],
      logo: {
        src: './src/assets/contactit.webp'
      },
      defaultLocale: 'root',
      sidebar: [
        {
          label: 'Certifications',
          translations: {
            fr: 'Certifications'
          },
          collapsed: false,
          autogenerate: {
            directory: 'certifications',
            collapsed: true
          }
        },
        {
          label: 'Offensive',
          translations: {
            fr: 'Offensif'
          },
          autogenerate: {
            directory: 'offensive',
            collapsed: true
          }
        },
        {
          label: 'Defensive',
          translations: {
            fr: 'Defensif'
          },
          collapsed: false,
          autogenerate: {
            directory: 'defensive',
            collapsed: true
          }
        },
        {
          label: 'Opsec',
          translations: {
            fr: 'Opsec'
          },
          collapsed: false,
          autogenerate: {
            directory: 'opsec',
            collapsed: true
          }
        },
        {
          label: 'Misc',
          translations: {
            fr: 'Autre'
          },
          collapsed: false,
          autogenerate: {
            directory: 'misc',
            collapsed: true
          }
        },
        {
          slug: 'my-configuration',
          label: 'My GNU/Linux workstation configuration',
          translations: {
            fr: 'Ma configuration laptop GNU/Linux'
          },
          collapsed: false,
        }
      ],
      locales: {
        root: {
          label: '🇬🇧 English',
          lang: 'en'
        },
        fr: {
          label: '🇫🇷 Français',
          lang: 'fr'
        }
      },
      social: {
        github: 'https://github.com/didntchooseaname',
        linkedin: 'https://www.linkedin.com/in/didntchooseaname'
      }
    }),
    embeds(),
    mdx(),
    astroD2({
      skipGeneration: true
    })
  ]
});