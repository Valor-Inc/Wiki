// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Valor Wiki',
  tagline: 'The #1 source for everything related to Valor.',
  url: 'https://wiki.valorserver.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://i.imgur.com/HKW5Kyw.png',
  
  organizationName: 'Valor',
  projectName: 'Wiki',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en"],
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Valor-Inc/Wiki/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Valor',
        logo: {
          alt: 'Valor Logo',
          src: 'https://i.imgur.com/HKW5Kyw.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'category/valor-info',  // Remove leading slash
            position: 'left',
            label: 'Info',
          },
          {
            type: 'doc',
            docId: 'category/policy',      // Lowercase and remove leading slash
            position: 'left',
            label: 'Policy',
          },
          {
            to: 'https://blog.valorserver.com',
            label: 'Patchnotes',
            position: 'left'
          },
          {
            to: '/docs/info/contributing_to_the_wiki',  // Add leading /docs/
            label: 'Bug Reports and Suggestions',
            position: 'left'
          },
          {
            to: 'https://valorserver.com/ranks',
            label: 'Donate',
            position: 'left'
          },
          {
            href: 'https://github.com/Valor-inc/Wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Valor Info',
            items: [
              {
                label: 'Blog',
                to: 'https://blog.valorserver.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Main Site',
                href: 'https://valorserver.com',
              },
              {
                label: 'Discord',
                href: 'https://discord.valorserver.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.valorserver.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Valor.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
