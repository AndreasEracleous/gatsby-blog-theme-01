import { Link } from 'gatsby';
import React from 'react';

import { SITE_METADATA, URL_LIST } from '../config/constants';

const Footer = () => {
  const { title } = SITE_METADATA;
  const twitterURL = URL_LIST.twitter;
  const linkedinURL = URL_LIST.linkedin;
  const githubURL = URL_LIST.github;
  return (
    <footer className="container mb-5 mt-20">
      <nav className="flex space-x-4">
        <Link className="text-base text-gray-500 hover:underline" to="/sitemap/sitemap-index.xml">
          Sitemap
        </Link>
        <Link className="text-base text-gray-500 hover:underline" to="/rss.xml">
          RSS
        </Link>
        <Link className="text-base text-gray-500 hover:underline" to="/tags">
          Tags
        </Link>
        <a
          className="text-base text-gray-500 hover:underline"
          href={twitterURL}
          aria-label="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          className="text-base text-gray-500 hover:underline"
          href={linkedinURL}
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="text-base text-gray-500 hover:underline"
          href={githubURL}
          aria-label="Github"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </nav>
      <hr className="border-gray my-3" />
      <small className="text-base">
        © {new Date().getFullYear()} {title} | All Rights Reserved | Website designed &amp;
        developed by{' '}
        <a
          href="https://andreaseracleous.com/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Andreas Eracleous
        </a>
      </small>
    </footer>
  );
};

export default Footer;
