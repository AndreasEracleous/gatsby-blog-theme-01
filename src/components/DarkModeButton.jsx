import MoonIcon from 'assets/svg/moon.inline.svg';
import SunIcon from 'assets/svg/sun.inline.svg';
import clsx from 'clsx';
import { ThemeContext } from 'context/theme';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useContext, useMemo, memo } from 'react';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

const DarkModeButton = ({ className }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onClickTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const iconSwitch = useMemo(
    () =>
      theme === 'light' ? (
        <MoonIcon className="h-5 text-xl leading-none text-gray-700 dark:text-gray-500" />
      ) : (
        <SunIcon className="h-5 text-xl leading-none text-gray-400 dark:text-yellow-300" />
      ),
    [theme]
  );

  const buttonSwitch = useMemo(
    () => (
      <button
        type="button"
        className={clsx(
          'flex w-[53px] justify-between rounded-full bg-slate-300 p-1 dark:bg-slate-700',
          className,
          theme === 'light' ? 'flex-row' : 'flex-row-reverse'
        )}
        aria-label="Dark Mode"
        onClick={onClickTheme}
      >
        {iconSwitch}
        <motion.div
          className="my-auto aspect-square h-5 w-5 rounded-full bg-white text-xl shadow-md"
          transition={spring}
          layout
        />
      </button>
    ),
    [className, theme, onClickTheme, iconSwitch]
  );

  return buttonSwitch;
};

DarkModeButton.defaultProps = {
  className: null,
};

DarkModeButton.propTypes = {
  className: PropTypes.string,
};

export default memo(DarkModeButton);
