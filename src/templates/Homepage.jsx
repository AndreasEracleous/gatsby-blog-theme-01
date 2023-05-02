import LanguageSwitcher from 'components/LanguageSwitcher';
import NewsletterForm from 'components/NewsletterForm';
import PostList from 'components/PostList';
import SocialMedia from 'components/SocialMedia';
import { PAGE_CONTENT } from 'config/constants';
import { motion } from 'framer-motion';
import { graphql, Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React, { useEffect } from 'react';

const Homepage = ({ data, ...props }) => {
  const { t } = useTranslation();
  const { nodes } = data.allMdx;
  const { title } = PAGE_CONTENT;
  const seoTitle = PAGE_CONTENT.seo_title;
  const { occupation } = PAGE_CONTENT;
  const blogTitle = PAGE_CONTENT.blog_title;
  const blogDesc = PAGE_CONTENT.blog_description;
  const socialMediaText = PAGE_CONTENT.social_media;
  const subscribeURL = PAGE_CONTENT.subscribe_url;

  const welcome = (
    <p className="mx-auto mt-4 text-center text-2xl">
      Helping developers to build a better custom server render templates with Tailwind CSS that
      focus on user interface, user experience, faster page loads and Lighthouse scores.
    </p>
  );

  const intro = (
    <div className="container mx-auto mt-10 flex flex-col rounded-3xl bg-purple-500 p-10 text-center">
      <h1 className="mb-5 text-center">Building Server Side Rendering templates for Developers</h1>
      {welcome}
      <Link to="/" className="mx-auto mt-8 rounded-full bg-gray-900 px-5 py-3 text-slate-50">
        Check out Themes
      </Link>
      <SocialMedia className="mt-8 flex justify-center space-x-4" text={socialMediaText} />
    </div>
  );

  return (
    <motion.div
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
      <LanguageSwitcher />
      <p>{t('message')}</p>
      {intro}
      <NewsletterForm actionUrl={subscribeURL} />
      <PostList data={nodes} {...props} />
    </motion.div>
  );
};

export default Homepage;

export const query = graphql`
  query SITE_INDEX_QUERY($skip: Int, $limit: Int, $language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }, limit: $limit, skip: $skip) {
      nodes {
        id
        frontmatter {
          title
          slug
          datetime: date
          date(formatString: "DD MMMM YYYY")
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 640, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`;
