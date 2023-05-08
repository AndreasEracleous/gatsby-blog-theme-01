const path = require('path');

const { POSTS_PER_PAGE } = require('./src/config/constants');

const readingTime = require(`reading-time`);
const slugify = require(`@sindresorhus/slugify`);
const { compileMDXWithCustomOptions } = require(`gatsby-plugin-mdx`);
const { remarkHeadingsPlugin } = require(`./remark-headings-plugin`);

const homepageTemplate = path.resolve(`./src/templates/Homepage.jsx`);

const langPrefix = (page) =>
  page.context.language === page.context.i18n.defaultLanguage &&
  !page.context.i18n.generateDefaultLanguagePage
    ? ''
    : `/${page.context.language}`;

/*
// remove default index.jsx for homepage and set a new one location
exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions;
  return new Promise((resolve) => {
    // if the page component is the index page component
    if (page.componentPath === `${__dirname}/src/templates/Homepage.jsx`) {
      deletePage(page);
      // create a new page but with '/' as path
      createPage({
        ...page,
        matchPath: `${langPrefix(page)}/*`,
        path: '/',
      });
    }
    resolve();
  });
};
*/

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    });
    createNodeField({
      node,
      name: `slug`,
      value: `/${slugify(node.frontmatter.title)}`,
    });
  }
};

exports.createSchemaCustomization = async ({
  getNode,
  getNodesByType,
  pathPrefix,
  reporter,
  cache,
  actions,
  schema,
  store,
}) => {
  const { createTypes } = actions;

  const headingsResolver = schema.buildObjectType({
    name: `Mdx`,
    fields: {
      headings: {
        type: `[MdxHeading]`,
        async resolve(mdxNode) {
          const fileNode = getNode(mdxNode.parent);

          if (!fileNode) {
            return null;
          }

          const result = await compileMDXWithCustomOptions(
            {
              source: mdxNode.body,
              absolutePath: fileNode.absolutePath,
            },
            {
              pluginOptions: {},
              customOptions: {
                mdxOptions: {
                  remarkPlugins: [remarkHeadingsPlugin],
                },
              },
              getNode,
              getNodesByType,
              pathPrefix,
              reporter,
              cache,
              store,
            }
          );

          if (!result) {
            return null;
          }

          return result.metadata.headings;
        },
      },
    },
  });

  createTypes([
    `
      type MdxHeading {
        value: String
        depth: Int
      }
    `,
    headingsResolver,
  ]);
};

const createTagPages = async (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve('./src/templates/allTagsIndex.jsx');
  const singleTagIndexTemplate = path.resolve('./src/templates/singleTagIndex.jsx');
  const postsByTag = {};

  posts.forEach(async (node) => {
    if (node.frontmatter?.tags) {
      node.frontmatter.tags.forEach((tag) => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = [];
        }
        postsByTag[tag].push(node);
      });
    }
  });

  const tags = Object.keys(postsByTag);

  await createPage({
    path: '/tags',
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort(),
    },
  });

  await tags.forEach(async (tagName) => {
    const posts = postsByTag[tagName];
    await createPage({
      path: `/tags/${tagName}`,
      component: singleTagIndexTemplate,
      context: {
        posts,
        tagName,
      },
    });
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(sort: { frontmatter: { date: DESC } }, limit: 1000) {
          nodes {
            id
            frontmatter {
              slug
              tags
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors);
    return;
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.nodes;
  const totalCount = posts.length;
  const length = Math.ceil(totalCount / POSTS_PER_PAGE);
  const homepageURL = '/';
  await createTagPages(createPage, posts);

  await Promise.all(
    Array.from({ length }).map(async (_, i) => {
      const index = i + 1;
      const path = i === 0 ? homepageURL : `${homepageURL}${index}`;

      await createPage({
        path,
        component: homepageTemplate,
        context: {
          limit: POSTS_PER_PAGE,
          skip: i * POSTS_PER_PAGE,
          current: index,
          pageSize: length,
          totalCount,
          currentPath: path,
        },
      });
    })
  );

  await Promise.all(
    posts.map(async (post, index) => {
      const { id, frontmatter } = post;
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId = index === totalCount - 1 ? null : posts[index + 1].id;
      await createPage({
        path: frontmatter.slug,
        component: `${path.resolve(`./src/templates/BlogPost.jsx`)}?__contentFilePath=${
          post.internal.contentFilePath
        }`,
        context: {
          id,
          previousPostId,
          nextPostId,
        },
      });
    })
  );
};
