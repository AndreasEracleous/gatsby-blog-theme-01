import './src/assets/styles/main.css';

import { rootWrapper } from './root-wrapper';

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  const TRANSITION_DELAY = 600; // ms

  const savedPosition = getSavedScrollPosition(location) || [0, 0];
  const scrollToPosition = location.action === 'PUSH' ? [0, 0] : savedPosition;

  const animateScroll = () => {
    window.requestAnimationFrame(() => {
      window.scrollTo(...scrollToPosition);
    });
  };

  setTimeout(animateScroll, TRANSITION_DELAY);

  return false;
};

export const wrapPageElement = rootWrapper;
