import Post from 'components/Post';
import Seo from 'components/Seo';
import { motion } from 'framer-motion';
import { graphql } from 'gatsby';
import React from 'react';

const BlogPost = ({ data, children, isVisible }) => {
  const {
    id,
    frontmatter: { featuredImage, title, date, datetime },
  } = data.mdx;

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{
        type: 'spring',
        mass: 0.35,
        stiffness: 75,
        duration: 0.3,
      }}
    >
      <hr className="mb-8 border-gray-200" />
      <Post
        featuredImage={featuredImage}
        title={title}
        content={children}
        date={date}
        datetime={datetime}
        previous={data.previous}
        next={data.next}
        key={id}
      />
    </motion.div>
  );
};

export default BlogPost;

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>;

export const query = graphql`
  query BLOG_POST_BY_SLUG($id: String!, $previousPostId: String, $nextPostId: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        datetime: date
        date(formatString: "DD MMMM YYYY")
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      frontmatter {
        title
        slug
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      frontmatter {
        title
        slug
      }
    }
  }
`;
