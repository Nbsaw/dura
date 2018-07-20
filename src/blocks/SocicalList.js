import React from 'react'
import styled from 'styled-components'
import A from 'elements/A'

const Navigation = styled.ul`
  padding: 0;
  margin: 0;
  li {
    display: inline-block;
    list-style: none;
    margin: 0 5px;
  }
`

const SocicalList = ({ list }) => (
  <Navigation>
    {
      list.map((item, idx) => {
        return (
          <li key={idx}>
            <A href={item.link}>
              { item.key }
            </A>
          </li>
        )
      })
    }
  </Navigation>
)

export default SocicalList