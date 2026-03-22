import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';

const config: Config = {
  title: 'PartnerFlow',
  tagline: 'Service management for manufacturers, service providers, and customers',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://getsupportflow.github.io',
  baseUrl: '/Partner-flow-documentation/',

  organizationName: 'getsupportflow',
  projectName: 'Partner-flow-documentation',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/warrantyflow/Partner-flow-documentation/tree/main/',
          docItemComponent: '@theme/ApiItem',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Polyfill Node.js built-ins required by postman-code-generators (a transitive
    // dependency of docusaurus-plugin-openapi-docs) when running under webpack 5.
    function nodePolyfillPlugin() {
      return {
        name: 'node-polyfill-plugin',
        configureWebpack() {
          return {
            resolve: {
              fallback: {
                path: false,
                fs: false,
                os: false,
                stream: false,
                util: false,
                assert: false,
                url: false,
                http: false,
                https: false,
                zlib: false,
              },
            },
          };
        },
      };
    },
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'partnerflow-api',
        docsPluginId: 'classic',
        config: {
          partnerflow: {
            specPath: './openapi.yaml',
            outputDir: 'docs/api',
            sidebarOptions: {
              groupPathsBy: 'tagGroup',
              categoryLinkSource: 'tag',
            },
            hideSendButton: false,
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig: {
    image: 'img/warrantyflow-social-card.jpg',
    navbar: {
      logo: {
        alt: 'PartnerFlow Logo',
        src: 'img/Partner_Flow_Logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/api/warrantyflow-v-3-api',
          label: 'API Reference',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/how-it-works',
            },
            {
              label: 'How It Works',
              to: '/docs/getting-started/how-it-works',
            },
            {
              label: 'FAQ',
              to: '/docs/faq',
            },
            {
              label: 'Release Notes',
              to: '/docs/release-notes',
            },
          ],
        },
        {
          title: 'API',
          items: [
            {
              label: 'API Reference',
              to: '/docs/api/warrantyflow-v-3-api',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Help Center',
              to: '/docs/faq',
            },
            {
              label: 'Contact Support',
              href: 'mailto:support@warrantyflow.com',
            },
            {
              label: 'Support Page',
              to: '/docs/support',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Portal',
              href: 'https://portal.warrantyflow.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PartnerFlow. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
