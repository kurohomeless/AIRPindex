// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import starlightLlmsTxt from 'starlight-llms-txt';
import starlightCoolerCredit from 'starlight-cooler-credit';
import starlightPageActions from 'starlight-page-actions';



export default defineConfig({
  site: 'https://localhost:4321',
  
  integrations: [
    starlight({
      favicon: '/favicon.svg',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon-96x96.png',
            sizes: '96x96',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'shortcut icon',
            href: '/favicon.ico',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'apple-mobile-web-app-title',
            content: 'AIRPindex',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        },
      ],
      plugins: [
        starlightPageActions(),
        starlightLlmsTxt({
          projectName: 'AIRPindex',
          description: 'created by kurohomeless',
        }),

        starlightCoolerCredit(),
      ],
      title: 'AIRPindex',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
      },
      customCss: ['./src/styles/forest.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/kurohomeless/AIRPindex',
        },
      ],
      sidebar: [
        {
          label: 'Resources',
          translations: {
            en: 'Resources',
            id: 'Sumber Daya',
            es: 'Recursos',
            tl: 'Mga Sanggunian',
            vi: 'Tài nguyên',
            'pt-BR': 'Recursos',
            ko: '자료 및 링크',
            'zh-TW': '精選資源',
            'zh-CN': '精选资源',
            ja: '関連リソース',
            ar: 'المصادر والمراجع',
          },
          items: [
            // Each item here is one entry in the navigation menu.
            {
              autogenerate: {
                directory: 'ai-index',
              },
            },
          ],
        },
        {
          label: 'Knowledge Base',
          items: [{ autogenerate: { directory: 'knowledge' } }],
        },
        {
          label: 'support',
          translations: {
            en: 'Support',
            id: 'Dukungan',
            es: 'Soporte',
            tl: 'Suporta',
            vi: 'Hỗ trợ',
            'pt-BR': 'Apoio',
            ko: '후원 및 지원',
            'zh-TW': '支持與贊助',
            'zh-CN': '支持与赞助',
            ja: 'サポート・支援',
            ar: 'الدعم والتبَرُّع',
          },

          slug: 'support',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/kurohomeless/AIRPindex/edit/main/docs/',
      },
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
          lang: 'en',
        },

        es: {
          label: 'Español',
          lang: 'es',
        },

        tl: {
          label: 'Filipino',
          lang: 'tl',
        },

        vi: {
          label: 'Tiếng Việt',
          lang: 'vi',
        },

        'pt-br': {
          label: 'Português (Brasil)',
          lang: 'pt-BR',
        },

        ko: {
          label: '한국어',
          lang: 'ko',
        },

        'zh-tw': {
          label: '繁體中文',
          lang: 'zh-TW',
        },

        'zh-cn': {
          label: '简体中文',
          lang: 'zh-CN',
        },

        ja: {
          label: '日本語',
          lang: 'ja',
        },

        id: {
          label: 'Bahasa Indonesia',
          lang: 'id',
        },

        ar: {
          label: 'العربية',
          lang: 'ar',
          dir: 'rtl',
        },
      },
    }),
  ],
});
