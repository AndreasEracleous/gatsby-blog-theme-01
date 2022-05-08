import React from "react";
import { Link } from "gatsby";
import { SITE_METADATA } from "../config/constants";

const Header = () => {
  const title = SITE_METADATA["title"];

  return (
    <header className="flex py-9">
      <Link className="text-2xl tracking-wide" to="/">
        <span className="text-black font-semibold">{title}</span>
      </Link>
    </header>
  );
};

export default Header;
