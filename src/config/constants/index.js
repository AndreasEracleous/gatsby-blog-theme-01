const { FaTwitter, FaLinkedin, FaGithub } = require(`react-icons/fa`);

module.exports.SITE_CONFIG = {
  // Site info
  useNewsletterForm: true, // Show Newsletter Form on Homepage
  useDefaultDarkMode: false, // Choose theme mode by default 'Light' or 'Dark'
  useDefaultSystemColorTheme: false, // Used to detect if the user has requested a light or dark color theme
};

module.exports.SITE_METADATA = {
  title: `builtfordev`,
  description: `This is my coding blog.`,
  lastBuildDate: new Date().toISOString(),
  authorName: `Andreas`,
  social: {
    twitter: `AndreasFrontDev`,
  },
};

module.exports.PAGE_CONTENT = {
  title_1: 'built',
  title_2: 'for',
  title_3: 'dev',
  seo_title: 'Andreas Web developer',
  title: 'Helping Developers Create Gatsby Themes & templates',
  occupation: 'Web developer',
  social_media: 'Follow me on:',
  blog_description:
    'Focuses on custom server render templates to help developer to make life easier with faster experience on the web page loads, better Lighthouse scores, and lower bounce rates.',
  subscribe_form_btn: 'Subscribe',
  subscribe_form_email: 'Your email address',
  subscribe_description: 'If you want to be updated when a new theme is out, sign up!',
  subscribe_thankyou: 'Thank you!',
  subscribe_msg: 'You have successfully joined our subscriber list.',
  subscribe_url: 'https://assets.mailerlite.com/jsonp/41128/forms/54218114393441507/subscribe',
};

module.exports.SOCIA_MEDIA_LIST = {
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  github: FaGithub,
};

module.exports.URL_LIST = {
  twitter: 'https://twitter.com/AndreasFrontDev',
  linkedin: 'https://cy.linkedin.com/in/andreaseracleous',
  github: 'https://github.com/AndreasEracleous',
};

module.exports.POSTS_PER_PAGE = 8;
