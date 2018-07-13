import React from 'react'
import {Helmet} from "react-helmet";
import { USERNAME } from 'constant'

const SiteTitle = ({ children }) => (
  <Helmet>
    <title> { USERNAME } | { children }</title>
  </Helmet>
)

export default SiteTitle