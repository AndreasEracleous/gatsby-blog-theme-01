import React from 'react';
import { Link } from 'gatsby';

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext;

  const postsContent = posts.map(({ slug, frontmatter }) => (
    <li key={slug}>
      <Link to={`/${slug}`} className="hover:underline">
        {frontmatter.title}
      </Link>
    </li>
  ));

  return (
    <>
      <h3>Posts about {`${tagName}`}</h3>
      <ul>{postsContent}</ul>
    </>
  );
};

export default SingleTagTemplate;
