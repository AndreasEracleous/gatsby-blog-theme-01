import DarkModeButton from 'components/DarkModeButton';
import { PAGE_CONTENT } from 'config/constants';
import { Link } from 'gatsby';
import React from 'react';

const Header = () => {
  const title1 = PAGE_CONTENT.title_1;
  const title2 = PAGE_CONTENT.title_2;
  const title3 = PAGE_CONTENT.title_3;

  return (
    <header className="py-3 dark:text-white">
      <div className="container flex justify-between">
        <Link className="rounded bg-purple-100 p-1 font-semibold text-purple-500" to="/">
          <span className="mr-1 font-normal">{`<`}</span>
          built for dev
          <span className="ml-1 font-normal">{`>`}</span>
        </Link>
        <nav className="my-auto flex space-x-6 text-base">
          <Link to="/">Themes</Link>
          <Link to="/">Source</Link>
          <DarkModeButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
