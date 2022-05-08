import React from "react"
import { Link } from "gatsby"
import { URL_LIST } from "../config/constants"

const Footer = () => {
  const twitterURL = URL_LIST["twitter"]
  const linkedinURL = URL_LIST["linkedin"]
  const githubURL = URL_LIST["github"]
  return (
    <footer className="mt-20 mb-5">
      <nav className="flex space-x-4">
        <Link
          className="text-gray text-base hover:underline"
          to="/sitemap/sitemap-index.xml"
        >
          RSS
        </Link>
        <a
          className="text-gray text-base hover:underline"
          href={twitterURL}
          aria-label="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          className="text-gray text-base hover:underline"
          href={linkedinURL}
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="text-gray text-base hover:underline"
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
        © {new Date().getFullYear()} frontendlab | All Rights Reserved | Website
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
