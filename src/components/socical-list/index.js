import React from 'react'
import styled from 'styled-components'

const Navigation = styled.ul`
  padding: 0;
  animation: .4s rubberBand 1s;
  li {
    display: inline-block;
    list-style: none;
    &:after {
      content: '/';
      margin: 0 12px;
    }
    &:last-child:after {
      content: '';
    }
  }
`

const IconContainer = styled.div`
  font-size: 1.12rem;
  display: inline-block;
  margin-right: 8px;
`

const Link = styled.a`
  font-size: 1.12rem;
  color: #7b8993;
`

const SocicalList = ({ list }) => (
  <Navigation>
    {
      list.map((item, idx) => {
        return (
          <li key={idx}>
            <IconContainer children={ item.icon } />
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