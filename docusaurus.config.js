// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Platform',
  tagline: 'The EXPECT paltform to ensure reproducibility.',
  favicon: 'img/open-platform/favicon-new.ico',

  

  // Set the production url of your site here
  url: 'https://rspguerra.github.io', 
  baseUrl: '/Platform-developing/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rspguerra', // Usually your GitHub org/user name.
  projectName: 'Platform-developing', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenAnchors:'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
	  remarkPlugins: [remarkMath],
  	  rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" link
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [remarkMath],
  	  rehypePlugins: [rehypeKatex],
	  feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-XsQq4vP20nzHxpG5o1QP1Uo6M/UbYHrqhvbYbmCF9SzYYIXf7t6EAAvT6WYsSt9r',
      crossorigin: 'anonymous',
    },
  ],	
	
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/expect-logo-light-nbg.png',
      colorMode: {
        defaultMode: 'dark',
        
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      
      navbar: {
        title: 'Open Platform',
        logo: {
          alt: 'My Site Logo',
          src: 'img/open-platform/expect-logo-light-nbg.png',
          // 2. Image for DARK MODE (e.g., white text/icon)
          srcDark: 'img/open-platform/expect-logo-dark-nbg.png',
        },
        items: [
          
          
          
        ],
      },
      footer: {
        style: 'dark', // Footer looks best in dark mode usually
        links: [
          {
            title: 'Contact us',
            items: [
              {
                // You can replace this with a real link/email
                label: 'Get in touch', 
                href: 'https://expect-project.eu/contact', 
              },
              {
                // This allows us to put your text directly in the column
                html: `
                  <p style="font-size: 0.85rem; opacity: 0.6; margin-top: 0.5rem; line-height: 1.4;">
                    If you have any questions about the Expect project, feel free to get in touch with us.
                  </p>
                `,
              },
            ],
          },
          {
            title: 'Credits',
            items: [
              {
                html: `
                  <span style="font-size: 0.85rem; opacity: 0.6;">
                    Earth image extracted from <br/>
                    <strong>NASA Science</strong>
                  </span>
                `,
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy & Cookies',
                to: '#', // Replace with your actual privacy page link if you have one
              },
            ],
          },
        ],
        // The copyright field supports HTML, so we put the big disclaimer here
        copyright: `
          <div style="margin-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 2rem;">
            
            <div style="margin-bottom: 1.5rem; font-weight: 500;">
              © Copyright ${new Date().getFullYear()} – Expect Project
            </div>

            <div style="font-size: 0.75rem; opacity: 0.5; line-height: 1.6; max-width: 900px; margin: 0 auto; text-align: center;">
              <p>
                Views and opinions expressed are those of the author(s) only and do not necessarily reflect those of the 
                European Union or the European Climate, Infrastructure and Environment Executive Agency (CINEA). 
                Neither the European Union nor CINEA can be held responsible for them.
              </p>
              <p>
                The UK participation in the project is funded by UK Research and Innovation (UKRI) under the 
                UK government’s Horizon Europe funding guarantee, and Canadian participation in the EXPECT project 
                draws upon research supported by the Government of Canada’s New Frontiers in Research Fund (NFRF).
              </p>
            </div>
          </div>
        `,
      },
      
    }),
};

export default config;
