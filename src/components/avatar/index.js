import React from 'react'
import styled from 'styled-components'

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border: 5px solid #c4c4c4;
  padding: 5px;
  border-radius: 50%;
  animation: 1s bounceIn;
  &:hover {
    
  }
`

const Component = ({ src }) => (
  <Avatar src={src} />
)

export default Component