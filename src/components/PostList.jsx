import Pagination from 'components/Pagination';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Image from './Image';

const PostList = ({ data, pageContext }) => {
  const postCard = data.map(({ id, frontmatter }) => (
    <article
      className="relative transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
      key={id}
    >
      <header className="absolute left-0 top-0 z-10 p-10">
        <time className="text-base font-light text-gray-200" dateTime={frontmatter?.datetime}>
          {frontmatter?.date}
        </time>
        <h3 className="m-0 text-2xl font-semibold">
          <Link className="text-gray-100 hover:underline" to={frontmatter.slug}>
            {frontmatter?.title}
          </Link>
        </h3>
      </header>
      <div className="relative z-0 mx-auto w-full rounded-3xl before:absolute before:z-10 before:h-full before:w-full before:rounded-3xl before:bg-gray-500/50 before:content-['']">
        <Image
          className="h-96 rounded-3xl"
          filename={frontmatter?.featuredImage}
          title={frontmatter?.title}
          withFallback={!frontmatter?.featuredImage}
        />
      </div>
    </article>
  ));
  const { current, pageSize, totalCount, currentPath } = pageContext;

  return (
    <>
      <section className="grid-gap container mt-16 grid grid-cols-3">{postCard}</section>
      <Pagination
        pageIndex={current}
        currentPath={currentPath}
        totalCount={totalCount}
        pageSize={pageSize}
      />
    </>
  );
};

PostList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PostList;
