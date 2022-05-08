const { FaTwitter, FaLinkedin, FaGithub } = require(`react-icons/fa`);

module.exports.SITE_METADATA = {
  title: `frontendlab`,
  description: `This is my coding blog.`,
  lastBuildDate: new Date(Date.now()).toISOString(),
  authorName: `Author`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  social: {
    twitter: `AndreasFrontDev`,
  },
};

module.exports.PAGE_CONTENT = {
  title: "Hey, I'm Andreas",
  seo_title: "Andreas Web developer",
  occupation: "Web developer",
  social_media: "  Follow me on:",
  blog_title: "Welcome to my blog.",
  blog_description:
    "I build things for the web. I'm focused on build lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
  subscribe_form_btn: "Subscribe",
  subscribe_form_email: "Your email address",
  subscribe_description:
    "If you want to be updated when a new post is out, sign up!",
  subscribe_thankyou: "Thank you!",
  subscribe_msg: "You have successfully joined our subscriber list.",
  subscribe_url:
    "https://assets.mailerlite.com/jsonp/41128/forms/54218114393441507/subscribe",
};

module.exports.SOCIA_MEDIA_LIST = {
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  github: FaGithub,
};

module.exports.URL_LIST = {
  twitter: "https://twitter.com/AndreasFrontDev",
  linkedin: "https://cy.linkedin.com/in/andreaseracleous",
  github: "https://github.com/AndreasEracleous",
};

module.exports.POSTS_PER_PAGE = 8;
