import React from 'react'
import Aside from './Aside'

const Layout = ({ children }) => (
  <React.Fragment>
    <Aside />
    { children }
  </React.Fragment>
)