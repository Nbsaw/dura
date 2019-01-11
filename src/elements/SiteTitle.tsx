import React from 'react';
import { Helmet } from 'react-helmet';
import { me } from '../constant';

const { USERNAME } = me;

interface SiteTitleParms {
  children: string;
}

const SiteTitle = ({ children }: SiteTitleParms) => (
  <Helmet>
    <title>
      {' '}
      {USERNAME} | {children}
    </title>
  </Helmet>
);

export default SiteTitle;
