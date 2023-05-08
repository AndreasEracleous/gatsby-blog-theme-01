// src/components/LanguageSwitcher.js
import { Link } from 'gatsby';
import React from 'react';

const LanguageSwitcher = () => (
  <ul className="grid-gap flex flex-col">
    <li>
      <Link to="/" language="en">
        EN
      </Link>
    </li>
    <li>
      <Link to="/" language="de">
        DE
      </Link>
    </li>
  </ul>
);

export default LanguageSwitcher;
