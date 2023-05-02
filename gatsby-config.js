const { SITE_METADATA } = require('./src/config/constants/index');

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const siteUrl = process.env.GATSBY_SITE_URL || 'http://localhost:8000';
const trackingId = process.env.GOOGLE_ANALYTICS_TRACKING_URL;

module.exports = {
  flags: { DEV_SSR: process.env.GATSBY_DEV_SSR || false },
  siteMetadata: {
    ...SITE_METADATA,
    siteUrl,
  },
  plugins: [
    'gatsby-alias-imports',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts/`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales/`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: 'locale',
        languages: ['en', 'de'],
        defaultLanguage: 'en',
        siteUrl,
        i18nextOptions: {
          debug: true,
          fallbackLanguage: 'en',
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-svgr-svgo',
      options: {
        inlineSvgOptions: [
          {
            test: /\.inline.svg$/,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
                'prefixIds',
                'removeDimensions',
              ],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
				{
				  site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
				  }
				}
			  `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.nodes.map((node) => ({
                ...node.frontmatter.title,
                ...node.frontmatter.date,
                description: node.excerpt,
                date: node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}/${node.frontmatter.slug}`,
                guid: `${site.siteMetadata.siteUrl}/${node.frontmatter.slug}`,
                custom_elements: [{ 'content:encoded': node.content }],
              })),
            query: `
					{
            allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
              nodes {
                frontmatter {
                  title
                  slug
                  date
                }
                body
                excerpt
              }
            }
					}
				  `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
            // optional configuration to specify external rss feed, such as feedburner
            // link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 640,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 85,
          placeholder: 'none',
        },
      },
    },
    'gatsby-transformer-sharp',
  ],
};
