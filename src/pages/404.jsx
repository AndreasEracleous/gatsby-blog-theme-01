import React from 'react';
import UniversalLink from '../components/UniversalLink';

const NotFound = () => (
  <div className="border-3 my-5 rounded-xl border border-slate-600 p-10 text-center uppercase shadow-lg">
    <h1 className="text-bold">Oops, that's a 404</h1>
    <h2 className="h1">The page you are looking for does not exist.</h2>
    <UniversalLink className="btn" to="/">
      GO BACK TO HOMEPAGE
    </UniversalLink>
  </div>
);

export default NotFound;
