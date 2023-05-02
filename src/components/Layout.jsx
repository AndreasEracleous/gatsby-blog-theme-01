import { ThemeProvider } from 'context/theme';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from './Footer';
import Header from './Header';

const LayoutInner = ({ children }) => (
  <div className="flex min-h-screen flex-col dark:bg-gray-800 dark:text-white">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

LayoutInner.propTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = (props) => (
  <ThemeProvider>
    <LayoutInner {...props} />
  </ThemeProvider>
);

export default Layout;
