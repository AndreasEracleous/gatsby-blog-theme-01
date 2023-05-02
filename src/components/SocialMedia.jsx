import React from 'react';

import { URL_LIST, SOCIA_MEDIA_LIST } from '../config/constants';

const SocialMedia = ({ text, className }) => {
  const twitterURL = URL_LIST.twitter;
  const linkedinURL = URL_LIST.linkedin;
  const githubURL = URL_LIST.github;

  const Twitter = SOCIA_MEDIA_LIST.twitter;
  const Linkedin = SOCIA_MEDIA_LIST.linkedin;
  const Github = SOCIA_MEDIA_LIST.github;

  return (
    <div className={className || ''}>
      <p className="my-auto text-xl">{text}</p>
      <a href={twitterURL} aria-label="Twitter" target="_blank" rel="noreferrer">
        <Twitter className="text-3xl" />
      </a>
      <a href={linkedinURL} aria-label="Linkedin" target="_blank" rel="noreferrer">
        <Linkedin className="text-3xl" />
      </a>
      <a href={githubURL} aria-label="Github" target="_blank" rel="noreferrer">
        <Github className="text-3xl" />
      </a>
    </div>
  );
};

export default SocialMedia;
