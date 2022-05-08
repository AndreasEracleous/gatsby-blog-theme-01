import { graphql } from "gatsby";
import React from "react";
import Seo from "../components/Seo";
import PostLayout from "../components/PostLayout";

const BlogPost = ({ data, pageContext }) => {
  const {
    id,
    body,
    frontmatter: { featuredImage, title, date, datetime },
  } = data.mdx;

  return (
    <>
      <Seo title={title} />
      <hr className="border-gray-light mb-8" />
      <PostLayout
        featuredImage={featuredImage}
        title={title}
        content={body}
        date={date}
        datetime={datetime}
        previous={data.previous}
        next={data.next}
        key={id}
      />
    </>
  );
};

export default BlogPost;

export const query = graphql`
  query BLOG_POST_BY_SLUG(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    mdx(id: { eq: $id }) {
      id
      slug
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
      slug
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      slug
      frontmatter {
        title
      }
    }
  }
`;
