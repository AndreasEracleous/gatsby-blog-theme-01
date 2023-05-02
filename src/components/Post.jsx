import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import React from 'react';

import Image from './Image';

const MyH1 = (props) => <h1 style={{ color: `tomato` }} {...props} />;
const MyParagraph = (props) => <p style={{ fontSize: '18px', lineHeight: 1.6 }} {...props} />;

const components = {
  h1: MyH1,
  p: MyParagraph,
};

const Post = ({ featuredImage, title, content, date, datetime, previous, next }) => {
  let previousLink;
  let nextLink;

  if (previous && previous?.frontmatter.slug) {
    previousLink = (
      <Link className="pagination-prev" to={previous.frontmatter.slug}>
        {previous.frontmatter.title}
      </Link>
    );
  }
  if (next && next?.frontmatter.slug) {
    nextLink = (
      <Link className="pagination-next ml-auto" to={next.frontmatter.slug}>
        {next.frontmatter.title}
      </Link>
    );
  }

  return (
    <>
      <article className="grid-gap flex flex-col text-base">
        <figure className="">
          <Image className="rounded-3xl" filename={featuredImage} title={title} />
        </figure>
        <header className="grid-gap my-auto flex flex-col">
          <time
            className="mr-auto rounded-3xl border border-gray-300 bg-white p-2"
            dateTime={datetime}
          >
            {date}
          </time>
          <h1 className="text-3xl font-semibold capitalize">{title}</h1>
        </header>
        <section className="col-span-2">
          <MDXProvider components={components}>{content}</MDXProvider>
        </section>
      </article>
      <hr className="my-5 border-gray-200" />
      <div className="flex justify-between">
        {previousLink}
        {nextLink}
      </div>
    </>
  );
};

export default Post;
