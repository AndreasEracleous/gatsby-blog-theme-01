import { createElement } from 'react';

import { rootWrapper } from './root-wrapper';

const applyDarkModeClass = `
(function() {
  const setRawTheme = (rawTheme) => {
    const root = document.documentElement;
    root.classList.toggle('dark', rawTheme === 'dark');
  };

  try {
    const mode = localStorage.getItem('color-theme');
    setRawTheme(mode);
  } catch (e) {}
})();

`;
export const onRenderBody = ({ setPreBodyComponents }) => {
  const script = createElement('script', {
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
    key: 'noflashJS',
  });
  setPreBodyComponents([script]);
};

export const wrapPageElement = rootWrapper;
