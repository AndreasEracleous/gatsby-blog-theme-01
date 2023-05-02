import { Link } from 'gatsby';
import React from 'react';

const AllTagsTemplate = ({ data, pageContext }) => {
  const { tags } = pageContext;
  const tagsContent = tags.map((tagName) => (
    <li key={tagName}>
      <Link to={tagName} className="hover:underline">
        {tagName}
      </Link>
    </li>
  ));
  return (
    <>
      <h3>Browser by Tags</h3>
      <ul>{tagsContent}</ul>
    </>
  );
};

export default AllTagsTemplate;
