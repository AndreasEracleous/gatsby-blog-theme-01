import React from "react"
import { Link } from "gatsby"
import { SITE_METADATA, URL_LIST } from "../config/constants"

const Footer = () => {
  const title = SITE_METADATA["title"]
  const twitterURL = URL_LIST["twitter"]
  const linkedinURL = URL_LIST["linkedin"]
  const githubURL = URL_LIST["github"]
  return (
    <footer className="mt-20 mb-5">
      <nav className="flex space-x-4">
        <Link
          className="text-gray-500 text-base hover:underline"
          to="/sitemap/sitemap-index.xml"
        >
          Sitemap
        </Link>
        <Link className="text-gray-500 text-base hover:underline" to="/rss.xml">
          RSS
        </Link>
        <a
          className="text-gray-500 text-base hover:underline"
          href={twitterURL}
          aria-label="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          className="text-gray-500 text-base hover:underline"
          href={linkedinURL}
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="text-gray-500 text-base hover:underline"
          href={githubURL}
          aria-label="Github"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </nav>
      <hr className="my-3 border-gray" />
      <small className="text-base">
        © {new Date().getFullYear()} {title} | All Rights Reserved | Website
        designed &amp; developed by{" "}
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
  )
}

export default Footer
