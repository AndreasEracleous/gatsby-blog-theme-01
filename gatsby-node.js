const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const blogPost = path.resolve(`./src/templates/BlogPost.jsx`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.nodes;

  await Promise.all(
    posts.map(async (post, index) => {
      const id = post.id;
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].id;

      await createPage({
        path: post.slug,
        component: blogPost,
        context: {
          id,
          previousPostId,
          nextPostId,
        },
      });
    })
  );
};
