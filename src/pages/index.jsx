import { graphql } from "gatsby";
import React from "react";
import Seo from "../components/Seo";
import PostListLayout from "../components/PostListLayout";
import SubscribeForm from "../components/SubscribeForm";
import SocialMedia from "../components/SocialMedia";
import { PAGE_CONTENT } from "../config/constants";

const IndexPage = ({ data, location }) => {
  const { nodes } = data.allMdx;
  const title = PAGE_CONTENT["title"];
  const seoTitle = PAGE_CONTENT["seo_title"];
  const occupation = PAGE_CONTENT["occupation"];
  const blogTitle = PAGE_CONTENT["blog_title"];
  const blogDesc = PAGE_CONTENT["blog_description"];
  const socialMediaText = PAGE_CONTENT["social_media"];
  const subscribeURL = PAGE_CONTENT["subscribe_url"];

  const intro = (
    <h1 className="max-w-5xl tracking-tight text-black text-5xl font-bold lg:text-6xl xl:text-7xl">
      {title},
      <br />
      <span className="text-blue">{occupation}</span>.
    </h1>
  );

  const welcome = (
    <>
      <h2 className="font-light text-4xl mt-5">{blogTitle}</h2>
      <p className="mt-4 max-w-3xl text-2xl">{blogDesc}</p>
    </>
  );

  return (
    <>
      <Seo title={seoTitle} />
      {intro}
      {welcome}
      <SubscribeForm actionUrl={subscribeURL} />
      <SocialMedia
        className="flex space-x-4 mt-3 ml-3"
        text={socialMediaText}
      />
      <PostListLayout data={nodes} />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        slug
        frontmatter {
          title
          datetime: date
          date(formatString: "DD MMMM YYYY")
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                width: 300
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;
