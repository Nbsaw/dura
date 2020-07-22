import React from "react";
import Head from "next/head";
import { me } from "../../constant";

const { USERNAME } = me;

interface SiteTitleParms {
  children: string;
}

const SiteTitle = ({ children }: SiteTitleParms) => (
  <Head>
    <title>
      {USERNAME} | {children}
    </title>
  </Head>
);

export default SiteTitle;
