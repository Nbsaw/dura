import React from 'react'
import styled from 'styled-components'

const Navigation = styled.ul`
  padding: 0;
  margin: 0;
  li {
    display: inline-block;
    list-style: none;
    margin: 0 5px;
  }
`

const Link = styled.a`
  font-size: 20px;
  color: #222222;
  border-bottom: 1px solid #eeeeee;
`

const SocicalList = ({ list }) => (
  <Navigation>
    {
      list.map((item, idx) => {
        return (
          <li key={idx}>
            <Link href={item.link}>
              { item.key }
            </Link>
          </li>
        )
      })
    }
  </Navigation>
)

export default SocicalList