import React from 'react'
import Aside from './aside'

const Layout = ({ children }) => (
  <React.Fragment>
    <Aside />
    { children }
  </React.Fragment>
)