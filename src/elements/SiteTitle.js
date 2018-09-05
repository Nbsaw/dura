import React from 'react';
import { Helmet } from 'react-helmet';
import { me } from 'constant';

const { USERNAME } = me;

const SiteTitle = ({ children }) => (
  <Helmet>
    <title>
      {' '}
      {USERNAME} | {children}
    </title>
  </Helmet>
);

export default SiteTitle;
