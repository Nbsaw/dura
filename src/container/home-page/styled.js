import styled from 'styled-components'

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  padding: 4px;
  box-shadow: 1px 1px 1px 1px #d1d2d6db;
  border-radius: 50%;
  animation: 1s bounceIn;
  &:hover {
    /* animation: 1s shake; */
  }
`

const NikeName = styled.h1`
  margin: 0;
`

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Section = styled.div`
  padding: 8px 0;
`

const Description = styled.div`
  color: #505050;
  font-size: 16px;
`

const Division = styled.hr`
  height: 1px;
  border: 0;
  width: 80%;
  max-width: 300px;
  background-image: linear-gradient(-2deg,transparent,#d5d5d5,transparent);
`

const Footer = styled.footer`
  color: #a2a2a2;
  font-size: 18px;
`

export {
  Avatar,
  NikeName,
  Container,
  Section,
  Description,
  Division,
  Footer
}