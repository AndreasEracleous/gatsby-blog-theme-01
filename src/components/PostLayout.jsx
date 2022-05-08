import { Link } from "gatsby";
import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Image from "./Image";

const PostLayout = ({
  featuredImage,
  title,
  content,
  date,
  datetime,
  previous,
  next,
}) => {
  let previousLink;
  let nextLink;

  if (previous && previous?.slug) {
    previousLink = (
      <Link className="pagination-prev" to={`/${previous.slug}`}>
        {previous.frontmatter.title}
      </Link>
    );
  }
  if (next && next?.slug) {
    nextLink = (
      <Link className="pagination-next" to={`/${next.slug}`}>
        {next.frontmatter.title}
      </Link>
    );
  }

  return (
    <>
      <article className="text-base">
        <Image
          className="max-w-md rounded-lg ml-10 mb-10 float-right"
          filename={featuredImage}
          title={title}
        />

        <header className="mb-5">
          <time className="block text-gray mb-2" dateTime={datetime}>
            {date}
          </time>
          <h1 className="text-5xl font-semibold capitalize">{title}</h1>
        </header>
        <MDXRenderer>{content}</MDXRenderer>
      </article>
      <hr className="my-5" />
      <div className="flex justify-between">
        {previousLink}
        {nextLink}
      </div>
    </>
  );
};

export default PostLayout;
