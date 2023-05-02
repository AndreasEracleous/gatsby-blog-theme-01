// root-wrapper.js

import { AnimatePresence } from 'framer-motion';
import React from 'react';

import Layout from './src/components/Layout';

// eslint-disable-next-line import/prefer-default-export
export const rootWrapper = ({ element, props }) => (
  <Layout {...props}>
    <AnimatePresence mode="wait">{element}</AnimatePresence>
  </Layout>
);
