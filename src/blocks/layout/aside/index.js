import React from 'react'
import styled from 'styled-components'
import { NIKENAME, AVATAR, BIO, SOCICAL_LIST } from '../../../constant'
import SocicalList from '../../socical-list'

import Row from 'antd/lib/row'

const Container = styled(Row)`
  border-right: 5px solid #FF9800;
  padding: 0 16px;
  width: 260px;
  height: 100vh;
  text-align: center;
  flex-direction: column;
`

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

const NikeNameSection = () => (
  <Section>
    <NikeName>{ NIKENAME ? NIKENAME : '' }</NikeName>
  </Section>
)

const AvatarSection = () => (
  <Section>
    <Avatar src={AVATAR ? AVATAR : ''} />
  </Section>
)

const DescriptionSection = () => (
  <Section>
    <Description>
      { BIO ? BIO : '' }
    </Description>
  </Section>
)

const SocicalSection = () => (
  <Section>
    <SocicalList list={SOCICAL_LIST ? SOCICAL_LIST : []} />
  </Section>
)

const Aside = () => (
  <Container type='flex' justify='center' align='middle' >
    <AvatarSection />
    <NikeNameSection />
    <DescriptionSection />
    <Division />
    <SocicalSection />
  </Container>
)

export default Aside